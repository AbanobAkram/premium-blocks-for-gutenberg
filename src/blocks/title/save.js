import classnames from "classnames"
import Lottie from "react-lottie-with-segments";

const {
    Fragment
} = wp.element;

export default function save(props) {

    const { attributes, className } = props

    const {
        block_id,
        align,
        style,
        title,
        iconValue,
        iconType,
        loop,
        reversedir,
        lottieURl,
        icon,
        iconPosition,
        imageURL,
        link,
        url,
        iconSize,
        iconAlign,
        stripePosition,
        stripeAlign,
        backgroundText,
        BackText,
        hideDesktop,
        hideTablet,
        hideMobile
    } = attributes

    console.log(BackText)
    return (
        <div className={classnames(
            className,
            `premium-block-${block_id}`
        ) + `${hideDesktop} ${hideTablet} ${hideMobile}`}
            style={{
                textAlign: align,
            }}>
            <div className={`premium-title  ${backgroundText}`} style={{
                textAlign: align,
            }} data-backgroundText={BackText}>
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
                                {
                                    iconValue && iconType == 'lottie' && <Lottie
                                        options={{
                                            loop: loop,
                                            path: "https://assets9.lottiefiles.com/packages/lf20_MUGYrv.json",
                                            rendererSettings: {
                                                preserveAspectRatio: 'xMidYMid',
                                                className: "premium-title-icon premium-lottie-animation"

                                            }
                                        }}
                                        height={iconSize}
                                        width={iconSize}
                                        direction={reversedir}
                                    />
                                }
                                {iconPosition === 'top' && <span className={`premium-title-style7-stripe__wrap premium-stripe-${stripePosition} premium-stripe-${stripeAlign}`}>
                                    <span className={`premium-title-style7-stripe-span`}></span>
                                </span>
                                }
                                <span className={`premium-title-text-title`}>{title}</span>
                            </div>
                        </Fragment>
                            : <Fragment>
                                {iconValue && iconType == 'icon' && <i className={`premium-title-icon ${icon}`} />
                                }
                                {
                                    iconValue && iconType == 'image' && < img className={`premium-title-icon`} src={imageURL} />
                                }
                                {
                                    iconValue && iconType == 'lottie' && <Lottie
                                        options={{
                                            loop: loop,
                                            path: "https://assets9.lottiefiles.com/packages/lf20_MUGYrv.json",
                                            rendererSettings: {
                                                preserveAspectRatio: 'xMidYMid',
                                                className: "premium-title-icon premium-lottie-animation"

                                            }
                                        }}
                                        height={iconSize}
                                        width={iconSize}
                                        direction={reversedir}
                                    />
                                }
                                <span className={`premium-title-text-title`}>{title}</span>
                            </Fragment>
                        }
                        {link && <a target={target ? "_blank" : "_self"} href={`${url}`}></a>}
                    </h2>
                </div>
            </div>
        </div>
    )
}