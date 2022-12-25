let picturs=[
    {   
        name:"dice6",
        Ima:"pic.jpg/dice6.jpg",
        id: 0
     },
     {
        name:"dice4",
        Ima:"pic.jpg/dice4.jpg",
        id: 1
     },
     {
        name:"dice1",
        Ima:"pic.jpg/dice1.jpg",
        id: 2
     },
     {
      name:"dice5",
      Ima:"pic.jpg/dice5.jpg",
      id: 2

   }

]

let Head=document.querySelector("#head")
let OBject=document.querySelector("#objects");



let Random=Math.floor(Math.random()*picturs.length)
collectedDice_name=[];
collected_head=[]
Dice_id=[];

let Sort=picturs.sort(()=>{
   return 0.5 -Math.random()
})


 Head_img= ()=>{
      let Imag=document.createElement("img");
      Imag.setAttribute("src",picturs[Random].Ima)
      Imag.setAttribute("id",picturs[Random].id);
     Imag.setAttribute("class",picturs[Random].name);
     let Name=Imag.getAttribute("class")
     collected_head.push(Name)
     //  clicked_taget.push(Head_pic)
      Head.appendChild(Imag);
   }
 Head_img()
    function body(){
      for(let i=0;i<3;i++){
         let Pictures=document.createElement("img");
         Pictures.setAttribute("src","pic.jpg/Banner.jpg")
         Piclctures.setAttribute("data-id",i)
         OBject.appendChild(Pictures)
         Pictures.addEventListener("click", checkAction)
      }
    }
    body()
   
// for timer
/*let seconds=0;
let minutes=0;
let hours=0;

function timer(){
   seconds++
   if(seconds/60===1){
      seconds=0;
      minutes++;
      if(minutes/60===1){
         minutes=0;
         hours++
   }
      }
 

   let Time=document.querySelector("#time");
   Time.innerHTML= hours + ":" + minutes + ":" + seconds;
}*/
  
// window.setInterval(timer,100)
function checkAction(){
   
   let pictur_id=this.getAttribute("data-id")
   this.setAttribute("src",picturs[pictur_id].Ima)
   this.setAttribute("class",picturs[pictur_id].name)
   let dice_name=this.getAttribute("class")
   let pa=this.parentNode;
   collectedDice_name.push(dice_name)
   Dice_id.push(pictur_id)
   console.log(collected_head)
   console.log(collectedDice_name)
   console.log(Dice_id)
   if(collectedDice_name.length==1 && collected_head.length==1){
      setTimeout(compaireAction,400)
   }
}
function compaireAction(){
   let ima=document.querySelectorAll("#objects img")
   console.log(ima)
   if(collectedDice_name[0]===collected_head[0]){
      setTimeout(Head_img,600)
   }else{
      ima[Dice_id[0]].setAttribute("src","pic.jpg/Banner.jpg")
   }
   collectedDice_name=[]
   Dice_id=[]
}


