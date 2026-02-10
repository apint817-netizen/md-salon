import { groq } from "next-sanity";

export const SERVICES_QUERY = groq`*[_type == "service"] | order(category asc) {
  _id,
  title,
  category,
  description,
  price,
  duration
}`;

export const MASTERS_QUERY = groq`*[_type == "master"] {
  _id,
  name,
  role,
  experience,
  "imageUrl": image.asset->url,
  specialization,
  bio
}`;

export const REVIEWS_QUERY = groq`*[_type == "review"] | order(date desc) {
  _id,
  name,
  text,
  rating,
  source,
  date,
  service
}`;

export const PORTFOLIO_QUERY = groq`*[_type == "portfolioItem"] {
  _id,
  title,
  category,
  "imageUrl": image.asset->url
}`;

export const HOT_SLOTS_QUERY = groq`*[_type == "hotSlot" && active == true] {
  _id,
  service,
  detail,
  master,
  oldPrice,
  newPrice,
  discount
}`;
