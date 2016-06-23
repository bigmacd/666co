var Botkit = require('botkit');
var https = require('https');

var ciscomessages = [ 'Hate is a strong word, but in this case not strong enough.',
                      'Reminds me of an ugly hairless chupacabra, dead and rotting.'];

var cbqosmessages = [ "Mike Rowe's 'Dirty Jobs' hasn't seen anything like this.",
                      'Natural childbirth, of quadruplets, was a breeze in comparison.'];

var qsmessages = [ "Remember that scene from 'Apocolypse Now', yeah...",
                   'The slime on the dog food factory floor?  Right under that.'];


var controller = Botkit.slackbot();

controller.hears('',["direct_mention", "mention", "direct_message"],function(bot,message) {
  // do something to respond to message
  // all of the fields available in a normal Slack message object are available
  // https://api.slack.com/events/message
  var wasSaid = message['text'];
  var response = '';
  if (/\b[c|C]isco\b/.test(wasSaid)) {
    response = ciscomessages[Math.floor((Math.random() * ciscomessages.length))];
  }
  else if (/\b[c|c][b|B][q|Q][o|O][s|S]\b/.test(wasSaid)) {
    response = cbqosmessages[Math.floor((Math.random() * cbqosmessages.length))];
  }
  else if (/\b[q|Q]uick[s|S]ilver\b/.test(wasSaid)) {
    response = qsmessages[Math.floor((Math.random() * qsmessages.length))];
  }
  bot.reply(message, response);
});


var bot = controller.spawn({
  token: require('./config').token
});


bot.startRTM(function(err,bot,payload) {
  if (err) {
    throw new Error('Could not connect to Slack');
  }
});


