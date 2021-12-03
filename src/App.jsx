import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewsList from "./news/NewsList";
import Login from "./user/Login";
import Register from "./user/Register";
import dummyUser from "./data/dummy_user.json";

function App() {
    const [user, setUser] = useState(null);

    const loginAction = async () => {
        setUser(dummyUser);
        return true;
    };

    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" exact element={<NewsList user={user} />} />
                    <Route path="/home" element={<NewsList user={user} />} />
                    <Route
                        path="/login"
                        element={<Login action={loginAction} />}
                    />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
