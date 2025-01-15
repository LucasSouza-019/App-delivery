import { COLORS, FONT_SIZE } from "../../constants/theme" 

export const styles = {
    container: {
       flex : 1,
       backgroundColors: COLORS.white,
       borderRadius: 10   
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
      height: 40,
      marginTop:30
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
     
     valor:{
        fontSize: FONT_SIZE.md,
        fontWeight : "bold",
        //color: COLORS.light_grey
        marginBottom: 2,
        marginTop: 15
     },
     headerobs:{
        width:"100%",
        padding: 10
     },
     multiliner:{
            flex :  1,
            backgroundColors: COLORS.dark_gray,
            padding: 10,
            color: COLORS.dark_gray,
            borderRadius: 4,
            borderWidth : 1,
            borderColor: COLORS.medium_gray,
            minHeight: 120,
            textAlignVertical:"top"
     },
     footer:{
        position: "absolute",
        bottom: 0,
        left: 0,
        flexDirection:"row",
        padding: 10,
        alignItems:"center"
     },
     imgQtd:{
            height: 40,
            width: 40
     },
     qtd:{
        fontSize: FONT_SIZE.lg,
        fontWeight : "bold",
        //color: COLORS.light_grey
        width:30,
        textAlign:"center"
     },
     footerBtn:{
        flex:1,
        marginRight: 5,
        marginLeft: 15,
     },
}