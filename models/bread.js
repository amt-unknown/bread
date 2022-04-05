//require mongoose
const mongoose = require('mongoose')

//creating shorthand for the Schema constructor
const { Schema } = mongoose

//database Schema
const breadSchema = new Schema({
    name: { type: String, required: true},
    hasGluten: { type: Boolean},
    image: { type: String, default: '/images/bread-placeholder.jpg'},
    baker: {
        type: Schema.Types.ObjectId, 
        ref: 'Baker'
    }
})

breadSchema.methods.getBakedBy = function() {
    return `${this.name} was baked with love by ${this.baker}`
}

//model and export
const Bread = mongoose.model('Bread', breadSchema)
module.exports = Bread