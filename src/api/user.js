import axios from "axios";

export const register = async (email, password, nickname, location) => {
    const options = {
        method: "POST",
        headers: { "content-type": "application/json" },
        data: JSON.stringify({
            nickname,
            email,
            password,
            location,
        }),
        url: "/user/sign-up",
    };
    const response = await axios(options);
    if (response.status !== 200 || !response.data.isSuccess) {
        alert(response.data.message);
        return null;
    }

    return response.data.result;
};

export const login = async (email, password) => {
    const options = {
        method: "POST",
        headers: { "content-type": "application/json" },
        data: JSON.stringify({
            email,
            password,
        }),
        url: "/user/log-in",
    };
    const response = await axios(options);

    if (response.status !== 200 || !response.data.isSuccess) {
        alert(response.data.message);
        return null;
    }

    console.log(response);

    return response.data.result;
};

export const getUser = async (jwt, userIdx) => {
    const options = {
        method: "GET",
        headers: { "content-type": "application/json", "X-ACCESS-TOKEN": jwt },
        url: "/user/" + userIdx,
    };
    const response = await axios(options);
    if (response.status !== 200 || !response.data.isSuccess) {
        alert(response.data.message);
        return null;
    }

    return response.data.result;
};
