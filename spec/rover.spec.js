const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');


describe("Rover class", function() {



  //    it("constructor sets command type", function() {
  //      let command = new Command('STATUS_CHECK');
  //      expect(command.commandType).toEqual('STATUS_CHECK');
  //    });

  //    it("constructor sets a value passed in as the 2nd argument", function() {
  //      let command = new Command('MOVE', 20);
  //     expect(command.value).toEqual(20);
  //    });

  //  ) //7 tests here!

  // all of these tests are using if and not it
  
  it ('constructor sets position and default values for the mode and genratorWatts', function() {
   let rover = new Rover(98382); 
    expect(rover.position).toEqual(98382);
    expect(rover.mode).toEqual('NORMAL');
    expect(rover.generatorWatts).toEqual(110);
  });



  it ('response returned by receiveMessage contains name of message', function() {
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let messageName = new Message('Test message with two commands', commands);
    let rover = new Rover(98382);
    let response = rover.receiveMessage(messageName);
    expect(response.message).toEqual('Test message with two commands')
  });



  it ('response returned by receiveMessage includes two results if two commands are sent in the message', function() {
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let messageName = new Message('Test message with two commands', commands);
    let rover = new Rover(98382);
    let response = rover.receiveMessage(messageName);
    expect(response.results.length).toEqual(2);

  });



  it ('responds correctly to status check command', function() {
    let commands = [new Command('STATUS_CHECK')];
    let messageName = new Message('Test with STATUS_CHECK commands', commands);
    let rover = new Rover(98382);
    let response = rover.receiveMessage(messageName);
    expect(response.results[0].roverStatus.position).toEqual(98382);
    expect(response.results[0].roverStatus.mode).toEqual('NORMAL');
    expect(response.results[0].roverStatus.generatorWatts).toEqual(110);
  });
});