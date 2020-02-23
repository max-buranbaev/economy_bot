'use strict';
import { sendToUser } from './src/bot';

module.exports.bot = async event => {
  const body = JSON.parse(event.body);
  const {chat, text} = body.message;
  try {
    if(text) {
      await sendToUser(chat, text);
    }
    return { statusCode: 200 }
  } catch(e) {
    return {
      statusCode: 500,
      text: e
    }
  }
};
