import CocktailCard from "./CocktailCard";
import Cocktail from "./Cocktail";

function HomePage({ setCurrentUser, currentUser, cocktailList }) {

    const handleLogout = () => {
        setCurrentUser(null);
        fetch("/logout", { method: "DELETE" });
    };
    const cocktailElements = cocktailList.map((el)=> {
        return (<CocktailCard 
            key = {el.id}
            name={el.name}
            // instructions={el.instructions}
            image={el.image}
            // ingredients={el.ingredients}
            rating={el.rating} 
        />)
    })
    return (
        <div>
            Welcome {currentUser.username}!
            <p>
                <button onClick={handleLogout}>Logout</button>
            </p>
            <div>
                {cocktailElements}
            </div>
        </div>
    );
}

export default HomePage;

