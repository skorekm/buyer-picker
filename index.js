const fs = require('fs');

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function findPeopleGiftMakers(namesList) {
  let nameListCopy = namesList.map(e => e);
  return namesList.reduce((acc, curr, idx, src) => {
    // get random name from that array
    const getRandomName = () => {
      let rand = getRandomInt(nameListCopy.length);
      if(nameListCopy[rand] === curr) {
        return getRandomName();
      } else {
        const name = nameListCopy[rand];
        nameListCopy.splice(rand, 1);
        return name;
      }
    }
    // assign it to the object
    acc[curr] = getRandomName();
    return acc;
  }, {});
};

function saveResultsToFiles(dir, namesObject) {
  if(!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
  }
  for(const [key, value] of Object.entries(namesObject)) {
    fs.writeFile(`./${dir}/${key}.txt`, value, (err) => {
      if(err) throw err;
      console.log('created file')
    });
  }
}

const peopleObject = findPeopleGiftMakers(['Monika', 'Marcin', 'Mama', 'Dziadek', 'Mateusz', 'Konrad']);
saveResultsToFiles('./family', peopleObject);

console.log(peopleObject);