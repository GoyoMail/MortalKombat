const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

const player1 = {
    player: 1,
    name: "Subzero",
    hp: 100,
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
const player2 = {
    player: 2,
    name: 'Kitana',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['sword', 'fan', 'learn'],
    attach: function() {
        console.log(this.name + 'Fight...');
    },
    position: 'center',
    orient: -1,
    progress: 'right'
};

function createElement(tag, className) {
    const $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className);
    }
    return $tag;
}

function createPlayer(players) {
    const $gamers = createElement('div', 'player'+players.player);
    const $progressbar = createElement('div', 'progressbar');
    const $character = createElement('div', 'character');
    const $life = createElement('div', 'life');
    const $name = createElement('div', 'name');
    const $img = createElement('img');
    
    $gamers.appendChild($progressbar);
    $gamers.appendChild($character);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $character.appendChild($img);

    // $progressbar.align = gamers.progress;
    // $life.style.height = '5px';
    // $life.style.width = gamers.hp + '%';
    // $life.style.background = 'green';
    $name.innerText = players.name;
    // $name.style.color = 'red';
    // $name.style.fontSize = '20px';
    // $name.style.fontWeight = 'bold';
    // $name.style.textAlign = 'center';
    // $character.align = gamers.position;
    $img.src = players.img;
    // $img.style.transform = 'scale(' + gamers.orient + ', 1)';

    //const $arenas = document.getElementById('Arenas');
    return $gamers;
}

function playerLose(name) {
    const $loseTitle = createElement('div', 'loseTitle');
    $loseTitle.innerText = name + ' lose';
    return $loseTitle;
}

// Функция определения победителя
function playerWins(player1, player2) {
    const hpPlay1 = player1.hp;
    const hpPlay2 = player2.hp;
    if (hpPlay1 === 0 && hpPlay2 === 0){
        const $winsTitle = createElement('div', 'winsTitle');
        $winsTitle.innerText = 'we have a draw';
        $arenas.appendChild($winsTitle);
        $randomButton.innerText = 'Game over';
        $randomButton.disabled = true;
    } else if (hpPlay1 === 0) {
        const $winsTitle = createElement('div', 'winsTitle');
        $winsTitle.innerText = player2.name + ' wins';
        $arenas.appendChild($winsTitle);
        $randomButton.innerText = 'Game over';
        $randomButton.disabled = true;
    } else if (hpPlay2 === 0) {
        const $winsTitle = createElement('div', 'winsTitle');
        $winsTitle.innerText = player1.name + ' wins';
        $arenas.appendChild($winsTitle);
        $randomButton.innerText = 'Game over';
        $randomButton.disabled = true;
    }
}
// Функция формирования случайного числа от 1 до 20
function diffHP() {
    const diff = Math.ceil(Math.random() * 20);
    return diff;
}

function changeHP(players) {
    const $playerLife = document.querySelector('.player' + players.player + ' .life');
    if (players.hp > 0) {
        diff = diffHP();
        players.hp -= diff;
        if (players.hp < 0) {
            players.hp = 0;
        }
        $playerLife.style.width = players.hp + '%';
    }
    //console.log(players.name + ' a life ' + players.hp + ' diff ' + diff);
}

$randomButton.addEventListener('click', function() {
    changeHP(player1);
    changeHP(player2);
    // Поиск победителя
    playerWins(player1, player2);
})

$arenas.appendChild(createPlayer(player1)); 
$arenas.appendChild(createPlayer(player2)); 

