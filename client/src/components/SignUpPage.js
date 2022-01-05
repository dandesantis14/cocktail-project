import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignUpPage({ setCurrentUser }) {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        age:"",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        };

        fetch("/signup", configObj).then((resp) => {
            if (resp.ok) {
                resp.json().then((user) => {
                    console.log(user);
                    setCurrentUser(user);
                });
            } else {
                resp.json().then((errors) => {
                    console.error(errors);
                });
            }
        });
    };
    return (
        <div className="page-container">
            <div className="form-container">
                <header className="signin-title">Cocktail Catalog</header>
                <form className="signin-register" onSubmit={handleSubmit}>
                    <div className="field username">
                        <div className="input-area">
                            <input type="text" id="username" value={formData.username} onChange={(e) => handleChange(e)} placeholder="Username" />
                        </div>
                    </div>
                    <div className="field password">
                        <div className="input-area">
                            <input type="password" id="password" value={formData.password} onChange={(e) => handleChange(e)} placeholder="Enter Password" />
                        </div>
                    </div>
                    <div className="field age">
                        <div className="input-area">
                            <input type="number" id="age" min="1" value={formData.age} onChange={(e) => handleChange(e)} placeholder="Enter Age" />
                        </div>
                    </div>
                    <input type="submit" className="submit" value="Sign up" />
                </form>
                <div className="link-text"> Already registered ? <Link class="reg-link" to="/">Sign in</Link> </div>
            </div>
        </div>
    );
}

export default SignUpPage;