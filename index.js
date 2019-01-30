// Code your solution in this file
function findMatching(array, match){
  return array.filter(function(item){
    return item.toLowerCase() === match.toLowerCase();
  })
}

function fuzzyMatch(array, match){
  return array.filter(function(item){
    return item.startsWith(match);
  })
}

function matchName(obj, match){
  return obj.filter(function(item){
    return item.name === match;
  })
}
