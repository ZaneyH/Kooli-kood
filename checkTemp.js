    
/* 
katjal on kolm temperatuurivahemikku 
0-20 on liiga külm     tagastab  -1
21-40 on paras temperatuur    tagastab 0
41-60 on liiga kuum   tagastab 1
*/
function checkTemp(temp) {
    console.log(temp);   
if (temp <= 15){
 console.log("liiga külm")
    return -1;
  }  else if (temp <= 40) {
console.log("OK");
      return 0;
  } else if () temp<= 60 {
console.log("Liiga kuum");
      return 1;
}
