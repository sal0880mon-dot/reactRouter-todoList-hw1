import { Link, Outlet} from "react-router"

const Layout=()=>{
    return (
        <div>
            <Link to={'/'}><button>Home</button></Link>
            <Link to={'/about'}><button>About</button></Link>
            <Outlet/>
        </div>
    )
}

export default Layout