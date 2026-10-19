import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_DIR = path.resolve(__dirname, "../..");

const DOCUMENTS_DIR = path.join(ROOT_DIR, "documentos");

const CV_TEMPLATE_PATH = path.join(
  DOCUMENTS_DIR,
  "plantilla.docx"
);

const CV_OUTPUT_DIR = path.join(
  DOCUMENTS_DIR,
  "generados"
);

export {
  DOCUMENTS_DIR,
  CV_TEMPLATE_PATH,
  CV_OUTPUT_DIR
};