controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite2 = sprites.createProjectileFromSprite(img`
        5 5 
        5 5 
        5 5 
        5 5 
        5 5 
        5 5 
        `, mySprite, 0, -55)
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    sprites.destroy(mySprite, effects.disintegrate, 500)
    HP.setBarSize(1e-7, 1e-7)
    Over += 1
    pause(2000)
    tiles.setCurrentTilemap(tilemap`level13`)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.fire, 200)
    sprites.destroy(sprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    HP.value += -20
    sprites.destroy(otherSprite, effects.fire, 200)
})
let mySprite3: Sprite = null
let mySprite4: Sprite = null
let mySprite5: Sprite = null
let mySprite2: Sprite = null
let HP: StatusBarSprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    ..............................
    ..............................
    ..............................
    ............22222.............
    ............22222.............
    ............22222.............
    ......22222222222222222.......
    .....22222222222222222222.....
    ....222222222222222222222.....
    ....222222222222222222222.....
    ....222222222222222222222.....
    ....222222222222222222222.....
    ....222222222222222222222.....
    ....222222222222222222222.....
    ...222222222222222222222......
    ...222222222222222222222......
    ...222222222222222222222......
    ...222222222222222222222......
    ...222222222222222222222......
    ...222222222222222222222......
    ......222222222222222222......
    ........222222222222222.......
    ........22222222222...........
    .........222222222222.........
    .........222222222222.........
    .........222222222222.........
    .........222222222222.........
    .........222222222222.........
    ...........222222222..........
    ..............................
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 65, 0)
mySprite.y = 95
HP = statusbars.create(20, 4, StatusBarKind.Health)
HP.attachToSprite(mySprite, -38, -2)
HP.setBarBorder(1, 15)
HP.setLabel("HP", 15)
scene.setBackgroundColor(4)
let Over = 0
tiles.setCurrentTilemap(tilemap`level8`)
game.onUpdateInterval(5000, function () {
    if (Over == 0) {
        mySprite5 = sprites.create(img`
            . . . . . . . . b b b b b . . . 
            . . . . . . b b d d d d b b . . 
            . . . . . b d d d d d d d c . . 
            . . . . c d d d d d d d d c . . 
            . . . c b d d d d d d d b c c . 
            . . . c b b d d d d b c c c c . 
            . . c c d b b b c c c c c c c . 
            . . c c c d d d d c c d d d c c 
            . c d b c c b b c c d d d d d c 
            . c b d d b b b c c d d d d d c 
            . c c b b b b c b c b d d d b c 
            c b b c c c c c b b b b b c c c 
            c c b b c c c c c d d d d d b c 
            c c c c c c b b b b b c c c c c 
            c c c c c c c b b b b b c c c c 
            c c c c c c c c b b b b b c c c 
            `, SpriteKind.Enemy)
        mySprite4 = sprites.create(img`
            . . . . . . . . b b b b b . . . 
            . . . . . . b b d d d d b b . . 
            . . . . . b d d d d d d d c . . 
            . . . . c d d d d d d d d c . . 
            . . . c b d d d d d d d b c c . 
            . . . c b b d d d d b c c c c . 
            . . c c d b b b c c c c c c c . 
            . . c c c d d d d c c d d d c c 
            . c d b c c b b c c d d d d d c 
            . c b d d b b b c c d d d d d c 
            . c c b b b b c b c b d d d b c 
            c b b c c c c c b b b b b c c c 
            c c b b c c c c c d d d d d b c 
            c c c c c c b b b b b c c c c c 
            c c c c c c c b b b b b c c c c 
            c c c c c c c c b b b b b c c c 
            `, SpriteKind.Enemy)
        mySprite3 = sprites.create(img`
            . . . . . . . . b b b b b . . . 
            . . . . . . b b d d d d b b . . 
            . . . . . b d d d d d d d c . . 
            . . . . c d d d d d d d d c . . 
            . . . c b d d d d d d d b c c . 
            . . . c b b d d d d b c c c c . 
            . . c c d b b b c c c c c c c . 
            . . c c c d d d d c c d d d c c 
            . c d b c c b b c c d d d d d c 
            . c b d d b b b c c d d d d d c 
            . c c b b b b c b c b d d d b c 
            c b b c c c c c b b b b b c c c 
            c c b b c c c c c d d d d d b c 
            c c c c c c b b b b b c c c c c 
            c c c c c c c b b b b b c c c c 
            c c c c c c c c b b b b b c c c 
            `, SpriteKind.Enemy)
        mySprite3.setPosition(randint(10, 44), 0)
        mySprite3.setVelocity(0, 50)
        mySprite4.setPosition(randint(54, 95), 0)
        mySprite4.setVelocity(0, 50)
        mySprite5.setVelocity(0, 50)
        mySprite5.setPosition(randint(106, 150), 0)
    }
})
