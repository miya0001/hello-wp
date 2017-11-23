const request = require( 'request' );
const __ = require( '../lib/i18n' );

module.exports = function( req, res ) {
  const url = 'https://api.wordpress.org/core/version-check/1.7/';
  request( url, { json: true }, ( err, response, body ) => {
    const text = __( 'The current version is %s.', body.offers[0].current );

    res.setHeader( 'Content-Type', 'application/json' );
    res.send( JSON.stringify( {
      "speech": text, // for speech version
      "displayText": text // for visual version
    } ) );
  } );
}
