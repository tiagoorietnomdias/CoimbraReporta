import Button from "./components/Button";
import { useState } from "react";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Map from "./components/Map";
import Login from "./login.jsx";
export default function App() {
  const [alertVisible, setAlertvisibility] = useState(false);
  return (
    <div>
      <Map />
    </div>
  );
}
