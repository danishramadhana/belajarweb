import {Card, Col, Container, Row, Image} from "react-bootstrap"
import bawangImage from "../assets/images/sayuran/bawang.png"
import brokoliImage from "../assets/images/sayuran/brokoli1.jpg"
import cabaiImage from "../assets/images/sayuran/cabai.jpg"
import sawiImage from "../assets/images/sayuran/sawi.jpg"
import terongImage from "../assets/images/sayuran/terong.jpg"
import timunImage from "../assets/images/sayuran/timun1.jpg"
import tomatImage from "../assets/images/sayuran/tomat1.jpg"
import wortelImage from "../assets/images/sayuran/wortel.jpg"

const Sayur = () => {
    return (
        <div>
            <Container>
                <br/>
                <h1 className="text-white text-center">SAYUR-SAYURAN</h1>
                <br/>
                <Row>
                    <Col md={3} id="sayur">
                        <Card className=" text-white p-1 SAYURImages">
                            <Image src={bawangImage} alt="Bawang"/>
                            <div className="bg-dark">
                            <Card.Title className="text-center p-2 m-1">BAWANG</Card.Title>
                            </div>
                        </Card>
                    </Col>
                    <Col md={3}>
                         <Card className=" text-white p-1 SAYURImages">
                            <Image src={brokoliImage} alt="Brokoli"/>
                            <div className="bg-dark">
                            <Card.Title className="text-center p-2 m-1">BROKOLI</Card.Title>
                            </div>
                          </Card>
                    </Col>
                    <Col md={3}>
                        <div>
                        </div>
                        <Card className=" text-white p-1 SAYURImages">
                            <Image src={cabaiImage} alt="Cabai"/>
                            <div className="bg-dark">
                            <Card.Title className="text-center p-2 m-1">CABAI</Card.Title>
                            </div>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className=" text-white p-1 SAYURImages">
                            <Image src={sawiImage} alt="Sawi"/>
                            <div className="bg-dark">
                            <Card.Title className="text-center p-2 m-1">SAWI</Card.Title>
                            </div>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className=" text-white p-1 SAYURImages">
                            <Image src={terongImage} alt="Terong"/>
                            <div className="bg-dark">
                            <Card.Title className="text-center p-2 m-1">TERONG</Card.Title>
                            </div>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className=" text-white p-1 SAYURImages">
                            <Image src={timunImage} alt="Timun"/>
                            <div className="bg-dark">
                            <Card.Title className="text-center p-2 m-1">TIMUN</Card.Title>
                            </div>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className=" text-white p-1 SAYURImages">
                            <Image classname="tertentu" src={tomatImage} alt="Tomat"/>
                            <div className="bg-dark">
                            <Card.Title className="text-center p-2 m-1">TOMAT</Card.Title>
                            </div>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className=" text-white p-1 SAYURImages">
                            <Image src={wortelImage} alt="Wortel"/>
                            <div className="bg-dark">
                            <Card.Title className="text-center p-2 m-1">WORTEL</Card.Title>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Sayur