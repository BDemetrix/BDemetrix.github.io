const score = document.querySelector('.game__score'),
        start = document.querySelector('.game__start'),
        gameArea = document.querySelector('.game__area'),
        car = document.createElement('div');

car.classList.add('car');

start.addEventListener('click', startGame);
document.addEventListener('keydown', startRun);
document.addEventListener('keyup', stopRun);
const d = 100;

const keys = {
    ArrowUp:    false,
    ArrowDown:  false,
    ArrowRight: false,
    ArrowLeft:  false 
};

let setting;
function setSetting() {
    setting = {
        start: false,
        score: 0,
        speed: 3,
        traffic: 3,
        lives: 3
    }    
}
setSetting();

function getQuantityElements(heightElement) {
    return document.documentElement.clientHeight / heightElement;
    
}

function startGame(event) {
    if (setting.lives > 0) {
        start.classList.add('hide');
        score.classList.remove('hide');
        score.innerHTML = getScoreHTML(setting);
        gameArea.textContent = '';

        for (let i = 0; i < getQuantityElements(d); i++) {
            const line = document.createElement('div');
            line.classList.add('line');
            line.style.top = (i * d) + 'px';
            line.y = i * d;
            gameArea.appendChild(line);
        }
        for (let i = 0; i < getQuantityElements(d * setting.traffic); i++) {
            const enemy = document.createElement('div');
            enemy.classList.add('enemy');
            enemy.getRandomX = getRandomX;
            enemy.setBackground = setBackground;
            enemy.y = -d * setting.traffic * (i + 1);
            enemy.style.top = enemy.y + 'px';
            gameArea.appendChild(enemy);
            enemy.style.left = enemy.getRandomX(gameArea) + 'px';
            //enemy.style.background = 'transparent url("./img/enemy1.png") center / cover no-repeat';
            enemy.setBackground();
        }

        setting.start = true;
        gameArea.appendChild(car);
        car.style.left = (gameArea.offsetWidth - car.offsetWidth) / 2 + 'px';
        car.style.top = 'auto';
        setting.x = car.offsetLeft;
        setting.y = car.offsetTop;
        requestAnimationFrame(playGame);
    }
}

function playGame() {
    if (setting.start) {
        moveRoad();
        moveEnemy();
        if (keys.ArrowLeft && setting.x >= setting.speed) {
            setting.x -=setting.speed;
        }
        if (keys.ArrowRight && setting.x <= gameArea.offsetWidth - car.offsetWidth - setting.speed) {
            setting.x += setting.speed;
        }
        if (keys.ArrowUp && setting.y > 10) {
            setting.y -= setting.speed;
        }
        if (keys.ArrowDown && setting.y <= gameArea['clientHeight'] - 0.5 * car['clientHeight']) {
            setting.y += setting.speed;
        }

        car.style.left = setting.x +'px';
        car.style.top = setting.y + 'px';

        requestAnimationFrame(playGame);
    }
}

function startRun(event) {
    event.preventDefault(); 
    keys[event.key] = true;
}

function stopRun(event) {
    keys[event.key] = false;
    if (event.key === 'Escape') {
        escapeGame();
    }
}

function moveRoad(){
    let lines = document.querySelectorAll('.line');
    lines.forEach(function (line) {
        line.y += setting.speed;
        line.style.top = line.y + 'px';
        if (line.y >= document.documentElement.clientHeight) {
            line.y = -d;
        }
    });
}

function moveEnemy() {
    let enemys = document.querySelectorAll('.enemy');
    enemys.forEach(function (enemy) {
        let carRect = car.getBoundingClientRect();
        let enemyRect = enemy.getBoundingClientRect();
        
        if (carRect.top <= enemyRect.bottom && carRect.right >= enemyRect.left && carRect.left <= enemyRect.right && carRect.bottom >= enemyRect.top) {
            setting.start = false;
            console.warn('DTP');
            start.textContent = 'Continue';
            start.classList.remove('hide');
            setting.lives--;
            score.innerHTML = getScoreHTML(setting);
            if (setting.lives < 1) {
                start.innerHTML = 'GAME OVER! <br> press "Escape"';
                const esc = document.createElement('div');
                esc.classList.add('game__escape');
                esc.textContent = 'Escape';
                esc.addEventListener('click', escapeGame);
                gameArea.appendChild(esc);

            }
        }

        enemy.y += setting.speed/2;
        enemy.style.top = enemy.y + 'px';
        if (enemy.y >= document.documentElement.clientHeight) {
            enemy.y = -d * setting.traffic;
            enemy.style.left = enemy.getRandomX(gameArea) + 'px';
            enemy.setBackground();
            setting.score += setting.speed;
            score.innerHTML = getScoreHTML(setting);
        }
    });
}    
   
function getRandomX(gameArea) {
    return Math.floor(Math.random() * (gameArea.offsetWidth - this.offsetWidth));
}

function setBackground() {
    let bgImage = 'transparent url("./img/enemy';
        bgImage +=  Math.floor(Math.random()*11);
        bgImage += '.png") center / cover no-repeat';
    this.style.background = bgImage;
}

function getScoreHTML(setting) {
    return 'lives: ' + setting.lives + '&nbsp;&nbsp;&nbsp;&nbsp; score: ' + setting.score;
}

function escapeGame() {
    gameArea.textContent = '';
    setSetting();
    score.classList.add('hide');
    start.classList.remove('hide');
    start.textContent = "Start";
}