const chatroom = new Chatroom('gaming', 'shaun');
// console.log(chatroom);
// chatroom.addChat('hello everyone')
//   .then(() => console.log('chat added'))
//   .catch(err => console.log(err));
chatroom.getChats((data) => {
  console.log(data);
});