const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMssg = document.querySelector('.update-mssg');

newChatForm.addEventListener('submit', e => {
  e.preventDefault();
  const message = newChatForm.message.value.trim();
  chatroom.addChat(message)
    .then(() => newChatForm.reset())
    .catch(err => console.log(err));
});

newNameForm.addEventListener('submit', e => {
  e.preventDefault();
  const newName = newNameForm.name.value.trim();
  chatroom.updateName(newName);

  newNameForm.reset();

  updateMssg.innerText = `Your name was updated to ${newName}`;
  setTimeout(() => updateMssg.innerText = '', 3000);
});

const username = localStorage.username ? localStorage.username : 'user';

const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('gaming', username);
// console.log(chatroom);
// chatroom.addChat('hello everyone')
//   .then(() => console.log('chat added'))
//   .catch(err => console.log(err));
chatroom.getChats(data => chatUI.render(data));