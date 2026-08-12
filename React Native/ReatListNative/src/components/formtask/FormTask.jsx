import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native"
import { FormTaskStyle } from "./FormTaskStyle"
import { useState } from "react"


export const FormTask = () => {
    const [taskValue, setTaskValue] = useState("")

    const saveTask = () => {
        console.log(taskValue)
        // Titulo da janela
        // texto da mensagem
        // array com os botoes da janela (podendo ser mais de 1)
        Alert.alert("Titulo da janela", `Tarefa: ${taskValue} cadastrado com sucesso`, [
            //BOTAO 1
            {
                text: "Ok",
                onPress: ()=> {}
            }
        ])
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
                onPress={()=>
                    saveTask()
                }
            >
                <Text style={FormTaskStyle.taskButtonText}> Adicionar</Text>
            </TouchableOpacity>
        </View>
    )
}

