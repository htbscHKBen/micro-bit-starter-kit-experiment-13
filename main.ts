function X () {
    item.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    item.setPixelColor(1, neopixel.rgb(0, 0, 0))
    item.setPixelColor(2, neopixel.rgb(0, 0, 0))
    item.setPixelColor(3, neopixel.rgb(0, 0, 0))
    item.setPixelColor(4, neopixel.colors(NeoPixelColors.Blue))
    item.setPixelColor(5, neopixel.rgb(0, 0, 0))
    item.setPixelColor(6, neopixel.rgb(0, 0, 0))
    item.setPixelColor(7, neopixel.rgb(0, 0, 0))
}
let degrees = 0
let item: neopixel.Strip = null
item = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
basic.forever(function () {
    degrees = input.compassHeading()
    if (degrees <= 23 || degrees > 338) {
        X()
        item.rotate(0)
        item.show()
    } else if (degrees <= 68) {
        X()
        item.rotate(7)
        item.show()
    } else if (degrees <= 113) {
        X()
        item.rotate(6)
        item.show()
    } else if (degrees <= 158) {
        X()
        item.rotate(5)
        item.show()
    } else if (degrees <= 203) {
        X()
        item.rotate(4)
        item.show()
    } else if (degrees <= 248) {
        X()
        item.rotate(3)
        item.show()
    } else if (degrees <= 293) {
        X()
        item.rotate(2)
        item.show()
    } else {
        X()
        item.rotate(1)
        item.show()
    }
})
