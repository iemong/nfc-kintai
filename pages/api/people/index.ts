import type { NextApiRequest, NextApiResponse } from "next";
import { people } from "../../../data";

export default function handler(_: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(people);
}
