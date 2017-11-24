const path = require( 'path' );
const fs = require( 'fs' );

const modules = {
  version: require( './modules/version' ),
  downloads: require( './modules/downloads' )
}

exports.helloWP = ( req, res ) => {

  const locale = req.body.lang;
  const action = req.body.result.action;

  if ( locale.match( /^[a-z]+$/ ) ) {
    global.lang = require( './lang/' + locale );
  } else {
    global.lang = {};
  }

  modules[action]( req, res );
};
