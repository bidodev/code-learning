const EventEmitter = require("events");

const emitter = new EventEmitter();
//console.log(emitter);

// Register a listener
emitter.on("messageLogged", () => {
  console.log("Listener called");
});

// Raise an event
emitter.emit("messageLogged"); //emit means making a noise
