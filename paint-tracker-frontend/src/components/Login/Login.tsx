import axios from "axios";
import React, { useState } from "react";

export default function Login({ setLoggedIn, setPermissions, user }) {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("testtest12345");
  const [errorLogin, setErrorLogin] = useState(false);

  // Get user permissions and set logged in status
  const onButtonClick = () => {
    axios
      .post("http://localhost:8000/api/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        setErrorLogin(false);
        setLoggedIn(response.data.Logged_in);
        if (!!response.data.Permissions) {
          // get permissions' names
          setPermissions(
            response.data.Permissions.permissions_json.map(
              (item) => item.fields.name
            )
          );
        }
        console.log(response.data);
        user(response.data.name);
      })
      .catch((error) => {
        setErrorLogin(true);
      });
  };
  return (
    <div className="mainContainer">
      <div className="titleContainer">
        <div>Login</div>
      </div>
      <br />
      <div className="inputContainer">
        <input
          value={username}
          placeholder="Enter name/'painter'"
          onChange={(ev) => setusername(ev.target.value)}
          className={"inputBox"}
        />
      </div>
      <br />
      <div className="inputContainer">
        <input
          value={password}
          placeholder="Enter your password here"
          onChange={(ev) => setPassword(ev.target.value)}
          className={"inputBox"}
        />
      </div>
      <br />
      <div className="inputContainer">
        <input
          className={"inputButton"}
          type="button"
          onClick={onButtonClick}
          value={"Log in"}
        />
      </div>
      {errorLogin && (
        <div className="alert alert-danger my-3">
          Could not log in message. (Need to implement username/password
          distrinction)
        </div>
      )}
    </div>
  );
}
