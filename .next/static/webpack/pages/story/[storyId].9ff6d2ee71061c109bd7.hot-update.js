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
  var ratingClickedInt = {
    heart: false,
    energy: false,
    ship: false,
    money: false
  };

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

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(ratingClickedInt),
      storyRatingClicked = _useState3[0],
      setStoryRatingClicked = _useState3[1];

  console.log(story);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    var cookieRatingsClicked = cookie_cutter__WEBPACK_IMPORTED_MODULE_5___default().get(storyById.id);

    if (cookieRatingsClicked) {
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

  updateRatings(storyRating); // console.log("storyRating", storyRating)

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("article", {
    className: "story",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: "story__header",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h1", {
        children: story.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 136,
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
          lineNumber: 144,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
          className: "story__detailsInfoType",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_Eco__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 145,
              columnNumber: 65
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 59
          }, _this), "new story"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
          className: "story__detailsInfoMark",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_TurnedInNot__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 59
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "story__detailsRatings",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
          src: "https://hackernoon.com/_next/image?url=%2FtldrOpen.png&w=2048&q=75",
          alt: "linkbar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 21
        }, _this), storyRatingTotal && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h2", {
          children: storyRatingTotal
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 42
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "story__detailsRatingIcons",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: storyRatingClicked.heart ? "heartActive" : "heart",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
              children: storyRating.heart
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 153,
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
            className: storyRatingClicked.energy ? "energyActive" : "energy",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
              className: "energyRating",
              children: storyRating.energy
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 157,
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
                lineNumber: 158,
                columnNumber: 76
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
            className: storyRatingClicked.ship ? "shipActive" : "ship",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
              className: "shipRating",
              children: storyRating.ship
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 161,
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
                lineNumber: 162,
                columnNumber: 75
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 162,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: storyRatingClicked.money ? "moneyActive" : "money",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
              className: "moneyRating",
              children: storyRating.money
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 165,
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
                lineNumber: 166,
                columnNumber: 76
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 166,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: "story__mainImgContainer",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
        src: story.img,
        alt: story.img
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
      onClick: deleteAll,
      children: "delete"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 180,
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
          lineNumber: 185,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "story__mainAuthorInfo",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h4", {
            children: story.authorhandle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 187,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
            children: story.author
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 188,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
          children: "Freelance software developer and writer with a background in AI, crypto, and quant finance."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "story__mainAuthorSocialIcons",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_13__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 192,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 192,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_14__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 193,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 193,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_15__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 194,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 194,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 184,
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
              lineNumber: 201,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: "dash"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 202,
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
                  lineNumber: 204,
                  columnNumber: 59
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 204,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                className: "energy",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_OfflineBolt__WEBPACK_IMPORTED_MODULE_10__.default, {
                  style: {
                    fontSize: "1.5rem"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 205,
                  columnNumber: 60
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 205,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                className: "boat",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_DirectionsBoat__WEBPACK_IMPORTED_MODULE_11__.default, {
                  style: {
                    fontSize: "1.5rem"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 206,
                  columnNumber: 58
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 206,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                className: "money",
                children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_LocalAtm__WEBPACK_IMPORTED_MODULE_12__.default, {
                  style: {
                    fontSize: "1.5rem"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 207,
                  columnNumber: 60
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 207,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 203,
              columnNumber: 29
            }, _this)]
          }, item, true, {
            fileName: _jsxFileName,
            lineNumber: 200,
            columnNumber: 25
          }, _this);
        }), story.subArticles.map(function (article) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "story__subArticle",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h2", {
              children: article.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 214,
              columnNumber: 29
            }, _this), article.articles.map(function (item) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
                children: item.length === 1 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                  className: "story__mainArticleItem",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
                    children: item
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 219,
                    columnNumber: 45
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                    className: "dash"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 220,
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
                        lineNumber: 222,
                        columnNumber: 75
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 222,
                      columnNumber: 49
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                      className: "energy",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_OfflineBolt__WEBPACK_IMPORTED_MODULE_10__.default, {
                        style: {
                          fontSize: "1.5rem"
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 223,
                        columnNumber: 76
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 223,
                      columnNumber: 49
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                      className: "boat",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_DirectionsBoat__WEBPACK_IMPORTED_MODULE_11__.default, {
                        style: {
                          fontSize: "1.5rem"
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 224,
                        columnNumber: 74
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 224,
                      columnNumber: 49
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                      className: "money",
                      children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_LocalAtm__WEBPACK_IMPORTED_MODULE_12__.default, {
                        style: {
                          fontSize: "1.5rem"
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 225,
                        columnNumber: 76
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 225,
                      columnNumber: 49
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 221,
                    columnNumber: 45
                  }, _this)]
                }, item, true, {
                  fileName: _jsxFileName,
                  lineNumber: 218,
                  columnNumber: 41
                }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
                  children: item[0] === "quote" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                    className: "story__articleQuote",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
                      children: item[1]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 232,
                      columnNumber: 53
                    }, _this)
                  }, item[1], false, {
                    fileName: _jsxFileName,
                    lineNumber: 231,
                    columnNumber: 49
                  }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                    className: "story__articleImg",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
                      src: item[1],
                      alt: item[2]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 236,
                      columnNumber: 53
                    }, _this)
                  }, item[1], false, {
                    fileName: _jsxFileName,
                    lineNumber: 235,
                    columnNumber: 49
                  }, _this)
                }, void 0, false)
              }, void 0, false);
            })]
          }, article.url, true, {
            fileName: _jsxFileName,
            lineNumber: 213,
            columnNumber: 25
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 133,
    columnNumber: 9
  }, _this);
};

_s(Story, "i25DQOV7uVNVHWek4qCqS2VFVf0=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3RvcnkvW3N0b3J5SWRdLjlmZjZkMmVlNzEwNjFjMTA5YmQ3LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUdBLElBQU1lLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQThCO0FBQUE7O0FBQUEsTUFBM0JDLFNBQTJCLFFBQTNCQSxTQUEyQjtBQUFBLE1BQWhCQyxVQUFnQixRQUFoQkEsVUFBZ0I7QUFDeENDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVo7QUFDQSxNQUFNQyxNQUFNLEdBQUdqQixzREFBUyxFQUF4QjtBQUVBLE1BQUlrQixnQkFBZ0IsR0FBRztBQUNuQkMsSUFBQUEsS0FBSyxFQUFFLEtBRFk7QUFFbkJDLElBQUFBLE1BQU0sRUFBRSxLQUZXO0FBR25CQyxJQUFBQSxJQUFJLEVBQUUsS0FIYTtBQUluQkMsSUFBQUEsS0FBSyxFQUFFO0FBSlksR0FBdkI7O0FBUUEsa0JBQTBCeEIsK0NBQVEsQ0FBQ2UsU0FBRCxDQUFsQztBQUFBLE1BQU9VLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUNBLG1CQUFzQzFCLCtDQUFRLENBQUM7QUFDM0NxQixJQUFBQSxLQUFLLEVBQUVMLFVBQVUsQ0FBQ0ssS0FEeUI7QUFFM0NDLElBQUFBLE1BQU0sRUFBRU4sVUFBVSxDQUFDTSxNQUZ3QjtBQUczQ0MsSUFBQUEsSUFBSSxFQUFFUCxVQUFVLENBQUNPLElBSDBCO0FBSTNDQyxJQUFBQSxLQUFLLEVBQUVSLFVBQVUsQ0FBQ1E7QUFKeUIsR0FBRCxDQUE5QztBQUFBLE1BQU9HLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBUUEsTUFBSUMsZ0JBQWdCLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFj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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFsREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUF5SEgsQ0EzT0Q7O0dBQU16RDtVQUVhWjs7O0tBRmJZOztBQWlSTiwrREFBZUEsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zdG9yeS9bc3RvcnlJZF0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcclxuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCJcclxuaW1wb3J0IGNvb2tpZUN1dHRlciBmcm9tICdjb29raWUtY3V0dGVyJ1xyXG5pbXBvcnQgVHVybmVkSW5Ob3RJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9UdXJuZWRJbk5vdCc7XHJcbmltcG9ydCBGYXZvcml0ZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Zhdm9yaXRlJztcclxuaW1wb3J0IE9mZmxpbmVCb2x0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvT2ZmbGluZUJvbHQnO1xyXG5pbXBvcnQgRGlyZWN0aW9uc0JvYXRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9EaXJlY3Rpb25zQm9hdCc7XHJcbmltcG9ydCBMb2NhbEF0bUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0xvY2FsQXRtJztcclxuaW1wb3J0IEVjb0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Vjbyc7XHJcbmltcG9ydCBMaW5rZWRJbkljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0xpbmtlZEluJztcclxuaW1wb3J0IFR3aXR0ZXJJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Ud2l0dGVyJztcclxuaW1wb3J0IEdpdEh1Ykljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0dpdEh1Yic7XHJcbmltcG9ydCBjcmVhdGVCcmVha3BvaW50cyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvY3JlYXRlQnJlYWtwb2ludHMnO1xyXG5cclxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpXHJcbmNvbnN0IFN0b3J5ID0gKHsgc3RvcnlCeUlkLCByYXRpbmdieUlkfSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJzdG9yeVBhZ2VcIik7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBsZXQgcmF0aW5nQ2xpY2tlZEludCA9IHtcclxuICAgICAgICBoZWFydDogZmFsc2UsXHJcbiAgICAgICAgZW5lcmd5OiBmYWxzZSxcclxuICAgICAgICBzaGlwOiBmYWxzZSxcclxuICAgICAgICBtb25leTogZmFsc2UsXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IFtzdG9yeSwgc2V0U3RvcnldID0gdXNlU3RhdGUoc3RvcnlCeUlkKVxyXG4gICAgY29uc3QgW3N0b3J5UmF0aW5nLCBzZXRTdG9yeVJhdGluZ10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgaGVhcnQ6IHJhdGluZ2J5SWQuaGVhcnQsXHJcbiAgICAgICAgZW5lcmd5OiByYXRpbmdieUlkLmVuZXJneSxcclxuICAgICAgICBzaGlwOiByYXRpbmdieUlkLnNoaXAsXHJcbiAgICAgICAgbW9uZXk6IHJhdGluZ2J5SWQubW9uZXksXHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICBsZXQgc3RvcnlSYXRpbmdUb3RhbCA9IE9iamVjdC52YWx1ZXMoc3RvcnlSYXRpbmcpLnJlZHVjZSgocHJldiwgY3VycikgPT4gcHJldiArIGN1cnIpXHJcbiAgICBjb25zdCBbc3RvcnlSYXRpbmdDbGlja2VkLCBzZXRTdG9yeVJhdGluZ0NsaWNrZWRdID0gdXNlU3RhdGUocmF0aW5nQ2xpY2tlZEludClcclxuXHJcbiAgICBjb25zb2xlLmxvZyhzdG9yeSlcclxuXHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4gICAgICAgIGxldCBjb29raWVSYXRpbmdzQ2xpY2tlZCA9IGNvb2tpZUN1dHRlci5nZXQoc3RvcnlCeUlkLmlkKVxyXG4gICAgICAgIGlmKGNvb2tpZVJhdGluZ3NDbGlja2VkKSB7XHJcbiAgICAgICAgICAgIGNvb2tpZUN1dHRlci5zZXQocm91dGVyLnF1ZXJ5LnN0b3J5SWQsIHJhdGluZ0NsaWNrZWRJbnQgKVxyXG4gICAgICAgICAgICBzZXRTdG9yeVJhdGluZ0NsaWNrZWQoY29va2llUmF0aW5nQ2xpY2tlZClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgcmF0aW5nQ2xpY2tlZEludCA9IHtcclxuICAgICAgICAgICAgICAgIGhlYXJ0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGVuZXJneTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzaGlwOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG1vbmV5OiBmYWxzZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRTdG9yeVJhdGluZ0NsaWNrZWQocmF0aW5nQ2xpY2tlZEludClcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcbiAgICBcclxuXHJcblxyXG5cclxuICAgIGNvbnN0IHVwZGF0ZVJhdGluZ3MgPSBhc3luYyAobmV3UmF0aW5nKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ1cGRhdGVSYXRpbmdcIilcclxuICAgICAgICBjb25zb2xlLmxvZyhuZXdSYXRpbmcpXHJcbiAgICAgICAgY29uc3QgdXBkYXRlZFJhdGluZyA9IHsgLi4ubmV3UmF0aW5nLCBpZDogcGFyc2VJbnQocm91dGVyLnF1ZXJ5LnN0b3J5SWQpIH1cclxuXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvc3RvcnlyYXRpbmdzXCIsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBBVENIXCIsXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVwZGF0ZWRSYXRpbmcpXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCBkZWxldGVBbGwgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvc3RvcnlyYXRpbmdzXCIsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKGljb25UeXBlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjbGlja1wiKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGljb25UeXBlKVxyXG4gICAgICAgIHN3aXRjaCAoaWNvblR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImhlYXJ0XCI6XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RvcnlSYXRpbmdDbGlja2VkLmhlYXJ0ID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFN0b3J5UmF0aW5nKHsgLi4uc3RvcnlSYXRpbmcsIGhlYXJ0OiBzdG9yeVJhdGluZy5oZWFydCArIDEgfSlcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3RvcnlSYXRpbmcoeyAuLi5zdG9yeVJhdGluZywgaGVhcnQ6IHN0b3J5UmF0aW5nLmhlYXJ0IC0gMSB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2V0U3RvcnlSYXRpbmdDbGlja2VkKHsgLi4uc3RvcnlSYXRpbmdDbGlja2VkLCBoZWFydDogIXN0b3J5UmF0aW5nQ2xpY2tlZC5oZWFydCB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZW5lcmd5XCI6XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RvcnlSYXRpbmdDbGlja2VkLmVuZXJneSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTdG9yeVJhdGluZyh7IC4uLnN0b3J5UmF0aW5nLCBlbmVyZ3k6IHN0b3J5UmF0aW5nLmVuZXJneSArIDEgfSlcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3RvcnlSYXRpbmcoeyAuLi5zdG9yeVJhdGluZywgZW5lcmd5OiBzdG9yeVJhdGluZy5lbmVyZ3kgLSAxIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZXRTdG9yeVJhdGluZ0NsaWNrZWQoeyAuLi5zdG9yeVJhdGluZ0NsaWNrZWQsIGVuZXJneTogIXN0b3J5UmF0aW5nQ2xpY2tlZC5lbmVyZ3kgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInNoaXBcIjpcclxuICAgICAgICAgICAgICAgIGlmIChzdG9yeVJhdGluZ0NsaWNrZWQuc2hpcCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTdG9yeVJhdGluZyh7IC4uLnN0b3J5UmF0aW5nLCBzaGlwOiBzdG9yeVJhdGluZy5zaGlwICsgMSB9KVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTdG9yeVJhdGluZyh7IC4uLnN0b3J5UmF0aW5nLCBzaGlwOiBzdG9yeVJhdGluZy5zaGlwIC0gMSB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2V0U3RvcnlSYXRpbmdDbGlja2VkKHsgLi4uc3RvcnlSYXRpbmdDbGlja2VkLCBzaGlwOiAhc3RvcnlSYXRpbmdDbGlja2VkLnNoaXAgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGlmIChzdG9yeVJhdGluZ0NsaWNrZWQubW9uZXkgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3RvcnlSYXRpbmcoeyAuLi5zdG9yeVJhdGluZywgbW9uZXk6IHN0b3J5UmF0aW5nLm1vbmV5ICsgMSB9KVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTdG9yeVJhdGluZyh7IC4uLnN0b3J5UmF0aW5nLCBtb25leTogc3RvcnlSYXRpbmcubW9uZXkgLSAxIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZXRTdG9yeVJhdGluZ0NsaWNrZWQoeyAuLi5zdG9yeVJhdGluZ0NsaWNrZWQsIG1vbmV5OiAhc3RvcnlSYXRpbmdDbGlja2VkLm1vbmV5IH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgdXBkYXRlUmF0aW5ncyhzdG9yeVJhdGluZylcclxuICAgIC8vIGNvbnNvbGUubG9nKFwic3RvcnlSYXRpbmdcIiwgc3RvcnlSYXRpbmcpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJzdG9yeVwiPlxyXG4gICAgICAgICAgICB7LyogX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fIFNUT1JZIEhFQURFUiBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyAgKi99XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0b3J5X19oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMT57c3RvcnkudGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKiBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18gU1RPUlkgREVUQUlMUyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyAgKi99XHJcblxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeV9fZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeV9fZGV0YWlsc0luZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdG9yeV9fZGV0YWlsc0luZm9EYXRlXCI+U2VwdGVtYmVyIDEwdGggMjAyMTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdG9yeV9fZGV0YWlsc0luZm9UeXBlXCI+PHNwYW4+PEVjb0ljb24gLz48L3NwYW4+bmV3IHN0b3J5PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN0b3J5X19kZXRhaWxzSW5mb01hcmtcIj48VHVybmVkSW5Ob3RJY29uIC8+PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0b3J5X19kZXRhaWxzUmF0aW5nc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9oYWNrZXJub29uLmNvbS9fbmV4dC9pbWFnZT91cmw9JTJGdGxkck9wZW4ucG5nJnc9MjA0OCZxPTc1XCIgYWx0PVwibGlua2JhclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAge3N0b3J5UmF0aW5nVG90YWwgJiYgPGgyPntzdG9yeVJhdGluZ1RvdGFsfTwvaDI+fVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcnlfX2RldGFpbHNSYXRpbmdJY29uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3RvcnlSYXRpbmdDbGlja2VkLmhlYXJ0ID8gXCJoZWFydEFjdGl2ZVwiIDogXCJoZWFydFwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntzdG9yeVJhdGluZy5oZWFydH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKFwiaGVhcnRcIil9ICA+PEZhdm9yaXRlSWNvbiBzdHlsZT17eyBmb250U2l6ZTogXCIxLjhyZW1cIiB9fSAvPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0b3J5UmF0aW5nQ2xpY2tlZC5lbmVyZ3kgPyBcImVuZXJneUFjdGl2ZVwiIDogXCJlbmVyZ3lcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlbmVyZ3lSYXRpbmdcIj57c3RvcnlSYXRpbmcuZW5lcmd5fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soXCJlbmVyZ3lcIil9ID48T2ZmbGluZUJvbHRJY29uIHN0eWxlPXt7IGZvbnRTaXplOiBcIjEuOHJlbVwiIH19IC8+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3RvcnlSYXRpbmdDbGlja2VkLnNoaXAgPyBcInNoaXBBY3RpdmVcIiA6IFwic2hpcFwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNoaXBSYXRpbmdcIj57c3RvcnlSYXRpbmcuc2hpcH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKFwic2hpcFwiKX0gID48RGlyZWN0aW9uc0JvYXRJY29uIHN0eWxlPXt7IGZvbnRTaXplOiBcIjEuOHJlbVwiIH19IC8+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3RvcnlSYXRpbmdDbGlja2VkLm1vbmV5ID8gXCJtb25leUFjdGl2ZVwiIDogXCJtb25leVwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1vbmV5UmF0aW5nXCI+e3N0b3J5UmF0aW5nLm1vbmV5fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soXCJtb25leVwiKX0gPiA8TG9jYWxBdG1JY29uIHN0eWxlPXt7IGZvbnRTaXplOiBcIjEuOHJlbVwiIH19IC8+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyBTVE9SWSBNQUlOIElNRyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyAgKi99XHJcblxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeV9fbWFpbkltZ0NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3N0b3J5LmltZ30gYWx0PXtzdG9yeS5pbWd9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyBTVE9SWSBNQUlOX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18gICovfVxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2RlbGV0ZUFsbH0gPmRlbGV0ZTwvYnV0dG9uPlxyXG5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcnlfX21haW5cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcnlfX21haW5BdXRob3JcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17c3RvcnkuYXV0aG9ySW1nfSBhbHQ9e3N0b3J5LmF1dGhvckltZ30gLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0b3J5X19tYWluQXV0aG9ySW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+e3N0b3J5LmF1dGhvcmhhbmRsZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57c3RvcnkuYXV0aG9yfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5GcmVlbGFuY2Ugc29mdHdhcmUgZGV2ZWxvcGVyIGFuZCB3cml0ZXIgd2l0aCBhIGJhY2tncm91bmQgaW4gQUksIGNyeXB0bywgYW5kIHF1YW50IGZpbmFuY2UuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcnlfX21haW5BdXRob3JTb2NpYWxJY29uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPjxMaW5rZWRJbkljb24gLz48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj48VHdpdHRlckljb24gLz48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj48R2l0SHViSWNvbiAvPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeV9fbWFpbkFydGljbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7c3RvcnkubWFpbkFydGljbGUubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcnlfX21haW5BcnRpY2xlSXRlbVwiIGtleT17aXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57aXRlbX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhc2hcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcnlfX2FydGlsZUljb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJoZWFydFwiPjxGYXZvcml0ZUljb24gc3R5bGU9e3sgZm9udFNpemU6IFwiMS41cmVtXCIgfX0gLz48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImVuZXJneVwiPjxPZmZsaW5lQm9sdEljb24gc3R5bGU9e3sgZm9udFNpemU6IFwiMS41cmVtXCIgfX0gLz48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJvYXRcIj48RGlyZWN0aW9uc0JvYXRJY29uIHN0eWxlPXt7IGZvbnRTaXplOiBcIjEuNXJlbVwiIH19IC8+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtb25leVwiPiA8TG9jYWxBdG1JY29uIHN0eWxlPXt7IGZvbnRTaXplOiBcIjEuNXJlbVwiIH19IC8+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIHtzdG9yeS5zdWJBcnRpY2xlcy5tYXAoKGFydGljbGUpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeV9fc3ViQXJ0aWNsZVwiIGtleT17YXJ0aWNsZS51cmx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPnthcnRpY2xlLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXJ0aWNsZS5hcnRpY2xlcy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5sZW5ndGggPT09IDEgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeV9fbWFpbkFydGljbGVJdGVtXCIga2V5PXtpdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57aXRlbX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXNoXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeV9fYXJ0aWxlSWNvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJoZWFydFwiPjxGYXZvcml0ZUljb24gc3R5bGU9e3sgZm9udFNpemU6IFwiMS41cmVtXCIgfX0gLz48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJlbmVyZ3lcIj48T2ZmbGluZUJvbHRJY29uIHN0eWxlPXt7IGZvbnRTaXplOiBcIjEuNXJlbVwiIH19IC8+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYm9hdFwiPjxEaXJlY3Rpb25zQm9hdEljb24gc3R5bGU9e3sgZm9udFNpemU6IFwiMS41cmVtXCIgfX0gLz48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtb25leVwiPiA8TG9jYWxBdG1JY29uIHN0eWxlPXt7IGZvbnRTaXplOiBcIjEuNXJlbVwiIH19IC8+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW1bMF0gPT09IFwicXVvdGVcIiA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpdGVtWzFdfSBjbGFzc05hbWU9XCJzdG9yeV9fYXJ0aWNsZVF1b3RlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57aXRlbVsxXX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpdGVtWzFdfSBjbGFzc05hbWU9XCJzdG9yeV9fYXJ0aWNsZUltZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW1bMV19IGFsdD17aXRlbVsyXX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcclxuICAgIGNvbnN0IHN0b3J5SWQgPSBwYXJhbXMuc3RvcnlJZDtcclxuICAgIGNvbnN0IGNyZWF0ZVJhdGluZ0ludCA9IHtcclxuICAgICAgICBpZDogcGFyc2VJbnQoc3RvcnlJZCksXHJcbiAgICAgICAgaGVhcnQ6IE1hdGguYWJzKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSooNy0wKzEpKzApKSxcclxuICAgICAgICBlbmVyZ3k6IE1hdGguYWJzKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSooNy0wKzEpKzApKSxcclxuICAgICAgICBzaGlwOiBNYXRoLmFicyhNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqKDctMCsxKSswKSksXHJcbiAgICAgICAgbW9uZXk6IE1hdGguYWJzKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSooNy0wKzEpKzApKSxcclxuICAgIH1cclxuICAgIGxldCByYXRpbmdieUlkID0gYXdhaXQgcHJpc21hLnJhdGluZ3MuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgICAgaWQ6IHBhcnNlSW50KHBhcmFtcy5zdG9yeUlkKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgaWYgKCFyYXRpbmdieUlkKSB7XHJcbiAgICAgICAgcmF0aW5nYnlJZCA9IGNyZWF0ZVJhdGluZ0ludDtcclxuICAgICAgICBjb25zdCBjcmVhdGVkUmF0aW5nID0gYXdhaXQgcHJpc21hLnJhdGluZ3MuY3JlYXRlKHtcclxuICAgICAgICAgICAgZGF0YTogY3JlYXRlUmF0aW5nSW50LFxyXG4gICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvaGFja2VyLXN0b3JpZXMvJHtzdG9yeUlkfWApO1xyXG4gICAgY29uc3Qgc3RvcnlCeUlkID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgc3RvcnlCeUlkLFxyXG4gICAgICAgICAgICByYXRpbmdieUlkLCBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9yeTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsImNvb2tpZUN1dHRlciIsIlR1cm5lZEluTm90SWNvbiIsIkZhdm9yaXRlSWNvbiIsIk9mZmxpbmVCb2x0SWNvbiIsIkRpcmVjdGlvbnNCb2F0SWNvbiIsIkxvY2FsQXRtSWNvbiIsIkVjb0ljb24iLCJMaW5rZWRJbkljb24iLCJUd2l0dGVySWNvbiIsIkdpdEh1Ykljb24iLCJjcmVhdGVCcmVha3BvaW50cyIsIlN0b3J5Iiwic3RvcnlCeUlkIiwicmF0aW5nYnlJZCIsImNvbnNvbGUiLCJsb2ciLCJyb3V0ZXIiLCJyYXRpbmdDbGlja2VkSW50IiwiaGVhcnQiLCJlbmVyZ3kiLCJzaGlwIiwibW9uZXkiLCJzdG9yeSIsInNldFN0b3J5Iiwic3RvcnlSYXRpbmciLCJzZXRTdG9yeVJhdGluZyIsInN0b3J5UmF0aW5nVG90YWwiLCJPYmplY3QiLCJ2YWx1ZXMiLCJyZWR1Y2UiLCJwcmV2IiwiY3VyciIsInN0b3J5UmF0aW5nQ2xpY2tlZCIsInNldFN0b3J5UmF0aW5nQ2xpY2tlZCIsImNvb2tpZVJhdGluZ3NDbGlja2VkIiwiZ2V0IiwiaWQiLCJzZXQiLCJxdWVyeSIsInN0b3J5SWQiLCJjb29raWVSYXRpbmdDbGlja2VkIiwidXBkYXRlUmF0aW5ncyIsIm5ld1JhdGluZyIsInVwZGF0ZWRSYXRpbmciLCJwYXJzZUludCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXNwb25zZSIsImpzb24iLCJkZWxldGVBbGwiLCJoYW5kbGVDbGljayIsImljb25UeXBlIiwidGl0bGUiLCJmb250U2l6ZSIsImltZyIsImF1dGhvckltZyIsImF1dGhvcmhhbmRsZSIsImF1dGhvciIsIm1haW5BcnRpY2xlIiwibWFwIiwiaXRlbSIsInN1YkFydGljbGVzIiwiYXJ0aWNsZSIsImFydGljbGVzIiwibGVuZ3RoIiwidXJsIl0sInNvdXJjZVJvb3QiOiIifQ==