import React, { useState } from "react";
import image from "../assets/bg.png";

const Login = ({ isAdmin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let adminemail = "shamsahmed100@gmail.com";
  let adminpassword = "101010";
  const adminLogin = () => {
    if (adminemail === email && adminpassword === password) {
      isAdmin(true);
    } else {
      alert("only admin can login in ");
    }
  };
  return (
    <>
      <div
        className={`h-[90px] md:h-[124px] relative flex flex-col w-full bg-cover bg-center`}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="h-[100vh]">
        <input
          type="email"
          placeholder="Please Type Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Please Type Your Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={adminLogin}>Login</button>
      </div>
    </>
  );
};

export default Login;
