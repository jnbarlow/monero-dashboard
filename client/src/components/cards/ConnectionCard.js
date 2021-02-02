import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function ConnectionCard(props) {

    return (
        <Card className='dataCard'>
            <Card.Body>
                <Card.Title>Connection Stats</Card.Title>
                <Card.Text>
                    <Container>
                        <Row>
                            <Col md='8'>
                                Incomming Connections:
                            </Col>
                            <Col md='4'>
                                {props.info.incoming_connections_count}
                            </Col>
                        </Row>
                        <Row>
                            <Col md='8'>
                                Outgoing Connections:
                            </Col>
                            <Col md='4'>
                                {props.info.outgoing_connections_count}
                            </Col>
                        </Row>
                        <Row>
                            <Col md='8'>
                                RPC Connections:
                            </Col>
                            <Col md='4'>
                                {props.info.rpc_connections_count}
                            </Col>
                        </Row>
                    </Container>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default ConnectionCard;
