const assert = require('assert');
const uuid   = require('uuid/v1');

const {
  sendNotification
} = require('../../service/notification');

const listener = (emitter) => async (event) => {

  try{

    const {
      payload
    } = event;
  
    assert(payload, 'event bad format');

    const {
      orderId,
      items,
      detail
    } = payload;

    assert(orderId, 'event bad format');

    const {
      total,
      msg
    } = detail;

    assert(orderId, 'event bad format');

    //Send request.
    const result = await sendNotification('mock',msg);
    console.log('Flow end, notification sent:', result);    

  } catch(err){
    console.log('Error:',err);
  }

}
  
module.exports = listener;