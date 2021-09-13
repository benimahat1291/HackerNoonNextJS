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

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(),
      storyRatingClicked = _useState3[0],
      setStoryRatingClicked = _useState3[1];

  console.log(story);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    var cookieRatingsClicked = cookie_cutter__WEBPACK_IMPORTED_MODULE_5___default().get(storyById.id);

    if (cookieRatingsClicked) {
      console.log("cookie");
      console.log(cookieRatingsClicked);
      cookie_cutter__WEBPACK_IMPORTED_MODULE_5___default().set(router.query.storyId, ratingClickedInt);
      setStoryRatingClicked(cookieRatingClicked);
    } else {
      var _ratingClickedInt = {
        heart: false,
        energy: false,
        ship: false,
        money: false
      };
      setStoryRatingClicked(_ratingClickedInt);
    }
  }, []);

  var setRatingCookies = function setRatingCookies() {
    cookie_cutter__WEBPACK_IMPORTED_MODULE_5___default().set(router.query.storyId, storyRatingClicked);
  };

  var updateRatings = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_BENI_Desktop_Web_Dev_practice_next_hackernoon_storypage_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_BENI_Desktop_Web_Dev_practice_next_hackernoon_storypage_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(newRating) {
      var updatedRating, response;
      return C_Users_BENI_Desktop_Web_Dev_practice_next_hackernoon_storypage_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log("updateRating");
              console.log(newRating);
              setRatingCookies();
              updatedRating = _objectSpread(_objectSpread({}, newRating), {}, {
                id: parseInt(router.query.storyId)
              });
              _context.next = 6;
              return fetch("/api/storyratings", {
                method: "PATCH",
                body: JSON.stringify(updatedRating)
              });

            case 6:
              response = _context.sent;
              _context.next = 9;
              return response.json();

            case 9:
              return _context.abrupt("return", _context.sent);

            case 10:
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

  updateRatings(storyRating); // console.log("storyRating", storyRating)

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("article", {
    className: "story",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: "story__header",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h1", {
        children: story.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 132,
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
          lineNumber: 140,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
          className: "story__detailsInfoType",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_Eco__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 65
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 59
          }, _this), "new story"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
          className: "story__detailsInfoMark",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_TurnedInNot__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 59
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "story__detailsRatings",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
          src: "https://hackernoon.com/_next/image?url=%2FtldrOpen.png&w=2048&q=75",
          alt: "linkbar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 21
        }, _this), storyRatingTotal && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h2", {
          children: storyRatingTotal
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 42
        }, _this), storyRatingClicked && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "story__detailsRatingIcons",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: storyRatingClicked.heart ? "heartActive" : "heart",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
              children: storyRating.heart
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 149,
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
                lineNumber: 150,
                columnNumber: 76
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 150,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: storyRatingClicked.energy ? "energyActive" : "energy",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
              className: "energyRating",
              children: storyRating.energy
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 153,
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
                lineNumber: 154,
                columnNumber: 76
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: storyRatingClicked.ship ? "shipActive" : "ship",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
              className: "shipRating",
              children: storyRating.ship
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 157,
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
                lineNumber: 158,
                columnNumber: 75
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 158,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: storyRatingClicked.money ? "moneyActive" : "money",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
              className: "moneyRating",
              children: storyRating.money
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 161,
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
                lineNumber: 162,
                columnNumber: 76
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 162,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 43
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: "story__mainImgContainer",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
        src: story.img,
        alt: story.img
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
      onClick: deleteAll,
      children: "delete"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 176,
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
          lineNumber: 181,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "story__mainAuthorInfo",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h4", {
            children: story.authorhandle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
            children: story.author
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
          children: "Freelance software developer and writer with a background in AI, crypto, and quant finance."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "story__mainAuthorSocialIcons",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_13__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 188,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 188,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_14__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 189,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 189,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_15__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 190,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 190,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 180,
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
              lineNumber: 197,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: "dash"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 198,
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
                  lineNumber: 200,
                  columnNumber: 59
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 200,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                className: "energy",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_OfflineBolt__WEBPACK_IMPORTED_MODULE_10__.default, {
                  style: {
                    fontSize: "1.5rem"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 201,
                  columnNumber: 60
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 201,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                className: "boat",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_DirectionsBoat__WEBPACK_IMPORTED_MODULE_11__.default, {
                  style: {
                    fontSize: "1.5rem"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 202,
                  columnNumber: 58
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 202,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                className: "money",
                children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_LocalAtm__WEBPACK_IMPORTED_MODULE_12__.default, {
                  style: {
                    fontSize: "1.5rem"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 203,
                  columnNumber: 60
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 203,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 199,
              columnNumber: 29
            }, _this)]
          }, item, true, {
            fileName: _jsxFileName,
            lineNumber: 196,
            columnNumber: 25
          }, _this);
        }), story.subArticles.map(function (article) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "story__subArticle",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h2", {
              children: article.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 210,
              columnNumber: 29
            }, _this), article.articles.map(function (item) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
                children: item.length === 1 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                  className: "story__mainArticleItem",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
                    children: item
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 215,
                    columnNumber: 45
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                    className: "dash"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 216,
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
                        lineNumber: 218,
                        columnNumber: 75
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 218,
                      columnNumber: 49
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                      className: "energy",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_OfflineBolt__WEBPACK_IMPORTED_MODULE_10__.default, {
                        style: {
                          fontSize: "1.5rem"
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 219,
                        columnNumber: 76
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 219,
                      columnNumber: 49
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                      className: "boat",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_DirectionsBoat__WEBPACK_IMPORTED_MODULE_11__.default, {
                        style: {
                          fontSize: "1.5rem"
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 220,
                        columnNumber: 74
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 220,
                      columnNumber: 49
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                      className: "money",
                      children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_LocalAtm__WEBPACK_IMPORTED_MODULE_12__.default, {
                        style: {
                          fontSize: "1.5rem"
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 221,
                        columnNumber: 76
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 221,
                      columnNumber: 49
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 217,
                    columnNumber: 45
                  }, _this)]
                }, item, true, {
                  fileName: _jsxFileName,
                  lineNumber: 214,
                  columnNumber: 41
                }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
                  children: item[0] === "quote" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                    className: "story__articleQuote",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
                      children: item[1]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 228,
                      columnNumber: 53
                    }, _this)
                  }, item[1], false, {
                    fileName: _jsxFileName,
                    lineNumber: 227,
                    columnNumber: 49
                  }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                    className: "story__articleImg",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
                      src: item[1],
                      alt: item[2]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 232,
                      columnNumber: 53
                    }, _this)
                  }, item[1], false, {
                    fileName: _jsxFileName,
                    lineNumber: 231,
                    columnNumber: 49
                  }, _this)
                }, void 0, false)
              }, void 0, false);
            })]
          }, article.url, true, {
            fileName: _jsxFileName,
            lineNumber: 209,
            columnNumber: 25
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 129,
    columnNumber: 9
  }, _this);
};

_s(Story, "BDqYMWxQQxMZj6ibT24Wcao/MDY=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3RvcnkvW3N0b3J5SWRdLjIyZjIxMjYxOWU5OTZhZGZhYTc3LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUdBLElBQU1lLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQThCO0FBQUE7O0FBQUEsTUFBM0JDLFNBQTJCLFFBQTNCQSxTQUEyQjtBQUFBLE1BQWhCQyxVQUFnQixRQUFoQkEsVUFBZ0I7QUFDeENDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVo7QUFDQSxNQUFNQyxNQUFNLEdBQUdqQixzREFBUyxFQUF4Qjs7QUFDQSxrQkFBMEJGLCtDQUFRLENBQUNlLFNBQUQsQ0FBbEM7QUFBQSxNQUFPSyxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFDQSxtQkFBc0NyQiwrQ0FBUSxDQUFDO0FBQzNDc0IsSUFBQUEsS0FBSyxFQUFFTixVQUFVLENBQUNNLEtBRHlCO0FBRTNDQyxJQUFBQSxNQUFNLEVBQUVQLFVBQVUsQ0FBQ08sTUFGd0I7QUFHM0NDLElBQUFBLElBQUksRUFBRVIsVUFBVSxDQUFDUSxJQUgwQjtBQUkzQ0MsSUFBQUEsS0FBSyxFQUFFVCxVQUFVLENBQUNTO0FBSnlCLEdBQUQsQ0FBOUM7QUFBQSxNQUFPQyxXQUFQO0FBQUEsTUFBb0JDLGNBQXBCOztBQVFBLE1BQUlDLGdCQUFnQixHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBY0osV0FBZCxFQUEyQkssTUFBM0IsQ0FBa0MsVUFBQ0MsSUFBRCxFQUFPQyxJQUFQO0FBQUEsV0FBZ0JELElBQUksR0FBR0MsSUFBdkI7QUFBQSxHQUFsQyxDQUF2Qjs7QUFDQSxtQkFBb0RqQywrQ0FBUSxFQUE1RDtBQUFBLE1BQU9rQyxrQkFBUDtBQUFB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LENBQUNHLEdBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRG1CO0FBQUEsU0FBdEIsQ0FkTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFmSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFsREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUF5SEgsQ0F2T0Q7O0dBQU0xRDtVQUVhWjs7O0tBRmJZOztBQTZRTiwrREFBZUEsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zdG9yeS9bc3RvcnlJZF0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcclxuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCJcclxuaW1wb3J0IGNvb2tpZUN1dHRlciBmcm9tICdjb29raWUtY3V0dGVyJ1xyXG5pbXBvcnQgVHVybmVkSW5Ob3RJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9UdXJuZWRJbk5vdCc7XHJcbmltcG9ydCBGYXZvcml0ZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Zhdm9yaXRlJztcclxuaW1wb3J0IE9mZmxpbmVCb2x0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvT2ZmbGluZUJvbHQnO1xyXG5pbXBvcnQgRGlyZWN0aW9uc0JvYXRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9EaXJlY3Rpb25zQm9hdCc7XHJcbmltcG9ydCBMb2NhbEF0bUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0xvY2FsQXRtJztcclxuaW1wb3J0IEVjb0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Vjbyc7XHJcbmltcG9ydCBMaW5rZWRJbkljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0xpbmtlZEluJztcclxuaW1wb3J0IFR3aXR0ZXJJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Ud2l0dGVyJztcclxuaW1wb3J0IEdpdEh1Ykljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0dpdEh1Yic7XHJcbmltcG9ydCBjcmVhdGVCcmVha3BvaW50cyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvY3JlYXRlQnJlYWtwb2ludHMnO1xyXG5cclxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpXHJcbmNvbnN0IFN0b3J5ID0gKHsgc3RvcnlCeUlkLCByYXRpbmdieUlkfSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJzdG9yeVBhZ2VcIik7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IFtzdG9yeSwgc2V0U3RvcnldID0gdXNlU3RhdGUoc3RvcnlCeUlkKVxyXG4gICAgY29uc3QgW3N0b3J5UmF0aW5nLCBzZXRTdG9yeVJhdGluZ10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgaGVhcnQ6IHJhdGluZ2J5SWQuaGVhcnQsXHJcbiAgICAgICAgZW5lcmd5OiByYXRpbmdieUlkLmVuZXJneSxcclxuICAgICAgICBzaGlwOiByYXRpbmdieUlkLnNoaXAsXHJcbiAgICAgICAgbW9uZXk6IHJhdGluZ2J5SWQubW9uZXksXHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICBsZXQgc3RvcnlSYXRpbmdUb3RhbCA9IE9iamVjdC52YWx1ZXMoc3RvcnlSYXRpbmcpLnJlZHVjZSgocHJldiwgY3VycikgPT4gcHJldiArIGN1cnIpXHJcbiAgICBjb25zdCBbc3RvcnlSYXRpbmdDbGlja2VkLCBzZXRTdG9yeVJhdGluZ0NsaWNrZWRdID0gdXNlU3RhdGUoKVxyXG5cclxuICAgIGNvbnNvbGUubG9nKHN0b3J5KVxyXG5cclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAgICAgbGV0IGNvb2tpZVJhdGluZ3NDbGlja2VkID0gY29va2llQ3V0dGVyLmdldChzdG9yeUJ5SWQuaWQpXHJcbiAgICAgICAgaWYoY29va2llUmF0aW5nc0NsaWNrZWQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb29raWVcIilcclxuICAgICAgICAgICAgY29uc29sZS5sb2coY29va2llUmF0aW5nc0NsaWNrZWQpXHJcbiAgICAgICAgICAgIGNvb2tpZUN1dHRlci5zZXQocm91dGVyLnF1ZXJ5LnN0b3J5SWQsIHJhdGluZ0NsaWNrZWRJbnQgKVxyXG4gICAgICAgICAgICBzZXRTdG9yeVJhdGluZ0NsaWNrZWQoY29va2llUmF0aW5nQ2xpY2tlZClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgcmF0aW5nQ2xpY2tlZEludCA9IHtcclxuICAgICAgICAgICAgICAgIGhlYXJ0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGVuZXJneTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzaGlwOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG1vbmV5OiBmYWxzZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRTdG9yeVJhdGluZ0NsaWNrZWQocmF0aW5nQ2xpY2tlZEludClcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcbiAgICBcclxuICAgIGNvbnN0IHNldFJhdGluZ0Nvb2tpZXMgPSAoKSA9PiB7XHJcbiAgICAgICAgY29va2llQ3V0dGVyLnNldChyb3V0ZXIucXVlcnkuc3RvcnlJZCwgc3RvcnlSYXRpbmdDbGlja2VkKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCB1cGRhdGVSYXRpbmdzID0gYXN5bmMgKG5ld1JhdGluZykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidXBkYXRlUmF0aW5nXCIpXHJcbiAgICAgICAgY29uc29sZS5sb2cobmV3UmF0aW5nKVxyXG4gICAgICAgIHNldFJhdGluZ0Nvb2tpZXMoKVxyXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRSYXRpbmcgPSB7IC4uLm5ld1JhdGluZywgaWQ6IHBhcnNlSW50KHJvdXRlci5xdWVyeS5zdG9yeUlkKSB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL3N0b3J5cmF0aW5nc1wiLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQQVRDSFwiLFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh1cGRhdGVkUmF0aW5nKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3QgZGVsZXRlQWxsID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL3N0b3J5cmF0aW5nc1wiLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChpY29uVHlwZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2xpY2tcIilcclxuICAgICAgICBjb25zb2xlLmxvZyhpY29uVHlwZSlcclxuICAgICAgICBzd2l0Y2ggKGljb25UeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJoZWFydFwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKHN0b3J5UmF0aW5nQ2xpY2tlZC5oZWFydCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTdG9yeVJhdGluZyh7IC4uLnN0b3J5UmF0aW5nLCBoZWFydDogc3RvcnlSYXRpbmcuaGVhcnQgKyAxIH0pXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFN0b3J5UmF0aW5nKHsgLi4uc3RvcnlSYXRpbmcsIGhlYXJ0OiBzdG9yeVJhdGluZy5oZWFydCAtIDEgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNldFN0b3J5UmF0aW5nQ2xpY2tlZCh7IC4uLnN0b3J5UmF0aW5nQ2xpY2tlZCwgaGVhcnQ6ICFzdG9yeVJhdGluZ0NsaWNrZWQuaGVhcnQgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImVuZXJneVwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKHN0b3J5UmF0aW5nQ2xpY2tlZC5lbmVyZ3kgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3RvcnlSYXRpbmcoeyAuLi5zdG9yeVJhdGluZywgZW5lcmd5OiBzdG9yeVJhdGluZy5lbmVyZ3kgKyAxIH0pXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFN0b3J5UmF0aW5nKHsgLi4uc3RvcnlSYXRpbmcsIGVuZXJneTogc3RvcnlSYXRpbmcuZW5lcmd5IC0gMSB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2V0U3RvcnlSYXRpbmdDbGlja2VkKHsgLi4uc3RvcnlSYXRpbmdDbGlja2VkLCBlbmVyZ3k6ICFzdG9yeVJhdGluZ0NsaWNrZWQuZW5lcmd5IH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzaGlwXCI6XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RvcnlSYXRpbmdDbGlja2VkLnNoaXAgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3RvcnlSYXRpbmcoeyAuLi5zdG9yeVJhdGluZywgc2hpcDogc3RvcnlSYXRpbmcuc2hpcCArIDEgfSlcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3RvcnlSYXRpbmcoeyAuLi5zdG9yeVJhdGluZywgc2hpcDogc3RvcnlSYXRpbmcuc2hpcCAtIDEgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNldFN0b3J5UmF0aW5nQ2xpY2tlZCh7IC4uLnN0b3J5UmF0aW5nQ2xpY2tlZCwgc2hpcDogIXN0b3J5UmF0aW5nQ2xpY2tlZC5zaGlwIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RvcnlSYXRpbmdDbGlja2VkLm1vbmV5ID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFN0b3J5UmF0aW5nKHsgLi4uc3RvcnlSYXRpbmcsIG1vbmV5OiBzdG9yeVJhdGluZy5tb25leSArIDEgfSlcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3RvcnlSYXRpbmcoeyAuLi5zdG9yeVJhdGluZywgbW9uZXk6IHN0b3J5UmF0aW5nLm1vbmV5IC0gMSB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2V0U3RvcnlSYXRpbmdDbGlja2VkKHsgLi4uc3RvcnlSYXRpbmdDbGlja2VkLCBtb25leTogIXN0b3J5UmF0aW5nQ2xpY2tlZC5tb25leSB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHVwZGF0ZVJhdGluZ3Moc3RvcnlSYXRpbmcpXHJcbiAgICAvLyBjb25zb2xlLmxvZyhcInN0b3J5UmF0aW5nXCIsIHN0b3J5UmF0aW5nKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwic3RvcnlcIj5cclxuICAgICAgICAgICAgey8qIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyBTVE9SWSBIRUFERVIgX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18gICovfVxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeV9faGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDE+e3N0b3J5LnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fIFNUT1JZIERFVEFJTFMgX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18gICovfVxyXG5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcnlfX2RldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcnlfX2RldGFpbHNJbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3RvcnlfX2RldGFpbHNJbmZvRGF0ZVwiPlNlcHRlbWJlciAxMHRoIDIwMjE8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3RvcnlfX2RldGFpbHNJbmZvVHlwZVwiPjxzcGFuPjxFY29JY29uIC8+PC9zcGFuPm5ldyBzdG9yeTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdG9yeV9fZGV0YWlsc0luZm9NYXJrXCI+PFR1cm5lZEluTm90SWNvbiAvPjwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeV9fZGV0YWlsc1JhdGluZ3NcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaGFja2Vybm9vbi5jb20vX25leHQvaW1hZ2U/dXJsPSUyRnRsZHJPcGVuLnBuZyZ3PTIwNDgmcT03NVwiIGFsdD1cImxpbmtiYXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtzdG9yeVJhdGluZ1RvdGFsICYmIDxoMj57c3RvcnlSYXRpbmdUb3RhbH08L2gyPn1cclxuICAgICAgICAgICAgICAgICAgIHtzdG9yeVJhdGluZ0NsaWNrZWQgJiYgPGRpdiBjbGFzc05hbWU9XCJzdG9yeV9fZGV0YWlsc1JhdGluZ0ljb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdG9yeVJhdGluZ0NsaWNrZWQuaGVhcnQgPyBcImhlYXJ0QWN0aXZlXCIgOiBcImhlYXJ0XCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3N0b3J5UmF0aW5nLmhlYXJ0fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soXCJoZWFydFwiKX0gID48RmF2b3JpdGVJY29uIHN0eWxlPXt7IGZvbnRTaXplOiBcIjEuOHJlbVwiIH19IC8+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3RvcnlSYXRpbmdDbGlja2VkLmVuZXJneSA/IFwiZW5lcmd5QWN0aXZlXCIgOiBcImVuZXJneVwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVuZXJneVJhdGluZ1wiPntzdG9yeVJhdGluZy5lbmVyZ3l9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhcImVuZXJneVwiKX0gPjxPZmZsaW5lQm9sdEljb24gc3R5bGU9e3sgZm9udFNpemU6IFwiMS44cmVtXCIgfX0gLz48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdG9yeVJhdGluZ0NsaWNrZWQuc2hpcCA/IFwic2hpcEFjdGl2ZVwiIDogXCJzaGlwXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic2hpcFJhdGluZ1wiPntzdG9yeVJhdGluZy5zaGlwfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soXCJzaGlwXCIpfSAgPjxEaXJlY3Rpb25zQm9hdEljb24gc3R5bGU9e3sgZm9udFNpemU6IFwiMS44cmVtXCIgfX0gLz48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdG9yeVJhdGluZ0NsaWNrZWQubW9uZXkgPyBcIm1vbmV5QWN0aXZlXCIgOiBcIm1vbmV5XCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibW9uZXlSYXRpbmdcIj57c3RvcnlSYXRpbmcubW9uZXl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhcIm1vbmV5XCIpfSA+IDxMb2NhbEF0bUljb24gc3R5bGU9e3sgZm9udFNpemU6IFwiMS44cmVtXCIgfX0gLz48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyBTVE9SWSBNQUlOIElNRyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyAgKi99XHJcblxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeV9fbWFpbkltZ0NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3N0b3J5LmltZ30gYWx0PXtzdG9yeS5pbWd9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyBTVE9SWSBNQUlOX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18gICovfVxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2RlbGV0ZUFsbH0gPmRlbGV0ZTwvYnV0dG9uPlxyXG5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcnlfX21haW5cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcnlfX21haW5BdXRob3JcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17c3RvcnkuYXV0aG9ySW1nfSBhbHQ9e3N0b3J5LmF1dGhvckltZ30gLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0b3J5X19tYWluQXV0aG9ySW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+e3N0b3J5LmF1dGhvcmhhbmRsZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57c3RvcnkuYXV0aG9yfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5GcmVlbGFuY2Ugc29mdHdhcmUgZGV2ZWxvcGVyIGFuZCB3cml0ZXIgd2l0aCBhIGJhY2tncm91bmQgaW4gQUksIGNyeXB0bywgYW5kIHF1YW50IGZpbmFuY2UuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcnlfX21haW5BdXRob3JTb2NpYWxJY29uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPjxMaW5rZWRJbkljb24gLz48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj48VHdpdHRlckljb24gLz48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj48R2l0SHViSWNvbiAvPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeV9fbWFpbkFydGljbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7c3RvcnkubWFpbkFydGljbGUubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcnlfX21haW5BcnRpY2xlSXRlbVwiIGtleT17aXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57aXRlbX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhc2hcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcnlfX2FydGlsZUljb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJoZWFydFwiPjxGYXZvcml0ZUljb24gc3R5bGU9e3sgZm9udFNpemU6IFwiMS41cmVtXCIgfX0gLz48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImVuZXJneVwiPjxPZmZsaW5lQm9sdEljb24gc3R5bGU9e3sgZm9udFNpemU6IFwiMS41cmVtXCIgfX0gLz48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJvYXRcIj48RGlyZWN0aW9uc0JvYXRJY29uIHN0eWxlPXt7IGZvbnRTaXplOiBcIjEuNXJlbVwiIH19IC8+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtb25leVwiPiA8TG9jYWxBdG1JY29uIHN0eWxlPXt7IGZvbnRTaXplOiBcIjEuNXJlbVwiIH19IC8+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIHtzdG9yeS5zdWJBcnRpY2xlcy5tYXAoKGFydGljbGUpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeV9fc3ViQXJ0aWNsZVwiIGtleT17YXJ0aWNsZS51cmx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPnthcnRpY2xlLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXJ0aWNsZS5hcnRpY2xlcy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5sZW5ndGggPT09IDEgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeV9fbWFpbkFydGljbGVJdGVtXCIga2V5PXtpdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57aXRlbX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXNoXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeV9fYXJ0aWxlSWNvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJoZWFydFwiPjxGYXZvcml0ZUljb24gc3R5bGU9e3sgZm9udFNpemU6IFwiMS41cmVtXCIgfX0gLz48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJlbmVyZ3lcIj48T2ZmbGluZUJvbHRJY29uIHN0eWxlPXt7IGZvbnRTaXplOiBcIjEuNXJlbVwiIH19IC8+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYm9hdFwiPjxEaXJlY3Rpb25zQm9hdEljb24gc3R5bGU9e3sgZm9udFNpemU6IFwiMS41cmVtXCIgfX0gLz48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtb25leVwiPiA8TG9jYWxBdG1JY29uIHN0eWxlPXt7IGZvbnRTaXplOiBcIjEuNXJlbVwiIH19IC8+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW1bMF0gPT09IFwicXVvdGVcIiA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpdGVtWzFdfSBjbGFzc05hbWU9XCJzdG9yeV9fYXJ0aWNsZVF1b3RlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57aXRlbVsxXX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpdGVtWzFdfSBjbGFzc05hbWU9XCJzdG9yeV9fYXJ0aWNsZUltZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW1bMV19IGFsdD17aXRlbVsyXX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcclxuICAgIGNvbnN0IHN0b3J5SWQgPSBwYXJhbXMuc3RvcnlJZDtcclxuICAgIGNvbnN0IGNyZWF0ZVJhdGluZ0ludCA9IHtcclxuICAgICAgICBpZDogcGFyc2VJbnQoc3RvcnlJZCksXHJcbiAgICAgICAgaGVhcnQ6IE1hdGguYWJzKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSooNy0wKzEpKzApKSxcclxuICAgICAgICBlbmVyZ3k6IE1hdGguYWJzKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSooNy0wKzEpKzApKSxcclxuICAgICAgICBzaGlwOiBNYXRoLmFicyhNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqKDctMCsxKSswKSksXHJcbiAgICAgICAgbW9uZXk6IE1hdGguYWJzKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSooNy0wKzEpKzApKSxcclxuICAgIH1cclxuICAgIGxldCByYXRpbmdieUlkID0gYXdhaXQgcHJpc21hLnJhdGluZ3MuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgICAgaWQ6IHBhcnNlSW50KHBhcmFtcy5zdG9yeUlkKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgaWYgKCFyYXRpbmdieUlkKSB7XHJcbiAgICAgICAgcmF0aW5nYnlJZCA9IGNyZWF0ZVJhdGluZ0ludDtcclxuICAgICAgICBjb25zdCBjcmVhdGVkUmF0aW5nID0gYXdhaXQgcHJpc21hLnJhdGluZ3MuY3JlYXRlKHtcclxuICAgICAgICAgICAgZGF0YTogY3JlYXRlUmF0aW5nSW50LFxyXG4gICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvaGFja2VyLXN0b3JpZXMvJHtzdG9yeUlkfWApO1xyXG4gICAgY29uc3Qgc3RvcnlCeUlkID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgc3RvcnlCeUlkLFxyXG4gICAgICAgICAgICByYXRpbmdieUlkLCBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9yeTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsImNvb2tpZUN1dHRlciIsIlR1cm5lZEluTm90SWNvbiIsIkZhdm9yaXRlSWNvbiIsIk9mZmxpbmVCb2x0SWNvbiIsIkRpcmVjdGlvbnNCb2F0SWNvbiIsIkxvY2FsQXRtSWNvbiIsIkVjb0ljb24iLCJMaW5rZWRJbkljb24iLCJUd2l0dGVySWNvbiIsIkdpdEh1Ykljb24iLCJjcmVhdGVCcmVha3BvaW50cyIsIlN0b3J5Iiwic3RvcnlCeUlkIiwicmF0aW5nYnlJZCIsImNvbnNvbGUiLCJsb2ciLCJyb3V0ZXIiLCJzdG9yeSIsInNldFN0b3J5IiwiaGVhcnQiLCJlbmVyZ3kiLCJzaGlwIiwibW9uZXkiLCJzdG9yeVJhdGluZyIsInNldFN0b3J5UmF0aW5nIiwic3RvcnlSYXRpbmdUb3RhbCIsIk9iamVjdCIsInZhbHVlcyIsInJlZHVjZSIsInByZXYiLCJjdXJyIiwic3RvcnlSYXRpbmdDbGlja2VkIiwic2V0U3RvcnlSYXRpbmdDbGlja2VkIiwiY29va2llUmF0aW5nc0NsaWNrZWQiLCJnZXQiLCJpZCIsInNldCIsInF1ZXJ5Iiwic3RvcnlJZCIsInJhdGluZ0NsaWNrZWRJbnQiLCJjb29raWVSYXRpbmdDbGlja2VkIiwic2V0UmF0aW5nQ29va2llcyIsInVwZGF0ZVJhdGluZ3MiLCJuZXdSYXRpbmciLCJ1cGRhdGVkUmF0aW5nIiwicGFyc2VJbnQiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzcG9uc2UiLCJqc29uIiwiZGVsZXRlQWxsIiwiaGFuZGxlQ2xpY2siLCJpY29uVHlwZSIsInRpdGxlIiwiZm9udFNpemUiLCJpbWciLCJhdXRob3JJbWciLCJhdXRob3JoYW5kbGUiLCJhdXRob3IiLCJtYWluQXJ0aWNsZSIsIm1hcCIsIml0ZW0iLCJzdWJBcnRpY2xlcyIsImFydGljbGUiLCJhcnRpY2xlcyIsImxlbmd0aCIsInVybCJdLCJzb3VyY2VSb290IjoiIn0=