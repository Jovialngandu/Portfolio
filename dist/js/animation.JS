/*mise en place d' un systeme d'overlay*/
const img=document.querySelector(".mynav__profil > img");
const overlay=document.querySelector(".container__overlay");
const exit=document.querySelector('.overlay__exit--hover');

      img.onclick=function()
      {
    overlay.style.display="block";

      }
                 /*fermeture overlay*/

         exit.addEventListener('mousedown',function(){exit.src="dist/images/icons8_cancel_1.svg";},false)

         exit.onclick=function()
         {
            overlay.style.display="none"
            exit.src="dist/images/icons8_cancel.svg";
         }







/*animation sur les projets realises */
const  project__item=document.querySelectorAll(".project__item");
const  subtiitle=document.querySelectorAll(".subtiitle");
const  subtitle__show=document.querySelectorAll(".subtitle__show");
for (   let i=0;i< project__item.length;i++)
{

project__item[i].onmousemove=function()
{
  subtiitle[i].style.visibility="hidden"
  subtitle__show[i].style.margin="-40px"
}
project__item[i].onmouseleave=function()
{
  subtiitle[i].style.visibility="visible"
  subtitle__show[i].style.marginLeft="150%"
  
}
  
}


/*gestion du mode (sombre ou claire) */
status="white";
const state=document.querySelector(".state");
const all=document.querySelector(".container");
const all2=document.querySelectorAll("*");
const plus=document.querySelectorAll("input,textarea")

state.onclick=function()
{ 
  if(status=="white")
  {
    all.style.background="linear-gradient(black,rgb(6, 6, 2),rgb(10,10,10),rgb(8, 4, 4))";
  for (let index = 0;index<plus.length; index++) {
    plus[index].style.borderColor="aliceblue";
    plus[index].style.borderWidth="0.1px";
    
    
  }
  document.querySelector("html").style.backgroundColor="black"
  status="black"
  }
  else
  {
    all.style.background="linear-gradient(rgb(251, 252, 253),rgb(221, 220, 236),rgb(223, 220, 229),rgb(241, 241, 243),rgb(251, 252, 253),rgb(233, 233, 238),rgb(243, 242, 245),rgb(239, 239, 241))";
    for (let index = 0; index <plus.length; index++) {
      plus[index].style.borderColor="black";
   
      
    }
    document.querySelector("html").style.backgroundColor="white"
    status="white"
  }
  
 
}

/*compteur de projects */
const  project__count=200
const  project__countHtml=document.querySelector(".project__count");
const  container__project=document.querySelector(".container__project");

container__project.onmouseenter=function()
{
     count()
   
}

function count( nbre=200)
{
   let add=1
   interval=setInterval(() => {
     project__countHtml.innerHTML=add
     add+=1
 if(add==200 || add >200)
   {
     clearInterval(interval)
     project__countHtml.innerHTML=project__count
   }
   }, 10);
  
  
}
/*Affichzage du menu en veertical */
const menu=document.querySelector('.btn__menu--click')
const my__menu=document.querySelector(".menu")
const  exit__menu=document.querySelector(".exit__menu")
menu.onclick=()=>
{
  my__menu.style.display="block";
 
}
exit__menu.onclick=()=>
{
  my__menu.style.display="none";
}