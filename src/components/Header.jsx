import "./Header.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { appContext } from "../App";
export default function Header() {
  const { user, setUser } = useContext(appContext);
  const PATH = process.env.REACT_APP_PATH
  return (
    <div className="App-Header-Row">
      <div>React Store</div>
      <div>
        <Link to={`${PATH}/`}>Home</Link> 
        |<Link to={`${PATH}/cart`}>Cart</Link> |
        {user.email === "" ? (
          <Link to={`${PATH}/login`}>Login</Link>
        ) : (
          <Link
            to={`${PATH}/login`}
            onClick={() =>
              setUser({ ...user, name: "", email: "", password: "" })
            }
          >
            Logout
          </Link>
        )}
      </div>
    </div>
  );
}
