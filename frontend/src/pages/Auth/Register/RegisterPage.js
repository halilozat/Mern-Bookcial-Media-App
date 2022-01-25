import React from 'react'
import "./registerPage.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLockOpen, faUser, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import BookcialMediaServices from "../../../services/Services"


const RegisterPage = () => {

    const schema = yup.object().shape({
        email: yup.string().required().email("Geçerli bir e-mail girin"),
        password: yup.string().required("Bu alan gerekli").min(5, "Şifre minimum 5 karakter olmalıdır"),
        username: yup.string().required("User name alanı gerekli").min(3, "User name minimum 3 karakter olmalıdır"),
        passwordConfirm: yup.string().oneOf([yup.ref("password"), null], "Şifreler aynı değil"),

    }).required();

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
    });



    const onSubmit = async (data) => {
        try {
        console.log()
            const registerResponse = await BookcialMediaServices.AuthRegister(
                {
                    UserName:data.username,
                    Email: data.email,
                    Password: data.password,
                    ConfirmPassword: data.passwordConfirm,
                },
            )

        } catch (error) {
            console.log(error);
        }


    };

    return (
        <div className={"container"}>

            <div className={"header"}>
                <h1>Sing Up</h1>
            </div>

            <div className={"formElements"}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text"
                           className={"userName"}
                           name="username"
                           placeholder="User Name"

                           {...register("username")}
                    />
                    <span> <FontAwesomeIcon icon={faUser} className={"userIcon"}/></span>
                    {
                        errors.username?.message && (
                            <div className="alert">
                                {errors.username?.message}
                            </div>
                        )
                    }

                    <input type="email" className={"email"} name="email" placeholder="E-mail"
                           {...register("email")}/>
                    <span> <FontAwesomeIcon icon={faEnvelope} className={"userIcon"}/></span>
                    {
                        errors.email?.message && (
                            <div className="alert">
                                {errors.email?.message}
                            </div>
                        )
                    }

                    <input type="password" className={"password"} name="password" placeholder="Password"
                           {...register("password")}/>
                    <span> <FontAwesomeIcon icon={faLockOpen} className={"lockIcon"}/></span>
                    {
                        errors.password?.message && (
                            <div className="alert">
                                {errors.password?.message}
                            </div>
                        )
                    }

                    <input type="password" className={"passwordConfirm"} name="passwordConfirm"
                           placeholder="Password Confirm"
                           {...register("passwordConfirm")}/>
                    <span> <FontAwesomeIcon icon={faLockOpen} className={"lockIcon"}/></span>
                    {
                        errors.passwordConfirm?.message && (
                            <div className="alert">
                                {errors.passwordConfirm?.message}
                            </div>
                        )
                    }

                    <input className={"button"} type="submit" value="Sign Up"/>
                </form>
            </div>

        </div>
    );
};

export default RegisterPage;
