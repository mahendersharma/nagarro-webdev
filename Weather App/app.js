// const form= document.getElementById('form');

// let data = '';
// const getweather = async()=>{
//     const inputText = document.getElementById('inputText').value;
//     fetch('http://api.openweathermap.org/data/2.5/weather?q='+inputText+'&appid=5ed4e04ae0d775187aa46e1c33a2e237')
//   .then(response => response.json())
//   .then(data => 
//    document.getElementById('setdatahere').innerHTML = '<p style="color: red;">'+data.main.temp+'</p><p style="color: navajowhite; border:1px saddlebrown solid ;">'+data.clouds.all+'</p>');
    
// }



// form.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     console.dir(form.elements[0].value);
//     const inputText = form.elements[0].value;
//     getweather(inputText);
    
// })

var button = document.querySelector('.button');
var InputValue = document.querySelector('.InputValue');
var name = document.querySelector('.name');

var decs = document.querySelector('.decs');
var temp = document.querySelector('.temp');

button.addEventListener('click',function(){
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+InputValue.value+'&appid=5ed4e04ae0d775187aa46e1c33a2e237')
    .then(response => response.json())
    .then(data => {
       var  nameValue = data['name'];
        var decsValue = data['weather'][0]['description'];
        var tempValue = data['main']['temp'];

        name.innerHTML =nameValue; 
        temp.innerHTML =tempValue;
        decs.innerHTML =decsValue;
    } )
    

    .catch(err=>{alert("please select valid city")})
})
