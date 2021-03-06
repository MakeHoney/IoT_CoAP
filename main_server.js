const PORT = 7777;

var dgram = require('dgram');
var fs = require('fs');
var server = dgram.createSocket("udp6");
var byunghun = 0,
	jungyeon = 0,
	taesung = 0;

server.on("message", function(msg, rinfo) {
	console.log("server got : " + msg + " from " +
		rinfo.address + ":" + rinfo.port);

	fs.appendFile('log.txt', msg + "\n", function(err) {
		if(err) throw err;
	});

	if(msg == 'binary counter') {
		byunghun++;
		fs.writeFile('byunghun.txt', byunghun.toString(), 'utf8', function(err) {
			if(err) throw err;
		})
	} else if(msg == '1 2 3 blink') {
		jungyeon++;
		fs.writeFile('jungyeon.txt', jungyeon.toString(), 'utf8', function(err) {
			if(err) throw err;
		})
	} else if(msg == 'wave 5 blink') {
		taesung++;
		fs.writeFile('taesung.txt', taesung.toString(), 'utf8', function(err) {
			if(err) throw err;
		})
	}

});

server.on("listening", function() {
	var address = server.address();
	console.log("server listening " + address.address + 
		":" + address.port);
});

server.bind(PORT);