import RedWood from '../../../assets/images/plants/red_wood.jpeg'
import MountainAsh from '../../../assets/images/plants/mountain_ash.jpeg'
import DouglasFir from '../../../assets/images/plants/douglas-fir.jpeg'

const TallestTreeData = {
  "data": [
    {
      "id": 181116,
      "common_name": "Redwood",
      "slug": "sequoia-sempervirens",
      "scientific_name": "Sequoia sempervirens",
      "year": 1847,
      "bibliography": "Syn. Conif.: 198 (1847)",
      "author": "(D.Don) Endl.",
      "status": "accepted",
      "rank": "species",
      "family_common_name": "Cypress family",
      "genus_id": 6164,
      "image_url": "https://bs.floristic.org/image/o/d5087bd269369bae6e3d200bf82193a2100f1217",
      "image": RedWood,
      "synonyms": [
        "Sequoia pyramidata",
        "Taxodium sempervirens",
        "Steinhauera sempervirens",
        "Gigantabies taxifolia",
        "Taxodium nutkaense",
        "Schubertia sempervirens",
        "Sequoia religiosa",
        "Sequoia taxifolia",
        "Condylocarpus sempervirens"
      ],
      "genus": "Sequoia",
      "family": "Cupressaceae",
      "links": {
        "self": "/api/v1/species/sequoia-sempervirens",
        "plant": "/api/v1/plants/sequoia-sempervirens",
        "genus": "/api/v1/genus/sequoia"
      }
    },
    {
      "id": 135648,
      "common_name": "Mountain-ash",
      "slug": "eucalyptus-regnans",
      "scientific_name": "Eucalyptus regnans",
      "year": 1870,
      "bibliography": "Rep. (Annual) Acclim. Soc. Victoria 1870-1871: 20 (1870)",
      "author": "F.Muell.",
      "status": "accepted",
      "rank": "species",
      "family_common_name": "Myrtle family",
      "genus_id": 2059,
      "image": MountainAsh,
      "synonyms": ["Eucalyptus regnans var. fastigata"],
      "genus": "Eucalyptus",
      "family": "Myrtaceae",
      "links": {
        "self": "/api/v1/species/eucalyptus-regnans",
        "plant": "/api/v1/plants/eucalyptus-regnans",
        "genus": "/api/v1/genus/eucalyptus"
      }
    },
    {
      "id": 171825,
      "common_name": "Douglas-fir",
      "slug": "pseudotsuga-menziesii",
      "scientific_name": "Pseudotsuga menziesii",
      "year": 1950,
      "bibliography": "Conif. Duarum Nominibus: 4 (1950)",
      "author": "(Mirb.) Franco",
      "status": "accepted",
      "rank": "species",
      "family_common_name": "Pine family",
      "genus_id": 5688,
      "image": DouglasFir,
      "synonyms": [
        "Pseudotsuga taxifolia",
        "Abies menziesii",
        "Abies mucronata",
        "Pseudotsuga mucronata",
        "Picea douglasii",
        "Pinus douglasii",
        "Abies obliqua",
        "Pseudotsuga menziesii var. viridis",
        "Abies obliquata",
        "Pseudotsuga taxifolia var. palustris",
        "Pseudotsuga vancouverensis",
        "Pseudotsuga douglasii",
        "Abies californica",
        "Pseudotsuga taxifolia var. elongata",
        "Abies standishiana",
        "Pseudotsuga douglasii var. viridis",
        "Pseudotsuga douglasii var. pendula",
        "Tsuga douglasii",
        "Abietia douglasii",
        "Abies mucronata var. palustris",
        "Pseudotsuga menziesii subsp. viridis",
        "Abies douglasii",
        "Abies drummondii"
      ],
      "genus": "Pseudotsuga",
      "family": "Pinaceae",
      "links": {
        "self": "/api/v1/species/pseudotsuga-menziesii",
        "plant": "/api/v1/plants/pseudotsuga-menziesii",
        "genus": "/api/v1/genus/pseudotsuga"
      }
    },
    ],
  "links": {
    "self": "/api/v1/plants?filter%5Bligneous_type%5D=tree\u0026filter_not%5Bmaximum_height_cm%5D=null\u0026order%5Bmaximum_height_cm%5D=desc",
    "first": "/api/v1/plants?filter%5Bligneous_type%5D=tree\u0026filter_not%5Bmaximum_height_cm%5D=null\u0026order%5Bmaximum_height_cm%5D=desc\u0026page=1",
    "next": "/api/v1/plants?filter%5Bligneous_type%5D=tree\u0026filter_not%5Bmaximum_height_cm%5D=null\u0026order%5Bmaximum_height_cm%5D=desc\u0026page=2",
    "last": "/api/v1/plants?filter%5Bligneous_type%5D=tree\u0026filter_not%5Bmaximum_height_cm%5D=null\u0026order%5Bmaximum_height_cm%5D=desc\u0026page=21"
  },
  "meta": { "total": 413 }
}

export default TallestTreeData