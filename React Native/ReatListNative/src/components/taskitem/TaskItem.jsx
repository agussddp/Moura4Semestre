import { View, Text } from "react-native"
import { TaskItemStyle } from "./TaskItemStyle"

export const TaskItem = ({ taskText }) => {
    return (
        <View style={TaskItemStyle.cardbox}>
            <Text style={TaskItemStyle.cartText}>{taskText}</Text>
        </View>
    )
}
