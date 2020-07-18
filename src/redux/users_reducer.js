const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
      {
        id: 1,
        name: "Vasya",
        avatar: "https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg",
        email: "Vasya228@mail.ru",
        description: "It is Vasiliy",
        followed: true,
        location: {
          city: "Kiev",
          country: "Ukraine"
        }
      },
      {
        id: 2,
        name: "Pasha",
        avatar: "https://www.meme-arsenal.com/memes/b5d2ec8e1ffa887b239fb66a8653dfe6.jpg",
        email: "Paul345@mail.ru",
        description: "Its Pasha",
        followed: false,
        location: {
          city: "Moscow",
          country: "Russia"
        }
      },
      {
        id: 3,
        name: "Andrey",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRvO35OFDvH2fHI947iBUePk-f2MyDsjVr-Tw&usqp=CAU",
        email: "Andru1488@mail.ru",
        description: "Its Andrey",
        followed: true,
        location: {
          city: "Kemerovo",
          country: "Russia"
        }
      },
      {
        id: 4,
        name: "Ivan",
        avatar: "https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg",
        email: "Ivaness@mail.ru",
        description: "Its Ivan",
        followed: false,
        location: {
          city: "London",
          country: "Britain"
        }
      }
    ]
  }


export const usersReducer = (state = initialState, action) => {
  switch(action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if(action.userId === user.id) {
            return {...user, followed: action.followed}
          }
          return user;
        })
      }
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users]
      }           
    default: 
      return state;     
  }  
}

export const followAC = (followed, userId) => {
  return {
    type: FOLLOW,
    followed: !followed,
    userId
    // text: this.followed ? 'Follow' : 'Unfollow'
  }
}

export const setUsersAC = (users) => {
  return {
    type: SET_USERS,
    users
  }
}