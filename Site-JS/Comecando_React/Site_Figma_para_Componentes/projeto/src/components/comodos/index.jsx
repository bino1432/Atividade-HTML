import './comodos.css'

function Comodos() {
    return (
        <div>
            <h2 className='txt'>Browse The Range</h2>
            <p className='txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className='imgs'>
                <div>
                    <img src='./images/img_comodo_1.png' alt="Dining" />
                    <h3 className='txt'>Dining</h3>
                </div>
                <div>
                    <img src='./images/img_comodo_2.png' alt="Dining" />
                    <h3 className='txt'>Living</h3>
                </div>
                <div>
                    <img src='./images/img_comodo_3.png' alt="Dining" />
                    <h3 className='txt'>Bedroom</h3>
                </div>
            </div>
        </div>
    )
};

export default Comodos