import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoggedOutLanding from "./components/LoggedOutLanding";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);

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

  if (!authenticated) {
    return <div></div>;
  }
  return (
    <div>
      <h1>Cocktail Catalogger</h1>
      <Router>
        {currentUser ? (
          <HomePage
            setCurrentUser={setCurrentUser}
            currentUser={currentUser}
          />
        ) : (
          <LoggedOutLanding setCurrentUser={setCurrentUser} />
        )}
      </Router>
    </div>
  );
}

export default App;
