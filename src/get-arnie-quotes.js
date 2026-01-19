const {httpGet} = require('./mock-http-interface');

const getArnieQuotes = async (urls) => {
    return Promise.all(
        urls.map(httpGet)
            .map(response => response.then(handleResponse))
    )
};

const handleResponse = (response) => {
    const {message} = JSON.parse(response.body)
    if (response.status === 200) {
        return {'Arnie Quote': message}
    } else {
        return {'FAILURE': message}
    }
}

module.exports = {
    getArnieQuotes,
};
