import { Image, Text, TouchableOpacity, View } from "react-native"
import { TaskItemStyle } from "./TaskItemStyle"
import { TaskContext } from "../../context/TaskContext"
import { useContext } from "react"




export const TaskItem = ({ id, descricao }) => {

    const { deleteTask, setTaskValue, setEditMode, setIdToEdit } = useContext(TaskContext)

    return (
        <View style={TaskItemStyle.cardBox}>
            <Text style={TaskItemStyle.cardText}>{descricao}</Text>
            <TouchableOpacity
                style={[TaskItemStyle.cardButton, TaskItemStyle.CardButtonEditColor]}
                onPress={() => {
                    setTaskValue(descricao)
                    setEditMode(true)
                    setIdToEdit(id)
                }}
            >
                <Image
                    source={require("../../../assets/EditIcon.png")}
                />
            </TouchableOpacity>

            <TouchableOpacity
                style={[TaskItemStyle.cardButton, TaskItemStyle.CardButtonTrashColor]}
                onPress={() => {
                    deleteTask(id);
                }}
            >
                <Image
                    source={require("../../../assets/DeleteIcon.png")}
                />
            </TouchableOpacity>




        </View>
    )
}