import CardProps from '../CardProps';
import './produtos.css'

function Produtos2(props) {
    return (

        <div className='sectionProducts2'>
            <div className='cards'>
                <CardProps className='cartao' titulo="Grifo" alt="img1" descricao="Night lamp" preco="Rp 1.500.000" imagem="./images/imagesForSection/Image5.png" />
                <CardProps className='cartao' titulo="Muggo" alt="img2" descricao="Small mug" preco="Rp 150.000" imagem="./images/imagesForSection/image6.png" />
                <CardProps className='cartao' titulo="Pingky" alt="img3" descricao="Cute bed set" preco="Rp 7.000.000" imagem="./images/imagesForSection/image7.png" />
                <CardProps className='cartao' titulo="Potty" alt="img4" descricao="Minimalist flower pot" preco="Rp 500.000" imagem="./images/imagesForSection/image8.png" />
            </div>
            <div className='marginTop'>
            <a href='#' className='btnProducts2'>Show More</a>
            </div>
        </div>
    )
}

export default Produtos2;