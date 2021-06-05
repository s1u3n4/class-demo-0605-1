let boxes = document.getElementsByClassName("box");
let boxesArray = [...boxes];

for (let i = 0; i < boxesArray.length; i++) {
    let box = boxesArray[i];
    //console.log(box);
    box.onclick = (e) => {
        for (let j = 0; j < boxesArray.length; j++) {
            let boxClick = boxesArray[j];
            if (boxClick.classList.contains("active")) {
                boxClick.classList.remove("active");
            }
            console.log(e);
        }
        
    };
}