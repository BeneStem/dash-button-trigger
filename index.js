'use strict';

const config = require('./config.json');

const dashButton = require('node-dash-button');

const dash = dashButton(config.dashButtonMacAddresses, null, null, 'all');

dash.on('detected', () => {
  console.log('it works!!');
});
