import { Col, Container, Row, Button } from "react-bootstrap";

const Intro = () => {
  return (
    <div className=" intro">
      <Container
        className="text-white text-center d-flex justify-content-center
          align-items-center"
      >
        <Row>
          <Col>
            <div className="title">Free Films</div>
            <div className="title">Not Premium</div>
            <div className="Intro Button mt-4 text-center">
              <Button variant="dark">Lihat Semua List</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
