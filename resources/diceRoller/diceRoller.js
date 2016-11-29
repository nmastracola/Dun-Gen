
// This is a 3d6 dice roller.
$scope.addNums = function(total, currentVal){
  return total + currentVal;
}
// The above function is used in the .reduce below.
// It allows you to add the values of the inner FOR loop together
// In this case, the inner for loop is the "3" in the 3d6
$scope.rolling3d6 = function(){
  var tempArr = [];
  // This is a temporary array that stores the values of the inner FOR loop so they can be added together.
    for(let i = 0; i <= 5; i++){
      // The first FOR loop determines how many SEPARATE values we want, in this case, 6. (0-5). 
      // If you only wanted 1 value, this loop would technically not be necessary, but better to keep it and have it loop once for consistency
      for(let j = 0; j <= 2; j++){
        // This second FOR loop determines how many dice we want PER VALUE (i.e. if we want 6 collections of 3d6, this is the "3")
        tempArr.push(Math.floor((Math.random() * 6) + 1));
        // This pushes values into the temporary array to be added together.  the "* 6" after the Math.random determines the kind of die we are using.
        // Remember that Math.random returns a random value between 0 and 1, so multiplying that by the number of faces on a die will give us a random value
        // You need the "+ 1" at the end though, because the value will always be 1 less than it needs to be (a d20 would return 0-19 without the +1)
      }
      var attribVal = tempArr.reduce($scope.addNums);
      // This sets a variable equal to the sum of the values from the inner FOR loop, using the sum function listed above.
      // I.E. 3d6, this will return a value like "14" or something.
      $scope.rolledAttribs[i] = attribVal;
      // Assigns local variable to the scope.  You can change the names, obviously.
      // The scope has a [i] because it is an array of the summed values
      // In this case, we requested 6 values of 3d6, so rolledAttribs will be an array that looks something like: "[18, 12, 9, 16, 13, 15]"
      tempArr = [];
      // Clearing the temp array at the end of each FOR loop so we can add the new values from the next loop
  }
}

//--------------------------------------------------------

// This is a 4d6 Drop 1 dice roller.  

$scope.addNums = function(total, currentVal){
  return total + currentVal;
}
$scope.rolling4d6 = function(){
  var tempArr = [];
    for(let i = 0; i <= 5; i++){
      for(let j = 0; j <= 3; j++){
        tempArr.push(Math.floor((Math.random() * 6) + 1));
      }
      tempArr.sort().splice(0,1);
      // This function is the same as the 3d6 above, except it rolls 4d6, then sorts the temp array by numerical value and drops the lowest value.
      var attribVal = tempArr.reduce($scope.addNums);
      $scope.rolledAttribs[i] = attribVal;
      tempArr = [];
  }
}

//--------------------------------------------------------

// OMNI-FUNCTIONAL DICE ROLLER (For multiple dice values)

$scope.howManyValues = 0;
// Defining the variable, this is how many separate values you want. (E.G. if you wanted 6 values of 3d10, this variable would be 6)
$scope.howManyDice = 0;
// Defining the variable, this is how many dice to roll per value.   (E.G. if you wanted 6 values of 3d10, this variable would be 3)
$scope.typeOfDice = 0;
// Defining the variable, this is what kind of dice to roll.         (E.G. if you wanted 6 values of 3d10, this variable would be 10)

$scope.addNums = function(total, currentVal){
  return total + currentVal;
}
$scope.rollingDice = function(){
  var tempArr = [];
    for(let i = 0; i <= $scope.howManyValues; i++){
      for(let j = 0; j <= $scope.howManyDice; j++){
        tempArr.push(Math.floor((Math.random() * $scope.typeOfDice) + 1));
      }
      var attribVal = tempArr.reduce($scope.addNums);
      $scope.diceValuesArray[i] = attribVal;
      tempArr = [];
  }
}

//---------------------------------------------------------

// OMNI-FUNCTIONAL DICE ROLLER (Rolls a single die)

$scope.howManyDice = 0;
$scope.typeOfDice = 0;

$scope.addNums = function(total, currentVal){
  return total + currentVal;
}
$scope.rollingDice = function(){
  var tempArr = [];
    for(let i = 0; i <= $scope.howManyDice; i++){
      tempArr.push(Math.floor((Math.random() * $scope.typeOfDice) + 1));
    }
    $scope.diceRollValue = tempArr.reduce($scope.addNums);
    tempArr = [];
}

// This function should allow you to roll a single grouping of dice to return a single value.
// E.G 3d10, howManyDice would be 3, typeOfDice would be 10, and this function would return a value between 3 and 30.
