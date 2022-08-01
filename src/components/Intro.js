import {Col, Container, Row, Button} from "react-bootstrap"

const Intro = () => {
    return (
        <div className="Intro">
            <Container className="text-white text-center d-flex justify-content-center
            align-items-center">
                <Row>
                    <Col>
                        <div className="title">BELANJA MURAH</div>
                        <div className="title">GAK PAKE RIBER</div>
                        <div className="introButton mt-3 text-center">
                        <Button variant="dark" href="#buah">LIHAT SEMUA LIST</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Intro 