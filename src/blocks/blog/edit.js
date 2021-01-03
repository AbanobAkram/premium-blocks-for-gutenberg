import PremiumSizeUnits from "../../components/premium-size-units";
import PremiumRange from "../../components/premium-range-responsive";
import CarouselComponent from "./Carousel";
import PremiumFilters from "../../components/premium-filters";
import PremiumTypo from "../../components/premium-typo";
import Blog from "./blog";

const { __ } = wp.i18n;

const { Component, Fragment } = wp.element;

const {
  PanelBody,
  Placeholder,
  QueryControls,
  RangeControl,
  SelectControl,
  Spinner,
  ToggleControl,
  TabPanel,
  ButtonGroup,
  Button,
  Dashicon,
  TextControl,
  IconButton,
  RadioControl,
} = wp.components;

const {
  InspectorControls,
  BlockAlignmentToolbar,
  BlockControls,
  ColorPalette,
} = wp.editor;
const { withSelect, select } = wp.data;
const latestPosts = null;
class edit extends Component {
  constructor() {
    super(...arguments);
  }
  componentDidMount() {}
  render() {
    const orderSelect = [
      { label: "None", value: "None" },
      { label: "ID", value: "ID" },
      { label: "Author", value: "Author" },
      { label: "Title", value: "Title" },
      { label: "Name", value: "Name" },
      { label: "Date", value: "Date" },
      { label: "last Modified", value: "last Modified" },
      { label: "Random", value: "Random" },
      { label: "Number Of Comments", value: "Number Of Comments" },
    ];
    const hoverEffects = [
      { label: "None", value: "None" },
      { label: "Zoom in", value: "Zoom in " },
      { label: "Zoom out", value: "Zoom out" },
      { label: "Scale", value: "Scale" },
      { label: "GrayScale", value: "GrayScale" },
      { label: "Blur", value: "Blur" },
      { label: "Bright", value: "Bright" },
      { label: "Sepia", value: "Sepia" },
      { label: "Translate", value: "Translate" },
    ];
    const hasPosts = Array.isArray(latestPosts) && latestPosts.length;

    const {
      attributes,
      categoriesList,
      setAttributes,
      latestPosts,
      isSelected,
      taxonomyList,
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
      navigationArrow,
      arrowPosition,
      pagination,
      pageLimit,
      paginationPosition,
      overlayColor,
      blur,
      bright,
      contrast,
      saturation,
      hue,
      firstContentLetter,
      firstContentStyle,
      firstContentUpper,
      firstContentWeight,
      firstContentfontSize,
      firstContentfontSizeType,
      firstContentfontSizeMobile,
      firstContentfontSizeTablet,
      typeColor,
      secondContentLetter,
      secondContentStyle,
      secondContentUpper,
      secondContentWeight,
      secondContentfontSize,
      secondContentfontSizeType,
      secondContentfontSizeMobile,
      secondContentfontSizeTablet,
      metaColor,
      typoColor,
      hoverColor,
      linkColor,
      sepaColor,
      postContentLetter,
      postContentStyle,
      postContentUpper,
      postContentWeight,
      postContentfontSize,
      postContentfontSizeType,
      postContentfontSizeMobile,
      postContentfontSizeTablet,
      textColor,
    } = attributes;

    let categoryListOptions = [{ value: "", label: __("All") }];
    if (categoriesList) {
      Object.keys(categoriesList).map((item, thisIndex) => {
        return categoryListOptions.push({
          value: categoriesList[item]["id"],
          label: categoriesList[item]["name"],
        });
      });
    }
    return [
      isSelected && (
        <InspectorControls>
          <PanelBody
            title={__("General")}
            className="premium-panel-body"
            initialOpen={true}
          >
            <ToggleControl
              label={__("Grid")}
              checked={gridCheck}
              onChange={(newCheck) => setAttributes({ gridCheck: newCheck })}
            />
            {
              gridCheck && [
                <SelectControl
                  label={__("Layout")}
                  options={[
                    { label: "Even", value: "Even" },
                    {
                      label: "Masonry",
                      value: "Masonry",
                    },
                  ]}
                  value={layoutValue}
                  onChange={(newLayout) =>
                    setAttributes({ layoutValue: newLayout })
                  }
                />,

                <SelectControl
                  label={__("Number of Columns")}
                  value={numOfColumns}
                  options={[
                    { label: "2 Columns", value: 2 },
                    { label: "3 Columns", value: 3 },
                    { label: "4 Columns", value: 4 },
                    { label: "5 Columns", value: 5 },
                    { label: "6 Columns", value: 6 },
                  ]}
                  onChange={(newNumberofCol) =>
                    setAttributes({ numOfColumns: newNumberofCol })
                  }
                />,
              ]
              // <PremiumRange
              //   setAttributes={setAttributes}
              //   rangeType={{
              //     value: sizeType,
              //     label: __("switchSizeType"),
              //   }}
              //   range={{ value: size, label: __("switchSize") }}
              //   rangeMobile={{
              //     value: sizeMobile,
              //     label: __("switchSizeMobile"),
              //   }}
              //   rangeTablet={{
              //     value: sizeTablet,
              //     label: __("switchSizeTablet"),
              //   }}
              //   rangeLabel={__("Number of Columns")}
              // />
            }

            <RangeControl
              label={__("Number of Posts Per Page")}
              onChange={(newNumberofPosts) =>
                setAttributes({ numOfPosts: newNumberofPosts })
              }
              value={numOfPosts}
              min={1}
            />
          </PanelBody>
          <PanelBody
            title={__("Query")}
            className="premium-panel-body"
            initialOpen={false}
          >
            <SelectControl
              label={__("Filter By")}
              options={[
                { label: "Default", value: "Default" },
                { label: "Categories", value: "category" },
                { label: "Tags", value: "post_tag" },
              ]}
              value={postFilter}
              onChange={(newPostFilter) =>
                setAttributes({ postFilter: newPostFilter })
              }
            />

            {"Default" !== postFilter && (
              <SelectControl
                label={taxonomyList["post_tag"]["label"]}
                options={categoryListOptions}
                value={categories}
                onChange={(value) => setAttributes({ categories: value })}
              />
            )}
            <RangeControl
              label={__("Offset")}
              onChange={(newOffsetNum) =>
                setAttributes({ offsetNum: newOffsetNum })
              }
              value={offsetNum}
              min={0}
            />
            <ToggleControl
              label={__("Exclude Current Post")}
              checked={currentPost}
              help={
                currentPost
                  ? "This option will remove the current post from the query. "
                  : " "
              }
              onChange={() => setAttributes({ currentPost: !currentPost })}
            />
            <hr />
            <SelectControl
              label={__("Order By")}
              options={orderSelect}
              value={orderBy}
              onChange={(Orderby) => setAttributes({ orderBy: Orderby })}
            />
            <SelectControl
              label={__("Order")}
              options={[
                { value: "desc", label: __("Descending") },
                { value: "asc", label: __("Ascending") },
              ]}
              value={order}
              onChange={(NewOrder) => setAttributes({ order: NewOrder })}
            />
          </PanelBody>
          <PanelBody
            title={__("Featured Image")}
            className="premium-panel-body"
            initialOpen={false}
          >
            <ToggleControl
              label={__("Show Featured Iamge")}
              checked={featuredImage}
              onChange={() => setAttributes({ featuredImage: !featuredImage })}
            />
            {featuredImage && [
              <SelectControl
                label={__("Hover Effect")}
                options={hoverEffects}
                value={hoverEffect}
                onChange={(newEffect) =>
                  setAttributes({ hoverEffect: newEffect })
                }
              />,
              <SelectControl
                label={__("Image Size")}
                options={[
                  { label: "1536x1536", value: "1536x1536" },
                  { label: "2048x2048", value: "2048x2048" },
                  {
                    label: "ab-block-post-grid-landscape",
                    value: "ab-block-post-grid-landscape",
                  },
                  {
                    label: "ab-block-post-grid-square",
                    value: "ab-block-post-grid-square",
                  },
                  { label: "full", value: "full" },
                  { label: "large", value: "large" },
                  { label: "medium", value: "medium" },
                  { label: "medium_large", value: "medium_large" },
                  { label: "thumbnail", value: "thumbnail" },
                ]}
                value={imageSize}
                onChange={(newSizeImage) =>
                  setAttributes({ imageSize: newSizeImage })
                }
              />,
              <PremiumSizeUnits
                units={["px", "em"]}
                onChangeSizeUnit={(newValue) => {
                  setAttributes({ HeightU: newValue });
                }}
              />,
              <RangeControl
                label={__("Height")}
                value={height}
                onChange={(newHeight) => setAttributes({ height: newHeight })}
                max={HeightU === "em" ? 50 : 800}
              />,
            ]}
          </PanelBody>
          <PanelBody
            title={__("Display Options")}
            className="premium-panel-body"
            initialOpen={false}
          >
            <PremiumSizeUnits
              onChangeSizeUnit={(newUnit) => {
                setAttributes({ rowGapUnit: newUnit });
              }}
            />
            <RangeControl
              label={__("Row Spacing")}
              value={rowGap}
              onChange={(newRowGap) => setAttributes({ rowGap: newRowGap })}
              max={rowGapUnit === "em" ? 10 : 200}
            />
            <RangeControl
              label={__("Column Spacing")}
              value={columnGap}
              onChange={(newcolumnGap) =>
                setAttributes({ columnGap: newcolumnGap })
              }
              max={50}
            />
            <h2> {__("Alignment")}</h2>
            <IconButton
              key={"left"}
              icon="editor-alignleft"
              label="Left"
              onClick={() => setAttributes({ filterPosition: "left" })}
              aria-pressed={"left" === filterPosition}
              isPrimary={"left" === filterPosition}
            />
            <IconButton
              key={"center"}
              icon="editor-aligncenter"
              label="Right"
              onClick={() => setAttributes({ filterPosition: "center" })}
              aria-pressed={"center" === filterPosition}
              isPrimary={"center" === filterPosition}
            />
            <IconButton
              key={"right"}
              icon="editor-alignright"
              label="Right"
              onClick={() => setAttributes({ filterPosition: "right" })}
              aria-pressed={"right" === filterPosition}
              isPrimary={"right" === filterPosition}
            />
          </PanelBody>
          <PanelBody
            title={__("Post Options")}
            className="premium-panel-body"
            initialOpen={false}
          >
            <ToggleControl
              label={__("Show Post Content")}
              checked={displayPostContent}
              onChange={() =>
                setAttributes({ displayPostContent: !displayPostContent })
              }
            />
            {displayPostContent && [
              <SelectControl
                label={__("Get Content From")}
                options={[
                  { label: "Post Full Content", value: "Post Full Content" },
                  { label: "Post Excerpt", value: "Post Excerpt" },
                ]}
                value={displayPostExcerpt}
                onChange={(newExcerpt) =>
                  setAttributes({ displayPostExcerpt: newExcerpt })
                }
              />,
              <SelectControl
                label={__("Excerpt Type")}
                options={[
                  { label: "Dots", value: "Dots" },
                  { label: "Link", value: "Link" },
                ]}
                value={excerptType}
                onChange={(newExcerptType) =>
                  setAttributes({ excerptType: newExcerptType })
                }
              />,
              excerptType === "Link"
                ? [
                    <ToggleControl
                      label={__("Full Width")}
                      checked={fullWidth}
                      onChange={() =>
                        setAttributes({
                          fullWidth: !fullWidth,
                        })
                      }
                    />,
                    <TextControl
                      label={__("Read More Text")}
                      value={readMoreText}
                      onChange={(newText) =>
                        setAttributes({ readMoreText: newText })
                      }
                    />,
                  ]
                : null,
            ]}
            <ToggleControl
              label={__("Author Meta")}
              checked={displayPostAuthor}
              onChange={() =>
                setAttributes({ displayPostAuthor: !displayPostAuthor })
              }
            />
            <ToggleControl
              label={__("Date Meta")}
              checked={displayPostDate}
              onChange={() =>
                setAttributes({ displayPostDate: !displayPostDate })
              }
            />
            <ToggleControl
              label={__("Category Meta")}
              checked={displayPostCategories}
              onChange={() =>
                setAttributes({ displayPostCategories: !displayPostCategories })
              }
            />
            <ToggleControl
              label={__("Comments Meta")}
              checked={displayPostComment}
              onChange={() =>
                setAttributes({ displayPostComment: !displayPostComment })
              }
            />
            <ToggleControl
              label={__("Tags Meta")}
              checked={displayPostTags}
              onChange={() =>
                setAttributes({ displayPostTags: !displayPostTags })
              }
            />
          </PanelBody>
          {!pagination && (
            <PanelBody
              title={__("Carousel")}
              className="premium-panel-body"
              initialOpen={false}
            >
              <ToggleControl
                label={__("Enable Carousel")}
                checked={Carousel}
                onChange={() => setAttributes({ Carousel: !Carousel })}
              />
              {Carousel && (
                <Fragment>
                  <ToggleControl
                    label={__("Auto Play")}
                    checked={Autoplay}
                    onChange={() => setAttributes({ Autoplay: !Autoplay })}
                  />
                  <RangeControl
                    label={__("Slides To Scroll")}
                    value={slideToScroll}
                    onChange={(newSlideScroll) =>
                      setAttributes({ slideToScroll: newSlideScroll })
                    }
                  />
                  <RangeControl
                    label={__("Autoplay Speed")}
                    value={autoplaySpeed}
                    onChange={(newSpeed) =>
                      setAttributes({ autoplaySpeed: newSpeed })
                    }
                  />
                  <ToggleControl
                    label={__("Center Mode")}
                    checked={centerMode}
                    onChange={(centerModeValue) =>
                      setAttributes({ centerMode: centerModeValue })
                    }
                  />
                  <RangeControl
                    label={__("Slides' Spacing")}
                    value={slideSpacing}
                    onChange={(slideSpacingValue) =>
                      setAttributes({ slideSpacing: slideSpacingValue })
                    }
                  />
                  <ToggleControl
                    label={__("Navigation Dots")}
                    checked={navigationDots}
                    onChange={() =>
                      setAttributes({ navigationDots: !navigationDots })
                    }
                  />
                  <ToggleControl
                    label={__("Navigation Arrows")}
                    checked={navigationArrow}
                    onChange={() =>
                      setAttributes({ navigationArrow: !navigationArrow })
                    }
                  />
                  {navigationArrow && (
                    <RangeControl
                      label={__("Arrows Position")}
                      value={arrowPosition}
                      onChange={(arrowPositionValue) =>
                        setAttributes({ arrowPosition: arrowPositionValue })
                      }
                    />
                  )}
                </Fragment>
              )}
            </PanelBody>
          )}
          {!Carousel && (
            <PanelBody
              title={__("Pagination")}
              className="premium-panel-body"
              initialOpen={false}
            >
              <ToggleControl
                label={__("Enable Pagination")}
                checked={pagination}
                onChange={() => setAttributes({ pagination: !pagination })}
              />
              {pagination && (
                <Fragment>
                  <RangeControl
                    label={__("Page Limit")}
                    value={pageLimit}
                    onChange={(pageLimitValue) =>
                      setAttributes({ pageLimit: pageLimitValue })
                    }
                  />
                  <h2> {__("Alignment")}</h2>
                  <IconButton
                    key={"left"}
                    icon="editor-alignleft"
                    label="Left"
                    onClick={() =>
                      setAttributes({ paginationPosition: "left" })
                    }
                    aria-pressed={"left" === paginationPosition}
                    isPrimary={"left" === paginationPosition}
                  />
                  <IconButton
                    key={"center"}
                    icon="editor-aligncenter"
                    label="Right"
                    onClick={() =>
                      setAttributes({ paginationPosition: "center" })
                    }
                    aria-pressed={"center" === paginationPosition}
                    isPrimary={"center" === paginationPosition}
                  />
                  <IconButton
                    key={"right"}
                    icon="editor-alignright"
                    label="Right"
                    onClick={() =>
                      setAttributes({ paginationPosition: "right" })
                    }
                    aria-pressed={"right" === paginationPosition}
                    isPrimary={"right" === paginationPosition}
                  />
                </Fragment>
              )}
            </PanelBody>
          )}
          <PanelBody
            title={__("Image Style")}
            className="premium-panel-body"
            initialOpen={false}
          >
            <ColorPalette
              label={__("Overlay Color")}
              value={overlayColor}
              onChange={(newColorOverlay) =>
                setAttributes({ overlayColor: newColorOverlay })
              }
            />
            <PremiumFilters
              blur={blur}
              bright={bright}
              contrast={contrast}
              saturation={saturation}
              hue={hue}
              onChangeBlur={(value) => setAttributes({ blur: value })}
              onChangeBright={(value) => setAttributes({ bright: value })}
              onChangeContrast={(value) => setAttributes({ contrast: value })}
              onChangeSat={(value) => setAttributes({ saturation: value })}
              onChangeHue={(value) => setAttributes({ hue: value })}
            />
          </PanelBody>
          <PanelBody
            title={__("Post Title Style")}
            className="premium-panel-body"
            initialOpen={false}
          >
            <PremiumTypo
              components={[
                "responsiveSize",
                "weight",
                "style",
                "upper",
                "spacing",
              ]}
              setAttributes={setAttributes}
              fontSizeType={{
                value: firstContentfontSizeType,
                label: __("firstContentfontSizeType"),
              }}
              fontSize={{
                value: firstContentfontSize,
                label: __("firstContentfontSize"),
              }}
              fontSizeMobile={{
                value: firstContentfontSizeMobile,
                label: __("firstContentfontSizeMobile"),
              }}
              fontSizeTablet={{
                value: firstContentfontSizeTablet,
                label: __("firstContentfontSizeTablet"),
              }}
              weight={firstContentWeight}
              style={firstContentStyle}
              spacing={firstContentLetter}
              upper={firstContentUpper}
              onChangeWeight={(newWeight) =>
                setAttributes({ firstContentWeight: newWeight || 500 })
              }
              onChangeStyle={(newStyle) =>
                setAttributes({ firstContentStyle: newStyle })
              }
              onChangeSpacing={(newValue) =>
                setAttributes({ firstContentLetter: newValue })
              }
              onChangeUpper={(check) =>
                setAttributes({ firstContentUpper: check })
              }
            />
            <ColorPalette
              label={__("Color")}
              value={typoColor}
              onChange={(newTypoColor) =>
                setAttributes({ typoColor: newTypoColor })
              }
            />
            <ColorPalette
              label={__("Hover Color")}
              value={hoverColor}
              onChange={(newHoverColor) =>
                setAttributes({ hoverColor: newHoverColor })
              }
            />
          </PanelBody>
          <PanelBody
            title={__("Metadata Style")}
            className="premium-panel-body"
            initialOpen={false}
          >
            <PremiumTypo
              components={[
                "responsiveSize",
                "weight",
                "style",
                "upper",
                "spacing",
              ]}
              setAttributes={setAttributes}
              fontSizeType={{
                value: secondContentfontSizeType,
                label: __("secondContentfontSizeType"),
              }}
              fontSize={{
                value: secondContentfontSize,
                label: __("secondContentfontSize"),
              }}
              fontSizeMobile={{
                value: secondContentfontSizeMobile,
                label: __("secondContentfontSizeMobile"),
              }}
              fontSizeTablet={{
                value: secondContentfontSizeTablet,
                label: __("secondContentfontSizeTablet"),
              }}
              weight={secondContentWeight}
              style={secondContentStyle}
              spacing={secondContentLetter}
              upper={secondContentUpper}
              onChangeWeight={(newWeight) =>
                setAttributes({ secondContentWeight: newWeight || 500 })
              }
              onChangeStyle={(newStyle) =>
                setAttributes({ secondContentStyle: newStyle })
              }
              onChangeSpacing={(newValue) =>
                setAttributes({ secondContentLetter: newValue })
              }
              onChangeUpper={(check) =>
                setAttributes({ secondContentUpper: check })
              }
            />
            <ColorPalette
              label={__("Text Color")}
              value={metaColor}
              onChange={(newMetaColor) =>
                setAttributes({ metaColor: newMetaColor })
              }
            />
            <ColorPalette
              label={__("Links Hover Color")}
              value={linkColor}
              onChange={(newLinkColor) =>
                setAttributes({ linkColor: newLinkColor })
              }
            />
            <ColorPalette
              label={__("Separator Color")}
              value={sepaColor}
              onChange={(newSepaColor) =>
                setAttributes({ sepaColor: newSepaColor })
              }
            />
          </PanelBody>
          <PanelBody
            title={__("Post Content Style")}
            className="premium-panel-body"
            initialOpen={false}
          >
            <PremiumTypo
              components={[
                "responsiveSize",
                "weight",
                "style",
                "upper",
                "spacing",
              ]}
              setAttributes={setAttributes}
              fontSizeType={{
                value: postContentfontSizeType,
                label: __("postContentfontSizeType"),
              }}
              fontSize={{
                value: postContentfontSize,
                label: __("postContentfontSize"),
              }}
              fontSizeMobile={{
                value: postContentfontSizeMobile,
                label: __("postContentfontSizeMobile"),
              }}
              fontSizeTablet={{
                value: postContentfontSizeTablet,
                label: __("postContentfontSizeTablet"),
              }}
              weight={postContentWeight}
              style={postContentStyle}
              spacing={postContentLetter}
              upper={postContentUpper}
              onChangeWeight={(newWeight) =>
                setAttributes({ postContentWeight: newWeight || 500 })
              }
              onChangeStyle={(newStyle) =>
                setAttributes({ postContentStyle: newStyle })
              }
              onChangeSpacing={(newValue) =>
                setAttributes({ postContentLetter: newValue })
              }
              onChangeUpper={(check) =>
                setAttributes({ postContentUpper: check })
              }
            />
            <ColorPalette
              label={__("Text Color")}
              value={textColor}
              onChange={(newTextColor) =>
                setAttributes({ textColor: newTextColor })
              }
            />
          </PanelBody>
        </InspectorControls>
      ),

      latestPosts && categoriesList ? (
        <Blog
          latestPosts={latestPosts}
          attributes={attributes}
          categoriesList={categoriesList}
        />
      ) : (
        <Spinner />
      ),
    ];
  }
}
export default withSelect((select, props) => {
  const {
    categories,
    numOfPosts,
    order,
    orderBy,
    postType,
    postFilter,
    paginationMarkup,
    pagination,
    currentPost,
  } = props.attributes;
  const { setAttributes } = props;
  const { getEntityRecords } = select("core");

  let allTaxonomy = uagb_blocks_info.all_taxonomy;
  let currentTax = allTaxonomy["post"];
  let taxonomy = "";
  let categoriesList = wp.data
    .select("core")
    .getEntityRecords("taxonomy", "category");
  let rest_base = "";

  if ("undefined" != typeof currentTax) {
    if ("undefined" != typeof currentTax["taxonomy"][postFilter]) {
      rest_base =
        currentTax["taxonomy"][postFilter]["rest_base"] == false ||
        currentTax["taxonomy"][postFilter]["rest_base"] == null
          ? currentTax["taxonomy"][postFilter]["name"]
          : currentTax["taxonomy"][postFilter]["rest_base"];
    }

    if ("" != postFilter) {
      if (
        "undefined" != typeof currentTax["terms"] &&
        "undefined" != typeof currentTax["terms"][postFilter]
      ) {
        categoriesList = currentTax["terms"][postFilter];
      }
    }
  }
  let latestPostsQuery = {
    order: order,
    orderBy: orderBy,
    per_page: numOfPosts,
  };
  if (true === pagination) {
    $.ajax({
      url: uagb_blocks_info.ajax_url,
      data: {
        action: "uagb_post_pagination",
        attributes: props.attributes,
        nonce: uagb_blocks_info.uagb_ajax_nonce,
      },
      dataType: "json",
      type: "POST",
      success: function (data) {
        setAttributes({ paginationMarkup: data.data });
      },
    });
  }

  if (currentPost) {
    latestPostsQuery["exclude"] = select("core/editor").getCurrentPostId();
  }
  latestPostsQuery[rest_base] = categories;

  return {
    latestPosts: getEntityRecords("postType", "post", latestPostsQuery),
    categoriesList: categoriesList,
    taxonomyList:
      "undefined" != typeof currentTax ? currentTax["taxonomy"] : [],
  };
})(edit);
