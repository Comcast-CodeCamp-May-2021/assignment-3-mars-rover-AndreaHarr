const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {

  
//   it("throws error if command type is NOT passed into constructor as the first parameter", function() {
//     expect( function() { new Command();}).toThrow(new Error('Command type required.'));
//   });

//   it("constructor sets command type", function() {
//     let command = new Command('STATUS_CHECK');
//     expect(command.commandType).toEqual('STATUS_CHECK');
//   });

//   it("constructor sets a value passed in as the 2nd argument", function() {
//     let command = new Command('MOVE', 20);
//     expect(command.value).toEqual(20);
//   });

// })// 7 tests here!


let rover = new Rover (123);
it('constructor sets position and default values for the mode and genratorWatts', function(){
  expect(rover.position).toEqual(123);
  expect(rover.mode).toEqual('NORMAL');
  expect(rover.generatorWatts).toEqual(110);
});



it('response returned by receiveMessage contains name of message', function(){
  let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
  let rover = new Rover(98382);
  let response =rover.receiveMessage(message);
  expect(response.message).toEqual('Test message with two commands')
});



it('repsonse returned by receiveMessage includes two results if two commands are sent in the message', function(){
  let commands = [new Command ('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
  let message = new Message('Test message with two commands', commands);
  let rover = new rover(98382);
  let response = rover.receiveMessage(message);
  expect(response.results.length).toEqual(2);

});



it('responds correctly to status check command', function(){
  let commands = [new Command('STATUS_CHECK')];
  let message = new Message ('Test with STATUS_CHECK commands' , commands);
  let rover = new Rover(98382);
  let response = rover.receiveMessage(message);
  expect(response.results[0].roverStatus.position).toEqual(98382);
  expect(response.results[0].rover.mode).toEqual('NORMAL');
  expect(response.results[0].roverStatus.generatorWatts).toEqual(110);
});