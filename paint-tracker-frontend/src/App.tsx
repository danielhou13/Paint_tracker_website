import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import KanbanBoard from "./components/KanbanBoard/KanbanBoard";
import Login from "./components/Login/Login";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [permissions, setPermissions] = useState([]);

  const LoginFunction = (isLoggedIn) => {
    setLoggedIn(isLoggedIn);
  };

  const permissionsRetrieve = (listOfPermissions) => {
    console.log(listOfPermissions.filter((perm) => perm.includes("paint")));
    // setPermissions(listOfPermissions);.filter((perm) => perm.contains("paint")
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            loggedIn ? (
              <KanbanBoard permissions={permissions} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/login"
          element={
            !loggedIn ? (
              <Login
                setLoggedIn={LoginFunction}
                setPermissions={permissionsRetrieve}
              />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
