const axios = require("axios")

const getSendRequest = async () => {
    try {
        let res1 = await axios('https://jsonplaceholder.typicode.com/todos/')
        let res2 = await axios('https://jsonplaceholder.typicode.com/users')
        Promise.all([res1, res2]).then(function(values) {
          console.log(values);
        });
    }
    catch (error) {
        console.log(error)
    }
}
getSendRequest();

