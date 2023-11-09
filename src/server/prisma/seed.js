const prisma = require("../prisma");

const mockData = [
  {
    firstName: "Lewis",
    lastName: "Hamilton",
    email: "Lewis@Merc.com",
    imageUrl: "https://th.bing.com/th/id/OIP.UWj2QG1r36KD5fpB2P1NMgHaHa?pid=ImgDet&w=474&h=474&rs=1",
    gpa: 4.0,
  },
  {
    firstName: "john",
    lastName: "smith",
    email: "smith@Merc.com",
    imageUrl: "https://jooinn.com/images/dog-67.jpg",
    gpa: 2.0,
  },
];

const seed = async () => {
  for (student of mockData) {
    await prisma.students.create({ data: student });
  }
};

seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });