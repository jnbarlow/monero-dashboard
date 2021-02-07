import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import qr from '../qr.jpg';

function Footer() {
    return (
        <div className="footerContainer">
            <Container className="footer">
                <Row>
                    <Col>
                        Like the dashboard?
                        <br /> Please Consider Donating:
                        <br />
                        8Adfyz4eUijhttLTa4W3Vzj2SFZGVWyT6GX4HADXScQ1d5FgyGssQETHwKZhSn7CStWafUcXzr6758njdqXPsYMdSEkLMyb
                    </Col>
                    <Col>
                        <img alt="qr code" src={qr} style={{ width: '125px' }}></img>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;
