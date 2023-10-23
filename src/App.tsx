import React from "react";
import "./App.css";
import RegistrationForm from "./components/RegistrationForm";
import { Global } from "./components/styles/Global";

function App() {
  return (
    <>
      <Global />
      <RegistrationForm></RegistrationForm>
    </>
  );
}

export default App;
