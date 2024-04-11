'use client'
import React from "react";
import "./signInFormStyle.css";
import useSignInStore from "../../../stores/signInStore.js"
import { CircularProgress } from "@mui/material";
import handleForgotPasswordRequest from "../../../stores/forgotPassStore.js"



export default function SignInForm(){
    const { handleChangeEmail, handleChangePassword, handleClickSignIn, loading ,userFound} = useSignInStore();
    const handleClickSignUp = () => {
        window.location.href = 'http://127.0.0.1:8000/sign-up';
    };
    return (
        <div className="signInForm-container">
            <div className="email-field-container">
                <label>Email </label>
                <input id="email-input" placeholder="Email"  onChange={ (e) => handleChangeEmail(e.target.value)} />
            </div>
            
            <div className="password-field-container">
                <label > Password </label>
                <input  type="password" placeholder="Password" onChange={(e) => handleChangePassword(e.target.value)}/> 
            </div>

            <div className="buttons-container">
                {!loading ?
                    <button onClick={handleClickSignIn} > Sign In </button> : <CircularProgress/>     
                }
                <button onClick={handleClickSignUp}> Sign Up </button>
            </div>  
            <p className="forgot-password-link" onClick={ handleForgotPasswordRequest}> Forgot password ? </p> 
            {   
                userFound ? 
                null :
                <p className="login-status-container"> User not found. Please check your credentials or sign up if you haven't already. </p>   
            }   
        </div>
        
    )
}