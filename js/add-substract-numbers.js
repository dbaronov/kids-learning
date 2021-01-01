var $learnNumbers = $('.add-substract-numbers')
var $learnNumbersFrom = $learnNumbers.find('#add-substract-numbers__from')
var $learnNumbersTo = $learnNumbers.find('#add-substract-numbers__to')
var $learnNumbersGenerateBtn = $learnNumbers.find('#add-substract-numbers__generate-btn')
var $learnNumbersResultBtn = $learnNumbers.find('#add-substract-numbers__result-btn')
var $learnNumbersNumber = $learnNumbers.find('#add-substract-numbers__number')
var $resultHolder = $learnNumbers.find('#add-substract-numbers__result')

var firstGeneratedNumber
var secondGeneratedNumber
var result = undefined
var operators = ['+', '-']
var selectedOperator = undefined

var randomNumber = function(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)

  return (Math.floor(Math.random() * max) + min);
}

var getSelectedOperator = function() {
  var random = Math.floor(Math.random() * operators.length)
  selectedOperator = operators[random]
}

$learnNumbersGenerateBtn.click(function() {
  var from = $learnNumbersFrom.val()
  var to = $learnNumbersTo.val()

  firstGeneratedNumber = randomNumber(from, to)
  secondGeneratedNumber = randomNumber(from, to)
  getSelectedOperator()
  
  result =  eval(firstGeneratedNumber + selectedOperator + secondGeneratedNumber)

  if (result > 0) {
    $learnNumbersNumber.text(firstGeneratedNumber + selectedOperator + secondGeneratedNumber)
    $resultHolder.text('?')
  } else {
    $learnNumbersGenerateBtn.click()
  }
})


$learnNumbersResultBtn.click(function() {
  $resultHolder.text(result)
})