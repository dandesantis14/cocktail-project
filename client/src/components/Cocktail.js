function Cocktail({name, rating, ingredients, instructions, image}) {
        
    return (
        <div>
            <h3>{name}</h3>
            <h6>{rating}</h6>
            <img src={image} alt="cocktail image"/>
            <p>Ingredients: {ingredients}</p>
            <p>Instructions: {instructions}</p>
        </div>
    );
}

export default Cocktail;
