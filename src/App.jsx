import "./App.css";
import React, { useCallback, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewsList from "./news/NewsList";
import Login from "./user/Login";
import Register from "./user/Register";
import NewsWrite from "./news/NewsWrite";
import NewsDetail from "./news/NewsDetail";
import CommentList from "./news/CommentList";
import { getUser, login, register } from "./api/user";

function App() {
    const [user, setUser] = useState(null);
    const [jwt, setJwt] = useState("");

    const loginAction = useCallback(async (id, pw) => {
        const result = await login(id, pw);
        if (!result) return null;

        const data = await getUser(result.jwt, result.userIdx);

        setJwt(result.jwt);
        setUser(data);

        return data;
    }, []);

    const registerAction = useCallback(
        async (email, pw, nickname, location) => {
            const result = await register(email, pw, nickname, location);
            if (!result) return null;

            const data = await getUser(result.jwt, result.userIdx);

            setJwt(result.jwt);
            setUser(data);

            return data;
        },
        []
    );

    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" exact element={<NewsList user={user} />} />
                    <Route path="/home" element={<NewsList user={user} />} />
                    <Route
                        path="/write"
                        element={<NewsWrite jwt={jwt} user={user} />}
                    />
                    <Route
                        path="/news/:id"
                        element={<NewsDetail jwt={jwt} user={user} />}
                    />
                    <Route
                        path="/news/:id/comment"
                        element={<CommentList jwt={jwt} user={user} />}
                    />
                    <Route
                        path="/login"
                        element={<Login action={loginAction} />}
                    />
                    <Route
                        path="/register"
                        element={<Register action={registerAction} />}
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
