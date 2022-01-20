console.log('worked');
const imgBox = document.querySelector('.img');
const whiteBoxes = document.getElementsByClassName("whiteBox")

//Event listner for dragable element i.e imgBox
imgBox.addEventListener('dragstart',(e)=>{
    // console.log("Dragstart has been triggered")

    e.target.className += 'hold';
    setTimeout(()=>{
        e.target.className = 'hide';
    },0);
})

imgBox.addEventListener('dragend',(e)=>{
    e.target.className = 'imgBox';
})

for (whiteBox of whiteBoxes){

    whiteBoxes.addEventListener('dragover',(e)=>{
        e.preventDefault();
    });

    whiteBoxes.addEventListener('dragenter',(e)=>{
        e.target.className +='dashed';
    })

    whiteBoxes.addEventListener('dragleave',(e)=>{
        e.target.className +='whiteBox';
    })

    
    whiteBoxes.addEventListener('drop',(e)=>{
        e.target.append (imgBox);
    })


}