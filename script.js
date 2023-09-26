let world = [
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,1,2],
    [2,1,2,2,1,2,2,2,2,1,2,1,2,2,2,2,1,2,2,1,2],
    [2,1,2,1,1,1,2,1,1,1,1,1,1,1,2,1,1,1,2,1,2],
    [2,1,2,1,2,1,2,1,2,2,1,2,2,1,2,1,2,1,2,1,2],
    [2,1,1,1,1,1,1,1,1,2,1,2,1,1,1,1,1,1,1,1,2],
    [2,2,1,2,2,2,1,2,1,1,1,1,1,2,1,2,2,2,1,2,2],
    [2,1,1,1,1,1,1,2,2,2,2,2,2,2,1,1,1,1,1,1,2],
    [2,1,2,2,2,2,1,1,1,1,1,1,1,1,1,2,2,2,2,1,2],
    [2,1,3,1,1,2,1,2,2,2,0,2,2,2,1,2,1,1,1,1,2],
    [2,2,2,2,1,1,1,2,0,0,0,0,0,2,1,1,1,2,2,2,2],
    [0,0,0,2,1,2,1,2,2,2,2,2,2,2,1,2,1,2,0,0,0],
    [0,0,0,2,1,2,1,1,1,1,1,1,1,1,1,2,1,2,0,0,0],
    [2,2,2,2,1,2,1,2,2,2,2,2,2,2,1,2,1,2,2,2,2],
    [2,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,2],
    [2,1,2,2,1,2,2,2,2,1,2,1,2,2,2,2,1,2,2,1,2],
    [2,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,2],
    [2,2,1,2,1,2,1,2,2,2,2,2,2,2,1,2,1,2,1,2,2],
    [2,1,1,1,1,2,1,1,1,1,2,1,1,1,3,2,1,1,1,1,2],
    [2,1,2,2,2,2,2,2,2,1,2,1,2,2,2,2,2,2,2,1,2],
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
];

let start = {
    x: 10,
    y: 16,
};

let pacman = {
    x: start.x,
    y: start.y,
};

let ghost1 = {
    x: 10,
    y: 10,
};

world[pacman.y][pacman.x] = 0;

let score = 0;
let lives = 3;

function displayWorld() {
    let output = "";

    for(let i=0; i<world.length; i++){
        output += "<div class='row'>";
        for(let j=0; j<world[i].length; j++) {
            if(world[i][j] === 2) {
                output += "<div class='brick'></div>";
            }
            else if(world[i][j] === 1) {
                output += "<div class='coin'></div>";
            }
            else if(world[i][j] === 3) {
                output += "<div class='cherry'></div>";
            }
            else if(world[i][j] === 0) {
                output += "<div class='empty'></div>";
            }
        }
        output += "\n</div>";
    }
    document.getElementById('world').innerHTML = output;
}
function displayPacman(){
    document.getElementById('pacman').style.top = pacman.y*20+"px";
    document.getElementById('pacman').style.left = pacman.x*20+"px";
}
function displayScore(){
    document.getElementById('score').innerHTML = "Score:<br>" + score;
}
function displayLives(){
    document.getElementById('lives').innerHTML = "Lives:<br>" + lives;
}
function displayGhost1(){
    document.getElementById('ghost1').style.top = ghost1.y*20+"px";
    document.getElementById('ghost1').style.left = ghost1.x*20+"px";
}
displayWorld();
displayPacman();
displayScore();
displayLives();
displayGhost1();

document.onkeydown = function(e){
    if(e.keyCode === 37 && world[pacman.y][pacman.x-1] !== 2) {
        $('#pacman').css({'-webkit-transform' : 'rotate(180deg)',
         '-moz-transform' : 'rotate(180deg)',
         '-ms-transform' : 'rotate(180deg)',
         'transform' : 'rotate(180deg)'});
        pacman.x--;
    }
    else if(e.keyCode === 39 && world[pacman.y][pacman.x+1] !== 2) {
        $('#pacman').css({'-webkit-transform' : 'rotate(0deg)',
         '-moz-transform' : 'rotate(0deg)',
         '-ms-transform' : 'rotate(0deg)',
         'transform' : 'rotate(0deg)'});
        pacman.x++;
    }
    else if(e.keyCode === 38 && world[pacman.y-1][pacman.x] !== 2) {
        $('#pacman').css({'-webkit-transform' : 'rotate(-90deg)',
         '-moz-transform' : 'rotate(-90deg)',
         '-ms-transform' : 'rotate(-90deg)',
         'transform' : 'rotate(-90deg)'});
        pacman.y--;
    }
    else if(e.keyCode === 40 && world[pacman.y+1][pacman.x] !== 2) {
        $('#pacman').css({'-webkit-transform' : 'rotate(90deg)',
         '-moz-transform' : 'rotate(90deg)',
         '-ms-transform' : 'rotate(90deg)',
         'transform' : 'rotate(90deg)'});
        pacman.y++;
    }
    if(world[pacman.y][pacman.x] === 1) {
        world[pacman.y][pacman.x] = 0;
        score += 10;
        displayWorld();
        displayScore();
    }
    else if(world[pacman.y][pacman.x] === 3) {
        world[pacman.y][pacman.x] = 0;
        score += 50;
        displayWorld();
        displayScore();
    }
    
    if(pacman.y == ghost1.y && pacman.x == ghost1.x) {
        lives -= 1;
        $("#pacman").fadeOut('fast', function() {
            pacman.x = start.x;
            pacman.y = start.y;
            $('#pacman').css({'-webkit-transform' : 'rotate(0deg)',
            '-moz-transform' : 'rotate(0deg)',
            '-ms-transform' : 'rotate(0deg)',
            'transform' : 'rotate(0deg)'});
            $("#pacman").fadeIn('slow');
            displayPacman();
        });
        displayLives();
    }
    displayPacman();   
}