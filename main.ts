basic.forever(function () {
    let meti: Image = null
    music.play(music.stringPlayable("C5 A C5 A C5 A C5 A ", 140), music.PlaybackMode.UntilDone)
    music.setVolume(1000)
    basic.showString("hospital tetovo emergency room")
    led.plot(3, 4)
    basic.showNumber(3)
    meti.scrollImage(1, 200)
})
