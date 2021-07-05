import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useHistory } from "react-router-dom";
import Field from "../components/Field";

const Form = ({ onSubmit }) => {
  const username = useState();
  const password = useState();
  const handleSubmit = (e) => {
    e.preventDefault();

    // const data = {
    //   username: usernameRef.current.value,
    //   password: passwordRef.current.value,
    // };
    // onSubmit(data);
  };
  let history = useHistory();

  //   const [showResults, setShowResults] = useState(false);
  //   const onClick = () => setShowResults(true);
  //   const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
      <div id="bank">
        <i className="fas fa-university"></i>
      </div>
      <div className="avb">
        <h1>
          <b>
            AV<span>B</span>
          </b>
        </h1>
      </div>
      <form className="formStyle">
        {/* onSubmit={handleSubmit} */}
        <Field
          className="username"
          useState={username}
          label="Username:"
          type="text"
        />
        <Field
          className="password"
          useState={password}
          label="Password:"
          type="password"
        />
        {/* <div>{showResults ? <App onClick={onClick} /> : null}</div> */}

        <button
          className="submitStyle"
          type="submit"
          onClick={() => {
            history.push("/app");
          }}
          //   onClick={onClick}
        >
          Log in
        </button>
      </form>
    </div>
  );
};

const Login = () => {
  //   const handleSubmit = (data) => {
  //     const json = JSON.stringify(data, null, 4);
  //     console.clear();
  //     console.log(json);
  //   };

  return (
    <div className="appStyle">
      <Form
      // onSubmit={handleSubmit}
      />
    </div>
  );
};

const root = document.querySelector("#root");
ReactDOM.render(<Login />, root);

export default Login;
