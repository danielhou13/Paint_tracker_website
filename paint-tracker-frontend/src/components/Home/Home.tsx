import React from "react";
import KanbanBoard from "../KanbanBoard/KanbanBoard";

export default function Home({ permissions, loginFunction, user }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <span className="navbar-brand">Paint Availability Kanban Board</span>
          <ul className="navbar-nav">
            <li className="navbar-text">Current User: {user}</li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => loginFunction(false)}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <KanbanBoard
        permissions={permissions}
        loginFunction={loginFunction}
      ></KanbanBoard>
      <footer className="fixed-bottom mt-auto py-2 bg-light">
        All users except for John can edit the stock of paints. The system admin
        Adam can update the permissions and assigned groups of each user to
        allow for different permissions.
      </footer>
    </div>
  );
}
