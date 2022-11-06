import globalPayload, {Payload} from "payload";
import express from "express";
import path from "path";
import payloadConfig from "./payload.config";
import validate from "payload/dist/config/validate";
import Logger from "payload/dist/utilities/logger";

// https://www.prisma.io/docs/guides/database/troubleshooting-orm/help-articles/nextjs-prisma-client-dev-practices
declare global {
  // allow global `var` declarations
  // eslint-disable-next-line no-var
  var payload: Payload | undefined;
}
export const payload = global.payload || initPayload();

function initPayload() {
  console.log("Initializing payload.");
  // Build config

  // Path to config to be used in webpack in development environment
  // @ts-ignore
  const configPath = path.resolve(process.env.INIT_CWD, `./lib/payload/payload.config.ts`);
  // @ts-ignore
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
    // @ts-ignore
    secret: process.env.PAYLOAD_SECRET,
    // @ts-ignore
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
