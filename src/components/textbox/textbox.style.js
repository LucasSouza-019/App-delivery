import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {
    input:{
        width: "100%",
        backgroundColor: COLORS.medium_gray,
        padding: 10,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: COLORS.medium_gray,
    },

    label:{
        marginLeft: 5,
        textAlign:"left",
        color: COLORS.dark_gray,
        fontSize: FONT_SIZE.md,
        marginBottom: 4
    }
}