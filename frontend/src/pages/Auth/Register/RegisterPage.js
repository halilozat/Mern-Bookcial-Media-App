import React from 'react';
import "./registerPage.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLockOpen, faUser} from "@fortawesome/free-solid-svg-icons";

const RegisterPage = () => {
    return (
        <div className={"container"}>

            <div className={"header"}>
                <h1>Sing Up</h1>
            </div>
            <div className={"formElements"}>
                <form>
                    <input type="text" className={"userName"}  name="username" placeholder="User Name"/>
                    <span> <FontAwesomeIcon icon={faUser} className={"userIcon"} /></span>

                    <input type="text" className={"email"}  name="email" placeholder="E-mail"/>
                    <span> <FontAwesomeIcon icon={faUser} className={"userIcon"} /></span>

                    <input type="password" className={"password"}  name="password" placeholder="Password"/>
                    <span> <FontAwesomeIcon icon={faLockOpen} className={"lockIcon"} /></span>

                    <input type="password" className={"passwordConfirm"}  name="passwordConfirm" placeholder="Password Confirm"/>
                    <span> <FontAwesomeIcon icon={faLockOpen} className={"lockIcon"} /></span>

                    <input className={"button"} type="submit" value="Sign Up"/>
                </form>
            </div>

        </div>
    );
};

export default RegisterPage;
