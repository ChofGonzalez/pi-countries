//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



const server = require('./src/app.js');
const { conn, Country } = require('./src/db.js');
const axios = require('axios')

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(3001, async () => {
    const allCountries = await Country.findAll();
    if(!allCountries.length){
    const apiCountriesResponse = await axios.get('https://restcountries.com/v3/all');
    let apiCountries = apiCountriesResponse.data.map((e) => {
        return {
          id: e.cca3,
          nombre: e.name.common,
          imagenBandera: e.flags[0],
          continente: e.continents[0],
          capital: e.capital ? e.capital[0] : 'Not found',
          subregion: e.subregion,
          area: e.area,
          poblacion: e.population
          }
        })
          await Country.bulkCreate(apiCountries);
          console.log('creada')
      }
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
