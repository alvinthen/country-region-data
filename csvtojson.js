const data = require('./intermediate.json')

const datas = {}

const waiter = data.map(d => {
  if (!datas[d[0]]) {
    datas[d[0]] = {
      countryName: d[0],
      countryShortCode: d[1],
      i18n: {
        en: d[0],
        zh: d[4]
      },
      regions: []
    }
  }

  datas[d[0]].regions.push({
    name: d[2],
    shortCode: d[3],
    i18n: {
      en: d[2],
      zh: d[5]
    }
  })
  return d
})

console.log(JSON.stringify(Object.values(datas), null, 2))
