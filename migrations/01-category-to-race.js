module.exports = migration => {
  migration.transformEntries({
    contentType: '2wKn6yEnZewu2SCCkus4as',
    from: ['category'],
    to: ['race'],
    transformEntryForLocale: (fromFields, currentLocale) => {
      if (!fromFields.category) {
        return
      }
      return {
        // Category is an array of refs and I only want the first one
        race: fromFields.category[currentLocale][0]
      }
    }
  })
}
