// Code your solution in this file

function findMatching(drivers, string) {
  return drivers.filter(function(driver) {
    return driver.toLowerCase() === string.toLowerCase();
  });
}

function fuzzyMatch(drivers, string) {
  let stringLength = string.length;
  return drivers.filter(function(driver) {
    return driver.slice(0, stringLength) === string;
  });
}

function matchName(drivers, name) {
  return drivers.filter(driver => {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}
