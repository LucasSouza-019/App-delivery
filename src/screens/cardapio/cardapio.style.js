import { COLORS, FONT_SIZE } from "../../constants/theme" 

export const styles = {
    container: {
       flex : 1,
       backgroundColors: COLORS.white   
     }, 
     containerFoto:{
        alignItems: "center",

     },
     foto:{
        height: 150,
     },
     containerBack:{
        position:"absolute",
        top:30,
        left: 15
     },
     back:{
      width: 40,  
      height: 40
     },
     containerheader:{
      width: "100%",
      flexDirection: "row",
      alignItems: "center", 
      padding: 10,
      
     },

     titulo:{
        flex: 1,
     },

     taxa:{
      fontSize: FONT_SIZE.md,
      color: COLORS.dark_gray,
   },
      nome:{
        fontSize: FONT_SIZE.md,
        fontWeight : "bold",
        //color: COLORS.light_grey
        marginBottom: 2
     },

     favoritoFull:{
      width: 40,  
      height: 40
     },
     
     tituloEnde:{
      flex: 1,
      marginLeft: 10,
     },

     nomeEnde:{
      color: COLORS.dark_gray,
     },

     containerProduto:{
      padding: 10,
     },
     categoria:{
      fontSize: FONT_SIZE.md,
        fontWeight : "bold",
        //color: COLORS.light_grey
        padding: 2
     },

}