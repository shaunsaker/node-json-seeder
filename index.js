import writeFile from './utils/writeFile';

const data = {};
const rows = process.argv[2];

for (let i = 0; i < rows; i += 1) {
  const item = {
    name: Math.random()
      .toString(36)
      .substr(2, 5), // generates random 5 letter string // TODO: util (any length)
    race_id: Math.floor(100000 + Math.random() * 900000), // generates random 6 digit number // TODO: util (any length)
  };

  data[i] = item;
}

writeFile(
  './output/data.json',
  data,
  (error) => {
    console.log(error);
  },
  () => {
    console.log('Success');
  },
);
