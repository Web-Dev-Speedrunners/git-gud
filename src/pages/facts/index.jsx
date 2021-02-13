import React, { useMemo } from "react";
import {
  AntarcticPlants,
  EdiblePlants,
  JapanesePlants,
  TallestPlants,
} from "../../services/trefle";
import { Col, Container, Row } from "reactstrap";
import "./index.css";
import TreflePlantCarousel from "../../components/carousel/trefle_plant_carousel";

const FactsPage = () => {
  const renderCarousel = (title, data) => (
    <Col>
      <TreflePlantCarousel
        plants={data}
        title={title}
      />
    </Col>
  );

  const antacticPlants = useMemo(AntarcticPlants, []);
  const ediblePlants = useMemo(EdiblePlants, []);
  const tallestPlants = useMemo(TallestPlants, []);
  const japanesePlants = useMemo(JapanesePlants, []);

  return (
    <div>
      <Container>
        <Row xs={2}>
          {renderCarousel("Pants from the Antarctic", antacticPlants)}            
          {renderCarousel("Pants from the Japan", japanesePlants)}            
          {renderCarousel("Edible Plants", ediblePlants)}            
          {renderCarousel("Tallest Plants", tallestPlants)}            
        </Row>
      </Container>
    </div>
  );
};

export default FactsPage;
