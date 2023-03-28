import Home from "./src/screens/Home";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <>
      <StatusBar translucent barStyle={"light-content"} />
      <Home />
    </>
  );
}
