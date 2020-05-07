import React from "react";
import { Container, Row, Col } from "reactstrap";

function DisplayImage(props) {

    const {images} = props;

    return (

        images.length > 0 ?
        <Container fluid={true}>
            <Row className="p-2">
                <Col sm="4"><img src={images[0].src.original + "?auto=compress&cs=tinysrgb&fit=crop&h=250&w=450"} alt="dog" /></Col>
                <Col sm="4"><img src={images[1].src.original + "?auto=compress&cs=tinysrgb&fit=crop&h=250&w=450"} alt="dog" /></Col>
                <Col sm="4"><img src={images[2].src.original + "?auto=compress&cs=tinysrgb&fit=crop&h=250&w=450"} alt="dog" /></Col>
            </Row>
            <Row className="p-2">
                <Col sm="4"><img src={images[3].src.original + "?auto=compress&cs=tinysrgb&fit=crop&h=250&w=450"} alt="dog" /></Col>
                <Col sm="4"><img src={images[4].src.original + "?auto=compress&cs=tinysrgb&fit=crop&h=250&w=450"} alt="dog" /></Col>
                <Col sm="4"><img src={images[5].src.original + "?auto=compress&cs=tinysrgb&fit=crop&h=250&w=450"} alt="dog" /></Col>
            </Row>
            <Row className="p-2">
                <Col sm="4"><img src={images[6].src.original + "?auto=compress&cs=tinysrgb&fit=crop&h=250&w=450"} alt="dog" /></Col>
                <Col sm="4"><img src={images[7].src.original + "?auto=compress&cs=tinysrgb&fit=crop&h=250&w=450"} alt="dog" /></Col>
                <Col sm="4"><img src={images[8].src.original + "?auto=compress&cs=tinysrgb&fit=crop&h=250&w=450"} alt="dog" /></Col>
            </Row>
            <Row className="p-2">
                <Col sm="4"><img src={images[9].src.original + "?auto=compress&cs=tinysrgb&fit=crop&h=250&w=450"} alt="dog" /></Col>
                <Col sm="4"><img src={images[10].src.original + "?auto=compress&cs=tinysrgb&fit=crop&h=250&w=450"} alt="dog" /></Col>
                <Col sm="4"><img src={images[11].src.original + "?auto=compress&cs=tinysrgb&fit=crop&h=250&w=450"} alt="dog" /></Col>
            </Row>
            <Row className="p-2">
                <Col sm="4"><img src={images[12].src.original + "?auto=compress&cs=tinysrgb&fit=crop&h=250&w=450"} alt="dog" /></Col>
                <Col sm="4"><img src={images[13].src.original + "?auto=compress&cs=tinysrgb&fit=crop&h=250&w=450"} alt="dog" /></Col>
                <Col sm="4"><img src={images[14].src.original + "?auto=compress&cs=tinysrgb&fit=crop&h=250&w=450"} alt="dog" /></Col>
            </Row>
            <Row className="p-2">
                <Col sm="4"><img src={images[15].src.original + "?auto=compress&cs=tinysrgb&fit=crop&h=250&w=450"} alt="dog" /></Col>
                <Col sm="4"><img src={images[16].src.original + "?auto=compress&cs=tinysrgb&fit=crop&h=250&w=450"} alt="dog" /></Col>
                <Col sm="4"><img src={images[17].src.original + "?auto=compress&cs=tinysrgb&fit=crop&h=250&w=450"} alt="dog" /></Col>
            </Row>
            <Row className="p-2">
                <Col sm="4"><img src={images[18].src.original + "?auto=compress&cs=tinysrgb&fit=crop&h=250&w=450"} alt="dog" /></Col>
                <Col sm="4"><img src={images[19].src.original + "?auto=compress&cs=tinysrgb&fit=crop&h=250&w=450"} alt="dog" /></Col>
                <Col sm="4"><img src={images[20].src.original + "?auto=compress&cs=tinysrgb&fit=crop&h=250&w=450"} alt="dog" /></Col>
            </Row>
            <Row className="p-2">
                <Col sm="4"><img src={images[21].src.original + "?auto=compress&cs=tinysrgb&fit=crop&h=250&w=450"} alt="dog" /></Col>
                <Col sm="4"><img src={images[22].src.original + "?auto=compress&cs=tinysrgb&fit=crop&h=250&w=450"} alt="dog" /></Col>
                <Col sm="4"><img src={images[23].src.original + "?auto=compress&cs=tinysrgb&fit=crop&h=250&w=450"} alt="dog" /></Col>
            </Row>
            <Row className="p-2">
                <Col sm="4"><img src={images[24].src.original + "?auto=compress&cs=tinysrgb&fit=crop&h=250&w=450"} alt="dog" /></Col>
                <Col sm="4"><img src={images[25].src.original + "?auto=compress&cs=tinysrgb&fit=crop&h=250&w=450"} alt="dog" /></Col>
                <Col sm="4"><img src={images[26].src.original + "?auto=compress&cs=tinysrgb&fit=crop&h=250&w=450"} alt="dog" /></Col>
            </Row>
            <Row className="p-2">
                <Col sm="4"><img src={images[27].src.original + "?auto=compress&cs=tinysrgb&fit=crop&h=250&w=450"} alt="dog" /></Col>
                <Col sm="4"><img src={images[28].src.original + "?auto=compress&cs=tinysrgb&fit=crop&h=250&w=450"} alt="dog" /></Col>
                <Col sm="4"><img src={images[29].src.original + "?auto=compress&cs=tinysrgb&fit=crop&h=250&w=450"} alt="dog" /></Col>
            </Row>
        </Container>
        :
        null
    );

}

export default DisplayImage;
