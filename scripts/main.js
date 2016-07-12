var rlbaxter = rlbaxter || {};

rlbaxter.background_blur = {
	path:      '/img/waterfall.jpg',
	canvas_id: 'bg',
	radius:    100,

	init: function() {
		var self = this;

		var image = new Image();
		image.src = self.path;

		image.onload = function() {
			self.render( image );
		};
	},

	render: function( image ) {
		var self    = this;
		var canvas  = document.getElementById( self.canvas_id );
		var context = canvas.getContext( '2d' );
		var width   = canvas.width;
		var height  = canvas.height;

		context.drawImage( image, 0, 0, width, height );
		stackBlurCanvasRGBA( self.canvas_id, 0, 0, width, height, self.radius );
		canvas.className = 'ready';
	}
};

// rlbaxter.posts = {
// 	data_store: {},

// 	init: function() {
// 		var self = this;

// 		self.recent_posts_template = Handlebars.compile( $( '#recent-posts-template' ).html() );
// 		self.post_template         = Handlebars.compile( $( '#post-template' ).html() );
// 		self.tag_template          = Handlebars.compile( $( '#tag-template' ).html() );
// 		self.author_template       = Handlebars.compile( $( '#author-template' ).html() );

// 		self.main  = $( '.main' );
// 		self.aside = $( '.aside' );
// 		self.loading = $( '.loading' );

// 		self.router();
// 		window.onhashchange = function() {
// 			self.router();
// 		};
// 	},

// 	fetch: function( params, get_recent ) {
// 		var self = this;

// 		var store_ref = JSON.stringify( params );

// 		var use_data_store = function() {
// 			if ( get_recent ) {
// 				self.recent_posts = self.data_store[store_ref];
// 				self.router();
// 			} else {
// 				self.data = self.data_store[store_ref];
// 				self.render();
// 			}
// 		};

// 		if ( self.data_store[store_ref] ) {
// 			use_data_store();
// 		} else {
// 			self.loading.removeClass('complete');
// 			$.ajax({
// 				url: "../api/posts.php",
// 				data: params,
// 				success: function( response ){
// 					if ( !response.success ) {
// 						this.error();
// 						return;
// 					}

// 					self.data_store[store_ref] = response.data;
// 					use_data_store();
// 				},

// 				error: function() {
// 					self[( get_recent ? 'recent_posts' : 'data' )] = false;
// 					self.render();
// 				},

// 				complete: function() {
// 					if ( !get_recent ) {
// 						self.loading.addClass('complete');
// 					}
// 				}
// 			});
// 		}
// 	},

// 	render: function() {
// 		var self = this;
// 		var page_title = 'rlbaxter.us - ';

// 		self.aside.html( self.recent_posts_template( self.recent_posts ));

// 		switch ( self.type ) {
// 			case 'post':
// 				page_title += self.data.title;
// 				self.main.html( self.post_template( self.data ));
// 				Prism.highlightAll();
// 				$( '.show-comments' ).on( 'click', function( e ) {
// 					e.preventDefault();
// 					$( this ).hide();
// 					self.load_comments( self.data.slug );
// 				});
// 				break;
// 			case 'tag':
// 				page_title += 'Posts tagged "' + self.tag + '"';
// 				self.main.html( self.tag_template({
// 					tag: self.tag,
// 					posts: self.data
// 				}));
// 				break;
// 			case 'author':
// 				page_title += "Posts by " + self.author;
// 				self.main.html( self.author_template({
// 					author: self.author,
// 					posts: self.data
// 				}));
// 				break;
// 		}

// 		document.title = page_title;
// 		window.scrollTo(0, 1);

// 		$( '.share-link input' ).on( 'click', function( e ) {
// 			this.setSelectionRange( 0, this.value.length );
// 		});
// 	},

// 	load_comments: function( slug ) {
// 		DISQUS.reset({
// 			reload: true,
// 			config: function () {
// 				this.page.identifier = slug;
// 				this.page.url = 'http://rlbaxter.us/posts/#!post/' + slug;
// 			}
// 		});
// 	},

// 	router: function() {
// 		var self = this;

// 		var hash = location.hash.substring( 2 ).split( '/' );

// 		if ( self.recent_posts ) {
// 			self.type = ( !!hash[0]  ? hash[0] : 'post' );

// 			switch ( self.type ) {
// 				case 'post':
// 					self.post = ( !!hash[1]  ? hash[1] : self.recent_posts[0].slug );
// 					self.fetch( {post: self.post} );
// 					break;

// 				case 'tag':
// 					self.tag = ( typeof hash[1] !== 'undefined' ) ? hash[1] : '';
// 					if ( self.tag ) {
// 						self.fetch( {tag: self.tag} );
// 					} else {
// 						window.location.hash = '';
// 					}
// 					break;

// 				case 'author':
// 					self.author = ( typeof hash[1] !== 'undefined' ) ? hash[1] : '';
// 					if ( self.author ) {
// 						self.fetch( {author: self.author} );
// 					} else {
// 						window.location.hash = '';
// 					}
// 					break;

// 				default:
// 					window.location.hash = '';
// 			}

// 		} else {
// 			self.fetch( {limit: 20}, true );
// 		}
// 	}
// };

$(window).on('load', function() {
	rlbaxter.background_blur.init();
});