"use strict";
self["webpackHotUpdate_N_E"]("pages/story/[storyId]",{

/***/ "./pages/story/[storyId].js":
/*!**********************************!*\
  !*** ./pages/story/[storyId].js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSP": function() { return /* binding */ __N_SSP; }
/* harmony export */ });
/* harmony import */ var C_Users_BENI_Desktop_Web_Dev_practice_next_hackernoon_storypage_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_BENI_Desktop_Web_Dev_practice_next_hackernoon_storypage_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_BENI_Desktop_Web_Dev_practice_next_hackernoon_storypage_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_BENI_Desktop_Web_Dev_practice_next_hackernoon_storypage_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_BENI_Desktop_Web_Dev_practice_next_hackernoon_storypage_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var cookie_cutter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cookie-cutter */ "./node_modules/cookie-cutter/index.js");
/* harmony import */ var cookie_cutter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cookie_cutter__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_TurnedInNot__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/TurnedInNot */ "./node_modules/@material-ui/icons/TurnedInNot.js");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "./node_modules/@material-ui/icons/Favorite.js");
/* harmony import */ var _material_ui_icons_OfflineBolt__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/OfflineBolt */ "./node_modules/@material-ui/icons/OfflineBolt.js");
/* harmony import */ var _material_ui_icons_DirectionsBoat__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/DirectionsBoat */ "./node_modules/@material-ui/icons/DirectionsBoat.js");
/* harmony import */ var _material_ui_icons_LocalAtm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/LocalAtm */ "./node_modules/@material-ui/icons/LocalAtm.js");
/* harmony import */ var _material_ui_icons_Eco__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Eco */ "./node_modules/@material-ui/icons/Eco.js");
/* harmony import */ var _material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/LinkedIn */ "./node_modules/@material-ui/icons/LinkedIn.js");
/* harmony import */ var _material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Twitter */ "./node_modules/@material-ui/icons/Twitter.js");
/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/GitHub */ "./node_modules/@material-ui/icons/GitHub.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\BENI\\Desktop\\Web Dev\\practice\\next\\hackernoon_storypage\\pages\\story\\[storyId].js",
    _this = undefined,
    _s = $RefreshSig$();



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_BENI_Desktop_Web_Dev_practice_next_hackernoon_storypage_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


















var Story = function Story(_ref) {
  _s();

  var storyById = _ref.storyById,
      ratingbyId = _ref.ratingbyId;
  console.log("storyPage");
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(storyById),
      story = _useState[0],
      setStory = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
    heart: ratingbyId.heart,
    energy: ratingbyId.energy,
    ship: ratingbyId.ship,
    money: ratingbyId.money
  }),
      storyRating = _useState2[0],
      setStoryRating = _useState2[1];

  var storyRatingTotal = Object.values(storyRating).reduce(function (prev, curr) {
    return prev + curr;
  });

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({}),
      storyRatingClicked = _useState3[0],
      setStoryRatingClicked = _useState3[1];

  console.log(story);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    var cookieRatingsClicked = cookie_cutter__WEBPACK_IMPORTED_MODULE_5___default().get("story".concat(storyById.id));

    if (!cookieRatingsClicked) {
      console.log("nocookie");
      var ratingClickedInt = {
        heart: false,
        energy: false,
        ship: false,
        money: false
      };
      cookie_cutter__WEBPACK_IMPORTED_MODULE_5___default().set("story".concat(storyById.id), JSON.stringify(ratingClickedInt));
      setStoryRatingClicked(ratingClickedInt);
    } else {
      console.log("cookie");
      cookieRatingsClicked = JSON.parse(cookieRatingsClicked);
      console.log(cookieRatingsClicked);
      setStoryRatingClicked(cookieRatingsClicked);
    }
  }, []);

  var updateRatings = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_BENI_Desktop_Web_Dev_practice_next_hackernoon_storypage_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_BENI_Desktop_Web_Dev_practice_next_hackernoon_storypage_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(newRating) {
      var updatedRating, response;
      return C_Users_BENI_Desktop_Web_Dev_practice_next_hackernoon_storypage_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log("updateRating");
              console.log(newRating);
              updatedRating = _objectSpread(_objectSpread({}, newRating), {}, {
                id: parseInt(router.query.storyId)
              });
              _context.next = 5;
              return fetch("/api/storyratings", {
                method: "PATCH",
                body: JSON.stringify(updatedRating)
              });

            case 5:
              response = _context.sent;
              _context.next = 8;
              return response.json();

            case 8:
              return _context.abrupt("return", _context.sent);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function updateRatings(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var deleteAll = /*#__PURE__*/function () {
    var _ref3 = (0,C_Users_BENI_Desktop_Web_Dev_practice_next_hackernoon_storypage_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_BENI_Desktop_Web_Dev_practice_next_hackernoon_storypage_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
      var response;
      return C_Users_BENI_Desktop_Web_Dev_practice_next_hackernoon_storypage_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return fetch("/api/storyratings", {
                method: "DELETE"
              });

            case 2:
              response = _context2.sent;
              _context2.next = 5;
              return response.json();

            case 5:
              return _context2.abrupt("return", _context2.sent);

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function deleteAll() {
      return _ref3.apply(this, arguments);
    };
  }();

  var handleClick = function handleClick(iconType) {
    console.log("click");
    console.log(iconType);

    switch (iconType) {
      case "heart":
        if (storyRatingClicked.heart === false) {
          setStoryRating(_objectSpread(_objectSpread({}, storyRating), {}, {
            heart: storyRating.heart + 1
          }));
        } else {
          setStoryRating(_objectSpread(_objectSpread({}, storyRating), {}, {
            heart: storyRating.heart - 1
          }));
        }

        setStoryRatingClicked(_objectSpread(_objectSpread({}, storyRatingClicked), {}, {
          heart: !storyRatingClicked.heart
        }));
        break;

      case "energy":
        if (storyRatingClicked.energy === false) {
          setStoryRating(_objectSpread(_objectSpread({}, storyRating), {}, {
            energy: storyRating.energy + 1
          }));
        } else {
          setStoryRating(_objectSpread(_objectSpread({}, storyRating), {}, {
            energy: storyRating.energy - 1
          }));
        }

        setStoryRatingClicked(_objectSpread(_objectSpread({}, storyRatingClicked), {}, {
          energy: !storyRatingClicked.energy
        }));
        break;

      case "ship":
        if (storyRatingClicked.ship === false) {
          setStoryRating(_objectSpread(_objectSpread({}, storyRating), {}, {
            ship: storyRating.ship + 1
          }));
        } else {
          setStoryRating(_objectSpread(_objectSpread({}, storyRating), {}, {
            ship: storyRating.ship - 1
          }));
        }

        setStoryRatingClicked(_objectSpread(_objectSpread({}, storyRatingClicked), {}, {
          ship: !storyRatingClicked.ship
        }));
        break;

      default:
        if (storyRatingClicked.money === false) {
          setStoryRating(_objectSpread(_objectSpread({}, storyRating), {}, {
            money: storyRating.money + 1
          }));
        } else {
          setStoryRating(_objectSpread(_objectSpread({}, storyRating), {}, {
            money: storyRating.money - 1
          }));
        }

        setStoryRatingClicked(_objectSpread(_objectSpread({}, storyRatingClicked), {}, {
          money: !storyRatingClicked.money
        }));
        break;
    }
  };

  updateRatings(storyRating);
  if (storyRatingClicked.heart !== null) cookie_cutter__WEBPACK_IMPORTED_MODULE_5___default().set("story".concat(storyById.id), JSON.stringify(storyRatingClicked)); // console.log("storyRating", storyRating)

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("article", {
    className: "story",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: "story__header",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h1", {
        children: story.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: "story__details",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "story__detailsInfo",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
          className: "story__detailsInfoDate",
          children: "September 10th 2021"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
          className: "story__detailsInfoType",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_Eco__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 65
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 59
          }, _this), "new story"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
          className: "story__detailsInfoMark",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_TurnedInNot__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 59
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "story__detailsRatings",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
          src: "https://hackernoon.com/_next/image?url=%2FtldrOpen.png&w=2048&q=75",
          alt: "linkbar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 21
        }, _this), storyRatingTotal && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h2", {
          children: storyRatingTotal
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 42
        }, _this), storyRatingClicked && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "story__detailsRatingIcons",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: storyRatingClicked.heart ? "heartActive" : "heart",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
              children: storyRating.heart
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 155,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
              onClick: function onClick() {
                return handleClick("heart");
              },
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_9__.default, {
                style: {
                  fontSize: "1.8rem"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 156,
                columnNumber: 76
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 156,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: storyRatingClicked.energy ? "energyActive" : "energy",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
              className: "energyRating",
              children: storyRating.energy
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
              onClick: function onClick() {
                return handleClick("energy");
              },
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_OfflineBolt__WEBPACK_IMPORTED_MODULE_10__.default, {
                style: {
                  fontSize: "1.8rem"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 160,
                columnNumber: 76
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: storyRatingClicked.ship ? "shipActive" : "ship",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
              className: "shipRating",
              children: storyRating.ship
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 163,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
              onClick: function onClick() {
                return handleClick("ship");
              },
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_DirectionsBoat__WEBPACK_IMPORTED_MODULE_11__.default, {
                style: {
                  fontSize: "1.8rem"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 164,
                columnNumber: 75
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 164,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: storyRatingClicked.money ? "moneyActive" : "money",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
              className: "moneyRating",
              children: storyRating.money
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 167,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
              onClick: function onClick() {
                return handleClick("money");
              },
              children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_LocalAtm__WEBPACK_IMPORTED_MODULE_12__.default, {
                style: {
                  fontSize: "1.8rem"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 168,
                columnNumber: 76
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 166,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 44
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: "story__mainImgContainer",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
        src: story.img,
        alt: story.img
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
      onClick: deleteAll,
      children: "delete"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: "story__main",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "story__mainAuthor",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
          src: story.authorImg,
          alt: story.authorImg
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "story__mainAuthorInfo",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h4", {
            children: story.authorhandle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 189,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
            children: story.author
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 190,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
          children: "Freelance software developer and writer with a background in AI, crypto, and quant finance."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "story__mainAuthorSocialIcons",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_13__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 194,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 194,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_14__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 195,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 195,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_15__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 196,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 196,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "story__mainArticle",
        children: [story.mainArticle.map(function (item) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "story__mainArticleItem",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
              children: item
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 203,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: "dash"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 204,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: "story__artileIcons",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                className: "heart",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_9__.default, {
                  style: {
                    fontSize: "1.5rem"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 206,
                  columnNumber: 59
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 206,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                className: "energy",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_OfflineBolt__WEBPACK_IMPORTED_MODULE_10__.default, {
                  style: {
                    fontSize: "1.5rem"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 207,
                  columnNumber: 60
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 207,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                className: "boat",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_DirectionsBoat__WEBPACK_IMPORTED_MODULE_11__.default, {
                  style: {
                    fontSize: "1.5rem"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 208,
                  columnNumber: 58
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 208,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                className: "money",
                children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_LocalAtm__WEBPACK_IMPORTED_MODULE_12__.default, {
                  style: {
                    fontSize: "1.5rem"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 209,
                  columnNumber: 60
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 209,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 205,
              columnNumber: 29
            }, _this)]
          }, item, true, {
            fileName: _jsxFileName,
            lineNumber: 202,
            columnNumber: 25
          }, _this);
        }), story.subArticles.map(function (article) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "story__subArticle",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h2", {
              children: article.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 216,
              columnNumber: 29
            }, _this), article.articles.map(function (item) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
                children: item.length === 1 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                  className: "story__mainArticleItem",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
                    children: item
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 221,
                    columnNumber: 45
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                    className: "dash"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 222,
                    columnNumber: 45
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                    className: "story__artileIcons",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                      className: "heart",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_9__.default, {
                        style: {
                          fontSize: "1.5rem"
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 224,
                        columnNumber: 75
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 224,
                      columnNumber: 49
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                      className: "energy",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_OfflineBolt__WEBPACK_IMPORTED_MODULE_10__.default, {
                        style: {
                          fontSize: "1.5rem"
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 225,
                        columnNumber: 76
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 225,
                      columnNumber: 49
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                      className: "boat",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_DirectionsBoat__WEBPACK_IMPORTED_MODULE_11__.default, {
                        style: {
                          fontSize: "1.5rem"
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 226,
                        columnNumber: 74
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 226,
                      columnNumber: 49
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                      className: "money",
                      children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_LocalAtm__WEBPACK_IMPORTED_MODULE_12__.default, {
                        style: {
                          fontSize: "1.5rem"
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 227,
                        columnNumber: 76
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 227,
                      columnNumber: 49
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 223,
                    columnNumber: 45
                  }, _this)]
                }, item, true, {
                  fileName: _jsxFileName,
                  lineNumber: 220,
                  columnNumber: 41
                }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
                  children: item[0] === "quote" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                    className: "story__articleQuote",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
                      children: item[1]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 234,
                      columnNumber: 53
                    }, _this)
                  }, item[1], false, {
                    fileName: _jsxFileName,
                    lineNumber: 233,
                    columnNumber: 49
                  }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                    className: "story__articleImg",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
                      src: item[1],
                      alt: item[2]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 238,
                      columnNumber: 53
                    }, _this)
                  }, item[1], false, {
                    fileName: _jsxFileName,
                    lineNumber: 237,
                    columnNumber: 49
                  }, _this)
                }, void 0, false)
              }, void 0, false);
            })]
          }, article.url, true, {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 25
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 135,
    columnNumber: 9
  }, _this);
};

_s(Story, "YKvLjqADlTp+HingHpOk05q3iTY=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];
});

_c = Story;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Story);

var _c;

$RefreshReg$(_c, "Story");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3RvcnkvW3N0b3J5SWRdLjZiZTRlM2Q0Y2VkYWEyNDBmMmFjLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUdBLElBQU1lLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQStCO0FBQUE7O0FBQUEsTUFBNUJDLFNBQTRCLFFBQTVCQSxTQUE0QjtBQUFBLE1BQWpCQyxVQUFpQixRQUFqQkEsVUFBaUI7QUFDekNDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVo7QUFDQSxNQUFNQyxNQUFNLEdBQUdqQixzREFBUyxFQUF4Qjs7QUFDQSxrQkFBMEJGLCtDQUFRLENBQUNlLFNBQUQsQ0FBbEM7QUFBQSxNQUFPSyxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFDQSxtQkFBc0NyQiwrQ0FBUSxDQUFDO0FBQzNDc0IsSUFBQUEsS0FBSyxFQUFFTixVQUFVLENBQUNNLEtBRHlCO0FBRTNDQyxJQUFBQSxNQUFNLEVBQUVQLFVBQVUsQ0FBQ08sTUFGd0I7QUFHM0NDLElBQUFBLElBQUksRUFBRVIsVUFBVSxDQUFDUSxJQUgwQjtBQUkzQ0MsSUFBQUEsS0FBSyxFQUFFVCxVQUFVLENBQUNTO0FBSnlCLEdBQUQsQ0FBOUM7QUFBQSxNQUFPQyxXQUFQO0FBQUEsTUFBb0JDLGNBQXBCOztBQVFBLE1BQUlDLGdCQUFnQixHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBY0osV0FBZCxFQUEyQkssTUFBM0IsQ0FBa0MsVUFBQ0MsSUFBRCxFQUFPQyxJQUFQO0FBQUEsV0FBZ0JELElBQUksR0FBR0MsSUFBdkI7QUFBQSxHQUFsQyxDQUF2Qjs7QUFDQSxtQkFBb0RqQywrQ0FBUSxDQUFDLEVBQUQsQ0FBNUQ7QUFBQSxNQUFPa0Ms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O0FBQUE7QUFBQTtBQURKLHFCQUFVQSxJQUFJLENBQUMsQ0FBRCxDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOUjtBQWJSLCtCQURrQjtBQUFBLGFBQXJCLENBRkw7QUFBQSxhQUF3Q0UsT0FBTyxDQUFDRyxHQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURtQjtBQUFBLFNBQXRCLENBZEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbERKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBeUhILENBN09EOztHQUFNekQ7VUFFYVo7OztLQUZiWTs7QUFtUk4sK0RBQWVBLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RvcnkvW3N0b3J5SWRdLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiXHJcbmltcG9ydCBjb29raWVDdXR0ZXIgZnJvbSAnY29va2llLWN1dHRlcidcclxuaW1wb3J0IFR1cm5lZEluTm90SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvVHVybmVkSW5Ob3QnO1xyXG5pbXBvcnQgRmF2b3JpdGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9GYXZvcml0ZSc7XHJcbmltcG9ydCBPZmZsaW5lQm9sdEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL09mZmxpbmVCb2x0JztcclxuaW1wb3J0IERpcmVjdGlvbnNCb2F0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRGlyZWN0aW9uc0JvYXQnO1xyXG5pbXBvcnQgTG9jYWxBdG1JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Mb2NhbEF0bSc7XHJcbmltcG9ydCBFY29JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FY28nO1xyXG5pbXBvcnQgTGlua2VkSW5JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9MaW5rZWRJbic7XHJcbmltcG9ydCBUd2l0dGVySWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvVHdpdHRlcic7XHJcbmltcG9ydCBHaXRIdWJJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9HaXRIdWInO1xyXG5pbXBvcnQgY3JlYXRlQnJlYWtwb2ludHMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL2NyZWF0ZUJyZWFrcG9pbnRzJztcclxuXHJcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKVxyXG5jb25zdCBTdG9yeSA9ICh7IHN0b3J5QnlJZCwgcmF0aW5nYnlJZCB9KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcInN0b3J5UGFnZVwiKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgW3N0b3J5LCBzZXRTdG9yeV0gPSB1c2VTdGF0ZShzdG9yeUJ5SWQpXHJcbiAgICBjb25zdCBbc3RvcnlSYXRpbmcsIHNldFN0b3J5UmF0aW5nXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBoZWFydDogcmF0aW5nYnlJZC5oZWFydCxcclxuICAgICAgICBlbmVyZ3k6IHJhdGluZ2J5SWQuZW5lcmd5LFxyXG4gICAgICAgIHNoaXA6IHJhdGluZ2J5SWQuc2hpcCxcclxuICAgICAgICBtb25leTogcmF0aW5nYnlJZC5tb25leSxcclxuICAgIH0pXHJcblxyXG5cclxuICAgIGxldCBzdG9yeVJhdGluZ1RvdGFsID0gT2JqZWN0LnZhbHVlcyhzdG9yeVJhdGluZykucmVkdWNlKChwcmV2LCBjdXJyKSA9PiBwcmV2ICsgY3VycilcclxuICAgIGNvbnN0IFtzdG9yeVJhdGluZ0NsaWNrZWQsIHNldFN0b3J5UmF0aW5nQ2xpY2tlZF0gPSB1c2VTdGF0ZSh7fSlcclxuXHJcbiAgICBjb25zb2xlLmxvZyhzdG9yeSlcclxuXHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4gICAgICAgIGxldCBjb29raWVSYXRpbmdzQ2xpY2tlZCA9IGNvb2tpZUN1dHRlci5nZXQoYHN0b3J5JHtzdG9yeUJ5SWQuaWR9YClcclxuICAgICAgICBpZiAoIWNvb2tpZVJhdGluZ3NDbGlja2VkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibm9jb29raWVcIilcclxuICAgICAgICAgICAgbGV0IHJhdGluZ0NsaWNrZWRJbnQgPSB7XHJcbiAgICAgICAgICAgICAgICBoZWFydDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBlbmVyZ3k6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc2hpcDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBtb25leTogZmFsc2UsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29va2llQ3V0dGVyLnNldChgc3Rvcnkke3N0b3J5QnlJZC5pZH1gLCBKU09OLnN0cmluZ2lmeShyYXRpbmdDbGlja2VkSW50KSlcclxuICAgICAgICAgICAgc2V0U3RvcnlSYXRpbmdDbGlja2VkKHJhdGluZ0NsaWNrZWRJbnQpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb29raWVcIilcclxuICAgICAgICAgICAgY29va2llUmF0aW5nc0NsaWNrZWQgPSBKU09OLnBhcnNlKGNvb2tpZVJhdGluZ3NDbGlja2VkKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjb29raWVSYXRpbmdzQ2xpY2tlZClcclxuICAgICAgICAgICAgc2V0U3RvcnlSYXRpbmdDbGlja2VkKGNvb2tpZVJhdGluZ3NDbGlja2VkKVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9LCBbXSlcclxuXHJcblxyXG5cclxuICAgIGNvbnN0IHVwZGF0ZVJhdGluZ3MgPSBhc3luYyAobmV3UmF0aW5nKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ1cGRhdGVSYXRpbmdcIilcclxuICAgICAgICBjb25zb2xlLmxvZyhuZXdSYXRpbmcpXHJcbiAgICAgICAgY29uc3QgdXBkYXRlZFJhdGluZyA9IHsgLi4ubmV3UmF0aW5nLCBpZDogcGFyc2VJbnQocm91dGVyLnF1ZXJ5LnN0b3J5SWQpIH1cclxuXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvc3RvcnlyYXRpbmdzXCIsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBBVENIXCIsXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVwZGF0ZWRSYXRpbmcpXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCBkZWxldGVBbGwgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvc3RvcnlyYXRpbmdzXCIsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKGljb25UeXBlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjbGlja1wiKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGljb25UeXBlKVxyXG5cclxuICAgICAgICBzd2l0Y2ggKGljb25UeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJoZWFydFwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKHN0b3J5UmF0aW5nQ2xpY2tlZC5oZWFydCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTdG9yeVJhdGluZyh7IC4uLnN0b3J5UmF0aW5nLCBoZWFydDogc3RvcnlSYXRpbmcuaGVhcnQgKyAxIH0pXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFN0b3J5UmF0aW5nKHsgLi4uc3RvcnlSYXRpbmcsIGhlYXJ0OiBzdG9yeVJhdGluZy5oZWFydCAtIDEgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNldFN0b3J5UmF0aW5nQ2xpY2tlZCh7IC4uLnN0b3J5UmF0aW5nQ2xpY2tlZCwgaGVhcnQ6ICFzdG9yeVJhdGluZ0NsaWNrZWQuaGVhcnQgfSk7XHJcbiAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZW5lcmd5XCI6XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RvcnlSYXRpbmdDbGlja2VkLmVuZXJneSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTdG9yeVJhdGluZyh7IC4uLnN0b3J5UmF0aW5nLCBlbmVyZ3k6IHN0b3J5UmF0aW5nLmVuZXJneSArIDEgfSlcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3RvcnlSYXRpbmcoeyAuLi5zdG9yeVJhdGluZywgZW5lcmd5OiBzdG9yeVJhdGluZy5lbmVyZ3kgLSAxIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZXRTdG9yeVJhdGluZ0NsaWNrZWQoeyAuLi5zdG9yeVJhdGluZ0NsaWNrZWQsIGVuZXJneTogIXN0b3J5UmF0aW5nQ2xpY2tlZC5lbmVyZ3kgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzaGlwXCI6XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RvcnlSYXRpbmdDbGlja2VkLnNoaXAgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3RvcnlSYXRpbmcoeyAuLi5zdG9yeVJhdGluZywgc2hpcDogc3RvcnlSYXRpbmcuc2hpcCArIDEgfSlcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3RvcnlSYXRpbmcoeyAuLi5zdG9yeVJhdGluZywgc2hpcDogc3RvcnlSYXRpbmcuc2hpcCAtIDEgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBzZXRTdG9yeVJhdGluZ0NsaWNrZWQoeyAuLi5zdG9yeVJhdGluZ0NsaWNrZWQsIHNoaXA6ICFzdG9yeVJhdGluZ0NsaWNrZWQuc2hpcCB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGlmIChzdG9yeVJhdGluZ0NsaWNrZWQubW9uZXkgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3RvcnlSYXRpbmcoeyAuLi5zdG9yeVJhdGluZywgbW9uZXk6IHN0b3J5UmF0aW5nLm1vbmV5ICsgMSB9KVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTdG9yeVJhdGluZyh7IC4uLnN0b3J5UmF0aW5nLCBtb25leTogc3RvcnlSYXRpbmcubW9uZXkgLSAxIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZXRTdG9yeVJhdGluZ0NsaWNrZWQoeyAuLi5zdG9yeVJhdGluZ0NsaWNrZWQsIG1vbmV5OiAhc3RvcnlSYXRpbmdDbGlja2VkLm1vbmV5IH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHVwZGF0ZVJhdGluZ3Moc3RvcnlSYXRpbmcpXHJcbiAgICBpZiAoc3RvcnlSYXRpbmdDbGlja2VkLmhlYXJ0ICE9PSBudWxsKSBjb29raWVDdXR0ZXIuc2V0KGBzdG9yeSR7c3RvcnlCeUlkLmlkfWAsIEpTT04uc3RyaW5naWZ5KHN0b3J5UmF0aW5nQ2xpY2tlZCkpXHJcbiAgICAvLyBjb25zb2xlLmxvZyhcInN0b3J5UmF0aW5nXCIsIHN0b3J5UmF0aW5nKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwic3RvcnlcIj5cclxuICAgICAgICAgICAgey8qIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyBTVE9SWSBIRUFERVIgX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18gICovfVxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeV9faGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDE+e3N0b3J5LnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fIFNUT1JZIERFVEFJTFMgX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18gICovfVxyXG5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcnlfX2RldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcnlfX2RldGFpbHNJbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3RvcnlfX2RldGFpbHNJbmZvRGF0ZVwiPlNlcHRlbWJlciAxMHRoIDIwMjE8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3RvcnlfX2RldGFpbHNJbmZvVHlwZVwiPjxzcGFuPjxFY29JY29uIC8+PC9zcGFuPm5ldyBzdG9yeTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdG9yeV9fZGV0YWlsc0luZm9NYXJrXCI+PFR1cm5lZEluTm90SWNvbiAvPjwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeV9fZGV0YWlsc1JhdGluZ3NcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaGFja2Vybm9vbi5jb20vX25leHQvaW1hZ2U/dXJsPSUyRnRsZHJPcGVuLnBuZyZ3PTIwNDgmcT03NVwiIGFsdD1cImxpbmtiYXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtzdG9yeVJhdGluZ1RvdGFsICYmIDxoMj57c3RvcnlSYXRpbmdUb3RhbH08L2gyPn1cclxuICAgICAgICAgICAgICAgICAgICB7c3RvcnlSYXRpbmdDbGlja2VkICYmIDxkaXYgY2xhc3NOYW1lPVwic3RvcnlfX2RldGFpbHNSYXRpbmdJY29uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3RvcnlSYXRpbmdDbGlja2VkLmhlYXJ0ID8gXCJoZWFydEFjdGl2ZVwiIDogXCJoZWFydFwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntzdG9yeVJhdGluZy5oZWFydH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKFwiaGVhcnRcIil9ICA+PEZhdm9yaXRlSWNvbiBzdHlsZT17eyBmb250U2l6ZTogXCIxLjhyZW1cIiB9fSAvPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0b3J5UmF0aW5nQ2xpY2tlZC5lbmVyZ3kgPyBcImVuZXJneUFjdGl2ZVwiIDogXCJlbmVyZ3lcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlbmVyZ3lSYXRpbmdcIj57c3RvcnlSYXRpbmcuZW5lcmd5fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soXCJlbmVyZ3lcIil9ID48T2ZmbGluZUJvbHRJY29uIHN0eWxlPXt7IGZvbnRTaXplOiBcIjEuOHJlbVwiIH19IC8+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3RvcnlSYXRpbmdDbGlja2VkLnNoaXAgPyBcInNoaXBBY3RpdmVcIiA6IFwic2hpcFwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNoaXBSYXRpbmdcIj57c3RvcnlSYXRpbmcuc2hpcH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKFwic2hpcFwiKX0gID48RGlyZWN0aW9uc0JvYXRJY29uIHN0eWxlPXt7IGZvbnRTaXplOiBcIjEuOHJlbVwiIH19IC8+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3RvcnlSYXRpbmdDbGlja2VkLm1vbmV5ID8gXCJtb25leUFjdGl2ZVwiIDogXCJtb25leVwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1vbmV5UmF0aW5nXCI+e3N0b3J5UmF0aW5nLm1vbmV5fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soXCJtb25leVwiKX0gPiA8TG9jYWxBdG1JY29uIHN0eWxlPXt7IGZvbnRTaXplOiBcIjEuOHJlbVwiIH19IC8+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKiBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18gU1RPUlkgTUFJTiBJTUcgX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18gICovfVxyXG5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcnlfX21haW5JbWdDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtzdG9yeS5pbWd9IGFsdD17c3RvcnkuaW1nfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18gU1RPUlkgTUFJTl9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fICAqL31cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtkZWxldGVBbGx9ID5kZWxldGU8L2J1dHRvbj5cclxuXHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0b3J5X19tYWluXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0b3J5X19tYWluQXV0aG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3N0b3J5LmF1dGhvckltZ30gYWx0PXtzdG9yeS5hdXRob3JJbWd9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeV9fbWFpbkF1dGhvckluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PntzdG9yeS5hdXRob3JoYW5kbGV9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3N0b3J5LmF1dGhvcn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+RnJlZWxhbmNlIHNvZnR3YXJlIGRldmVsb3BlciBhbmQgd3JpdGVyIHdpdGggYSBiYWNrZ3JvdW5kIGluIEFJLCBjcnlwdG8sIGFuZCBxdWFudCBmaW5hbmNlLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0b3J5X19tYWluQXV0aG9yU29jaWFsSWNvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj48TGlua2VkSW5JY29uIC8+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+PFR3aXR0ZXJJY29uIC8+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+PEdpdEh1Ykljb24gLz48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcnlfX21haW5BcnRpY2xlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3N0b3J5Lm1haW5BcnRpY2xlLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0b3J5X19tYWluQXJ0aWNsZUl0ZW1cIiBrZXk9e2l0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2l0ZW19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXNoXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0b3J5X19hcnRpbGVJY29uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiaGVhcnRcIj48RmF2b3JpdGVJY29uIHN0eWxlPXt7IGZvbnRTaXplOiBcIjEuNXJlbVwiIH19IC8+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJlbmVyZ3lcIj48T2ZmbGluZUJvbHRJY29uIHN0eWxlPXt7IGZvbnRTaXplOiBcIjEuNXJlbVwiIH19IC8+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJib2F0XCI+PERpcmVjdGlvbnNCb2F0SWNvbiBzdHlsZT17eyBmb250U2l6ZTogXCIxLjVyZW1cIiB9fSAvPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibW9uZXlcIj4gPExvY2FsQXRtSWNvbiBzdHlsZT17eyBmb250U2l6ZTogXCIxLjVyZW1cIiB9fSAvPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICB7c3Rvcnkuc3ViQXJ0aWNsZXMubWFwKChhcnRpY2xlKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcnlfX3N1YkFydGljbGVcIiBrZXk9e2FydGljbGUudXJsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57YXJ0aWNsZS50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2FydGljbGUuYXJ0aWNsZXMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubGVuZ3RoID09PSAxID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcnlfX21haW5BcnRpY2xlSXRlbVwiIGtleT17aXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2l0ZW19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFzaFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcnlfX2FydGlsZUljb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiaGVhcnRcIj48RmF2b3JpdGVJY29uIHN0eWxlPXt7IGZvbnRTaXplOiBcIjEuNXJlbVwiIH19IC8+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZW5lcmd5XCI+PE9mZmxpbmVCb2x0SWNvbiBzdHlsZT17eyBmb250U2l6ZTogXCIxLjVyZW1cIiB9fSAvPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJvYXRcIj48RGlyZWN0aW9uc0JvYXRJY29uIHN0eWxlPXt7IGZvbnRTaXplOiBcIjEuNXJlbVwiIH19IC8+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibW9uZXlcIj4gPExvY2FsQXRtSWNvbiBzdHlsZT17eyBmb250U2l6ZTogXCIxLjVyZW1cIiB9fSAvPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtWzBdID09PSBcInF1b3RlXCIgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aXRlbVsxXX0gY2xhc3NOYW1lPVwic3RvcnlfX2FydGljbGVRdW90ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2l0ZW1bMV19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aXRlbVsxXX0gY2xhc3NOYW1lPVwic3RvcnlfX2FydGljbGVJbWdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtWzFdfSBhbHQ9e2l0ZW1bMl19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgIDwvYXJ0aWNsZT5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XHJcbiAgICBjb25zdCBzdG9yeUlkID0gcGFyYW1zLnN0b3J5SWQ7XHJcbiAgICBjb25zdCBjcmVhdGVSYXRpbmdJbnQgPSB7XHJcbiAgICAgICAgaWQ6IHBhcnNlSW50KHN0b3J5SWQpLFxyXG4gICAgICAgIGhlYXJ0OiBNYXRoLmFicyhNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoNyAtIDAgKyAxKSArIDApKSxcclxuICAgICAgICBlbmVyZ3k6IE1hdGguYWJzKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg3IC0gMCArIDEpICsgMCkpLFxyXG4gICAgICAgIHNoaXA6IE1hdGguYWJzKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg3IC0gMCArIDEpICsgMCkpLFxyXG4gICAgICAgIG1vbmV5OiBNYXRoLmFicyhNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoNyAtIDAgKyAxKSArIDApKSxcclxuICAgIH1cclxuICAgIGxldCByYXRpbmdieUlkID0gYXdhaXQgcHJpc21hLnJhdGluZ3MuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgICAgaWQ6IHBhcnNlSW50KHBhcmFtcy5zdG9yeUlkKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgaWYgKCFyYXRpbmdieUlkKSB7XHJcbiAgICAgICAgcmF0aW5nYnlJZCA9IGNyZWF0ZVJhdGluZ0ludDtcclxuICAgICAgICBjb25zdCBjcmVhdGVkUmF0aW5nID0gYXdhaXQgcHJpc21hLnJhdGluZ3MuY3JlYXRlKHtcclxuICAgICAgICAgICAgZGF0YTogY3JlYXRlUmF0aW5nSW50LFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2hhY2tlci1zdG9yaWVzLyR7c3RvcnlJZH1gKTtcclxuICAgIGNvbnN0IHN0b3J5QnlJZCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIHN0b3J5QnlJZCxcclxuICAgICAgICAgICAgcmF0aW5nYnlJZCxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9yeTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsImNvb2tpZUN1dHRlciIsIlR1cm5lZEluTm90SWNvbiIsIkZhdm9yaXRlSWNvbiIsIk9mZmxpbmVCb2x0SWNvbiIsIkRpcmVjdGlvbnNCb2F0SWNvbiIsIkxvY2FsQXRtSWNvbiIsIkVjb0ljb24iLCJMaW5rZWRJbkljb24iLCJUd2l0dGVySWNvbiIsIkdpdEh1Ykljb24iLCJjcmVhdGVCcmVha3BvaW50cyIsIlN0b3J5Iiwic3RvcnlCeUlkIiwicmF0aW5nYnlJZCIsImNvbnNvbGUiLCJsb2ciLCJyb3V0ZXIiLCJzdG9yeSIsInNldFN0b3J5IiwiaGVhcnQiLCJlbmVyZ3kiLCJzaGlwIiwibW9uZXkiLCJzdG9yeVJhdGluZyIsInNldFN0b3J5UmF0aW5nIiwic3RvcnlSYXRpbmdUb3RhbCIsIk9iamVjdCIsInZhbHVlcyIsInJlZHVjZSIsInByZXYiLCJjdXJyIiwic3RvcnlSYXRpbmdDbGlja2VkIiwic2V0U3RvcnlSYXRpbmdDbGlja2VkIiwiY29va2llUmF0aW5nc0NsaWNrZWQiLCJnZXQiLCJpZCIsInJhdGluZ0NsaWNrZWRJbnQiLCJzZXQiLCJKU09OIiwic3RyaW5naWZ5IiwicGFyc2UiLCJ1cGRhdGVSYXRpbmdzIiwibmV3UmF0aW5nIiwidXBkYXRlZFJhdGluZyIsInBhcnNlSW50IiwicXVlcnkiLCJzdG9yeUlkIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwicmVzcG9uc2UiLCJqc29uIiwiZGVsZXRlQWxsIiwiaGFuZGxlQ2xpY2siLCJpY29uVHlwZSIsInRpdGxlIiwiZm9udFNpemUiLCJpbWciLCJhdXRob3JJbWciLCJhdXRob3JoYW5kbGUiLCJhdXRob3IiLCJtYWluQXJ0aWNsZSIsIm1hcCIsIml0ZW0iLCJzdWJBcnRpY2xlcyIsImFydGljbGUiLCJhcnRpY2xlcyIsImxlbmd0aCIsInVybCJdLCJzb3VyY2VSb290IjoiIn0=