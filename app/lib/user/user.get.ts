import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function fetchUsers() {
  try {
    const users = await prisma.user.findMany();
    console.log(users)
    return users;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  } finally {
    await prisma.$disconnect();
  }
}
