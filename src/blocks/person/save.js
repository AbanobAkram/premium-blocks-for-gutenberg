import classnames from 'classnames'
import DefaultImage from "../../components/default-image";

const { RichText } = wp.editor;

const save = props => {

    const { className } = props;

    const {
        id,
        personAlign,
        personImgUrl,
        imgRadius,
        imgBorder,
        imgBorderColor,
        imgSize,
        name,
        nameColor,
        nameSize,
        nameWeight,
        nameV,
        title,
        titleColor,
        titleSize,
        titleWeight,
        titleV,
        DescText,
        descColor,
        descSize,
        descWeight,
        descV,
        descLine,
        descLetter,
        descStyle,
        descUpper,
        descshadowBlur,
        descshadowColor,
        descshadowHorizontal,
        descshadowVertical,
        socialIcon,
        iconSizeUnit,
        socialIconSize,
        socialIconColor,
        socialIconHoverColor,
        socialIconBackgroundColor,
        defaultIconColor,
        iconMarginT,
        iconMarginB,
        blur,
        bright,
        contrast,
        saturation,
        hue,
        effect,
        effectDir,
        nameHoverColor,
        backHoverColor,
        slideColor,
        nameLine,
        nameLetter,
        titleLine,
        titleLetter,
        multiPersonChecked,
        nameStyle,
        nameUpper,
        titleStyle,
        titleUpper,
        borderTypeIcon,
        borderWidthIcon,
        borderRadiusIcon,
        borderColorIcon,
        borderHoverColor,
        nameshadowBlur,
        nameshadowColor,
        nameshadowHorizontal,
        nameshadowVertical,
        titleshadowBlur,
        titleshadowColor,
        titleshadowHorizontal,
        titleshadowVertical,
        items,
        hoverEffectPerson,
        effectPersonStyle,
        selectedSocialMediaIcon,
        multiPersonContent
    } = props.attributes;


    const mainClasses = classnames(className, 'premium-person');

    const socialIconfn = () => {
        return <div>{items.map((value) => (
            <i className={`premium-person__socialIcon ${defaultIconColor ? value : ""} ${value == "youtube" ? "fa fa-youtube-play" : `dashicons dashicons-${value}`}  premium-person__${socialIconHoverColor}`}
                style={{
                    color: defaultIconColor ? "#ffffff" : socialIconColor,
                    fontSize: (socialIconSize || 50) + iconSizeUnit,
                    border: borderTypeIcon,
                    borderWidth: borderWidthIcon + "px",
                    borderRadius: borderRadiusIcon || 100 + "px",
                    borderColor: borderColorIcon,
                    marginTop: iconMarginT,
                    marginBottom: iconMarginB
                }}
            />
        ))}
        </div>
    };

    const content = () => {
        return <div className={`${multiPersonChecked > 1 ? `premium-person__${multiPersonChecked}` : ""}`}
        > {multiPersonContent.map((value) => (
            <div className={`premium-person__inner premium-persson__min premium-person__${effectPersonStyle} premium-person__${hoverEffectPerson}`}>
                <div
                    className={`premium-person__img_wrap`}
                >
                    {personImgUrl && (
                        <img
                            className={`premium-person__img`}
                            src={`${personImgUrl}`}
                            alt="Person"
                            style={{

                                borderWidth: imgBorder + "px",
                                borderRadius: imgRadius,
                                borderColor: imgBorderColor,
                                width: imgSize + "px",
                                height: imgSize + "px",
                                filter: `brightness( ${bright}% ) contrast( ${contrast}% ) saturate( ${saturation}% ) blur( ${blur}px ) hue-rotate( ${hue}deg )`
                            }}
                        />
                    )}
                    {!personImgUrl && <DefaultImage className={className} />}
                </div>

                <div
                    className={`premium-person__info`}
                >
                    <div className={`premium-person__name_wrap`}>
                        {name && (
                            <span
                                className={`premium-person__name`}
                                style={{
                                    color: nameColor,
                                    fontSize: nameSize + "px",
                                    fontWeight: nameWeight,
                                    alignSelf: nameV,
                                    letterSpacing: nameLetter + "px",
                                    lineHeight: nameLine + "px",
                                    fontStyle: nameStyle,
                                    textTransform: nameUpper ? "uppercase" : "none",
                                    textShadow: `${nameshadowHorizontal}px ${nameshadowVertical}px ${nameshadowBlur}px ${nameshadowColor}`
                                }}
                            >
                                {name}
                            </span>
                        )}
                    </div>
                    <div className={`premium-person__title_wrap`}>
                        {title && (
                            <span
                                className={`premium-person__title`}
                                style={{
                                    color: titleColor,
                                    fontSize: titleSize + "px",
                                    fontWeight: titleWeight,
                                    alignSelf: titleV,
                                    letterSpacing: titleLetter + "px",
                                    lineHeight: titleLine + "px",
                                    fontStyle: titleStyle,
                                    textTransform: titleUpper ? "uppercase" : "none",
                                    textShadow: `${titleshadowHorizontal}px ${titleshadowVertical}px ${titleshadowBlur}px ${titleshadowColor}`,
                                }}
                            >
                                {title}
                            </span>
                        )}
                    </div>
                    <div className={`premium-person__desc_wrap`}>
                        {DescText && (
                            <span
                                className={`premium-person__desc`}
                                style={{
                                    color: descColor,
                                    fontSize: descSize + "px",
                                    fontWeight: descWeight,
                                    alignSelf: descV,
                                    letterSpacing: descLetter + "px",
                                    lineHeight: descLine + "px",
                                    fontStyle: descStyle,
                                    textTransform: descUpper ? "uppercase" : "none",
                                    textShadow: `${descshadowHorizontal}px ${descshadowVertical}px ${descshadowBlur}px ${descshadowColor}`,
                                }}
                            >
                                {DescText}
                            </span>
                        )}
                    </div>
                    {socialIcon && (
                        <div>
                            {socialIconfn()}
                        </div>
                    )}
                </div>
            </div>
        ))}

        </div>
    }

    return (
        <div>
            <div
                id={`${mainClasses}-wrap-${id}`}
                className={`${mainClasses}__wrap premium-person__${effect} premium-person__${effectDir}`}
                style={{ textAlign: personAlign }}
            >
                <style
                    dangerouslySetInnerHTML={{
                        __html: [
                            `#premium-person-wrap-${id} .premium-person:hover {`,
                            `color: ${nameHoverColor} !important;`,
                            `border-color: ${borderHoverColor} !important;`,
                            "}",
                            `#premium-person-wrap-${id}.premium-person__none .premium-person:hover {`,
                            `background-color: ${backHoverColor} !important;`,
                            "}",
                            `#premium-person-wrap-${id}.premium-person__slide .premium-person::before,`,
                            `#premium-person-wrap-${id}.premium-person__shutter .premium-person::before,`,
                            `#premium-person-wrap-${id}.premium-person__radial .premium-person::before {`,
                            `background-color: ${slideColor}`,
                            "}"
                        ].join("\n")
                    }}
                />
                {content()}
                {/* <div
                    className={`premium-person__inner premium-persson__min premium-person__${effectPersonStyle} premium-person__${hoverEffectPerson}`}
                >
                    <div
                        className={`premium-person__img_wrap`}
                    >
                        {personImgUrl && (
                            <img
                                className={`premium-person__img`}
                                src={`${personImgUrl}`}
                                alt="Person"
                                style={{
                                    borderWidth: imgBorder + "px",
                                    borderRadius: imgRadius,
                                    borderColor: imgBorderColor,
                                    width: imgSize + "px",
                                    height: imgSize + "px",
                                    filter: `brightness( ${bright}% ) contrast( ${contrast}% ) saturate( ${saturation}% ) blur( ${blur}px ) hue-rotate( ${hue}deg )`
                                }}
                            />
                        )}
                        {!personImgUrl && <DefaultImage className={className} />}
                    </div>

                    <div
                        className={`premium-person__info`}
                    >
                        <div className={`premium-person__name_wrap`}>
                            {name && (
                                <span
                                    className={`premium-person__name`}
                                    style={{
                                        color: nameColor,
                                        fontSize: nameSize + "px",
                                        fontWeight: nameWeight,
                                        alignSelf: nameV,
                                        letterSpacing: nameLetter + "px",
                                        lineHeight: nameLine + "px",
                                        fontStyle: nameStyle,
                                        textTransform: nameUpper ? "uppercase" : "none",
                                        textShadow: `${nameshadowHorizontal}px ${nameshadowVertical}px ${nameshadowBlur}px ${nameshadowColor}`,
                                    }}
                                >
                                    {name}
                                </span>
                            )}
                        </div>
                        <div className={`premium-person__title_wrap`}>
                            {title && (
                                <span
                                    className={`premium-person__title`}
                                    style={{
                                        color: titleColor,
                                        fontSize: titleSize + "px",
                                        fontWeight: titleWeight,
                                        alignSelf: titleV,
                                        letterSpacing: titleLetter + "px",
                                        lineHeight: titleLine + "px",
                                        fontStyle: titleStyle,
                                        textTransform: titleUpper ? "uppercase" : "none",
                                        textShadow: `${titleshadowHorizontal}px ${titleshadowVertical}px ${titleshadowBlur}px ${titleshadowColor}`,
                                    }}
                                >
                                    {title}
                                </span>
                            )}
                        </div>
                        <div className={`premium-person__desc_wrap`}>
                            {DescText && (
                                <span
                                    className={`premium-person__desc`}
                                    style={{
                                        color: descColor,
                                        fontSize: descSize + "px",
                                        fontWeight: descWeight,
                                        alignSelf: descV,
                                        letterSpacing: descLetter + "px",
                                        lineHeight: descLine + "px",
                                        fontStyle: descStyle,
                                        textTransform: descUpper ? "uppercase" : "none",
                                        textShadow: `${descshadowHorizontal}px ${descshadowVertical}px ${descshadowBlur}px ${descshadowColor}`,
                                    }}
                                >
                                    {DescText}
                                </span>
                            )}
                        </div>
                        {socialIcon && (
                            <div>
                                {socialIconfn()}
                            </div>
                        )}
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default save;
