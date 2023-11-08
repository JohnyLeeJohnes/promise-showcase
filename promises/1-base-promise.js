const errorState = false;
const otherErrorState = false;

const stateChangePromise = () => {
    return new Promise((resolve, reject) => {
        if(errorState){
            reject({
                name: "Error",
                message: "Something went wrong"
            });
        } else if(otherErrorState){
            reject({
                name: "Error",
                message: "Something went wrong"
            })
        } else {
            resolve("very cool");
        }
    })
}

stateChangePromise().then(message => {
    console.log(message);
}).catch(error => {
    console.error(error.name, error.message);
})
