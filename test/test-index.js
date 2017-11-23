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
      assert.equal( result.speech, 'The current version is 4.9.' );
      assert.equal( result.displayText, 'The current version is 4.9.' );
      done();
    }
    app.helloWapuu( req, res );
  } );

  it( 'Object should be returned as expected with translation.', ( done ) => {
    req.body.lang = 'ja';
    res.done = function( result ) {
      assert.equal( result.speech, '現在のバージョンは 4.9 です。' );
      assert.equal( result.displayText, '現在のバージョンは 4.9 です。' );
      done();
    }
    app.helloWapuu( req, res );
  } );

} );

