import { getProductById } from "../../../services/productServices";

export default function handler(req, res) {
  const { id } = req.query;
  //   if (!id) {
  //     return res.status(404).json({ status: "No such product!" });
  //   }
  res.status(200).json(getProductById(id));
}
