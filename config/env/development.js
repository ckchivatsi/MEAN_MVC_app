var port = 1337;

module.exports = {
    port: port,
    db: 'mongodb://localhost/todos',
    facebook: {
        clientID: '1923494037884586',
        clientSecret: 'b15d68bdb6da9f76e4ebee2529a38350',
        callbackURL: 'http://localhost:'+ port +'/oauth/facebook/callback'
    },
    twitter: {
        clientID: 'ZKV9P0uo7rbzFoqwO3GwVtbsj',
        clientSecret: '4mEB6atmpzPLwS7y34G5koxZkEdtwtzOUf6e1b4Dy5vx7V8MQB',
        callbackURL: 'http://localhost:1337/oauth/twitter/callback'
    }
};