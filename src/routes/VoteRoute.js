const express =  require("express")
const routers = express.Router();
const voteController = require("../controller/VoteController")

// Post http://localhost:3000/api/user/create_voting
// {
//     "authorId": "66cbc96d367aa89344e6c0d9",
//     "avatar": "http://example.com/avatar.jpg",
//     "title": "My bạn của tôi",
//     "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit vitae, .",
//     "timeCreate": "2024-09-02T08:00:00.000Z",
//     "timeStart": "2024-02-05T08:00:00.000Z",
//     "timeEnd": "2024-09-07T09:30:00.000Z",
//     "options": [
//         {
//             "contentOption": "Naruto",
//             "additonalContentOption":"",
//             "descriptionContentOption": "This is the first option."
//         },  
//         {
//             "contentOption": "Conan",
//             "additonalContentOption":"",
//             "descriptionContentOption": "This is the second option."
//         },
//         {
//             "contentOption": "React Js",
//             "additonalContentOption":"",
//             "descriptionContentOption": "This is the third option."
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