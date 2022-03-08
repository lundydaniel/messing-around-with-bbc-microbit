let baseline = input.magneticForce(Dimension.Strength)
basic.forever(function () {
    if (Math.abs(input.magneticForce(Dimension.Strength)) - baseline > 100) {
        basic.showIcon(IconNames.Giraffe)
    } else {
        basic.clearScreen()
    }
})
