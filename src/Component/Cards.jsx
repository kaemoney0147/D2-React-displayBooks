import { Component } from 'react';
import history from '../books/history.json'
import {Container,Row,Col,Card,Button} from 'react-bootstrap'

class Cards extends Component {
    state = { 

     } 
    render() { 
        return (
            <Container>
                <Row>
                    <Col sm={12}>
                        <h3 className='cardh3 mb-3'>{this.props.bookSubTitle}</h3>
                    </Col>
                    <Col sm={12}>
                        <Row>
                          {history.map((data)=>
                          (
                           <Col md={4} className='mb-3' key={data.asin}>
                           <Card className='card'>
                           <Card.Img variant="top" src={data.img}  />
      <Card.Body>
        <Card.Title className='cardtitle'>{data.title}</Card.Title>
        <Card.Text className='cardText'>Category:{data.category}
        </Card.Text>
        <Card.Text className='cardText'>price:${data.price}
        </Card.Text>
        <Button variant="primary">Buy Book</Button>
      </Card.Body>
                           </Card>
                           </Col>
                          ))}  
                        </Row>
                    </Col>
                </Row>
            </Container>

        )
    }
}
 
export default Cards;