import { Request, Response } from 'express';
import { prisma } from '../lib/prisma';

export const getUsers = async (_req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.json(users);
};

export const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await prisma.user.findUnique({
    where: { id: parseInt(id) },
  });
  res.json(user);
};

export const createUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;
  const newUser = await prisma.user.create({
    data: { name, email },
  });
  res.status(201).json(newUser);
};

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;
  const updatedUser = await prisma.user.update({
    where: { id: parseInt(id) },
    data: { name },
  });
  res.json(updatedUser);
};




