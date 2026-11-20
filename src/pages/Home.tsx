import './Home.module.css'
import image from './image.png'
import Todos from './Todos'

const Layout = () => {
    return (
        <>
            <header>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <p>Booking</p>
                    <p>Facilities</p>
                    <p>About Us</p>
                    <p>Location</p>
                    <p>Contact</p>
                </div>
                <button>
                    Login
                </button>
            </header>
            <div style={{ display: 'flex' }}>
                <div>
                    <h1>Find your perfect place to stay</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <p>Watch video</p>
                </div>
                <img src={image} alt="" />
            </div>

            <div>
                <h1>Our most popular Hotels</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div>
                    <Todos/>
                </div>
            </div>
        </>
    )
}

export default Layout