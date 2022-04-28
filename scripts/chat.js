class Chatroom {
  constructor(room, username){
    this.room = room;
    this.username = username;
    this.chats = db.collection('chats');
  }
  async addChat(message){
      const now = new Date();
      const chat = {
        created_at: firebase.firestore.Timestamp.fromDate(now),
        username: this.username,
        message,
        room: this.room,
      };
      const response = await this.chats.add(chat);
      return response;
  }
  getChats(){
    this.chats
      .onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          if(change.type === 'added'){
            //update the ui
          }
        })
      })
  }
}

const chatroom = new Chatroom('gaming', 'shaun');
// console.log(chatroom);
chatroom.addChat('hello everyone')
  .then(() => console.log('chat added'))
  .catch(err => console.log(err));