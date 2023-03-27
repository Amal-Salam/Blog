import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "./UserContext";

export default function Header() {
  const { setUserInfo, userInfo } = useContext(UserContext);
  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function logout() {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
    <header>
      <Link to="/" className="logo">
        {" "}
          The Maven Blog {" "}
      </Link>
      <nav>
        {username && (
          <>
            <Link to="/create">Create New Post</Link>
            <a href onClick={logout}>
              Logout
            </a>
          </>
        )}
        {!username && (
          <>
            <Link to="/login"> Sign In</Link>
            <Link to="/register"> Sign Up </Link>
          </>
        )}
      </nav>
    </header>
  );
}
