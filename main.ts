input.onButtonPressed(Button.A, function () {
    timer = 0
})
let timer = 0
timer = 0
basic.showString("Go")
basic.forever(function () {
    timer += 1
    if (timer <= 25) {
        led.plotBarGraph(
        timer,
        25
        )
    } else {
        for (let index = 0; index < 3; index++) {
            basic.clearScreen()
            basic.pause(100)
            basic.showIcon(IconNames.Yes)
        }
    }
    basic.pause(60000)
})
