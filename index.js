let users = null
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
function arrayMultiplication(array, nbMultiplications) {
    const finalArray = []
    let currentMultiplications = 0;
    let i = 0;
    while (currentMultiplications < nbMultiplications) {
        if (i >= array.length) {
            currentMultiplications += 1
            i = 0
        }
        if (currentMultiplications < nbMultiplications) {
            finalArray.push(array[i])
        }
        i++
    }
    return finalArray
}
$(document).ready(function() {
    $('#go').on('click', go)
    $('#hide-textarea').on('click', hide_textarea)
    $('#users-textarea').on('input', () => {
        $('#users').html('')
        const usersString = $('#users-textarea').val()
        users = usersString.split('\n')
        if (users.length < 500) {
            const factor = Math.trunc(500 / users.length)
            users = arrayMultiplication(users, factor)
        }
        users = shuffle(users)
    })
})

function go() {
    users.forEach(function(user, id) {
        $('#users').append(`
            <div class='user' id='user-${id}'>
                ${user}
            </div>
        `)
    })
    $(document).ready(() => {
        $('#users').css('transition', `15s cubic-bezier(.19,.87,0,.99)`)
        $('#game-popup').css('opacity', 0)
        const winnerDom = document.getElementById(`user-${444}`)
        const winnerTop = $(winnerDom).offset().top
        $('#users').css('top', `calc(60vh - ${winnerTop}px - 42px)`)
        setTimeout(() => {
            $('#users').css('transition', `.5s`)
            $('#users').css('top', `calc(60vh - ${winnerTop}px - 42px + 10px)`)
            setTimeout(() => {
                $(winnerDom).css('color', '#f44336')
            }, 500)
        }, 15500)
    })
}

function hide_textarea() {
    $('#users-textarea').hide()
    $('#hide-textarea').hide()
    $('#go').css('top', '50%')
}