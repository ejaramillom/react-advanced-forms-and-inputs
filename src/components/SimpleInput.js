import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = event => {
    event.preventDefault();

    console.log(enteredName);
    // we could use useRef hook in case we might want to handle focus
    // or because we are going to validate only after submit
    // it is not good idea to do something like

    // nameInputRef.current.value = ''; BAD IDEA, DO NOT MANIPULATE THE DOM
    setEnteredName('');
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" onChange={nameInputChangeHandler}/>
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
