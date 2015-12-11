/*
 * EVENT MODEL
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EventSchema = Schema({
    created_at: { type: Date, default: Date.now() },
    updated_at: { type: Date },
    title: { type: String, required: true, trim: true },
    location: { type: String, required: true, trim: true },
    date: { type: String, required: true, trim: true }
});

// // MIDDLEWARE
// EventSchema.pre('save', function(next){
//   // set a created_at and update updated_at
//   now = new Date();
//   this.updated_at = now;
//   if ( !this.created_at ) {
//     this.created_at = now;
//   }
//   next();
// });

// export post model
var Event = mongoose.model('Event', EventSchema);

module.exports = Event;
