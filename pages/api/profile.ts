// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Field } from "../../src/types/Field";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Field[]>
) {
  res.status(200).json();
}
