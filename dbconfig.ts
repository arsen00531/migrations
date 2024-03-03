import { DataSource } from "typeorm"

export default new DataSource ({
    type: "postgres",
    host: "localhost",
    port: 54321,
    username: "root",
    password: "admin",
    database: "test",
    entities: ['dist/**/entities/*.entity.js'],
    migrations: ['migrations/*.ts'],
    migrationsTableName: "custom_migration_table",
})