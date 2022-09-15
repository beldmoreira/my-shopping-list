import { faker } from "@faker-js/faker";
import { prisma } from "../src/database";

async function main() {
  const item = {
    title: faker.lorem.word(2),
    url: faker.internet.url(),
    description: faker.lorem.paragraph(1),
    amount: faker.random.alphaNumeric(),
  };

  await prisma.items.upsert({
    where: { title: item.title },
    update: {},
    create: item,
  });
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
