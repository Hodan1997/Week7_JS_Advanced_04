
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

axios.get("https://api.github.com/users/duraanali")

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

*/


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

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

function createCard(img, location, profile, followers, following, bio){
  const mainDiv = document.createElement('div')
  const image = document.createElement('img')
  const secondDiv = document.createElement('div')
  const names = document.createElement('h3')
  const username = document.createElement('p')
  const locations = document.createElement('p')
  const profiles = document.createElement('p')
  const follower = document.createElement('p')
  const followings = document.createElement('p')
  const bios = document.createElement('p')


mainDiv.classList.add('card')
secondDiv.classList.add('card-info')
names.classList.add('name')
username.classList.add('username')

image.src= img;
locations.textContent= lacation;
profiles. textContent= profile;
follower.textContent = followers;
followings.textContent= following;
bios.textContent= bio;
}
 
const main = document.querySelector(".cards")

axios.get("https://api.github.com/users/Hodan1997")
.then(response => {
  response.data.forEach(document =>{
    const mainDiv = document.createElement('div')
  const image = document.createElement('img')
  const secondDiv = document.createElement('div')
  const names = document.createElement('h3')
  const username = document.createElement('p')
  const locations = document.createElement('p')
  const profiles = document.createElement('p')
  const follower = document.createElement('p')
  const followings = document.createElement('p')
  const bios = document.createElement('p')

  main.appendChild(createCard(img, location, profile, followers, following, bio))

  })
})

/*
  STEP 4: Pass the data received from Github into your function, and append the returned markup to the DOM as a child of .cards
*/


/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers, manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each user, and adding that card to the DOM.
*/

const followersArray = [];

