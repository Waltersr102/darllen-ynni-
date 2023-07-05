input.onButtonPressed(Button.A, function () {
    Reading = input.lightLevel()
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Diamond)
    basic.pause(500)
    basic.showString("M")
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showNumber(Reading)
    basic.pause(500)
    basic.showString("M")
})
let Reading = 0
basic.showString("M")
Reading = input.lightLevel()
basic.pause(100)
