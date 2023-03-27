import { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { formatISO9075 } from 'date-fns';
import {UserContext} from "../UserContext";
import {Link} from 'react-router-dom';
import { Navigate } from 'react-router-dom';

export default function PostPage() {
  const [postInfo, setPostInfo] = useState(null);
  const { id } = useParams();
  const { userInfo } = useContext(UserContext);
  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setPostInfo(postInfo);
      });
    });
  }, []);
  if (!postInfo) return '';

   const deletePost = () => {
     fetch('http://localhost:4000/post/'+ id, {
       method: 'DELETE',
     }).then(() => {
       <Navigate to={'/'} />;
     });
   };


  return (
    <div className='post-page'>
      <h1>{postInfo.title}</h1>
      <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
      <div className='author'>by @{postInfo.author.username}</div>
      {userInfo.id === postInfo.author._id && (
        <div className='edit-row'>
          <Link className='edit-btn' to={`/edit/${postInfo._id}`}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'
              />
            </svg>
            Edit this post
          </Link>

          <Link className='delete-btn'  onClick = {deletePost}>
            <svg
              
              viewBox='0 0 1024 1024'
              fill='#fff'
              class='icon'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
              strokeLinecap='round'
                strokeLinejoin='round'
                d='M32 241.6c-11.2 0-20-8.8-20-20s8.8-20 20-20l940 1.6c11.2 0 20 8.8 20 20s-8.8 20-20 20L32 241.6zM186.4 282.4c0-11.2 8.8-20 20-20s20 8.8 20 20v688.8l585.6-6.4V289.6c0-11.2 8.8-20 20-20s20 8.8 20 20v716.8l-666.4 7.2V282.4z'
                fill=''
              />
              <path
                d='M682.4 867.2c-11.2 0-20-8.8-20-20V372c0-11.2 8.8-20 20-20s20 8.8 20 20v475.2c0.8 11.2-8.8 20-20 20zM367.2 867.2c-11.2 0-20-8.8-20-20V372c0-11.2 8.8-20 20-20s20 8.8 20 20v475.2c0.8 11.2-8.8 20-20 20zM524.8 867.2c-11.2 0-20-8.8-20-20V372c0-11.2 8.8-20 20-20s20 8.8 20 20v475.2c0.8 11.2-8.8 20-20 20zM655.2 213.6v-48.8c0-17.6-14.4-32-32-32H418.4c-18.4 0-32 14.4-32 32.8V208h-40v-42.4c0-40 32.8-72.8 72.8-72.8H624c40 0 72.8 32.8 72.8 72.8v48.8h-41.6z'
                fill=''
              />
            </svg>
           
            Delete this post
          </Link>
        </div>
      )}
      <div classname=' image'>
        <img src={`http://localhost:4000/${postInfo.cover}`} alt='alt' />
      </div>

      <div
        className='content'
        dangerouslySetInnerHTML={{ __html: postInfo.content }}
      />
    </div>
  );
}
