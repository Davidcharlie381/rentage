import { getProducts } from "@/utils";

// TODO:

// 1. Return a 404 error if singleHouse is not found and redirect to a 404 page

export default function handler(req, res) {
  const {
    query: { house },
  } = req;

  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: "Method not allowed" });
  }

  const properties = getProducts();

  const singleHouse = properties.find(
    (property) => property.house.split(" ").join("-").toLowerCase() === house
  );

  if (singleHouse) {
    res.status(200).json(singleHouse);
  } else {
    res.status(404).json({message: `House ${house} not found`})
  }

  
}
