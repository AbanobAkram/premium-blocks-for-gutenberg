const { __ } = wp.i18n;

import PbgIcon from "../icons";
import edit from "./edit";
//import save from "./save";

const { registerBlockType } = wp.blocks;

registerBlockType("premium/post-blog", {
  title: __("Premium Blog"),
  icon: <PbgIcon icon="content-switcher" />,
  category: "premium-blocks",
  attributes: {
    blockID: {
      type: "string",
    },
    DisplayTitle: {
      type: "boolean",
      value: true,
    },
    DisplayDate: {
      type: "boolean",
      default: true,
    },
    DisplayComment: {
      type: "boolean",
      value: true,
    },
    DisplayExcert: {
      type: "boolean",
      value: true,
    },
    DisplayAuthor: {
      type: "boolean",
      value: true,
    },
    DisplayImage: {
      type: "boolean",
      value: true,
    },
    DisplayTaxonomy: {
      type: "boolean",
      value: true,
    },
    DisplayPostLink: {
      type: "boolean",
      value: true,
    },
    newTab: {
      type: "boolean",
      value: false,
    },
    borderWidth: {
      type: "number",
    },
    ctaText: {
      type: "string",
    },
    borderRadius: {
      type: "number",
    },
    borderColor: {
      type: "string",
    },
    vPadding: {
      type: "number",
    },
    hPadding: {
      type: "number",
    },
    categories: {
      type: "string",
    },
    rowGap: {
      type: "number",
    },
    columnGap: {
      type: "number",
    },
    bgColor: {
      type: "string",
    },
    contentPadding: {
      type: "number",
    },
    contentPaddingMobile: {
      type: "string",
    },
    gridCheck: {
      type: "boolean",
      value: false,
    },
    equalHeight: {
      type: "boolean",
      value: false,
    },

    numOfPosts: {
      type: "number",
      value: 1,
    },
    numOfColumns: {
      type: "number",
      value: "2",
    },
    offsetNum: {
      type: "number",
      value: 0,
    },
    currentPost: {
      type: "boolean",
      value: false,
    },
    orderBy: {
      type: "string",
      value: "Date",
    },
    order: {
      type: "string",
      value: "Descending",
    },
    featuredImage: {
      type: "boolean",
      value: false,
    },
    hoverEffect: {
      type: "string",
      value: "None",
    },
    height: {
      type: "number",
      value: "default",
    },
    HeightU: {
      type: "string",
      value: "px",
    },

    rowGapUnit: {
      type: "string",
      value: "px",
    },
    columnGap: {
      type: "number",
    },
    postPosition: {
      type: "string",
      value: "center",
    },
    displayPostContent: {
      type: "boolean",
      value: false,
    },
    displayPostExcerpt: {
      type: "string",
      value: "Post Excerpt",
    },
    excerptType: {
      type: "string",
      value: "Dots",
    },
    fullWidth: {
      type: "boolean",
      value: false,
    },
    readMoreText: {
      type: "string",
      value: "Read More",
    },
    displayPostAuthor: {
      type: "boolean",
      value: "true",
    },
    displayPostDate: {
      type: "boolean",
      value: "true",
    },
    displayPostCategories: {
      type: "boolean",
      value: "true",
    },
    displayPostComment: {
      type: "boolean",
      value: "true",
    },
    displayPostTags: {
      type: "boolean",
      value: true,
    },
    filterTabs: {
      type: "boolean",
      value: false,
    },
    getTabsFrom: {
      type: "string",
      value: "Categories",
    },
    tabLabel: {
      type: "string",
      value: "All",
    },
    filterPostion: {
      type: "string",
    },
    linkNewTab: {
      type: "boolean",
      value: false,
    },
    layoutValue: {
      type: "string",
      value: "Even",
    },
    postFilter: {
      type: "string",
      value: "Default",
    },
    sizeType: {
      type: "string",
      default: "px",
    },
    size: {
      type: "number",
      default: 20,
    },
    sizeMobile: {
      type: "number",
      default: 20,
    },
    sizeTablet: {
      type: "number",
      default: 20,
    },
    Carousel: {
      type: "boolean",
      value: false,
    },
    Autoplay: {
      type: "boolean",
      value: false,
    },
    slideToScroll: {
      type: "number",
      value: 0,
    },
    autoplaySpeed: {
      type: "number",
      value: 5000,
    },
    centerMode: {
      type: "boolean",
      value: false,
    },
    slideSpacing: {
      type: "number",
      value: 15,
    },
    navigationDots: {
      type: "boolean",
      value: true,
    },
    navigationArrow: {
      type: "boolean",
      value: false,
    },
    arrowPosition: {
      type: "number",
      value: 0,
    },
    pagination: {
      type: "boolean",
      value: false,
    },
    pageLimit: {
      type: "number",
      value: 5,
    },
    paginationPosition: {
      type: "string",
    },
    imageSize: {
      type: "number",
      value: "medium",
    },
  },
  // supports: {
  //   inserter: Blog,
  // },
  example: {},

  edit: edit,
  save: function () {},
});
