class Rover {
   constructor(position, mode, generatorWatts) {
   this.position = position;
   if (!position) {
     throw Error ("Position required.");

   this.mode = mode;
   if (!mode) {
     throw Error("Mode required.");

   this.generatorWatts = generatorWatts (110);
   if(!generatorWatts) {
     throw Error ("Generator watts required.");
   }  
   }  
  }
}
}
module.exports = Rover;