const chatList = document.querySelector('.chat-list');

const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('gaming', 'shaun');
// console.log(chatroom);
// chatroom.addChat('hello everyone')
//   .then(() => console.log('chat added'))
//   .catch(err => console.log(err));
chatroom.getChats(data => chatUI.render(data));