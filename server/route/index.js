const router = require('express').Router();
const { Note } = require('../model/schema/Notes')


router.get('/test', (req, res) => {
        res.send({message: 'Test route for message' , success: true})
});


router.post('/api/create/note', async (req, res) => {
    let { date, note } = req.body
    
    
    if(!date) return res.send({message: 'Date is required', success: false})

    if(!note) return res.send({message: 'Note is required', success: false})

    let newNote = new Note({
        date: date,
        note: note
    })

    await newNote.save();
    res.send({data: newNote, success: true});
})

router.get('/api/get-all/notes',async (req, res) => {

    let getNotes = await Note.find({date: -1})
    
    res.send({data: getNotes, success: true});
})

module.exports = router;
