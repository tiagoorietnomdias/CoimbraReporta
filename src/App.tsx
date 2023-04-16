import { useState } from "react";
import Alert from "./components/Alert";
import Map from "./components/Map";
import Login from "./login";
import "./Styles/appStyles.css";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogout = () => {
    setLoggedIn(false);
  };

  const handleLoginSuccess = () => {
    setLoggedIn(true);
  };

  return (
    <div className="app-container">
      <div className="background-image" />
      {loggedIn ? (
        <Map onLogout={handleLogout} />
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
}
