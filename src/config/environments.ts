/*import "dotenv/config";
import { getSecret } from "../libs/getSecret";

// For local development, ensure a .env file exists with the required environment variables.
let brevoAPIKey = process.env.BREVO_API_KEY || "";
let DB_CONN_STRING = process.env.DB_CONN_STRING || "";
let FIREBASE_SERVICE_ACCOUNT_JSON =
  process.env.FIREBASE_SERVICE_ACCOUNT_JSON || "";
const ENVIRONMENT = process.env.ENVIRONMENT || "local";
const PORT = process.env.PORT || 3001;

// Fetch secrets based on environment and Lambda settings
const fetchSecrets = async () => {
  brevoAPIKey =
    (await getSecret(`/${ENVIRONMENT}/brevo/api-key`)) || brevoAPIKey;
  DB_CONN_STRING =
    (await getSecret(`/${ENVIRONMENT}/mongodb/conn-string`)) || DB_CONN_STRING;
  FIREBASE_SERVICE_ACCOUNT_JSON =
    (await getSecret(`/${ENVIRONMENT}/firebase/service-account-json`)) ||
    FIREBASE_SERVICE_ACCOUNT_JSON;
};

// Initialize the secrets and then export the config
export const initConfig = async () => {
  if (ENVIRONMENT != "local") await fetchSecrets();

  return {
    port: PORT,
    brevoAPIKey: brevoAPIKey,
    DB_CONN_STRING: DB_CONN_STRING,
    FIREBASE_SERVICE_ACCOUNT_JSON: FIREBASE_SERVICE_ACCOUNT_JSON,
    ENVIRONMENT: ENVIRONMENT,
  };
};

export type Config = {
  port: number | string;
  brevoAPIKey: string;
  DB_CONN_STRING: string;
  FIREBASE_SERVICE_ACCOUNT_JSON: string;
  ENVIRONMENT: string;
};
*/