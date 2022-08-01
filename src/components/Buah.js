import {Card, Col, Container, Row, Image} from "react-bootstrap"
import angurImage from "../assets/images/buah/Anggur.jpg"
import aplukatImage from "../assets/images/buah/aplukat.jpg"
import durianImage from "../assets/images/buah/durian.jpg"
import manggaImage from "../assets/images/buah/mangga.png"
import pepayaImage from "../assets/images/buah/pepaya1.jpg"
import stawberiImage from "../assets/images/buah/stawberi.jpg"
import semangkaImage from "../assets/images/buah/semangka.jpg"
import melonImage from "../assets/images/buah/melon.webp"

const Buah = () => {
    return (
        <div id="buah">
            <Container>
                <br/>
                <h1 className="text-white text-center">BUAH-BUAHAN</h1>
                <br/>
                <Row>
                    <Col md={3}>
                        <Card className=" text-white p-1 BUAHImages">
                            <Image src={aplukatImage} alt="Buah Alpukat"/>
                            <div className="bg-dark">
                            <Card.Title className="text-center p-2 m-1">ALPUKAT</Card.Title>
                            </div>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className=" text-white p-1 BUAHImages">
                            <Image className="BUAHImage" src={angurImage} alt="Buah Anggur"/>
                            <div className="bg-dark">
                            <Card.Title className="text-center p-2 m-1">ANGGUR</Card.Title>
                            </div>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className=" text-white p-1 BUAHImages">
                            <Image src={durianImage} alt="Buah Durian"/>
                            <div className="bg-dark">
                            <Card.Title className="text-center p-2 m-1">DURIAN</Card.Title>
                            </div>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className=" text-white p-1 BUAHImages">
                            <Image src={manggaImage} alt="Buah Mangga"/>
                            <div className="bg-dark">
                            <Card.Title className="text-center p-2 m-1">MANGGA</Card.Title>
                            </div>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className=" text-white p-1 BUAHImages">
                            <Image src={pepayaImage} alt="Buah Pepaya"/>
                            <div className="bg-dark">
                            <Card.Title className="text-center p-2 m-1">PEPAYA</Card.Title>
                            </div>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className=" text-white p-1 BUAHImages">
                            <Image src={stawberiImage} alt="Buah Strawberry"/>
                            <div className="bg-dark">
                            <Card.Title className="text-center p-2 m-1">STRAWBERRY</Card.Title>
                            </div>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className=" text-white p-1 BUAHImages">
                            <Image src={semangkaImage} alt="Buah Semangka"/>
                            <div className="bg-dark">
                            <Card.Title className="text-center p-2 m-1">SEMANGKA</Card.Title>
                            </div>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className=" text-white p-1 BUAHImages">
                            <Image src={melonImage} alt="Buah Melon"/>
                            <div className="bg-dark">
                            <Card.Title className="text-center p-2 m-1">MELON</Card.Title>
                            </div>
                        </Card>
                    </Col>
                    
                </Row>
            </Container>
        </div>
    )
}

export default Buah