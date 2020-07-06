import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let users = {
  user1: {
    name: "Vasya",
    avatar: "https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg",
    email: "Vasya228@mail.ru",
    description: "It is Vasiliy"
  },
  user2: {
    name: "Pasha",
    avatar: "https://www.meme-arsenal.com/memes/b5d2ec8e1ffa887b239fb66a8653dfe6.jpg",
    email: "Paul345@mail.ru",
    description: "Its Pasha"
  }
}

let dialogsData= [
  {
    name: "Andrey",
    id: 1
  },
  {
    name: "Pasha",
    id: 2
  },
  {
    name: "Ivan",
    id: 3
  }
]

let messagesData = [
  {
    id: 1,
    message: "Hi"
  },
  {
    id: 2,
    message: "what's up man?"
  },
  {
    id: 3,
    message: "By"
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

ReactDOM.render(
  <React.StrictMode>
    <App users={users} dialogsData={dialogsData} messagesData={messagesData} postsData={postsData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
