'use strict';
import { initiateBot } from './src/bot';

module.exports.bot = async event => {
  initiateBot();
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: '✅ Bot is started ',
        input: event,
      },
      null,
      2
    ),
  };
};
