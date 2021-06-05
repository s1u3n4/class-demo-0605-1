// let box_One = document.getElementById("boxOne");
// let box_Two = document.getElementById("boxTwo");
// let box_Three = document.getElementById("boxThree");
// let box_Four = document.getElementById("boxFour");
// let box_Five = document.getElementById("boxFive");

let boxes = document.getElementsByClassName("box");
let boxesArray = [...boxes];  //正在被點擊的5個div陣列

for (let i = 0; i < boxesArray.length; i++) {  //step1.紅色正方型 //step5.綠色正方型 //...
  let box = boxesArray[i];
  //console.log(box); //可以看這行code是什麼意思
  box.onclick = (e) => {
    for (let j = 0; j < boxesArray.length; j++) {
      let _box = boxesArray[j];  //step2.紅色正方型  //step6.綠色正方型
      if (_box.classList.contains("active")) { //step3.找到紅色正方型中，有active這個class  //step7.找到綠色正方型中，有active這個class
        _box.classList.remove("active");  //step4.移除 紅色正方型裡 active這個class  //step8.移除 綠色正方型裡 active這個class
      }
    }

    e.target.classList.add("active");
  };
}

// box_One.onclick = () => {
//   box_One.classList.add("active"); //在 html 上的 div class="boxOne"添加 active 的 class 
//   box_Two.classList.remove("active");
//   box_Three.classList.remove("active");
//   box_Four.classList.remove("active");
//   box_Five.classList.remove("active");
// };

// box_Two.onclick = () => {
//   box_One.classList.remove("active");
//   box_Two.classList.add("active");
//   box_Three.classList.remove("active");
//   box_Four.classList.remove("active");
//   box_Five.classList.remove("active");
// };

// box_Three.onclick = () => {
//   box_One.classList.remove("active");
//   box_Two.classList.remove("active");
//   box_Three.classList.add("active");
//   box_Four.classList.remove("active");
//   box_Five.classList.remove("active");
// };

// box_Four.onclick = () => {
//   box_One.classList.remove("active");
//   box_Two.classList.remove("active");
//   box_Three.classList.remove("active");
//   box_Four.classList.add("active");
//   box_Five.classList.remove("active");
// };

// box_Five.onclick = () => {
//   box_One.classList.remove("active");
//   box_Two.classList.remove("active");
//   box_Three.classList.remove("active");
//   box_Four.classList.remove("active");
//   box_Five.classList.add("active");
// };



