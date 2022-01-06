import CocktailCard from "./CocktailCard";
import Cocktail from "./Cocktail";
import { Routes, Route, Navigate } from "react-router-dom"
import SignUpPage from "./SignUpPage";
import {useState} from 'react'

function HomePage({ setCurrentUser, currentUser, cocktailList, handleDeleteCocktail }) {

    const [chosenCocktail,setChosenCocktail] = useState (null)

    const handleLogout = () => {
        setCurrentUser(null);
        fetch("/logout", { method: "DELETE" });
    };

    const cocktailElements = cocktailList.map((el)=> {
        return (<CocktailCard 
            key = {el.id}
            id = {el.id}
            name={el.name}
            instructions={el.instructions}
            image={el.image}
            ingredients={el.ingredients}
            rating={el.rating}
            setChosenCocktail={setChosenCocktail}
            handleDeleteCocktail={handleDeleteCocktail}
        />)
    })
    
    return (
        <div>
            Welcome {currentUser.username}!
            <p>
                <button onClick={handleLogout}>Logout</button>
            </p>
            <Routes>
                <Route
                    path="/signup"
                    element={<SignUpPage setCurrentUser={setCurrentUser} />}
                />
                <Route
                    path="/"
                    element={cocktailElements}
                />
                <Route
                    path="/cocktails/:id"
                    element={chosenCocktail}
                />
                
            </Routes>
        </div>
    );
}

export default HomePage;

