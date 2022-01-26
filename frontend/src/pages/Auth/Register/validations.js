import * as yup from "yup";

const schema = yup.object().shape({
    email: yup.string().required().email("Geçerli bir e-mail girin"),
    password: yup.string().required("Bu alan gerekli").min(5, "Şifre minimum 5 karakter olmalıdır"),
    username: yup.string().required("User name alanı gerekli").min(3, "User name minimum 3 karakter olmalıdır"),
    passwordConfirm: yup.string().oneOf([yup.ref("password"), null], "Şifreler aynı değil"),

}).required();

export default schema;