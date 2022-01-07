import { Link } from "react-router-dom";
import Cocktail from "./Cocktail";

function CocktailCard({name, rating, image, id, instructions, ingredients, setChosenCocktail, handleDeleteCocktail, currentUser}) {
    
    const buildCocktail = () => {
        
        setChosenCocktail(<Cocktail 
            id = {id}
            name={name}
            instructions={instructions}
            image={image}
            ingredients={ingredients}
            rating={rating}
            currentUser={currentUser}
            handleDeleteCocktail={handleDeleteCocktail}
        />)
    }

    return (
        <Link className="reg-link" to={`/cocktails/${id}`} onClick={buildCocktail}>
            <div className="cocktail-card">
                <h3>{name}</h3>
                <h6>{rating}</h6>
                <img src={image} alt="cocktail image"/>
            </div>
        </Link>
    );
}

export default CocktailCard;