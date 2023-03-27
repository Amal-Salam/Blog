import {  Route, Routes } from "react-router-dom";
import "./App.css";
// import Header from "./header";
// import Post from "./post";

import Layout from "./layout";
import HomePage from "./Pages/homePage";
import LoginPage from "./Pages/loginPage";
import RegisterPage from "./Pages/registerPage";
import { UserContextProvider } from "./UserContext";
import CreatePost from "./Pages/createPost";
import PostPage from "./Pages/postPage";
import EditPost from "./Pages/editPost";
// import DeletePost from "./Pages/deletePost";
function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/create' element={<CreatePost />} />
          <Route path='/post/:id' element={<PostPage />} />
          <Route path='/edit/:id' element={<EditPost />} />
          {/* <Route path ='/delete/:id' element={<DeletePost/>}/> */}
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
