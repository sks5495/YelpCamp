var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest",
        image: "https://farm3.staticflickr.com/2464/3694344957_14180103ed.jpg",
        description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga"
    },
    {
        name: "Desert Mesa",
        image: "https://farm9.staticflickr.com/8422/7842069486_c61e4c6025.jpg",
        description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga"
    },
    {
        name: "Canyon Floor",
        image: "http://photosforclass.com/download/1430198323",
        description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga"
    }
]

function seedDB(){
    //REMOVE ALL CAMPGROUNDS
    Campground.remove({}, function(err){
        // if(err){
        //     console.log(err);
        // }
        // console.log("Removed Campground");
        // //ADD A FEW CAMPGROUNDS
        // data.forEach(function(seed){
        //     Campground.create(seed, function(err, campground){
        //         if(err){
        //             console.log(err)
        //         } else {
        //             console.log("Added a campground");
        //             //CREATE A COMMENT
        //             Comment.create(
        //                 {
        //                     text: "This place looks dope!",
        //                     author: "Homer"
        //                 }, function(err, comment){
        //                     if(err){
        //                         console.log(err);
        //                     } else {
        //                         campground.comments.push(comment);
        //                         campground.save();
        //                         console.log("Added a new Comment");
        //                     }    
        //                 });
        //         }
        //     }); 
        // });
    });    
}

module.exports = seedDB;