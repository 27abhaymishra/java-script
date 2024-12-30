// function changeText(event){
//     console.log(event);
    
//     let fpara = document.getElementById('fpara');
//     fpara.textContent = "Hello Babber"
// }

// let fpara = document.getElementById('fpara')    
// fpara.addEventListener('click' , changeText)
// fpara.removeEventListener('click' , changeText)
// fpara.addEventListener('click' , changeText , true)

// let anchorElement = document.getElementById('fanchor');
// anchorElement.addEventListener('click', function(event){
//     event.preventDefault();
//     anchorElement.textContent = "Click done bhai"
// });


//Not Best prictice
// let paras = document.querySelectorAll('p');

// for(let i =0 ; i<paras.length; i++){
//     let para = paras[i];
//     para.addEventListener('click'  , function(){
//         alert("You have Clicked on para : " + (i+1)); 
//     })
// }

// let paras = document.querySelectorAll('p');

// function alertpara(event){
//  alert("You have Clicked on para : " + event.target.textContent ); 
// }

// for(let i =0 ; i<paras.length; i++){
//        let para = paras[i];
//          para.addEventListener('click' , alertpara)
//     }
    
function alertpara(event){

    if(event.target.nodeName === 'SPAN'){
        alert("You have Clicked on para : " + event.target.textContent ); 
    }
   
   }

let mydiv =document.getElementById("wrapper")

document.addEventListener('click', alertpara);
  