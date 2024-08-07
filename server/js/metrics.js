var Class = require("./lib/class"),
  _ = require("underscore"),
  log = require("log"),
  Memcached = require("memcached"); // memcached 모듈 사용
//   log = require("./log"); // log 모듈 추가

module.exports = Metrics = Class.extend({
  init: function (config) {
    var self = this;

    this.config = config;
    this.client = new Memcached(
      config.memcached_host + ":" + config.memcached_port
    );

    this.isReady = false;

    this.client.connect(
      config.memcached_host + ":" + config.memcached_port,
      function (err, conn) {
        if (err) {
          log.error("Metrics: memcached client connection error", err);
          return;
        }
        log.info(
          "Metrics enabled: memcached client connected to " +
            config.memcached_host +
            ":" +
            config.memcached_port
        );
        self.isReady = true;
        if (self.ready_callback) {
          self.ready_callback();
        }
      }
    );
  },

  ready: function (callback) {
    this.ready_callback = callback;
  },

  updatePlayerCounters: function (worlds, updatedCallback) {
    var self = this,
      config = this.config,
      numServers = _.size(config.game_servers),
      playerCount = _.reduce(
        worlds,
        function (sum, world) {
          return sum + world.playerCount;
        },
        0
      );

    if (this.isReady) {
      // Set the number of players on this server
      this.client.set(
        "player_count_" + config.server_name,
        playerCount,
        0,
        function (err) {
          if (err) {
            log.error("Metrics: Error setting player count", err);
            return;
          }
          var total_players = 0;

          // Recalculate the total number of players and set it
          _.each(config.game_servers, function (server) {
            self.client.get(
              "player_count_" + server.name,
              function (err, result) {
                if (err) {
                  log.error("Metrics: Error getting player count", err);
                  return;
                }
                var count = result ? parseInt(result) : 0;

                total_players += count;
                numServers -= 1;
                if (numServers === 0) {
                  self.client.set(
                    "total_players",
                    total_players,
                    0,
                    function (err) {
                      if (err) {
                        log.error("Metrics: Error setting total players", err);
                        return;
                      }
                      if (updatedCallback) {
                        updatedCallback(total_players);
                      }
                    }
                  );
                }
              }
            );
          });
        }
      );
    } else {
      log.error("Memcached client not connected");
    }
  },

  updateWorldDistribution: function (worlds) {
    this.client.set(
      "world_distribution_" + this.config.server_name,
      worlds,
      0,
      function (err) {
        if (err) {
          log.error("Metrics: Error setting world distribution", err);
        }
      }
    );
  },

  getOpenWorldCount: function (callback) {
    this.client.get(
      "world_count_" + this.config.server_name,
      function (err, result) {
        if (err) {
          log.error("Metrics: Error getting world count", err);
          callback(null);
          return;
        }
        callback(result);
      }
    );
  },

  getTotalPlayers: function (callback) {
    this.client.get("total_players", function (err, result) {
      if (err) {
        log.error("Metrics: Error getting total players", err);
        callback(null);
        return;
      }
      callback(result);
    });
  },
});
