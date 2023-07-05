import Header from "./components/Header";
import './App.css';
import Blogs from "./components/Blogs";
import UserBlogs from "./components/UserBlogs";
import BlogDetail from "./components/BlogDetail";
import AddBlog from "./components/AddBlog";

import React, { useEffect } from "react";
import {Route,Routes} from "react-router-dom";
import Auth from "./components/Auth";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store";

function App() {


  const myStyle={
    backgroundImage: "url(https://www.seekpng.com/png/detail/179-1795511_pikachu-angry-barry-face-yellow-facial-expression-mammal.png)",
    height:'100vh',
    marginTop:'-70px',
    fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};



  const dispatch = useDispatch();

  const isLoggedIn = useSelector(state=> state.isLoggedIn);
  // console.log(isLoggedIn);
  useEffect(() => {
    if (localStorage.getItem("userId")) {
      dispatch(authActions.login());
    }
  }, [dispatch]);
  

  return <React.Fragment>
    <div  className="container">
    </div>

    <header>
      <Header/>
    </header>

    <main>
    <Routes>
          {!isLoggedIn ? (
            <Route path="/auth" element={<Auth />} />
          ) : (
            <>
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogs/add" element={<AddBlog />} />
              <Route path="/myBlogs" element={<UserBlogs />} />
              <Route path="/myBlogs/:id" element={<BlogDetail />} />{" "}
            </>
          )}
        </Routes>
    
    </main>

  </React.Fragment>;
}

export default App;
