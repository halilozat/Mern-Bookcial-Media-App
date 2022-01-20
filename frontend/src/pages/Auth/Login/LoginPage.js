import React from 'react';
import './loginPage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faLockOpen} from "@fortawesome/free-solid-svg-icons";

const LoginPage = () => {
    return (
        <div className={"container"}>

            <div className={"header"}>
                <h1>ADMİN LOGİN</h1>
            </div>
            <div className={"formElements"}>
                <form>
                    <input type="text" className={"email"}  name="username" placeholder="username"/>
                    <span> <FontAwesomeIcon icon={faUser} className={"userIcon"} /></span>

                    <input type="password" className={"password"}  name="password" placeholder="Password"/>
                    <span> <FontAwesomeIcon icon={faLockOpen} className={"lockIcon"} /></span>
                    <a href={"#"}>Lost Password?</a>
                    <input className={"button"} type="submit" value="Login"/>
                </form>
            </div>

        </div>
    );
};

export default LoginPage;

