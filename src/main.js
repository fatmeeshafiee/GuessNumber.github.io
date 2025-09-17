
      let img=document.getElementsByClassName("img-items");  //arrys
      for(let i=0;i<img.length;i++)
      {
        img[i].addEventListener('click',function(){
          hiddenSelect(i)
          cpuChose_random()
          logicGame(i,randomNumber)
          
        })
      }


    // refresh function
      const refresh=()=>{for(let i=0;i<img.length;i++){
        img[i].classList.remove("hidden")
        let cpuChoose=document.getElementsByClassName("img-cpu-choosed");
        cpuChoose[i].classList.add("hidden")
        }}


    // use refresh for button
      let button1= document.getElementsByClassName("btn-grad")
      button1[0].addEventListener('click',refresh)

    //use refresh for R keydown
      document.addEventListener('keydown',function(e){
        console.log(e);
        if(e.key=='r'){
            refresh();
        }
      })


    // hidden rest
     function hiddenSelect(i){
      for (let j = 0; j < img.length; j++) {
          if (j !== i) {
          img[j].classList.add("hidden");   // بقیه رو مخفی کن
          }}
     }

    //  for cou chose random
     let randomNumber=parseInt(Math.random()*3);
    
     console.log(randomNumber);
     function cpuChose_random(){
          let cpuChoose=document.getElementsByClassName("img-cpu-choosed");
          cpuChoose[randomNumber].classList.toggle("hidden");
     }
    
    //  logic for game
    function logicGame(user,cpu){
      if(user==randomNumber){
            console.log("win win");
          }
          else if(user==0 &&cpu==2||user==1 &&cpu==0||user==2 &&cpu==1){
            console.log("cpu win");
            (document.getElementById("cpu-point").innerHTML)=Number(document.getElementById("cpu-point").innerHTML)+1
          }
          else if(user==0 &&cpu==1||user==1 &&cpu==2||user==2 &&cpu==0){
            console.log("you win");
            (document.getElementById("user-point").innerHTML)=Number(document.getElementById("user-point").innerHTML)+1

          }
    }
      
   