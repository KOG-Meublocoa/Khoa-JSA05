var buttonlogin = document.getElementById('sumbitbutton');
 
document.addEventListener('DOMContentLoaded', function() {

    var name = document.getElementById("username")

    var sign = document.getElementById("password")

    if (name == "Khoa" && sign =="0711"){
        localStorage.setItem('name', usename)
        var greetingElement = document.createElement('p');
        greetingElement.textContent = 'Xin chào,' + username+ '!' ;
        document.body.appendChild(greetingElement)
    }
    else{
        alert('Sai rồi')
    }

    var username = localStorage.getItem('username');
    if(username){
        var greetingElement = document.createElement('p')
        greetingElement.textContent = 'Xin chào,'+username+ '!';
        document.body.appendChild(greetingElement); 
    }
})