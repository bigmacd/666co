var Botkit = require('botkit');
var https = require('https');

var messages = [ '',
                 '',
                 '',
                 '',
                 '',
                 '',
                 '',
                 ''];

var controller = Botkit.slackbot();

controller.hears(["cisco", "Cisco", "quicksilver", "Quicksilver", "QuickSilver", "cbqos", "CBQOS", "CbQoS", "CbQOS", / ^.{0,}666co.{0,}$/], ["direct_message","direct_mention","mention","ambient"],function(bot,message) {
  // do something to respond to message
  // all of the fields available in a normal Slack message object are available
  // https://api.slack.com/events/message
    reply(message);
});


var bot = controller.spawn({
  token: require('./config').token
});


bot.startRTM(function(err,bot,payload) {
  if (err) {
    throw new Error('Could not connect to Slack');
  }
});


function reply(message, answer) {
  messageIndex = Math.floor((Math.random() * messages.length));
  var answer = messages[messageIndex]
  bot.reply(message, answer);
}

