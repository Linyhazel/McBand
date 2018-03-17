var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://hostIP:port/mcband"; /***This part should be adjusted after the cloud service is built!*/

MongoClient.connect(url,function(err,db){
	if(err) throw err;
	console.log("Database connected!");
    
    var dbase = db.db("mcband");
    dbase.createCollection('users',function(err,res){
    	if(err throw err);
    	console.log("Collection 'users' created!");
    })

    dbase.createCollection('albums',function(err,res){
    	if(err throw err);
    	console.log("Collection 'albums' created!");
    })

    dbase.createCollection('musics',function(err,res){
    	if(err throw err);
    	console.log("Collection 'musics' created!");
    })

    dbase.createCollection('music_comments',function(err,res){
    	if(err throw err);
    	console.log("Collection 'music_comments' created!");
    })

    dbase.createCollection('events',function(err,res){
    	if(err throw err);
    	console.log("Collection 'events' created!");
    })


    dbase.createCollection('event_lists',function(err,res){
    	if(err throw err);
    	console.log("Collection 'event_lists' created!");
    })

    dbase.createCollection('following_lists',function(err,res){
    	if(err throw err);
    	console.log("Collection 'following_lists' created!");
    })

    dbase.createCollection('follower_lists',function(err,res){
    	if(err throw err);
    	console.log("Collection 'follower_lists' created!");
    })

    db.close();
})