import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import { styles } from "./registro.style.js";
import Header from "../../components/header/header.jsx";
import TextBox from "../../components/textbox/textbox.jsx";
import  Button  from "../../components/button/button.jsx";


function Registro(){
    return <ScrollView>
    <View style={styles.container}>
      <Header texto="Crie sua conta."/>

    <View style={styles.formGroup}>
            <View style={styles.form}>
                <TextBox label="Nome Completo"/>
            </View>  

            <View style={styles.form}>
                <TextBox label="CPF"/>
            </View> 

            <View style={styles.form}>
                <TextBox label="Telefone"/>
            </View> 

            <View style={styles.form}>
                <TextBox label="Senha" isPassword={true}/>
            </View> 

            <View style={styles.form}>
                <TextBox label="Confirmar Senha" isPassword={true}/>
            </View> 

            <View style={styles.form}>
            <Button texto="Próximo Passo"/>
            </View> 
    </View>

             <View style={styles.footer}>
                <TouchableOpacity>
            <Text style={styles.footerText}>Acessar minha conta</Text>
            </TouchableOpacity>
            </View>
</View>
    </ScrollView>
}

export default Registro;