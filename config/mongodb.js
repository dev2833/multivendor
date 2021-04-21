var mongoose = require('mongoose');

module.exports = () => {
    mongoose.set('useUnifiedTopology', true);
    const uri = "mongodb+srv://johndavis124:)gq07VYe8Di2K1x&m7@cluster0-nhcdz.mongodb.net/ShoppingApi"
    return mongoose.connect(uri,{useNewUrlParser: true})  
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));
};