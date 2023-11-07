import { useState } from "react";

function DeliveryStatus() {
    const [estado, setEstado] = useState("Pendente");

    const voltarEstado = () => {
        if (estado == "Entregue"){
            setEstado("Em Trânsito")
        } else if (estado == "Em Trânsito"){
            setEstado("Pendente")
        }
    }

    const avancarEstado = () => {
        if (estado == "Pendente"){
            setEstado("Em Trânsito")
        } else if (estado == "Em Trânsito"){
            setEstado("Entregue")
        }
    }

    return (
        <div>
            <h1>A sua entrega está: {estado}</h1>
            <button onClick={voltarEstado}>Voltar</button>
            <button onClick={avancarEstado}>Avançar</button>
        </div>
    )
}

export default DeliveryStatus;