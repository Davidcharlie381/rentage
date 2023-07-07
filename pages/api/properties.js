import { getProducts } from "@/utils";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} not allowed.` });
  }
  const properties = getProducts();
  res.status(200).json(properties);
}
