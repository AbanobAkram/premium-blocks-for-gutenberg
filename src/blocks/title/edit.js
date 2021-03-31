import classnames from "classnames"
import styling from "./styling"
import PremiumTypo from "../../components/premium-typo";
import PremiumBorder from "../../components/premium-border";
import iconsList from "../../components/premium-icons-list";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import PremiumRangeResponsive from "../../components/premium-range-responsive";
import PremiumTextShadow from "../../components/premium-text-shadow";
import PremiumResponsiveTabs from '../../components/premium-responsive-tabs';
import PremiumMediaUpload from '../../components/premium-media-upload';

const { __ } = wp.i18n

const {
    Component,
    Fragment,
} = wp.element

const {
    BlockControls,
    AlignmentToolbar,
    InspectorControls,
    ColorPalette,
} = wp.editor

const {
    PanelBody,
    SelectControl,
    RangeControl,
    TextControl,
    Toolbar,
    ToggleControl,
} = wp.components

class edit extends Component {

    constructor() {
        super(...arguments);
    }
    componentDidMount() {
        // Assigning id in the attribute.
        this.props.setAttributes({ block_id: this.props.clientId })
        this.props.setAttributes({ classMigrate: true })
        // Pushing Style tag for this block css.
        const $style = document.createElement("style")
        $style.setAttribute("id", "premium-style-title-" + this.props.clientId)
        document.head.appendChild($style)
    }

    render() {
        const { attributes, setAttributes, isSelected } = this.props

        const {
            align,
            className,
            style,
            title,
            iconValue,
            iconType,
            icon,
            iconPosition,
            imageURL,
            imageID,
            link,
            url,
            iconAlign,
            stripePosition,
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
            titleBorderLeft,
            titleBorderTop,
            titleBorderRight,
            titleBorderBottom,
            titleborderColor,
            BGColor,
            lineColor,
            triangleColor,
            stripeAlign,
            iconColor,
            iconSize,
            iconSizeType,
            iconSizeTablet,
            iconSizeMobile,
            iconborderType,
            iconborderRadius,
            iconBorderTop,
            iconBorderRight,
            iconBorderBottom,
            iconBorderLeft,
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
            stroke,
            strokeColor,
            strokeFull,
            iconBGColor,
            iconPadding,
            iconPaddingType,
            iconPaddingMobile,
            iconPaddingTablet,
            iconSpacing,
            iconSpacingType,
            iconSpacingMobile,
            iconSpacingTablet,
            backgroundText,
            BackText,
            textWidth,
            horizontalText,
            verticalText,
            rotateText,
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
            blend,
            z_index,
            hideDesktop,
            hideTablet,
            hideMobile
        } = attributes

        const STYLE = [{
            value: "style1",
            label: __("Style 1")
        },
        {
            value: "style2",
            label: __("Style 2")
        },
        {
            value: "style3",
            label: "Style 3"
        },
        {
            value: "style4",
            label: __("Style 4")
        },
        {
            value: "style5",
            label: __("Style 5")
        },
        {
            value: "style6",
            label: __("Style 6")
        },
        {
            value: "style7",
            label: __("Style 7")
        }
        ];
        const ICON = [
            {
                value: "icon",
                label: __("Icon")
            },
            {
                value: "image",
                label: __("Image")
            }
        ]
        const POSITION = [
            {
                value: "before",
                label: __("Before")
            }, {
                value: "after",
                label: __("After")
            },
            {
                value: "top",
                label: __("Top")
            }
        ]
        const ALIGNS = ["left", "center", "right"];
        const STRIPEPOSITION = [
            {
                value: "top",
                label: __("Top")
            }, {
                value: "bottom",
                label: __("Bottom")
            }
        ]

        const BLEND =
            [
                {
                    label: 'Normal', value: 'normal'
                },
                {
                    label: 'Multiply', value: 'multiply'
                },
                {
                    label: 'Screen', value: 'screen'
                },
                {
                    label: 'Overlay', value: 'overlay'
                },
                {
                    label: 'Darken', value: 'darken'
                },
                {
                    label: 'Lighten', value: 'lighten'
                },
                {
                    label: 'Color Dodge', value: 'color-dodge'
                },
                {
                    label: 'Saturation', value: 'saturation'
                },
                {
                    label: 'Color', value: 'color'
                },
                {
                    label: 'Luminosity', value: 'luminosity'
                },
            ]

        var element = document.getElementById("premium-style-title-" + this.props.clientId)

        if (null != element && "undefined" != typeof element) {
            element.innerHTML = styling(this.props)
        }

        const onResetClickTitle = () => {
            setAttributes({
                titleWeight: 600,
                titlefontSizeType: "px",
                titlefontSize: "30",
                titlefontSizeMobile: "30",
                titlefontSizeTablet: "30",
                titleStyle: "normal",
                titleLetter: "0",
                titleUpper: false
            });
        }
      
        const onResetClickTitleTextShadow = () => {
            setAttributes({
                titleshadowColor: "",
                titleshadowBlur: "0",
                titleshadowHorizontal: "0",
                titleshadowVertical: "0",
            });
        }
        const onResetClicktitleborder = () => {
            setAttributes({
                titleborderType: "none",
                titleBorderTop: "0",
                titleBorderRight: "0",
                titleBorderBottom: "0",
                titleBorderLeft: "0",
                titleborderColor: "",
                titleborderRadius: "0",
            });
        }
        const onResetClickiconborder = () => {
            setAttributes({
                iconborderType: "none",
                iconBorderTop: "1",
                iconBorderRight: "1",
                iconBorderBottom: '1',
                iconBorderLeft: '1',
                iconborderColor: "",
                iconborderRadius: "0",
            });
        }
        const onResetClickIconTextShadow = () => {
            setAttributes({
                iconshadowColor: "",
                iconshadowBlur: "0",
                iconshadowHorizontal: "0",
                iconshadowVertical: "0",
            });
        }

        return [
            isSelected && (
                <BlockControls>
                    <AlignmentToolbar
                        value={align}
                        onChange={(value) => {
                            setAttributes({ align: value })
                        }}
                    />
                </BlockControls>
            ),
            isSelected && (
                <InspectorControls>
                    <PanelBody
                        title={__("Title")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <TextControl
                            label={__("Title")}
                            value={title}
                            onChange={value => setAttributes({ title: value })}
                        />
                        <SelectControl
                            label={__("Style")}
                            value={style}
                            onChange={newSelect => setAttributes({ style: newSelect })}
                            options={STYLE}
                        />
                        <ToggleControl
                            label={__("Icon")}
                            checked={iconValue}
                            onChange={value => setAttributes({ iconValue: value })}
                        />
                        {iconValue &&
                            <Fragment>
                                <SelectControl
                                    label={__("Icon Type")}
                                    value={iconType}
                                    onChange={newSelect => setAttributes({ iconType: newSelect })}
                                    options={ICON}
                                />
                                {iconType == 'icon' ? <Fragment>
                                    <p>{__("Icon")}</p>
                                    <FontIconPicker
                                        icons={iconsList}
                                        value={icon}
                                        onChange={value => setAttributes({ icon: value })}
                                        isMulti={false}
                                        appendTo="body"
                                        noSelectedPlaceholder={__("Select Icon")}
                                    />
                                </Fragment>
                                    : <Fragment>
                                        <PremiumMediaUpload
                                            type="image"
                                            imageID={imageID}
                                            imageURL={imageURL}
                                            onSelectMedia={media => {
                                                setAttributes({
                                                    imageID: media.id,
                                                    imageURL: media.url
                                                });
                                            }}
                                            onRemoveImage={() =>
                                                setAttributes({
                                                    imageID: "",
                                                    imageURL: ""
                                                })
                                            }
                                        />
                                    </Fragment>
                                }
                                <SelectControl
                                    label={__("Icon Position")}
                                    value={iconPosition}
                                    onChange={newSelect => setAttributes({ iconPosition: newSelect })}
                                    options={POSITION}
                                />
                                {iconPosition === 'top' && style != 'style3' && style != 'style4' && <Fragment>
                                    <p>{__("Icon Alignment")}</p>
                                    <Toolbar
                                        controls={ALIGNS.map(contentAlign => ({
                                            icon: "editor-align" + contentAlign,
                                            isActive: contentAlign === iconAlign,
                                            onClick: () => setAttributes({ iconAlign: contentAlign })
                                        }))}
                                    />
                                </Fragment>
                                }
                            </Fragment>
                        }
                        {style === 'style7' && <Fragment>
                            <SelectControl
                                label={__("Stripe Position")}
                                value={stripePosition}
                                onChange={newSelect => setAttributes({ stripePosition: newSelect })}
                                options={STRIPEPOSITION}
                            />
                            <RangeControl
                                label={__("Stripe Width")}
                                value={stripeWidth}
                                min="1"
                                max="100"
                                onChange={value => setAttributes({ stripeWidth: value })}
                            />
                            <RangeControl
                                label={__("Stripe Height")}
                                value={stripeHeight}
                                min="1"
                                max="100"
                                onChange={value => setAttributes({ stripeHeight: value })}
                            />
                            <RangeControl
                                label={__("Stripe Top Spacing")}
                                value={stripeTopSpacing}
                                min="1"
                                max="100"
                                onChange={value => setAttributes({ stripeTopSpacing: value })}
                            />
                            <RangeControl
                                label={__("Stripe Bottom Spacing")}
                                value={stripeBottomSpacing}
                                min="1"
                                max="100"
                                onChange={value => setAttributes({ stripeBottomSpacing: value })}
                            />
                            <p>{__("Stripe Alignment")}</p>
                            <Toolbar
                                controls={ALIGNS.map(contentAlign => ({
                                    icon: "editor-align" + contentAlign,
                                    isActive: contentAlign === stripeAlign,
                                    onClick: () => setAttributes({ stripeAlign: contentAlign })
                                }))}
                            />
                        </Fragment>
                        }
                        <ToggleControl
                            label={__("Link")}
                            checked={link}
                            onChange={value => setAttributes({ link: value })}
                        />
                        {link &&
                            <Fragment>
                                <p>{__("URL")}</p>
                                <TextControl
                                    value={url}
                                    onChange={value => setAttributes({ url: value })}
                                    placeholder={__("Enter URL")}
                                />
                            </Fragment>
                        }
                        <ToggleControl
                            label={__('background Text')}
                            checked={backgroundText}
                            onChange={(newValue) => setAttributes({ backgroundText: newValue })}
                        />
                        {backgroundText &&
                            <Fragment>
                                <TextControl
                                    label={__("Text")}
                                    value={BackText}
                                    onChange={value => setAttributes({ BackText: value })}
                                />
                                <SelectControl
                                    label={__("Width")}
                                    value={textWidth}
                                    onChange={newSelect => setAttributes({ textWidth: newSelect })}
                                    options={[
                                        {
                                            label: "Auto", value: 'auto'
                                        }, {
                                            label: "Full Width", value: '100%'
                                        }]}
                                />
                                <RangeControl
                                    label={__('Horizontal Offset')}
                                    value={horizontalText}
                                    onChange={(newValue) => setAttributes({ horizontalText: newValue })}
                                    min={0}
                                    max={100}
                                    step={1}
                                />
                                <RangeControl
                                    label={__('Vertical Offset')}
                                    value={verticalText}
                                    onChange={(newValue) => setAttributes({ verticalText: newValue })}
                                    min={0}
                                    max={100}
                                    step={1}
                                />
                                <RangeControl
                                    label={__('Rotate (degrees)')}
                                    value={rotateText}
                                    onChange={(newValue) => setAttributes({ rotateText: newValue })}
                                    min={0}
                                    max={100}
                                    step={1}
                                />
                            </Fragment>}
                    </PanelBody>
                    <PanelBody
                        title={__("Title Style")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <p>{__("Color")}</p>
                        <ColorPalette
                            value={titleColor}
                            onChange={newValue =>
                                setAttributes({
                                    titleColor: newValue
                                })
                            }
                            allowReset={true}
                        />
                        <PremiumTypo
                            components={["responsiveSize", "weight", "style", "upper", "spacing"]}
                            setAttributes={setAttributes}
                            fontSizeType={{ value: titlefontSizeType, label: __("titlefontSizeType") }}
                            fontSize={{ value: titlefontSize, label: __("titlefontSize") }}
                            fontSizeMobile={{ value: titlefontSizeMobile, label: __("titlefontSizeMobile") }}
                            fontSizeTablet={{ value: titlefontSizeTablet, label: __("titlefontSizeTablet") }}
                            weight={titleWeight}
                            style={titleStyle}
                            spacing={titleLetter}
                            upper={titleUpper}
                            onChangeWeight={newWeight =>
                                setAttributes({ titleWeight: newWeight || 600 })
                            }
                            onChangeStyle={newStyle =>
                                setAttributes({ titleStyle: newStyle })
                            }
                            onChangeSpacing={newValue =>
                                setAttributes({ titleLetter: newValue })
                            }
                            onChangeUpper={check => setAttributes({ titleUpper: check })}
                            onResetClick={() => onResetClickTitle([titleWeight, titlefontSizeType, titlefontSize, titlefontSizeMobile, titlefontSizeTablet,
                                titleStyle, titleLetter, titleUpper], [
                                600, "px", "30", "30", "30", "normal", "0", false
                            ])}
                        />
                        {style === 'style2' && <Fragment>
                            <p>{__("Background Color")}</p>
                            <ColorPalette
                                value={BGColor}
                                onChange={newValue =>
                                    setAttributes({
                                        BGColor: newValue
                                    })
                                }
                                allowReset={true}
                            />
                        </Fragment>
                        }
                        {style === 'style3' && <Fragment>
                            <p>{__("Background Color")}</p>
                            <ColorPalette
                                value={BGColor}
                                onChange={newValue =>
                                    setAttributes({
                                        BGColor: newValue
                                    })
                                }
                                allowReset={true}
                            />
                        </Fragment>
                        }
                        {style === 'style5' && <Fragment>
                            <p>{__("Line Color")}</p>
                            <ColorPalette
                                value={lineColor}
                                onChange={newValue =>
                                    setAttributes({
                                        lineColor: newValue
                                    })
                                }
                                allowReset={true}
                            />
                        </Fragment>
                        }
                        {style === 'style6' && <Fragment>
                            <p>{__("Line Color")}</p>
                            <ColorPalette
                                value={lineColor}
                                onChange={newValue =>
                                    setAttributes({
                                        lineColor: newValue
                                    })
                                }
                                allowReset={true}
                            />
                            <p>{__("Triangle Color")}</p>
                            <ColorPalette
                                value={triangleColor}
                                onChange={newValue =>
                                    setAttributes({
                                        triangleColor: newValue
                                    })
                                }
                                allowReset={true}
                            />
                        </Fragment>
                        }
                        {style === 'style7' ? <Fragment>
                            <p>{__("Stripe Color")}</p>
                            <ColorPalette
                                value={stripeColor}
                                onChange={newValue =>
                                    setAttributes({
                                        stripeColor: newValue
                                    })
                                }
                                allowReset={true}
                            />
                        </Fragment>
                            : style != 'style3' &&
                            <PremiumBorder
                                borderType={titleborderType}
                                top={titleBorderTop}
                                right={titleBorderRight}
                                bottom={titleBorderBottom}
                                left={titleBorderLeft}
                                borderColor={titleborderColor}
                                borderRadius={titleborderRadius}
                                onChangeType={(newType) =>
                                    setAttributes({ titleborderType: newType })
                                }
                                onChangeWidth={({ top, right, bottom, left }) =>
                                    setAttributes({
                                        titleBorderTop: top,
                                        titleBorderRight: right,
                                        titleBorderBottom: bottom,
                                        titleBorderLeft: left,
                                    })
                                }
                                onChangeColor={(colorValue) =>
                                    setAttributes({ titleborderColor: colorValue.hex })
                                }
                                onChangeRadius={(newrRadius) =>
                                    setAttributes({ titleborderRadius: newrRadius })
                                }
                            />
                        }
                        <PremiumTextShadow
                            color={titleshadowColor}
                            blur={titleshadowBlur}
                            horizontal={titleshadowHorizontal}
                            vertical={titleshadowVertical}
                            onChangeColor={newColor =>
                                setAttributes({ titleshadowColor: newColor.hex })
                            }
                            onChangeBlur={newBlur => setAttributes({ titleshadowBlur: newBlur })}
                            onChangehHorizontal={newValue =>
                                setAttributes({ titleshadowHorizontal: newValue })
                            }
                            onChangeVertical={newValue =>
                                setAttributes({ titleshadowVertical: newValue })
                            }
                            onResetClick={onResetClickTitleTextShadow}
                        />
                        <PremiumRangeResponsive
                            setAttributes={setAttributes}
                            rangeType={{ value: titleMarginType, label: __("titleMarginType") }}
                            range={{ value: titleMargin, label: __("titleMargin") }}
                            rangeMobile={{ value: titleMarginMobile, label: __("titleMarginMobile") }}
                            rangeTablet={{ value: titleMarginTablet, label: __("titleMarginTablet") }}
                            rangeLabel={__("Margin")}
                            min={1}
                            max={100}
                        />
                        <PremiumRangeResponsive
                            setAttributes={setAttributes}
                            rangeType={{ value: titlePaddingType, label: __("titlePaddingType") }}
                            range={{ value: titlePadding, label: __("titlePadding") }}
                            rangeMobile={{ value: titlePaddingMobile, label: __("titlePaddingMobile") }}
                            rangeTablet={{ value: titlePaddingTablet, label: __("titlePaddingTablet") }}
                            rangeLabel={__("Padding")}
                            min={1}
                            max={100}
                        />
                        <ToggleControl
                            label={__('Stroke')}
                            checked={stroke}
                            onChange={(newValue) => setAttributes({ stroke: newValue })}
                        />
                        {
                            stroke && <Fragment>
                                <p>{__('Stroke Color')}</p>
                                <ColorPalette
                                    value={strokeColor}
                                    onChange={(newValue) => setAttributes({ strokeColor: newValue })}
                                    allowReset={true}
                                />
                                <RangeControl
                                    label={__('Stroke Full Width')}
                                    value={strokeFull}
                                    onChange={(newValue) => setAttributes({ strokeFull: newValue })}
                                    min={0}
                                    max={100}
                                    step={1}
                                />
                            </Fragment>
                        }
                    </PanelBody>
                    {
                        iconValue && <PanelBody
                            title={__("Icon Style")}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            {iconType === 'icon' && <Fragment>
                                <p>{__("Color")}</p>
                                <ColorPalette
                                    value={iconColor}
                                    onChange={newValue =>
                                        setAttributes({
                                            iconColor: newValue
                                        })
                                    }
                                    allowReset={true}
                                />
                            </Fragment>
                            }
                            <PremiumRangeResponsive
                                setAttributes={setAttributes}
                                rangeType={{ value: iconSizeType, label: __("iconSizeType") }}
                                range={{ value: iconSize, label: __("iconSize") }}
                                rangeMobile={{ value: iconSizeMobile, label: __("iconSizeMobile") }}
                                rangeTablet={{ value: iconSizeTablet, label: __("iconSizeTablet") }}
                                rangeLabel={__("Size")}
                                min={1}
                                max={100}
                            />
                            <p>{__("Background Color")}</p>
                            <ColorPalette
                                value={iconBGColor}
                                onChange={newValue =>
                                    setAttributes({
                                        iconBGColor: newValue
                                    })
                                }
                                allowReset={true}
                            />
                            <PremiumBorder
                                borderType={iconborderType}
                                top={iconBorderTop}
                                right={iconBorderRight}
                                bottom={iconBorderBottom}
                                left={iconBorderLeft}
                                borderColor={iconborderColor}
                                borderRadius={iconborderRadius}
                                onChangeType={(newType) =>
                                    setAttributes({ iconborderType: newType })
                                }
                                onChangeWidth={({ top, right, bottom, left }) =>
                                    setAttributes({
                                        iconBorderTop: top,
                                        iconBorderRight: right,
                                        iconBorderBottom: bottom,
                                        iconBorderLeft: left,
                                    })
                                }
                                onChangeColor={(colorValue) =>
                                    setAttributes({ iconborderColor: colorValue.hex })
                                }
                                onChangeRadius={(newrRadius) =>
                                    setAttributes({ iconborderRadius: newrRadius })
                                }
                            />
                            {iconType === 'icon' && <PremiumTextShadow
                                color={iconshadowColor}
                                blur={iconshadowBlur}
                                horizontal={iconshadowHorizontal}
                                vertical={iconshadowVertical}
                                onChangeColor={newColor =>
                                    setAttributes({ iconshadowColor: newColor.hex })
                                }
                                onChangeBlur={newBlur => setAttributes({ iconshadowBlur: newBlur })}
                                onChangehHorizontal={newValue =>
                                    setAttributes({ iconshadowHorizontal: newValue })
                                }
                                onChangeVertical={newValue =>
                                    setAttributes({ iconshadowVertical: newValue })
                                }
                                onResetClick={onResetClickIconTextShadow}
                            />
                            }
                            <PremiumRangeResponsive
                                setAttributes={setAttributes}
                                rangeType={{ value: iconPaddingType, label: __("iconPaddingType") }}
                                range={{ value: iconPadding, label: __("iconPadding") }}
                                rangeMobile={{ value: iconPaddingMobile, label: __("iconPaddingMobile") }}
                                rangeTablet={{ value: iconPaddingTablet, label: __("iconPaddingTablet") }}
                                rangeLabel={__("Padding")}
                                min={1}
                                max={100}
                            />
                            <PremiumRangeResponsive
                                setAttributes={setAttributes}
                                rangeType={{ value: iconSpacingType, label: __("iconSpacingType") }}
                                range={{ value: iconSpacing, label: __("iconSpacing") }}
                                rangeMobile={{ value: iconSpacingMobile, label: __("iconSpacingMobile") }}
                                rangeTablet={{ value: iconSpacingTablet, label: __("iconSpacingTablet") }}
                                rangeLabel={__("Spacing")}
                                min={0}
                                max={100}
                            />
                        </PanelBody>
                    }
                    {
                        backgroundText &&
                        <PanelBody
                            title={__("Background Text")}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <Fragment>
                                <p> {__('Color')}</p>
                                <ColorPalette
                                    value={textBackColor}
                                    onChange={newValue =>
                                        setAttributes({
                                            textBackColor: newValue
                                        })
                                    }
                                    allowReset={true}
                                />
                            </Fragment>
                            <PremiumTypo
                                components={["responsiveSize", "weight", "style", "upper", "spacing"]}
                                setAttributes={setAttributes}
                                fontSizeType={{ value: textBackfontSizeType, label: __("textBackfontSizeType") }}
                                fontSize={{ value: textBackfontSize, label: __("textBackfontSize") }}
                                fontSizeMobile={{ value: textBackfontSizeMobile, label: __("textBackfontSizeMobile") }}
                                fontSizeTablet={{ value: textBackfontSizeTablet, label: __("textBackfontSizeTablet") }}
                                weight={textBackWeight}
                                style={textBackStyle}
                                spacing={textBackLetter}
                                upper={textBackUpper}
                                onChangeWeight={newWeight =>
                                    setAttributes({ textBackWeight: newWeight || 600 })
                                }
                                onChangeStyle={newStyle =>
                                    setAttributes({ textBackStyle: newStyle })
                                }
                                onChangeSpacing={newValue =>
                                    setAttributes({ textBackLetter: newValue })
                                }
                                onChangeUpper={check => setAttributes({ textBackUpper: check })}
                            />
                            <PremiumTextShadow
                                color={textBackshadowColor}
                                blur={textBackshadowBlur}
                                horizontal={textBackshadowHorizontal}
                                vertical={textBackshadowVertical}
                                onChangeColor={newColor =>
                                    setAttributes({ textBackshadowColor: newColor.hex })
                                }
                                onChangeBlur={newBlur => setAttributes({ textBackshadowBlur: newBlur })}
                                onChangehHorizontal={newValue =>
                                    setAttributes({ textBackshadowHorizontal: newValue })
                                }
                                onChangeVertical={newValue =>
                                    setAttributes({ textBackshadowVertical: newValue })
                                }
                                onResetClick={onResetClicktextBackTextShadow}
                            />
                            <hr />

                            <SelectControl
                                label={__("Blend Mode ")}
                                value={blend}
                                onChange={newSelect => setAttributes({ blend: newSelect })}
                                options={BLEND}
                            />
                            <RangeControl
                                label={__("z-index")}
                                value={z_index}
                                min="1"
                                max="100"
                                onChange={value => setAttributes({ z_index: value })}
                            />
                        </PanelBody>
                    }
                    <PremiumResponsiveTabs
                        Desktop={hideDesktop}
                        Tablet={hideTablet}
                        Mobile={hideMobile}
                        onChangeDesktop={(value) => setAttributes({ hideDesktop: value ? " premium-desktop-hidden" : "" })}
                        onChangeTablet={(value) => setAttributes({ hideTablet: value ? " premium-tablet-hidden" : "" })}
                        onChangeMobile={(value) => setAttributes({ hideMobile: value ? " premium-mobile-hidden" : "" })}
                    />
                </InspectorControls>
            ),
            <div className={classnames(
                className,
                `premium-block-${this.props.clientId}`
            ) + `  premium-title-bg-text  ${hideDesktop} ${hideTablet} ${hideMobile}`} style={{
                textAlign: align,
            }} data-backgroundText={BackText}>
                <div className={`premium-title`} style={{
                    textAlign: align,
                }}>
                    <div className={`${style} ${style}-${align}`}>
                        <h2 className={`premium-title-header premium-title-${style}__wrap ${align} ${iconValue ? iconPosition : ""} ${iconPosition == 'top' ? `premium-title-${iconAlign}` : ""}`}>
                            {style === 'style7' ? <Fragment>
                                {iconPosition != 'top' && iconValue && <span className={`premium-title-style7-stripe__wrap premium-stripe-${stripePosition} premium-stripe-${stripeAlign}`}>
                                    <span className={`premium-title-style7-stripe-span`}></span>
                                </span>
                                }
                                {!iconValue && <span className={`premium-title-style7-stripe__wrap premium-stripe-${stripePosition} premium-stripe-${stripeAlign}`}>
                                    <span className={`premium-title-style7-stripe-span`}></span>
                                </span>
                                }
                                <div className={`premium-title-style7-inner-title`}>
                                    {
                                        iconValue && iconType == 'icon' && <i className={`premium-title-icon ${icon}`} />
                                    }
                                    {
                                        iconValue && iconType == 'image' && < img className={`premium-title-icon`} src={imageURL} />
                                    }
                                    {iconValue && iconPosition === 'top' && <span className={`premium-title-style7-stripe__wrap premium-stripe-${stripePosition} premium-stripe-${stripeAlign}`}>
                                        <span className={`premium-title-style7-stripe-span`}></span>
                                    </span>
                                    }
                                    <span className={`premium-title-text-title`} >{title}</span>
                                </div>
                            </Fragment>
                                : <Fragment>
                                    {iconValue && iconType == 'icon' && <i className={`premium-title-icon ${icon}`} />
                                    }
                                    {
                                        iconValue && iconType == 'image' && < img className={`premium-title-icon`} src={imageURL} />
                                    }
                                    <span className={`premium-title-text-title`}>{title}</span>
                                </Fragment>
                            }
                            {link && <a href={`${url}`}></a>}
                        </h2>
                    </div>
                </div>
            </div>
        ]
    }
}

export default edit