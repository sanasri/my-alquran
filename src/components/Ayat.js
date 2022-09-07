import React, { Component } from "react";
import { Card, Container } from "react-bootstrap";

export default class Ayat extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="Header">
            <div className="Image">
              <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.5BdmehUEN0Dj0kf87ACg_QHaDP?pid=ImgDet&rs=1" />
            </div>
          </div>

          <Container className="container">
            <row>
              <Card border="secondary" mt-5 mb-3 style={{ width: "70rem" }}>
                <div className="Booksmark">
                  <Card.Img variant="top" src="https://cdn.onlinewebfonts.com/svg/img_414212.png" />
                </div>

                <Card.Body>
                  <Card.Title>
                    <div className="NomorSurat">Surat : {}</div>
                    <br /> {}{" "}
                  </Card.Title>

                  <Card.Text>
                    <div className="NamaSurat">
                      <h3>{}</h3>
                    </div>

                    <div className="JumlahAyat">
                      Banyak Ayat : <br />
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </row>
          </Container>
        </div>
      </div>
    );
  }
}
