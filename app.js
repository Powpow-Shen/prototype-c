// To disable socket.io, disable the sockets hook (you'll have to disable the pubsub hook as well)
// This is a replacement for the default app.js file:
 
require('sails').lift({
  hooks: {
    sockets: false,
    pubsub: false
  }
}, function doneLifting (err) { if (err) throw err; });
