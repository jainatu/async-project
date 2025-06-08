 let searchbtn = document.querySelector("#searchButton");
  let userinput = document.querySelector("#usernameInput");
  let card = document.querySelector(".card");
  function fetchuserprofile(username)
{
return fetch(`https://api.github.com/users/${username}`) .then((raw) => {
    if(!raw.ok) throw new Error("user not found");
    return raw.json();
});
}



function getuserrepos(username){
    return fetch(`https://api.github.com/users/${username}/repos?sort=updated`).then((raw)=>{
        if(!raw.ok){ throw new Error("failed to fetch repos");

        }
        return raw.json();
    });
}
function decoratedata(details){

      
       let data = `<div class="flex items-start gap-6 mt-4">
        <img
          src="${details.avatar_url}"
          alt="avatar"
          class="w-24 h-24 rounded-full border-2 border-gray-700"
        />
        <div>
          <h2 class="text-2xl font-bold">${details.name}</h2>
          <p class="text-sm text-gray-400">${details.login}</p>
          <p class="mt-2 text-gray-300">
            A friendly open-source mascot exploring the world of GitHub.
          </p>
          <div class="mt-4 flex flex-wrap gap-6 text-sm text-gray-300">
            <span>👥 Followers: <strong>5,000</strong></span>
            <span>👣 Following: <strong>9</strong></span>
            <span>📁 Repos: <strong>8</strong></span>
          </div>
        </div>
      </div>
    </div>`;
 card.innerHTML = data;
      

}



getuserrepos("async").then(function(data){
    console.log(data);
})

 
searchbtn.addEventListener("click", function(){
   let username =  userinput.value.trim();
   if(username.length>0){
    fetchuserprofile(username).then(function(data){
    decoratedata(data);
})

   }
   else{
    alert(" please enter a valid input ");
   }
    

})