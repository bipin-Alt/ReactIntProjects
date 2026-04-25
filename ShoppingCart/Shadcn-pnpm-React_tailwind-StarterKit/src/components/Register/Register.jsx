import { useState } from "react";
import CommonForm from "../CommonForm/CommonForm";
import { Signupcontrols } from "../../formData";

function Register() {
  const [registerFormData, setRegisterFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const onSubmit = (e) => {
    e.preventDefault();
    setRegisterFormData(registerFormData);
  };
  return (
    <>
      <h2>Sign up to Order Products!</h2>
      <CommonForm
        formControls={Signupcontrols}
        formData={registerFormData}
        setFormData={setRegisterFormData}
        buttonText="Sign up"
        onSubmit={onSubmit}
      />
    </>
  );
}

export default Register;
