import globalPayload, {Payload} from "payload";
import express from "express";
import path from "path";
import payloadConfig from "./payload.config";
import validate from "payload/dist/config/validate";
import Logger from "payload/dist/utilities/logger";

declare global {
  // allow global `var` declarations
  // eslint-disable-next-line no-var
  var payload: Payload | undefined;
}
export const payload = global.payload || initPayload();

function initPayload() {
  console.log("Initializing payload.");
  // Build config
  const configPath = path.resolve(__dirname, "./payload.config.ts");
  const validatedConfig = validate(payloadConfig, Logger());
  const finalConfig = {
    ...validatedConfig,
    paths: {
      ...(validatedConfig.paths || {}),
      configDir: path.dirname(configPath),
      config: configPath,
    },
  };

  // Setup express app
  const expressApp = express();

  // Initialize Payload
  globalPayload.init({
    secret: process.env.PAYLOAD_SECRET,
    mongoURL: process.env.MONGODB_URI,
    express: expressApp,
    validatedConfig: finalConfig,
    onInit: () => {
      globalPayload.logger.info(`Payload Admin URL: ${globalPayload.getAdminURL()}`);
    },
  });

  return globalPayload;
}

if (process.env.NODE_ENV !== 'production') global.payload = payload
