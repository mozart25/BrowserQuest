# BrowserQuest rebuild

BrowserQuest is a HTML5/JavaScript multiplayer game experiment.

I am currently rebuilding a game called BrowserQuest, which was developed 12 years ago. In the original git project, some packages are missing or no longer available, so I have replaced them with those currently existing in npm. For example, I replaced websocket-server with socket.io. The game now starts and connects to the server, but there are still several issues, such as the player dying immediately. I will continue to make improvements.

## important
 >> before
  "dependencies": {
    "underscore": ">0"
    , "log": ">0"
    , "bison": ">0"
    , "websocket": ">0"
    , "websocket-server": ">0"
    , "sanitizer": ">0"
    , "memcache": ">0"
  }
>> after 

 "dependencies": {
    "express": "^4.19.2",
    "log": "1.4.0",
    "memcached": "2.2.2",
    "ms": "2.1.2",
    "sanitizer": "0.1.3",
    "socket.io": "2.4.1",
    "underscore": "1.1.7",
    "websocket": "1.0.8"
  }

actually, "express": "^4.19.2" don't need.
but, Node version v0.9.12.

## Documentation

Documentation is located in client and server directories.

To start the game, you need to run it with Node version v0.9.12. In the server folder, run the server with node server/js/main.js, and in the client folder, run ./build.sh in the bin folder to build and connect to the server.

I am currently working on containerizing the application with Docker. After resolving gameplay issues and updating the Node version, I plan to deploy it so that people around the world can play the game again.

## License

Code is licensed under MPL 2.0. Content is licensed under CC-BY-SA 3.0.
See the LICENSE file for details.

## Credits

Created by [Little Workshop](http://www.littleworkshop.fr):

- Franck Lecollinet - [@whatthefranck](http://twitter.com/whatthefranck)
- Guillaume Lecollinet - [@glecollinet](http://twitter.com/glecollinet)

Rebuild by

- Seung Joon Lee(mozartlee28@gmail.com)
