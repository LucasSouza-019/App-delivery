import Routes from "./src/routes.js";
import RoutesAuth from "./src/routesAuth.js";
import Busca from "./src/screens/busca/busca.jsx";

const isUserAuth = true;

export default function App() {
    return isUserAuth ?  <RoutesAuth /> : <Routes />
    
}

