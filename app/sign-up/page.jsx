import React from "react";
import SignUpForm from "../organisms/molecules/SignUpForm"
import "./signUpPageStyle.css"
import { sign } from "crypto";

export default function signUp() {
    return(
        <div className="SignUpPage-container">
            <SignUpForm className="SignUpForm" />
        </div>
    )
}