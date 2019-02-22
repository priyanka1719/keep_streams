const notesService = require('./notes.service');

const getNotesAsStream = (req, res) => {
    const userId = req.query.userId || req.userData.userId;
    notesService.getNotesAsStream(res, userId);
};

const uploadNotes = (req, res) => {
    try {
        console.log("Upload bulk data")
        const userId = req.query.userId || req.userData.userId;
        notesService.uploadNotes(userId)
            .then((result) => {
                res.status(201).json(result);
            })
            .catch((error) => {
                res.status(error.status).json(error);
            });
    } catch (err) {
        res.status(500).json('Something went wrong. Error: ' + err.message);
    }
};


module.exports = {
    getNotesAsStream,
    uploadNotes
}