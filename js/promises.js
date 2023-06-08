var githubKey = promisesKey;
var username = 'Geniece-Tims';



function getLastCommitDate() {
    const url = `https://api.github.com/users/${username}/repos`;

    return fetch(url)
        .then(response => response.json())
        .then(repos => {
            if (repos.length === 0) {
            throw new Error('User has no repositories.');
            }

            const latestRepo = repos.reduce((prev, current) => {
                if (!prev || new Date(current.updated_at) > new Date(prev.updated_at)) {
                    return current;
            }
            return prev;
        });

        const lastCommitDate = latestRepo.updated_at;

        return lastCommitDate;
    });
}

getLastCommitDate('Geniece-Tims')
    .then(lastCommitDate => {
        console.log('Last commit date:', lastCommitDate);
    })

    .catch(error => {
        console.error('Error:', error);
    })





// Another way of doing this:
//
// fetch('https://api.github.com/users/davidandstephens/events/public', {headers: {'Authorization': promisesKey}})
// •then (resp => resp.json ( ) ) Promise<any>
// .then(data => {
//         console. log (data);
//         for (let event of data) {
//             if (event. type === "PushEvent") {
//                 console.log(even.created_at);
//                 return event payload commits [0].url;
//             }
//          }
// })
// .then(url => fetch(url, init: {headers: { Authorization': promisesKey ))
// .then(resp => resp.json())
// .then(data => console.log(new Date (data.commit.author.dte()));








function wait(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, num)
    })
    wait(1000).then(() => console.log('You\'ll see this after 1 second'));
    wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
}
console.log(wait());

