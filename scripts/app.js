const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');

newChatForm.addEventListener('submit', e => {
  e.preventDefault();
  const message = newChatForm.message.value.trim();
  chatroom.addChat(message)
    .then(() => newChatForm.reset())
    .catch(err => console.log(err));
});

newNameForm.addEventListener('submit', () => {
  e.preventDefault();
  const newName = newNameForm.name.value.trim();
  chatroom.updateName(newName);

  newNameForm.reset();

});

const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('gaming', 'shaun');
// console.log(chatroom);
// chatroom.addChat('hello everyone')
//   .then(() => console.log('chat added'))
//   .catch(err => console.log(err));
chatroom.getChats(data => chatUI.render(data));