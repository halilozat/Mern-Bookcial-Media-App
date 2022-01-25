/** Dependencies */
import axios from "axios";

const fetcher = axios.create({
    baseURL: "http://localhost:5000/api",

});


export default class BookcialMediaServices{
    /** Auth */

    static AuthRegister(payload) {
        return fetcher.post("v1/auth/register",payload);
    }
}