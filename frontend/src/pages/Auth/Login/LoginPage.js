import React from 'react';
import './loginPage.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faLockOpen} from "@fortawesome/free-solid-svg-icons";
import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

const LoginPage = () => {


    const onSubmit = (data) => {
        console.log(data);
    };

    const schema = yup.object().shape({
        email: yup.string().required().email("Geçerli bir e-mail girin"),
        password: yup.string().required("Bu alan gerekli").min(5, "Şifre minimum 5 karakter olmalıdır"),
    }).required();

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
    });

    return (
        <div className={"container"}>
            <div className={"tumElemanlar"}>
                <div className={"header"}>
                    <h1>ADMİN LOGİN</h1>
                </div>
                <div className={"formElements"}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" className={"email"} name="email" placeholder="e-mail"
                               {...register("email")}/>
                        <span> <FontAwesomeIcon icon={faUser} className={"userIcon"}/></span>
                        {
                            errors.email?.message && (<div className="alert">
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


                        <a href={"#"}>Lost Password?</a>
                        <input className={"button"} type="submit" value="Login"/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;

