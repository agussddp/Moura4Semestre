import { useEffect, useState } from 'react';
import './App.css';
import penIcon from './assets/edit-icon.svg';
import trashIcon from './assets/trash-icon.svg';
import axios from 'axios';

function App() {
  // States / variáveis
  const [tasklist, setTasklist] = useState([]);
  const [taskValue, setTaskValue] = useState(''); 
  const [editMode, seteditMode] = useState(false);
  const [idToEdit, seteidToEdit] = useState(0); 


  // Funções
  // CRUD - POST(CREATE) | GET | PUT/Patch | DELETE

  //-- GET - Busca todas as tarefas
  const getTasks = async () => {
    try {
      // Retorna a requisicao (header and body data)
      const APIReturn = await axios.get('http://localhost:3000/taskpoint');
      const APIData = await APIReturn.data;
      // Atualizar o state
      setTasklist(APIData);
    } catch (error) {
      console.log(error);
    }
  };

  //-- GET{id} - Busca uma tarefa por id
  const getTaskByID = async (id) => {
    alert(`Funcao getTasksByID em desenvolvimento ${id}`); 
  };


  //-- POST _ Cadastra uma tarefa
  const postTask = async (e) => {
    e.preventDefault(); // evita/captura o evento submit
    
    if (taskValue.trim().length == 0) {
      alert('Preencher todos os campos');
      return false;
    }
    
    // passou da validacao vamos cadastrar
    try {
      await axios.post('http://localhost:3000/taskpoint', { descricao: taskValue }); 
      setTaskValue(''); // limpar o campo de formulario
      getTasks();
    } catch (error) {
      console.log(error);
    }
  };

  //-- PUT _ Pre-editar (apenas mostras os dados no formulario)
  const putTask = (item) => {
    seteditMode(true);
    seteidToEdit(item.id)
    setTaskValue(item.descricao); 
  };

  //-- PUT _ Atualiza uma tarefa
  const confirmPutTask = async (e) => { 
    e.preventDefault();
    
    if (taskValue.trim().length == 0){
      alert("Preencja o texto da tarefa");
      return false;
    }

    try {
    const APIReturn = await axios.put(
      `http://localhost:3000/taskpoint/${idToEdit}`, {
        descricao: taskValue
      }
    );
      seteidToEdit(0); // zera o id que vai editar, pois ja editamos o cadastro
      setTaskValue(""); // zera o campo do formulario
      seteditMode(false) //para sumir o botao de cancelar
      alert("A tarefa foi editada");
      getTasks()
    } catch (error) {
      alert("Erro ao editar");
      console.log(error);
    }
  };

  //-- DELETE _ Apaga uma tarefa
  const deleteTask = async (id) => {
    // Perguntar ao usuario se quer excluir
    const querExcluir = window.confirm('Atencao: quer realmente excluir o registro?'); // CORRIGIDO: aspas e prefixo window
    if (!querExcluir) return false;
    
    try {
      await axios.delete(`http://localhost:3000/taskpoint/${id}`); // CORRIGIDO: crases para template string
      getTasks();
      alert('Tarefa excluida com sucesso'); // CORRIGIDO: aspas
    } catch (error) {
      console.log(error);
      alert('erro ao excluir a tarefa'); // CORRIGIDO: aspas
    }
  };

  // effects e ciclos de vida do componente
  // onMount - quando o componente for montado
  useEffect(() => {
    // Carrega os dados quando o componente for montado
    getTasks();
  }, []);

  // JSX
  return (
    <>
      <header className="header-section">
        <h1 className="header-section__title">React List</h1>
      </header>
      <main className="body-section">
        {/* formulario de cadastro da tarefa -- Cadastra ou edita */}
        <form className="cad-task" onSubmit={editMode ? confirmPutTask : postTask}>
          <input
            className="card-task__entry"
            type="text"
            placeholder="Adicione uma tarefa"
            value={taskValue} 
            onChange={(e) => {
              // atualiza o valor do state
              setTaskValue(e.target.value);
            }}
          />

          <p>{taskValue}</p> {/* CORRIGIDO: taskValue */}
          <button className="card-task__btn-confirm">Adicionar</button>

              {
                editMode && (
                  <button 
                  className='card-task__btn-confirm' 
                  type='button'
                  onClick={() => {
                    // zera os states responsaveis pela edicao e entao some com o botao
                    setTaskValue("")
                    seteidToEdit(0)
                    seteditMode(false)
                  }}>Cancelar
                  </button>
                )
              }
        </form>
        <section className="card-list">
          {tasklist.map((t) => {
            return (
              <article className="cardtask" key={t.id}>
                <p className="cardtask__task-text">{t.descricao}</p>
                <div className="cardtask__icon-box">
                  <div className="cardlist__icon">
                    <img
                      src={penIcon}
                      className="cardlist__edit-icon"
                      alt="imagem de um lapis. funcao de editar a tarefa"
                      onClick={() => {
                        putTask(t);
                      }}
                    />
                  </div>
                  <div className="cardlist__icon">
                    <img
                      src={trashIcon}
                      className="cardlist__delete-icon"
                      alt="imagem de uma lixeira. funcao de excluir a tarefa"
                      onClick={() => {
                        deleteTask(t.id);
                      }}
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </section>
      </main>
      <footer className="footer-list">
        <p className="footer-list__right-text">2026, React List - todos os direitos reservados</p>
      </footer>
    </>
  );
}

export default App;
