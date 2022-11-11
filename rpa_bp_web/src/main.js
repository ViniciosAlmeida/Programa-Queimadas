const csv = require('csv-parser');
const fs = require('fs');
const results = [];

const readCSVFile = () => {
    fs.createReadStream('fire_risk.csv')
        .pipe(csv())

        .on ('data', (data)=> results.push(data)) 

        .on ('end', ()=> {
            console.log(results.length);
            for (const results of results)
            {
                console.log(`id: ${result.id} risco_de_fogo: ${result.risco_de_fogo} local: ${result.local}`)
            }
        });
};

readCSVFile();