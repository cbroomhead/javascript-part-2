/*var tile = { 
if (tile === 'grass'){
       
   }
   if (tile === 'water'){
       
   }
   if (tile === 'sand'){
       
   }
};

var Map =[{tile:null}];

function Maps (){
   
}   
*/

function Tile (type){
  this.type  = type;
  this.isWalkable = function(type){
      if (this.type === 'grass' || this.type === 'sand'){
          return true;
      }
      else {
          return false;
      }
  }
};

function Map(heigth, width){
    this.height = heigth;
    this.width = width;
    var bigArray =[];
    for (var i=1; i < heigth; i++){
        var littleArray =[];
            for (var j = 0 ; j < width ; j++){
                littleArray.push(new Tile);
            }
        bigArray.push(littleArray);
    }
};



   