/* game logic, class maken met coördinated legen tegel en classes maken met
 coordinaten andere tegels, if statements om te kijken of de coordinaten 
 de bestemmings tegel leeg zijn en of de bestemmings tegel in de grid zit
 dan eerst nieuwe tegel is locatie lege tegel en dan nieuwe coordinaten
 legen tegel afhankelijk waar de tegel vandaan kwam. */


 /*next step, version with git, make an array with all tiles -> change also object tile names in the rest of the code (add array name)
 use the find method to find a tile based on location for the shuffle funtion*/


//array of tile objects
const tilesArray = [

{
    id : "tile1",
    colStart : 2,
    rowStart : 1
},

{
    id : "tile2",
    colStart : 3,
    rowStart : 1
},

{
    id : "tile3",
    colStart : 4,
    rowStart : 1
},

{
    id : "tile4",
    colStart : 1,
    rowStart : 2
},

{
    id : "tile5",
    colStart : 2,
    rowStart : 2
},

{
    id : "tile6",
    colStart : 3,
    rowStart : 2
},

{
    id : "tile7",
    colStart : 4,
    rowStart : 2
},

{
    id : "tile8",
    colStart : 1,
    rowStart : 3
},

{
    id : "tile9",
    colStart : 2,
    rowStart : 3
},

{
    id : "tile10",
    colStart : 3,
    rowStart : 3
},

{
    id : "tile11",
    colStart : 4,
    rowStart : 3
},

{
    id : "tile12",
    colStart : 1,
    rowStart : 4
},

{
    id : "tile13",
    colStart : 2,
    rowStart : 4
},

{
    id : "tile14",
    colStart : 3,
    rowStart : 4
},

{
    id : "tile15",
    colStart : 4,
    rowStart : 4
},

{
    id: "blankTile",
    colStart : 1,
    rowStart : 1
}
];

//find info on tiles based on id
function tileQuery(tileId){
    return tilesArray.find(item => item.id === tileId);
   
}

// function for setting tile column
function setCol (tile) {
    
   document.getElementById(tile.id).style.gridColumnStart = tile.colStart;
    
};

//function for setting tile row
function setRow (tile) {
    
    document.getElementById(tile.id).style.gridRowStart = tile.rowStart;
    
};

//set start locations of tiles
for (let i = 0; i < 15 ; i++) {
    setCol(tilesArray[i]);
    setRow(tilesArray[i]);
}

//logic for moving tile
/*stel column 2 row 2 is leeg

dan alleen column 2 row +1 of -1 mag hierheen of row 2 column +1 of -1
colomn en row moet tussen 1 en 4 zijn*/


//legal move test
/*legal moves: 
            same row col -1
            same row col +1
            same col row -1
            same col row +1
            
            DIT MOET NOG AANGEPAST!!!!*/

function legalMove(tileId) {
    rowMin1 = tileQuery("blankTile").rowStart - 1;
    rowPlus1 = tileQuery("blankTile").rowStart + 1;
    colMin1 = tileQuery("blankTile").colStart - 1;
    colPlus1 = tileQuery("blankTile").colStart + 1;
    //same row col -1
    if(tileQuery(tileId).rowStart == tileQuery("blankTile").rowStart && tileQuery(tileId).colStart == colMin1 ){
        
        return true;
        
    }

    //same row col +1
    if(tileQuery(tileId).rowStart == tileQuery("blankTile").rowStart && tileQuery(tileId).colStart == colPlus1 ){
        
        return true;
    }

    //same col row -1
    if(tileQuery(tileId).colStart == tileQuery("blankTile").colStart && tileQuery(tileId).rowStart == rowMin1 ){
        
        return true;
    }

    //same col row +1
    if(tileQuery(tileId).colStart == tileQuery("blankTile").colStart && tileQuery(tileId).rowStart == rowPlus1 ){
        
        return true;
    }
  
}


/*Logic shuffle, take on of the tiles next to the empty space and move 
// Sample array to find the tile to be moved based on location in the grid
// Sample array
var myArray = [
    {"id": 1, "name": "Alice", lastName:"Gaastra"},
    {"id": 2, "name": "Peter", lastName:"Gaastra"},
    {"id": 3, "name": "Harry", lastName:"Ven"},
  	{"id": 4, "name": "Peter", lastName:"ven"}
];

// Get the Array item which matchs the lastname and name
var result = myArray.find(item => item.lastName === "Gaastra" && item.name === "Peter");

console.log(result.id);  // Prints: 2

*/



function shuffle() {
    //let test = tilesArray.find(item => item.id === "blankTile");
    //let test2 = tileQuery("blankTile");
    let blankTileCol = tileQuery("blankTile").colStart;
    let blankTileRow = tileQuery("blankTile").rowStart;
      
    /*let findTileId = tilesArray.find(item => item.colStart === blankTileCol +1 && item.rowStart === blankTileRow).id;
    
    moveTile(findTileId);*/
    


    randomTile = Math.floor(Math.random() * 4) + 1;
    switch(randomTile){
        //same row col -1
        case 1 :
            if(blankTileCol-1 >= 1){    
                let findTileIdCase1 = tilesArray.find(item => item.colStart === blankTileCol -1 && item.rowStart === blankTileRow).id;
        
                 moveTile(findTileIdCase1)
        }else{
            console.log("not moved");
            shuffle();
        }
            console.log("case1");
        

            break;

        //same row col +1
        case 2 :
            if(blankTileCol+1 <= 4){
            let findTileIdCase2 = tilesArray.find(item => item.colStart === blankTileCol +1 && item.rowStart === blankTileRow).id;
            
        moveTile(findTileIdCase2)
            }else{
                shuffle();
                console.log("not moved");
            }
            console.log("case2");
            
            break;

        //same col row -1
        case 3 :
            if(blankTileRow-1 >= 1){
            let findTileIdCase3 = tilesArray.find(item => item.colStart === blankTileCol && item.rowStart === blankTileRow -1).id;
            
            moveTile(findTileIdCase3)
            }else{
                shuffle();
                console.log("not moved");
            }
            console.log("case3");
            break;

        //same col row +1
        case 4 :
            if(blankTileRow+1 <= 4){
            let findTileIdCase4 = tilesArray.find(item => item.colStart === blankTileCol && item.rowStart === blankTileRow +1).id;
            
            moveTile(findTileIdCase4)
            }else{
                shuffle();
                console.log("not moved");
            }
            console.log("case4");
            break;
    }

}

function shuffle50 () {
    for (let i = 0; i < 50 ; i++) {
        shuffle();
    }
}
document.getElementById('shuffle').onclick = function () {shuffle50()};






//move tile function
function moveTile(tileId) {
    let movePermission = legalMove(tileId);
    if(movePermission == true){
        let oldBlankTileCol = tileQuery("blankTile").colStart;
        let oldBlankTileRow = tileQuery("blankTile").rowStart;
        tileQuery("blankTile").colStart = tileQuery(tileId).colStart
        
        tileQuery("blankTile").rowStart = tileQuery(tileId).rowStart
        
        
        tileQuery(tileId).colStart = oldBlankTileCol;
        
        tileQuery(tileId).rowStart = oldBlankTileRow;
              
        document.getElementById(tileId).style.gridColumnStart = tileQuery(tileId).colStart;
        document.getElementById(tileId).style.gridRowStart = tileQuery(tileId).rowStart;
   }

    
}
//click behavior tiles
document.getElementById('tile1').onclick = function () {moveTile("tile1")};
document.getElementById('tile2').onclick = function () {moveTile("tile2")};
document.getElementById('tile3').onclick = function () {moveTile("tile3")};
document.getElementById('tile4').onclick = function () {moveTile("tile4")};
document.getElementById('tile5').onclick = function () {moveTile("tile5")};
document.getElementById('tile6').onclick = function () {moveTile("tile6")};
document.getElementById('tile7').onclick = function () {moveTile("tile7")};
document.getElementById('tile8').onclick = function () {moveTile("tile8")};
document.getElementById('tile9').onclick = function () {moveTile("tile9")};
document.getElementById('tile10').onclick = function () {moveTile("tile10")};
document.getElementById('tile11').onclick = function () {moveTile("tile11")};
document.getElementById('tile12').onclick = function () {moveTile("tile12")};
document.getElementById('tile13').onclick = function () {moveTile("tile13")};
document.getElementById('tile14').onclick = function () {moveTile("tile14")};
document.getElementById('tile15').onclick = function () {moveTile("tile15")};

//reset button
function reset(){
    location.reload();
}
document.getElementById('reset').onclick = function () {reset()};




