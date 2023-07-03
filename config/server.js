module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: ['DUuEwOut5QkeqR6xIkHPjBeIPl8UjNwv', 'SJfbkJb9gSEL4T8q8V65DU0GAFDaOfdR'],
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
