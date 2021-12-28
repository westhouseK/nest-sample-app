module.exports = {
  type: 'postgres',
  host: 'db', // コンテナの名前 Error: connect ECONNREFUSED 127.0.0.1:5432
  port: 5432,
  username: 'admin',
  password: 'admin',
  entities: ['dist/entities/*.ts'],
  autoLoadEntities: true,
  synchronize: true,
  logging: true,
  cache: false,
  cli: {
    entitiesDir: 'dist/entities',
  },
  seeds: ['dist/seeds/*.seed.ts'],
  factories: ['dist/factories/*.factory.ts'],
};
