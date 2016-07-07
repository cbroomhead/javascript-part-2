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

function Map(height, width){
    this.height = height;
    this.width = width;
    var bigArray =[];
    for (var i=1; i < height; i++){
        var littleArray =[];
            for (var j = 0 ; j < width ; j++){
                littleArray.push(new Tile);
                littleArray.type = Math.random();
                if (Math.random() < 0.33){
                    return "sand";
                }
                else if (0.33 <= Math.random() < 0.66){
                    return "water";
                }
                else {
                    return "grass";
                }
            }
        bigArray.push(littleArray);
    }
};

console.log(Map(34, 67));


   