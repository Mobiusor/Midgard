var comments = [
  {author: "Bruno Bu", text: "aaa"},
  {author: "Winguse Cheng", text: "bbb"}
];

exports.getCommnets = function(req, res) {
  res.json(comments);
}

exports.addComment = function(req, res) {
  var newComment = req.body;
  comments = comments.concat(newComment);
  res.json(comments);
  console.log(newComment);
}
