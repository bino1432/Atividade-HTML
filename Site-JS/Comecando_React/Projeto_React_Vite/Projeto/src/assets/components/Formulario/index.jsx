import './Formulario.css';
import CampoTexto from '../CampoTexto';

const Formulario = () => {
    return (
        <section className="Formulario">
            <form>
                <h2>Preencha todos os campos para confirmar o pedido</h2>
                <CampoTexto label="Nome" placeholder="Digite o seu nome" />
                <CampoTexto label="Sobre    Nome" placeholder="Digite o seu sobrenome" />

            </form>
        </section>
    );
};

export default Formulario;