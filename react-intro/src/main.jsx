import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.jsx"
//questo app é un componente REACT, un PEZZO DI INTERFACCIA

createRoot(document.getElementById("root")).render(<App />)
//<App /> rappresenta il montaggio del componente App all'interno della
//mia applicazione React

//Viene anche detto "entry point"
