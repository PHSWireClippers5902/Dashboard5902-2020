
function myFunction() {
     theme = document.getElementById("theme").value;
     timer = document.getElementById("timer");
     body = document.getElementById("body");
     dropDown = document.getElementById("theme");
     dropDown2= document.getElementById("auto-select")
     button1 = document.getElementById("change-theme");
     button2 = document.getElementById("connect-button")
     if (theme == "dark"){
         timer.style.color = '#ffffff';
         body.style.color = '#ffffff';
         dropDown.style.color = '#ffffff';
         dropDown2.style.color = '#ffffff';
         button1.style.color = '#ffffff';
         button2.style.color = '#ffffff';
     } else if (theme == "red"){
         timer.style.color = '#ea5042'; 
         body.style.color = '#ea5042';
         dropDown.style.color = '#ea5042';
         dropDown2.style.color = '#ea5042';
         button1.style.color = '#ea5042';
         button2.style.color = '#ea5042';
     } else if (theme == "blue"){
         timer.style.color = '#52b5e9';
         body.style.color = '#52b5e9';
         dropDown.style.color = '#52b5e9';
         dropDown2.style.color = '#52b5e9';
         button1.style.color = '#52b5e9';
         button2.style.color = '#52b5e9';
     } 
     document.getElementById("theme-output").innerHTML = text;
}
      