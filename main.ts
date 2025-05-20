function Left () {
    RoboticsWorkshop.DDMmotor(
    AnalogPin.P16,
    255,
    DigitalPin.P15,
    1
    )
    RoboticsWorkshop.DDMmotor(
    AnalogPin.P14,
    255,
    DigitalPin.P13,
    1
    )
}
function HandUp () {
    RoboticsWorkshop.DDMmotor(
    AnalogPin.P8,
    255,
    DigitalPin.P1,
    1
    )
}
function Forward () {
    RoboticsWorkshop.DDMmotor(
    AnalogPin.P16,
    255,
    DigitalPin.P15,
    0
    )
    RoboticsWorkshop.DDMmotor(
    AnalogPin.P14,
    255,
    DigitalPin.P13,
    1
    )
}
function Forback () {
    RoboticsWorkshop.DDMmotor(
    AnalogPin.P16,
    255,
    DigitalPin.P15,
    1
    )
    RoboticsWorkshop.DDMmotor(
    AnalogPin.P14,
    255,
    DigitalPin.P13,
    0
    )
}
input.onButtonPressed(Button.A, function () {
    Left()
})
function ArmUp () {
    RoboticsWorkshop.DDMmotor(
    AnalogPin.P2,
    255,
    DigitalPin.P12,
    1
    )
}
input.onButtonPressed(Button.B, function () {
    Stop()
})
function ArmDown () {
    RoboticsWorkshop.DDMmotor(
    AnalogPin.P2,
    255,
    DigitalPin.P12,
    0
    )
}
function HandDown () {
    RoboticsWorkshop.DDMmotor(
    AnalogPin.P8,
    255,
    DigitalPin.P1,
    0
    )
}
radio.onReceivedValue(function (name, value) {
    if (0 == 0) {
        if (name == "Forward") {
            Forward()
        } else if (name == "Forback") {
            Forback()
        } else if (name == "Left") {
            Left()
        } else if (name == "Right") {
            Right()
        } else if (name == "ArmUp") {
            ArmUp()
        } else if (name == "ArmDown") {
            ArmDown()
        } else if (name == "HandUp") {
            HandUp()
        } else if (name == "HandDown") {
            HandDown()
        } else if (name == "Stop") {
            Stop()
        }
    }
})
function Right () {
    RoboticsWorkshop.DDMmotor(
    AnalogPin.P16,
    200,
    DigitalPin.P15,
    0
    )
    RoboticsWorkshop.DDMmotor(
    AnalogPin.P14,
    255,
    DigitalPin.P13,
    0
    )
}
function Stop () {
    RoboticsWorkshop.DDMmotor(
    AnalogPin.P16,
    0,
    DigitalPin.P15,
    0
    )
    RoboticsWorkshop.DDMmotor(
    AnalogPin.P14,
    0,
    DigitalPin.P13,
    0
    )
    RoboticsWorkshop.DDMmotor(
    AnalogPin.P2,
    0,
    DigitalPin.P12,
    0
    )
    RoboticsWorkshop.DDMmotor(
    AnalogPin.P8,
    0,
    DigitalPin.P1,
    0
    )
}
radio.setGroup(1)
