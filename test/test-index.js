const assert = require( 'assert' );
const app = require( '../index' );

const req = {
  body: {
    lang: "en",
    result: {
      action: "version"
    }
  }
};

const res = {};
res.setHeader = function() {}
res.send = function( data ) {
  const result = JSON.parse( data );
  this.done( result );
}

describe( 'Tests for main function.', () => {

  it( 'Object should be returned as expected.', ( done ) => {
    res.done = function( result ) {
      assert.ok( result.speech.match( /^The current version is/ ) );
      assert.ok( result.speech.match( /^The current version is/ ) );
      done();
    };
    app.helloWP( req, res );
  } );

  it( 'Object should be returned as expected with translation.', ( done ) => {
    req.body.lang = 'ja';
    res.done = function( result ) {
      assert.ok( 0 === result.speech.indexOf( '現在の' ) );
      assert.ok( 0 === result.displayText.indexOf( '現在の' ) );
      done();
    };
    app.helloWP( req, res );
  } );

} );

