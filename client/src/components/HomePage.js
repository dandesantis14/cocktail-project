import CocktailCard from "./CocktailCard";
import Cocktail from "./Cocktail";
import { Routes, Route } from "react-router-dom"
import { useNavigate } from 'react-router'
import SignUpPage from "./SignUpPage";
import {useState} from 'react'
import { Link } from "react-router-dom";

function HomePage({ setCurrentUser, currentUser, cocktailList, handleDeleteCocktail }) {
    const navigate = useNavigate();

    const [chosenCocktail,setChosenCocktail] = useState (null)

    const handleLogout = () => {
        setCurrentUser(null);
        fetch("/logout", { method: "DELETE" });
        navigate('/')
    };

    const cocktailElements = cocktailList.map((el)=> {
        return (<CocktailCard 
            key = {el.id}
            id = {el.id}
            name={el.name}
            instructions={el.instructions}
            image={el.image}
            ingredients={el.ingredients}
            currentUser={currentUser}
            setChosenCocktail={setChosenCocktail}
            handleDeleteCocktail={handleDeleteCocktail}
        />)
    })

    const wrappedCocktailElements = 
    <div className = "homepage">
        {cocktailElements}
    </div>
    
    return (
        <div>
            <Link to="/" style={{textDecoration:"none"}}><h1>Cocktail Catalog</h1></Link>
            <div className="user-bar">
                <div id="welcome">
                    Welcome {currentUser.username}!
                </div>
                <p>
                    <button id="logout-button" onClick={handleLogout}>Logout</button>
                </p>
            </div>
            <Routes>
                <Route
                    path="/"
                    element={wrappedCocktailElements}
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

