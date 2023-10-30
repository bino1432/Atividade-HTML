import './awards.css'

function awards() {

    return (
        <div className='allAwards'>
            <div className='cardAward'>
                <img src='./images/trophy.png' />
                <div>
                    <h4>High Quality</h4>
                    <p>crafted from top materials</p>
                </div>
            </div>
            <div className='cardAward'>
                <img src='./images/guarantee.png' />
                <div>
                    <h4>Warranty Protection</h4>
                    <p>Over 2 years</p>
                </div>
            </div>
            <div className='cardAward'>
                <img src='./images/shipping.png' />
                <div>
                    <h4>Free Shipping</h4>
                    <p>Order over 150 $</p>
                </div>
            </div>
            <div className='cardAward'>
                <img src='./images/customer-support.png' />
                <div>
                    <h4>24 / 7 Support</h4>
                    <p>Dedicated support</p>
                </div>
            </div>
        </div>
    )
}

export default awards;