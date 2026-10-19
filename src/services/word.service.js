import fs from "node:fs/promises";
import path from "node:path";
import PizZip from "pizzip";
import Docxtemplater from "docxtemplater";
import mammoth from "mammoth";

import {
  CV_TEMPLATE_PATH,
  CV_OUTPUT_DIR
} from "../config/paths.js";

export async function readCvTemplate() {
  const result = await mammoth.extractRawText({
    path: CV_TEMPLATE_PATH
  });

  return result.value;
}

export async function generateCv(data) {
  const content = await fs.readFile(
    CV_TEMPLATE_PATH,
    "binary"
  );

  const zip = new PizZip(content);

  const document = new Docxtemplater(zip, {
    paragraphLoop: true,
    linebreaks: true
  });

  document.render({
    nombre: data.nombre,
    perfil: data.perfil,
    tecnologias: data.tecnologias,
    experiencia: data.experiencia
  });

  const buffer = document.toBuffer();

  await fs.mkdir(CV_OUTPUT_DIR, {
    recursive: true
  });

  const filename = `cv-${Date.now()}.docx`;

  const outputPath = path.join(CV_OUTPUT_DIR, filename);

  await fs.writeFile(outputPath, buffer);

  return { filename, outputPath };
}