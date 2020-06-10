console.log('js is working')
 document.getElementById('button').addEventListener('click', loadText);


 //one.addEventListener('click', getData);
function loadText(){
var data=null;    
    var xhr= new XMLHttpRequest();


var url="https://developers.zomato.com/api/v2.1/categories";




xhr.open('GET',url,true);
xhr.setRequestHeader("user-key", " ec514fe62d4dcc68b85d8d6269c3b2c4");

    

xhr.onload = function(){
    if(this.status== 200){
        console.log(this.responseText);
        var output = JSON.parse(this.responseText);
        console.log(output);
      
    // document.getElementById('main').innerHTML = JSON.stringify(output.categories[0].categories.name);
    var b1=document.createElement("button")
    b1.setAttribute("type","button")
    b1.setAttribute("id","b1")
    var b2=document.createElement("button")
    b2.setAttribute("id","b2")
    var b2=document.createElement("button")
    b3.setAttribute("id","b3")
    var link1=document.createElement("a")
    link1.setAttribute("id","a1")
    link1.setAttribute("href","delivery.html")
    var link2=document.createElement("a")
    link2.setAttribute("id","a2")
    link2.setAttribute("href","dine.html")
    var link3=document.createElement("a")
    link3.setAttribute("id","a3")
    link3.setAttribute("href","breakfast.html")
    document.getElementById("a1").textContent="Delivery"
    document.getElementById("a2").textContent="Dine_out"
    document.getElementById("a3").textContent="Breakfast"
    document.getElementById("b1").appendChild(link1)
    document.getElementById("b2").appendChild(link2)
    document.getElementById("b3").appendChild(link3)
    
    document.getElementById("p1").appendChild(b1)
    document.getElementById("p2").appendChild(b2)
    document.getElementById("p3").appendChild(b3)

    }
}

xhr.send(data);
}
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}
 
  
  
  
  
  