const className = "premium-banner";

const { RichText } = wp.editor;

const save = props => {
  const {
    id,
    imageURL,
    title,
    titleTag,
    desc,
    contentAlign,
    effect,
    hoverEffect,
    height,
    minHeight,
    verAlign,
    hovered,
    responsive,
    background,
    opacity,
    borderType,
    borderWidth,
    borderRadius,
    borderColor,
    titleColor,
    titleBack,
    titleSize,
    titleWeight,
    titleLine,
    shadowBlur,
    shadowColor,
    shadowHorizontal,
    shadowVertical,
    descColor,
    descSize,
    descWeight,
    descLine,
    urlCheck,
    url,
    target,
    sepColor
  } = props.attributes;
  return (
    <div
      id={`premium-banner-${id}`}
      className={`${className} ${className}__responsive_${responsive}`}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: [
            `#premium-banner-${id} .premium-banner__effect3 .premium-banner__title_wrap::after{`,
            `background: ${sepColor}`,
            "}",
            `#premium-banner-${id} .premium-banner__inner {`,
            `background: ${background}`,
            "}",
            `#premium-banner-${id} .premium-banner__img.premium-banner__active {`,
            `opacity: ${background ? 1 - opacity / 100 : 1} `,
            "}"
          ].join("\n")
        }}
      />
      <div
        className={`${className}__inner ${className}__min ${className}__${effect} ${className}__${hoverEffect} hover_${hovered}`}
        style={{
          border: borderType,
          borderWidth: borderWidth + "px",
          borderRadius: borderRadius + "px",
          borderColor: borderColor
        }}
      >
        <div
          className={`${className}__img_wrap ${className}__${height}`}
          style={{
            minHeight: minHeight,
            alignItems: verAlign
          }}
        >
          <img
            className={`${className}__img`}
            alt="Banner Image"
            src={imageURL}
          />
        </div>

        <div
          className={`${className}__content`}
          style={{
            background: "effect2" === effect ? titleBack : "transparent"
          }}
        >
          <div
            className={`${className}__title_wrap`}
            style={{
              textAlign: contentAlign
            }}
          >
            <RichText.Content
              tagName={titleTag.toLowerCase()}
              className={`${className}__title`}
              value={title}
              style={{
                color: titleColor,
                fontSize: titleSize + "px",
                fontWeight: titleWeight,
                lineHeight: titleLine + "px",
                textShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor}`
              }}
            />
          </div>
          <div
            className={`${className}__desc_wrap`}
            style={{
              textAlign: contentAlign
            }}
          >
            <RichText.Content
              tagName="p"
              className={`${className}__desc`}
              value={desc}
              style={{
                color: descColor,
                fontSize: descSize + "px",
                fontWeight: descWeight,
                lineHeight: descLine + "px"
              }}
            />
          </div>
        </div>
        {urlCheck && "" !== url && (
          <a
            className={`${className}__link`}
            href={url}
            target={target && "_blank"}
          />
        )}
      </div>
    </div>
  );
};

export default save;