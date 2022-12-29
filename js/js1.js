
const url ="https://api.noroff.dev/api/v1/jokes"; 

const jokesContainer = document.querySelector (".jokes")

/*
const url ="https://noroffcors.onrender.com/noroff-api-docs.netlify.app/basic-endpoints/jokes#get-apiv1jokes";*/


async function getJokes(){
    try{
        const response = await fetch (url);
        const results = await response.json();
        const jokes = results;
        console.log (jokes);

        array.forEach(joke => {
            resultContainer.innerHTML+= '<div class="jokes">
                                        <h1>${joke.type}</h1>
                                        <p> ${joke.setup}></p>
                                        </div>'
            
        });
    
      
    } catch (error){
        console.log (error); 
        resultContainer.innerHTML= message ("could't find the jokes")
    }
   

    }

      /*for (let i=0; i < jokes.length; i++){
            console.log (jokes[i].text);
            jokesContainer.innerHTML +='<div class="jokes">${jokes[i].text}</div>';
        }*/
getJokes();