import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
// import YoutubeForm from "./components/YoutubeForm";
// import FormikContainer from "./components/FormikContainer";
import LoginForm from "./components/LoginForm";
// import RegistrationForm from "./components/RegistrationForm";
// import EnrollmentForm from "./components/EnrollmentForm";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        {/* <YoutubeForm /> */}
        {/* <FormikContainer /> */}
        <LoginForm />
        {/* <RegistrationForm /> */}
        {/* <EnrollmentForm /> */}
      </div>
    </ChakraProvider>
  );
}

export default App;
