    
/* 
katjal on kolm temperatuurivahemikku 
0-20 on liiga külm     tagastab  -1
21-40 on paras temperatuur    tagastab 0
41-60 on liiga kuum   tagastab 1
*/
function checkTemp() {
      let temp = 5;     
if (temp < 0){
 console.log("liiga külm")
  }  else if (temp > 20 && temp <= 40) {

  } else {

  }




}
function kasKütta(temp) {
    return temp < 20 
}

function kasJahutada(temp)  {
    return temp > 40
}

let kasJahutada = true;
if (kasJahutada(44)) {


}            
