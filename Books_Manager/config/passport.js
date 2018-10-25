var passport =require ('passport');
var GoogleStrategy  = require('passport-google-oauth').OAuth2Strategy;
var auth=require('../models/google');

passport.use(new GoogleStrategy ({
  clientID:'777357365347-btigv63563mpt6e9h7qdp5kdvv54idun.apps.googleusercontent.com' ,
  clientSecret:'sGlUVjjsJGx1SyLYaRCmcW0z',
  callbackURL:"http://localhost:3000/book/authentication"
},
function(accessToken, refreshToken, profile, info) {
  // console.log('passport console');
  console.log(profile.emails[0].value);
  console.log('access token is',accessToken);
  auth.findOne({email:profile.emails[0].value}, function (err, user) {
    console.log('findone console');
    if(err){
      console.log('error');
      return info(err);

    }
    if(user){
      console.log('user console');
      console.log('access token is',accessToken);
      return info(null,user,accessToken);
    }
    else{
      console.log('new user console');
      var newUser=new auth();
      newUser.id=profile.id;
      newUser.name=profile.displayName;
      newUser.token=accessToken;
      newUser.email=profile.emails[0].value;
      newUser.save(function(err){
        if(err)
        throw err
        return info(null,newUser,accessToken);
      })
      console.log('passport console');
      console.log(profile);

    }
    return info(err, user);
  });
}
));
