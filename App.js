 function login(){
         var unname=document.getElementById("userid").value;
         var pass=document.getElementById("password").value;
         if(unname =="biswajitbehura12"&& pass =="babul@567")
         {
             location.assign("file:///C:/Users/User/Desktop/login%20page/babul.html");
         }else{
             window.alert("login failed");
         }
     }
