import './awards.css'

function awards() {

    return (
        <div className='allAwards'>
            <div className='cardAward'>
                <img src='./images/trophy.png' />
                <div>
                    <p>High Quality</p>
                    <p>crafted from top materials</p>
                </div>
            </div>
            <div className='cardAward'>
                <img src='./images/guarantee.png' />
                <div>
                    <p>Warranty Protection</p>
                    <p>Over 2 years</p>
                </div>
            </div>
            <div className='cardAward'>
                <img src='./images/shipping.png' />
                <div>
                    <p>Free Shipping</p>
                    <p>Order over 150 $</p>
                </div>
            </div>
            <div className='cardAward'>
                <img src='./images/customer-support.png' />
                <div>
                    <p>24 / 7 Support</p>
                    <p>Dedicated support</p>
                </div>
            </div>
        </div>
    )
}

export default awards;