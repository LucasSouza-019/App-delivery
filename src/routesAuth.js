import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Principal from './screens/principal/principal.jsx';
import Cardapio from "./screens/cardapio/cardapio.jsx";
import Busca from './screens/busca/busca.jsx';

const MyStack = createNativeStackNavigator();

function RoutesAuth(){
    return <NavigationContainer>


        <MyStack.Navigator>


<MyStack.Screen   name="principal" component={Principal} options={{
    headerShown: false
    }}/>

<MyStack.Screen   name="cardapio" component={Cardapio} options={{
                //headerShown: false,
                headerShown: false
                }}/>

<MyStack.Screen   name="busca" component={Busca} options={{
                //headerShown: false,
                headerShadowVisible : false,
                title: "Resultados da Busca",
                headerTitleAlign:"center"
                }}/>

</MyStack.Navigator>
    </NavigationContainer>
    
}

export default RoutesAuth;