import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Brand } from "../../typings";

const query = groq`
  *[_type == "brand"]
`;

type Data = {
  brand: Brand[];
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const brand: Brand[] = await sanityClient.fetch(query);
  res.status(200).json({ brand });
}
