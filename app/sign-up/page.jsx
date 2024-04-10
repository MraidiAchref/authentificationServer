import React from "react";
import SignUpForm from "../organisms/molecules/SignUpForm"
import "./signUpPageStyle.css"

export default function signUp() {
    return(
        <div className="SignUpPage-container">
            <SignUpForm className="SignUpForm" />
        </div>
    )
}