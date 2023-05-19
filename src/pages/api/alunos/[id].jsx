export default function Handler(req, res) {
   const id = +req.query.id
      res.status(200).json({
         id,
         nome: `João Barboza${id}`,
         email: `joaolucasbarbozaa${id}@gmail.com`,
      })
};
