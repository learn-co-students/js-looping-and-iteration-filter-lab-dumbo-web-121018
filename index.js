// Code your solution in this file
let findMatching = (drivers, string) => {
  return drivers.filter(function (driver) { return driver.toLowerCase() === string.toLowerCase(); });
}

let fuzzyMatch = (drivers, string) => {
  return drivers.filter(function (driver) {
    return driver.substring(0, string.length).toLowerCase() === string.toLowerCase();
  });
}

let matchName = (drivers, string) => {
  return drivers.filter(function (driver) {
    return driver["name"] === string ;
  });
}
