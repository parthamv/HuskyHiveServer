import * as gigsDao from "../../gig/gigs-dao.js";

const GigController = (app)=>{
    app.get('/api/gigs', findGig);
    app.post('/api/gigs', createGig);
}

const createGig =async  (req, res) => {
    const newGig = req.body;
    const insertedGig = await gigsDao.createGigs(newGig)
    res.json(insertedGig);
  }

const findGig = async (req, res) =>{
    const Gigs = await gigsDao.findGigs()
    res.json(Gigs);
}
export default GigController