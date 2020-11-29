document.addEventListener('DOMContentLoaded', function() {
    notif_anon = document.querySelector('.notif_anon')
    msn_anon = document.querySelector('.msn_anon')

    msn_anon.addEventListener('click', function(event) {
        localStorage.setItem('visualizacao_anon', true)
})

    notif_bales = document.querySelector('.notif_bales')
    msn_bales = document.querySelector('.msn_bales')

    msn_bales.addEventListener('click', function(event) {
        localStorage.setItem('visualizacao_bales', true)
})
    verifica_anon = localStorage.getItem('visualizacao_anon')
    if (verifica_anon == 'true') {
        notif_anon = document.querySelector('.notif_anon');
        notif_anon.classList.add('hidden')
    }

    verifica_bales = localStorage.getItem('visualizacao_bales')
    if (verifica_bales == 'true') {
        notif_bales.classList.add('hidden')
    }
})