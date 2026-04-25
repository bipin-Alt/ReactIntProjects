import { useState } from "react";
import CommonForm from "../CommonForm/CommonForm";
import { Logincontrols } from "../../formData";

function Login() {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    setLoginFormData(loginFormData);
  };
  console.log(Logincontrols);
  console.log(loginFormData);
  return (
    <>
      <h3>Login to your account</h3>
      <CommonForm
        formControls={Logincontrols}
        formData={loginFormData}
        setFormData={setLoginFormData}
        buttonText="Login"
        onSubmit={onSubmit}
      />
    </>
  );
}

export default Login;
