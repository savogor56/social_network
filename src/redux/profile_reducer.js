const add_post = "add-post";
const update_new_post_text = "update-new-post-text";

let initialState = {
  users: {
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
  },
  postsData: [
    {
      id: 1,
      message: "Hi bro, its my first post!! How are u?",
      likesCount: 2,
      avatar: "https://www.meme-arsenal.com/memes/b5d2ec8e1ffa887b239fb66a8653dfe6.jpg"
    },
    {
      id: 2,
      message: "Hi and me too! I'm ok!",
      likesCount: 1,
      avatar: "https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg"
    }
  ],
  newPostText: ""
}



export const profileReducer = (state = initialState, action) => {
  switch(action.type) {       
    case add_post:
      let newPost = {
        id: state.postsData[state.postsData.length - 1].id + 1,
        message: state.newPostText,
        likesCount: 0,
        avatar: state.users.user1.avatar
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost],
        newPostText: ""
      };
    case update_new_post_text: 
      return {
        ...state,
        newPostText: action.newText
      };      
    default: 
      return state;     
  }  
}

export const addPostActionCreator = () => {
  return {
    type: add_post
  }
};

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: update_new_post_text,
    newText: text
  }
};