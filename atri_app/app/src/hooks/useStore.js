import create from "zustand";

// unsafe merge state
// and mew properties will added or existing properties will be changed
// but the type of value of the property must not change
function mergeState(baseState, newState) {
  if (
    typeof newState === "object" &&
    !Array.isArray(newState) &&
    newState !== null
  ) {
    const keys = Object.keys(newState);
    keys.forEach((key) => {
      // create a new key in base if not exists
      if (!(key in baseState)) {
        baseState[key] = {};
      }
      if (typeof newState[key] === "object" && !Array.isArray(newState[key]))
        mergeState(baseState[key], newState[key]);
      else baseState[key] = newState[key];
    });
  }
}

const useStore = create((set) => {
  return {
    setPage: (pageName, newState) =>
      set((state) => {
        const pageState = JSON.parse(JSON.stringify(state[pageName]));
        mergeState(pageState, newState);
        return { [pageName]: pageState };
      }),
  };
});

export function updateStoreStateFromController(pageName, newState) {
  useStore.getState().setPage(pageName, newState);
}

const desktopModeProps = {
  ...{
  "Home": {
    "Headline": {
      "callbacks": {}
    },
    "Navbar_Container": {
      "callbacks": {}
    },
    "Nav_elements": {
      "callbacks": {}
    },
    "right": {
      "callbacks": {}
    },
    "cart": {
      "callbacks": {}
    },
    "navlinks": {
      "callbacks": {}
    },
    "home_view1": {
      "callbacks": {}
    },
    "body_container": {
      "callbacks": {}
    },
    "body": {
      "callbacks": {}
    },
    "left": {
      "callbacks": {}
    },
    "home_view2": {
      "callbacks": {}
    },
    "homeview2_container": {
      "callbacks": {}
    },
    "headlines2": {
      "callbacks": {}
    },
    "dualsport": {
      "callbacks": {}
    },
    "freetest": {
      "callbacks": {}
    },
    "freespin": {
      "callbacks": {}
    },
    "body_view2": {
      "callbacks": {}
    },
    "helemtsbody": {
      "callbacks": {}
    },
    "features": {
      "callbacks": {}
    },
    "features_container": {
      "callbacks": {}
    },
    "features_list_container": {
      "callbacks": {}
    },
    "Flex38": {
      "callbacks": {}
    },
    "Flex41": {
      "callbacks": {}
    },
    "Flex42": {
      "callbacks": {}
    },
    "pro_choic": {
      "callbacks": {}
    },
    "Flex44": {
      "callbacks": {}
    },
    "prochoice_left": {
      "callbacks": {}
    },
    "rating_icons": {
      "callbacks": {}
    },
    "prochoice_right": {
      "callbacks": {}
    },
    "Flex47": {
      "callbacks": {}
    },
    "shop_section_container": {
      "callbacks": {}
    },
    "shop_section": {
      "callbacks": {}
    },
    "items_container": {
      "callbacks": {}
    },
    "item_1": {
      "callbacks": {}
    },
    "text": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Product"
            }
          }
        ]
      }
    },
    "Flex81": {
      "callbacks": {}
    },
    "Flex80": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Product"
            }
          }
        ]
      }
    },
    "Flex344": {
      "callbacks": {}
    },
    "Flex343": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Product"
            }
          }
        ]
      }
    },
    "blog_section": {
      "callbacks": {}
    },
    "blogsection_continer": {
      "callbacks": {}
    },
    "blogs": {
      "callbacks": {}
    },
    "blog_one": {
      "callbacks": {}
    },
    "blog_two": {
      "callbacks": {}
    },
    "blog_three": {
      "callbacks": {}
    },
    "FOOTER": {
      "callbacks": {}
    },
    "footer_container": {
      "callbacks": {}
    },
    "top": {
      "callbacks": {}
    },
    "Flex108": {
      "callbacks": {}
    },
    "pages_footer_container": {
      "callbacks": {}
    },
    "Flex110": {
      "callbacks": {}
    },
    "misc_footer_container": {
      "callbacks": {}
    },
    "Flex113": {
      "callbacks": {}
    },
    "social_footer_container": {
      "callbacks": {}
    },
    "Flex115": {
      "callbacks": {}
    },
    "conncet_social_container": {
      "callbacks": {}
    },
    "Flex117": {
      "callbacks": {}
    },
    "bottom": {
      "callbacks": {}
    },
    "atrilabs": {
      "callbacks": {}
    },
    "online_pay": {
      "callbacks": {}
    },
    "images1": {
      "callbacks": {}
    },
    "Flex57": {
      "callbacks": {}
    },
    "Flex56": {
      "callbacks": {}
    },
    "Flex59": {
      "callbacks": {}
    },
    "images_2": {
      "callbacks": {}
    },
    "Flex336": {
      "callbacks": {}
    },
    "Flex335": {
      "callbacks": {}
    },
    "Flex334": {
      "callbacks": {}
    },
    "images_3": {
      "callbacks": {}
    },
    "Flex340": {
      "callbacks": {}
    },
    "Flex339": {
      "callbacks": {}
    },
    "Flex338": {
      "callbacks": {}
    },
    "headline_text": {
      "custom": {
        "text": "USE THIS BAR FOR ANNOUNCEMENTS, DEALS & DISCOUNTS"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "logo": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image2": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/magnifier.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Menu1": {
      "custom": {
        "open": true,
        "iconHeight": 24,
        "iconWidth": 24
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Image3": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/shopping-cart.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox11": {
      "custom": {
        "text": "0"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Home": {
      "custom": {
        "text": "Home"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "Pages": {
      "custom": {
        "values": [
          "Pages"
        ],
        "selectedValue": "",
        "displayedValues": [
          "Pages",
          "Home 2",
          "Shop 2",
          "Blog ",
          "Contact",
          "Legal"
        ]
      },
      "callbacks": {
        "onChange": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Dropdown3": {
      "custom": {
        "values": [
          "Template"
        ],
        "selectedValue": "",
        "displayedValues": [
          "Template",
          "Home 2",
          "Shop 2",
          "Blog ",
          "Contact",
          "Legal"
        ]
      },
      "callbacks": {
        "onChange": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox214": {
      "custom": {
        "text": "Shop"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Shop"
            }
          }
        ]
      }
    },
    "Image5": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/hero.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox12": {
      "custom": {
        "text": "MADE FOR FUN"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox13": {
      "custom": {
        "text": "Ride with more confidence"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox14": {
      "custom": {
        "text": "Reign is an Atri-Labs template designed for outdoor and action sports brands."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button1": {
      "custom": {
        "text": "Show all Products"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Shop"
            }
          }
        ]
      }
    },
    "Image8": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/dualsport.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox21": {
      "custom": {
        "text": "\"They look dope and will help protect your smart brain!\""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox22": {
      "custom": {
        "text": "We dropped the helmet off of a six story building!\""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image12": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/fieldtest.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox23": {
      "custom": {
        "text": "\"My head is so big and this helmet somehow fits!\""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image13": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/freespin.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button4": {
      "custom": {
        "text": "Shop Now"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Product"
            }
          }
        ]
      }
    },
    "TextBox27": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat tristique lorem, vel hendrerit risus."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox28": {
      "custom": {
        "text": "A better fit and more comfort"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "FEATURES": {
      "custom": {
        "text": "FEATURES"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox30": {
      "custom": {
        "text": "Our products are designed to keep you safe, but also make you look great. comfort"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox31": {
      "custom": {
        "text": "Outdoor Tested"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image14": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/fire.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox33": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox34": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image16": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/temt.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox35": {
      "custom": {
        "text": "Pro Approved"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox36": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image17": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/cycle.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox37": {
      "custom": {
        "text": "American Made"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox38": {
      "custom": {
        "text": "Reign is an Atri-Labs template designed for outdoor and action sports brands."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox39": {
      "custom": {
        "text": "The pro's helmet of choice"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "google_rating_text": {
      "custom": {
        "text": "5/5 rating on Google"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image19": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/rating.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image21": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/rating.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image22": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/rating.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image23": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/rating.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image24": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/rating.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image18": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/pro-choice.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox41": {
      "custom": {
        "text": "Andy Wilson Nashville, TN"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox42": {
      "custom": {
        "text": "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat tristique!\""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox68": {
      "custom": {
        "text": "Shop our helmets"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button8": {
      "custom": {
        "text": "Show All Products"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Shop"
            }
          }
        ]
      }
    },
    "Tangerine": {
      "custom": {
        "text": "Tangerine"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox70": {
      "custom": {
        "text": "$ 149.00 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image29": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/helemt-1.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image31": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/helemt-3.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox74": {
      "custom": {
        "text": "$ 149.00 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox75": {
      "custom": {
        "text": "Granite"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image147": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/helemt-2.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox403": {
      "custom": {
        "text": "$ 149.00 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox404": {
      "custom": {
        "text": "Night"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button9": {
      "custom": {
        "text": "Visit Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox76": {
      "custom": {
        "text": "Coffee With Jim Andrews"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox77": {
      "custom": {
        "text": "Donec sed nunc ac diam euismod pharetra et sed mauris. Curabitur congue mauris a sollicitudin fringilla."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox83": {
      "custom": {
        "text": "INTERVIEWS"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div6": {
      "callbacks": {}
    },
    "Div7": {
      "callbacks": {}
    },
    "TextBox102": {
      "custom": {
        "text": "TRIPS"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox103": {
      "custom": {
        "text": "Donec sed nunc ac diam euismod pharetra et sed mauris. Curabitur congue mauris a sollicitudin fringilla."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox104": {
      "custom": {
        "text": "Colorado Backcountry Routes"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div8": {
      "callbacks": {}
    },
    "TextBox105": {
      "custom": {
        "text": "INTERVIEWS"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox106": {
      "custom": {
        "text": "Donec sed nunc ac diam euismod pharetra et sed mauris. Curabitur congue mauris a sollicitudin fringilla."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox107": {
      "custom": {
        "text": "Building Better Features"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image44": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo-white.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox117": {
      "custom": {
        "text": "Pages"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox118": {
      "custom": {
        "text": "Home"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox119": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox120": {
      "custom": {
        "text": "Shop"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox121": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox122": {
      "custom": {
        "text": "Legal"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox134": {
      "custom": {
        "text": "Misc"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox129": {
      "custom": {
        "text": "Legal"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox130": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox131": {
      "custom": {
        "text": "Shop"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox132": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox133": {
      "custom": {
        "text": "Home"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox140": {
      "custom": {
        "text": "Social"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox136": {
      "custom": {
        "text": "LinkedIn"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox137": {
      "custom": {
        "text": "Instagram"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox138": {
      "custom": {
        "text": "Facebook"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox139": {
      "custom": {
        "text": "Twitter"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox146": {
      "custom": {
        "text": "Connect"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox141": {
      "custom": {
        "text": "Contact Us"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox142": {
      "custom": {
        "text": "+123456789"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox143": {
      "custom": {
        "text": "hey@contact.com"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox147": {
      "custom": {
        "text": "© 2020 Reign. All rights reserved. Powered by"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox148": {
      "custom": {
        "text": "Atri Labs"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image45": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/paypay-logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image46": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/apple-pay-logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image47": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/gpay-logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image26": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/image-1.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox51": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat tristique lorem, vel hendrerit risus."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox52": {
      "custom": {
        "text": "Only premium materials used"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "number": {
      "custom": {
        "text": "01"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox59": {
      "custom": {
        "text": "HIGH QUALITY"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image144": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/image-2.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox395": {
      "custom": {
        "text": "Designed for riders by riders"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox396": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat tristique lorem, vel hendrerit risus."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox393": {
      "custom": {
        "text": "FRESH DESIGN"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox394": {
      "custom": {
        "text": "02"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image145": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/image-1.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox399": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat tristique lorem, vel hendrerit risus."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox400": {
      "custom": {
        "text": "Made to help you last a lifetime"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox397": {
      "custom": {
        "text": "03"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox398": {
      "custom": {
        "text": "OUR GUARANTEE"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  },
  "Shop": {
    "banner": {
      "callbacks": {}
    },
    "Flex145": {
      "callbacks": {}
    },
    "Flex144": {
      "callbacks": {}
    },
    "Flex143": {
      "callbacks": {}
    },
    "shopsection": {
      "callbacks": {}
    },
    "Flex154": {
      "callbacks": {}
    },
    "Flex153": {
      "callbacks": {}
    },
    "Flex150": {
      "callbacks": {}
    },
    "Flex147": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Product"
            }
          }
        ]
      }
    },
    "Flex151": {
      "callbacks": {}
    },
    "Flex148": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Product"
            }
          }
        ]
      }
    },
    "Flex152": {
      "callbacks": {}
    },
    "Flex149": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Product"
            }
          }
        ]
      }
    },
    "Flex163": {
      "callbacks": {}
    },
    "Flex162": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Product"
            }
          }
        ]
      }
    },
    "Flex169": {
      "callbacks": {}
    },
    "Flex168": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Product"
            }
          }
        ]
      }
    },
    "Flex171": {
      "callbacks": {}
    },
    "Flex170": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Product"
            }
          }
        ]
      }
    },
    "navbar": {
      "callbacks": {}
    },
    "Flex348": {
      "callbacks": {}
    },
    "Flex346": {
      "callbacks": {}
    },
    "Flex347": {
      "callbacks": {}
    },
    "Flex345": {
      "callbacks": {}
    },
    "headline": {
      "callbacks": {}
    },
    "Footer": {
      "callbacks": {}
    },
    "Flex388": {
      "callbacks": {}
    },
    "Flex386": {
      "callbacks": {}
    },
    "Flex383": {
      "callbacks": {}
    },
    "Flex384": {
      "callbacks": {}
    },
    "Flex387": {
      "callbacks": {}
    },
    "Flex385": {
      "callbacks": {}
    },
    "Flex379": {
      "callbacks": {}
    },
    "Flex375": {
      "callbacks": {}
    },
    "Flex380": {
      "callbacks": {}
    },
    "Flex376": {
      "callbacks": {}
    },
    "Flex381": {
      "callbacks": {}
    },
    "Flex377": {
      "callbacks": {}
    },
    "Flex382": {
      "callbacks": {}
    },
    "Flex378": {
      "callbacks": {}
    },
    "TextBox176": {
      "custom": {
        "text": "Reign is a UI kit designed for new design-concious outdoor brands."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox177": {
      "custom": {
        "text": "All Products"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox178": {
      "custom": {
        "text": "SHOP"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox179": {
      "custom": {
        "text": "Granite"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox180": {
      "custom": {
        "text": "$ 149.00 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image56": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/helemt-3.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox181": {
      "custom": {
        "text": "Night"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox182": {
      "custom": {
        "text": "$ 149.00 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image57": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/helemt-2.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image58": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/helemt-1.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox183": {
      "custom": {
        "text": "$ 149.00 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox184": {
      "custom": {
        "text": "Tangerine"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image62": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/mug.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox192": {
      "custom": {
        "text": "$ 9.00 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox193": {
      "custom": {
        "text": "Enamel Mug"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox198": {
      "custom": {
        "text": "Black Cap"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox199": {
      "custom": {
        "text": "$ 19.00 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image65": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/snapback.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox200": {
      "custom": {
        "text": "Beanie"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox201": {
      "custom": {
        "text": "$ 12.00 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image66": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/beanie.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image150": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox406": {
      "custom": {
        "text": "Shop"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Shop"
            }
          }
        ]
      }
    },
    "Dropdown19": {
      "custom": {
        "values": [
          "Template"
        ],
        "selectedValue": "",
        "displayedValues": [
          "Template",
          "Home 2",
          "Shop 2",
          "Blog ",
          "Contact",
          "Legal"
        ]
      },
      "callbacks": {
        "onChange": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Dropdown20": {
      "custom": {
        "values": [
          "Pages"
        ],
        "selectedValue": "",
        "displayedValues": [
          "Pages",
          "Home 2",
          "Shop 2",
          "Blog ",
          "Contact",
          "Legal"
        ]
      },
      "callbacks": {
        "onChange": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox407": {
      "custom": {
        "text": "Home"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "Menu2": {
      "custom": {
        "open": true,
        "iconHeight": 24,
        "iconWidth": 24
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Image149": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/magnifier.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox405": {
      "custom": {
        "text": "0"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image148": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/shopping-cart.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox149": {
      "custom": {
        "text": "USE THIS BAR FOR ANNOUNCEMENTS, DEALS & DISCOUNTS"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image161": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/gpay-logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image162": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/apple-pay-logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image163": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/paypay-logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox461": {
      "custom": {
        "text": "Atri Labs"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox462": {
      "custom": {
        "text": "© 2020 Reign. All rights reserved. Powered by"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image164": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo-white.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox457": {
      "custom": {
        "text": "Connect"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox440": {
      "custom": {
        "text": "hey@contact.com"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox441": {
      "custom": {
        "text": "+123456789"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox442": {
      "custom": {
        "text": "Contact Us"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox458": {
      "custom": {
        "text": "Social"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox443": {
      "custom": {
        "text": "Twitter"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox444": {
      "custom": {
        "text": "Facebook"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox445": {
      "custom": {
        "text": "Instagram"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox446": {
      "custom": {
        "text": "LinkedIn"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox459": {
      "custom": {
        "text": "Misc"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox447": {
      "custom": {
        "text": "Home"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox448": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox449": {
      "custom": {
        "text": "Shop"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox450": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox451": {
      "custom": {
        "text": "Legal"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox460": {
      "custom": {
        "text": "Pages"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox452": {
      "custom": {
        "text": "Legal"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox453": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox454": {
      "custom": {
        "text": "Shop"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox455": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox456": {
      "custom": {
        "text": "Home"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  },
  "Product": {
    "headline": {
      "callbacks": {}
    },
    "Item_info": {
      "callbacks": {}
    },
    "Flex202": {
      "callbacks": {}
    },
    "Flex201": {
      "callbacks": {}
    },
    "Flex200": {
      "callbacks": {}
    },
    "Cart": {
      "callbacks": {}
    },
    "Quantity": {
      "callbacks": {}
    },
    "features_container": {
      "callbacks": {}
    },
    "Flex227": {
      "callbacks": {}
    },
    "Flex226": {
      "callbacks": {}
    },
    "Flex223": {
      "callbacks": {}
    },
    "Flex224": {
      "callbacks": {}
    },
    "Flex225": {
      "callbacks": {}
    },
    "commom_container": {
      "callbacks": {}
    },
    "Flex242": {
      "callbacks": {}
    },
    "Flex241": {
      "callbacks": {}
    },
    "Flex238": {
      "callbacks": {}
    },
    "Flex239": {
      "callbacks": {}
    },
    "Flex240": {
      "callbacks": {}
    },
    "reviews": {
      "callbacks": {}
    },
    "Flex254": {
      "callbacks": {}
    },
    "Flex253": {
      "callbacks": {}
    },
    "Flex250": {
      "callbacks": {}
    },
    "Flex256": {
      "callbacks": {}
    },
    "Flex258": {
      "callbacks": {}
    },
    "Flex257": {
      "callbacks": {}
    },
    "Flex260": {
      "callbacks": {}
    },
    "Flex259": {
      "callbacks": {}
    },
    "Flex262": {
      "callbacks": {}
    },
    "Flex261": {
      "callbacks": {}
    },
    "Flex270": {
      "callbacks": {}
    },
    "Flex269": {
      "callbacks": {}
    },
    "Flex268": {
      "callbacks": {}
    },
    "Flex264": {
      "callbacks": {}
    },
    "Flex265": {
      "callbacks": {}
    },
    "Flex266": {
      "callbacks": {}
    },
    "shop_section": {
      "callbacks": {}
    },
    "Flex278": {
      "callbacks": {}
    },
    "Flex277": {
      "callbacks": {}
    },
    "beanie": {
      "callbacks": {}
    },
    "Flex273": {
      "callbacks": {}
    },
    "Flex357": {
      "callbacks": {}
    },
    "Flex356": {
      "callbacks": {}
    },
    "Flex359": {
      "callbacks": {}
    },
    "Flex358": {
      "callbacks": {}
    },
    "newsletter": {
      "callbacks": {}
    },
    "Flex323": {
      "callbacks": {}
    },
    "Flex322": {
      "callbacks": {}
    },
    "Flex325": {
      "callbacks": {}
    },
    "navbar": {
      "callbacks": {}
    },
    "Flex353": {
      "callbacks": {}
    },
    "Flex351": {
      "callbacks": {}
    },
    "Flex352": {
      "callbacks": {}
    },
    "Flex350": {
      "callbacks": {}
    },
    "Footer": {
      "callbacks": {}
    },
    "Flex373": {
      "callbacks": {}
    },
    "Flex371": {
      "callbacks": {}
    },
    "Flex368": {
      "callbacks": {}
    },
    "Flex369": {
      "callbacks": {}
    },
    "Flex372": {
      "callbacks": {}
    },
    "Flex370": {
      "callbacks": {}
    },
    "Flex364": {
      "callbacks": {}
    },
    "Flex360": {
      "callbacks": {}
    },
    "Flex365": {
      "callbacks": {}
    },
    "Flex361": {
      "callbacks": {}
    },
    "Flex366": {
      "callbacks": {}
    },
    "Flex362": {
      "callbacks": {}
    },
    "Flex367": {
      "callbacks": {}
    },
    "Flex363": {
      "callbacks": {}
    },
    "TextBox210": {
      "custom": {
        "text": "USE THIS BAR FOR ANNOUNCEMENTS, DEALS & DISCOUNTS"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image82": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/helemt-1.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox218": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus pellentesque pharetra."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox219": {
      "custom": {
        "text": "Rust"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox220": {
      "custom": {
        "text": "RGN003"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox221": {
      "custom": {
        "text": "$ 149.00 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox222": {
      "custom": {
        "text": "Size"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Dropdown17": {
      "custom": {
        "values": [
          "",
          "",
          "",
          "",
          ""
        ],
        "selectedValue": "",
        "displayedValues": [
          "Select Size",
          "Small ",
          "Medium",
          "Large",
          "XL"
        ]
      },
      "callbacks": {
        "onChange": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button15": {
      "custom": {
        "text": "Add to Cart"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox226": {
      "custom": {
        "text": "QTY:"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input1": {
      "custom": {
        "value": "1",
        "placeholder": "1",
        "isPasswordField": false
      },
      "callbacks": {}
    },
    "TextBox256": {
      "custom": {
        "text": "Outdoor Tested"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image92": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/fire.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox257": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox258": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image93": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/temt.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox259": {
      "custom": {
        "text": "Pro Approved"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox260": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image94": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/cycle.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox261": {
      "custom": {
        "text": "American Made"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox281": {
      "custom": {
        "text": "Common Questions"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox275": {
      "custom": {
        "text": "What kind of guarantee do you offer on your products?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox276": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam est vel lacus hendrerit fermentum. Nunc ornare ornare dictum. Donec vehicula sed lacus at venenatis. Sed pulvinar arcu eros, sit amet molestie dui tempus sit amet. Ut porta erat arcu, sed luctus leo porta id."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox277": {
      "custom": {
        "text": "How does Reign's sizing work?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox278": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam est vel lacus hendrerit fermentum. Nunc ornare ornare dictum. Donec vehicula sed lacus at venenatis. Sed pulvinar arcu eros, sit amet molestie dui tempus sit amet. Ut porta erat arcu, sed luctus leo porta id."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox279": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam est vel lacus hendrerit fermentum. Nunc ornare ornare dictum. Donec vehicula sed lacus at venenatis. Sed pulvinar arcu eros, sit amet molestie dui tempus sit amet. Ut porta erat arcu, sed luctus leo porta id."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox280": {
      "custom": {
        "text": "What kind of materials do you use in your products?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox295": {
      "custom": {
        "text": "Everyone loves our products."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox289": {
      "custom": {
        "text": "\"Gravida tincidunt molestie placerat rhoncus lorem. Lobortis faucibus nisl ut risus vitae nulla at aenean proin tellus odio nec.\""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox290": {
      "custom": {
        "text": "Ken Wood, Texas"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image104": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/rating.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image105": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/rating.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image106": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/rating.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image107": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/rating.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image108": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/rating.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox296": {
      "custom": {
        "text": "Ken Wood, Texas"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox297": {
      "custom": {
        "text": "\"Gravida tincidunt molestie placerat rhoncus lorem. Lobortis faucibus nisl ut risus vitae nulla at aenean proin tellus odio nec.\""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image109": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/rating.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image110": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/rating.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image111": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/rating.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image112": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/rating.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image113": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/rating.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox298": {
      "custom": {
        "text": "Ken Wood, Texas"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox299": {
      "custom": {
        "text": "\"Gravida tincidunt molestie placerat rhoncus lorem. Lobortis faucibus nisl ut risus vitae nulla at aenean proin tellus odio nec.\""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image114": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/rating.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image115": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/rating.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image116": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/rating.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image117": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/rating.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image118": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/rating.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox300": {
      "custom": {
        "text": "Ken Wood, Texas"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox301": {
      "custom": {
        "text": "\"Gravida tincidunt molestie placerat rhoncus lorem. Lobortis faucibus nisl ut risus vitae nulla at aenean proin tellus odio nec.\""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image119": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/rating.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image120": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/rating.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image121": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/rating.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image122": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/rating.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image123": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/rating.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image124": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/freespin.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox304": {
      "custom": {
        "text": "\"My head is so big and this helmet somehow fits!\""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image125": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/fieldtest.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox305": {
      "custom": {
        "text": "We dropped the helmet off of a six story building!\""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox306": {
      "custom": {
        "text": "\"They look dope and will help protect your smart brain!\""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image126": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/dualsport.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button17": {
      "custom": {
        "text": "Show All Products"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Shop"
            }
          }
        ]
      }
    },
    "TextBox313": {
      "custom": {
        "text": "Shop our helmets"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image129": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/beanie.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox311": {
      "custom": {
        "text": "$ 149.00 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox312": {
      "custom": {
        "text": "Tangerine"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox413": {
      "custom": {
        "text": "Mug"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox414": {
      "custom": {
        "text": "$ 149.00 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image155": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/mug.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox415": {
      "custom": {
        "text": "Black Cap "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox416": {
      "custom": {
        "text": "$ 149.00 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image156": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/snapback.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox383": {
      "custom": {
        "text": "Newsletter"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox384": {
      "custom": {
        "text": "Get the latest info on Reign straight to your inbox. No spam, we promise!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input3": {
      "custom": {
        "value": "",
        "placeholder": "Email address"
      },
      "callbacks": {}
    },
    "Button18": {
      "custom": {
        "text": "Subscribe"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image153": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox409": {
      "custom": {
        "text": "Shop"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Shop"
            }
          }
        ]
      }
    },
    "Dropdown21": {
      "custom": {
        "values": [
          "Template"
        ],
        "selectedValue": "",
        "displayedValues": [
          "Template",
          "Home 2",
          "Shop 2",
          "Blog ",
          "Contact",
          "Legal"
        ]
      },
      "callbacks": {
        "onChange": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Dropdown22": {
      "custom": {
        "values": [
          "Pages"
        ],
        "selectedValue": "",
        "displayedValues": [
          "Pages",
          "Home 2",
          "Shop 2",
          "Blog ",
          "Contact",
          "Legal"
        ]
      },
      "callbacks": {
        "onChange": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox410": {
      "custom": {
        "text": "Home"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "Menu3": {
      "custom": {
        "open": true,
        "iconHeight": 24,
        "iconWidth": 24
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Image152": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/magnifier.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox408": {
      "custom": {
        "text": "0"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image151": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/shopping-cart.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image157": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/gpay-logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image158": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/apple-pay-logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image159": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/paypay-logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox438": {
      "custom": {
        "text": "Atri Labs"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox439": {
      "custom": {
        "text": "© 2020 Reign. All rights reserved. Powered by"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image160": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo-white.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox434": {
      "custom": {
        "text": "Connect"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox417": {
      "custom": {
        "text": "hey@contact.com"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox418": {
      "custom": {
        "text": "+123456789"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox419": {
      "custom": {
        "text": "Contact Us"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox435": {
      "custom": {
        "text": "Social"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox420": {
      "custom": {
        "text": "Twitter"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox421": {
      "custom": {
        "text": "Facebook"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox422": {
      "custom": {
        "text": "Instagram"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox423": {
      "custom": {
        "text": "LinkedIn"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox436": {
      "custom": {
        "text": "Misc"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox424": {
      "custom": {
        "text": "Home"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox425": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox426": {
      "custom": {
        "text": "Shop"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox427": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox428": {
      "custom": {
        "text": "Legal"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox437": {
      "custom": {
        "text": "Pages"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox429": {
      "custom": {
        "text": "Legal"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox430": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox431": {
      "custom": {
        "text": "Shop"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox432": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox433": {
      "custom": {
        "text": "Home"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  }
}};

useStore.setState(desktopModeProps);

export default useStore;
