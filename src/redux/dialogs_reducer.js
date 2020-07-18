const update_new_message = "update-new-message";
const send_message = "send-message";

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

let initialState = {
  dialogsData: dialogsData,
  messagesData: messagesData,
  newMessage: ""
}

export const dialogsReducer = (state = initialState, action) => {

  switch(action.type) {
    case send_message:
      let newMessage = {
        id: state.messagesData[state.messagesData.length - 1].id + 1,
        text: state.newMessage
      };
      return {
        ...state,
        messagesData: [...state.messagesData, newMessage],
        newMessage: ""
      };
    case update_new_message:
      return {
        ...state,
        newMessage: action.newText
      };
    default:
      return state;
  }  
};

export const updateNewMessageActionCreator = (text) => {
  return {
    type: update_new_message,
    newText: text
  }
};

export const sendMessageActionCreator = () => {
  return {
    type: send_message
  }
};