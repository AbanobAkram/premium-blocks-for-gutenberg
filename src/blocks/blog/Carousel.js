const { decodeEntities } = wp.htmlEntities;
const { dateI18n, format, __experimentalGetSettings } = wp.date;
import Slider from "react-slick";

import Meta from "./meta";

import Excerpt from "./Excerpt";
import Button from "./Button";
import Image from "./Image";
const { __ } = wp.i18n;
let prevArrow, nextArrow;
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",left:$arr }}
      onClick={onClick}
    />
  );
}
class Carousel extends React.Component {
  constructor() {
    super(...arguments);
  }

  render() {
    const {
      attributes,
      className,
      latestPosts,
      block_id,
      categoriesList,
    } = this.props;

    const {
      blockID,
      DisplayTitle,
      DisplayDate,
      DisplayComment,
      DisplayExcert,
      DisplayAuthor,
      DisplayImage,
      DisplayTaxonomy,
      DisplayPostLink,
      newTab,
      borderWidth,
      ctaText,
      borderRadius,
      borderColor,
      vPadding,
      hPadding,
      categories,
      rowGap,
      imageSize,
      bgColor,
      contentPadding,
      contentPaddingMobile,
      gridCheck,
      equalHeight,
      numOfPosts,
      numOfColumns,
      offsetNum,
      currentPost,
      orderBy,
      order,
      featuredImage,
      hoverEffect,
      height,
      HeightU,

      rowGapUnit,
      columnGap,
      postPosition,
      displayPostContent,
      displayPostExcerpt,
      excerptType,
      fullWidth,
      readMoreText,
      displayPostAuthor,
      displayPostDate,
      displayPostCategories,
      displayPostComment,
      displayPostTags,
      filterTabs,
      getTabsFrom,
      tabLabel,
      filterPosition,
      linkNewTab,
      layoutValue,
      postFilter,
      sizeType,
      size,
      sizeMobile,
      sizeTablet,
      Carousel,
      Autoplay,
      slideToScroll,
      autoplaySpeed,
      centerMode,
      slideSpacing,
      navigationDots,
      columns,
      mcolumns,
      tcolumns,
      navigationArrow,
      arrowPosition,
    } = attributes;
    if (navigationArrow) {
      (prevArrow =
        '<a type="button" data-role="none" class="carousel-arrow carousel-prev" aria-label="Next" role="button" style=""><i class="fas fa-angle-left" aria-hidden="true"></i></a>'),
        (nextArrow =
          '<a type="button" data-role="none" class="carousel-arrow carousel-next" aria-label="Next" role="button" style=""><i class="fas fa-angle-right" aria-hidden="true"></i></a>');
    } else {
      prevArrow = nextArrow = "";
    }

    const settings = {
      dots: navigationDots,
      centerMode: centerMode,
      centerPadding: slideSpacing,
      infinite: true,
      autoplay: Autoplay,
      speed: autoplaySpeed,
      speed: autoplaySpeed,
      slidesToShow: columns,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      slidesToScroll: slideToScroll,
    };

    const lastDisplay = latestPosts.slice(offsetNum);

    return (
      <div className={`premium-blog`} id={`premium-blog-${blockID}`}>
    
          <Slider {...settings}>
            {lastDisplay.map((post, i) => (
              <div className={`premium-blog-post-outer-container premium-blog-even`} key={i}>
                <div
                  className={`premium-blog-post-container`}
                >
                  <Image post={post} attributes={attributes} />
                  <div className={`premium-blog-content-wrapper empty-thumb`}>
                    <div
                      className={`premium-blog-content-wrapper empty-thumb `}
                    >
                      <div className={`premium-blog-content-wrapper-inner`}>
                        <div className={`premium-blog-inner-container`}>
                          <div className="premium-blog-entry-container">
                            <div className="premium-blog-entry-title">
                              <h2>
                                <a href={post.link}>
                                  {undefined == post.title
                                    ? post.value
                                    : decodeEntities(
                                        post.title.rendered.trim()
                                      ) || __("(Untitled)")}
                                </a>
                              </h2>
                            </div>
                            <div className="premium-blog-entry-meta">
                              <Meta
                                post={post}
                                categoriesList={categoriesList}
                                attributes={attributes}
                              />
                            </div>
                          </div>
                        </div>
                        <Excerpt attributes={attributes} post={post} />
                        <Button attributes={attributes} post={post} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
    
    );
  }
}
export default Carousel;