import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import { styles } from "./registro.style.js";
import Header from "../../components/header/header.jsx";
import TextBox from "../../components/textbox/textbox.jsx";
import  Button  from "../../components/button/button.jsx";
import { useState } from "react";

function Registro(props){

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCPF] = useState("");
    const [telefone, setTelefone] = useState("");
    const [senha, setSenha] = useState("");
    const [senha2, setSenha2] = useState("");

    return <>
    <View style={styles.container}>
        <ScrollView style={styles.scrollview}>
      <Header texto="Crie sua conta."/>

    <View style={styles.formGroup}>
            <View style={styles.form}>
                <TextBox label="Nome Completo" onChangeText={(texto) => setNome(texto)} 
                        value={nome}/>
            </View> 

            <View style={styles.form}>
                <TextBox label="E-mail" onChangeText={(texto) => setEmail(texto)} 
                        value={email}/>
            </View> 

            <View style={styles.form}>
                <TextBox label="CPF" onChangeText={(texto) => setCPF(texto)} 
                        value={cpf}/>
            </View> 

            <View style={styles.form}>
                <TextBox label="Telefone" onChangeText={(texto) => setTelefone(texto)} 
                        value={telefone}/>
            </View> 

            <View style={styles.form}>
                <TextBox label="Senha" isPassword={true} onChangeText={(texto) => setSenha(texto)} 
                        value={senha}/>
            </View> 

            <View style={styles.form}>
                <TextBox label="Confirmar Senha" isPassword={true} onChangeText={(texto) => setSenha2(texto)} 
                        value={senha2}/>
            </View> 

            <View style={styles.form}>
            <Button texto="Próximo Passo" onPress={() => props.navigation.navigate("registroEnde")}/>
            </View> 
    </View>
        </ScrollView>
    </View>
 
</>
}

export default Registro;