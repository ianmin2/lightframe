const isOnline = (cb) => {

    return new Promise((resolve,reject)=>{

        require('dns')
        .lookup('google.com',function(err) {

            //  && err.code == "ENOTFOUND"
            if (err) {
                reject(err);
            } else {
                resolve();
            }

        });

    });
    
};

let is_online = isOnline;

module.exports = {isOnline,is_online};