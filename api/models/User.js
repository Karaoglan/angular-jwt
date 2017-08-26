var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var UserSchema = new mongoose.Schema({
    email: String,
    password: String 
})

UserSchema.pre('save', function(next){
    
    var user = this;
    if (!user.isModified('password')) return next();

    bcrypt.genSalt(10, function(err, salt){
        if (err) return next(err);
        
        bcrypt.hash(user.password, salt, null, function(err, hash) {
            
            if (err) return next(err);
            
            user.password = hash;
            next();
        })
    })
    console.info(user.password);
})

UserSchema.methods.toJSON = function() {
    var user = this.toObject();
    console.info(user.email + ' / ' + user.password);
    
    delete user.password;
    console.info(user);
    
    return user;
}

module.exports = mongoose.model('User', UserSchema);
