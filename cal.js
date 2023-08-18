// 

function mee()
{
    
    document.body.style.backgroundColor = "pink";
    //------------------------ alert and background color--------
    var list=document.getElementById("head").classList;
    list.add("my");
    var list=document.getElementById("head1").classList;
    list.add("my1");
    //-------------------------- create the button-------------------
    var lie=document.createElement("button");
    var lie1=document.createElement("button");
    var lie2=document.createElement("button");
    var lie3=document.createElement("button");
    var lie4=document.createElement("button");
    //---------------- create the elements--------------------
    lie.classList.add("sum");
    lie.innerText="%";

    lie.style.marginTop="-430px";
    lie.style.marginLeft="800px";
    lie1.style.marginLeft="800px";
    lie2.style.marginLeft="800px";
    lie3.style.marginLeft="800px";
    lie4.style.marginLeft="800px";
//------------------ element the style----------------

    lie1.innerText="CE";
    lie2.innerText=".";
    lie3.innerText="x";
    lie4.innerText="00";
    lie1.classList.add("sum");
    lie2.classList.add("sum");
    lie3.classList.add("sum");
    lie4.classList.add("sum");
    //---------------- create the element and class------
     document.body.appendChild(lie);
    document.body.appendChild(lie1);
    document.body.appendChild(lie2);
    document.body.appendChild(lie3);
    document.body.appendChild(lie4);
    //-------------- add the body-----------------------

}

function call()
{
    document.getElementById("head1").value="";
}
  
function  show(input)
{
   document.getElementById("head1").value+=input;
}
function see()
{
    let answer=eval(document.getElementById("head1").value);
    document.getElementById("head1").value=answer;
  
}



 