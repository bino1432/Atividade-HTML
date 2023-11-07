import './ThemeSwitcher.css'

function ThemeSwitcher() {

    const trocaDeCores = () => {
        if (document.body.className === 'claro') {
            document.body.className = 'escuro';
        } else {
            document.body.className = 'claro';
        }    
    }

    return (
        <div>
            <h3>Click no botão para trocar a cor</h3>
            <button onClick={trocaDeCores}>Trocar</button>
        </div>
    )
}

export default ThemeSwitcher