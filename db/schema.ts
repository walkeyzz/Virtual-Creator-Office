import { sqliteTable, text, integer, primaryKey } from 'drizzle-orm/sqlite-core';
export const records = sqliteTable('records', {
 owner: text('owner').notNull(), id: text('id').notNull(), kind: text('kind').notNull(), payload: text('payload').notNull(), revision: integer('revision').notNull().default(1), updated: text('updated').notNull()
}, t => [primaryKey({columns:[t.owner,t.id]})]);
export const assistantRuns = sqliteTable('assistant_runs', {
 owner:text('owner').notNull(), id:text('id').notNull(), prompt:text('prompt').notNull(), role:text('role').notNull(), status:text('status').notNull(), result:text('result').notNull(), created:text('created').notNull()
},t=>[primaryKey({columns:[t.owner,t.id]})]);
