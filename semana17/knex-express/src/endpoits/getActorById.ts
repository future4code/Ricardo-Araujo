

// app.get("/actor/:id", async (req: Request, res: Response) => {
//     try {
//       const id = req.params.id;
//       const actor = await getActorById(id);
  
//       res.status(200).send(actor)
//     } catch (err) {
//       res.status(400).send({
//         message: err.message,
//       });
//     }
//   });