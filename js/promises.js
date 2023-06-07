var promisesAccessToken = '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'




















function wait(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, num)
    })
    wait(1000).then(() => console.log('You\'ll see this after 1 second'));
    wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
}


