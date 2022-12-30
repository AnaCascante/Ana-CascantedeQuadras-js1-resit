const url ="https://api.noroff.dev/api/v1/jokes"; 

const resultContainer = document.querySelector (".jokes")



async function getJokes (){

    try{
    const response = await fetch (url);
        const results = await response.json();
        console.log (results);
     
        resultContainer.innerHTML="";
        for (let i=0; i<results.length; i++){
            resultContainer.innerHTML +=
            '<div class="jokes">${result[i].type} +" " + ${result[i].setup}</div>'
        }
        


    }catch (error){
        console.log (error);
        resultContainer.innerHTML= message ("Something went wrong!")
    }

}

getJokes ();




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
    