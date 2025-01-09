import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import { styles } from "./registroEnde.style.js";
import Header from "../../components/header/header.jsx";
import TextBox from "../../components/textbox/textbox.jsx";
import  Button  from "../../components/button/button.jsx";
import { useState } from "react";

function RegistroEnd(){

    const [end, setEnd] = useState("");
    const [comple, setComple] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [uf, setUf] = useState("");
    const [cep, setCep] = useState("");


    return <>
    <View style={styles.container}>
        <ScrollView style={styles.scrollview}>
      <Header texto="Coloque seu Endereço"/>

    <View style={styles.formGroup}>
            <View style={styles.formHorizontal}>
             <View style={styles.form70}>
                <TextBox label="Endereço" onChangeText={(texto) => setEnd(texto)} 
                        value={end}/>
             </View>
             <View style={styles.form30}>
                <TextBox label="Compl." onChangeText={(texto) => setComple(texto)} 
                        value={comple} />
             </View>
            </View>  

            <View style={styles.form}>
                <TextBox label="Bairro"onChangeText={(texto) => setBairro(texto)} 
                        value={bairro} />
            </View> 

            <View style={styles.formHorizontal}>
             <View style={styles.form70}>
                <TextBox label="Cidade"onChangeText={(texto) => setCidade(texto)} 
                        value={cidade} />
             </View>
             <View style={styles.form30}>
                <TextBox label="UF"onChangeText={(texto) => setUf(texto)} 
                        value={uf} />
             </View>
            </View>  

            <View style={styles.form}>
                <TextBox label="CEP" onChangeText={(texto) => setCep(texto)} 
                        value={cep} />
            </View> 

            <View style={styles.form}>
            <Button texto="Finalizar Cadastro"/>
            </View> 
    </View>
        </ScrollView>
    </View>

</>
}

export default RegistroEnd;