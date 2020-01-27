var redis = require('redis');
var redisClient = redis.createClient({ host: 'localhost', port: 6379 });

redisClient.on('ready', function() {
    console.log("Redis is ready");
});

redisClient.auth('password', function(err, reply) {
    console.log(reply);
});
redisClient.set("language", "nodejs");

redisClient.on('error', function() {
    console.log("Error in Redis");
});