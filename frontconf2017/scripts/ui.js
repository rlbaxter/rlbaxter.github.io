var frontConf = frontConf || {};

frontConf.ui = (function() {
	var $win;
	var $body;
	var primaryHeaderBreakpoint = 800;
	var sectionHeaderBreakpoint = 1000;

	var init = function() {
		$win  = $( window );
		$body = $( 'body' );

		$body.on( 'click', '.primary-nav .active', togglePrimaryMenu );
		$body.on( 'click', '.section-nav .menu-toggle', toggleSectionMenu );
		$body.on( 'click', '.accordion-title', toggleAccordion );

		if ( $body.find( '.section-header' ).length ) {
			$win.on( 'scroll', toggleStickyHeaders );
		}
	};

	var togglePrimaryMenu = function( event ) {
		var $menu = $( this ).parents( '.primary-nav' );

		$( '.section-nav' ).removeClass( 'open' );

		if ( $win.outerWidth() <= primaryHeaderBreakpoint ) {
			event.preventDefault();
			$menu.toggleClass( 'open' );
		}
	};

	var toggleSectionMenu = function( event ) {
		var $menu = $( this ).parents( '.section-nav' );

		$( '.primary-nav' ).removeClass( 'open' );

		if ( $win.outerWidth() <= sectionHeaderBreakpoint ) {
			event.preventDefault();
			$menu.toggleClass( 'open' );
		}
	};

	var toggleAccordion = function( event ) {
		$( this ).parents('.accordion').toggleClass( 'open' );
	};

	var toggleStickyHeaders = function( event ) {
		var $primaryHeader = $body.find( '.primary-header' );
		var $sectionHeader = $body.find( '.section-header' );

		if ( $win.outerWidth() <= sectionHeaderBreakpoint ) {
			$primaryHeader.removeClass( 'sticky' );

			if ( $win.scrollTop() > $primaryHeader.outerHeight() ) {
				$sectionHeader.addClass( 'sticky' );
			} else {
				$sectionHeader.removeClass( 'sticky' );
			}
		} else {
			if ( $win.scrollTop() > $primaryHeader.outerHeight() + $sectionHeader.outerHeight() ) {
				$sectionHeader.addClass( 'sticky' );
				$primaryHeader.addClass( 'sticky' );
			} else {
				$sectionHeader.removeClass( 'sticky' );
				$primaryHeader.removeClass( 'sticky' );
			}
		};
	}

	return {
		init: init
	};
})();

$( frontConf.ui.init );