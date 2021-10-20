const newman = require('newman'),
      fs = require('fs');

newman.run({
    collection: require('./collection.json'),
    reporters: 'cli'
}).on('request', function (error, args) {
    if (error) {
        console.error(error);
    }
    else {
        fs.appendFile('response.json', args.response.stream, function (error) {
            if (error) { 
                console.error(error); 
            }
        });        
    }
});