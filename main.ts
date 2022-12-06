input.onButtonPressed(Button.A, function () {
    etat = 0
})
function reculer () {
    if (pos < 0) {
        pos = 23
    } else {
        pos += -1
        basic.pause(spead)
    }
}
input.onButtonPressed(Button.AB, function () {
    if (coin == pos) {
        game.addScore(1)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 1600, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
        basic.pause(100)
        coin = randint(1, 23)
        strip.setPixelColor(coin, neopixel.colors(NeoPixelColors.Green))
        count = 0
        spead += -100
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        strip.show()
        basic.pause(500)
        count = 1
        game.gameOver()
    }
})
input.onButtonPressed(Button.B, function () {
    etat = 1
})
function avancer () {
    if (pos > 23) {
        pos = 0
    } else {
        pos += 1
        basic.pause(spead)
    }
}
let coin = 0
let strip: neopixel.Strip = null
let spead = 0
let pos = 0
let count = 0
let etat = 0
etat = 0
count = 0
pos = -1
let index = 0
spead = 500
strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
coin = strip.length() / 2
strip.setBrightness(150)
strip.showRainbow(1, 360)
basic.pause(1000)
strip.clear()
strip.setPixelColor(coin, neopixel.colors(NeoPixelColors.Green))
strip.show()
etat = 0
basic.forever(function () {
    if (count == 0) {
        if (spead < 100) {
            spead = 100
        }
        strip.setPixelColor(pos, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(coin, neopixel.colors(NeoPixelColors.Green))
        strip.show()
        strip.clear()
        if (etat % 2 == 0) {
            avancer()
        } else {
            reculer()
        }
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        strip.show()
    }
})
