'use client'
import React from "react";
import "./signUpFormStyle.css";
import useSignUpStore from "../../stores/signUpStore.js"
import { CircularProgress } from "@mui/material";





export default function SignUpForm(){
    const { handleChangeEmail, handleChangePassword,handleChangeName,handleChangeLastName,handleChangeAge, handleClickSignUp, loading } = useSignUpStore();

    return (
        <div className="signUpForm-container">
            <div className="email-field-container">
                <label>Email </label>
                <input placeholder="Email" onChange={ (e) => handleChangeEmail(e.target.value)}/>
            </div>
            
            <div className="password-field-container">
                <label > Password </label>
                <input type="password" placeholder="Password" onChange={(e) => handleChangePassword(e.target.value)}/> 
            </div>

            <div className="name-field-container">
                <label > Name </label>
                <input  placeholder="Name" onChange={(e) => handleChangeName(e.target.value)}/> 
            </div>

            <div className="lastName-field-container">
                <label > Last Name </label>
                <input  placeholder="Last name" onChange={(e) => handleChangeLastName(e.target.value)}/> 
            </div>

            <div className="age-field-container">
                <label > Age </label>
                <input placeholder="Age" onChange={(e) => handleChangeAge(parseInt(e.target.value))}/> 
            </div>

            <div className="buttons-container">
                {!loading ?
                <button onClick={handleClickSignUp}> Sign Up </button>:<CircularProgress/>  }
                <button> Forgot password ? </button>
            </div>           
        </div>
    )
}