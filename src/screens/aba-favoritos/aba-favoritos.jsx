import { Text, Image, View, ScrollView, FlatList } from "react-native";
import {styles} from "./aba-favoritos.style.js";
import icons from "../../constants/icons.js";
import {categorias, banners, restaurantes} from "../../constants/dados.js"
import Banners from "../../components/Banners/banners.jsx";
import Restaurante from "../../components/restaurante/restaurante.jsx";


function AbaFavoritos(){
        return<View style={styles.container}>
            <FlatList data={restaurantes} 
                    keyExtractor={(restaurante) => restaurante.id}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return<Restaurante 
                                logotipo={item.logotipo}
                                nome={item.nome}
                                endereco={item.endereco}
                                icone={icons.remove}
                        />
                    }}
                    
                    contentContainerStyle={styles.containerList}

                    ListEmptyComponent={() =>{
                        return <View style={styles.empty}>
                                <Image source={icons.empty}/>
                                <Text style={styles.emptyText}>Nenhum Favorito Ainda</Text>

                        </View>
                    }}

            />
                
        </View>
}

export default AbaFavoritos;