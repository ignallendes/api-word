import * as wordService from "../services/word.service.js";

export async function readCv(req, res, next) {
  try {
    const contenido = await wordService.readCvTemplate();

    res.status(200).json({
      mensaje: "Documento leído correctamente",
      contenido
    });
  } catch (error) {
    next(error);
  }
}

export async function generateCv(req, res, next) {
  try {
    const resultado = await wordService.generateCv(req.body);

    res.status(201).json({
      mensaje: "CV generado correctamente",
      archivo: resultado.filename
    });
  } catch (error) {
    next(error);
  }
}