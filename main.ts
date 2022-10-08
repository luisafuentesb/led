let Velocidad = 200
basic.forever(function () {
    for (let Y = 0; Y <= 4; Y++) {
        led.plot(0, Y)
        music.playTone(659, music.beat(BeatFraction.Sixteenth))
        basic.pause(Velocidad)
        basic.clearScreen()
    }
    for (let Y = 0; Y <= 4; Y++) {
        led.plot(1, Y)
        music.playTone(659, music.beat(BeatFraction.Sixteenth))
        basic.pause(Velocidad)
        basic.clearScreen()
    }
    for (let Y = 0; Y <= 4; Y++) {
        led.plot(2, Y)
        music.playTone(659, music.beat(BeatFraction.Sixteenth))
        basic.pause(Velocidad)
        basic.clearScreen()
    }
    for (let Y = 0; Y <= 4; Y++) {
        led.plot(3, Y)
        music.playTone(659, music.beat(BeatFraction.Sixteenth))
        basic.pause(Velocidad)
        basic.clearScreen()
    }
    for (let Y = 0; Y <= 4; Y++) {
        led.plot(4, Y)
        music.playTone(659, music.beat(BeatFraction.Sixteenth))
        basic.pause(Velocidad)
        basic.clearScreen()
    }
    basic.showIcon(IconNames.Yes)
    Velocidad += -50
})
