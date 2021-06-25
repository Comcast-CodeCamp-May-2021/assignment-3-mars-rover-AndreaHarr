     class Rover {
  constructor(position, mode = 'NORMAL', generatorWatts=110) {
    this.position = position;


    this.mode = mode;


    this.generatorWatts = generatorWatts;

  };



  receiveMessage(messageObject){ 

    let messageName = messageObject.name;
    let commandObjectArray = messageObject.commands;
    let returnObject = {};
    returnObject ['message'] = messageName;
    let resultsArray = [];
    returnObject['results'] = resultsArray;
    
    
    for (let i = 0; i < commandObjectArray.length; i++) {
      let commandObject = commandObjectArray[i];
      let commandType = commandObject.commandType;
      let commandValue = commandObject.value;
      let resultsObject = {};
      if (commandType === "STATUS_CHECK") {
        resultsObject['completed'] = true;
        resultsObject['roverStatus'] = {
          position: this.position,
          mode: this.mode,
          generatorWatts: this.generatorWatts
        } 
      } else if(commandType === "MODE_CHANGE"){
        let commandValue = 'LOW_POWER';
        resultsObject['completed'] = false;
        resultsObject['roverStatus']={
          position: this.position,
        }
      } else if(commandType === "MODE_CHANGE"){
        let commandValue = 'NORMAL';
        resultsObject['completed'] = true;
        resultsObject['roverStatus']={
          position: this.position,
    };// right now you are pushing commandObject into the resultsArray, but there's another object 
        };  // that you should be adding into your resultsArray
      resultsArray.push(resultsObject);
    };

    // you can use response or outputObject or anything you'd like for the variable name!
    //message: // you're responsible for the value of this property! This is what you're testing in your test


    //loop and if/else might go here

    //returnObject['results'] = resultsArray;
    return returnObject;  //make sure to return your NEW OBJECT 


  };

};
module.exports = Rover;