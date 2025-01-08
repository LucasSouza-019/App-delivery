import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {
    container: {
       flex : 1,
       backgroundColors: COLORS.white,
       padding: 65,
       alignItems: "center",
       justifyContent: "center"
    },
    form: {
        width: "100%",
        marginBottom: 25
    },
    formGroup:{
        width: "100%",
        marginTop: 50,
        marginBottom : 40
    },

    footer:{
        width: "100%",
        backgroundColor: COLORS.red,
        position: "absolute",
        bottom : 0,
        padding : 20,
        height: 80
    },

    scrollview: {
        width : "100%"
    },

    footerText:{
        textAlign: "center",   
        color: COLORS.white,
        fontSize: FONT_SIZE.md,
        textDecoration: "underline"
    }

}