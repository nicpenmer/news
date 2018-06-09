var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var ArticleSchema = new Schema({
  // `title` is required and of type String
  title: {
    type: String,
    required: true
  },
  // `link` is required and of type String
  link: {
    type: String,
    required: true
  },
  // `note` is an object that stores a Note id
  // The ref property links the ObjectId to the Note model
  // This allows us to populate the Article with an associated Note
  note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
});

// This creates our model from the above schema, using mongoose's model method
var Article = mongoose.model("Article", ArticleSchema);

// Export the Article model
module.exports = Article;



///////
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// Create article schema
var ArticleSchema = new Schema({
	headline: {type: String, unique: true},
	summary: String,
	article: String,
	byline: String,
	img: {url: String, credit: String},
	transcript: String,
	notes: [
	    {
	      // Store ObjectIds in the array
	      type: Schema.Types.ObjectId,
	      // The ObjectIds will refer to the ids in the Note model
	      ref: "Note"
	    }
	],
	saved: Boolean
});

ArticleSchema.methods.saveArticle = function(){
	this.saved = true;
	return this.saved;
};

ArticleSchema.methods.removeSavedArticle = function(){
	delete this.saved;
};

var Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;