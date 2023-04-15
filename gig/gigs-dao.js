import gigsModel from "./gigs-model.js";
export const findGigs = () => gigsModel.find();
export const createGigs = (Gig) => gigsModel.create(Gig);