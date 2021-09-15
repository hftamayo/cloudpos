import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import ButtonUsers from "../UI/Button/ButtonUsers";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    //console.log(nameInputRef.current.value);//opcion muy util para no leer todas las keyStrokes
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    event.preventDefault();
    if (enteredName.trim().length === 0 && enteredUserAge.trim().length === 0) {
      setError({
        title: "Urgent Attention: Invalid Input",
        message: "Name and Age Data Fields must not be blank",
      });
      return;
    }
    if (enteredName.trim().length <= 5) {
      setError({
        title: "Urgent Attention: Invalid Input",
        message: "Name must be more than 5 characters long",
      });
      return;
    }
    //+enteredPage = casting String->int    
    if (+enteredUserAge < 1 || +enteredUserAge > 70) {
      setError({
        title: "Urgent Attention: Invalid Age Value",
        message: "Please enter a valid age (greater than 0 and less than 70)",
      });
      return;
    }
    props.onAddUser(enteredName, enteredUserAge);
    //esta manipulacion del DOM no se aconseja utilizarla con Refs
    nameInputRef.current.value='';
    ageInputRef.current.value='';
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (years)</label>
          <input
            id="age"
            type="number"
            ref={ageInputRef}
          />
          <ButtonUsers type="submit">Add User</ButtonUsers>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
