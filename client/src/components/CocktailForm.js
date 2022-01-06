import React, { useState } from "react";

function CocktailForm({name, rating, ingredients, instructions, image}) {
        
    const [cocktailFormData, setCocktailFormData] = useState({
        name: "",
        image: "",
        instructions: "",
        rating:"",
        ingredients: "",
    });

    const handleChange = (e) => {
        setCocktailFormData({ ...cocktailFormData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(cocktailFormData),
        };

        fetch("/cocktails", configObj).then((resp) => {
            if (resp.ok) {
                resp.json().then((cocktail) => {
                    console.log(cocktail);
                });
            } else {
                resp.json().then((errors) => {
                    console.error(errors);
                });
            }
        });
    };

    return (
        <div className="cocktail-page">
            <h3>{name}</h3>
            <h6>{rating}</h6>
            <img src={image} alt="cocktail image"/>
            <p>Ingredients: {ingredients}</p>
            <p>Instructions: {instructions}</p>
        </div>
    );
}

export default CocktailForm;