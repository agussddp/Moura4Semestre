import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useContext } from 'react';
import { FormTaskStyle } from './FormTaskStyle';
import { TaskContext } from '../../context/TaskContext';

export const FormTask = () => {
  const { 
    postTasks, 
    taskValue, 
    setTaskValue, 
    editMode, 
    setEditMode, 
    idToEdit, 
    setIdToEdit, 
    putTaskConfirm 
  } = useContext(TaskContext);

  const saveTask = () => {
    console.log(taskValue);
    postTasks(taskValue);
  };

  return (
    <View style={FormTaskStyle.formTaskBox}>
      <TextInput 
        style={FormTaskStyle.taskInputName} 
        value={taskValue} 
        onChangeText={(textoDigitado) => { 
          setTaskValue(textoDigitado); 
        }} 
        placeholder='Adicione uma tarefa' 
      />

      <TouchableOpacity 
        style={FormTaskStyle.taskButton} 
        onPress={async () => { 
          if (editMode) {
            const salvou = putTaskConfirm({ id: idToEdit, descricao: taskValue });
            
            if (salvou) {
              Alert.alert('Editar', `${taskValue} foi editado`, [{ text: 'OK' }]);
            } else {
              Alert.alert('Editar', `Erro ao editar`, [{ text: 'OK' }]);
            }
          } else {
            saveTask();
          }
        }} 
      >
        <Text style={FormTaskStyle.taskButtonText}>Salvar</Text>
      </TouchableOpacity>

      {editMode && (
        <TouchableOpacity 
          style={FormTaskStyle.taskButton} 
          onPress={() => { 
            setTaskValue("");
            setEditMode(false);
            setIdToEdit(0);
          }} 
        >
          <Text style={FormTaskStyle.taskButtonText}>Cancelar</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
