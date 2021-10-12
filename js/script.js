const randomFolks = document.querySelector(".random-peeps"); /* div where users show up */

const numberUser = document.querySelector(".num-users");
numberUser.classList.remove("hide");
const selectUserNumber = document.querySelector("select");


const getData = async function (numUsers){
    const usersRequest = await fetch(`https://randomuser.me/api?results=${numUsers}`);
    const data = await usersRequest.json();
    console.log(data);
    const userResults = data.results;       /* now userResults is an array with objects inside */
    displayUsers(userResults);
};

getData(1);

const displayUsers = function (userResults) {
    randomFolks.innerHTML = "";

    for (const user of userResults) {      /* loop through each object of array, take elements in object */
        const country = user.location.country;
        const name = user.name.first;
        const imageUrl = user.picture.medium;

        const userDiv = document.createElement("div");
                                          /* create div with user details */
        userDiv.innerHTML = `              
            <h3>${name}</h3>
            <p>${country}</p>
            <img src=${imageUrl} alt="User avatar"/>`;

        randomFolks.append(userDiv);     /* show div on html */
    }
        
};

selectUserNumber.addEventListener("change", function(e) {
    const numUsers = e.target.value;
    getData(numUsers);                  /* change number of user show up base on selection */
});