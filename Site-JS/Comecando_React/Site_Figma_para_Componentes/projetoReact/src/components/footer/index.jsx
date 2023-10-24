import './footer.css'

function footer() {
    return (
        <div>
            <div className='allFooter'>
                <div className='divFuniro'>
                    <p className='logofooter'>Funiro.</p>
                    <p className='allFooterP'>400 University Drive Suite 200 Coral Gables,</p>
                    <p className='allFooterP'>FL 33134 USA</p>
                </div>
                <div className='divLinks'>
                    <p className='allFooterP'>Links</p>
                    <a className='btnFooter' href='youtube.com'>Home</a>
                    <a className='btnFooter' href='youtube.com'>Shop</a>
                    <a className='btnFooter' href='youtube.com'>About</a>
                    <a className='btnFooter' href='youtube.com'>Contact</a>
                </div>
                <div className='divHelp'>
                    <p className='allFooterP'>Help</p>
                    <a className='btnFooter' href='youtube.com'>Payment Options</a>
                    <a className='btnFooter' href='youtube.com'>Returns</a>
                    <a className='btnFooter' href='youtube.com'>Privacy Policies</a>
                </div>
                <div className='divNewsletter'>
                    <p className='allFooterP'>Newsletter</p>
                    <div>
                        <input classname='inputFooter' type='text' placeholder='Enter your email adress'></input>
                        <a className='btnFooter' href="youtube.com">Subcribe</a>
                    </div>
                </div>
            </div>
            <div>
                <img src='./images/line.png' />
                <p>2023 furino. All rights reverved</p>
            </div>
        </div>
    )
}

export default footer;