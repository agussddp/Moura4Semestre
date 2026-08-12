import axios from "axios";
import { createContext, useState } from "react"; 


export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [listagemTarefas, setListagemTarefas] = useState([]);


  const getTasks = async () => { 
    try { 
      const APIReturn = await axios.get("http://172.16.36.46:3000/taskpoint"); 
      const APIData = await  APIReturn.data
      setListagemTarefas(APIData)
    } catch (error) { 
      console.log('Erro ao buscar os dados na api', error); 
    } 
  }
    
    const postTasks = () => {
      
    };

    return (
        
        <TaskContext.Provider value={{ listagemTarefas, getTasks, postTasks }}>
            {children}
        </TaskContext.Provider>
    );
};
