import { useState } from "react";
import Alert from "./components/Alert";
import Map from "./components/Map";
import Login from "./login";
export default function App() {
  const [alertVisible, setAlertvisibility] = useState(false);
  return (
    <div>
      <Login />
    </div>
  );
}
