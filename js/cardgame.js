

// const button= document.querySelector(".sort-button-lo-high");
// button.addEventListener("click",() => {
        //   courseList.sort((a, b) => a.price-b.price);
//   generateList();
// });

var openCardID, newCardID;
var  isOpenFlag = false,cardEnabled = true;
var points = 0;

let cardDeck = [  {id : "btn-a",cell : "cell11", isOccupied : "false"},
                  {id : "btn-b",cell : "cell12", isOccupied : "false" },
                  {id : "btn-c",cell : "cell13", isOccupied : "false" },
                  {id : "btn-d",cell : "cell14", isOccupied : "false" },
                  {id : "btn-e",cell : "cell21", isOccupied : "false" },
                  {id : "btn-f",cell : "cell22", isOccupied : "false" },
                  {id : "btn-g",cell : "cell23", isOccupied : "false" },
                  {id : "btn-h",cell : "cell24", isOccupied : "false" },
                  {id : "btn-i",cell : "cell31", isOccupied : "false" },
                  {id : "btn-j",cell : "cell32", isOccupied : "false" },
                  {id : "btn-k",cell : "cell33", isOccupied : "false" },
                  {id : "btn-l",cell : "cell34", isOccupied : "false" },
                  {id : "btn-m",cell : "cell41", isOccupied : "false" },
                  {id : "btn-n",cell : "cell42", isOccupied : "false" },
                  {id : "btn-o",cell : "cell43", isOccupied : "false" },
                  {id : "btn-p",cell : "cell44", isOccupied : "false" },
                ];
                
                const imageDeck = [
                {    src : "../images/joy-face.png",                                 name : "joy-face"},
                {    src : "../images/sleeping-face.png",                            name : "sleeping-face"},
                {    src : "../images/liking-face.png",                              name : "liking-face"},
                {    src : "../images/smiling-face-with-hearts.png",                 name : "smiling-face-with-hearts"},
                   { src : "../images/face-with-rolling-eyes.png",                   name : "face-with-rolling-eyes"},
                   { src : "../images/shushing-face.png"   ,                         name : "shushing-face"},
                   { src : "../images/smiling-face-with-sunglasses.png",             name : "smiling-face-with-sunglasses"},
                   { src : "../images/money-mouth-face.png" ,                        name : "money-mouth-face" }
                   
                ];
        
                
/* <li class = " container-box image-cell cell11">   

<img  id = "btn-a" src="./images/joy-face.png " name = "joy-face" class = " image border border-3 rounded " alt="..." >      

<div id = "cell11" class="card-over overlay border border-3 rounded">

</div>

</li> */




function getRandomNumber(){
        return (Math.floor(Math.random() * 16));        
}
function   includesNumber(array,searchElemnt){
    for (let key in array)
       if(array[key] === searchElemnt) return true;
    return false;   
}

function generateLI(numIndex1,key){
    let idImage = "", Imagesrc = "", imageName = "", divID = "";
            idImage = cardDeck[numIndex1].id;
            divID =  cardDeck[numIndex1].cell;
            Imagesrc = imageDeck[key].src;
            imageName = imageDeck[key].name;
            cardDeck[numIndex1].isOccupied = true;

            const li = document.createElement("li");
            var setimage = document.createAttribute("class");
            li.classList.add("container-box");
            li.classList.add("image-cell");
            //li.classList.add(divID);
            
            const img = document.createElement("img");
            img.classList.add("image");
            img.classList.add( "border");
            img.classList.add( "border-3");
            img.classList.add( "rounded");
            
         
         //settiing image

           setimage = document.createAttribute("id");
            setimage.value = idImage;
            img.setAttributeNode(setimage);
            setimage = document.createAttribute("name");
            setimage.value = imageName;
            img.setAttributeNode(setimage);
            setimage = document.createAttribute("src");
            setimage.value=Imagesrc;
            img.setAttributeNode(setimage);
            

        //setting div / cover


            const div = document.createElement("div");
            setimage=document.createAttribute("class");
            div.classList.add("card-over");
            div.classList.add("overlay");
            div.classList.add("border");
            div.classList.add("border-3");
            div.classList.add("rounded");
            //div.classList.add(divID);

            setimage=document.createAttribute("id");
            setimage.value = divID;
            div.setAttributeNode(setimage);

            li.appendChild(img);
            li.appendChild(div);
        //     console.log(li);

         return li;
}


function getRamdomNumberArray(){
    let numberArray = [];
    let numIndex1 ;
    let numIndex2 ;
//     console.log("in getRandomArray function");
//     console.log("numberArray length : " + numberArray.length);
 while(numberArray.length < 16){
//       console.log("in while loop");
     
        numIndex1 = getRandomNumber(); 
        let ifIncludes = includesNumber(numberArray,numIndex1);
        // console.log(ifIncludes);
        if(!ifIncludes) numberArray.push(numIndex1);
        //else numIndex1 = getRandomNumber();


        numIndex2 = getRandomNumber();
        ifIncludes = includesNumber(numberArray,numIndex2);
        // console.log(ifIncludes);
        if(!ifIncludes) numberArray.push(numIndex2);
       // else numIndex2 = getRandomNumber();
 }
     return numberArray;
}



function generateBoard(){
//    console.log("in generateBoard");
    const  boardDiv = document.querySelector("div.game-board");
    



    const ul1 = document.createElement("ul");    
    const ul2 = document.createElement("ul");
    const ul3 = document.createElement("ul");
    const ul4 = document.createElement("ul");

    let setClass = document.createAttribute("class");    
    setClass.value = "game-box";
    ul1.setAttributeNode(setClass);
   

    setClass = document.createAttribute("class");    
    setClass.value = "game-box";
    ul2.setAttributeNode(setClass);

    setClass = document.createAttribute("class");    
    setClass.value = "game-box";
    ul3.setAttributeNode(setClass);

    setClass = document.createAttribute("class");    
    setClass.value = "game-box";
    ul4.setAttributeNode(setClass);
   
//     console.log("hello world");
            
        let numberArray = []; 
        numberArray =  getRamdomNumberArray();
        // console.log(numberArray );

       for(let key in imageDeck){
             
            let numIndex1 =  numberArray[key*2];
            let numIndex2 = numberArray[(key*2)+1];
        
        //     console.log("numberIndex1 = " + numIndex1 );
        //     console.log("numberIndex2 = " + numIndex2 );
            
            const li1 = generateLI(numIndex1,key);
            
           
            if(numIndex1 >=0 && numIndex1<4)ul1.appendChild(li1);
            else if(numIndex1 >=4 && numIndex1<8)ul2.appendChild(li1);
            else if(numIndex1 >=8 && numIndex1<12)ul3.appendChild(li1);
            else if(numIndex1 >=12 && numIndex1<16)ul4.appendChild(li1); 


            const li2 = generateLI(numIndex2,key);
            if(numIndex2 >=0 && numIndex2<4)ul1.appendChild(li2);
            else if(numIndex2 >=4 && numIndex2<8)ul2.appendChild(li2);
            else if(numIndex2 >=8 && numIndex2<12)ul3.appendChild(li2);
            else if(numIndex2 >=12 && numIndex2<16)ul4.appendChild(li2); 

           
        }

        boardDiv.appendChild(ul1);
        boardDiv.appendChild(ul2);
        boardDiv.appendChild(ul3);  
        boardDiv.appendChild(ul4);     
       
      
}


function fetchCover(cardID){
        // console.log("in fetchCover");
        for(let key in cardDeck)
         if(cardDeck[key].id === cardID) return cardDeck[key].cell;
}
function addStar(){
        playStar();
        const ul = document.querySelector("ul.star-box");
        
        const li = document.createElement("li");
        const img = document.createElement("img");
        img.src = "../images/starNew.png ";
        
        li.appendChild(img);
        ul.appendChild(li);
        // console.log(ul);
}
function compareCard(openCardID,newCardId){
        let name1 = document.getElementById(openCardID).name;
        let name2 = document.getElementById(newCardID).name;
        // console.log(" open card id is " + name1);
        // console.log(" new card id is " + name2);
        
        if(name1 === name2) { points += 1;addStar(); isOpenFlag = false; console.log(`points : ${points}`);}
        else {  
                cardEnabled = false;
                setTimeout(function(){closeCard(openCardID); closeCard(newCardId); isOpenFlag  = false; cardEnabled = true;},2000);
               
        }
        
}
function closeCard(cardID){        
        
        // console.log(" inside closecard" + cardID);        
 
        onclick = document.getElementById(fetchCover(cardID)).style.zIndex = 1;      


}
function resetALL(){
        points = 0;
        const ul = document.querySelector("ul.star-box");
        ul.innerHTML = "";
        const board = document.querySelector(".game-board").innerHTML = "";
        isOpenFlag = false,cardEnabled = true;
      
        generateBoard();
        let congrats = document.getElementById("point").innerText = "Points";
        
               
        
}
function playStar(){
        var x = document.getElementById("myAudio");
        x.play();
        if (points == 8){
                let congrats = document.getElementById("point").innerText = "Congratulations";
        }
}




window.addEventListener("load",generateBoard);
const board = document.querySelector(".game-board");
board.addEventListener("click",cardEvent); 
    

function cardEvent(event){
 
         let cardID = event.target.id;

//  console.log(cardID);
if(cardID === "cell11"){

        if(cardEnabled){
               $("#cell11").css("z-index", "-1"); 
                if(isOpenFlag === false){  
                                           isOpenFlag = true;
                                           openCardID = "btn-a"; 
                                        } 
                else{ newCardID = "btn-a";
                // console.log("newCard = " + newCardID);
                      compareCard(openCardID,newCardID);
                        }     
                } 
        }                          


if(cardID === "cell12"){

        if(cardEnabled){
               $("#cell12").css("z-index", "-1"); 
                if(isOpenFlag === false){  
                                           isOpenFlag = true;
                                           openCardID = "btn-b"; 
                                        } 
                else{ newCardID = "btn-b";
                // console.log("newCard = " + newCardID);
                      compareCard(openCardID,newCardID);
                        }     
                }                           

        }
 if(cardID === "cell13"){


        if(cardEnabled){
               $("#cell13").css("z-index", "-1"); 
                if(isOpenFlag === false){  
                                           isOpenFlag = true;
                                           openCardID = "btn-c"; 
                                        } 
                else{ newCardID = "btn-c";
                // console.log("newCard = " + newCardID);
                      compareCard(openCardID,newCardID);
                        }     
                }                           

        }


if(cardID === "cell14"){

        if(cardEnabled){
               $("#cell14").css("z-index", "-1"); 
                if(isOpenFlag === false){  
                                           isOpenFlag = true;
                                           openCardID = "btn-d"; 
                                        } 
                else{ newCardID = "btn-d";
                // console.log("newCard = " + newCardID);
                      compareCard(openCardID,newCardID);
                        }     
                }                           

        }


if(cardID === "cell21"){
       
               
                        if(cardEnabled){
                               $("#cell21").css("z-index", "-1"); 
                                if(isOpenFlag === false){  
                                                           isOpenFlag = true;
                                                           openCardID = "btn-e"; 
                                                        } 
                                else{ newCardID = "btn-e";
                                // console.log("newCard = " + newCardID);
                                      compareCard(openCardID,newCardID);
                                        }     
                                }                           
             
                        }


 if(cardID === "cell22"){    
                

                        if(cardEnabled){
                               $("#cell22").css("z-index", "-1"); 
                                if(isOpenFlag === false){  
                                                           isOpenFlag = true;
                                                           openCardID = "btn-f"; 
                                                        } 
                                else{ newCardID = "btn-f";
                                // console.log("newCard = " + newCardID);
                                      compareCard(openCardID,newCardID);
                                        }     
              
                        }
                }

if(cardID === "cell23"){       
               

                        if(cardEnabled){
                               $("#cell23").css("z-index", "-1"); 
                                if(isOpenFlag === false){  
                                                           isOpenFlag = true;
                                                           openCardID = "btn-g"; 
                                                        } 
                                else{ newCardID = "btn-g";
                                // console.log("newCard = " + newCardID);
                                      compareCard(openCardID,newCardID);
                                        }     
                                }                           
              
                        }

if(cardID === "cell24"){
       
              

                        if(cardEnabled){
                               $("#cell24").css("z-index", "-1"); 
                                if(isOpenFlag === false){  
                                                           isOpenFlag = true;
                                                           openCardID = "btn-h"; 
                                                        } 
                                else{ newCardID = "btn-h";
                                // console.log("newCard = " + newCardID);
                                      compareCard(openCardID,newCardID);
                                        }     
                                }                           
              
                        }


if(cardID === "cell31"){
              
                        if(cardEnabled){
                               $("#cell31").css("z-index", "-1"); 
                                if(isOpenFlag === false){  
                                                           isOpenFlag = true;
                                                           openCardID = "btn-i"; 
                                                        } 
                                else{ newCardID = "btn-i";
                                // console.log("newCard = " + newCardID);
                                      compareCard(openCardID,newCardID);
                                        }     
                                }                           
               
                        }


if(cardID === "cell32"){
              

                        if(cardEnabled){
                               $("#cell32").css("z-index", "-1"); 
                                if(isOpenFlag === false){  
                                                           isOpenFlag = true;
                                                           openCardID = "btn-j"; 
                                                        } 
                                else{ newCardID = "btn-j";
                                // console.log("newCard = " + newCardID);
                                      compareCard(openCardID,newCardID);
                                        }     
                                }                           
                
                        }


if(cardID === "cell33"){    
                

                        if(cardEnabled){
                               $("#cell33").css("z-index", "-1"); 
                                if(isOpenFlag === false){  
                                                           isOpenFlag = true;
                                                           openCardID = "btn-k"; 
                                                        } 
                                else{ newCardID = "btn-k";
                                // console.log("newCard = " + newCardID);
                                      compareCard(openCardID,newCardID);
                                        }     
                                }                           
               
                        }


if(cardID === "cell34"){
                

                        if(cardEnabled){
                               $("#cell34").css("z-index", "-1"); 
                                if(isOpenFlag === false){  
                                                           isOpenFlag = true;
                                                           openCardID = "btn-l"; 
                                                        } 
                                else{ newCardID = "btn-l";
                                // console.log("newCard = " + newCardID);
                                      compareCard(openCardID,newCardID);
                                        }     
                                }                           
               
                        }


if(cardID === "cell41"){
               

                        if(cardEnabled){
                               $("#cell41").css("z-index", "-1"); 
                                if(isOpenFlag === false){  
                                                           isOpenFlag = true;
                                                           openCardID = "btn-m"; 
                                                        } 
                                else{ newCardID = "btn-m";
                                // console.log("newCard = " + newCardID);
                                      compareCard(openCardID,newCardID);
                                        }     
                                }                           
               
                        }

 if(cardID === "cell42"){
               
                        if(cardEnabled){
                               $("#cell42").css("z-index", "-1"); 
                                if(isOpenFlag === false){  
                                                           isOpenFlag = true;
                                                           openCardID = "btn-n"; 
                                                        } 
                                else{ newCardID = "btn-n";
                                // console.log("newCard = " + newCardID);
                                      compareCard(openCardID,newCardID);
                                        }     
                                }                           
            
}

if(cardID === "cell43"){       
                
                        if(cardEnabled){
                               $("#cell43").css("z-index", "-1"); 
                                if(isOpenFlag === false){  
                                                           isOpenFlag = true;
                                                           openCardID = "btn-o"; 
                                                        } 
                                else{ newCardID = "btn-o";
                                // console.log("newCard = " + newCardID);
                                      compareCard(openCardID,newCardID);
                                        }     
                                }                           
               
                        }

 if(cardID === "cell44"){
              

                        if(cardEnabled){
                               $("#cell44").css("z-index", "-1"); 
                                if(isOpenFlag === false){  
                                                           isOpenFlag = true;
                                                           openCardID = "btn-p"; 
                                                        } 
                                else{ newCardID = "btn-p";
                                // console.log("newCard = " + newCardID);
                                      compareCard(openCardID,newCardID);
                                        }     
                                }                           
           


                        }


 }//closing  function


const button= document.querySelector(".reset");
button.addEventListener("click",() => {
        resetALL();
});
