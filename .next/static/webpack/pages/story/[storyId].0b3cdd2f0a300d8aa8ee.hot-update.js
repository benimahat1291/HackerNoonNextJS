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
    var cookieRatingsClicked = cookie_cutter__WEBPACK_IMPORTED_MODULE_5___default().get(storyById.id.toString());

    if (cookieRatingsClicked) {
      console.log("nocookie");
      console.log(cookieRatingsClicked);
      var ratingClickedInt = {
        heart: false,
        energy: false,
        ship: false,
        money: false
      };
      cookie_cutter__WEBPACK_IMPORTED_MODULE_5___default().set(storyById.id.toString(), ratingClickedInt);
      setStoryRatingClicked(ratingClickedInt);
    } else {
      console.log("cookie");
      console.log(cookieRatingsClicked);
      setStoryRatingClicked(cookieRatingsClicked);
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
        lineNumber: 136,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 135,
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
          lineNumber: 143,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
          className: "story__detailsInfoType",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_Eco__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 65
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 59
          }, _this), "new story"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
          className: "story__detailsInfoMark",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_TurnedInNot__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 59
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "story__detailsRatings",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
          src: "https://hackernoon.com/_next/image?url=%2FtldrOpen.png&w=2048&q=75",
          alt: "linkbar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 21
        }, _this), storyRatingTotal && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h2", {
          children: storyRatingTotal
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 42
        }, _this), storyRatingClicked && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "story__detailsRatingIcons",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: storyRatingClicked.heart ? "heartActive" : "heart",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
              children: storyRating.heart
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 152,
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
                lineNumber: 153,
                columnNumber: 76
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 153,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: storyRatingClicked.energy ? "energyActive" : "energy",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
              className: "energyRating",
              children: storyRating.energy
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 156,
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
                lineNumber: 157,
                columnNumber: 76
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: storyRatingClicked.ship ? "shipActive" : "ship",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
              className: "shipRating",
              children: storyRating.ship
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 160,
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
                lineNumber: 161,
                columnNumber: 75
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 161,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: storyRatingClicked.money ? "moneyActive" : "money",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
              className: "moneyRating",
              children: storyRating.money
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 164,
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
                lineNumber: 165,
                columnNumber: 76
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 165,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 44
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: "story__mainImgContainer",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
        src: story.img,
        alt: story.img
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
      onClick: deleteAll,
      children: "delete"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 179,
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
          lineNumber: 184,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "story__mainAuthorInfo",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h4", {
            children: story.authorhandle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
            children: story.author
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 187,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
          children: "Freelance software developer and writer with a background in AI, crypto, and quant finance."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "story__mainAuthorSocialIcons",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_13__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 191,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 191,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_14__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 192,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 192,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_15__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 193,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 193,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 183,
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
              lineNumber: 200,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: "dash"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 201,
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
                  lineNumber: 203,
                  columnNumber: 59
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 203,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                className: "energy",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_OfflineBolt__WEBPACK_IMPORTED_MODULE_10__.default, {
                  style: {
                    fontSize: "1.5rem"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 204,
                  columnNumber: 60
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 204,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                className: "boat",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_DirectionsBoat__WEBPACK_IMPORTED_MODULE_11__.default, {
                  style: {
                    fontSize: "1.5rem"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 205,
                  columnNumber: 58
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 205,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                className: "money",
                children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_LocalAtm__WEBPACK_IMPORTED_MODULE_12__.default, {
                  style: {
                    fontSize: "1.5rem"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 206,
                  columnNumber: 60
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 206,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 202,
              columnNumber: 29
            }, _this)]
          }, item, true, {
            fileName: _jsxFileName,
            lineNumber: 199,
            columnNumber: 25
          }, _this);
        }), story.subArticles.map(function (article) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "story__subArticle",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h2", {
              children: article.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 213,
              columnNumber: 29
            }, _this), article.articles.map(function (item) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
                children: item.length === 1 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                  className: "story__mainArticleItem",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
                    children: item
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 218,
                    columnNumber: 45
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                    className: "dash"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 219,
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
                        lineNumber: 221,
                        columnNumber: 75
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 221,
                      columnNumber: 49
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                      className: "energy",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_OfflineBolt__WEBPACK_IMPORTED_MODULE_10__.default, {
                        style: {
                          fontSize: "1.5rem"
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 222,
                        columnNumber: 76
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 222,
                      columnNumber: 49
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                      className: "boat",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_DirectionsBoat__WEBPACK_IMPORTED_MODULE_11__.default, {
                        style: {
                          fontSize: "1.5rem"
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 223,
                        columnNumber: 74
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 223,
                      columnNumber: 49
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                      className: "money",
                      children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_LocalAtm__WEBPACK_IMPORTED_MODULE_12__.default, {
                        style: {
                          fontSize: "1.5rem"
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 224,
                        columnNumber: 76
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 224,
                      columnNumber: 49
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 220,
                    columnNumber: 45
                  }, _this)]
                }, item, true, {
                  fileName: _jsxFileName,
                  lineNumber: 217,
                  columnNumber: 41
                }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
                  children: item[0] === "quote" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                    className: "story__articleQuote",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
                      children: item[1]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 231,
                      columnNumber: 53
                    }, _this)
                  }, item[1], false, {
                    fileName: _jsxFileName,
                    lineNumber: 230,
                    columnNumber: 49
                  }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                    className: "story__articleImg",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
                      src: item[1],
                      alt: item[2]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 235,
                      columnNumber: 53
                    }, _this)
                  }, item[1], false, {
                    fileName: _jsxFileName,
                    lineNumber: 234,
                    columnNumber: 49
                  }, _this)
                }, void 0, false)
              }, void 0, false);
            })]
          }, article.url, true, {
            fileName: _jsxFileName,
            lineNumber: 212,
            columnNumber: 25
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 132,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3RvcnkvW3N0b3J5SWRdLjBiM2NkZDJmMGEzMDBkOGFhOGVlLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUdBLElBQU1lLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQStCO0FBQUE7O0FBQUEsTUFBNUJDLFNBQTRCLFFBQTVCQSxTQUE0QjtBQUFBLE1BQWpCQyxVQUFpQixRQUFqQkEsVUFBaUI7QUFDekNDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVo7QUFDQSxNQUFNQyxNQUFNLEdBQUdqQixzREFBUyxFQUF4Qjs7QUFDQSxrQkFBMEJGLCtDQUFRLENBQUNlLFNBQUQsQ0FBbEM7QUFBQSxNQUFPSyxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFDQSxtQkFBc0NyQiwrQ0FBUSxDQUFDO0FBQzNDc0IsSUFBQUEsS0FBSyxFQUFFTixVQUFVLENBQUNNLEtBRHlCO0FBRTNDQyxJQUFBQSxNQUFNLEVBQUVQLFVBQVUsQ0FBQ08sTUFGd0I7QUFHM0NDLElBQUFBLElBQUksRUFBRVIsVUFBVSxDQUFDUSxJQUgwQjtBQUkzQ0MsSUFBQUEsS0FBSyxFQUFFVCxVQUFVLENBQUNTO0FBSnlCLEdBQUQsQ0FBOUM7QUFBQSxNQUFPQyxXQUFQO0FBQUEsTUFBb0JDLGNBQXBCOztBQVFBLE1BQUlDLGdCQUFnQixHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBY0osV0FBZCxFQUEyQkssTUFBM0IsQ0FBa0MsVUFBQ0MsSUFBRCxFQUFPQyxJQUFQO0FBQUEsV0FBZ0JELElBQUksR0FBR0MsSUFBdkI7QUFBQSxHQUFsQyxDQUF2Qjs7QUFDQSxtQkFBb0RqQywrQ0FBUSxFQUE1RDtBQUFBLE1BQU9rQyxrQkFBUDtBQUFB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QURKLHFCQUFVQSxJQUFJLENBQUMsQ0FBRCxDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOUjtBQWJSLCtCQURrQjtBQUFBLGFBQXJCLENBRkw7QUFBQSxhQUF3Q0UsT0FBTyxDQUFDRyxHQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURtQjtBQUFBLFNBQXRCLENBZEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbERKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBeUhILENBMU9EOztHQUFNMUQ7VUFFYVo7OztLQUZiWTs7QUFnUk4sK0RBQWVBLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RvcnkvW3N0b3J5SWRdLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiXHJcbmltcG9ydCBjb29raWVDdXR0ZXIgZnJvbSAnY29va2llLWN1dHRlcidcclxuaW1wb3J0IFR1cm5lZEluTm90SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvVHVybmVkSW5Ob3QnO1xyXG5pbXBvcnQgRmF2b3JpdGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9GYXZvcml0ZSc7XHJcbmltcG9ydCBPZmZsaW5lQm9sdEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL09mZmxpbmVCb2x0JztcclxuaW1wb3J0IERpcmVjdGlvbnNCb2F0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRGlyZWN0aW9uc0JvYXQnO1xyXG5pbXBvcnQgTG9jYWxBdG1JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Mb2NhbEF0bSc7XHJcbmltcG9ydCBFY29JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FY28nO1xyXG5pbXBvcnQgTGlua2VkSW5JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9MaW5rZWRJbic7XHJcbmltcG9ydCBUd2l0dGVySWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvVHdpdHRlcic7XHJcbmltcG9ydCBHaXRIdWJJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9HaXRIdWInO1xyXG5pbXBvcnQgY3JlYXRlQnJlYWtwb2ludHMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL2NyZWF0ZUJyZWFrcG9pbnRzJztcclxuXHJcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKVxyXG5jb25zdCBTdG9yeSA9ICh7IHN0b3J5QnlJZCwgcmF0aW5nYnlJZCB9KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcInN0b3J5UGFnZVwiKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgW3N0b3J5LCBzZXRTdG9yeV0gPSB1c2VTdGF0ZShzdG9yeUJ5SWQpXHJcbiAgICBjb25zdCBbc3RvcnlSYXRpbmcsIHNldFN0b3J5UmF0aW5nXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBoZWFydDogcmF0aW5nYnlJZC5oZWFydCxcclxuICAgICAgICBlbmVyZ3k6IHJhdGluZ2J5SWQuZW5lcmd5LFxyXG4gICAgICAgIHNoaXA6IHJhdGluZ2J5SWQuc2hpcCxcclxuICAgICAgICBtb25leTogcmF0aW5nYnlJZC5tb25leSxcclxuICAgIH0pXHJcblxyXG5cclxuICAgIGxldCBzdG9yeVJhdGluZ1RvdGFsID0gT2JqZWN0LnZhbHVlcyhzdG9yeVJhdGluZykucmVkdWNlKChwcmV2LCBjdXJyKSA9PiBwcmV2ICsgY3VycilcclxuICAgIGNvbnN0IFtzdG9yeVJhdGluZ0NsaWNrZWQsIHNldFN0b3J5UmF0aW5nQ2xpY2tlZF0gPSB1c2VTdGF0ZSgpXHJcblxyXG4gICAgY29uc29sZS5sb2coc3RvcnkpXHJcblxyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgICAgICBsZXQgY29va2llUmF0aW5nc0NsaWNrZWQgPSBjb29raWVDdXR0ZXIuZ2V0KChzdG9yeUJ5SWQuaWQudG9TdHJpbmcoKSkpXHJcbiAgICAgICAgaWYgKGNvb2tpZVJhdGluZ3NDbGlja2VkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibm9jb29raWVcIilcclxuICAgICAgICAgICAgY29uc29sZS5sb2coY29va2llUmF0aW5nc0NsaWNrZWQpXHJcblxyXG4gICAgICAgICAgICBsZXQgcmF0aW5nQ2xpY2tlZEludCA9IHtcclxuICAgICAgICAgICAgICAgIGhlYXJ0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGVuZXJneTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzaGlwOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG1vbmV5OiBmYWxzZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb29raWVDdXR0ZXIuc2V0KHN0b3J5QnlJZC5pZC50b1N0cmluZygpLCByYXRpbmdDbGlja2VkSW50KVxyXG4gICAgICAgICAgICBzZXRTdG9yeVJhdGluZ0NsaWNrZWQocmF0aW5nQ2xpY2tlZEludClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvb2tpZVwiKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjb29raWVSYXRpbmdzQ2xpY2tlZClcclxuICAgICAgICAgICAgc2V0U3RvcnlSYXRpbmdDbGlja2VkKGNvb2tpZVJhdGluZ3NDbGlja2VkKVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBjb25zdCBzZXRSYXRpbmdDb29raWVzID0gKCkgPT4ge1xyXG4gICAgICAgIGNvb2tpZUN1dHRlci5zZXQocm91dGVyLnF1ZXJ5LnN0b3J5SWQsIHN0b3J5UmF0aW5nQ2xpY2tlZClcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3QgdXBkYXRlUmF0aW5ncyA9IGFzeW5jIChuZXdSYXRpbmcpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInVwZGF0ZVJhdGluZ1wiKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKG5ld1JhdGluZylcclxuICAgICAgICBzZXRSYXRpbmdDb29raWVzKClcclxuICAgICAgICBjb25zdCB1cGRhdGVkUmF0aW5nID0geyAuLi5uZXdSYXRpbmcsIGlkOiBwYXJzZUludChyb3V0ZXIucXVlcnkuc3RvcnlJZCkgfVxyXG5cclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9zdG9yeXJhdGluZ3NcIiwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXBkYXRlZFJhdGluZylcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKClcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IGRlbGV0ZUFsbCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9zdG9yeXJhdGluZ3NcIiwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoaWNvblR5cGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNsaWNrXCIpXHJcbiAgICAgICAgY29uc29sZS5sb2coaWNvblR5cGUpXHJcbiAgICAgICAgc3dpdGNoIChpY29uVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiaGVhcnRcIjpcclxuICAgICAgICAgICAgICAgIGlmIChzdG9yeVJhdGluZ0NsaWNrZWQuaGVhcnQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3RvcnlSYXRpbmcoeyAuLi5zdG9yeVJhdGluZywgaGVhcnQ6IHN0b3J5UmF0aW5nLmhlYXJ0ICsgMSB9KVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTdG9yeVJhdGluZyh7IC4uLnN0b3J5UmF0aW5nLCBoZWFydDogc3RvcnlSYXRpbmcuaGVhcnQgLSAxIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZXRTdG9yeVJhdGluZ0NsaWNrZWQoeyAuLi5zdG9yeVJhdGluZ0NsaWNrZWQsIGhlYXJ0OiAhc3RvcnlSYXRpbmdDbGlja2VkLmhlYXJ0IH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJlbmVyZ3lcIjpcclxuICAgICAgICAgICAgICAgIGlmIChzdG9yeVJhdGluZ0NsaWNrZWQuZW5lcmd5ID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFN0b3J5UmF0aW5nKHsgLi4uc3RvcnlSYXRpbmcsIGVuZXJneTogc3RvcnlSYXRpbmcuZW5lcmd5ICsgMSB9KVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTdG9yeVJhdGluZyh7IC4uLnN0b3J5UmF0aW5nLCBlbmVyZ3k6IHN0b3J5UmF0aW5nLmVuZXJneSAtIDEgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNldFN0b3J5UmF0aW5nQ2xpY2tlZCh7IC4uLnN0b3J5UmF0aW5nQ2xpY2tlZCwgZW5lcmd5OiAhc3RvcnlSYXRpbmdDbGlja2VkLmVuZXJneSB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwic2hpcFwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKHN0b3J5UmF0aW5nQ2xpY2tlZC5zaGlwID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFN0b3J5UmF0aW5nKHsgLi4uc3RvcnlSYXRpbmcsIHNoaXA6IHN0b3J5UmF0aW5nLnNoaXAgKyAxIH0pXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFN0b3J5UmF0aW5nKHsgLi4uc3RvcnlSYXRpbmcsIHNoaXA6IHN0b3J5UmF0aW5nLnNoaXAgLSAxIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZXRTdG9yeVJhdGluZ0NsaWNrZWQoeyAuLi5zdG9yeVJhdGluZ0NsaWNrZWQsIHNoaXA6ICFzdG9yeVJhdGluZ0NsaWNrZWQuc2hpcCB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgaWYgKHN0b3J5UmF0aW5nQ2xpY2tlZC5tb25leSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTdG9yeVJhdGluZyh7IC4uLnN0b3J5UmF0aW5nLCBtb25leTogc3RvcnlSYXRpbmcubW9uZXkgKyAxIH0pXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFN0b3J5UmF0aW5nKHsgLi4uc3RvcnlSYXRpbmcsIG1vbmV5OiBzdG9yeVJhdGluZy5tb25leSAtIDEgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNldFN0b3J5UmF0aW5nQ2xpY2tlZCh7IC4uLnN0b3J5UmF0aW5nQ2xpY2tlZCwgbW9uZXk6ICFzdG9yeVJhdGluZ0NsaWNrZWQubW9uZXkgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICB1cGRhdGVSYXRpbmdzKHN0b3J5UmF0aW5nKVxyXG4gICAgLy8gY29uc29sZS5sb2coXCJzdG9yeVJhdGluZ1wiLCBzdG9yeVJhdGluZylcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cInN0b3J5XCI+XHJcbiAgICAgICAgICAgIHsvKiBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18gU1RPUlkgSEVBREVSIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fICAqL31cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcnlfX2hlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGgxPntzdG9yeS50aXRsZX08L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyBTVE9SWSBERVRBSUxTIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fICAqL31cclxuXHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0b3J5X19kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0b3J5X19kZXRhaWxzSW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN0b3J5X19kZXRhaWxzSW5mb0RhdGVcIj5TZXB0ZW1iZXIgMTB0aCAyMDIxPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN0b3J5X19kZXRhaWxzSW5mb1R5cGVcIj48c3Bhbj48RWNvSWNvbiAvPjwvc3Bhbj5uZXcgc3Rvcnk8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3RvcnlfX2RldGFpbHNJbmZvTWFya1wiPjxUdXJuZWRJbk5vdEljb24gLz48L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcnlfX2RldGFpbHNSYXRpbmdzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2hhY2tlcm5vb24uY29tL19uZXh0L2ltYWdlP3VybD0lMkZ0bGRyT3Blbi5wbmcmdz0yMDQ4JnE9NzVcIiBhbHQ9XCJsaW5rYmFyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICB7c3RvcnlSYXRpbmdUb3RhbCAmJiA8aDI+e3N0b3J5UmF0aW5nVG90YWx9PC9oMj59XHJcbiAgICAgICAgICAgICAgICAgICAge3N0b3J5UmF0aW5nQ2xpY2tlZCAmJiA8ZGl2IGNsYXNzTmFtZT1cInN0b3J5X19kZXRhaWxzUmF0aW5nSWNvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0b3J5UmF0aW5nQ2xpY2tlZC5oZWFydCA/IFwiaGVhcnRBY3RpdmVcIiA6IFwiaGVhcnRcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57c3RvcnlSYXRpbmcuaGVhcnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhcImhlYXJ0XCIpfSAgPjxGYXZvcml0ZUljb24gc3R5bGU9e3sgZm9udFNpemU6IFwiMS44cmVtXCIgfX0gLz48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdG9yeVJhdGluZ0NsaWNrZWQuZW5lcmd5ID8gXCJlbmVyZ3lBY3RpdmVcIiA6IFwiZW5lcmd5XCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZW5lcmd5UmF0aW5nXCI+e3N0b3J5UmF0aW5nLmVuZXJneX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKFwiZW5lcmd5XCIpfSA+PE9mZmxpbmVCb2x0SWNvbiBzdHlsZT17eyBmb250U2l6ZTogXCIxLjhyZW1cIiB9fSAvPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0b3J5UmF0aW5nQ2xpY2tlZC5zaGlwID8gXCJzaGlwQWN0aXZlXCIgOiBcInNoaXBcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzaGlwUmF0aW5nXCI+e3N0b3J5UmF0aW5nLnNoaXB9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhcInNoaXBcIil9ICA+PERpcmVjdGlvbnNCb2F0SWNvbiBzdHlsZT17eyBmb250U2l6ZTogXCIxLjhyZW1cIiB9fSAvPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0b3J5UmF0aW5nQ2xpY2tlZC5tb25leSA/IFwibW9uZXlBY3RpdmVcIiA6IFwibW9uZXlcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtb25leVJhdGluZ1wiPntzdG9yeVJhdGluZy5tb25leX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKFwibW9uZXlcIil9ID4gPExvY2FsQXRtSWNvbiBzdHlsZT17eyBmb250U2l6ZTogXCIxLjhyZW1cIiB9fSAvPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fIFNUT1JZIE1BSU4gSU1HIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fICAqL31cclxuXHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0b3J5X19tYWluSW1nQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17c3RvcnkuaW1nfSBhbHQ9e3N0b3J5LmltZ30gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fIFNUT1JZIE1BSU5fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyAgKi99XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17ZGVsZXRlQWxsfSA+ZGVsZXRlPC9idXR0b24+XHJcblxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeV9fbWFpblwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeV9fbWFpbkF1dGhvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtzdG9yeS5hdXRob3JJbWd9IGFsdD17c3RvcnkuYXV0aG9ySW1nfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcnlfX21haW5BdXRob3JJbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND57c3RvcnkuYXV0aG9yaGFuZGxlfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntzdG9yeS5hdXRob3J9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkZyZWVsYW5jZSBzb2Z0d2FyZSBkZXZlbG9wZXIgYW5kIHdyaXRlciB3aXRoIGEgYmFja2dyb3VuZCBpbiBBSSwgY3J5cHRvLCBhbmQgcXVhbnQgZmluYW5jZS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeV9fbWFpbkF1dGhvclNvY2lhbEljb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+PExpbmtlZEluSWNvbiAvPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPjxUd2l0dGVySWNvbiAvPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPjxHaXRIdWJJY29uIC8+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0b3J5X19tYWluQXJ0aWNsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtzdG9yeS5tYWluQXJ0aWNsZS5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeV9fbWFpbkFydGljbGVJdGVtXCIga2V5PXtpdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntpdGVtfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFzaFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeV9fYXJ0aWxlSWNvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImhlYXJ0XCI+PEZhdm9yaXRlSWNvbiBzdHlsZT17eyBmb250U2l6ZTogXCIxLjVyZW1cIiB9fSAvPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZW5lcmd5XCI+PE9mZmxpbmVCb2x0SWNvbiBzdHlsZT17eyBmb250U2l6ZTogXCIxLjVyZW1cIiB9fSAvPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYm9hdFwiPjxEaXJlY3Rpb25zQm9hdEljb24gc3R5bGU9e3sgZm9udFNpemU6IFwiMS41cmVtXCIgfX0gLz48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm1vbmV5XCI+IDxMb2NhbEF0bUljb24gc3R5bGU9e3sgZm9udFNpemU6IFwiMS41cmVtXCIgfX0gLz48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAge3N0b3J5LnN1YkFydGljbGVzLm1hcCgoYXJ0aWNsZSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0b3J5X19zdWJBcnRpY2xlXCIga2V5PXthcnRpY2xlLnVybH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+e2FydGljbGUudGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthcnRpY2xlLmFydGljbGVzLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmxlbmd0aCA9PT0gMSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0b3J5X19tYWluQXJ0aWNsZUl0ZW1cIiBrZXk9e2l0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntpdGVtfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhc2hcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0b3J5X19hcnRpbGVJY29uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImhlYXJ0XCI+PEZhdm9yaXRlSWNvbiBzdHlsZT17eyBmb250U2l6ZTogXCIxLjVyZW1cIiB9fSAvPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImVuZXJneVwiPjxPZmZsaW5lQm9sdEljb24gc3R5bGU9e3sgZm9udFNpemU6IFwiMS41cmVtXCIgfX0gLz48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJib2F0XCI+PERpcmVjdGlvbnNCb2F0SWNvbiBzdHlsZT17eyBmb250U2l6ZTogXCIxLjVyZW1cIiB9fSAvPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm1vbmV5XCI+IDxMb2NhbEF0bUljb24gc3R5bGU9e3sgZm9udFNpemU6IFwiMS41cmVtXCIgfX0gLz48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbVswXSA9PT0gXCJxdW90ZVwiID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l0ZW1bMV19IGNsYXNzTmFtZT1cInN0b3J5X19hcnRpY2xlUXVvdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntpdGVtWzFdfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l0ZW1bMV19IGNsYXNzTmFtZT1cInN0b3J5X19hcnRpY2xlSW1nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbVsxXX0gYWx0PXtpdGVtWzJdfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICA8L2FydGljbGU+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcnlJZCA9IHBhcmFtcy5zdG9yeUlkO1xyXG4gICAgY29uc3QgY3JlYXRlUmF0aW5nSW50ID0ge1xyXG4gICAgICAgIGlkOiBwYXJzZUludChzdG9yeUlkKSxcclxuICAgICAgICBoZWFydDogTWF0aC5hYnMoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDcgLSAwICsgMSkgKyAwKSksXHJcbiAgICAgICAgZW5lcmd5OiBNYXRoLmFicyhNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoNyAtIDAgKyAxKSArIDApKSxcclxuICAgICAgICBzaGlwOiBNYXRoLmFicyhNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoNyAtIDAgKyAxKSArIDApKSxcclxuICAgICAgICBtb25leTogTWF0aC5hYnMoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDcgLSAwICsgMSkgKyAwKSksXHJcbiAgICB9XHJcbiAgICBsZXQgcmF0aW5nYnlJZCA9IGF3YWl0IHByaXNtYS5yYXRpbmdzLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICAgIGlkOiBwYXJzZUludChwYXJhbXMuc3RvcnlJZClcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGlmICghcmF0aW5nYnlJZCkge1xyXG4gICAgICAgIHJhdGluZ2J5SWQgPSBjcmVhdGVSYXRpbmdJbnQ7XHJcbiAgICAgICAgY29uc3QgY3JlYXRlZFJhdGluZyA9IGF3YWl0IHByaXNtYS5yYXRpbmdzLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGRhdGE6IGNyZWF0ZVJhdGluZ0ludCxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9oYWNrZXItc3Rvcmllcy8ke3N0b3J5SWR9YCk7XHJcbiAgICBjb25zdCBzdG9yeUJ5SWQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBzdG9yeUJ5SWQsXHJcbiAgICAgICAgICAgIHJhdGluZ2J5SWQsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3Rvcnk7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJjb29raWVDdXR0ZXIiLCJUdXJuZWRJbk5vdEljb24iLCJGYXZvcml0ZUljb24iLCJPZmZsaW5lQm9sdEljb24iLCJEaXJlY3Rpb25zQm9hdEljb24iLCJMb2NhbEF0bUljb24iLCJFY29JY29uIiwiTGlua2VkSW5JY29uIiwiVHdpdHRlckljb24iLCJHaXRIdWJJY29uIiwiY3JlYXRlQnJlYWtwb2ludHMiLCJTdG9yeSIsInN0b3J5QnlJZCIsInJhdGluZ2J5SWQiLCJjb25zb2xlIiwibG9nIiwicm91dGVyIiwic3RvcnkiLCJzZXRTdG9yeSIsImhlYXJ0IiwiZW5lcmd5Iiwic2hpcCIsIm1vbmV5Iiwic3RvcnlSYXRpbmciLCJzZXRTdG9yeVJhdGluZyIsInN0b3J5UmF0aW5nVG90YWwiLCJPYmplY3QiLCJ2YWx1ZXMiLCJyZWR1Y2UiLCJwcmV2IiwiY3VyciIsInN0b3J5UmF0aW5nQ2xpY2tlZCIsInNldFN0b3J5UmF0aW5nQ2xpY2tlZCIsImNvb2tpZVJhdGluZ3NDbGlja2VkIiwiZ2V0IiwiaWQiLCJ0b1N0cmluZyIsInJhdGluZ0NsaWNrZWRJbnQiLCJzZXQiLCJzZXRSYXRpbmdDb29raWVzIiwicXVlcnkiLCJzdG9yeUlkIiwidXBkYXRlUmF0aW5ncyIsIm5ld1JhdGluZyIsInVwZGF0ZWRSYXRpbmciLCJwYXJzZUludCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXNwb25zZSIsImpzb24iLCJkZWxldGVBbGwiLCJoYW5kbGVDbGljayIsImljb25UeXBlIiwidGl0bGUiLCJmb250U2l6ZSIsImltZyIsImF1dGhvckltZyIsImF1dGhvcmhhbmRsZSIsImF1dGhvciIsIm1haW5BcnRpY2xlIiwibWFwIiwiaXRlbSIsInN1YkFydGljbGVzIiwiYXJ0aWNsZSIsImFydGljbGVzIiwibGVuZ3RoIiwidXJsIl0sInNvdXJjZVJvb3QiOiIifQ==