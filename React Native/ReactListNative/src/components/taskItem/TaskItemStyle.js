import { StyleSheet } from "react-native";




export const TaskItemStyle = StyleSheet.create({
    cardBox: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        height: 70,
        backgroundColor: "#31364D",
        marginBottom: 15,
        paddingHorizontal: 15,
        borderRadius: 8,
        gap: 15
        
    },



    cardText: {
        fontSize: 16,
        flex: 1,
        color: "#bbbbbb"
    },

    

    cardButton: {
    width: 45,
    height: 45,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 5,
        
    },

    CardButtonEditColor: {
        
        borderColor: "#9ABAEE"
    },
   
    CardButtonTrashColor: {
        
        borderColor: "#B75D63"
    }

})