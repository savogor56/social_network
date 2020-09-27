const SEND_MESSAGE = "SEND_MESSAGE";

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

export type MessagesDataType = {
  id: number
  text: string
}

export type DialogsDataType = {
  id: number
  name: string
  avatar: string
}

const initialState = {
  dialogsData: dialogsData as Array<DialogsDataType>,
  messagesData: messagesData as Array<MessagesDataType>
}

type ActionType = SendMessageType

export const dialogsReducer = (state = initialState, action: ActionType): typeof initialState => {

  switch(action.type) {
    case SEND_MESSAGE:
      let newMessage = {
        id: state.messagesData[state.messagesData.length - 1].id + 1,
        text: action.payload
      };
      return {
        ...state,
        messagesData: [...state.messagesData, newMessage],
      };
    default:
      return state;
  }  
};

type SendMessageType = {
  type: typeof SEND_MESSAGE
  payload: string
}

export const sendMessage = (newMessage: string) => {
  return {
    type: SEND_MESSAGE,
    payload: newMessage
  }
};