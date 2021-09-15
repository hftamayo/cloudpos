import React from "react";
import CardUsers from "../UI/CardUsers";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  const NoData = <li>No users to display</li>;
  const CurrentUsersList = props.users;

  return (
    <CardUsers className={classes.users}>
      <ul>
        {CurrentUsersList.length === 0
          ? NoData
          : CurrentUsersList.map((user) => (
              <li key={user.id}>
                {user.name} ({user.age} years old)
              </li>
            ))}
      </ul>
    </CardUsers>
  );
};

export default UsersList;
