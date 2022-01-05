import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "./LoginPage";
// import SignupForm from "./SignupForm";

function LoggedOutLanding({ setCurrentUser }) {
    return (
        <div>
            <Routes>
                <Route
                    exact
                    path="/"
                    element={<LoginPage setCurrentUser={setCurrentUser} />}
                />

                {/* <Route
                    exact
                    path="/signup"
                    element={<SignupForm setCurrentUser={setCurrentUser} />}
                /> */}
            </Routes>
        </div>
    );
}

export default LoggedOutLanding;