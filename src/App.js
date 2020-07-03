import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Aside } from './components/Aside/Aside';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';

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

const App = () => {
  return (
    <BrowserRouter>    
      <div className="app_wrapper">      
        <Header />  
        <Aside />
        <Route path="/profile" render={() => <Profile users={users} postsData={postsData} /> }/>
        <Route exact path="/dialogs" render={()=> <Dialogs messagesData={messagesData} dialogsData={dialogsData} />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
