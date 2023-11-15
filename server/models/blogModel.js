const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title must not be empty']
    },
    description: {
        type: String,
        required: [true, 'Description must not be empty']
    },
    tag: {
        type: String,
        required: [true, 'Tag must not be given']
    },
    author: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true, 'Author must be given']
    }
}, {
    timestamps: true
}
)

module.exports = mongoose.model('Blog', blogSchema)