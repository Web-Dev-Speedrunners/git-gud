import { Container, ListGroupItem, ListGroup } from "reactstrap";
import React from "react";
import { useTreflePlantInfoStyles as useStyles } from "./styles";

const MAX_SYNONYM_ENTRIES = 5;

const TreflePlantCarouselInfo = ({ plantDetail }) => {
  console.log(plantDetail);
  const classes = useStyles();

  const {
    commonName,
    scientificName,
    family,
    genus,
    yearNameGiven,
    synonyms,
  } = plantDetail;

  const renderAttribute = (key, value) => (
    <div className={classes.commonAttributesContainer}>
      <span className={classes.commonAttributeKey}>{key}</span>
      <span className={classes.commonAttributeValue}>{value}</span>
    </div>
  );

  const getSynonymListItems = () => {
    const itemData =
      synonyms.length > MAX_SYNONYM_ENTRIES
        ? synonyms.slice(0, MAX_SYNONYM_ENTRIES)
        : synonyms;
    return itemData.map((name, index) => (
      <ListGroupItem className={classes.synonymListItem} key={index}>
        {name}
      </ListGroupItem>
    ));
  };

  return (
    <div className={classes.container}>
      <h3 className={classes.title}>{plantDetail.commonName}</h3>
      <div className={classes.commonAttributesContainer}>
        <Container>
          <div>
            {commonName && renderAttribute("Common Name", commonName)}
            {scientificName &&
              renderAttribute("Scientific Name", scientificName)}
            {family && renderAttribute("Family", family)}
            {genus && renderAttribute("Genus", genus)}
            {yearNameGiven &&
              renderAttribute("First Named in Year", yearNameGiven)}
          </div>
          <div style={{ flexGrow: 1 }}></div>
          {synonyms && (
            <div className={classes.synonymContainer}>
              <h4 className={classes.synonymTitle}>Also Known As</h4>
              <ListGroup>{getSynonymListItems()}</ListGroup>
            </div>
          )}
        </Container>
      </div>
    </div>
  );
};

export default TreflePlantCarouselInfo;
