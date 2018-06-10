var devs = [];

function log(m)
{
    console.log("[LOG]:" + m);
}

function warn(m)
{
    console.warn("[WARN]:" + m);
}

function errors(m)
{
    console.error("[ERROR]:" + m);
}

exports.log = function(msg) {
    log(msg);
}

exports.warn = function(warnMsg) {
    warn(warnMsg);
}

exports.error = function(errMsg)
{
    errors(errMsg);
}

exports.addDev = function(devID)
{
    if (typeof devID === 'number')
    {
        errors("DevID must be a string!");
    }
    else if (typeof devID === 'string')
    {
        devs.push(devID);
    }
}