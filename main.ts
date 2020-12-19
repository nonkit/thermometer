let t = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    serial.writeNumber(input.temperature())
    serial.writeLine("")
})
basic.forever(function () {
    if (t != input.temperature()) {
        t = input.temperature()
        serial.writeNumber(t)
        serial.writeLine("")
    }
    basic.pause(500)
})
