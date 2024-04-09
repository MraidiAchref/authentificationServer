'use client'
import React from "react";
import "./signInFormStyle.css";
import useSignInStore from "../../stores/signInStore.js"
import { CircularProgress } from "@mui/material";




export default function SignInForm(){
    const { handleChangeEmail, handleChangePassword, handleClickSignIn, loading } = useSignInStore();

    return (
        <div className="signInForm-container">
            <div className="email-field-container">
                <label>Email </label>
                <input placeholder="Email" onChange={ (e) => handleChangeEmail(e.target.value)}/>
            </div>
            
            <div className="password-field-container">
                <label > Password </label>
                <input type="password" placeholder="Password" onChange={(e) => handleChangePassword(e.target.value)}/> 
            </div>

            <div className="buttons-container">
                {!loading ?
                    <button onClick={handleClickSignIn}> Sign In </button> : <CircularProgress/>     
                }
                <button> Sign Up </button>
            </div>           
        </div>
    )
}