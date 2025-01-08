import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import { styles } from "./registroEnde.style.js";
import Header from "../../components/header/header.jsx";
import TextBox from "../../components/textbox/textbox.jsx";
import  Button  from "../../components/button/button.jsx";


function RegistroEnd(){
    return <>
    <View style={styles.container}>
        <ScrollView style={styles.scrollview}>
      <Header texto="Coloque seu Endereço"/>

    <View style={styles.formGroup}>
            <View style={styles.formHorizontal}>
             <View style={styles.form70}>
                <TextBox label="Endereço"/>
             </View>
             <View style={styles.form30}>
                <TextBox label="Compl."/>
             </View>
            </View>  

            <View style={styles.form}>
                <TextBox label="Bairro"/>
            </View> 

            <View style={styles.formHorizontal}>
             <View style={styles.form70}>
                <TextBox label="Cidade"/>
             </View>
             <View style={styles.form30}>
                <TextBox label="UF"/>
             </View>
            </View>  

            <View style={styles.form}>
                <TextBox label="CEP" />
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