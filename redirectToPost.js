const _ = require("lodash");

exports.redirectToPost = function(posts, postName) {
  let options={};
  const requestedTitle = _.lowerCase(postName);
  posts.forEach(function(post) {
    const storedTitle = _.lowerCase(post.title);
    if (storedTitle === requestedTitle)
    {
      options = {title: post.title,content: post.content,};
      break;
    }
  });
  return options;
};
