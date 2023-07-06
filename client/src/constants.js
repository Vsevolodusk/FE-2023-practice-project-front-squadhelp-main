import { Link } from "react-router-dom/cjs/react-router-dom.min";

const env = process.env.NODE_ENV || "development";
const serverIP = "localhost";
const serverPort = 5000;
export default {
  CUSTOMER: "customer",
  CREATOR: "creator",
  CONTEST_STATUS_ACTIVE: "active",
  CONTEST_STATUS_FINISHED: "finished",
  CONTEST_STATUS_PENDING: "pending",
  NAME_CONTEST: "name",
  LOGO_CONTEST: "logo",
  TAGLINE_CONTEST: "tagline",
  OFFER_STATUS_REJECTED: "rejected",
  OFFER_STATUS_WON: "won",
  OFFER_STATUS_PENDING: "pending",
  STATIC_IMAGES_PATH: "/staticImages/",
  ANONYM_IMAGE_PATH: "/staticImages/anonym.png",
  BASE_URL: `http://${serverIP}:${serverPort}/`,
  ACCESS_TOKEN: "accessToken",
  publicURL:
    env === "production"
      ? `http://${serverIP}:80/images/`
      : `http://${serverIP}:${serverPort}/public/images/`,
  NORMAL_PREVIEW_CHAT_MODE: "NORMAL_PREVIEW_CHAT_MODE",
  FAVORITE_PREVIEW_CHAT_MODE: "FAVORITE_PREVIEW_CHAT_MODE",
  BLOCKED_PREVIEW_CHAT_MODE: "BLOCKED_PREVIEW_CHAT_MODE",
  CATALOG_PREVIEW_CHAT_MODE: "CATALOG_PREVIEW_CHAT_MODE",
  CHANGE_BLOCK_STATUS: "CHANGE_BLOCK_STATUS",
  ADD_CHAT_TO_OLD_CATALOG: "ADD_CHAT_TO_OLD_CATALOG",
  CREATE_NEW_CATALOG_AND_ADD_CHAT: "CREATE_NEW_CATALOG_AND_ADD_CHAT",
  USER_INFO_MODE: "USER_INFO_MODE",
  CASHOUT_MODE: "CASHOUT_MODE",
  HEADER_ANIMATION_TEXT: [
    "a Company",
    "a Brand",
    "a Website",
    "a Service",
    "a Book",
    "a Business",
    "an App",
    "a Product",
    "a Startup",
  ],
  HeaderItems: [
    {
      title: "NAME IDEAS",
      linkItems: [
        {
          item: "Beauty",
          link: "http://www.google.com",
        },
        {
          item: "Consulting",
          link: "http://www.google.com",
        },
        {
          item: "E-Commerce",
          link: "http://www.google.com",
        },
        {
          item: "Fashion & Clothing",
          link: "http://www.google.com",
        },
        {
          item: "Finance",
          link: "http://www.google.com",
        },
        {
          item: "Real Estate",
          link: "http://www.google.com",
        },
        {
          item: "Tech",
          link: "http://www.google.com",
        },
        {
          item: "More Categories",
          link: "http://www.google.com",
        },
      ],
    },

    {
      title: "CONTESTS",
      linkItems: [
        {
          item: "HOW IT WORKS",
          link: "http://www.google.com",
        },
        {
          item: "PRICING",
          link: "/pricing",
        },
        {
          item: "AGENCY SERVICE",
          link: "http://www.google.com",
        },
        {
          item: "ACTIVE CONTESTS",
          link: "http://www.google.com",
        },
        {
          item: "WINNERS",
          link: "http://www.google.com",
        },
        {
          item: "LEADERBOARD",
          link: "http://www.google.com",
        },
        {
          item: "BECOME A CREATIVE",
          link: "http://www.google.com",
        },
      ],
    },
    {
      title: "Our Work",
      linkItems: [
        {
          item: "NAMES",
          link: "http://www.google.com",
        },
        {
          item: "TAGLINES",
          link: "http://www.google.com",
        },
        {
          item: "LOGOS",
          link: "http://www.google.com",
        },
        {
          item: "TESTIMONIALS",
          link: "http://www.google.com",
        },
      ]
    },
    {
      title: "Names For Sale",
      linkItems: [ 
        {
          item: "POPULAR NAMES",
          link: "http://www.google.com",
        },
        {
          item: "SHORT NAMES",
          link: "http://www.google.com",
        },
        {
          item: "INTRIGUING NAMES",
          link: "http://www.google.com",
        },
        {
          item: "NAMES BY CATEGORY",
          link: "http://www.google.com",
        },
        {
          item: "VISUAL NAME SEARCH",
          link: "http://www.google.com",
        },
        {
          item: "SELL YOUR DOMAINS",
          link: "http://www.google.com",
        },
      ]
    },
    {
      title: "Blog",
      linkItems: [
        {
          item: "ULTIMATE NAMING GUIDE",
          link: "http://www.google.com",
        },
        {
          item: "POETIC DEVICES IN BUSINESS NAMING",
          link: "http://www.google.com",
        },
        {
          item: "CROWDED BAR THEORY",
          link: "http://www.google.com",
        },
        {
          item: "ALL ARTICLES",
          link: "http://www.google.com",
        },
      ]
    },
  ],
  FooterItems: [
    {
      title: "SQUADHELP",
      items: ["About", "Contact", "How It Works?", "Testimonials", "Our Work"],
    },
    {
      title: "RESOURCES",
      items: [
        "How It Works",
        "Become a Creative",
        "Business Name Generator",
        "Discussion Forum",
        "Blog",
        "Download eBook",
        "Pricing",
        "Help & FAQs",
      ],
    },
    {
      title: "OUR SERVICES",
      items: [
        "Naming",
        "Logo Design",
        "Taglines",
        "Premium Names For Sale",
        "Creative Owned Names For Sale",
        "Audience Testing",
        "Trademark Research & Filling",
        "Managed Agency Service",
      ],
    },
    {
      title: "LEGAL",
      items: ["Terms of Service", "Privacy Policy", "Cookie Policy"],
    },
  ],
};
