var devs = [];
var d = require('discord.js');
var o = require('./outputs');
var version = "v1.6.0";

exports.log = function(msg) {
    o.log(msg);
}

exports.getVersion = function()
{
    o.log("DarkNodeJS Version: " + version);
}

exports.warn = function(warnMsg) {
    o.warn(warnMsg);
}

exports.error = function(errMsg)
{
    o.errors(errMsg);
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

exports.getDev = function()
{
    var i;

    for (i = 0; i < devs.length; i++)
    {
        log(devs[i]);
    }
}