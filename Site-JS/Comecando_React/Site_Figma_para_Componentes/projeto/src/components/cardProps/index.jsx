import './card.css'

function cardProps(props) {
    return (
        <div>
            <img src={props.imagem} alt={props.alt}/>
            <h3>{props.titulo}</h3>
            <p>{props.descricao}</p>
            <h4>{props.preco}</h4>
        </div>
    )
}

export default cardProps;