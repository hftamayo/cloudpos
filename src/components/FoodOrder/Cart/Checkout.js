import { useRef, useState } from "react";

import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isNotNineChars = (value) => value.trim().length !== 9;

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    clientName: true,
    clientCellPhone: true,
    clientDelivAddress: true,
    clientMethodPayment: true,
  });

  //estos objetos sirven para no capturar todos los keystrokes durante dataInput
  const clientNameRef = useRef();
  const clientCellPhoneRef = useRef();
  const clientDelivAddressRef = useRef();
  const clientMethodPaymentRef = useRef();

  const ConfirmHandler = (event) => {
    event.preventDefault();

    const enteredName = clientNameRef.current.value;
    const enteredCellPhone = clientCellPhoneRef.current.value;
    const enteredDelivAddress = clientDelivAddressRef.current.value;
    const enteredMethodPayment = clientMethodPaymentRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredCellPhoneIsValid = !isNotNineChars(enteredCellPhone);
    const enteredDelivAddressIsValid = !isEmpty(enteredDelivAddress);
    const enteredMethodPaymentIsValid = !isEmpty(enteredMethodPayment);

    setFormInputsValidity({
      clientName: enteredNameIsValid,
      clientCellPhone: enteredCellPhoneIsValid,
      clientDelivAddress: enteredDelivAddressIsValid,
      clientMethodPayment: enteredMethodPaymentIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredCellPhoneIsValid &&
      enteredDelivAddressIsValid &&
      enteredMethodPaymentIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      clientName: enteredName,
      clientCellPhone: enteredCellPhone,
      clientDelivAddress: enteredDelivAddress,
      clientMethodPayment: enteredMethodPayment,
    });
  };

  const nameControlClasses = `${classes.control} ${
    formInputsValidity.clientName ? "" : classes.invalid
  }`;
  const phoneControlClasses = `${classes.control} ${
    formInputsValidity.clientCellPhone ? "" : classes.invalid
  }`;
  const delivAddressControlClasses = `${classes.control} ${
    formInputsValidity.clientDelivAddress ? "" : classes.invalid
  }`;
  const methodPaymentControlClasses = `${classes.control} ${
    formInputsValidity.clientMethodPayment ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={ConfirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="clientName">Client's Name</label>
        <input type="text" id="clientName" ref={clientNameRef} />
        {!formInputsValidity.clientName && <p>Please Enter a valid Name</p>}
      </div>
      <div className={phoneControlClasses}>
        <label htmlFor="clientCellPhone">Client's Cell Phone Number</label>
        <input type="text" id="clientCellPhone" ref={clientCellPhoneRef} />
        {!formInputsValidity.clientCellPhone && (
          <p>Please Enter a 8 digits numbers</p>
        )}
      </div>
      <div className={delivAddressControlClasses}>
        <label htmlFor="clientDelivAddress">Delivery Address</label>
        <input
          type="text"
          id="clientDelivAddress"
          ref={clientDelivAddressRef}
        />
        {!formInputsValidity.clientDelivAddress && (
          <p>Please Enter a valid address</p>
        )}
      </div>
      <div className={methodPaymentControlClasses}>
        <label htmlFor="clientMethodPayment">Method of Payment</label>
        <input type="text" id="clientMethodPayment" ref={clientMethodPaymentRef} />
        {!formInputsValidity.clientName && (
          <p>Please choose a valid payment method</p>
        )}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button>Confirm Order</button>
      </div>
    </form>
  );
};

export default Checkout;
