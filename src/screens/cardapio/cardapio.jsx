import { Image, TouchableOpacity, View, Text, ScrollView } from "react-native"; 
import { styles } from "./cardapio.style";
import { restaurante } from "../../constants/dados";
import icons from "../../constants/icons.js";
import Produto from "../../components/produto/produto.jsx";

function Cardapio(props){
    return<View style={styles.container}>
        <ScrollView>
            <View style={styles.containerFoto}>
                <Image source={restaurante.foto} style={styles.foto} resizeMode="contain"/>
           
            <TouchableOpacity style={styles.containerBack} onPress={props.navigation.goBack}>
                <Image source={icons.back2} style={styles.back}/>
            </TouchableOpacity>
           
            </View>

            
            <View style={styles.containerheader}>
                    <View style={styles.titulo}>
                        <Text style={styles.nome}>Nome do Restaurante</Text>
                        <Text style={styles.taxa}>Taxa de Entrega: R$ 2,00</Text>
                    </View>
                    <TouchableOpacity>
                <Image source={icons.favoritoFull} style={styles.favoritoFull}/>
                </TouchableOpacity>
         </View>

         <View style={styles.containerheader}>
            <Image source={icons.location} style={styles.favoritoFull}/>
                <View style={styles.tituloEnde}>
                        <Text style={styles.nomeEnde}>Rua São Bento, 1015 - Cariobinha - São Paulo - SP</Text>
                </View>                
         </View>

        {
            restaurante.cardapio.map((item) => {
                return <View key={item.idCategoria} style={styles.containerProduto}>
                    <Text  style={styles.categoria}>{item.categoria}</Text>

                    {
                        item.itens.map((prod) =>{
                            return <Produto key={prod.idProduto}
                            idProduto={prod.idProduto}
                            foto={prod.foto}
                            nome={prod.nome}
                            descricao={prod.descricao}
                            valor={prod.valor}
                            
                            />
                        })
                    }
                </View>
            })
        }


</ScrollView>
    </View>

}

export default Cardapio;