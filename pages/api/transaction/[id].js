import { pages } from "@/data";

export default function handler(req, res) {
  const {
    query: { id },
  } = req;

  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: "Method not allowed" });
  }


//   console.log(pages)

  const page = pages.find((page) => page.id === id);
//   console.log(page)
  if (page) {
    res.status(200).json(page);
  } else {
    res.status(404).json({ message: `Page not found` });
  }
}
