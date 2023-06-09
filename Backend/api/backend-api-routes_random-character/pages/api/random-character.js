import Chance from "chance";

export default function handler(req, res) {
  const chance = new Chance();

  const character = {
    firstName: chance.first(),
    lastName: chance.last(),
    geoHash: chance.geohash(),
    twitter: chance.twitter(),
  };

  res.status(200).json(character);
}
