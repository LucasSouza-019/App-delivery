import { Text, Image, View, ScrollView, FlatList } from "react-native";
import {styles} from "./aba-meupedido.style.js";
import icons from "../../constants/icons.js";
import {pedidos} from "../../constants/dados.js"
import Pedido from "../../components/pedido/pedido.jsx";
import { useLinkProps } from "@react-navigation/native";

function AbaMeuspedidos(props) {

    function Detalhepedido(){
        props.navigation.navigate("detalhe-pedido")
    }


    return <View style={styles.container}>
        <FlatList data={pedidos}
            keyExtractor={(ped) => ped.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
                return <Pedido logotipo={item.logotipo}
                    nome={item.nome}
                    valor={item.vl_total}
                    dt_pedido={item.dt_pedido}
                    status={item.status} 
                    onClickPedido={Detalhepedido}/>
            }}

            contentContainerStyle={styles.containerList}

            ListEmptyComponent={() => {
                return <View style={styles.empty}>
                    <Image source={icons.empty} />
                    <Text style={styles.emptyText}>Nenhum favorito encontrado</Text>
                </View>
            }}
        />
    </View>
}

export default AbaMeuspedidos;