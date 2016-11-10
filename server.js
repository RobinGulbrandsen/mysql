var Article = require('./Article');

Article.find({}).then(function(data) {
  console.log(data);
});
