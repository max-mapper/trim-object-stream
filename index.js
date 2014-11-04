var through = require('through2')

module.exports = function(opts) {

  var trimmer = through.obj(function(ch, enc, next) {
    trimmer.push(trim(ch))
    next()
  })

  return trimmer
}

function trim(obj) {
  var trimmed = {}
  var keys = Object.keys(obj)
  for (var i = 0; i < keys.length; i++) {
    var k = keys[i]
    var v = obj[k]
    var trimk = k.trim()
    if (typeof v === 'string') trimmed[trimk] = v.trim()
    else if (typeof v === 'object') trimmed[trimk] = trim(v)
    else trimmed[trimk] = v
  }
  return trimmed
}
