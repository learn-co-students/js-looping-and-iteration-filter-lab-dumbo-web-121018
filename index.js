// Code your solution in this file

function findMatching(array, name) {
  return array.filter(element => name.toLowerCase() === element.toLowerCase());
};

function fuzzyMatch(array, letters) {
  const match = `^${letters}`;
  return array.filter(element => element.match(match));
};

function matchName(object, name){
  const result = [];
  for(const element of object) {
    if (element["name"] === name) {
      result.push(element);
    };
  };
  return result;
};
