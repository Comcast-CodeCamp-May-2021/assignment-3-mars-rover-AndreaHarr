class Command {
   constructor(commandType, value) {
     
     this.commandType = commandType;
     if (!commandType) {
       throw Error("Command type required.");
     }
   
     this.value = value;
    //  if (!value) {
    //    throw Error("Value required.");
    //  }
 }
}
 
 module.exports = Command;
