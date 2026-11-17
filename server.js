const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files from the dist directory
app.use(express.static(__dirname + '/dist/AngularTest'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/AngularTest/index.html'));
});

// Start the app on PORT (default 8080)
app.listen(process.env.PORT || 8080);
