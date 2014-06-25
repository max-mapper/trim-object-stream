var through = require('through2')

module.exports = function(opts) {
  
  var trimmer = through.obj(function(ch, enc, next) {
    var trimmed = {}
    var keys = Object.keys(ch)
    for (var i = 0; i < keys.length; i++) {
      var k = keys[i]
      var v = ch[k]
      var trimk = k.trim()
      if (typeof v === 'string') trimmed[trimk] = v.trim()
      else trimmed[trimk] = v
    }
    trimmer.push(trimmed)
    next()
  })
  
  return trimmer
}
