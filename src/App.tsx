import Button from "./components/Button";
import { useState } from "react";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Map from "./components/Map";
export default function App() {
  const [alertVisible, setAlertvisibility] = useState(false);
  return (
    <div>
      <Map />
      {alertVisible && (
        <Alert onClose={() => setAlertvisibility(false)}>ALERTA PEPEPEP</Alert>
      )}
    </div>
  );
}
