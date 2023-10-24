import './header.css';

function Header() {
    return (
        <header className='header'>
            <div className='img_Header'>
                <img src='./images/logo.png' alt='logo' />
            </div>
            <div className='btn_Header'>
                <a className='btn' href='#'>Home</a>
                <a className='btn' href='#'>Shop</a>
                <a className='btn' href='#'>About</a>
                <a className='btn' href='#'>Contact</a>
            </div>
            <div className='icons_Header'>
                <img className='icon' src='./images/profile_icon.png' alt='profile' />
                <img className='icon' src='./images/search_icon.png' alt='search' />
                <img className='icon' src='./images/heart_icon.png' alt='heart' />
                <img className='icon' src='./images/little_car_icon.png' alt='little car' />
            </div>
        </header>
    )
}

export default Header