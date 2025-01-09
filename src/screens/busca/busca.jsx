import { Text, Image, View, ScrollView, FlatList } from "react-native";
import {styles} from "./busca.style.js";
import icons from "../../constants/icons.js";
import {categorias, restaurantes} from "../../constants/dados.js"
import Banners from "../../components/Banners/banners.jsx";
import Restaurante from "../../components/restaurante/restaurante.jsx";


function Busca(){
        return<View style={styles.container}>
            <FlatList data={restaurantes} 
                    keyExtractor={(restaurante) => restaurante.id}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return<Restaurante 
                                logotipo={item.logotipo}
                                nome={item.nome}
                                endereco={item.endereco}
                                icone={icons.favoritoFull}
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

export default Busca;