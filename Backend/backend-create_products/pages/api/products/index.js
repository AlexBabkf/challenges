import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Product";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const products = await Product.find();
    return response.status(200).json(products);
  }

  if (request.method === "POST") {
    try {
      const data = request.body;
      const review = new Product(data);
      review.save();
      response.status(201).json({ status: "Created review" });
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.message });
    }
  }
}
