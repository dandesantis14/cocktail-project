import { useNavigate } from 'react-router'
function Cocktail({name, rating, ingredients, instructions, image, id, handleDeleteCocktail}) {
    
    const navigate = useNavigate();

    const handleDelete = () => {

        fetch(`/cocktails/${id}`, {
            method: "DELETE", 
        }).then(resp => {
            console.log("<----------------------->")
            if (resp.ok) {
                handleDeleteCocktail(id)
                navigate("/");
            }
        })
    }    
    return (
        <div className="cocktail-page">
            <h3>{name}</h3>
            <h6>{rating}</h6>
            <img src={image} alt="cocktail image"/>
            <p>Ingredients: {ingredients}</p>
            <p>Instructions: {instructions}</p>
            <button onClick={handleDelete}>Delete Cocktail</button>
        </div>
    );
}

export default Cocktail;
