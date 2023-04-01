//let counter1=0;
function obtenerValores(){

    let formNom = document.getElementById("nombre").value;
    let formEmail = document.getElementById("email").value;
    let formProblema = document.getElementById("problema").value;
    let formCheck = document.getElementById("exampleCheck1").value;
    console.log(formNom, formEmail, formProblema, formCheck);
    
    document.getElementById("info").innerHTML=formNom;
    document.getElementById("info2").innerHTML=formEmail;
    document.getElementById("info3").innerHTML=formProblema;

    /*counter1++
    document.getElementById("btnContador2");*/
    
}

function randomNews(){
    let rndom = Math.floor(Math.random() * 10);
    //let counter=0;
    //counter=counter+1
    

fetch('https://saurav.tech/NewsAPI/top-headlines/category/technology/in.json')
	.then(response => response.json())
	.then(data => {console.log(data); document.getElementById("technews").innerText=data.articles[rndom].description; 
/*document.getElementById("technews2").innerText=  data.articles[0].url;*/; /*counter=counter+1*/; /*document.getElementById("contador").innerHTML=counter*/})
	.catch(err => console.error(err));

}

let counter=0;
let btnCont = document.getElementById("btnContador");

btnCont.addEventListener('click', function conteo (){
    counter++
    console.log(counter);
    document.getElementById("contador").innerHTML=counter
})
  
    


