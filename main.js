let bank = 1000
let betPool = 0
const ryu = "<img src= './images/ryu.png'>"
const bison = "<img src= './images/bison.png'>"
const chunli = "<img src= ./images/chunli.png>"
const dan = "<img src= './images/dan.png>"
const dhalsim = "<img src= './images/dhalsim.png'>"

document.getElementById('lilBet').addEventListener('click', tenToPool)
document.getElementById('bigBet').addEventListener('click', hundredToPool)
document.getElementById('spin').addEventListener('click', slots)

function getRandomFruit(){
    let randomOpt = Math.random()
    let fruit = ryu
    if (randomOpt < .20){
        fruit = bison
    }
    else if (randomOpt < .40){
        fruit = dan
    }
    else if (randomOpt < .60){
        fruit = chunli
    }
    else if (randomOpt < .80){
        fruit = dhalsim
    }
    console.log(fruit)    
    return fruit
}


function slots(){
    let leftSlot = getRandomFruit()
    let middleSlot = getRandomFruit()
    let rightSlot = getRandomFruit()
    let slotLeft = document.getElementById('leftSlot')
    slotLeft.src = leftSlot
    let slotMid = document.getElementById('middleSlot')
    slotMid.innerHTML = middleSlot
    let slotRight = document.getElementById('rightSlot')
    slotRight.innerHTML = rightSlot

    let winmsg = document.getElementById('msgDisplay')

    
if(betPool === 0 && bank === 0){
    return winmsg.innerText = 'SMELLS LIKE BROKE IN HERE'

}
else{
    if (leftSlot === middleSlot && middleSlot === rightSlot){
        if(leftSlot === ryu){
            winmsg.innerHTML = 'You win'
            bank = bank + (betPool * 10)
        }
        else if(leftSlot === bison){
            winmsg.innerHTML = 'You win'
            bank = bank + (betPool * 100)
        }
        else if(leftSlot === dan){
            winmsg.innerHTML = 'You win'
            bank = bank + (betPool * 100000)
        }
        else if(leftSlot === chunli){
            winmsg.innerHTML = 'You win'
            bank = bank + (betPool * 10)
        }
        else if(leftSlot === dhalsim){
            winmsg.innerHTML = 'You Win'
            bank = bank + (betPool * 10)
        }
    }
    else{
        winmsg.innerText = 'You Lose'

    }
    betPool = 0
    let h2betamt = document.getElementById('betamt')
    h2betamt.innerHTML = betPool
    let bankUpt = document.getElementById('winnings')
    bankUpt.innerHTML = bank
}
}
function tenToPool(){
    if(bank >= 10){
        betPool += 10
        bank -= 10
     
    }
    else{
        return
    }
    let h2betamt = document.getElementById('betamt')
    h2betamt.innerHTML = betPool
    let bankUpt = document.getElementById('winnings')
    bankUpt.innerHTML = bank
}
function hundredToPool(){
    if(bank >= 10){
        betPool += 100
        bank -= 100
    }
    else{
        return
    }
    let h1win = document.getElementById('winnings')
    h1win.innerHTML = betPool
    let h2betamt = document.getElementById('betamt')
    h2betamt.innerHTML = betPool
    let bankUpt = document.getElementById('winnings')
    bankUpt.innerHTML = bank
}
