import generateCSS from './../icon-list/generateCss'
import generateCSSUnit from './../icon-list/generateCssUnit'

function styling(props) {

    const {
        classMigrate,
        stripeWidth,
        stripeHeight,
        stripeTopSpacing,
        stripeBottomSpacing,
        titleColor,
        titleWeight,
        titleLetter,
        titleUpper,
        titleStyle,
        titlefontSize,
        titlefontSizeMobile,
        titlefontSizeTablet,
        titlefontSizeType,
        titleshadowBlur,
        titleshadowColor,
        titleshadowHorizontal,
        titleshadowVertical,
        stripeColor,
        titleborderType,
        titleborderRadius,
        titleborderWidth,
        titleborderColor,
        BGColor,
        lineColor,
        triangleColor,
        iconColor,
        iconSize,
        iconSizeType,
        iconSizeTablet,
        iconSizeMobile,
        iconborderType,
        iconborderRadius,
        iconborderWidth,
        iconborderColor,
        iconshadowBlur,
        iconshadowColor,
        iconshadowHorizontal,
        iconshadowVertical,
        titleMargin,
        titleMarginType,
        titleMarginMobile,
        titleMarginTablet,
        titlePadding,
        titlePaddingTablet,
        titlePaddingType,
        titlePaddingMobile,
        iconBGColor,
        iconPadding,
        iconPaddingType,
        iconPaddingMobile,
        iconPaddingTablet,
        iconSpacing,
        iconSpacingType,
        iconSpacingMobile,
        iconSpacingTablet,
        strokeColor,
        strokeFull,
        BackText,
        textWidth,
        textBackColor,
        textBackfontSizeType,
        textBackfontSize,
        textBackfontSizeMobile,
        textBackfontSizeTablet,
        textBackWeight,
        textBackStyle,
        textBackLetter,
        textBackUpper,
        textBackshadowColor,
        textBackshadowBlur,
        textBackshadowHorizontal,
        textBackshadowVertical,
        horizontalText,
        verticalText,
        blend,
        z_index,
        rotateText
    } = props.attributes

    var selectors = {}
    var tablet_selectors = {}
    var mobile_selectors = {}

    selectors = {

        " .premium-title-bg-text:before": {
            "content": BackText,
            "position": "absolute",
            "top": `${verticalText}px`,
            "left": `${horizontalText}px`,
            "color": textBackColor,
            "width": textWidth,
            "transform": `rotate(${rotateText}deg)`,
            "font-size": generateCSSUnit(textBackfontSize, textBackfontSizeType),
            "font-weight": textBackWeight,
            "font-style": textBackStyle,
            "text-transform": textBackUpper ? "uppercase" : "none",
            "letter-spacing": textBackLetter + 'px',
            "text-shadow": `${textBackshadowHorizontal}px ${textBackshadowVertical}px ${textBackshadowBlur}px ${textBackshadowColor}`,
            "mix-blend-mode": blend,
            "z-index": z_index

        },
        " .premium-title-style7-stripe__wrap": {
            "margin-top": generateCSSUnit(stripeTopSpacing, 'px'),
            "margin-bottom": generateCSSUnit(stripeBottomSpacing, 'px'),
        },
        " .premium-title-style7-stripe-span": {
            "width": generateCSSUnit(stripeWidth, 'px'),
            "height": generateCSSUnit(stripeHeight, 'px'),
            "background-color": stripeColor
        },
        " .premium-title-header": {
            "color": titleColor + "!important",
            "font-size": generateCSSUnit(titlefontSize, titlefontSizeType),
            "letter-spacing": titleLetter + "px",
            "text-transform": titleUpper ? "uppercase" : "none" + "!important",
            "font-style": titleStyle + "!important",
            "font-weight": titleWeight + "!important",
            "text-shadow": `${titleshadowHorizontal}px ${titleshadowVertical}px ${titleshadowBlur}px ${titleshadowColor}`
        },
        " .premium-title .style1 .premium-title-header": {
            "border-left": titleborderWidth >= '1' ? `${titleborderWidth}px ${titleborderType} ${titleborderColor} !important` : "",
            "border-style": titleborderType,
            "border-width": generateCSSUnit(titleborderWidth, "px"),
            "border-color": titleborderColor,
            "border-radius": generateCSSUnit(titleborderRadius, "px"),
        },
        " .premium-title-style2__wrap": {
            "background-color": BGColor
        },
        " .premium-title-style3__wrap": {
            "background-color": BGColor
        },
        " .premium-title .style2": {
            "border-bottom": titleborderWidth >= '1' ? `${titleborderWidth}px ${titleborderType} ${titleborderColor} !important` : "",
            "border-style": titleborderType,
            "border-width": generateCSSUnit(titleborderWidth, "px"),
            "border-color": titleborderColor,
            "border-radius": generateCSSUnit(titleborderRadius, "px"),
        },
        " .premium-title .style4": {
            "border-bottom": titleborderWidth >= '1' ? `${titleborderWidth}px ${titleborderType} ${titleborderColor} !important` : "",
            "border-style": titleborderType,
            "border-width": generateCSSUnit(titleborderWidth, "px"),
            "border-color": titleborderColor,
            "border-radius": generateCSSUnit(titleborderRadius, "px"),
        },
        " .premium-title .style5": {
            "border-bottom": titleborderWidth >= '1' ? `${titleborderWidth}px ${titleborderType} ${titleborderColor} !important` : "",
            "border-style": titleborderType,
            "border-width": generateCSSUnit(titleborderWidth, "px"),
            "border-color": titleborderColor,
            "border-radius": generateCSSUnit(titleborderRadius, "px"),
        },
        " .premium-title .style6": {
            "border-bottom": titleborderWidth >= '1' ? `${titleborderWidth}px ${titleborderType} ${titleborderColor} !important` : "",
            "border-style": titleborderType,
            "border-width": generateCSSUnit(titleborderWidth, "px"),
            "border-color": titleborderColor,
            "border-radius": generateCSSUnit(titleborderRadius, "px"),
        },
        " .premium-title-style5__wrap": {
            "border-bottom": `2px solid ${lineColor}`
        },
        " .premium-title-style6__wrap": {
            "border-bottom": `2px solid ${lineColor}`
        },
        " .premium-title-style6__wrap:before": {
            "border-bottom-color": triangleColor
        },
        " .premium-title-icon": {
            "color": iconColor,
            "font-size": generateCSSUnit(iconSize, iconSizeType),
            "border-style": iconborderType,
            "border-width": generateCSSUnit(iconborderWidth, "px"),
            "border-color": iconborderColor,
            "border-radius": generateCSSUnit(iconborderRadius, "px"),
            "text-shadow": `${iconshadowHorizontal}px ${iconshadowVertical}px ${iconshadowBlur}px ${iconshadowColor}`,
            "background-color": iconBGColor,
            "padding": generateCSSUnit(iconPadding, iconPaddingType),
            "margin": generateCSSUnit(iconSpacing, iconSpacingType)
        },
        ' .premium-lottie-animation': {
            "width": `${iconSize}${iconSizeType} !important`,
            "height": `${iconSize}${iconSizeType} !important`
        },
        " .premium-title-text-title": {
            "margin": generateCSSUnit(titleMargin, titleMarginType),
            "padding": generateCSSUnit(titlePadding, titlePaddingType),
            "-webkit-text-stroke-color": strokeColor,
            "-webkit-text-stroke-width": `${strokeFull}px`,

        },
        " .premium-title-header img": {
            "width": generateCSSUnit(iconSize, iconSizeType),
            "height": generateCSSUnit(iconSize, iconSizeType)
        }
    }

    mobile_selectors = {
        " .premium-title-header": {
            "font-size": generateCSSUnit(titlefontSizeMobile, titlefontSizeType)
        },
        " .premium-title-icon": {
            "font-size": generateCSSUnit(iconSizeMobile, iconSizeType),
            "padding": generateCSSUnit(iconPaddingMobile, iconPaddingType),
            "margin": generateCSSUnit(iconSpacingMobile, iconSpacingType)
        },
        " .premium-title-text-title": {
            "margin": generateCSSUnit(titleMarginMobile, titleMarginType),
            "padding": generateCSSUnit(titlePaddingMobile, titlePaddingType),
        },
        " .premium-title-header img": {
            "width": generateCSSUnit(iconSizeMobile, iconSizeType),
            "height": generateCSSUnit(iconSizeMobile, iconSizeType)
        },
        ' .premium-lottie-animation': {
            "width": `${iconSizeMobile}${iconSizeType} !important`,
            "height": `${iconSizeMobile}${iconSizeType} !important`
        },

    }

    tablet_selectors = {
        " .premium-title-header": {
            "font-size": generateCSSUnit(titlefontSizeTablet, titlefontSizeType)
        },
        " .premium-title-icon": {
            "font-size": generateCSSUnit(iconSizeTablet, iconSizeType),
            "padding": generateCSSUnit(iconPaddingTablet, iconPaddingType),
            "margin": generateCSSUnit(iconSpacingTablet, iconSpacingType)
        },
        " .premium-title-text-title": {
            "margin": generateCSSUnit(titleMarginTablet, titleMarginType),
            "padding": generateCSSUnit(titlePaddingTablet, titlePaddingType),
        },
        " .premium-title-header img": {
            "width": generateCSSUnit(iconSizeTablet, iconSizeType),
            "height": generateCSSUnit(iconSizeTablet, iconSizeType)
        },
        ' .premium-lottie-animation': {
            "width": `${iconSizeTablet}${iconSizeType} !important`,
            "height": `${iconSizeTablet}${iconSizeType} !important`
        },
    }

    var styling_css = ""
    var id = `#premium-title-${props.clientId}`
    if (classMigrate) {
        id = `.premium-block-${props.clientId}`
    }

    styling_css = generateCSS(selectors, id)
    styling_css += generateCSS(tablet_selectors, id, true, "tablet")

    styling_css += generateCSS(mobile_selectors, id, true, "mobile")

    return styling_css
}

export default styling