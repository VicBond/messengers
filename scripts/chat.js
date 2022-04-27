class Chatroom {
  constructor(room, username){
    this.room = room;
    this.username = username;
    this.chats = db.collection('chats');
  }
  async addChat(message){
      const now = new Date();
      const chat = {
        created: firebase.firestore.Timestamp.fromDate(now),
        username: this.username,
        message,
        room: this.room,
      };
      
  }
}

const chatroom = new Chatroom('gaming', 'shaun');
console.log(chatroom);