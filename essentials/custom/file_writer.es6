exports.fWrite = exports.f_write  = (fpath,fdata) => new Promise( resolve => resolve(fs.writeFileSync(`${fpath}`,`${fdata}`)) );