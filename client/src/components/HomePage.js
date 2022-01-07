import CocktailCard from "./CocktailCard";
import Cocktail from "./Cocktail";
import { Routes, Route } from "react-router-dom"
import { useNavigate } from 'react-router'
import SignUpPage from "./SignUpPage";
import {useState} from 'react'

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
            rating={el.rating}
            currentUser={currentUser}
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

