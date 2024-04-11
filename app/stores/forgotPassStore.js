import React from "react";
import axios from "../api/axios";
const REGISTER_URL = "/users/forgotPassword";

export default async function handleForgotPasswordRequest() {
  const email = document.getElementById("email-input").value;
  console.log(email);
  
  var response = null;
  
  if (email !== "") {
    try
   { response = await axios.post(
      REGISTER_URL,
      JSON.stringify({
        email: email,
      }),
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );

    if (response.status === 200) {
      window.alert(
        "Please check your email . A reset password was sent in there !"
      );
    }

  }catch(error){
    //console.log(error);
    window.alert("Email not valid ");

  }

  }

}
