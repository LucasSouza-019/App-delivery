import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {
    container: {
       flex : 1,
       backgroundColors: COLORS.white,
       paddingLeft: 12,
       paddingRight: 12   
     },
    containerList:{
        flexGrow: 1
    },
    empty:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 60
    },
    emptyText:{
        fontSize: FONT_SIZE.sm,
        color : COLORS.dark_gray

    }

}