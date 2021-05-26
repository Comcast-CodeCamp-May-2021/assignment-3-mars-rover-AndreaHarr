
class Message {
  constructor(name , commands) {
    
    this.name = name;
    if (!name) {
      throw Error("Name required."); 
    
    this.commands = commands;
    if(!commands) {
      throw Error ("Commands required.")
    }
  }
  }
}


module.exports = Message;
