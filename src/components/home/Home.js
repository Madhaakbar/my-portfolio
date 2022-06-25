import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import imgprogramming from "../assets/images/Home/img-programming.jpg";

const Home = () => {
  return (
    <div className="Home">
      <section>
        <div>
          <>
            <div className="content">
              <div className="row">
                <div className="main_content ">
                  <Card className="card_post">
                    <Card.Img
                      variant="top"
                      src={imgprogramming}
                      style={{ width: "100%", height: "10%" }}
                      className="card_img"
                    />
                    <Card.Body>
                      <span>Programming</span>
                      <Card.Title>
                        Tips Untuk Belajar Web Programming Untuk Pemula
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </div>
                <div className="side">
                  <Row className="desc_side">
                    <Col>
                      <Card.Img
                        variant="top"
                        src={imgprogramming}
                        style={{ width: "100%", height: "" }}
                        className="card_img"
                      />
                    </Col>
                    <Col>
                      <span>Programming</span>
                      <Card.Title>
                        Tips Untuk Belajar Web Programming Untuk Pemula
                      </Card.Title>
                    </Col>
                  </Row>
                  <Row className="desc_side">
                    <Col>
                      <Card.Img
                        variant="top"
                        src={imgprogramming}
                        style={{ width: "100%", height: "" }}
                        className="card_img"
                      />
                    </Col>
                    <Col>
                      <span>Programming</span>
                      <Card.Title>
                        Tips Untuk Belajar Web Programming Untuk Pemula
                      </Card.Title>
                    </Col>
                  </Row>
                  <Row className="desc_side">
                    <Col>
                      <Card.Img
                        variant="top"
                        src={imgprogramming}
                        style={{ width: "100%", height: "" }}
                        className="card_img"
                      />
                    </Col>
                    <Col>
                      <span>Programming</span>
                      <Card.Title>
                        Tips Untuk Belajar Web Programming Untuk Pemula
                      </Card.Title>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </>
        </div>
      </section>
    </div>
  );
};
export default Home;
