class Rover {
  constructor(position) {
    this.position = 123;


    this.mode = 'NORMAL';


    this.generatorWatts = 110;

  };



  receiveMessage(messageObject) {

    let messageName = messageObject.name;
    let returnObject = {};
    returnObject ['message'] = messageName;
    let resultsArray = [];

   
    
    for (let i = 0; i < commandObjectArray.length; i++) {
      let commandObject = commandObjectArray[i];
      let commandType = commandObject.commandType;
      let commandValue = commandObject.value;
      let resultsObject = {};
      if (commandType === "Status_Check") {
        resultsObject['completed'] = true;
        resultsObject['roverStatus'] = {
          position: this.position,
          mode: this.mode,
          generatorWatts: this.generatorWatts
        }
      }
      resultsArray.push(commandObject);
    }

    // you can use response or outputObject or anything you'd like for the variable name!
    //message: // you're responsible for the value of this property! This is what you're testing in your test


    //loop and if/else might go here

    returnObject['results'] = resultsArray;
    return returnObject;  //make sure to return your NEW OBJECT 
  };
};
module.exports = Rover;