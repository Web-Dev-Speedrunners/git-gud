import { UncontrolledCarousel } from "reactstrap";
import PropTypes from "prop-types";
import { useMemo } from "react";

const TreflePlantCarousel = ({ plants, title }) => {
  const items = useMemo(
    () =>
      plants.map((entry, index) => ({
        src: entry.imageUrl || "",
        header: entry.commonName || entry.scientificName || "unknown",
        caption: "Example Caption",
        key: index,
      })),
    [plants]
  );

  return (
    <div>
      <h3>{title}</h3>
      <UncontrolledCarousel className="plantdata-carousel" items={items} />
    </div>
  );
};

TreflePlantCarousel.propTypes = {
  plants: PropTypes.arrayOf(
    PropTypes.object // TreflePlant class
  ),
  title: PropTypes.arrayOf(PropTypes.object),
};

export default TreflePlantCarousel;
