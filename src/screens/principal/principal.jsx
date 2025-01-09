import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import icons from '../../constants/icons.js';


import AbaHome from '../../screens/aba-home/aba-home.jsx';
import AbaFavoritos from '../../screens/aba-favoritos/aba-favoritos.jsx';
import AbaMeuspedidos from '../../screens/aba-meupedido/aba-meupedido.jsx';
import AbaPerfil from '../../screens/aba-perfil/aba-perfil.jsx';
import { Image } from 'react-native';

const MyTabs = createBottomTabNavigator();

function Principal(){
        return  <MyTabs.Navigator screenOptions={{tabBarShowLabel: false}}>
        
                    <MyTabs.Screen name="home" component={AbaHome} options={{
                        headerShown: false,
                        tabBarIcon: ({focused}) =>{
                            return <Image source={icons.abaHome} 
                            style={{width:25, height:25, opacity: focused ? 1 : 0.3}}/>
                        }
                    }} />
        
                    <MyTabs.Screen name="favoritos" component={AbaFavoritos} options={{
                        title: "Favoritos",
                        headerTitleAlign: "center",
                        tabBarIcon: ({focused}) =>{
                            return <Image source={icons.abafavorito} 
                            style={{width:25, height:25,opacity: focused ? 1 : 0.3}}/>
                        }
                    }} />
        
                    <MyTabs.Screen name="meupedido" component={AbaMeuspedidos} options={{
                        title: "Meus Pedidos",
                        headerTitleAlign: "center",
                        tabBarIcon: ({focused}) =>{
                            return <Image source={icons.abaPedido} 
                            style={{width:25, height:25,opacity: focused ? 1 : 0.3}}/>
                        }
                    }} />
        
                    <MyTabs.Screen name="perfil" component={AbaPerfil} options={{
                        title: "Perfil",
                        headerTitleAlign: "center",
                        tabBarIcon: ({focused}) =>{
                            return <Image source={focused ? icons.abaPerfil: icons.cart} 
                            style={{width:25, height:25,opacity: focused ? 1 : 0.3}}/>
                        }
                    }} />
        
                </MyTabs.Navigator>

}

export default Principal;