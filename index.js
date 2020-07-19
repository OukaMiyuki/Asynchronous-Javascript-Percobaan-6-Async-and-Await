console.log('Before');

// const p = getUser(1);
// p.then(user => console.log(user));

//Promise-based approach
// getUser(1)
//     .then(user => getRepositories(user.gitHubUsername)) //check Asynchronous_2
//     .then(daftarRepo => getCommit(daftarRepo[0])) //parsing getRepositories result function to get commit check Asynchronous_2 or 3
//     .then(commits => console.log('Daftar Commits : ', commits)) //result resolv from calling getCommit on line 8
//     .catch(err => console.log('Error : ', err.message)); //if there's any error occur during Asynchronous process, this error function will be called

//Async and Await approach
async function displayCommits(){
    try{
        const daftarUser = await getUser(1);
        const daftarRepo = await getRepositories(daftarUser.gitHubUsername);
        const daftarCommits = await getCommit(daftarRepo[0]);
        console.log(daftarCommits);
    } catch(err){
        console.log('There\'s an error', err.message);
    }
}
//notice in here, you create an asnychronous that looks synchronous, so when the code is executed
//the javascript machine will conver the code into become like from line 7 to line 11, try to remove the
//comments of code line 7 - 11 then comment the line 14 - 23 to check the result

displayCommits(); //calling the asynchronous function

console.log('After');
function getUser(id){ //no need to use callback parameter
    return new Promise( (resolve, reject) => {
        setTimeout(()=>{
            console.log("Reading user from database...");
            resolve({ id: id, gitHubUsername: 'Testing' });
        }, 2000); //2 seconds
    });
}

function getRepositories(username){
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            console.log('The username ', username);
            resolve(['Repo1', 'Repo2', 'repo3']);
            //reject(new Error('Could not get the repository....'));
        }, 2000);
    });
}

function getCommit(repositori){
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            console.log('Commits = ', repositori);
            resolve(['Commit 1', 'Commit 2']);
        }, 2000);
    });
}

//That's it, the next will be practicing more with promises object in javascript