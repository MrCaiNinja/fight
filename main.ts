radio.onReceivedNumber(function (receivedNumber) {
    life += 0 - receivedNumber
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(5)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(10)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(20)
})
radio.setGroup(255)
let life = 50
basic.forever(function () {
    basic.showNumber(life)
    if (life == 0) {
        basic.showString("game over")
    }
})
