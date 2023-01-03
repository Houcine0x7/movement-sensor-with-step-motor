let movementsensor = 0
let motor = stepperMotor.createMotor(
DigitalPin.P0,
DigitalPin.P1,
DigitalPin.P2,
DigitalPin.P8
)
basic.forever(function () {
    movementsensor = pins.digitalReadPin(DigitalPin.P3)
    basic.showNumber(movementsensor)
    if (movementsensor == 1) {
        motor.moveAntiClockwise(1, stepUnit.Rotations)
    } else if (movementsensor == 0) {
        motor.moveAntiClockwise(0, stepUnit.Rotations)
    }
})
