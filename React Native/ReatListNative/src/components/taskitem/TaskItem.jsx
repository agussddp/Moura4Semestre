import { View, Text, TouchableOpacity, Image } from "react-native";
import { TaskItemStyle } from "./TaskItemStyle";

export const TaskItem = () => {
    return (
        <View style={TaskItemStyle.cardbox}>
            <Text style={TaskItemStyle.cardText}>berratriz</Text>

            <View style={TaskItemStyle.buttonGroup}>
                <TouchableOpacity style={TaskItemStyle.cardButton}>
                    <Image 
                        source={require("../../../assets/Lapis.png")}
                        style={TaskItemStyle.icon}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={TaskItemStyle.cardButton}>
                    <Image 
                        source={require("../../../assets/Lixeira.png")}
                        style={TaskItemStyle.icon}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};
