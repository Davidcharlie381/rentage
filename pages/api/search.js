import { getProducts } from "@/utils";

export default function handler(req, res) {
  const {
    query: { q },
  } = req;

  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} not allowed.` });
  }
  const properties = getProducts();

  const filtered = properties.filter(
    (property) =>
      property.house.toLowerCase().includes(q) ||
      property.location.toLowerCase().includes(q)
  );

  res.status(200).json(filtered);
}
