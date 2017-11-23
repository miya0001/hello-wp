const vsprintf = require('sprintf').vsprintf

module.exports = function() {
  const args = Array.prototype.slice.call(arguments);
  const text = args.shift();

  if ( global.lang && global.lang[text] ) {
    return vsprintf( global.lang[text], args );
  } else {
    return vsprintf( text, args );
  }
}
