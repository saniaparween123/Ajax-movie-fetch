let btn= document.getElementById("btn");
let prgh= document.getElementById("prgh");
let s="" 

btn.onclick=function(){
	let s=document.querySelector('input').value;

 	const xhr= new XMLHttpRequest();
 	xhr.open("GET",`https://www.omdbapi.com/?t=${s}&apikey=3aee82df`, true);5
 	 
 	xhr.onload = function(){
	    s=JSON.parse(xhr.responseText)
		prgh.innerText="Title :- "+s.Title +"\n Year :- " +s.Year + "\n Genre :- "+s.Genre  + "\n Director :- "+s.Director + "\n imdbRating :- "+s.imdbRating +" \n \n \n Thank You....";
 	}
 	
 	xhr.send(); 
}

