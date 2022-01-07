import { Link } from "react-router-dom";
import Cocktail from "./Cocktail";

function CocktailCard({name, image, id, instructions, ingredients, setChosenCocktail, handleDeleteCocktail, currentUser}) {
    
    const buildCocktail = () => {
        
        setChosenCocktail(<Cocktail 
            id = {id}
            name={name}
            instructions={instructions}
            image={image}
            ingredients={ingredients}
            currentUser={currentUser}
            handleDeleteCocktail={handleDeleteCocktail}
        />)
    }

    return (
        <Link className="reg-link" to={`/cocktails/${id}`} onClick={buildCocktail}>
            <div className="cocktail-card">
                <h3>{name}</h3>
                <img src={image} alt="cocktail image" className="cocktail-card-image"/>
            </div>
        </Link>
    );
}

export default CocktailCard;