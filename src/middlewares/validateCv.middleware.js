export default function validateCv(req, res, next) {
  const { nombre, perfil, tecnologias, experiencia } =
    req.body ?? {};

  const campos = { nombre, perfil, tecnologias, experiencia };

  const camposFaltantes = Object.entries(campos)
    .filter(
      ([, valor]) =>
        typeof valor !== "string" || valor.trim().length === 0
    )
    .map(([campo]) => campo);

  if (camposFaltantes.length > 0) {
    return res.status(400).json({
      mensaje: "Faltan campos obligatorios",
      campos: camposFaltantes
    });
  }

  next();
}