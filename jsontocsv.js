const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
    path: 'intermediate-country-data.csv',
    header: [
        {id: 'countryName', title: 'COUNTRY NAME'},
        {id: 'countryShortCode', title: 'COUNTRY SHORTCODE'},
        {id: 'name', title: 'REGION NAME'},
        {id: 'shortCode', title: 'REGION SHORTCODE'}
    ]
});

const data = require('./data.json')

const datas = []

const records = data.map(d => {
  d.regions.forEach(r => {
    datas.push({
      countryName: d.countryName,
      countryShortCode: d.countryShortCode,
      name: r.name,
      shortCode: r.shortCode,
    })
  });
})

csvWriter.writeRecords(datas)       // returns a promise
    .then(() => {
        console.log('...Done');
    });
