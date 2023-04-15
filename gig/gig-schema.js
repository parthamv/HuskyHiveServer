import mongoose from 'mongoose';
const schema = mongoose.Schema({
  Name:String,
  emailid: String,
  mobileno: String,
  gig:String,
  cost:String
}, {collection: 'Gigs'});
export default schema;