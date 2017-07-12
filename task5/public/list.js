loadXMLDoc();
function loadXMLDoc()
{
    var xmlhttp;
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            var obj=JSON.parse(xmlhttp.responseText)

            var imgSrc=obj.subjects[0].images.large;
            var img = document.createElement('img');
            img.src=imgSrc;
            document.getElementById("pic").appendChild(img);
            document.getElementById("tit").innerHTML=obj.subjects[0].title;
            document.getElementById("points").innerHTML=obj.subjects[0].rating.average;



            var imgSrc1=obj.subjects[1].images.large;
            var img = document.createElement('img');
            img.src=imgSrc1;
            document.getElementById("pic1").appendChild(img);
            document.getElementById("tit1").innerHTML=obj.subjects[1].title;
            document.getElementById("points1").innerHTML=obj.subjects[1].rating.average;

            var imgSrc2=obj.subjects[2].images.large;
            var img = document.createElement('img');
            img.src=imgSrc2;
            document.getElementById("pic2").appendChild(img);
            document.getElementById("tit2").innerHTML=obj.subjects[2].title;
            document.getElementById("points2").innerHTML=obj.subjects[2].rating.average;

            var imgSrc3=obj.subjects[3].images.large;
            var img = document.createElement('img');
            img.src=imgSrc3;
            document.getElementById("pic3").appendChild(img);
            document.getElementById("tit3").innerHTML=obj.subjects[3].title;
            document.getElementById("points3").innerHTML=obj.subjects[3].rating.average;

            var imgSrc4=obj.subjects[4].images.large;
            var img = document.createElement('img');
            img.src=imgSrc4;
            document.getElementById("pic4").appendChild(img);
            document.getElementById("tit4").innerHTML=obj.subjects[4].title;
            document.getElementById("points4").innerHTML=obj.subjects[4].rating.average;

            var imgSrc5=obj.subjects[5].images.large;
            var img = document.createElement('img');
            img.src=imgSrc5;
            document.getElementById("pic5").appendChild(img);
            document.getElementById("tit5").innerHTML=obj.subjects[5].title;
            document.getElementById("points5").innerHTML=obj.subjects[5].rating.average;

        }
    }
    xmlhttp.open("GET","dianying.txt",true);
    xmlhttp.send();


    var express = require('express');
    var app = express();

}
