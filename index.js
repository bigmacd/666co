var Botkit = require('botkit');

var ciscomessages = [ 'Hate is a strong word, but in this case not strong enough.',
                      'Reminds me of an ugly hairless chupacabra, dead and rotting.',
                      "Ever squeeze those glands around a dog's ass? Yep, that green stuff that squirts out.",
                      "Someone is having delusions of adequacy.",
                      "I'd like to say I am happy you're here. I'd like to.",
                      "Mike Rowe's 'Dirty Jobs' hasn't seen anything like this.",
                      'Natural childbirth, of quadruplets, was a breeze in comparison.',
                      'It is like every time you look down the hole of a port-a-potty.',
                      "I didn't attend the funeral, but I sent a nice letter saying I approved of it.",
                      'How can I explain this to you.  Let me get some crayons.',
                      "Remember that scene from 'Apocolypse Now', yeah...",
                      'The slime on the dog food factory floor?  Right under that.',
                      'Sister Ursula, 4th grade elderly nun/teacher, naked.',
                      'Some cause happiness wherever they go; others whenever they go.'];


var controller = Botkit.slackbot();


controller.hears(['cisco', 'Cisco','cbqos', 'cBqos', 'cBQoS', 'CBQoS', 'CBQOS', 'quicksilver', 'quickSilver', 'QuickSilver' ],["mention", "ambient"],function(bot,message) {
  // do something to respond to message
  // all of the fields available in a normal Slack message object are available
  // https://api.slack.com/events/message
  var response = ciscomessages[Math.floor((Math.random() * ciscomessages.length))];
  bot.reply(message, response);
});

var innocentMessages = [
    "What!? I didn't say anything!",
    "**whistles innocently**",
    "I'm sorry, what?",
    "Sorry, I was just mumbling."
]

controller.hears('',["direct_mention", "direct_message"],function(bot,message) {
    var response = innocentMessages[Math.floor((Math.random() * innocentMessages.length))];
    bot.reply(message, response);
});


var bot = controller.spawn({
  //token: require('./config').token
    token: process.env.token
});


bot.startRTM(function(err,bot,payload) {
  if (err) {
    throw new Error('Could not connect to Slack');
  }
});


