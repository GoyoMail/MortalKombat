const gamer1 = {
    name: "Subzero",
    hp: 70,
    img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
    weapon: ['knife', 'shield', 'lightning'],
    attach: function() {
        console.log(this.name + 'Fight...');
    },
    
    position: 'center',
    // 1 - right, -1 - left
    orient: 1,
    progress: 'left'
};
const gamer2 = {
    name: 'Kitana',
    hp: 55,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['sword', 'fan', 'learn'],
    attach: function() {
        console.log(this.name + 'Fight...');
    },
    position: 'center',
    orient: -1,
    progress: 'right'
};

const $arenas = document.querySelector('.arenas')

function createPlayer(player, gamers) {
    const $gamers = document.createElement('div');
    const $progressbar = document.createElement('div');
    const $character = document.createElement('div');
    const $life = document.createElement('div');
    const $name = document.createElement('div');
    const $img = document.createElement('img');
    
    $gamers.appendChild($progressbar);
    $gamers.appendChild($character);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $character.appendChild($img);

    $gamers.classList.add(player);
    $progressbar.align = gamers.progress;
    $life.style.height = '5px';
    $life.style.width = gamers.hp + '%';
    $life.style.background = 'green';
    $name.innerText = gamers.name;
    $name.style.color = 'red';
    $name.style.fontSize = '20px';
    $name.style.fontWeight = 'bold';
    $name.style.textAlign = 'center';
    $character.align = gamers.position;
    // $img.src = 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif';
    $img.src = gamers.img;
    $img.style.transform = 'scale(' + gamers.orient + ', 1)';

    //const $arenas = document.getElementById('Arenas');
    $arenas.appendChild($gamers);
}

/* createPlayer('player1', 'Subzero', 20);
createPlayer('player2', 'Kitana', 15); */
createPlayer('player1', gamer1); 
createPlayer('player2', gamer2); 
