
import './App.css';
import React from 'react';
import { Table, Jumbotron, Button } from 'react-bootstrap';
import { Component, useState } from 'react'
import Movies from './components/Movies'
import Hello from './components/Hello';
import Welcome from './components/Welcome';
import Message from './components/Message';
import ParentComponent from './components/ParentComponent';
import NameList from './components/NameList';
import Form from './components/Form';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import Header from './components/Header';
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import Dashboard from './components/DashBoard';
import Layout from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact';
import NoPage from './components/NoPage';
import Register from './components/Register'
import LogIn from './components/LogIn';

const App = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies/>}/>
          <Route path="register" element={<PostList />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<LogIn />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
    
    
    
    // <BrowserRouter>
    //   <Header />
    //   <Switch>
    //     <Route exact path="/dashboard">
    //       <Dashboard />
    //     </Route>
    //   </Switch>
    // </BrowserRouter>
  )
}
// class App extends Component {
//   render() {
//     return (
//       <div className='App'>
//         <Header />
{/* <PostForm /> */ }
{/* <PostList /> */ }
{/* <Form /> */ }
{/* <NameList /> */ }
{/* <ParentComponent /> */ }
{/* <Movies />
        <Welcome /> */}
{/* <Hello name="Bruce" heroname="Batman">
          <p>This is children props</p>
        </Hello>
        <Hello name="Clark" heroname="Superman">
          <button>Action</button>
        </Hello> */}

{/* <Message /> */ }
// </div>
//     );
//   }
// }


export default App;
