import React from 'react';
import "./registerPage.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLockOpen, faUser,faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
    const { register, handleSubmit, formState: { errors }} = useForm();

        const onSubmit =(data) =>{
            console.log(data);

        };
    return (
        <div className={"container"}>

            <div className={"header"}>
                <h1>Sing Up</h1>
            </div>
            <p>{errors.username?.message}</p>
            <div className={"formElements"}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text"
                           className={"userName"}
                           name="username"
                           placeholder="User Name"
                          {...register("username",
                              {required:"User name is required.",
                                  minLength:{
                                  value:4,
                                    message:"Min length is 4."
                                  }})}
                    />
                    <span> <FontAwesomeIcon icon={faUser} className={"userIcon"} /></span>

                    <input type="email" className={"email"}  name="email" placeholder="E-mail"
                           {...register("email",
                               {required:"This is required.",
                                   minLength:{
                                       value:4,
                                       message:"Min length is 4."
                                   }})}/>
                    <span> <FontAwesomeIcon icon={faEnvelope} className={"userIcon"} /></span>

                    <input type="password" className={"password"}  name="password" placeholder="Password"
                           {...register("password",
                        {required:"This is required.",
                            minLength:{
                                value:4,
                                message:"Min length is 4."
                            }})}/>
                    <span> <FontAwesomeIcon icon={faLockOpen} className={"lockIcon"} /></span>

                    <input type="password" className={"passwordConfirm"}  name="passwordConfirm" placeholder="Password Confirm"
                           {...register("passwordConfirm",
                        {required:"This is required.",
                            minLength:{
                                value:4,
                                message:"Min length is 4."
                            }})}/>
                    <span> <FontAwesomeIcon icon={faLockOpen} className={"lockIcon"} /></span>

                    <input className={"button"} type="submit" value="Sign Up"/>
                </form>
            </div>

        </div>
    );
};

export default RegisterPage;
