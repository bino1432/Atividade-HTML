import { useState } from "react";

function ToDoList() {
    const [tarefa, setTarefa] = useState([])
    const [novaTarefa, setNovaTarefa] = useState("a")

    const addTarefa = () => {
        let adicionarTarefa = ([...tarefa, novaTarefa])
        setTarefa(adicionarTarefa)
    }

    return (
        <div>
            <h2>Lista De Tarefas</h2>
            <input placeholder="Insira um item aqui" onInput={event => { setNovaTarefa(event.target.value) }} />
            <button onClick={addTarefa}>Adicionar</button>

            <div>
                {
                    tarefa.map((tarefaTexto, index) => {
                        return (<><p key={index}>{tarefaTexto}</p> </>)
                    })
                }
            </div>
        </div>
    )
}

export default ToDoList;