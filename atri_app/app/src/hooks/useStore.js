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
    "headline": {
      "callbacks": {}
    },
    "footer": {
      "callbacks": {}
    },
    "Flex141": {
      "callbacks": {}
    },
    "Flex139": {
      "callbacks": {}
    },
    "Flex136": {
      "callbacks": {}
    },
    "Flex137": {
      "callbacks": {}
    },
    "Flex140": {
      "callbacks": {}
    },
    "Flex138": {
      "callbacks": {}
    },
    "Flex132": {
      "callbacks": {}
    },
    "Flex128": {
      "callbacks": {}
    },
    "Flex133": {
      "callbacks": {}
    },
    "Flex129": {
      "callbacks": {}
    },
    "Flex134": {
      "callbacks": {}
    },
    "Flex130": {
      "callbacks": {}
    },
    "Flex135": {
      "callbacks": {}
    },
    "Flex131": {
      "callbacks": {}
    },
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
    "Flex190": {
      "callbacks": {}
    },
    "Flex188": {
      "callbacks": {}
    },
    "Flex187": {
      "callbacks": {}
    },
    "Flex189": {
      "callbacks": {}
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
    "Image51": {
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
    "Image52": {
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
    "Image53": {
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
    "TextBox174": {
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
    "TextBox175": {
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
    "Image54": {
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
    "TextBox170": {
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
    "TextBox153": {
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
    "TextBox154": {
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
    "TextBox155": {
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
    "TextBox171": {
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
    "TextBox156": {
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
    "TextBox157": {
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
    "TextBox158": {
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
    "TextBox159": {
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
    "TextBox172": {
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
    "TextBox160": {
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
    "TextBox161": {
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
    "TextBox162": {
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
    "TextBox163": {
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
    "TextBox164": {
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
    "TextBox173": {
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
    "TextBox165": {
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
    "TextBox166": {
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
    "TextBox167": {
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
    "TextBox168": {
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
    "TextBox169": {
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
    "Image78": {
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
    "Image77": {
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
    "TextBox208": {
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
    "Image76": {
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
    "Dropdown12": {
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
    "Dropdown13": {
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
    "TextBox209": {
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
    "TextBox215": {
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
    }
  },
  "Product": {
    "headline": {
      "callbacks": {}
    },
    "navbar": {
      "callbacks": {
        "onClick": []
      }
    },
    "Flex196": {
      "callbacks": {}
    },
    "Flex194": {
      "callbacks": {}
    },
    "Flex193": {
      "callbacks": {}
    },
    "Flex195": {
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
    "Flex274": {
      "callbacks": {}
    },
    "Flex271": {
      "callbacks": {}
    },
    "Flex275": {
      "callbacks": {}
    },
    "Flex272": {
      "callbacks": {}
    },
    "Flex276": {
      "callbacks": {}
    },
    "Flex273": {
      "callbacks": {}
    },
    "Footer": {
      "callbacks": {}
    },
    "Flex293": {
      "callbacks": {}
    },
    "Flex291": {
      "callbacks": {}
    },
    "Flex288": {
      "callbacks": {}
    },
    "Flex289": {
      "callbacks": {}
    },
    "Flex292": {
      "callbacks": {}
    },
    "Flex290": {
      "callbacks": {}
    },
    "Flex284": {
      "callbacks": {}
    },
    "Flex280": {
      "callbacks": {}
    },
    "Flex285": {
      "callbacks": {}
    },
    "Flex281": {
      "callbacks": {}
    },
    "Flex286": {
      "callbacks": {}
    },
    "Flex282": {
      "callbacks": {}
    },
    "Flex287": {
      "callbacks": {}
    },
    "Flex283": {
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
    "Image81": {
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
    "Image80": {
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
    "TextBox211": {
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
    "Image79": {
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
    "Dropdown14": {
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
    "Dropdown15": {
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
    "TextBox212": {
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
    "TextBox213": {
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
    "TextBox307": {
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
    "TextBox308": {
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
    "Image127": {
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
    "TextBox309": {
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
    "TextBox310": {
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
    "Image128": {
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
    "Image130": {
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
    "Image131": {
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
    "Image132": {
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
    "TextBox335": {
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
    "TextBox336": {
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
    "Image133": {
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
    "TextBox331": {
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
    "TextBox314": {
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
    "TextBox315": {
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
    "TextBox316": {
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
    "TextBox332": {
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
    "TextBox317": {
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
    "TextBox318": {
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
    "TextBox319": {
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
    "TextBox320": {
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
    "TextBox333": {
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
    "TextBox321": {
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
    "TextBox322": {
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
    "TextBox323": {
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
    "TextBox324": {
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
    "TextBox325": {
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
    "TextBox334": {
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
    "TextBox326": {
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
    "TextBox327": {
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
    "TextBox328": {
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
    "TextBox329": {
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
    "TextBox330": {
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
    }
  }
}};

useStore.setState(desktopModeProps);

export default useStore;
