levels = [
            [[7,3,15,1],[4,6,7,9],[[[1,1],[1,1],[1,1],[1,1]],[[1,2],[1,2],[1,2],[0,1]],[[1,4],[0,3],[1,3],[0,3]],[[0,5],[0,4],[1,9],[0,5]]]],
            [[6,3,21,19],[19,9,11,10],[[[1,2],[0,4],[1,8],[1,9]],[[0,8],[0,7],[1,6],[1,3]],[[1,4],[0,8],[0,1],[1,7]],[[0,2],[1,3],[1,7],[0,7]]]],
            [[9,15,8,6,1],[2,6,16,7,8],[[[0,2],[0,2],[0,5],[1,2],[0,1]],[[1,4],[0,6],[0,1],[1,1],[1,1]],[[0,7],[1,8],[1,8],[0,9],[0,3]],[[0,5],[1,7],[0,2],[0,2],[0,7]],[[1,5],[0,7],[0,2],[1,3],[0,9]]]],
            [[2,28,20,11,4,6],[14,18,4,14,12,9],[[[0,6],[1,1],[1,9],[0,5],[0,6],[1,4]],[[0,9],[1,8],[1,6],[1,4],[0,3],[0,6]],[[1,1],[1,3],[0,2],[0,9],[0,4],[0,4]],[[1,1],[1,9],[0,1],[1,4],[0,8],[0,9]],[[0,5],[1,7],[0,3],[1,3],[0,1],[1,2]],[[0,3],[0,7],[1,5],[0,9],[1,4],[0,3]]]],
            [[3,16,22,7,14,10],[18,9,14,9,13,9],[[[0,7],[0,2],[1,7],[0,1],[1,9],[1,2]],[[0,8],[0,6],[1,7],[1,2],[0,5],[0,9]],[[0,4],[1,5],[1,7],[0,5],[1,2],[0,5]],[[0,9],[1,6],[0,2],[0,6],[1,3],[0,7]],[[0,6],[0,6],[0,6],[1,5],[0,1],[1,8]],[[1,3],[1,5],[1,1],[0,3],[0,5],[0,3]]]]
        ];
var level = 0;
var set = 1;
var maxlvl = 4;
const levelElement = document.getElementById("level");
const healthElement = document.querySelector(".health");
const setDelContainer = document.querySelector(".set_del_container");
const gameElement = document.getElementById("game");
function createtable(){
    
    gameElement.classList.add("show");
    levelElement.classList.add("show");
    healthElement.classList.add("show");
    setDelContainer.classList.add("show");
    
    if (level==maxlvl){
        level=0;
    }
    document.getElementById('level').innerHTML='Level '+(level+1);
    var rowNumber = levels[level][2].length;
    var colNumber = levels[level][2][0].length;
    var lifes = 3;
    var table = document.createElement('div');
    table.className = 'table';
    var tables = document.createElement('div');
    tables.className = 'tables';
    var reset = document.createElement('div');
    reset.className = 'reset';
    reset.innerHTML='<svg class="restart" width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/><g id="SVGRepo_iconCarrier"><path d="M12 2.99988C16.9706 2.99988 21 7.02931 21 11.9999C21 16.9704 16.9706 20.9999 12 20.9999C7.02944 20.9999 3 16.9704 3 11.9999C3 9.17261 4.30367 6.64983 6.34267 4.99988" stroke="#292929" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.416"/><path d="M3 4.49988H7V8.49988" stroke="#292929" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.416"/></g></svg>';
    reset.addEventListener("click",function (e){
        gameElement.classList.remove("show");
        levelElement.classList.remove("show");
        healthElement.classList.remove("show");
        setDelContainer.classList.remove("show");
        
        levels = [
            [[7,3,15,1],[4,6,7,9],[[[1,1],[1,1],[1,1],[1,1]],[[1,2],[1,2],[1,2],[0,1]],[[1,4],[0,3],[1,3],[0,3]],[[0,5],[0,4],[1,9],[0,5]]]],
            [[6,3,21,19],[19,9,11,10],[[[1,2],[0,4],[1,8],[1,9]],[[0,8],[0,7],[1,6],[1,3]],[[1,4],[0,8],[0,1],[1,7]],[[0,2],[1,3],[1,7],[0,7]]]],
            [[9,15,8,6,1],[2,6,16,7,8],[[[0,2],[0,2],[0,5],[1,2],[0,1]],[[1,4],[0,6],[0,1],[1,1],[1,1]],[[0,7],[1,8],[1,8],[0,9],[0,3]],[[0,5],[1,7],[0,2],[0,2],[0,7]],[[1,5],[0,7],[0,2],[1,3],[0,9]]]],
            [[2,28,20,11,4,6],[14,18,4,14,12,9],[[[0,6],[1,1],[1,9],[0,5],[0,6],[1,4]],[[0,9],[1,8],[1,6],[1,4],[0,3],[0,6]],[[1,1],[1,3],[0,2],[0,9],[0,4],[0,4]],[[1,1],[1,9],[0,1],[1,4],[0,8],[0,9]],[[0,5],[1,7],[0,3],[1,3],[0,1],[1,2]],[[0,3],[0,7],[1,5],[0,9],[1,4],[0,3]]]],
            [[3,16,22,7,14,10],[18,9,14,9,13,9],[[[0,7],[0,2],[1,7],[0,1],[1,9],[1,2]],[[0,8],[0,6],[1,7],[1,2],[0,5],[0,9]],[[0,4],[1,5],[1,7],[0,5],[1,2],[0,5]],[[0,9],[1,6],[0,2],[0,6],[1,3],[0,7]],[[0,6],[0,6],[0,6],[1,5],[0,1],[1,8]],[[1,3],[1,5],[1,1],[0,3],[0,5],[0,3]]]]
        ];
        setTimeout(() => {
            plus_heart(1);
            plus_heart(2);
            plus_heart(3);
            document.getElementById('set_del').checked = false;
            set=1;
            set_del();
            createtable();
        }, 1000);
    });
    tables.appendChild(reset);

    var i = document.createElement('div');
    i.className = 'i';
    var j = document.createElement('div');
    j.className = 'j';
    table.style.gridTemplateColumns = `repeat(${colNumber}, calc(100% / ${colNumber}))`;
    table.style.gridTemplateRows = `repeat(${colNumber}, calc(100% / ${colNumber}))`;
    for (let x = 0; x < rowNumber; x++) {
        for (let y = 0; y < colNumber; y++) {
            var circle = document.createElement('div');
            circle.className='circle';
            circle.addEventListener("click",function click(e){
                let i = levels[level][2][x][y][0];
                levels[level][2][x][y][0] = -1;
                if (i==1) {
                    if(set==1){
                    e.target.style.border = '1px solid';
                    e.target.parentElement.style = 'background-color : grey ';
                    setTimeout(function(){
                    e.target.parentElement.style= 'background-color : sas';
                        
                    },300);
                    checktable(level,x,y);
                    }
                    else{
                        e.target.parentElement.style = 'background-color : red ';
                        setTimeout(function(){
                        e.target.parentElement.style= 'background-color : sas';
                            
                        },300);
                        setTimeout(function(){
                            e.target.style.border = '1px solid';
                        },500);
                        minus_heart(lifes);
                        lifes-=1;
                        
                        if(lifes==0){
                            gameElement.classList.remove("show");
                            levelElement.classList.remove("show");
                            healthElement.classList.remove("show");
                            setDelContainer.classList.remove("show");
                            console.log("restart");
                            restart();
                        }
                    }
                }
                else if(i==0){
                    if(set==1){
                    e.target.parentElement.style = 'background-color : red ';
                    setTimeout(function(){
                        e.target.parentElement.style= 'background-color : sas';
                    },300);
                    e.target.style = 'color : rgb(205,206,206) ';
                    minus_heart(lifes);
                    lifes-=1;
                    if(lifes==0){
                        gameElement.classList.remove("show");
                        levelElement.classList.remove("show");
                        healthElement.classList.remove("show");
                        setDelContainer.classList.remove("show");
                        console.log("restart");
                        restart();
                    }}
                    else{
                        e.target.parentElement.style = 'background-color : grey ';
                        setTimeout(function(){
                        e.target.parentElement.style= 'background-color : sas';
                            
                        },300);
                        setTimeout(() => {
                            e.target.style = 'color : rgb(205,206,206) ';
                        }, 0);
                        
                    }
                }
                });
                    
            circle.appendChild(document.createTextNode(levels[level][2][x][y][1]));

            var div = document.createElement('div');
            div.style.transition = 'background-color 0.5s ease';
            div.className = 'x'+x+' y'+y;
            div.appendChild(circle);

            table.appendChild(div);
            
        }    
    }

    

    for (let x = 0; x < levels[level][0].length; x++) {
        var div = document.createElement('div');
        div.innerHTML = levels[level][0][x];
        i.appendChild(div);
        
    }
    for (let x = 0; x < levels[level][1].length; x++) {
        var div = document.createElement('div');
        div.innerHTML = levels[level][1][x];
        j.appendChild(div);
        
    }
    document.getElementById('game').innerHTML='';
    document.getElementById('game').appendChild(tables);
    tables.appendChild(i);
    tables.appendChild(j);
    tables.appendChild(table);
    
}
function set_del(){
    if (document.getElementById('set_del').checked==true){
        var styleSheets = document.styleSheets;
        for (var i = 0; i < styleSheets.length; i++) {
            var styleSheet = styleSheets[i];

            if (styleSheet.href === null || styleSheet.href.startsWith(window.location.origin)) {
                for (var j = 0; j < styleSheet.cssRules.length; j++) {
                    var rule = styleSheet.cssRules[j];

                    if (rule.type === CSSRule.STYLE_RULE && rule.selectorText === '*') {
                        rule.style = 'cursor: url('+'cursor_eraser.svg'+'),auto !important;';
                    }
                }
            }
        }
        set=0;
    }
    else{
        var styleSheets = document.styleSheets;
        for (var i = 0; i < styleSheets.length; i++) {
            var styleSheet = styleSheets[i];

            if (styleSheet.href === null || styleSheet.href.startsWith(window.location.origin)) {
                for (var j = 0; j < styleSheet.cssRules.length; j++) {
                    var rule = styleSheet.cssRules[j];

                    if (rule.type === CSSRule.STYLE_RULE && rule.selectorText === '*') {
                        rule.style = 'cursor: url('+'cursor_writer.svg'+'),auto !important;';
                    }
                }
            }
        }
        set=1
    }
}
function restart(){
    document.getElementById('popuptext').innerHTML='You Lost!';
    document.getElementById('restartButton').innerHTML = 'Restart!';
    document.getElementById('popupContainer').style.display = 'flex';
    setTimeout(function() {
        document.getElementById('popupContainer').style.opacity = '1';
        document.getElementById('popupContent').style.opacity = '1';
        document.getElementById('popupContent').style.transform = 'translateY(0)';
    }, 50);
    
    document.getElementById('restartButton').addEventListener('click', function() {
        plus_heart(1);
        plus_heart(2);
        plus_heart(3);
        document.getElementById('popupContainer').style.opacity = '0';
        document.getElementById('popupContent').style.opacity = '0';
        document.getElementById('popupContent').style.transform = 'translateY(-20px)';
        setTimeout(function() {
            document.getElementById('popupContainer').style.display = 'none';
        }, 300); 
        levels = [
            [[7,3,15,1],[4,6,7,9],[[[1,1],[1,1],[1,1],[1,1]],[[1,2],[1,2],[1,2],[0,1]],[[1,4],[0,3],[1,3],[0,3]],[[0,5],[0,4],[1,9],[0,5]]]],
            [[6,3,21,19],[19,9,11,10],[[[1,2],[0,4],[1,8],[1,9]],[[0,8],[0,7],[1,6],[1,3]],[[1,4],[0,8],[0,1],[1,7]],[[0,2],[1,3],[1,7],[0,7]]]],
            [[9,15,8,6,1],[2,6,16,7,8],[[[0,2],[0,2],[0,5],[1,2],[0,1]],[[1,4],[0,6],[0,1],[1,1],[1,1]],[[0,7],[1,8],[1,8],[0,9],[0,3]],[[0,5],[1,7],[0,2],[0,2],[0,7]],[[1,5],[0,7],[0,2],[1,3],[0,9]]]],
            [[2,28,20,11,4,6],[14,18,4,14,12,9],[[[0,6],[1,1],[1,9],[0,5],[0,6],[1,4]],[[0,9],[1,8],[1,6],[1,4],[0,3],[0,6]],[[1,1],[1,3],[0,2],[0,9],[0,4],[0,4]],[[1,1],[1,9],[0,1],[1,4],[0,8],[0,9]],[[0,5],[1,7],[0,3],[1,3],[0,1],[1,2]],[[0,3],[0,7],[1,5],[0,9],[1,4],[0,3]]]],
            [[3,16,22,7,14,10],[18,9,14,9,13,9],[[[0,7],[0,2],[1,7],[0,1],[1,9],[1,2]],[[0,8],[0,6],[1,7],[1,2],[0,5],[0,9]],[[0,4],[1,5],[1,7],[0,5],[1,2],[0,5]],[[0,9],[1,6],[0,2],[0,6],[1,3],[0,7]],[[0,6],[0,6],[0,6],[1,5],[0,1],[1,8]],[[1,3],[1,5],[1,1],[0,3],[0,5],[0,3]]]]
        ];
        document.getElementById('set_del').checked = false;
        set=1;
        set_del();
        createtable();
});
}
function minus_heart(n){
    var styleTag = document.createElement('style');
    styleTag.innerHTML = `.heart#h${n}:before, .heart#h${n}:after { background: rgb(184, 179, 179) !important; }`;
    document.head.appendChild(styleTag);
}
function plus_heart(n){
    var styleTag = document.createElement('style');
    styleTag.innerHTML = `.heart#h${n}:before, .heart#h${n}:after { background: red !important; }`;
    document.head.appendChild(styleTag);
}
const delay = (delayInms) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
  };
async function checktable(lvl,x,y){
    test=false;
    for (let i = 0; i < levels[lvl][2].length; i++) {
        if(levels[lvl][2][x][i][0]==1){
            test=true;
            break
        }
    }
    if (test==false){
        let delayres = await delay(300);

        let xlist = document.querySelectorAll('.x'+x);
        for (let i = 0; i < xlist.length; i++) {
            let font_color = window.getComputedStyle(xlist[i]);
            if(font_color.color!='rgb(205, 206, 206)'){
            if (levels[lvl][2][x][i][0]==0) {
                levels[lvl][2][x][i][0]=-1;
                setTimeout(() => {
                    xlist[i].style = 'color: rgb(205,206,206) ';
                }, 300);
            }
            
            xlist[i].style ='background-color : rgb(184, 179, 179);';
            setTimeout(function(){
            xlist[i].style= 'background-color : sas';
                
            },200);

            let delayres = await delay(100);
            
        }}
    }
    test=false;
    for (let i = 0; i < levels[lvl][2][0].length; i++) {
        if(levels[lvl][2][i][y][0]==1){
            test=true;
            break
        }
    }
    if (test==false){
        let delayres = await delay(300);

        let xlist = document.querySelectorAll('.y'+y);
        for (let i = 0; i < xlist.length; i++) {
            let font_color = window.getComputedStyle(xlist[i]);
            if(font_color.color!='rgb(205, 206, 206)'){
            if (levels[lvl][2][i][y][0]==0) {
                levels[lvl][2][i][y][0]=-1;
                setTimeout(() => {
                    xlist[i].style = 'color : rgb(205,206,206) ';
                }, 300);
            }
            
            xlist[i].style ='background-color : rgb(184, 179, 179);';
            setTimeout(function(){
            xlist[i].style= 'background-color : sas';
                
            },200);
            let delayres = await delay(100);
            
            }
        }
        test=true;
        for (let i = 0; i < levels[lvl][2].length; i++) {
            for (let j = 0; j < levels[lvl][2][0].length; j++) {
                if (levels[lvl][2][i][j][0]==1) {
                    test=false;
                }
            }
        }
        if (test) {
            console.log("is it here?");
            gameElement.classList.remove("show");
            levelElement.classList.remove("show");
            healthElement.classList.remove("show");
            setDelContainer.classList.remove("show");
            next();
            
        }
        
    }
}
function next(){
    document.getElementById('popuptext').innerHTML='You Won!';
    document.getElementById('restartButton').innerHTML = 'Next Level!';
    document.getElementById('popupContainer').style.display = 'flex';
    setTimeout(function() {
        document.getElementById('popupContainer').style.opacity = '1';
        document.getElementById('popupContent').style.opacity = '1';
        document.getElementById('popupContent').style.transform = 'translateY(0)';
    }, 50);
    level+=1;
    document.getElementById('restartButton').addEventListener('click', function() {
        plus_heart(1);
        plus_heart(2);
        plus_heart(3);
        document.getElementById('popupContainer').style.opacity = '0';
        document.getElementById('popupContent').style.opacity = '0';
        document.getElementById('popupContent').style.transform = 'translateY(-20px)';
        setTimeout(function() {
            document.getElementById('popupContainer').style.display = 'none';
        }, 300); 
        levels = [
            [[7,3,15,1],[4,6,7,9],[[[1,1],[1,1],[1,1],[1,1]],[[1,2],[1,2],[1,2],[0,1]],[[1,4],[0,3],[1,3],[0,3]],[[0,5],[0,4],[1,9],[0,5]]]],
            [[6,3,21,19],[19,9,11,10],[[[1,2],[0,4],[1,8],[1,9]],[[0,8],[0,7],[1,6],[1,3]],[[1,4],[0,8],[0,1],[1,7]],[[0,2],[1,3],[1,7],[0,7]]]],
            [[9,15,8,6,1],[2,6,16,7,8],[[[0,2],[0,2],[0,5],[1,2],[0,1]],[[1,4],[0,6],[0,1],[1,1],[1,1]],[[0,7],[1,8],[1,8],[0,9],[0,3]],[[0,5],[1,7],[0,2],[0,2],[0,7]],[[1,5],[0,7],[0,2],[1,3],[0,9]]]],
            [[2,28,20,11,4,6],[14,18,4,14,12,9],[[[0,6],[1,1],[1,9],[0,5],[0,6],[1,4]],[[0,9],[1,8],[1,6],[1,4],[0,3],[0,6]],[[1,1],[1,3],[0,2],[0,9],[0,4],[0,4]],[[1,1],[1,9],[0,1],[1,4],[0,8],[0,9]],[[0,5],[1,7],[0,3],[1,3],[0,1],[1,2]],[[0,3],[0,7],[1,5],[0,9],[1,4],[0,3]]]],
            [[3,16,22,7,14,10],[18,9,14,9,13,9],[[[0,7],[0,2],[1,7],[0,1],[1,9],[1,2]],[[0,8],[0,6],[1,7],[1,2],[0,5],[0,9]],[[0,4],[1,5],[1,7],[0,5],[1,2],[0,5]],[[0,9],[1,6],[0,2],[0,6],[1,3],[0,7]],[[0,6],[0,6],[0,6],[1,5],[0,1],[1,8]],[[1,3],[1,5],[1,1],[0,3],[0,5],[0,3]]]]
        ];
        document.getElementById('set_del').checked = false;
        set=1;
        set_del();
        createtable();
});
}
function hint(){
    let x=0;
    let y=0;
    test=true;
    for (let i = 0; i < levels[level][2].length; i++) {
        for (let j = 0; j < levels[level][2][0].length; j++) {
            if (levels[level][2][i][j][0]==1 && test) {
                x=i;
                y=j;
                test=false;
            }
        }
    }
    
    if (!test) {
        helped = document.querySelectorAll('.x'+x+'');
        test=true;
        console.log(helped[y]);
        helped[y].querySelector('.circle').style.border = '1px solid';
        helped[y].style = 'background-color : grey ';
        setTimeout(function(){
        helped[y].style= 'background-color : sas';
            
        },300);
        levels[level][2][x][y][0]=-1;
        checktable(level,x,y);
    }
}