import astrologo from './Img/astrologo.png'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import AppRouter from '../Router'



const Logo = styled.img ` 
    width: 200px;
    margin-left: 50px;
    display: flex;
    object-fit:scale-down;
    height: 55px;
`
const Navgar = (props) => {

    return(
        <div>
            <nav className="navbar navbar-light bg-light">
                <Logo src={astrologo} />
                <form className="form-inline">
                    <Link to='/inicio' className='btn btn-danger me-3'>HOME</Link>
                    <Link to='/lista' className='btn btn-danger me-3'>MATCHS</Link>
                </form>
            </nav>
        </div>
    
    )
}

export default Navgar;