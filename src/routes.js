import Login from "./screens/login/login.jsx";
import Registro from "./screens/registro/registro.jsx";
import RegistroEnde from "./screens/registroEnde/registroEnde.jsx"
//import Home from "./screens/aba-home/aba-home.jsx";
//import Favoritos from "./screens/favoritos/favoritos.jsx";
//import Meuspedidos from "./screens/meupedido/meupedido.jsx";
//import Perfil from "./screens/perfil/perfil.jsx";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const MyStack = createNativeStackNavigator();

function Routes(){
    return <NavigationContainer>
        <MyStack.Navigator>


            <MyStack.Screen   name="login" component={Login} options={{
                headerShown: false
                }}/>

            <MyStack.Screen   name="registro" component={Registro} options={{
                //headerShown: false
                headerShadowVisible : false,
                title: "",
                headerBackTitle : "Voltar" 
                }}/>

            <MyStack.Screen   name="registroEnde" component={RegistroEnde} options={{
                //headerShown: false
                headerShadowVisible : false,
                title: "",
                headerBackTitle : "Voltar"
                }}/>

        </MyStack.Navigator>
    </NavigationContainer>
}

export default Routes;