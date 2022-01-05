function CocktailCard({name, rating, image}) {
        
    return (
        <Link className="reg-link" to="/signup">Sign up now
            <div className="cocktail-card">
                <h3>{name}</h3>
                <h6>{rating}</h6>
                <img src={image} alt="cocktail image"/>
            </div>
        </Link>
    );
}

export default CocktailCard;