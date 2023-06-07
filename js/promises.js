var promisesAccessToken = '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'
var username = 'Geniece-Tims'

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

