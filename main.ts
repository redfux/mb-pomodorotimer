input.onButtonPressed(Button.A, function () {
    timer = 0
})
let timer = 0
timer = 0
basic.forever(function () {
    timer += 1
    if (timer <= 25) {
        led.plotBarGraph(
        timer,
        25
        )
    } else {
        basic.showIcon(IconNames.Yes)
    }
    basic.pause(60000)
})
