const url ="https://api.noroff.dev/api/v1/jokes"; 

const resultContainer = document.querySelector (".JokesContainer")

async function getJokes (url, joketype, setup,punchline)
    const response = await fetch (url);
    const jokes = await response.json();
    resultContainer.innerHTML="";
    result.forEach (function (joke){
        if (joke.type == joketype){
            resultContainer.innerHTML+=
            <a href="index.htm?id=${joke.type}" class ="joketype"></a>
            <div class="setup">${joke.setup}</div>
        }
    });









/* not working!!! 
async function getJokes (){

    const response = await fetch (url);
        const results = await response.json();
        console.log (results);      
}

function displayJokes (jokes) {
    resultContainer.innerHTML="";        
        for (let i=0; i<results.length; i++){
            resultContainer.innerHTML +=
            '<div class="jokestype">${result[i].type} +" " + ${result[i].setup} + ${result[i].punchline}</div>'
}*/






/* this is displaying something!
async function getJokes (){

    try{
    const response = await fetch (url);
        const results = await response.json();
        console.log (results);
     
        resultContainer.innerHTML="";        
        for (let i=0; i<results.length; i++){
            resultContainer.innerHTML +=
            '<div class="jokestype">${result[i].type} +" " + ${result[i].setup} + ${result[i].punchline}</div>'
        }
        


    }catch (error){
        console.log (error);
        resultContainer.innerHTML= message ("Something went wrong!")
    }

}

getJokes ();*/




/*async function makeApiCall(){
    try{
        const response = await fetch (url);
        const results = await response.json();
        const jokes = results;
        console.log (jokes);
        
}*/



/* this is not working!
    for (let i=0;i<jokes.length;i++){
        if (!jokes[i].type){
            continue;
        }
    } catch (error){
        console.log(error)
        jokesContainer.innerHTML = message ("Something went wrong!")
    }*/


/*
const url ="https://noroffcors.onrender.com/noroff-api-docs.netlify.app/basic-endpoints/jokes#get-apiv1jokes";*/


/*async function getJokes(){
    /*try{
        const response = await fetch (url);
        const results = await response.json();
        const jokes = results;
        console.log (jokes);

        array.forEach(joke => {
            resultContainer.innerHTML+= '<div class="jokes">
                                        <h1>${joke.type}</h1>
                                        <p>${joke.setup}></p>
                                        </div>'
            
        }); 
    } catch (error){
        console.log (error); 
        resultContainer.innerHTML= message ("could't find the jokes")
    }
    }*/

     /* for (let i=0; i < jokes.length; i++){
            console.log (jokes[i].text);
            jokesContainer.innerHTML +='<div class="jokes">${jokes[i].text}</div>';
        }

getJokes ();*/

/*async function getJokes (){
    const response =await fetch (url);
    const result = await response.json();
    const jokes = results;
    console.log (jokes);

    result.forEach (function (jokes)){
        resultsContainer.innerHTML += 
        '<div class="jokes>
            <h1>${jokes.type}</h1>
            <p>${jokes.setup}</p>'
    }}*/
