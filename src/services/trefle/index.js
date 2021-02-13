import antPlants from "./data/antarctic_plants.json";
import ediblePlants from "./data/edible_plants.json";
import tallestPlants from "./data/tallest_plants.json";
import japanesePlants from "./data/japanese_plants.json";

class TreflePlant {
  constructor(plantData) {
    this.commonName = plantData.common_name;
    this.scientificName = plantData.scientific_name;
    this.yearNameGive = plantData.year;
    this.author = plantData.author;
    this.family = plantData.family;
    this.imageUrl = plantData.image_url;
    this.genus = plantData.genus;
    this.synonyms = plantData.synonyms;
  }
}

const FilterDataset = (plantData) => {
  // Remove Duplicates
  const seen = new Set();
  const unique = [];
  plantData.forEach((entry) => {
    if (!seen.has(entry.id)) {
      seen.add(entry.id);
      const plant = new TreflePlant(entry);
      // filters out no images
      if (plant.imageUrl) { 
        unique.push(plant);
      }
    }
  });
  return unique;
};

export const AntarcticPlants = () => FilterDataset(antPlants.data);

export const JapanesePlants = () => FilterDataset(japanesePlants.data);

export const EdiblePlants = () => FilterDataset(ediblePlants.data);

export const TallestPlants = () => FilterDataset(tallestPlants.data);
