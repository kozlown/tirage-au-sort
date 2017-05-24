let users = null
$(document).ready(function() {
    $('#go').on('click', go)
    $('#hide-textarea').on('click', hide_textarea)
    $('#users-textarea').on('input', () => {
        $('#users').html('')
        const usersString = $('#users-textarea').val()
        users = usersString.split('\n')
        users.forEach(function(user) {
            $('#users').append(`
                <div class='user' id='${user}'>
                    ${user}
                </div>
            `)
        })
    })
})

function go() {
    $('#users').css('transition', `15s cubic-bezier(.19,.87,0,.99)`)
    $('#game-popup').css('opacity', 0)
    let randomId = Math.trunc(Math.random() * users.length)
    let winner = users[randomId]
    console.info(winner)
    const winnerTop = $(document.getElementById(winner)).offset().top
    $('#users').css('top', `calc(50vh - ${winnerTop}px - 10px)`)
    setTimeout(() => {
        $('#users').css('transition', `.5s`)
        $('#users').css('top', `calc(50vh - ${winnerTop}px)`)
    }, 15500)
}

function hide_textarea() {
    $('#users-textarea').hide()
    $('#hide-textarea').hide()
    $('#go').css('top', '50%')
}