import { View, Text, TouchableOpacity, Image } from "react-native";
import { TaskItemStyle } from "./TaskItemStyle";

export const TaskItem = () => {
    return (
        <View style={TaskItemStyle.cardbox}>
         
            <Text style={TaskItemStyle.cardText}>berratriz</Text>


                {/* Botão do Lápis */}
                <TouchableOpacity style={
                    [
                        TaskItemStyle.cardButton, 
                        TaskItemStyle.cardButtonEditColor
                    ]}>
                    <Image 
                        source={require("../../../assets/Lapis.png")}
                        style={TaskItemStyle.icon}
                    />
                </TouchableOpacity>


                {/* Botão da Lixeira */}
                <TouchableOpacity style={
                    [
                        TaskItemStyle.cardButton,  
                        TaskItemStyle.cardButtonTrashColor
                    ]}>
                    <Image 
                        source={require("../../../assets/Lixeira.png")}
                        style={TaskItemStyle.icon}
                    />
                </TouchableOpacity>
                
           
        </View>
    );
};
