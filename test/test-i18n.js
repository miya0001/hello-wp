const assert = require( 'assert' );
const path = require( 'path' );
const __ = require( '../lib/i18n' );

describe( 'i18n', () => {

  it( 'Text should be displayed in English.', () => {
    const text = __( 'The current version is %s. This version has been downloaded %s times.', '4.9' );
    assert.ok( text.match( /^The current version is/ ) );
  } );

  it( 'Text should be translated to Japanese.', () => {
    global.lang = require( path.join( '../lang', 'ja' ) );
    const text = __( 'The current version is %s. This version has been downloaded %s times.', '4.9' );
    assert.ok( 0 === text.indexOf( '現在の' ) );
  } );

} );
