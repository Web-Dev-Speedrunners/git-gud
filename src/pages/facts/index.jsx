import React, { useMemo } from "react";
import {
  AntarcticPlants,
  EdiblePlants,
  JapanesePlants,
  TallestPlants,
} from "../../services/trefle";
import { Col, Container } from "reactstrap";
import TreflePlantCarousel from "../../components/carousel/trefle_plant_carousel";
import { makeStyles } from "@material-ui/styles";
import { THEME_COLOR } from "../../constants/theme";

const useStyles = makeStyles({
  root: {
    margin: 0,
    padding: 0,
  },
  pageHeader: {
    backgroundColor: THEME_COLOR.Secondary,
    color: THEME_COLOR.Primary,
    marginTop: "24px",
    textAlign: "left",
  },
  section: {
    marginBottom: "40px",
  },
  carouselTitle: {
    color: THEME_COLOR.Secondary,
    textAlign: "right",
    fontWeight: 500,
  },
});

const FactsPage = () => {
  const classes = useStyles();

  const renderCarousel = (title, data) => (
    <Col>
      <section className={classes.section}>
        <h2 className={classes.carouselTitle}>{title}</h2>
        <TreflePlantCarousel plants={data} title={title} />
      </section>
    </Col>
  );

  const antarcticPlants = useMemo(AntarcticPlants, []);
  const ediblePlants = useMemo(() => EdiblePlants(), []);
  const tallestPlants = useMemo(() => TallestPlants(), []);
  const japanesePlants = useMemo(JapanesePlants, []);

  console.log(japanesePlants)

  return (
    <div className={classes.root}>
      <Container>
        <h1 className={classes.pageHeader}>Trees Around the World</h1>
        <div>
          {renderCarousel("Antarctic", antarcticPlants)}
          {renderCarousel("Japan", japanesePlants)}
          {renderCarousel("Edible Plants", ediblePlants)}
          {renderCarousel("Tallest Plants", tallestPlants)}
        </div>
      </Container>
    </div>
  );
};

export default FactsPage;
