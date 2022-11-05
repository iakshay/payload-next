import { getPayload, expressApp } from "../../lib/payload";
import httpStatus from 'http-status';
import APIError from "payload/dist/errors/APIError";
import {router } from "../../lib/middlewares"
import { NextApiRequest, NextApiResponse } from "next";

const payload = getPayload()

export const config = {
  api: {
    bodyParser: false,
  },
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  expressApp.handle(req, res)
}