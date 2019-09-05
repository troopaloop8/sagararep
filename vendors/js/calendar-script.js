let cardElement = document.querySelector(".card-boi");
/*
cardElement.addEventListener("click", flip);

function flip(){
  cardElement.classList.toggle("flipped")
}
*/

function startTime() {
    var weekday = new Array();
    weekday[0] =  "日曜日";
    weekday[1] = "月曜日";
    weekday[2] = "火曜日";
    weekday[3] = "水曜日";
    weekday[4] = "木曜日";
    weekday[5] = "金曜日";
    weekday[6] = "土曜日";
    var month = new Array();
    month[0] = "1月";
    month[1] = "2月";
    month[2] = "3月";
    month[3] = "4月";
    month[4] = "5月";
    month[5] = "6月";
    month[6] = "7月";
    month[7] = "8月";
    month[8] = "9月";
    month[9] = "10月";
    month[10] = "11月";
    month[11] = "12月";
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var d = today.getDate();
    var y = today.getFullYear();
    var wd = weekday[today.getDay()];
    var mt = month[today.getMonth()];
  
    m = checkTime(m);
    s = checkTime(s);
                    document.getElementById('date').innerHTML = y + '年'
  document.getElementById('month').innerHTML =
                   mt + d + '日';   

 document.getElementById('day').innerHTML =
    wd;
 
    
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}
