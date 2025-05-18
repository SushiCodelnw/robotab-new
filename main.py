def on_received_value(name, value):
    global HandDB, HandDown, ArmDB, ArmDown
    if name == "Forward":
        RoboticsWorkshop.dd_mmotor(AnalogPin.P16, 255, DigitalPin.P15, 0)
        RoboticsWorkshop.dd_mmotor(AnalogPin.P14, 255, DigitalPin.P13, 0)
    elif name == "Forback":
        RoboticsWorkshop.dd_mmotor(AnalogPin.P16, 255, DigitalPin.P15, 1)
        RoboticsWorkshop.dd_mmotor(AnalogPin.P14, 255, DigitalPin.P13, 1)
    elif name == "Left":
        RoboticsWorkshop.dd_mmotor(AnalogPin.P16, 255, DigitalPin.P15, 1)
        RoboticsWorkshop.dd_mmotor(AnalogPin.P14, 200, DigitalPin.P13, 0)
    elif name == "Right":
        RoboticsWorkshop.dd_mmotor(AnalogPin.P16, 200, DigitalPin.P15, 0)
        RoboticsWorkshop.dd_mmotor(AnalogPin.P14, 255, DigitalPin.P13, 1)
    elif name == "Hand":
        if HandDB == 0:
            if HandDown == 0:
                HandDB = 1
                HandDown = 1
                pins.servo_write_pin(AnalogPin.P8, 0)
                HandDB = 0
            elif HandDown == 1:
                HandDB = 1
                HandDown = 0
                pins.servo_write_pin(AnalogPin.P8, 90)
                HandDB = 0
    elif name == "Arm":
        if ArmDB == 0:
            if ArmDown == 0:
                ArmDB = 1
                ArmDown = 1
                pins.servo_write_pin(AnalogPin.P1, 0)
                basic.pause(1000)
                pins.servo_write_pin(AnalogPin.P1, 90)
                ArmDB = 0
            elif ArmDown == 1:
                ArmDB = 1
                ArmDown = 0
                pins.servo_write_pin(AnalogPin.P1, 180)
                basic.pause(2000)
                pins.servo_write_pin(AnalogPin.P1, 90)
                ArmDB = 0
radio.on_received_value(on_received_value)

ArmDown = 0
ArmDB = 0
HandDown = 0
HandDB = 0
radio.set_group(1)

def on_forever():
    pass
basic.forever(on_forever)
