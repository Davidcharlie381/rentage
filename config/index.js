const BASE_URL =
  process.env.NODE_ENV === "production" ? "https://rentage.vercel.app/api" : "http://localhost:3000/api";

export { BASE_URL };
