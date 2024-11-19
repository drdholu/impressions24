const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

const candidates = require('../src/candidates');

app.use(express.json());

app.use(cors({
    origin: '*',
    methods: ['POST'],
    allowedHeaders: ['Content-Type']
}));

mongoose.connect('mongodb+srv://impressionscoeptech22:LzCSpatibanIL8To@mmi-voting.ojnsh.mongodb.net/imp24DB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
    name: String,
    votedCandidateId: Number,
})

const User = mongoose.model('User', userSchema);

const candidateSchema = new mongoose.Schema({
    id: Number,
    name: String,
    votes: { type: Number, default: 0 },
});

const Candidate = mongoose.model('Candidate', candidateSchema);

// const bulkOps = candidates.map(candidateData => ({
//   updateOne: {
//     filter: { id: candidateData.id },
//     update: { $setOnInsert: candidateData },
//     upsert: true
//   }
// }));

// Candidate.bulkWrite(bulkOps)
//   .then(() => {
//     console.log('Candidates inserted successfully');
//   })
//   .catch(error => {
//     console.error('Error inserting candidates:', error);
//   });

app.post('/api/vote', async (req, res) => {
    const { candidateId, name } = req.body;

    if (!candidateId || !name) {
        return res.status(400).json({ message: 'Candidate ID and name are required' });
    }

    try {
        const existingUser = await User.findOne({ name: name });
        if (existingUser) {
            return res.status(400).json({ message: 'User has already voted' });
        }

        let candidate = await Candidate.findOne({ id: candidateId });
        if (!candidate) {
            return res.status(400).json({ message: 'Invalid candidate ID' });
        }

        candidate.votes += 1;
        await candidate.save();

        const newUser = new User({
            name: name,
            votedCandidateId: candidateId,
        });
        await newUser.save();

        return res.status(200).json({ message: 'Vote recorded successfully' });
    } catch (error) {
        return res.status(500).json({ message: 'Server error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
