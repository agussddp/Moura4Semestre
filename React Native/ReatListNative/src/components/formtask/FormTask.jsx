import { View, Text, TextInput, TouchableOpacity, Alert, Platform } from "react-native"
import { FormTaskStyle } from "./FormTaskStyle"
import { useContext, useState } from "react"
import { TaskContext } from "../../context/TaskContext"

export const FormTask = () => {
    const [taskValue, setTaskValue] = useState("")
  
    const { postTasks } = useContext(TaskContext) 

    const saveTask = () => {
        if (!taskValue.trim()) return; 

        console.log(taskValue)
        postTasks(taskValue) 
        
        const mensagem = `Tarefa: ${taskValue} cadastrada com sucesso`;

        if (Platform.OS === 'web') {
            alert(mensagem);
        } else {
            Alert.alert("Sucesso", mensagem, [
                {
                    text: "Ok",
                    onPress: () => {}
                }
            ]);
        }
    }
    return (
        <View style={FormTaskStyle.formTaskBox}>
            <TextInput style={FormTaskStyle.taskInputName}
                value={taskValue}
                onChangeText={(textoDigitado) => {
                    setTaskValue(textoDigitado)
                }}
                placeholder="Adicione uma tarefa"
            />

            <TouchableOpacity 
                style={FormTaskStyle.taskbutton}
                onPress={() => saveTask()}
            >
                <Text style={FormTaskStyle.taskButtonText}> Adicionar</Text>
            </TouchableOpacity>
        </View>
    )
}
