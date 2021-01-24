<?php
/**
 * PBG Post.
 *
 * @package PBG
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}
if ( ! class_exists( 'PBG_Post' ) ) {
	/**
	 * Class PBG_Post.
	 */
	class PBG_Post {
		/**
		 * Member Variable
		 *
		 * @since 1.18.1
		 * @var instance
		 */
		private static $instance;
		private static $grid_settings;
		public static function get_instance() {
			if ( ! isset( self::$instance ) ) {
				self::$instance = new self();
			}
			return self::$instance;
		}		
		/**
		 * Constructor
		 */
		public function __construct() {
			
			add_action( 'init', array( $this, 'register_blocks' ) );
			
		
			add_action( 'wp_footer', array($this,'add_post_dynamic_script'),1000 );
		}

		// Check if the register function exists.
		public function register_blocks() {
			// Check if the register function exists.
			if ( ! function_exists( 'register_block_type' ) ) {
				echo 'welcome world';
			}
			$common_attributes = $this->get_post_attributes();
			register_block_type(
				'premium/post-blog',
				array(
					'attributes'      => array_merge(
						$common_attributes,
						array(
							'featuredImage'               => array(
								'type'    => 'boolean',
								'default' => true,
							),
							'hoverEffect'                 => array(
								'type'    => 'string',
								'default' => 'zoomin',
							),
							'height'                      => array(
								'type'    => 'number',
								'default' => 300,
							),
							'HeightU'                     => array(
								'type'    => 'string',
								'default' => 'px',
							),
							'rowGapUnit'                  => array(
								'type'    => 'string',
								'default' => 'px',
							),
							'pagination'                  => array(
								'type'    => 'boolean',
								'default' => false,
							),
							'pageLimit'                   => array(
								'type'    => 'number',
								'default' => 10,
							),
						)
					),
					'render_callback' => array( $this, 'post_callback' ),
				)
			);
		}
		/**
		 * Get Post common attributes
		 *
		 * @since 0.0.1
		 */
		public function get_post_attributes() {
			return array(
				'block_id'                    => array(
					'type'    => 'string',
					'default' => 'not_set',
				),
				'categories'                  => array(
					'type' => 'string',
				),

				'postFilter'                  => array(
					'type'    => 'string',
					'default' => 'category',
				),
				'numOfPosts'                  => array(
					'type'    => 'number',
					'default' => 4,
				),
				'layoutValue' => array(
					'type' => 'string',
					'default' =>'even'
				),
				'displayPostContent'          => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'filterPosition'=>array(
					'type'=>'string',
					'default'=>'left'
				),
				'displayPostDate'             => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'displayPostExcerpt'          => array(
					'type'    => 'string',
					'default' => 'Post Excerpt',
				),
				'displayPostTags'             => array(
					'type'    => 'string',
					'default' => true,
				),
				'excerptLength'               => array(
					'type'    => 'number',
					'default' => 25,
				),
				'fullWidth'                   => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'displayPostAuthor'           => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'displayPostComment'          => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'displayPostCategories'       => array(
					'type'    => 'boolean',
					'default' => true,
				),
				
				'blur'                        => array(
					'type'    => 'number',
					'default' => 0,
				),
				'bright'                      => array(
					'type'    => 'number',
					'default' => 100,
				),
				'contrast'                    => array(
					'type'    => 'number',
					'default' => 100,
				),
				'imageSize'                   => array(
					'type'    => 'string',
					'default' => 'large',
				),
			

				'readMoreText'                => array(
					'type'    => 'string',
					'default' => __( 'Read More' ),
				),
				'borderWidth'                 => array(
					'type' => 'number',
				),
			
				'borderStyle'                 => array(
					'type'    => 'string',
					'default' => 'none',
				),
				'borderColor'                 => array(
					'type'    => 'string',
					'default' => '#3b3b3b',
				),

				'borderRadius'                => array(
					'type' => 'number',
				),
				'columns'                     => array(
					'type'    => 'number',
					'default' => 3,
				),
				'tcolumns'                    => array(
					'type'    => 'number',
					'default' => 2,
				),
				'mcolumns'                    => array(
					'type'    => 'number',
					'default' => 1,
				),
	
				'order'                       => array(
					'type'    => 'string',
					'default' => 'desc',
				),
				'orderBy'                     => array(
					'type'    => 'string',
					'default' => 'date',
				),
				'rowGap'                      => array(
					'type'    => 'number',
					'default' => 16,
				),
				'columnGap'                   => array(
					'type'    => 'number',
					'default' => 16,
				),
				'gridCheck'                   => array(
					'type'    => 'boolean',
					'default' => false,
				),
				// Title Attributes.
				'firstContentfontSizeType' => array(
					'type'    => 'string',
					'default' => 'px',
				),
				'firstContentfontSize'   => array(
					'type'    => 'number',
					'default' => ''
				
				),
				'firstContentfontSizeMobile' => array(
					'type'    => 'number',
					'default' => '',
				),
				'firstContentfontSizeTablet'           => array(
					'type'    => 'number',
					'default' => '',
				),
				'firstContentWeight'         => array(
					'type' => 'number',
				),
				'firstContentStyle'         => array(
					'type' => 'number',
				),
				'firstContentLetter'             => array(
					'type'    => 'string',
					'default' => '',
				),
				'firstContentUpper'             => array(
					'type' => 'boolean',
				),
				'typoColor'             => array(
					'type' => 'string',
				),
				'hoverColor'         => array(
					'type'    => 'string',					
				),
				'marginBottomType'             => array(
					'type' => 'string',
					'default' =>'px'
				),
				'marginBottom'       => array(
					'type' => 'number',
				),
				'marginBottomMobile'       => array(
					'type' => 'number',
				),
				'marginBottomTablet'        => array(
					'type'    => 'number',
					
				),
				// Meta attributes.
				'secondContentfontSizeType'                   => array(
					'type'    => 'string',
					'default' => 'px',
				),
				'secondContentfontSize'                => array(
					'type'    => 'number',
					'default' => '30',
				),
				'secondContentfontSizeMobile'            => array(
					'type'    => 'number',
					'default' => '',
					
				),
				'secondContentfontSizeTablet'          => array(
					'type' => 'number',
					'default' => '',
				),
				'secondContentWeight'          => array(
					'type' => 'number',
					'default' => '',
				),
				'secondContentStyle'              => array(
					'type'    => 'string',
					'default' => '',
				),
				'secondContentLetter'              => array(
					'type' => 'number',
					'default' => '',
				),
				'secondContentUpper'              => array(
					'type' => 'boolean',
				),
				'metaColor'          => array(
					'type'    => 'string',
					'default' => '',
					
				),
				'linkColor'              => array(
					'type' => 'string',
					'default' => '',

				),
				'sepaColor'        => array(
					'type' => 'string',
					'default' => '',
				),
				'metaLineHeightMobile'        => array(
					'type' => 'number',
					'default' => '',
				),
			
				// Excerpt Attributes.
				'PostmarginBottomType'                => array(
					'type'    => 'string',
					'default' => 'px',
				),
				'PostmarginBottom'             => array(
					'type'    => 'number',
					'default' => '',
				),
				'PostmarginBottomMobile'         => array(
					'type'    => 'number',
					'default' => '',
				),
				'PostmarginBottomTablet'       => array(
					'type' => 'number',
				),
				'PostmarginTopType'       => array(
					'type' => 'string',
					'default' => 'px'
				),
				'PostmarginTop'           => array(
					'type'    => 'number',
					'default' => '',
				),
				'PostmarginTopMobile'           => array(
					'type' => 'number',
				),
				'PostmarginTopTablet'           => array(
					'type' => 'number',
				),
				'marginRightType'       => array(
					'type'    => 'number',
					'default' => 'px'
					
				),
				'PostmarginRight'           => array(
					'type' => 'number',
					'default' => ''
				),
				'PostmarginRightMobile'     => array(
					'type' => 'number',
				),
				'PostmarginRightTablet'     => array(
					'type' => 'number',
				),
				'PostmarginLeftType'      => array(
					'type'    => 'string',
					'default' => 'px',
				),
				'PostmarginLeft'     => array(
					'type'    => 'number',
					'default' => '',
				),
				'PostmarginLeftMobile'     => array(
					'type'    => 'number',
					'default' => '',
				),
				'PostmarginLeftTablet'     => array(
					'type'    => 'number',
					'default' => '',
				),
				'backgroundPostContent' =>array(
					'type'=>'string',
					'default'=>''
				),
				'containerShadowColor' =>array(
					'type'=>'string',
					'default'=>''
				),
				'containerShadowBlur' =>array(
					'type'=>'string',
					'default'=>''
				),
				'containerShadowHorizontal' =>array(
					'type'=>'string',
					'default'=> ' '

				),
				'containerShadowVertical' =>array(
					'type'=>'string',
					'default'=> ' '

				),
				'containerShadowPosition' =>array(
					'type'=>'string',
					'default'=> ' '

				),
				'postSpacingType' =>array(
					'type'=>'string',
					'default'=> 'px'

				),
				'postSpacing' =>array(
					'type'=>'number',
					'default'=> ' '
				),
				'postSpacingMobile' =>array(
					'type'=>'number',
					'default'=> ' '

				),
				'postSpacingTablet' =>array(
					'type'=>'number',
					'default'=> ' '
				),
				
				// CTA attributes.
				'buttonfontSizeType'          => array(
					'type'    => 'string',
					'default' => 'px',
				),
				'buttonfontSize'              => array(
					'type' => 'number',
				),
				'buttonfontSizeMobile'        => array(
					'type' => 'number',
				),
				'buttonfontSizeTablet'        => array(
					'type' => 'number',
				),
				' buttonWeight'               => array(
					'type' => 'number',
				),
				'buttonStyle'                 => array(
					'type' => 'string',
				),
				'buttonLetter'                => array(
					'type' => 'number',
				),
				'buttonUpper'                 => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'buttonSpacingType'           => array(
					'type'    => 'string',
					'default' => 'px',
				),
				'buttonSpacing'               => array(
					'type' => 'number',
				),
				'buttonSpacingMobile'         => array(
					'type' => 'number',
				),
				'buttonSpacingTablet'         => array(
					'type' => 'number',
				),
				'borderType'                  => array(
					'type'    => 'string',
					'default' => 'solid',
				),
				' buttonPaddingType'          => array(
					'type'    => 'string',
					'default' => 'px',
				),
				'buttonPadding'               => array(
					'type' => 'number',
				),
				'buttonPaddingMobile'         => array(
					'type' => 'number',
				),
				'buttonPaddingTablet'         => array(
					'type' => 'number',
				),
				//tags Style
				'tagsfontSizeType'            => array(
					'type'    => 'string',
					'default' => 'px',
				),
				'tagsfontSize'                => array(
					'type' => 'number',
				),
				'tagsfontSizeMobile'          => array(
					'type' => 'number',
				),
				'tagsfontSizeTablet'          => array(
					'type' => 'number',
				),
				'tagsWeight'                  => array(
					'type' => 'number',
				),
				'tagsStyle'                   => array(
					'type' => 'string',
				),
				'tagsLetter'                  => array(
					'type' => 'string',
				),
				'tagsUpper'                   => array(
					'type' => 'string',
				),
				'tagColor' => array(
					'type'=>'string',

				),
				'hoverTag' =>array(
					'type'=>'string',
				),


				// Spacing Attributes.
			
				'excerptType'                 => array(
					'type'    => 'string',
					'default' => 'Dots',
				),
				// Exclude Current Post.
				'currentPost'                 => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'offsetNum'                   => array(
					'type'    => 'number',
					'default' => 0,
				),
				'postFilter'                  => array(
					'type' => 'string',
				),
				//carousel
				'Carousel'                    => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'Autoplay'                    => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'slideToScroll'               => array(
					'type'    => 'number',
					'default' => 1,
				),
				'autoplaySpeed'               => array(
					'type'    => 'number',
					'default' => 5000,
				),
				'centerMode'                  => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'slideSpacing'                => array(
					'type'    => 'number',
					'default' => 15,
				),
				'navigationDots'              => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'navigationArrow'             => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'arrowPosition'               => array(
					'type'    => 'number',
					'default' => 0,
				),
				//image style
				'overlayColor' =>array(
					'type'=>'string',
					'default' =>'transparent'
				),

				'saturation'                  => array(
					'type'    => 'number',
					'default' => '100',
				),
				'hue'                         => array(
					'type'    => 'number',
					'default' => '0',
				),
				'blur' =>array(
					'type'=>'number',
					'default'=> ''
				),
				'bright' =>array(
					'type'=>'number',
					'default'=> ''
				),
				'contrast' =>array(
					'type'=>'number',
					'default'=> ''
				),
			
				
				'currentPage'                 => array(
					'type'    => 'number',
					'default' => 0,
				),
				'classMigrate'                => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'columns'                     => array(
					'type'    => 'number',
					'default' => 3,
				),
				'mcolumns'                    => array(
					'type'    => 'number',
					'default' => 2,
				),
				'tcolumns'                    => array(
					'type'    => 'number',
					'default' => 1,
				),
				'thumbnail'                   => array(
					'type'    => 'string',
					'default' => 'cover',
				),
				'thumbnailMobile'             => array(
					'type'    => 'string',
					'default' => 'cover',
				),
				'thumbnailTablet'             => array(
					'type'    => 'string',
					'default' => 'cover',
				),	
			);
		}
		/**
		 * Renders the post grid block on server.
		 *
		 * @param array $attributes Array of block attributes.
		 *
		 * @since 0.0.1
		 */
		public function post_callback( $attributes ) {
			// Render query.
			$query = PBG_Blocks_Helper::get_query_posts( $attributes );
			// Cache the settings.
			 if ( $attributes['layoutValue']==="even" ) {
			
			self::$grid_settings['grid'][ $attributes['block_id'] ] = $attributes;
			 }
			 if($attributes['layoutValue']==="masonry"){
				self::$grid_settings['masonry'][ $attributes['block_id'] ] = $attributes; 
			 }
			 if($attributes['Carousel']){
				self::$grid_settings['carousel'][ $attributes['block_id'] ] = $attributes; 
			 }
	
			ob_start();
			$this->get_post_html( $attributes, $query );
			// Output the post markup.
			return ob_get_clean();
		}
		/**
		 * Renders the post grid block on server.
		 *
		 * @param array  $attributes Array of block attributes.
		 *
		 * @param object $query WP_Query object.

		 * @since 0.0.1
		 */
		public function get_post_html( $attributes, $query ) {
			if(!$attributes['gridCheck']){
				$attributes['columns']=$attributes['tcolumns']=$attributes['mcolumns'] = 1;
			}
			if ( isset( self::$grid_settings['masonry'] )   ){
				$wrap      = array(
					'premium-blog-wrap',
					'post__columns-' . $attributes['columns'],
					'post__columns-tablet-' . $attributes['tcolumns'],
					'post__columns-mobile-' . $attributes['mcolumns'],
					
					);
			}
			if ( isset( self::$grid_settings['grid'] )   ){
				$wrap      = array(
					'premium-blog-wrap',
					'post__columns-' . $attributes['columns'],
					'post__columns-tablet-' . $attributes['tcolumns'],
					'post__columns-mobile-' . $attributes['mcolumns'],
					'equal-Height',
					'premium-blog-even'
					);
			
				}
				if ( isset( self::$grid_settings['carousel'] )   ){
					$wrap      = array(
						'premium-blog-wrap',	'equal-Height','premium-blog-even'
						
						);
				
					}
				
			
			
			
				$block_id  = 'premium-blog' . $attributes['block_id'];
				$outerwrap = array(
					'premium-blog',
				'premium-blog-' . $attributes['block_id'],
				'premium-block-' . $attributes['block_id']); ?>
			<div class="<?php echo esc_html( implode( ' ', $outerwrap ) ); ?>">
				<div class="<?php echo esc_html( implode( ' ', $wrap ) ); ?>">
					<?php
										$this->posts_articles_markup( $query, $attributes );
						?>
					
					
			</div>
			<?php if ( $attributes['pagination'] ) : ?>
					<div class="premium-blog-footer">
						<?php PBG_Blocks_Helper::render_pagination( $attributes ); ?>
					</div>
					
					<?php endif; ?>
		
			</div>
			<?php
		}
		/**
		 * Renders the post post pagination on server.
		 *
		 * @param object $query WP_Query object.
		 * @param array  $attributes Array of block attributes.
		 * @since 1.18.1
		 */



		/**
		 * Sends the Post pagination markup to edit.js
		 *
		 * @since 1.14.9
		 */
		/*
		   * Sends the Posts to Masonry AJAX.
		   *
		   * @since 1.18.1
		   */
		/**
		 * Render Posts HTML for Masonry Pagination.
		 *
		 * @param object $query WP_Query object.
		 * @param array  $attributes Array of block attributes.
		 * @since 1.18.1
		 */
		public function posts_articles_markup( $query, $attributes ) {
			while ( $query->have_posts() ) {
				$query->the_post();
				// Filter to modify the attributes based on content requirement.
				$attributes = apply_filters( 'premium_post_alter_attributes', $attributes, get_the_ID() );
				?>
					<div class="premium-blog-post-outer-container">
						<div class="premium-blog-post-container">
						<?php $this->render_image( $attributes ); ?>

						<div class="premium-blog-content-wrapper empty-thumb equal-Height">
						<div class="premium-blog-content-wrapper-inner">
						<div class="premium-blog-inner-container">
						<div class="premium-blog-entry-container">						
							<?php $this->render_post_title( $attributes ); ?>
								<?php $this->render_meta( $attributes ); ?>
							</div>
						</div>
								<?php $this->get_post_content( $attributes ); ?>
								<?php if ( $attributes['displayPostTags'] && has_tag() ) : ?>
								<div class="premium-blog-post-tags-container">
									<i class="fa fa-tags fa-fw"></i>
									<?php the_tags( ' ', ', ' ); ?>
								</div>
								<?php endif; ?>
						</div>
						
						</div>
							
							
						</div>
					</div>
					<?php
			}
			wp_reset_postdata();
		}
		/**
		 * Renders the post masonry related script.
		 *
		 * @since 0.0.1
		 */
		/**
		 * Render Image HTML.
		 *
		 * @param array $attributes Array of block attributes.
		 *
		 * @since 0.0.1
		 */
		public function render_image( $attributes ) {
			if ( ! $attributes['featuredImage'] ) {
				return;
			}
			if ( ! get_the_post_thumbnail_url() ) {
				return;
			}
			$attributes['featuredImage']
						= array(
							'id' => get_post_thumbnail_id(),
						);
						$wrapImage = array(
							'premium-blog-thumbnail-container',
							'premium-blog-'.
						 $attributes['hoverEffect'].
						'-effect');
			?>

		<div class="premium-blog-thumb-effect-wrapper">
	
			<div class="<?php echo esc_html( implode( ' ', $wrapImage ) ); ?>">
				<?php echo wp_get_attachment_image( get_post_thumbnail_id(), $attributes['imageSize'] ); ?>
		
			</div>
			<div class='premium-blog-thumbnail-overlay'>
			<a href="<?php the_permalink(); ?>">
						
					</a>
			</div>
		
		</div>
			<?php
		}
		/**
		 * Render Post Title HTML.
		 *
		 * @param array $attributes Array of block attributes.
		 *
		 * @since 0.0.1
		 */
		/**
		 * Render Post Meta - Author HTML.
		 *
		 * @param array $attributes Array of block attributes.
		 *
		 * @since 1.14.0
		 */
		public function render_meta_author( $attributes ) {
			if ( ! $attributes['displayPostAuthor'] ) {
				return;
			}
			?>
			<span class="premium-blog-post-author premium-blog-meta-data">
				<span class="dashicons-admin-users dashicons"></span>
				<?php the_author_posts_link(); ?>
			</span>
			<span class="premium-blog-meta-separtor">.</span>
			<?php
		}
		/**
		 * Render Post Meta - Date HTML.
		 *
		 * @param array $attributes Array of block attributes.
		 *
		 * @since 1.14.0
		 */
		public function render_meta_date( $attributes ) {
			if ( ! $attributes['displayPostDate'] ) {
				return;
			}
			global $post;
			?>
			<div class="premium-blog-post-time premium-blog-meta-data">
			<time datetime="<?php echo esc_attr( get_the_date( 'c', $post->ID ) ); ?>"
    class="premium-blog-post-time premium-blog-meta-data">
    <span class="dashicons-calendar dashicons"></span>
    <?php echo esc_html( get_the_date( '', $post->ID ) ); ?>
</time>
<span class="premium-blog-meta-separtor">.</span>

			</div>

<?php
		}
		/**
		 * Render Post Meta - Comment HTML.
		 *
		 * @param array $attributes Array of block attributes.
		 *
		 * @since 1.14.0
		 */
		public function render_meta_comment( $attributes ) {
			if ( ! $attributes['displayPostComment'] ) {
				return;
			}
			?>
			<div class='premium-blog-post-comments premium-blog-meta-data'>
				<span class="premium-post__comment">
					<span class="dashicons-admin-comments dashicons"></span>
					<?php comments_number(); ?>
				</span>
				<span class="premium-blog-meta-separtor">.</span>

			</div>
			<?php
		}
		/**
		 * Render Post Meta - Comment HTML.
		 *
		 * @param array $attributes Array of block attributes.
		 *
		 * @since 1.14.0
		 */
		public function render_meta_taxonomy( $attributes ) {
			if ( ! $attributes['displayPostCategories'] ) {
				return;
			}
			global $post;
			$terms = get_the_terms( $post->ID, 'category' );
			if ( is_wp_error( $terms ) ) {
				return;
			}
			if ( ! isset( $terms[0] ) ) {
				return;
			}
			?>
				<div class="premium-blog-post-categories premium-blog-meta-data">
					<i class="fa fa-align-left fa-fw"></i>
					<?php the_category( ', ' ); ?>

				</div>
				<?php
		}
		/**
		 * Render Post Meta HTML.
		 *
		 * @param array $attributes Array of block attributes.
		 *
		 * @since 0.0.1
		 */
		public function render_meta( $attributes ) {
			global $post;
			do_action( 'pbg_single_post_before_meta', get_the_ID(), $attributes );
			$meta_sequence = array( 'author', 'date', 'comment', 'taxonomy' );
			// $meta_sequence = apply_filters("uagb_single_post_meta_sequence", $meta_sequence, get_the_ID(), $attributes);
			?>
				<div class="premium-blog-entry-meta">
					<?php
							foreach ( $meta_sequence as $key => $sequence ) {
								switch ( $sequence ) {
									case 'author':
												$this->render_meta_author( $attributes );
										break;
									case 'date':
													$this->render_meta_date( $attributes );
										break;
									case 'comment':
										$this->render_meta_comment( $attributes );
										break;
									case 'taxonomy':
										$this->render_meta_taxonomy( $attributes );
										break;
									default:
										break;
								}
							}
							?>
				</div>
				<?php
				  do_action( 'pbg_single_post_after_meta', get_the_ID(), $attributes );
		}


		public function render_post_title( $attributes ) {
					?>
					<div class="premium-blog-entry-title">
					<h2>
					<a href="<?php the_permalink(); ?>">
						<?php esc_html( the_title() ); ?>
					</a>
					</h2>
					
					</div>
					
					<?php
		}

		/**
		 * Render Post Excerpt HTML.
		 *
		 * @param array $attributes Array of block attributes.
		 *
		 * @since 0.0.1
		 */

		protected function get_post_content( $attributes ) {
			if ( ! $attributes['displayPostContent'] ) {
				return;
			}

			$src = $attributes['displayPostExcerpt'];

			$excerpt_type = $attributes['excerptType'];
			$excerpt_text = $attributes['readMoreText'];

			$length = $attributes['excerptLength'];

			// Get post content.
			if ( 'Post Excerpt' === $src ) :
						echo '<p class="premium-blog-post-content">';
			endif;
			echo wp_kses_post( $this->render_post_content( $src, $length, $excerpt_type, $excerpt_text ) );
			if ( 'Post Excerpt' === $src ) :
						echo '</p>';
			endif;

			// Get post excerpt.
			if ( 'Link' === $excerpt_type ) :
						$this->get_post_excerpt_link( $excerpt_text );
			endif;
		}
		public function render_post_content( $source, $excerpt_length, $cta_type, $read_more ) {
			$excerpt = '';

			if ( 'Post Full Content' === $source ) {

						// Print post full content.
				the_content();
			} else {
				$excerpt = trim( get_the_excerpt() );

				$words = explode( ' ', $excerpt, $excerpt_length + 1 );

				if ( count( $words ) > $excerpt_length ) {
					if ( ! has_excerpt() ) {
						array_pop( $words );
						if ( 'dots' === $cta_type ) {
							array_push( $words, '…' );
						}
					}
				}

				$excerpt = implode( ' ', $words );
			}

			return $excerpt;
		}

		public static function get_post_excerpt_link( $read_more ) {
			if ( empty( $read_more ) ) {
				return;
			}

			echo '<div class="premium-blog-excerpt-link-wrap">';
			echo '<a href="' . esc_url( get_permalink() ) . '" class="premium-blog-excerpt-link elementor-button">';
			echo wp_kses_post( $read_more );
			echo '</a>';
			echo '</div>';
		}
		public static function get_tags() {
			$tags = get_tags();

			$options = array();

			if ( ! empty( $tags ) && ! is_wp_error( $tags ) ) {
				foreach ( $tags as $tag ) {
					$options[ $tag->term_id ] = $tag->name;
				}
			}
			return $options;
		}
	
		/**
		 * Render Post CTA button HTML.
		 *
		 * @param array $attributes Array of block attributes.
		 *
		 * @since 0.0.1
		 */

		public function add_post_dynamic_script() {

			if ( isset( self::$grid_settings['masonry'] )   ) {
				foreach ( self::$grid_settings['masonry'] as $key => $value ) {
					?>
					<script type="text/javascript" id="Post_Masnory">
					jQuery( document ).ready( function( $ ) {

				$( '.premium-blog-wrap' ).each( function() {

	
					var selector 	= $(this);


	


				var masonryArgs = {
					itemSelector	: '.premium-blog-post-outer-container',
					percentPosition : true,
					layoutMode		: 'masonry',
				};

				var $isotopeObj = {};

				selector.imagesLoaded( function() {

					$isotopeObj = selector.isotope( masonryArgs );

					$isotopeObj.imagesLoaded().progress(function() {
						$isotopeObj.isotope("layout");
					});

					selector.find('.premium-blog-post-outer-container').resize( function() {
						$isotopeObj.isotope( 'layout' );
									});
								});

				});
				});
					</script>
					<?php
				}
			}

			if ( isset( self::$grid_settings['carousel'] )  ) {
				foreach ( self::$grid_settings['carousel'] as $key => $value ) {

					$dots         = ( 'dots' === $value['navigationDots'] || 'arrows_dots' === $value['navigationDots'] ) ? true : false;
					$arrows       = ( 'arrows' === $value['navigationArrow'] || 'arrows_dots' === $value['navigationArrow'] ) ? true : false;
					$tcolumns     = ( isset( $value['tcolumns'] ) ) ? $value['tcolumns'] : 2;
					$mcolumns     = ( isset( $value['mcolumns'] ) ) ? $value['mcolumns'] : 1;
					$is_rtl       = is_rtl();
				

					// ?>





								<script type="text/javascript" id="Post_Carousel">
								

								jQuery( document ).ready( function( $ ) {

										var cols = parseInt( '<?php echo esc_html( $value['columns'] ); ?>' );
									var $scope = $( '.premium-blog' ).find( '.premium-blog-wrap' );

									if ( cols >= $scope.children().length ) {
										return;
									}
									var setting = {
									'slidesToShow' : cols,
									'slidesToScroll' : 1,
									'autoplaySpeed' : <?php echo esc_html( $value['autoplaySpeed'] ); ?>,
									'autoplay' : Boolean( '<?php echo esc_html( $value['Autoplay'] ); ?>' ),
									'arrows' : Boolean( '<?php echo esc_html($value['navigationArrow'] ); ?>' ),
									'dots' : Boolean( '<?php echo esc_html($value['navigationDots'] ); ?>' ),
									'centerMode' :  Boolean( '<?php echo esc_html($value['centerMode'] ); ?>' ),
								
									'responsive' : [
										{
											'breakpoint' : 1024,
											'settings' : {
												'slidesToShow' : <?php echo esc_html( $tcolumns ); ?>,
												'slidesToScroll' : 1,
											}
										},
										{
											'breakpoint' : 767,
											'settings' : {
												'slidesToShow' : <?php echo esc_html( $mcolumns ); ?>,
												'slidesToScroll' : 1,
											}
										}
									]

													};
									$scope.imagesLoaded( function() {
									$scope.slick(
										setting
									);
									});
								})
								</script>

				
					<?php
				}
			}
		}

			
		
		/**
		 * Render Complete Box Link HTML.
		 *
		 * @param array $attributes Array of block attributes.
		 *
		 * @since 1.7.0
		 */
	}
	/**
	 *  Prepare if class 'PBG_Post' exist.
	 *  Kicking this off by calling 'get_instance()' method
	 */
	PBG_Post::get_instance();
}
