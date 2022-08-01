import {Navbar, Container, Nav} from "react-bootstrap"

const Navigationbar = () => {
    return (
    <div>
        <Navbar variant="dark">
          <Container>
            <Navbar.Brand href="/">BelajarWeb</Navbar.Brand>
            <Nav>
                <Nav.Link href="#sayur">SAYUR</Nav.Link>
                <Nav.Link href="#buah">BUAH</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
    </div>
    )
}

export default Navigationbar