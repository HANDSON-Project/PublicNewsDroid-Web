import axios from "axios";
import server from "./server.json";
import qs from "qs";

export const register = async (email, password, nickname, location) => {
    const options = {
        method: "POST",
        headers: { "content-type": "application/json" },
        data: qs.stringify({
            nickname,
            email,
            password,
            location,
        }),
        url: server.url + "/user/sign-up",
    };
    const response = await axios(options);
    if (!response.isSuccess) {
        alert(response.message);
        return null;
    }

    return response.result;
};

export const login = async (email, password) => {
    const options = {
        method: "POST",
        headers: { "content-type": "application/json" },
        data: qs.stringify({
            email,
            password,
        }),
        url: server.url + "/user/log-in",
    };
    const response = await axios(options);

    if (!response.isSuccess) {
        alert(response.message);
        return null;
    }

    return response.result;
};
