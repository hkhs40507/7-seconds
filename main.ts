let start = 0
let elapsed = 0
let score = 0
input.onButtonPressed(Button.A, function () {
    start = input.runningTime()
    basic.showIcon(IconNames.TShirt)
})
input.onButtonPressed(Button.B, function () {
    elapsed = input.runningTime() - start
    score = Math.abs(elapsed - 7000)
    basic.showNumber(score)
})
