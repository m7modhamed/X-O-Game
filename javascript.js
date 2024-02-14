let title=document.querySelector('.title');
let turn='x';
let squares=[];
function game(id){
    let element=document.getElementById(id);
    if(turn === 'x' && element.innerHTML == ''){
        element.innerHTML = 'x'
        turn='o';
        title.innerHTML='o';
    }else if(turn === 'o' && element.innerHTML == ''){
        element.innerHTML = 'o';
        turn='x';
        title.innerHTML='x';
    }
    winner();
}

function winner(){
    for(let i=1;i<10;i++){
        squares[i]=document.getElementById('item'+i).innerHTML;
    }
   
    if(squares[1] == squares[2] && squares[2] == squares[3] && squares[3] != ''){
        win(1,2,3);
    }
    if(squares[4] == squares[5] && squares[5] == squares[6] && squares[6] != ''){
        win(4,5,6);
    }
    if(squares[7] == squares[8] && squares[8] == squares[9] && squares[9] != ''){
        win(7,8,9);
    }
    if(squares[1] == squares[4] && squares[4] == squares[7] && squares[7] != ''){
        win(1,4,7);
    }
    if(squares[2] == squares[5] && squares[5] == squares[8] && squares[8] != ''){
        win(2,5,8);
    }
    if(squares[3] == squares[6] && squares[6] == squares[9] && squares[9] != ''){
        win(3,6,9);
    }
    if(squares[1] == squares[5] && squares[5] == squares[9] && squares[9] != ''){
        win(1,5,9);
    }
    if(squares[3] == squares[5] && squares[5] == squares[7] && squares[7] != ''){
        win(3,5,7);
    }
    
    
}

function win(n1,n2,n3){
    document.getElementById('item'+n1).style.background="#000";
    document.getElementById('item'+n2).style.background="#000";
    document.getElementById('item'+n3).style.background="#000";
    title.innerHTML=`${squares[n1]} Winner`;

    setInterval(function(){
        title.innerHTML+='.';
    },1000);
    setTimeout(function(){
        location.reload();
    },4000);
}

function replayGame(){
    location.reload();
}