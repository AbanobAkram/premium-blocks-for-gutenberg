import classnames from "classnames";

const save = props => {

    const { className } = props;

    const {
        id,
        align,
        dateTime,
        monthsCheck,
        weeksCheck,
        daysCheck,
        hoursCheck,
        minutesCheck,
        secondsCheck,
        monthLabel,
        weekLabel,
        dayLabel,
        hourLabel,
        minuteLabel,
        secondLabel,
        contentDisplay,
        digitsColor,
        digitsBgColor,
        digitsSize,
        digitsWeight,
        digitsLetterSpacing,
        digitsLineHeight,
        borderType,
        borderWidth,
        borderColor,
        borderRadius,
        unitsColor,
        unitsSize,
        unitsWeight,
        unitsLetterSpacing,
        unitsLineHeight,
        marginTop,
        marginRight,
        marginBottom,
        marginLeft,
        unitsSpace

    } = props.attributes;

    const mainClasses = classnames(className, "premium-countdown");

    return (
        <div
            id={`premium-countdown__${id}`}
            className={`${mainClasses}__wrap`}
            style={{ justifyContent: align || "center" }}
        >
            <div id={`countdown__${id}`} className={`premium-countdown__container countdown down `} >
                <span className={`premium-countdown__items `}>

                    {monthsCheck && (
                        <span className={`premium-countdown__section`} style={{ margin: `0px ${unitsSpace}px 10px ${unitsSpace}px` }}>
                            <span className={`premium-countdown__time-mid premium-countdown__get-date`} data-date={dateTime}
                                style={{
                                    display: contentDisplay === "inline-block" ? "flex" : "block",
                                    alignItems: contentDisplay === "inline-block" ? "center" : "normal"
                                }}
                            >
                                <span className={`premium-countdown__amount  premium-countdown__digits-months`}
                                    style={{
                                        display: contentDisplay || "block",
                                        color: digitsColor || "#000",
                                        backgroundColor: digitsBgColor || "transparent",
                                        fontSize: digitsSize || "0",
                                        fontWeight: digitsWeight || "normal",
                                        letterSpacing: digitsLetterSpacing || "0",
                                        lineHeight: digitsLineHeight || "inherit",
                                        borderStyle: borderType || "none",
                                        borderWidth: borderWidth || "0",
                                        borderColor: borderColor || "#000",
                                        borderRadius: borderRadius || "0"

                                    }}
                                >
                                    00
                                </span>
                                <span className={`premium-countdown__period premium-countdown__units-months`}
                                    style={{
                                        display: contentDisplay || "block",
                                        color: unitsColor || "#000",
                                        fontSize: unitsSize || "0",
                                        fontWeight: unitsWeight || "normal",
                                        letterSpacing: unitsLetterSpacing || "0",
                                        lineHeight: unitsLineHeight || "inherit",
                                        margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px`
                                    }}
                                >
                                    {monthLabel}
                                </span>
                            </span>
                        </span>
                    )}
                    {weeksCheck && (
                        <span className={`premium-countdown__section`} style={{ margin: `0px ${unitsSpace}px 10px ${unitsSpace}px` }}>
                            <span className={`premium-countdown__time-mid premium-countdown__get-date`} data-date={dateTime}
                                style={{
                                    display: contentDisplay === "inline-block" ? "flex" : "block",
                                    alignItems: contentDisplay === "inline-block" ? "center" : "normal"
                                }}
                            >
                                <span className={`premium-countdown__amount  premium-countdown__digits-weeks`}
                                    style={{
                                        display: contentDisplay || "block",
                                        color: digitsColor || "#000",
                                        backgroundColor: digitsBgColor || "transparent",
                                        fontSize: digitsSize || "0",
                                        fontWeight: digitsWeight || "normal",
                                        letterSpacing: digitsLetterSpacing || "0",
                                        lineHeight: digitsLineHeight || "inherit",
                                        borderStyle: borderType || "none",
                                        borderWidth: borderWidth || "0",
                                        borderColor: borderColor || "#000",
                                        borderRadius: borderRadius || "0"
                                    }}
                                >
                                    00
                                </span>
                                <span className={`premium-countdown__period premium-countdown__units-weeks`}
                                    style={{
                                        display: contentDisplay || "block",
                                        color: unitsColor || "#000",
                                        fontSize: unitsSize || "0",
                                        fontWeight: unitsWeight || "normal",
                                        letterSpacing: unitsLetterSpacing || "0",
                                        lineHeight: unitsLineHeight || "inherit",
                                        margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px`
                                    }}
                                >
                                    {weekLabel}
                                </span>
                            </span>
                        </span>
                    )}
                    {daysCheck && (
                        <span className={`premium-countdown__section`} style={{ margin: `0px ${unitsSpace}px 10px ${unitsSpace}px` }}>
                            <span className={`premium-countdown__time-mid premium-countdown__get-date`} data-date={dateTime}
                                style={{
                                    display: contentDisplay === "inline-block" ? "flex" : "block",
                                    alignItems: contentDisplay === "inline-block" ? "center" : "normal"
                                }}
                            >
                                <span className={`premium-countdown__amount  premium-countdown__digits-days`}
                                    style={{
                                        display: contentDisplay || "block",
                                        color: digitsColor || "#000",
                                        backgroundColor: digitsBgColor || "transparent",
                                        fontSize: digitsSize || "0",
                                        fontWeight: digitsWeight || "normal",
                                        letterSpacing: digitsLetterSpacing || "0",
                                        lineHeight: digitsLineHeight || "inherit",
                                        borderStyle: borderType || "none",
                                        borderWidth: borderWidth || "0",
                                        borderColor: borderColor || "#000",
                                        borderRadius: borderRadius || "0"
                                    }}
                                >
                                    00
                                </span>
                                <span className={`premium-countdown__period premium-countdown__units-days`}
                                    style={{
                                        display: contentDisplay || "block",
                                        color: unitsColor || "#000",
                                        fontSize: unitsSize || "0",
                                        fontWeight: unitsWeight || "normal",
                                        letterSpacing: unitsLetterSpacing || "0",
                                        lineHeight: unitsLineHeight || "inherit",
                                        margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px`
                                    }}
                                >
                                    {dayLabel}
                                </span>
                            </span>
                        </span>
                    )}
                    {hoursCheck && (
                        <span className={`premium-countdown__section`} style={{ margin: `0px ${unitsSpace}px 10px ${unitsSpace}px` }}>
                            <span className={`premium-countdown__time-mid premium-countdown__get-date`} data-date={dateTime}
                                style={{
                                    display: contentDisplay === "inline-block" ? "flex" : "block",
                                    alignItems: contentDisplay === "inline-block" ? "center" : "normal"
                                }}
                            >
                                <span className={`premium-countdown__amount  premium-countdown__digits-hours`}
                                    style={{
                                        display: contentDisplay || "block",
                                        color: digitsColor || "#000",
                                        backgroundColor: digitsBgColor || "transparent",
                                        fontSize: digitsSize || "0",
                                        fontWeight: digitsWeight || "normal",
                                        letterSpacing: digitsLetterSpacing || "0",
                                        lineHeight: digitsLineHeight || "inherit",
                                        borderStyle: borderType || "none",
                                        borderWidth: borderWidth || "0",
                                        borderColor: borderColor || "#000",
                                        borderRadius: borderRadius || "0"
                                    }}
                                >
                                    23
                                </span>
                                <span className={`premium-countdown__period premium-countdown__units-hours`}
                                    style={{
                                        display: contentDisplay || "block",
                                        color: unitsColor || "#000",
                                        fontSize: unitsSize || "0",
                                        fontWeight: unitsWeight || "normal",
                                        letterSpacing: unitsLetterSpacing || "0",
                                        lineHeight: unitsLineHeight || "inherit",
                                        margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px`
                                    }}
                                >
                                    {hourLabel}
                                </span>
                            </span>
                        </span>
                    )}
                    {minutesCheck && (
                        <span className={`premium-countdown__section`} style={{ margin: `0px ${unitsSpace}px 10px ${unitsSpace}px` }}>
                            <span className={`premium-countdown__time-mid premium-countdown__get-date`} data-date={dateTime}
                                style={{
                                    display: contentDisplay === "inline-block" ? "flex" : "block",
                                    alignItems: contentDisplay === "inline-block" ? "center" : "normal"
                                }}
                            >
                                <span className={`premium-countdown__amount  premium-countdown__digits-minutes`}
                                    style={{
                                        display: contentDisplay || "block",
                                        color: digitsColor || "#000",
                                        backgroundColor: digitsBgColor || "transparent",
                                        fontSize: digitsSize || "0",
                                        fontWeight: digitsWeight || "normal",
                                        letterSpacing: digitsLetterSpacing || "0",
                                        lineHeight: digitsLineHeight || "inherit",
                                        borderStyle: borderType || "none",
                                        borderWidth: borderWidth || "0",
                                        borderColor: borderColor || "#000",
                                        borderRadius: borderRadius || "0"
                                    }}
                                >
                                    16
                                </span>
                                <span className={`premium-countdown__period premium-countdown__units-minutes`}
                                    style={{
                                        display: contentDisplay || "block",
                                        color: unitsColor || "#000",
                                        fontSize: unitsSize || "0",
                                        fontWeight: unitsWeight || "normal",
                                        letterSpacing: unitsLetterSpacing || "0",
                                        lineHeight: unitsLineHeight || "inherit",
                                        margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px`
                                    }}
                                >
                                    {minuteLabel}
                                </span>
                            </span>
                        </span>
                    )}
                    {secondsCheck && (
                        <span className={`premium-countdown__section`} style={{ margin: `0px ${unitsSpace}px 10px ${unitsSpace}px` }}>
                            <span className={`premium-countdown__time-mid premium-countdown__get-date`} data-date={dateTime}
                                style={{
                                    display: contentDisplay === "inline-block" ? "flex" : "block",
                                    alignItems: contentDisplay === "inline-block" ? "center" : "normal"
                                }}
                            >
                                <span className={`premium-countdown__amount premium-countdown__digits-seconds`}
                                    style={{
                                        display: contentDisplay || "block",
                                        color: digitsColor || "#000",
                                        backgroundColor: digitsBgColor || "transparent",
                                        fontSize: digitsSize || "0",
                                        fontWeight: digitsWeight || "normal",
                                        letterSpacing: digitsLetterSpacing || "0",
                                        lineHeight: digitsLineHeight || "inherit",
                                        borderStyle: borderType || "none",
                                        borderWidth: borderWidth || "0",
                                        borderColor: borderColor || "#000",
                                        borderRadius: borderRadius || "0"
                                    }}
                                >
                                    37
                                </span>
                                <span className={`premium-countdown__period premium-countdown__units-seconds`}
                                    style={{
                                        display: contentDisplay || "block",
                                        color: unitsColor || "#000",
                                        fontSize: unitsSize || "0",
                                        fontWeight: unitsWeight || "normal",
                                        letterSpacing: unitsLetterSpacing || "0",
                                        lineHeight: unitsLineHeight || "inherit",
                                        margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px`
                                    }}
                                >
                                    {secondLabel}
                                </span>
                            </span>
                        </span>
                    )}

                </span>
            </div>
        </div>
    )

};

export default save;