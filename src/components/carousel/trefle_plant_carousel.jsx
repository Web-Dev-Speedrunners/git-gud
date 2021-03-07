import {
  Col,
  Row,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import PropTypes from "prop-types";
import React, { useMemo, useState } from "react";
import { THEME_COLOR } from "../../constants/theme";
import { makeStyles } from "@material-ui/styles";
import { TreflePlantCarouselHeight } from "../../constants/dimensions";
import TreflePlantCarouselInfo from "./trefle_plant_info";

const useStyles = makeStyles({
  carouselImageStyle: {
    height: TreflePlantCarouselHeight,
    width: "100%",
  },
  infoContainer: {
    height: TreflePlantCarouselHeight,
    backgroundColor: THEME_COLOR.Primary,
  },
});

const TreflePlantCarousel = ({ plants }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [plantDetail, setPlantDetail] = useState(plants[0]);

  const classes = useStyles();

  const next = () => {
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    setActiveIndex(newIndex);
  };

  const items = useMemo(
    () =>
      plants.map((entry, index) => ({
        src: entry.image || entry.imageUrl || "",
        header: entry.commonName || entry.scientificName || "unknown",
        caption: "",
        key: index,
      })),
    [plants]
  );

  const slides = items.map((item) => {
    return (
      <CarouselItem
        key={item.src}
        onExited={() => setPlantDetail(plants[activeIndex])}
      >
        <img
          className={classes.carouselImageStyle}
          src={item.src}
          alt={item.altText}
        />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.header}
        />
      </CarouselItem>
    );
  });

  return (
    <div>
      <Row>
        <Col xs={9}>
          <Carousel
            ride={5000}
            activeIndex={activeIndex}
            next={next}
            previous={previous}
          >
            <CarouselIndicators
              items={items}
              activeIndex={activeIndex}
              onClickHandler={goToIndex}
            />
            {slides}
            <CarouselControl
              direction="prev"
              directionText="Previous"
              onClickHandler={previous}
            />
            <CarouselControl
              direction="next"
              directionText="Next"
              onClickHandler={next}
            />
          </Carousel>
        </Col>
        <Col xs={3}>
          <TreflePlantCarouselInfo plantDetail={plantDetail} />
        </Col>
      </Row>
    </div>
  );
};

TreflePlantCarousel.propTypes = {
  plants: PropTypes.arrayOf(
    PropTypes.object // TreflePlant class
  ),
};

export default TreflePlantCarousel;
