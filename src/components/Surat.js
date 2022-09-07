import React, { Component } from "react";
import { Button, Card, Container, Row } from "react-bootstrap";
import "./Surat.css";
import axios from "axios";

import { api_url } from "./utilty/constanta";

class Surat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      surah: [],
    };
  }

  componentDidMount() {
    axios({
      method: "get",
      url: api_url,
    }).then((response) => {
      const surah = response.data;
      this.setState({ surah });
      // console.log("surah:", surah);
      // console.log(response);
    });
  }

  hello = () => {
    return alert("Hello World!");
  };

  render() {
    return (
      <div>
        <div className="Header">
          <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.5BdmehUEN0Dj0kf87ACg_QHaDP?pid=ImgDet&rs=1" />
        </div>
        {this.state.surah.map((surat) => {
          return (
            <div>
              <Container className="container">
                <Row>
                  <Card border="secondary">
                    <div className="Booksmark">
                      <Card.Img variant="top" src="https://cdn.onlinewebfonts.com/svg/img_414212.png" />
                    </div>

                    <Card.Body onClick={this.hello}>
                      <Card.Title>
                        <div className="NomorSurat">Surat : {surat.number_of_surah}</div>
                        <br /> {}
                        {}
                      </Card.Title>

                      <Card.Title>
                        <div className="NamaSurat">
                          <h3>{surat.name_translations["ar"]}</h3>
                        </div>
                      </Card.Title>

                      <Card.Title>
                        <div className="JumlahAyat">
                          Banyak Ayat : {surat.number_of_ayah} <br />
                        </div>
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </Row>
              </Container>
            </div>
          );
        })}
        ;
      </div>
    );
  }
}

export default Surat;
