import { Text, Image, View, ScrollView, FlatList, TouchableOpacity } from "react-native";
import {styles} from "./aba-perfil.style.js";
import icons from "../../constants/icons.js";



function AbaPerfil() {
    return <View style={styles.container}>
        <TouchableOpacity style={[styles.item, styles.borderTop]}>
            <View style={styles.containerIcone}>
                <Image source={icons.endereco} style={styles.icone}/>
            </View>

         <View style={styles.textos}>
                <Text style={styles.titulo}>Endereço</Text>
                <Text style={styles.subtitulo}>Meu endereço  de Entrega</Text>
        </View>
        <View style={styles.containerIcone}>
            <Image source={icons.more} style={styles.icone}/>
        </View>

        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
            <View style={styles.containerIcone}>
                <Image source={icons.dados} style={styles.icone}/>
            </View>

         <View style={styles.textos}>
                <Text style={styles.titulo}>Meu Dados</Text>
                <Text style={styles.subtitulo}>Informações da minha conta</Text>
        </View>
        <View style={styles.containerIcone}>
            <Image source={icons.more} style={styles.icone}/>
        </View>

        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
            <View style={styles.containerIcone}>
                <Image source={icons.logout} style={styles.icone}/>
            </View>

         <View style={styles.textos}>
                <Text style={styles.titulo}>Desconectar</Text>
                <Text style={styles.subtitulo}>Sair da Conta</Text>
        </View>
        <View style={styles.containerIcone}>
            <Image source={icons.more} style={styles.icone}/>
        </View>

        </TouchableOpacity>
    </View>
}

export default AbaPerfil;