import { StyleSheet } from "react-native";

export const HeaderStyle = StyleSheet.create({
    header: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: 110,
        backgroundColor: "#1D2135", 
    },
    headertext: {
        width: "40%",
        textAlign: "center",     
        paddingBottom: 10,
        fontSize: 24,
        color: "white",
        borderBottomWidth: 3,
        borderBottomColor: "#599C6B",
        borderBottomStyle: "solid"
    }
});
