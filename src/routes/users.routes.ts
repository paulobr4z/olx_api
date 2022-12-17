import { Router } from 'express';

const usersRouter = Router();

usersRouter.get('/', async (request, response) => {
  return response.status(200).json({ message: "Paulo Braz" });
});

export { usersRouter };