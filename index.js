function distanceFromHqInBlocks(d){
    if (d===43)
    return 1 ;
else 
    if(d===50)
    return 8;
else
    var dis=42;
    var disA= (dis-34)
    return disA;
}
function distanceFromHqInFeet(df){
    if(df===43) 
    return 264;
else
    if (df===50)
    return 2112;
else
//1 blocks is equal to 264 foot
// calculate dist btn 42&34
// we multiply by 264
    var disF= 42;
    var disAf= (34);
    var disDif=(disF-disAf)
    var dFeet=(disDif*264)
   return dFeet;    
} 
    // difference between both multiplied by 264
    // use PEMDAS

    function distanceTravelledInFeet(d1, d2) {
        if (d1 < d2) {
          var blocks = d2 - d1; 
          return blocks * 264;
        }
        else if (d1,d2) {
          var block = d1 - d2; 
          return block * 264;
        }
      }
       function calculatesFarePrice(start, destination) {
        const distance = distanceTravelledInFeet(start, destination);
      
        if (distance <= 400) {
          return 0;
        }
        else if (distance > 400 && distance <  2000) {
          return (distance-400) * 0.02; 
        }
        else if (distance > 2000 && distance < 2500) {
          return 25; 
        }
        else {
          return "cannot travel that far"; 
        }
    }
    