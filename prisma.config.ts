import { definePrismaConfig } from "prisma/config";

export default definePrismaConfig({
  schema: 'prisma',
  migrations: {
    path: 'prisma/migrations'
  },
  datasource: {
    url: ""
  }
});
