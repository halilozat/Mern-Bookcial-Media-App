import React from 'react';
import './loginPage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faLockOpen} from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
const LoginPage = () => {


    const { register, handleSubmit } = useForm();

    const onSubmit =(data) =>{
        console.log(data);

    };

    return (
        <div className={"container"}>
            <div className={"tumElemanlar"}>
            <div className={"header"}>
                <h1>ADMİN LOGİN</h1>
            </div>
            <div className={"formElements"}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="email" className={"email"}  name="email" placeholder="e-mail"
                           {...register("email",
                        {required:"This is required.",
                            minLength:{
                                value:4,
                                message:"Min length is 4."
                            }})}/>
                    <span> <FontAwesomeIcon icon={faUser} className={"userIcon"} /></span>

                    <input type="password" className={"password"}  name="password" placeholder="Password"
                           {...register("password",
                               {required:"This is required.",
                                   minLength:{
                                       value:4,
                                       message:"Min length is 4."
                                   }})}/>
                    <span> <FontAwesomeIcon icon={faLockOpen} className={"lockIcon"} /></span>
                    <a href={"#"}>Lost Password?</a>
                    <input className={"button"} type="submit" value="Login"/>
                </form>
            </div>
            </div>
        </div>
    );
};

export default LoginPage;

