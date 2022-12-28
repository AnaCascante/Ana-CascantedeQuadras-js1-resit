
const url ="https://api.noroff.dev/api/v1/jokes"; 


/*
const url ="https://noroffcors.onrender.com/noroff-api-docs.netlify.app/basic-endpoints/jokes#get-apiv1jokes";*/


async function getJokes(){
    const response = await fetch (url);
    const results = response.json();
  
}
getJokes();