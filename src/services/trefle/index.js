import antPlants from "./data/antarctic_plants";
import ediblePlants from "./data/edible_plants";
import tallestPlants from "./data/tallest_plants";
import japanesePlants from "./data/japanese_plants";

class TreflePlant {
  constructor(plantData) {
    this.commonName = plantData.common_name;
    this.scientificName = plantData.scientific_name;
    this.yearNameGive = plantData.year;
    this.author = plantData.author;
    this.family = plantData.family;
    this.imageUrl = plantData.image_url;
    this.image = plantData.image
    this.genus = plantData.genus;
    this.synonyms = plantData.synonyms;
  }
}

export const AntarcticPlants = () => antPlants.data.map(plantData => new TreflePlant(plantData));

export const JapanesePlants = () => japanesePlants.data.map(plantData => new TreflePlant(plantData));

export const EdiblePlants = () => ediblePlants.data.map(plantData => new TreflePlant(plantData));

export const TallestPlants = () => tallestPlants.data.map(plantData => new TreflePlant(plantData));

console.log(JapanesePlants())