import { Image, TouchableOpacity, View, Text, TextInput } from "react-native"; 
import { styles } from "./detalhe-produto.style.js";
import { restaurante } from "../../constants/dados";
import icons from "../../constants/icons.js";
import Produto from "../../components/produto/produto.jsx";
import Button from "../../components/button/button.jsx"

function DetalheProduto(props){
    return<View style={styles.container}>
            <View style={styles.containerFoto}>
                <Image source={icons.produto} style={styles.foto} resizeMode="cover"/>
           
            <TouchableOpacity style={styles.containerBack} onPress={props.navigation.goBack}>
                <Image source={icons.back2} style={styles.back}/>
            </TouchableOpacity>
           
            </View>

            
            <View style={styles.containerheader}>
                    <View style={styles.titulo}>
                        <Text style={styles.nome}>Pizza Calabreza</Text>
                        <Text style={styles.taxa}>is simply dummy text of the printing and typesetting industry.</Text>
                        <Text style={styles.valor}>R$ 30,00</Text>
                    </View>
         </View>
         <View style={styles.headerobs}>
            <Text style={styles.nome}>Observações</Text>
            <TextInput  style={styles.multiliner} 
            multiline={true}
            numberOfLines={5}/>
         </View>

         <View style={styles.footer}>
            <TouchableOpacity>
                <Image source={icons.menos} style={styles.imgQtd}/>
            </TouchableOpacity>
                <Text style={styles.qtd}>1</Text>
            <TouchableOpacity>
                <Image source={icons.mais} style={styles.imgQtd}/>
            </TouchableOpacity>
         <View style={styles.footerBtn}>
        <Button texto="inserir"/>
         </View>
         </View>

    </View>

}

export default DetalheProduto;