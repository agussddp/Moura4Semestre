import { StyleSheet } from "react-native";




export const FormTaskStyle = StyleSheet.create({
    formTaskBox:{
        width: "100%",
        // borderWidth: 3,
        // borderStyle: "solid",
        // borderColor: "red",
        paddingTop: 20,
        paddingBottom: 20
    },
    taskInputName: {
        width: "100%",
        height: 40,
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 5
    },
    taskButton: {
        width: "100%",
        padding: 10,
        height: 40,
        marginTop: 15,
        borderRadius: 5,
        backgroundColor: "#60A771"
    },
    taskButtonText: {
        color: "white",
        textAlign: "center"
    }
})