const Log = function( log_path, dev ){
	
	log_path = path.join( `${process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE}`,`/.bixbyte/logs/main.log`  ) ;
	dev 	 = dev || true;

	//@ Ensure that the loging directory exists
	fse.ensureDirSync(path.join( `${process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE}`,`/.bixbyte/logs`));
	
	let ls = fs.createWriteStream( log_path , {flags: 'a'});
	
	//THE SYSTEM EVENT LOGGER 
	this.log = ( logMessage , term ) => {
	    
		logMessage = (typeof(logMessage)=="object")?JSON.stringify(logMessage):logMessage;
					
	    let d = new Date();
	
		ls.write(`${d.toISOString()}\t${logMessage} @!##\n\n`);
		// ls.write(`${d}\t${logMessage.replace(/\[32m/ig,"").replace(/\[31m/ig,"").replace(/\[39m/ig,'').replace(/\[90m/ig, "").replace(/\[33m/ig, "").replace(/\[34m/ig, "")} @!##\n\n`);
		// ls.write(`${d}\t${logMessage.replace(/\.success/ig, "").replace(/\.info/ig, "").replace(/\.yell/ig, "").replace(/\.err/ig, "").replace(/\.gray/ig, "")} @!##\n\n`);
	   
		console.log(`\n${d}\t${logMessage}\n` );
	    
		
	};

};

exports.logger = ( log_path, dev ) => new Log( log_path, dev ).log;