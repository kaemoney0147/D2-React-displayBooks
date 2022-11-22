import { Container } from "react-bootstrap"
const Footer=()=>{
    return(
        <div id='footesfluid'className=" bg-primary fluid">
        <Container className='mt-5 d-flex justify-content-between '>
        <div className="footer mt-5">
        <ul>
            <li>Help</li>
            <li>Advisories</li>
            <li>Status</li>
            <li>Contact Bookshop</li>
        </ul>
        </div>
        <div className="footer mt-5">
        <ul >
            <li>About</li>
            <li>Bloog</li>
            <li>Press</li>
        </ul>
        </div>
        <div className="footer mt-5">
        <ul>
            <li>Policy</li>
            <li>Term of Use</li>
            <li>Status</li>
            <li>Address</li>
        </ul>
        </div>
       </Container>
       <div className='copyright'>
        Kaebookshop@{new Date().getFullYear()}
       </div>
       </div>
    )
}

export default Footer