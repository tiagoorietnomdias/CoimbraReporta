import Button from "./components/Button";
import { useState } from "react";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Map from "./components/Map";
export default function App() {
  const [alertVisible, setAlertvisibility] = useState(false);
  return (
    <div>
      <Navbar></Navbar>
      <Map />
      {alertVisible && (
        <Alert onClose={() => setAlertvisibility(false)}>ALERTA PEPEPEP</Alert>
      )}
      <Button onClick={() => setAlertvisibility(true)}>My button</Button>
    </div>
  );
}
