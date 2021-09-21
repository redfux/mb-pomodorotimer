input.onButtonPressed(Button.A, function () {
    timer = 0
})
let timer = 0
timer = 0
basic.forever(function () {
    timer += 1
    led.plotBarGraph(
    0,
    timer
    )
    if (timer >= 25) {
        basic.showIcon(IconNames.Yes)
    }
    basic.pause(60000)
})
