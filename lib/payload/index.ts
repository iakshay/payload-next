import payload, { Payload } from "payload";
import express from 'express';
import path from 'path'
import payloadConfig from './payload.config'
import validate from 'payload/dist/config/validate'
import Logger from 'payload/dist/utilities/logger';

export const expressApp = express();
let cached: Payload;

const configPath = path.resolve(__dirname, './payload.config.ts')
const validatedConfig = validate(payloadConfig, Logger());
const finalConfig = {
    ...validatedConfig,
    paths: {
      ...(validatedConfig.paths || {}),
      configDir: path.dirname(configPath),
      config: configPath,
    },
  };

export function getPayload() {
  if (!cached) {

    // Initialize Payload
    payload.init({
      secret: process.env.PAYLOAD_SECRET,
      mongoURL: process.env.MONGODB_URI,
      express: expressApp,
      validatedConfig: finalConfig,
      onInit: () => {
        payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
      },
    });
    cached = payload;
  } else {
    console.log("Payload is already initialized.");
  }

  return cached;
}
