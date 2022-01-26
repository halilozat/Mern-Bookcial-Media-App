import * as yup from "yup";

const schema = yup.object().shape({
    email: yup.string().required().email("Geçerli bir e-mail girin"),
    password: yup.string().required("Bu alan gerekli").min(5, "Şifre minimum 5 karakter olmalıdır"),
}).required();

export default schema;