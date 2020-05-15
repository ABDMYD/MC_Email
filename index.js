const nodeMailer = require('nodemailer'),
	  fs         = require('fs'),
	  colors     = require('./colors.js'),
	  express    = require('express');


let transporter = nodeMailer.createTransport({
	service: 'gmail',
	auth: {
		user: "gpgcgt",
		pass: "326514789"
	}
});


function getMultiplication(n, m=1){
	let r = 1;
	for(d of [...(n+[])])r*=d;
	if(r > 9){
		m++;
		return getMultiplication(r, m);
	}
	return m;
}

transporter.sendMail({
	from: "MyDABD",
	to: "abdmyd@gmail.com",
	subject: "New MC found!",
	html: `Start Searching!`
},(err, info)=>{
	if(err)
		return console.log(`@[red]Error! :@[fg-#bf463b]${err}`.parse());
	console.log(`@[green] Email Sent has been to: @[blue]${info.accepted.join(" & ")} `.parse());
});

let best = 0, cn=0n;
setInterval(()=>{
	let g = 100000;
	while(g--){
		let m = getMultiplication(cn);
		if(m > best){
			best = m;
			console.log((cn+[]).replace(`n`, ''), m);
			transporter.sendMail({
				from: "MyDABD",
				to: "abdmyd@gmail.com",
				subject: "New MC found!",
				html: `Found: ${(cn+[]).replace(`n`, '')} That runs for: ${m}`
			},(err, info)=>{
				if(err)
					return console.log(`@[red]Error! :@[fg-#bf463b]${err}`.parse());
				console.log(`@[green] Email Sent has been to: @[blue]${info.accepted.join(" & ")} `.parse());
			});
		}
		cn++;
	}
}, 100);