import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewsList from "./news/NewsList";
import Login from "./user/Login";
import Register from "./user/Register";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" exact element={<NewsList />} />
                    <Route path="/home" element={<NewsList />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
