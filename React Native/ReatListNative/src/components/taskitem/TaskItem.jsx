import { View, Text, TouchableOpacity, Image } from "react-native";
import { TaskItemStyle } from "./TaskItemStyle";
import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

export const TaskItem = ({ id, descricao }) => {

    const { deleteTask } = useContext(TaskContext);

    return (
        <View style={TaskItemStyle.cardbox}>
            
            <Text style={TaskItemStyle.cardText}>{descricao}</Text>

            {/* Botão do Lápis (Editar) */}
            <TouchableOpacity 
                style={[
                    TaskItemStyle.cardButton, 
                    TaskItemStyle.cardButtonEditColor
                ]}
                onPress={() => {
                    // Lógica futura de edição aqui
                }}
            >
                <Image 
                    source={require("../../../assets/Lapis.png")}
                    style={TaskItemStyle.icon}
                />
            </TouchableOpacity>

            {/* Botão da Lixeira (Deletar) */}
            <TouchableOpacity 
                style={[
                    TaskItemStyle.cardButton,  
                    TaskItemStyle.cardButtonTrashColor
                ]}
                onPress={() => deleteTask(id)} // Passa o ID da tarefa para o contexto
            >
                <Image 
                    source={require("../../../assets/Lixeira.png")}
                    style={TaskItemStyle.icon}
                />
            </TouchableOpacity>
        </View>
    );
};
