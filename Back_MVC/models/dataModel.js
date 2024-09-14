const fs = require('fs');
const path = require('path');
const csvParser = require('csv-parser');

const CSV_FILE_PATH = path.join(__dirname, '../generated_data.csv');

function checkId(id, callback) {
  let found = false;
  let resultData = null;

  fs.createReadStream(CSV_FILE_PATH)
    .pipe(csvParser())
    .on('data', (row) => {
      if (row.ID === id) {
        found = true;

        if (row.COLOR === 'white') {
          const year = parseInt(row.YEAR);
          const month = parseInt(row.MONTH);
          const color = row.COLOR;
          resultData = {
            message: 'have',
            result: 120 - ((year * 12) + month),
            color,
          };
        } else if (row.COLOR === 'brown') {
          const year = parseInt(row.YEAR);
          resultData = {
            message: 'have',
            result: 40 - year,
            color: row.COLOR,
          };
        } else if (row.COLOR === 'pink') {
          const month = parseInt(row.MONTH);
          resultData = {
            message: 'have',
            result: 30 - month,
            color: row.COLOR,
          };
        }
      }
    })
    .on('end', () => {
      if (!found) {
        callback(null, { error: 'not have' });
      } else {
        callback(resultData, null);
      }
    })
    .on('error', (error) => {
      callback(null, { error: 'Failed to read CSV' });
    });
}

module.exports = {
  checkId,
};
