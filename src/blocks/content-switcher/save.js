import classnames from "classnames"

const {
    InnerBlocks,
    RichText
} = wp.blockEditor

export default function save(props) {

    const { attributes, className } = props

    const {
        block_id,
        align,
        showLabel,
        firstLabel,
        secondLabel,
        display,
        firstContent,
        secondContent,
        switchCheck,
        firstcontentlign,
        secondcontentlign,
        switchRadius,
        firstLabelColor,
        firstLabelLetter,
        firstLabelStyle,
        firstLabelUpper,
        shadowVertical,
        shadowHorizontal,
        shadowColor,
        shadowBlur,
        secondLabelColor,
        secondLabelLetter,
        secondLabelStyle,
        secondLabelUpper,
        secondLabelWeight,
        firstContentColor,
        firstContentBGColor,
        secondContentColor,
        secondContentBGColor,
        firstLabelWeight
    } = attributes

    const changeSwitch = () => {
        setAttributes({ switchCheck: !switchCheck })
    }

    return (
        <div className={classnames(
            className,
            `premium-block-${block_id} ${switchCheck}`
        )}
            id={`premium-block-${block_id}`}
            style={{
                textAlign: align,
            }}>
            <div className={`premium-content-switcher`}
                style={{
                    textAlign: align,
                }}>
                <div className={`premium-content-switcher-toggle-${display}`}
                    style={{
                        textAlign: align,
                        justifyContent: align == "right" ? "flex-end" : align,
                        alignItems: align
                    }}>
                    {showLabel && (<div className="premium-content-switcher-first-label">
                        <h3 style={{
                            color: firstLabelColor,
                            letterSpacing: firstLabelLetter + "px",
                            textTransform: firstLabelUpper ? "uppercase" : "none",
                            fontStyle: firstLabelStyle,
                            fontWeight: firstLabelWeight,
                            textShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor}`,
                        }}>{firstLabel}</h3>
                    </div>
                    )}
                    <div className="premium-content-switcher-toggle-switch">
                        <label className={`premium-content-switcher-toggle-switch-label ${block_id}`}>
                            <input type="checkbox" />
                            <span className="premium-content-switcher-toggle-switch-slider round"
                                style={{
                                    borderRadius: switchRadius + "px"
                                }}></span>
                        </label>
                    </div>
                    {showLabel && (<div className="premium-content-switcher-second-label">
                        <h3 style={{
                            color: secondLabelColor,
                            letterSpacing: secondLabelLetter + "px",
                            textTransform: secondLabelUpper ? "uppercase" : "none",
                            fontStyle: secondLabelStyle,
                            fontWeight: secondLabelWeight,
                            textShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor}`,
                        }}>{secondLabel}</h3>
                    </div>
                    )}
                </div>
                <div className="premium-content-switcher-list">
                    <ul className="premium-content-switcher-two-content">
                        <li className={`premium-content-switcher-is-visible premium-content-switcher-first-list ${block_id}`}
                            style={{
                                background: firstContentBGColor
                            }}>
                            <RichText.Content
                                tagName="p"
                                className={`premium-content-switcher-first-content`}
                                value={firstContent}
                                style={{
                                    textAlign: firstcontentlign,
                                    justifyContent: firstcontentlign,
                                    color: firstContentColor
                                }}
                            />
                            {/* <InnerBlocks.Content /> */}
                        </li>
                        <li className={`premium-content-switcher-is-hidden premium-content-switcher-second-list ${block_id}`}
                            style={{
                                background: secondContentBGColor
                            }}>
                            <RichText.Content
                                tagName="p"
                                className={`premium-content-switcher-second-content`}
                                value={secondContent}
                                style={{
                                    textAlign: secondcontentlign,
                                    justifyContent: secondcontentlign,
                                    color: secondContentColor
                                }}
                            />
                            {/* <InnerBlocks.Content /> */}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}