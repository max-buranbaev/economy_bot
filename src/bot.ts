import * as rp from 'request-promise';
import * as flow from "dotenv-flow";

flow.config();
export async function sendToUser(chat_id, text) {
  const options = {
    method: 'GET',
    uri: `https://api.telegram.org/bot765715761:AAHQujjcLGjy7xt5rV07mVo43TrJr7I3fLM/sendMessage`,
    qs: {
      chat_id,
      text
    }
  };

  return rp(options);
}