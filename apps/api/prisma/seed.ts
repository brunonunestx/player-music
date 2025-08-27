import { PrismaClient } from '@prisma/client';
import { hashPassword } from '../utils/hashPassword';

const prisma = new PrismaClient();

export const seed = async () => {
  const user = await prisma.user.create({
    data: {
      email: 'developer.bruno@example.com',
      name: 'Bruno Dev',
      password: await hashPassword('Developer'),
    },
  });
  console.log('User created:', user);
};

seed()
  .then(() => {
    console.log('The seeding process runs successfully!');
  })
  .catch((error) => {
    console.error(`The seeding process failed! Error: ${error.message}`);
  });
