import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function MoneroCard(props) {

    return (
        <Card className='dataCard'>
            <Card.Body>
                <Card.Title>Monero Stats</Card.Title>
                <Card.Text>
                    <Container>
                        <Row>
                            <Col md='6'>
                                Difficulty
                            </Col>
                            <Col md='6'>
                                {props.info.difficulty}
                            </Col>
                        </Row>
                        <Row>
                            <Col md='6'>
                                Height
                            </Col>
                            <Col md='6'>
                                {props.info.height}
                            </Col>
                        </Row>
                        <Row>
                            <Col md='6'>
                                Target Height
                            </Col>
                            <Col md='6'>
                                {props.info.target_height}
                            </Col>
                        </Row>
                    </Container>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default MoneroCard;
