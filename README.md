# Model.findByWhatever('whatever')

```js
// Given a User model
var UserSchema = mongoose.Schema({ name: String , email: String });

// define some finder rules
var whatevers = [
  {email: /@/} // Regexp
, {_id: 'ObjectId'} // ObjectId
, {name:'*'} // Everything
];

UserSchema.plugin(require('mongoose-find-by-whatever'), whatevers);
User = mongoose.model('User', UserSchema);

User.findByWatever('bob@email.com') // Turns into User.find({email: 'bob@email.com'})
User.findByWatever('52aa38f7bcd27e0200000024') // Turns into User.find({_id: '52aa38f7bcd27e0200000024'})
User.findByWatever('bob') // Turns into User.find({name: 'bob'})
```


