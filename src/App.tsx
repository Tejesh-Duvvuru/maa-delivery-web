import "./App.css";
import UserForm from "./Components/UserForm";
import NavBar from "./Components/NavBar/NavBar";
import Tile from "./Components/Tile/Tile";

export function App() {
  return (
    <>
      <NavBar />
      <Tile />
      <h1 className="heading" style={{ color: "green" }}>
        Welcome to Maa Ravaanaa
      </h1>
      {/* <UserForm /> */}
    </>
  );
}
