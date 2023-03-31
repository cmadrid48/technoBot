const { Comment } = require("../models");

const commentData = [
  {
    id: 1,
    comment: "Amazing!",
    user_id: "5",
    post_id: "1",
  },
  {
    id: 2,
    comment: "I think i know what you mean.",
    user_id: "3",
    post_id: "2",
  },
  {
    id: 3,
    comment: "oh yeah!",
    user_id: "4",
    post_id: "3",
  },
  {
    id: 4,
    comment: "Way to go!",
    user_id: "2",
    post_id: "4",
  },
  {
    id: 5,
    comment: "hey! who showed you this?",
    user_id: "1",
    post_id: "5",
  },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;
