import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';


export default function DeletePost() {
  const { id } = useParams();


  // useEffect(() => {
    // DELETE request using fetch with async/await
    const deletePost = () => {
      fetch('http://localhost:4000/post/' + id, {
        method: 'DELETE',
        
      }).then (() => {
        <Navigate to ={'/'}/>;
      })
      
    }

    // deletePost();
  // }, []);

 
  

}
