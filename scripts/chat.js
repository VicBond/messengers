class Chatroom {
  constructor(room, username){
    this.room = room;
    this.username = username;
    this.chats = db.collection('chats');
    this.unsub;
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
  getChats(cb){
    this.unsub = this.chats
      .where('room', '==', this.room)
      .orderBy('created_at',)
      .onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          if(change.type === 'added'){
            //update the ui
            cb(change.doc.data());
          }
        });
      });
  }
  updateName(username) {
    this.username = username;
    localStorage.setItem('username', username);
  }
  updateRoom(room) {
    this.room = room;
    console.log('room updated');
    if(this.unsub) {
      this.unsub();
    }
  }
}



// setTimeout(() => {
//   chatroom.updateRoom('gaming');
//   chatroom.updateName('yoshi');
//   chatroom.getChats((data) => {
//   console.log(data);
// });
// chatroom.addChat('hello');
// }, 3000);