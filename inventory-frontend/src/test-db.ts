import 'dotenv/config';
import { db } from '../prisma/db';

async function main() {
  // 1. Insert a row into AlbertHeijnItems
  const item = await db.orm.public.AlbertHeijnItems.create({
    ahId: 12345,
    name: 'Halfvolle Melk',
    description: '1L pak',
    shelfLifeDays: 7,
  });
  console.log('Created item:', item);

  // 2. Insert a row into PantryItems
  // Note: Date fields expect Temporal.PlainDate (or use DateString in schema)
  const pantryItem = await db.orm.public.PantryItems.create({
    ahId: item.ahId,
    name: item.name,
    description: item.description,
    purchaseDate: '2026-09-24',
    expirationDate: '2026-10-01',
  });
  console.log('Created pantry item:', pantryItem);

  // 3. Read entries back
  const allItems = await db.orm.public.AlbertHeijnItems.all();
  console.log('All AH items:', allItems);

  // Close pool connection if running as a standalone node script:
  await db.close();
}

main().catch(console.error);