import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const exams = [
    { name: 'NEET', description: 'Medical entrance exam' },
    { name: 'JEE', description: 'Engineering entrance exam' },
    { name: 'Cyber Security', description: 'Cyber security practice' },
    { name: '10th CBSE', description: 'CBSE Class 10 preparation' },
    { name: '12th CBSE', description: 'CBSE Class 12 preparation' },
  ];

  // Create exams
  for (const exam of exams) {
    await prisma.exam.upsert({
      where: { name: exam.name },
      update: {},
      create: exam,
    });
  }

  // Create 3 levels for each exam
  const allExams = await prisma.exam.findMany();

  for (const exam of allExams) {
    for (let level = 1; level <= 3; level++) {
      await prisma.assessment.upsert({
        where: {
          examId_level: {
            examId: exam.id,
            level,
          },
        },
        update: {},
        create: {
          examId: exam.id,
          level,
          passPercentage: 60 + level * 10,
        },
      });
    }
  }
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
