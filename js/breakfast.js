console.log('js is working')
 document.getElementById('button').addEventListener('click', loadText);


 //one.addEventListener('click', getData);
function loadText(){
var data=null;    
    var xhr= new XMLHttpRequest();


var url="https://developers.zomato.com/api/v2.1/search?category=8";




xhr.open('GET',url,true);
xhr.setRequestHeader("user-key", " ec514fe62d4dcc68b85d8d6269c3b2c4");

    

xhr.onload = function(){
    if(this.status== 200){
        console.log(this.responseText);
        var output = JSON.parse(this.responseText);
        console.log(output);
        var out = JSON.stringify(output)
        console.log(out);
       // var ost =JSON.Stringify(output.restaurants[0].restaurant.events_url);
        //console.log(ost)
        
           var anchor1=document.createElement("a");
           anchor1.setAttribute("id","anchor1");
           anchor1.setAttribute("href",output.restaurants[1].restaurant.url);
           var anchor2=document.createElement("a");
           anchor2.setAttribute("id","anchor2");
           anchor2.setAttribute("href",output.restaurants[2].restaurant.url);
           var anchor3=document.createElement("a");
           anchor3.setAttribute("id","anchor3");
           anchor3.setAttribute("href",output.restaurants[5].restaurant.url);
          //var restaurant=document.createElement("div");
          //restaurant.setAttribute("id","restaurant");
          //console.log(restaurant);
         // anchor.appendChild(restaurant);
          //console.log(main);
         // document.getElementById("li1").appendChild(anchor);
          document.getElementById('li1').innerHTML = JSON.stringify(output.restaurants[1].restaurant.name);
          document.getElementById('li2').innerHTML = JSON.stringify(output.restaurants[2].restaurant.name);
          document.getElementById('li3').innerHTML = JSON.stringify(output.restaurants[5].restaurant.name);
          var img1=document.createElement("img");
         img1.setAttribute("id","1");
         img1.setAttribute("width","500")
         img1.setAttribute( "height","300")
         
          img1.setAttribute("src","https://b.zmtcdn.com/data/pictures/2/18483372/3603a0096a81d06aeeef18d10db9e235.jpg?output-format=webp");
          var img2=document.createElement("img");
         img2.setAttribute("id","2");
        img2.setAttribute("width","500")
         img2.setAttribute( "height","300")
         
          img2.setAttribute("src","https://b.zmtcdn.com/data/reviews_photos/411/363f501520d63e0bb4e2a12d85db1411_1591090548.jpeg?output-format=webp")

          var img3=document.createElement("img");
         img3.setAttribute("id","3");
        img3.setAttribute("width","500")
         img3.setAttribute( "height","300")
         
         img3.setAttribute("src","https://b.zmtcdn.com/data/pictures/4/18484464/7d69bdabfad60b09e877394cf31155c0.jpg?output-format=webp")
          document.getElementById("first").appendChild(img1);
          document.getElementById("second").appendChild(img2);
          document.getElementById("third").appendChild(img3);
         document.getElementById("first").appendChild(anchor1);
         document.getElementById("anchor1").textContent= "check it out";
         document.getElementById("second").appendChild(anchor2);
         document.getElementById("anchor2").textContent= "check it out";
         document.getElementById("third").appendChild(anchor3);
         document.getElementById("anchor3").textContent= "check it out";
         
         
          
          

        
 
    
    }
}

xhr.send(data);
}
