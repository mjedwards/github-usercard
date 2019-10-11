/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ["https://api.github.com/users/tetondan","https://api.github.com/users/dustinmyers","https://api.github.com/users/justsml","https://api.github.com/users/luishrd","https://api.github.com/users/bigknell"];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/
let container = document.querySelector('.cards');
let empty = '#';

followersArray.forEach(el => {
  axios.get(el)
  .then(function (response) {
    // handle success
    console.log(response);
    createCard(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

})
axios.get('https://api.github.com/users/mjedwards')
  .then(function (response) {
    // handle success
    console.log(response);
    createCard(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

function createCard (x) {
  let card = document.createElement("div");
    card.classList.add("card");

  let image = document.createElement("img");
    image.setAttribute("src",  `${x.data.avatar_url}`);

  let cardInfo = document.createElement("div");
    cardInfo.classList.add("card-info");

  let hThree = document.createElement("h3");
    hThree.classList.add("name");
    hThree.textContent = x.data.name;

  let pUser = document.createElement("p");
    pUser.classList.add("username");
    pUser.textContent = x.data.login;

  let pLocale = document.createElement("p");
    // function returnLocation(a) {
    //   if (a.data.location = null) {
    //     return "Over the Rainbow";
    //   } else { return a.data.location}
    // };
    pLocale.textContent = x.data.location;
  let pProfile = document.createElement("p");

  let aLink = document.createElement("a");
    aLink.setAttribute("href", `${x.data.html_url}`);
    aLink.textContent = x.data.html_url;

  let pFollowers = document.createElement("p");
    pFollowers.textContent = `Followers: ${x.data.followers}`;
  let pFollowing = document.createElement("p");
    pFollowing.textContent = `Following: ${x.data.following}`;
  let pBio = document.createElement("p");
    pBio.textContent = `Bio: ${x.data.bio}`

  container.appendChild(card);
    card.appendChild(image);
    card.appendChild(cardInfo);
      cardInfo.appendChild(hThree);
      cardInfo.appendChild(pUser);
      cardInfo.appendChild(pLocale);
      cardInfo.appendChild(pProfile);
        pProfile.appendChild(aLink);
      cardInfo.appendChild(pFollowers);
      cardInfo.appendChild(pFollowing);
      cardInfo.appendChild(pBio);

  return container;
}

createCard();

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/



