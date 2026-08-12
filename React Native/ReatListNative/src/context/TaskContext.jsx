import axios from "axios";
import { createContext, useState } from "react"; 

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [listagemTarefas, setListagemTarefas] = useState([]);

    const getTasks = async () => { 
        try { 
            const APIReturn = await axios.get("http://172.16.36"); 
            const APIData = APIReturn.data; // Corrigido: Removido o 'await' daqui, pois o axios já entrega os dados prontos
            setListagemTarefas(APIData);
        } catch (error) { 
            console.log('Erro ao buscar os dados na api', error); 
        } 
    };
    
    const postTasks = async (taskValue) => {
        try {
            await axios.post("http://172.16.36", {descricao: taskValue}); 
            getTasks();
        } catch (error) {
            console.log("erro ao chamar a API", error); 
        }
    };

    const deleteTask = async (id) => {
        try {
            await axios.delete(`http://172.16.36/${id}`);
            getTasks();
        } catch (error) {
            console.log('Erro ao deletar a api', error); 
        }
    };

    const putTask = async (id, taskValue) => {
        try {
            await axios.put(`http://172.16.36/${id}`, {descricao: taskValue});
            getTasks();
        } catch (error) {
            console.log('Erro ao atualizar a api', error); 
        }
    };

    return (
        <TaskContext.Provider value={{ listagemTarefas, getTasks, postTasks, deleteTask, putTask, putTAskPreview, putTaskConfirm, }}>
            {children}
        </TaskContext.Provider>
    );
};
