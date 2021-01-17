import generateCSS from "./GenerateCss";
import generateCSSUnit from "./GenerateCssUnit";
function styling(props) {
  const {
    classMigrate,
    marginBottomType,
    marginBottomMobile,
    marginBottomTablet,
    marginBottom,
    columns,
    mcolumns,
    tcolumns,
    thumbnail,
    thumbnailMobile,
    thumbnailTablet,
    PostmarginBottomType,
    PostmarginBottom,
    PostmarginBottomMobile,
    PostmarginBottomTablet,
    PostmarginTopType,
    PostmarginTop,
    PostmarginTopMobile,
    PostmarginTopTablet,
    postSpacingType,
    postSpacing,
    postSpacingMobile,
    postSpacingTablet,
    postContentfontSizeType,
    postContentfontSize,
    postContentfontSizeMobile,
    postContentfontSizeTablet,
    PostmarginRightType,
    PostmarginRight,
    PostmarginRightMobile,
    PostmarginRightTablet,
    PostmarginLeftType,
    PostmarginLeft,
    PostmarginLeftMobile,
    PostmarginLeftTablet,
    postContentLetter,
    postContentStyle,
    postContentUpper,
    postContentWeight,
    backgroundPostContent,
    containerShadowColor,
    containerShadowBlur,
    containerShadowHorizontal,
    containerShadowVertical,
    containerShadowPosition,
    textColor,
    rowGap,
    rowGapUnit,
    columnGap,
    filterPosition,
    overlayColor,
    bright,
    contrast,
    saturation,
    blur,
    hue,
    firstContentfontSize,
    secondContentfontSizeMobile,
    secondContentfontSizeTablet,
    firstContentfontSizeType,
    firstContentWeight,
    firstContentStyle,
    firstContentUpper,
    firstContentLetter,
    typoColor,
    hoverColor,
    secondContentfontSize,
    secondContentfontSizeType,
    secondContentWeight,
    secondContentStyle,
    secondContentUpper,
    secondContentLetter,
    metaColor,
    linkColor,
    sepaColor,
    buttonfontSize,
    buttonfontSizeType,
    buttonWeight,
    buttonStyle,
    buttonUpper,
    buttonLetter,
    firstContentfontSizeTablet,
    buttonfontSizeMobile,
    buttonfontSizeTablet,
  } = props.attributes;
  const { latestPosts } = props;
  var selectors = {};
  var tablet_selectors = {};
  var mobile_selectors = {};
  selectors = {
    " .premium-blog-post-outer-container": {
      "margin-bottom": `${rowGap + rowGapUnit};`,
      "padding-right": `calc( ${columnGap}px/2 );`,
      "padding-left": `calc( ${columnGap}px/2 );`,
    },
    " .premium-blog-post-outer-container .premium-blog-post-container .premium-blog-content-wrapper ": {
      "text-align": `${filterPosition}`,
    },
    " .premium-blog-thumbnail-overlay": {
      background: `${overlayColor}`,
    },
    " .premium-blog-post-outer-container:hover img": {
      filter: `brightness( ${bright}% ) contrast( ${contrast}% ) saturate( ${saturation}% ) blur( ${blur}px ) hue-rotate( ${hue}deg )`,
    },
    " .premium-blog-post-container .premium-blog-entry-title h2": {
      "margin-bottom": generateCSSUnit(marginBottom, marginBottomType),
      "font-size": `${firstContentfontSize}${firstContentfontSizeType};`,
      "font-weight": `${firstContentWeight};`,
      "font-style": `${firstContentStyle};`,
      "text-transform": `${firstContentUpper ? "uppercase" : null} ;`,
      "letter-spacing": `${firstContentLetter}px ;`,
      color: `${typoColor};`,
    },
    ".premium-blog-entry-title a:hover": {
      color: `${hoverColor};`,
    },
    " .premium-blog-even": {
      width: `${100 / columns}%`,
      "margin-bottom": `${20}px`,
    },
    " .premium-blog-post-container .premium-blog-content-wrapper-inner p": {
      "font-size": `${postContentfontSize}${postContentfontSizeType} !important`,
      "margin-bottom": `${PostmarginBottom} ${PostmarginBottomType} !important`,
      "margin-top": generateCSSUnit(PostmarginTop, PostmarginTopType),
      "margin-right": `${PostmarginRight} ${PostmarginRightType}`,
      "margin-left": `${PostmarginLeft} ${PostmarginLeftType}`,
      " padding": `${postSpacing}${postSpacingType}`,
      "font-weight": `${postContentWeight} !important;`,
      "font-style": `${postContentStyle};`,
      "text-transform": `${postContentUpper ? "uppercase" : null} ;`,
      "letter-spacing": `${postContentLetter}px ;`,
      " color": `${textColor};`,
      "background-color": `${backgroundPostContent};`,
      "box-shadow": `${containerShadowHorizontal}px ${containerShadowVertical}px ${containerShadowBlur}px ${containerShadowColor} ${containerShadowPosition}`,
    },
    " .premium-blog-meta-data": {
      "font-size": `${secondContentfontSize}${secondContentfontSizeType};`,
      "font-weight": `${secondContentWeight};`,
      "font-style": `${secondContentStyle};`,
      "text-transform": `${secondContentUpper ? "uppercase" : null} ;`,
      "letter-spacing": `${secondContentLetter}px ;`,
      color: `${metaColor};`,
    },
    " .premium-blog-meta-data:hover": {
      color: `${linkColor}`,
    },
    " .premium-blog-meta-separtor": {
      color: `${sepaColor};`,
    },
    " .premium-blog-excerpt-link-wrap .premium-blog-excerpt-link": {
      "font-size": `${buttonfontSize}${buttonfontSizeType};`,
      "font-weight": `${buttonWeight};`,
      "font-style": `${buttonStyle};`,
      "text-transform": `${buttonUpper ? "uppercase" : null} ;`,
      "letter-spacing": `${buttonLetter}px ;`,
    },
  };
  mobile_selectors = {
    " .premium-blog-post-outer-container": {
      "margin-bottom": `${rowGap + rowGapUnit};`,
      "padding-right": `calc( ${columnGap}px/2 );`,
      "padding-left": `calc( ${columnGap}px/2 );`,
    },
    " .premium-blog-content-wrapper ": {
      "text-align": `${filterPosition}`,
    },
    " .premium-blog-thumbnail-overlay": {
      background: `${overlayColor}`,
    },
    " .premium-blog-post-outer-container:hover img": {
      "object-fit": `${thumbnail}`,
    },
    " .premium-blog-post-outer-container:hover img": {
      filter: `brightness( ${bright}% ) contrast( ${contrast}% ) saturate( ${saturation}% ) blur( ${blur}px ) hue-rotate( ${hue}deg )`,
    },
    " .premium-blog-post-container .premium-blog-entry-title h2": {
      "margin-bottom": generateCSSUnit(marginBottomMobile, marginBottomType),
      "font-size": `${firstContentfontSizeTablet}${firstContentfontSizeType};`,
      "font-weight": `${firstContentWeight};`,
      "font-style": `${firstContentStyle};`,
      "text-transform": `${firstContentUpper ? "uppercase" : null} ;`,
      "letter-spacing": `${firstContentLetter}px ;`,
      color: `${typoColor};`,
    },
    ".premium-blog-entry-title a:hover": {
      color: `${hoverColor};`,
    },
    " .premium-blog-even": {
      width: `${100 / mcolumns}%`,
    },
    " .premium-blog-post-outer-container .premium-blog-content-wrapper-inner p": {
      "font-size": `${postContentfontSizeMobile}${postContentfontSizeType} !important`,
      "margin-bottom": `${PostmarginBottomMobile} ${PostmarginBottomType}`,
      "margin-top": `${PostmarginTopMobile}${PostmarginTopType}`,
      "margin-right": `${PostmarginRightMobile} ${PostmarginRightType}`,
      "margin-left": `${PostmarginLeftMobile} ${PostmarginLeftType}`,
      padding: generateCSSUnit(postSpacingMobile, postSpacingType),
      "font-weight": `${postContentWeight} !important;`,
      "font-style": `${postContentStyle};`,
      "text-transform": `${postContentUpper ? "uppercase" : null} ;`,
      "letter-spacing": `${postContentLetter}px ;`,
      color: `${textColor};`,
      "background-color": `${backgroundPostContent};`,
      "box-shadow": `${containerShadowHorizontal}px ${containerShadowVertical}px ${containerShadowBlur}px ${containerShadowColor} ${containerShadowPosition}`,
    },
    " .premium-blog-meta-data": {
      "font-size": `${secondContentfontSizeMobile}${secondContentfontSizeType};`,
      "font-weight": `${secondContentWeight};`,
      "font-style": `${secondContentStyle};`,
      "text-transform": `${secondContentUpper ? "uppercase" : null} ;`,
      "letter-spacing": `${secondContentLetter}px ;`,
      color: `${metaColor};`,
    },
    " .premium-blog-meta-data:hover": {
      color: `${linkColor}`,
    },
    " .premium-blog-meta-separtor": {
      color: `${sepaColor};`,
    },
    " .premium-blog-excerpt-link-wrap .premium-blog-excerpt-link": {
      "font-size": `${buttonfontSizeMobile}${buttonfontSizeType};`,
      "font-weight": `${buttonWeight};`,
      "font-style": `${buttonStyle};`,
      "text-transform": `${buttonUpper ? "uppercase" : null} ;`,
      "letter-spacing": `${buttonLetter}px ;`,
    },
    " .premium-blog-post-outer-container:hover img": {
      "object-fit": `${thumbnailMobile}`,
    },
  };
  tablet_selectors = {
    " .premium-blog-post-outer-container": {
      "margin-bottom": `${rowGap + rowGapUnit};`,
      "padding-right": `calc( ${columnGap}px/2 );`,
      "padding-left": `calc( ${columnGap}px/2 );`,
    },
    ".premium-blog-content-wrapper ": {
      "text-align": `${filterPosition}`,
    },
    ".premium-blog-thumbnail-overlay": {
      background: `${overlayColor}`,
    },
    ".premium-blog-post-outer-container:hover img": {
      filter: `brightness( ${bright}% ) contrast( ${contrast}% ) saturate( ${saturation}% ) blur( ${blur}px ) hue-rotate( ${hue}deg )`,
    },
    " .premium-blog-post-container .premium-blog-entry-title h2": {
      "margin-bottom": generateCSSUnit(marginBottomTablet, marginBottomType),
      "font-size": `${firstContentfontSizeTablet}${firstContentfontSizeType};`,
      "font-weight": `${firstContentWeight};`,
      "font-style": `${firstContentStyle};`,
      "text-transform": `${firstContentUpper ? "uppercase" : null} ;`,
      "letter-spacing": `${firstContentLetter}px ;`,
      color: `${typoColor};`,
    },
    " .premium-blog-entry-title a:hover": {
      color: `${hoverColor};`,
    },
    " .premium-blog-post-container .premium-blog-content-wrapper-inner p": {
      "font-size": `${postContentfontSizeMobile}${postContentfontSizeType} !important;`,
      "margin-bottom": `${PostmarginBottomTablet} ${PostmarginBottomType};`,
      "margin-top": `${PostmarginTopTablet}${PostmarginTopType};`,
      "margin-right": `${PostmarginRightTablet} ${PostmarginRightType};`,
      "margin-left": `${PostmarginLeftTablet} ${PostmarginLeftType};`,
      padding: generateCSSUnit(postSpacingTablet, postSpacingType),
      "font-weight": `${postContentWeight} !important;`,
      "font-style": `${postContentStyle};`,
      "text-transform": `${postContentUpper ? "uppercase" : null} ;`,
      "letter-spacing": `${postContentLetter}px ;`,
      color: `${textColor};`,
      "background-color": `${backgroundPostContent};`,
      "box-shadow": `${containerShadowHorizontal}px ${containerShadowVertical}px ${containerShadowBlur}px ${containerShadowColor} ${containerShadowPosition}`,
    },
    " .premium-blog-even": {
      width: `${100 / tcolumns}%`,
    },
    " .premium-blog-meta-data": {
      "font-size": `${secondContentfontSizeTablet}${secondContentfontSizeType};`,
      "font-weight": `${secondContentWeight};`,
      "font-style": `${secondContentStyle};`,
      "text-transform": `${secondContentUpper ? "uppercase" : null} ;`,
      "letter-spacing": `${secondContentLetter}px ;`,
      color: `${metaColor};`,
    },
    " .premium-blog-meta-data:hover": {
      color: `${linkColor}`,
    },
    ".premium-blog-meta-separtor": {
      color: `${sepaColor};`,
    },
    " .premium-blog-excerpt-link-wrap .premium-blog-excerpt-link": {
      "font-size": `${buttonfontSizeTablet}${buttonfontSizeType};`,
      "font-weight": `${buttonWeight};`,
      "font-style": `${buttonStyle};`,
      "text-transform": `${buttonUpper ? "uppercase" : null} ;`,
      "letter-spacing": `${buttonLetter}px ;`,
    },
    " .premium-blog-post-outer-container:hover img": {
      "object-fit": `${thumbnailTablet}`,
    },
  };

  let styling_css = "";
  let id = `#premium-blog-${props.clientId}`;
  if (classMigrate) {
    id = `.premium-blog-${props.clientId}`;
  }
  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");

  return styling_css;
}
export default styling;
