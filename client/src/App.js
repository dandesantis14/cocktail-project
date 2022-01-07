import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoggedOutLanding from "./components/LoggedOutLanding";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [cocktailList, setCocktailList] = useState([])

  useEffect(() => {
    fetch("/me", {
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          setAuthenticated(true);
        });
      } else {
        setAuthenticated(true);
      }
    });
  }, []);

  useEffect(()=> {
    fetch("/cocktails")
    .then(resp => resp.json())
    .then(data => setCocktailList(data))
    },[])

    function handleDeleteCocktail(drinkToDeleteId) {
      const updatedCocktails = cocktailList.filter((drink) => drink.id !== drinkToDeleteId);
      setCocktailList(updatedCocktails);
    }

  if (!authenticated) {
    return <div></div>;
  }

  return (
    <div>
      <Router>
        {currentUser ? (
          <HomePage
            setCurrentUser={setCurrentUser}
            currentUser={currentUser}
            cocktailList={cocktailList}
            handleDeleteCocktail={handleDeleteCocktail}
          />
        ) : (
          <LoggedOutLanding setCurrentUser={setCurrentUser} />
        )}
      </Router>
    </div>
  );
}

export default App;
