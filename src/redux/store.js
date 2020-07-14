import { profileReducer } from "./profile_reducer"
import { dialogsReducer } from "./dialogs_reducer"
import { asideReducer } from "./aside_reducer"

let users = {
  user1: {
    id: 1,
    name: "Vasya",
    avatar: "https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg",
    email: "Vasya228@mail.ru",
    description: "It is Vasiliy"
  },
  user2: {
    id: 2,
    name: "Pasha",
    avatar: "https://www.meme-arsenal.com/memes/b5d2ec8e1ffa887b239fb66a8653dfe6.jpg",
    email: "Paul345@mail.ru",
    description: "Its Pasha"
  },
  user3: {
    id: 3,
    name: "Andrey",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRvO35OFDvH2fHI947iBUePk-f2MyDsjVr-Tw&usqp=CAU",
    email: "Andru1488@mail.ru",
    description: "Its Andrey"
  },
  user4: {
    id: 4,
    name: "Ivan",
    avatar: "https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg",
    email: "Ivaness@mail.ru",
    description: "Its Ivan"
  }
}

let dialogsData= [
  {
    name: "Andrey",
    avatar: users.user3.avatar,
    id: 1
  },
  {
    name: "Pasha",
    avatar: users.user2.avatar,
    id: 2
  },
  {
    name: "Ivan",
    avatar: users.user4.avatar,
    id: 3
  }
]

let messagesData = [
  {
    id: 1,
    text: "Hi"
  },
  {
    id: 2,
    text: "what's up man?"
  },
  {
    id: 3,
    text: "By"
  }
]

let postsData = [
  {
    id: 1,
    message: "Hi bro, its my first post!! How are u?",
    likesCount: 2,
    avatar: users.user2.avatar
  },
  {
    id: 2,
    message: "Hi and me too! I'm ok!",
    likesCount: 1,
    avatar: users.user1.avatar
  }
]

let store = {
  _state: {
    profilePage: {
      users: users,
      postsData: postsData,
      newPostText: "Введите текст"
    },
    dialogsPage: {
      dialogsData: dialogsData,
      messagesData: messagesData,
      newMessage: ""
    },
    aside: {
      friends: [
        {
          id: users.user2.id,
          name: users.user2.name,
          avatar: users.user2.avatar
        },
        {
          id: users.user3.id,
          name: users.user3.name,
          avatar: users.user3.avatar
        },
        {
          id: users.user4.id,
          name: users.user4.name,
          avatar: users.user4.avatar
        }
      ]
    }
  },
  _callSubcriber() {
    console.log('state changed');
  },
  getState() {    
    return this._state;
  },  
  subscribe(observer) {
    this._callSubcriber = observer;
  },  
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.aside = asideReducer(this._state.aside, action);
    this._callSubcriber(this._state);
  }
}

export default store;