import { authors } from "@/data";

// TODO:

// 1. Return a 404 error if admin is not found and redirect to a 404 page

export default function handler(req, res) {
  const {
    query: { admin },
  } = req;

  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: "Method not allowed" });
  }

  const author = authors.find(
    (author) => author.name.split(" ").join("-").toLowerCase() === admin
  );

  if (author) {
    res.status(200).json(author);
  } else {
    res.status(404).json({ message: `Author ${admin} not found` });
  }
}
