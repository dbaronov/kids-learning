var $learnNumbers = $('.learn-numbers')
var $learnNumbersFrom = $learnNumbers.find('#learn-numbers__from')
var $learnNumbersTo = $learnNumbers.find('#learn-numbers__to')
var $learnNumbersGenerateBtn = $learnNumbers.find('#learn-numbers__generate')
var $learnNumbersNumber = $learnNumbers.find('#learn-numbers__number')


$learnNumbersGenerateBtn.click(function() {
  var from = $learnNumbersFrom.val()
  var to = $learnNumbersTo.val()

  var randomNumber = function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)

    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  $learnNumbersNumber.text(randomNumber(from, to))
})