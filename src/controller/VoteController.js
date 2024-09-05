const ContentVoting = require("../models/ContentVoting")

exports.createVoting = async( req, res )=>{
    try {
        const vote = new ContentVoting(req.body);
        await vote.save();
        res.status(200).json({
            status: "OK",
            message:"Create voting success",
            data: vote
        });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: "Internal Server Error" + error});
    }
}

exports.findAllVotingUser = async( req, res )=>{
    try {
        const authorId = req.params.authorId;
        const listVoting = await ContentVoting.find({authorId: authorId});
        res.status(200).json({
            status: "OK",
            message: "Success",
            data: listVoting
        });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: "Internal Server Error" + error});
    }
}
exports.findAllVoting = async( req, res )=>{
    try {
        const listVoting = await ContentVoting.find();
        res.status(200).json({
            status: "OK",
            message: "Success",
            data: listVoting
        });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: "Internal Server Error" + error});
    }
}
exports.findByIdVoting = async( req, res )=>{
    try {
        const id = req.params.id;
        const voting = await ContentVoting.findById(id);
        res.status(200).json({
            status: "OK",
            message: "Success",
            data: voting
        });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: "Internal Server Error" + error});
    }
}

