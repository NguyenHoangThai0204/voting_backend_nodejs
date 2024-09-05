const express =  require("express")
const routers = express.Router();
const voteController = require("../controller/VoteController")

// Post http://localhost:3000/api/user/create_voting
// {
//     "authorId": "66cc0642f1858d86afad1666",
//     "avatar": "http://example.com/avatar.jpg",
//     "title": "My Second Voting Content",
//     "description": "This is a description of my first voting content.",
//     "timeCreate": "2024-09-02T15:00:00.000+07:00",
//     "timeStart": "2024-02-05T15:00:00.000+07:00",
//     "timeEnd": "2024-09-03T12:30:00.000+07:00",
//     "selectors": [
//         {
//             "contentSelector": "option1",
//             "descriptionContentSelector": "This is the first option."
//         },  
//         {
//             "contentSelector": "option2",
//             "descriptionContentSelector": "This is the second option."
//         },
//         {
//             "contentSelector": "option3",
//             "descriptionContentSelector": "This is the third option."
//         }
//     ],
//     "typeContent": "public"
// }
routers.post("/create_voting", voteController.createVoting)

// Get http://localhost:3000/api/user/find_all_voting/66cc0642f1858d86afad1666
routers.get("/find_all_voting_user/:authorId", voteController.findAllVotingUser)
// Get http://localhost:3000/api/user/find_all_voting/66cc0642f1858d86afad1666
routers.get("/find_all_voting", voteController.findAllVoting)
// Get http://localhost:3000/api/user/find_by_id_voting/66cc0642f1858d86afad1666
routers.get("/find_by_id_voting/:id", voteController.findByIdVoting)

module.exports = routers;