import React from "react";
import { Row, Card, Container, Col, Button } from "react-bootstrap";
import imgprogramming from "../assets/images/Home/img-programming.jpg";

const Home = () => {
  return (
    <div className="Home">
      <>
        <Row>
          <div className="row">
            <div className="main">
              <Card className="card__post">
                <Container>
                  <img
                    src={imgprogramming}
                    alt="gambar post"
                    className="fakeimg"
                    style={{ height: "400px" }}
                  />
                  <Card.Title className="tittle__post">
                    <h2 className="heading__post">
                      Tips Programming Bagi Pemula
                    </h2>
                    <h5 className="tittle__desc__post">
                      Pemrograman, Juni 28, 2022
                    </h5>
                  </Card.Title>
                  <Card.Text className="desc__post">
                    <p>
                      Sunt in culpa qui officia deserunt mollit anim id est
                      laborum consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco.
                    </p>
                  </Card.Text>
                  <img
                    src={imgprogramming}
                    alt="gambar post"
                    className="fakeimg"
                    style={{ height: "400px" }}
                  />
                  <Card.Title className="tittle__post">
                    <h2>TITLE HEADING</h2>
                    <h5>Title description, Sep 2, 2017</h5>
                  </Card.Title>
                  <Card.Text className="desc__post">
                    <p>
                      Sunt in culpa qui officia deserunt mollit anim id est
                      laborum consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco.
                    </p>
                  </Card.Text>
                </Container>
              </Card>
            </div>

            <div class="side">
              <Card className="card__post">
                <Container>
                  <Card.Title className="tittle__post">
                    <h2>About Me</h2>
                    <h5>Photo of me:</h5>
                  </Card.Title>
                  <img
                    src={imgprogramming}
                    alt="gambar post"
                    className="fakeimg"
                    style={{ height: "200px" }}
                  />
                  <Card.Text className="desc__post">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Cras suscipit feugiat mauris vel interdum. Cras ut sapien
                      nisi. Sed scelerisque lacus vitae lacinia tincidunt
                    </p>
                  </Card.Text>
                  {/* Popular Post */}
                  <Card.Title className="tittle__post">
                    <h3>Popular Post</h3>
                  </Card.Title>
                  <Row>
                    <Col className="side__popular__img__post">
                      <img
                        src={imgprogramming}
                        alt="gambar post"
                        className="fakeimg"
                        style={{ height: "100px" }}
                      />
                    </Col>
                    <Col className="desc__post__popular__post">
                      <Card.Text className="desc__post__popular__post">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </p>
                      </Card.Text>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="side__popular__img__post">
                      <img
                        src={imgprogramming}
                        alt="gambar post"
                        className="fakeimg"
                        style={{ height: "100px" }}
                      />
                    </Col>
                    <Col className="desc__post__popular__post">
                      <Card.Text className="desc__post__popular__post">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </p>
                      </Card.Text>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="side__popular__img__post">
                      <img
                        src={imgprogramming}
                        alt="gambar post"
                        className="fakeimg"
                        style={{ height: "100px" }}
                      />
                    </Col>
                    <Col className="desc__post__popular__post">
                      <Card.Text className="desc__post__popular__post">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </p>
                      </Card.Text>
                    </Col>
                  </Row>
                  <Row>
                    <h3 className="tittle__post">Main Tags</h3>
                    <Col>
                      <>
                        <div>
                          <Button
                            variant="outline-primary text-white"
                            className="main__tags"
                          >
                            Pemrograman
                          </Button>{" "}
                          <Button
                            variant="outline-primary text-white"
                            className="main__tags"
                          >
                            Tutorial
                          </Button>{" "}
                          <Button
                            variant="outline-primary text-white"
                            className="main__tags"
                          >
                            Tips
                          </Button>{" "}
                          <Button
                            variant="outline-primary text-white"
                            className="main__tags"
                          >
                            Informasi
                          </Button>{" "}
                          <Button
                            variant="outline-primary text-white"
                            className="main__tags"
                          >
                            Teknologi
                          </Button>{" "}
                          <Button
                            variant="outline-primary text-white"
                            className="main__tags"
                          >
                            Rekomendasi
                          </Button>{" "}
                        </div>
                      </>
                    </Col>
                  </Row>
                </Container>
              </Card>
            </div>
          </div>
        </Row>
      </>
    </div>
  );
};
export default Home;
