import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Home';
import Addpost from './Addpost';
import { useState } from 'react';
import Edit from './Edit';

function App() {

  const [posts, setPosts] = useState([])

  function addnewPost(title,content){
    let newPost = {
      id : new Date().getTime(),
      title : title,
      content : content
    }
    setPosts([...posts, newPost])
   
  }

  function deletPost(id){
    setPosts(posts.filter((el)=>(
    el.id !== id
    )))
        }
  return (
    <Router>
      <div className="App">
     <Routes>
      <Route path = "/" element = {<Home posts={posts} deletPost={deletPost} />} ></Route>

      <Route path = "/add" element = {<Addpost addnewPost = {addnewPost}/>}></Route>
        
      <Route path='/edit/:id' element={<Edit/>} ></Route>
     </Routes>
     </div>
    </Router>
  );
}

export default App;