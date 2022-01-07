// import { useNavigate } from 'react-router'
import ReviewContainer from './ReviewContainer'

function Cocktail({name, ingredients, instructions, image, id, handleDeleteCocktail, currentUser}) {
    
    // const navigate = useNavigate();

    // const handleDelete = () => {

    //     fetch(`/cocktails/${id}`, {
    //         method: "DELETE", 
    //     }).then(resp => {
    //         if (resp.ok) {
    //             handleDeleteCocktail(id)
    //             navigate("/");
    //         }
    //     })
    // }
    
    return (
        <div className="cocktail-page">
            <h3 id="cocktail-title" >{name}</h3>
            <img src={image} alt="cocktail image" id="cocktail-page-image"/>
            <p><strong>Ingredients:</strong> {ingredients}</p>
            <p><strong>Instructions:</strong> {instructions}</p>
            <br></br>
            {/* <button onClick={handleDelete}>Delete Cocktail</button> */}
            <ReviewContainer id={id} currentUser={currentUser}/>
        </div>
    );
}

export default Cocktail;