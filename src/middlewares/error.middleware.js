export default function errorMiddleware(err, req, res, next) {
  console.error(err);

  if (res.headersSent) {
    return next(err);
  }

  res.status(500).json({
    mensaje: "Ocurrió un error interno del servidor"
  });
}