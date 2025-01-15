import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Principal from './screens/principal/principal.jsx';
import Cardapio from "./screens/cardapio/cardapio.jsx";
import Busca from './screens/busca/busca.jsx';
import DetalheProduto from './screens/detalhe-produto/detalhe-produto.jsx';
import DetalhePedido from './screens/detalhe-pedido/detalhe-pedido.jsx';
import Checkout from "./screens/checkout/checkout.jsx";
import { TouchableOpacity,Text } from 'react-native';
import { COLORS } from './constants/theme.js';
const MyStack = createNativeStackNavigator();

function RoutesAuth(){
    return <NavigationContainer>


        <MyStack.Navigator>


        <MyStack.Screen   name="principal" component={Principal} options={{
                headerShown: false
    }}/>



        <MyStack.Screen   name="checkout" component={Checkout} options={{
                              headerShadowVisible : false,
                              title: "Meu Pedido",
                              headerTitleAlign:"center",
                              animation: "slide_from_bottom",
                              headerRight:() => {
                                 return   <TouchableOpacity onPress={()=> alert("ok")}>
                                        <Text style={{color: COLORS.red}}>Limpar</Text>
                                    </TouchableOpacity>
                              }
         }}/>

        <MyStack.Screen   name="detalhe-pedido" component={DetalhePedido} options={{
                              headerShadowVisible : false,
                              title: "Detalhes do Pedido",
                              headerTitleAlign:"center",
                              animation: "slide_from_bottom"
         }}/>


    <MyStack.Screen   name="detalhe-produto" component={DetalheProduto} options={{
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