import {Container,Jumbotron,Button} from 'react-bootstrap'
const JumbotronComp=()=>{
    return(
      <Jumbotron fluid className='jumbotron'>
      <Container>
      <h1>Connet With Books Libary at Your Finger Tip</h1>
  <p>
    Kae BookShop brings all old and lastest books to you online.
  </p>
  <p>
    <Button id='jumbotronbutton'>Show Books</Button>
  </p>
      </Container>
    </Jumbotron>
    )
}
export default JumbotronComp