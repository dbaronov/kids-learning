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

var randomNumbers = function(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)

  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

var getSelectedOperator = function() {
  var random = Math.floor(Math.random() * operators.length)
  selectedOperator = operators[random]
}

$learnNumbersGenerateBtn.click(function() {
  var from = $learnNumbersFrom.val()
  var to = $learnNumbersTo.val()

  firstGeneratedNumber = randomNumbers(from, to)
  secondGeneratedNumber = randomNumbers(from, to)
  getSelectedOperator()

  $learnNumbersNumber.text(firstGeneratedNumber + selectedOperator + secondGeneratedNumber)
  $resultHolder.text('?')
})

$learnNumbersResultBtn.click(function() {

  result =  eval(firstGeneratedNumber + selectedOperator + secondGeneratedNumber)
  $resultHolder.text(result)
})