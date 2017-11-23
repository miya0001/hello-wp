const assert = require( 'assert' );
const path = require( 'path' );
const __ = require( '../lib/i18n' );

describe( 'i18n', () => {

  it( 'Text should be displayed in English.', () => {
    const text = __( 'The current version is %s.', '4.9' );
    assert.equal( text, 'The current version is 4.9.' );
  } );

  it( 'Text should be translated to Japanese.', () => {
    global.lang = require( path.join( '../lang', 'ja' ) );
    const text = __( 'The current version is %s.', '4.9' );
    assert.equal( text, '現在のバージョンは 4.9 です。' );
  } );

} );
