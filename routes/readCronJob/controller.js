const readCronJob = require('./helpers/readCronJob')

exports.readCronJob = async (req, res) => {
    readCronJob(req, res)
}