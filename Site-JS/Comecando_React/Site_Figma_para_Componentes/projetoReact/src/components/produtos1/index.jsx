import CardProps from '../cardProps';
import './produtos.css'

function Produtos1(props) {
    return (

        <div>
            <h1>Our Products</h1>
            <div className='cards'>

                <CardProps className='cartao' titulo="Syltherine" alt="img1" descricao="Stylish cafe chair" preco="Rp 2.500.000" imagem="./images/imagesForSection/Images1.png" />
                <CardProps className='cartao' titulo="Leviosa" alt="img2" descricao="Stylish cafe chair" preco="Rp 2.500.000" imagem="./images/imagesForSection/image2.png" />
                <CardProps className='cartao' titulo="Lolito" alt="img3" descricao="Luxury big sofa" preco="Rp 7.000.000" imagem="./images/imagesForSection/image3.png" />
                <CardProps className='cartao' titulo="Respira" alt="img4" descricao="Outdoor bar table and stool" preco="Rp 500.000" imagem="./images/imagesForSection/image4.png" />
            </div>
        </div>
    )
}

export default Produtos1;