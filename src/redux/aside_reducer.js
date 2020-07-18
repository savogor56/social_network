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
    name: "Pasha1",
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

let initialState = {
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
  ],
  menu: [
    {
      id: 1,
      name: 'Profile',
      link: '/profile'
    },
    {
      id: 2,
      name: 'Dialogs',
      link: '/dialogs'
    },
    {
      id: 3,
      name: 'News',
      link: '/news'
    },
    {
      id: 4,
      name: 'Music',
      link: '/music'
    },
    {
      id: 5,
      name: 'Settings',
      link: '/settings'
    },
    {
      id: 6,
      name: 'Users',
      link: '/users'
    },
  ]
}

export const asideReducer = (state = initialState, action) => {

  return state;
}