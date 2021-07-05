
let footstep= document.getElementById('footstep');
let electronic=document.getElementById('electronic');
let rightlight=document.getElementById('light');


window.addEventListener('load', (event) => {
  console.log('page is fully loaded');
   window.scrollTo(100,2000);
  // Element.scrollTop=1000;
});

window.onscroll= function(){

  scrollingControl(200,100,2000,rain);
  scrollingControl(0,500,500,sound1);
  scrollingControl(200,1000,1000,sound2);
  scrollingControl(100,1200,1000,sound3);
  //scrollingControl(500,200,300,electronic);
  scrollingControl(300,100,400,noise1);
  scrollingControl(300,300,300,noise2);
  scrollingControl(600,0,500,noise3);
  scrollingControl(100,1000,500,ground2);
  scrollingControl(0,1000,400,ground1);
  console.log("scrolling");
  //play=footstep.play();
  //setTimeout(play,1000);

}


let x,y,d,m;
function scrollingControl(x,y,d,m){
  let scrollX=document.documentElement.scrollLeft;
  let scrollY=document.documentElement.scrollTop;
  console.log(scrollX);
  console.log(scrollY);

  let targetX=x;
  let targetY= y;

  let distance= Math.hypot(targetX- scrollX, targetY-scrollY)
  console.log("distance:"+distance);
   m.play()
   m.volume=0
//  music.play();
//  music.volume=0;

  if (distance<d){
    m.volume= 1-distance/d;

  }
  if(scrollY>900){
    let width=document.getElementById('image');
    let w=250-scrollY/10;
    console.log('w:'+w+'%');
    width.style.width=w+'%';
    footstep.play();
  }


}
