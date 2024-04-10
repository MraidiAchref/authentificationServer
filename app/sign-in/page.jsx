import React from "react";
import SignInForm from "../organisms/molecules/SignInForm"; 
import "./signInPageStyle.css"


export default function signIn() {
  return (<div className="SignInPage-container">
    <SignInForm className="SignInForm" />
    </div>)
}
