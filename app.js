

    const poster = document.getElementsByClassName('poster')[0];
    const blocks = document.getElementsByClassName('blocks');
    setTimeout(() =>{

        for (let i = 1; i < 400; i++) {
            poster.innerHTML += "<div class='blocks'></div>"
            const duration = Math.random() * 5;
            blocks[i].style.animationDuration = 2*duration + 's';
            blocks[i].style.animationDelay = duration + 's';
        }
    },3000)
