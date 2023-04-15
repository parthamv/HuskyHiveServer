import mongoose from 'mongoose';
import gigsSchema from './gig-schema.js'
const gigsModel = mongoose
              .model('GigModel', gigsSchema);
export default gigsModel;