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

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
    id: "empty"
  }),
      storyRatingClicked = _useState3[0],
      setStoryRatingClicked = _useState3[1];

  console.log(story);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    var cookieRatingsClicked = cookie_cutter__WEBPACK_IMPORTED_MODULE_5___default().get("story".concat(storyById.id));
    cookieRatingsClicked = JSON.parse(cookieRatingsClicked);

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
        if (storyRatingClicked.id !== "empty") return cookie_cutter__WEBPACK_IMPORTED_MODULE_5___default().set("story".concat(storyById.id), JSON.stringify(storyRatingClicked));
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
        if (storyRatingClicked.id !== "empty") return cookie_cutter__WEBPACK_IMPORTED_MODULE_5___default().set("story".concat(storyById.id), JSON.stringify(storyRatingClicked));
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
        if (storyRatingClicked.id !== "empty") return cookie_cutter__WEBPACK_IMPORTED_MODULE_5___default().set("story".concat(storyById.id), JSON.stringify(storyRatingClicked));
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
        if (storyRatingClicked.id !== "empty") return cookie_cutter__WEBPACK_IMPORTED_MODULE_5___default().set("story".concat(storyById.id), JSON.stringify(storyRatingClicked));
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
        lineNumber: 141,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 140,
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
          lineNumber: 148,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
          className: "story__detailsInfoType",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_Eco__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 65
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 59
          }, _this), "new story"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
          className: "story__detailsInfoMark",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_TurnedInNot__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 59
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "story__detailsRatings",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
          src: "https://hackernoon.com/_next/image?url=%2FtldrOpen.png&w=2048&q=75",
          alt: "linkbar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 21
        }, _this), storyRatingTotal && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h2", {
          children: storyRatingTotal
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 42
        }, _this), storyRatingClicked.id !== "empty" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "story__detailsRatingIcons",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: storyRatingClicked.heart ? "heartActive" : "heart",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
              children: storyRating.heart
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 157,
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
            className: storyRatingClicked.energy ? "energyActive" : "energy",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
              className: "energyRating",
              children: storyRating.energy
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 161,
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
                lineNumber: 162,
                columnNumber: 76
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
            className: storyRatingClicked.ship ? "shipActive" : "ship",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
              className: "shipRating",
              children: storyRating.ship
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 165,
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
                lineNumber: 166,
                columnNumber: 75
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 166,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: storyRatingClicked.money ? "moneyActive" : "money",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
              className: "moneyRating",
              children: storyRating.money
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 169,
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
                lineNumber: 170,
                columnNumber: 76
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 170,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 59
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: "story__mainImgContainer",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
        src: story.img,
        alt: story.img
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
      onClick: deleteAll,
      children: "delete"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 184,
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
          lineNumber: 189,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "story__mainAuthorInfo",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h4", {
            children: story.authorhandle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 191,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
            children: story.author
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 192,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
          children: "Freelance software developer and writer with a background in AI, crypto, and quant finance."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "story__mainAuthorSocialIcons",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_13__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 196,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 196,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_14__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 197,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_15__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 198,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 198,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 188,
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
              lineNumber: 205,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: "dash"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 206,
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
                  lineNumber: 208,
                  columnNumber: 59
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 208,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                className: "energy",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_OfflineBolt__WEBPACK_IMPORTED_MODULE_10__.default, {
                  style: {
                    fontSize: "1.5rem"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 209,
                  columnNumber: 60
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 209,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                className: "boat",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_DirectionsBoat__WEBPACK_IMPORTED_MODULE_11__.default, {
                  style: {
                    fontSize: "1.5rem"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 210,
                  columnNumber: 58
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 210,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                className: "money",
                children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_LocalAtm__WEBPACK_IMPORTED_MODULE_12__.default, {
                  style: {
                    fontSize: "1.5rem"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 211,
                  columnNumber: 60
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 211,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 207,
              columnNumber: 29
            }, _this)]
          }, item, true, {
            fileName: _jsxFileName,
            lineNumber: 204,
            columnNumber: 25
          }, _this);
        }), story.subArticles.map(function (article) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "story__subArticle",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h2", {
              children: article.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 218,
              columnNumber: 29
            }, _this), article.articles.map(function (item) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
                children: item.length === 1 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                  className: "story__mainArticleItem",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
                    children: item
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 223,
                    columnNumber: 45
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                    className: "dash"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 224,
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
                        lineNumber: 226,
                        columnNumber: 75
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 226,
                      columnNumber: 49
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                      className: "energy",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_OfflineBolt__WEBPACK_IMPORTED_MODULE_10__.default, {
                        style: {
                          fontSize: "1.5rem"
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 227,
                        columnNumber: 76
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 227,
                      columnNumber: 49
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                      className: "boat",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_DirectionsBoat__WEBPACK_IMPORTED_MODULE_11__.default, {
                        style: {
                          fontSize: "1.5rem"
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 228,
                        columnNumber: 74
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 228,
                      columnNumber: 49
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                      className: "money",
                      children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_LocalAtm__WEBPACK_IMPORTED_MODULE_12__.default, {
                        style: {
                          fontSize: "1.5rem"
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 229,
                        columnNumber: 76
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 229,
                      columnNumber: 49
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 225,
                    columnNumber: 45
                  }, _this)]
                }, item, true, {
                  fileName: _jsxFileName,
                  lineNumber: 222,
                  columnNumber: 41
                }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
                  children: item[0] === "quote" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                    className: "story__articleQuote",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
                      children: item[1]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 236,
                      columnNumber: 53
                    }, _this)
                  }, item[1], false, {
                    fileName: _jsxFileName,
                    lineNumber: 235,
                    columnNumber: 49
                  }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                    className: "story__articleImg",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
                      src: item[1],
                      alt: item[2]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 240,
                      columnNumber: 53
                    }, _this)
                  }, item[1], false, {
                    fileName: _jsxFileName,
                    lineNumber: 239,
                    columnNumber: 49
                  }, _this)
                }, void 0, false)
              }, void 0, false);
            })]
          }, article.url, true, {
            fileName: _jsxFileName,
            lineNumber: 217,
            columnNumber: 25
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 137,
    columnNumber: 9
  }, _this);
};

_s(Story, "Io0dAAgVblXB+AqsM/p9+0EYU3o=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3RvcnkvW3N0b3J5SWRdLmEwMzNjMjk2MmMyOTNlMGQwZjIyLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUdBLElBQU1lLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQStCO0FBQUE7O0FBQUEsTUFBNUJDLFNBQTRCLFFBQTVCQSxTQUE0QjtBQUFBLE1BQWpCQyxVQUFpQixRQUFqQkEsVUFBaUI7QUFDekNDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVo7QUFDQSxNQUFNQyxNQUFNLEdBQUdqQixzREFBUyxFQUF4Qjs7QUFDQSxrQkFBMEJGLCtDQUFRLENBQUNlLFNBQUQsQ0FBbEM7QUFBQSxNQUFPSyxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFDQSxtQkFBc0NyQiwrQ0FBUSxDQUFDO0FBQzNDc0IsSUFBQUEsS0FBSyxFQUFFTixVQUFVLENBQUNNLEtBRHlCO0FBRTNDQyxJQUFBQSxNQUFNLEVBQUVQLFVBQVUsQ0FBQ08sTUFGd0I7QUFHM0NDLElBQUFBLElBQUksRUFBRVIsVUFBVSxDQUFDUSxJQUgwQjtBQUkzQ0MsSUFBQUEsS0FBSyxFQUFFVCxVQUFVLENBQUNTO0FBSnlCLEdBQUQsQ0FBOUM7QUFBQSxNQUFPQyxXQUFQO0FBQUEsTUFBb0JDLGNBQXBCOztBQVFBLE1BQUlDLGdCQUFnQixHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBY0osV0FBZCxFQUEyQkssTUFBM0IsQ0FBa0MsVUFBQ0MsSUFBRCxFQUFPQyxJQUFQO0FBQUEsV0FBZ0JELElBQUksR0FBR0MsSUFBdkI7QUFBQSxHQUFsQyxDQUF2Qjs7QUFDQSxtQkFBb0RqQywrQ0FBUSxDQUFDO0FBQUNrQyxJQUFBQSxFQUFFLEVBQUU7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QXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBSEo7QUFBQSxtQkFBNkNPLElBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREgsZ0JBWUc7QUFBQSw0QkFDS0EsSUFBSSxDQUFDLENBQUQsQ0FBSixLQUFZLE9BQVosZ0JBQ0c7QUFBbUIsNkJBQVMsRUFBQyxxQkFBN0I7QUFBQSwyQ0FDSTtBQUFBLGdDQUFJQSxJQUFJLENBQUMsQ0FBRDtBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixxQkFBVUEsSUFBSSxDQUFDLENBQUQsQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURILGdCQUtHO0FBQW1CLDZCQUFTLEVBQUMsbUJBQTdCO0FBQUEsMkNBQ0k7QUFBSyx5QkFBRyxFQUFFQSxJQUFJLENBQUMsQ0FBRCxDQUFkO0FBQW1CLHlCQUFHLEVBQUVBLElBQUksQ0FBQyxDQUFEO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixxQkFBVUEsSUFBSSxDQUFDLENBQUQsQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTlI7QUFiUiwrQkFEa0I7QUFBQSxhQUFyQixDQUZMO0FBQUEsYUFBd0NFLE9BQU8sQ0FBQ0csR0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEbUI7QUFBQSxTQUF0QixDQWRMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWxESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXlISCxDQS9PRDs7R0FBTXpEO1VBRWFaOzs7S0FGYlk7O0FBcVJOLCtEQUFlQSxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3N0b3J5L1tzdG9yeUlkXS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIlxyXG5pbXBvcnQgY29va2llQ3V0dGVyIGZyb20gJ2Nvb2tpZS1jdXR0ZXInXHJcbmltcG9ydCBUdXJuZWRJbk5vdEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1R1cm5lZEluTm90JztcclxuaW1wb3J0IEZhdm9yaXRlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRmF2b3JpdGUnO1xyXG5pbXBvcnQgT2ZmbGluZUJvbHRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9PZmZsaW5lQm9sdCc7XHJcbmltcG9ydCBEaXJlY3Rpb25zQm9hdEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0RpcmVjdGlvbnNCb2F0JztcclxuaW1wb3J0IExvY2FsQXRtSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTG9jYWxBdG0nO1xyXG5pbXBvcnQgRWNvSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRWNvJztcclxuaW1wb3J0IExpbmtlZEluSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTGlua2VkSW4nO1xyXG5pbXBvcnQgVHdpdHRlckljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1R3aXR0ZXInO1xyXG5pbXBvcnQgR2l0SHViSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvR2l0SHViJztcclxuaW1wb3J0IGNyZWF0ZUJyZWFrcG9pbnRzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy9jcmVhdGVCcmVha3BvaW50cyc7XHJcblxyXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcclxuY29uc3QgU3RvcnkgPSAoeyBzdG9yeUJ5SWQsIHJhdGluZ2J5SWQgfSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJzdG9yeVBhZ2VcIik7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IFtzdG9yeSwgc2V0U3RvcnldID0gdXNlU3RhdGUoc3RvcnlCeUlkKVxyXG4gICAgY29uc3QgW3N0b3J5UmF0aW5nLCBzZXRTdG9yeVJhdGluZ10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgaGVhcnQ6IHJhdGluZ2J5SWQuaGVhcnQsXHJcbiAgICAgICAgZW5lcmd5OiByYXRpbmdieUlkLmVuZXJneSxcclxuICAgICAgICBzaGlwOiByYXRpbmdieUlkLnNoaXAsXHJcbiAgICAgICAgbW9uZXk6IHJhdGluZ2J5SWQubW9uZXksXHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICBsZXQgc3RvcnlSYXRpbmdUb3RhbCA9IE9iamVjdC52YWx1ZXMoc3RvcnlSYXRpbmcpLnJlZHVjZSgocHJldiwgY3VycikgPT4gcHJldiArIGN1cnIpXHJcbiAgICBjb25zdCBbc3RvcnlSYXRpbmdDbGlja2VkLCBzZXRTdG9yeVJhdGluZ0NsaWNrZWRdID0gdXNlU3RhdGUoe2lkOiBcImVtcHR5XCJ9KVxyXG5cclxuICAgIGNvbnNvbGUubG9nKHN0b3J5KVxyXG5cclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAgICAgbGV0IGNvb2tpZVJhdGluZ3NDbGlja2VkID0gY29va2llQ3V0dGVyLmdldChgc3Rvcnkke3N0b3J5QnlJZC5pZH1gKVxyXG4gICAgICAgIGNvb2tpZVJhdGluZ3NDbGlja2VkID0gSlNPTi5wYXJzZShjb29raWVSYXRpbmdzQ2xpY2tlZClcclxuICAgICAgICBpZiAoIWNvb2tpZVJhdGluZ3NDbGlja2VkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibm9jb29raWVcIilcclxuICAgICAgICAgICAgbGV0IHJhdGluZ0NsaWNrZWRJbnQgPSB7XHJcbiAgICAgICAgICAgICAgICBoZWFydDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBlbmVyZ3k6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc2hpcDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBtb25leTogZmFsc2UsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29va2llQ3V0dGVyLnNldChgc3Rvcnkke3N0b3J5QnlJZC5pZH1gLCBKU09OLnN0cmluZ2lmeShyYXRpbmdDbGlja2VkSW50KSlcclxuICAgICAgICAgICAgc2V0U3RvcnlSYXRpbmdDbGlja2VkKHJhdGluZ0NsaWNrZWRJbnQpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb29raWVcIilcclxuICAgICAgICAgICAgY29uc29sZS5sb2coY29va2llUmF0aW5nc0NsaWNrZWQpXHJcbiAgICAgICAgICAgIHNldFN0b3J5UmF0aW5nQ2xpY2tlZChjb29raWVSYXRpbmdzQ2xpY2tlZClcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG5cclxuXHJcbiAgICBjb25zdCB1cGRhdGVSYXRpbmdzID0gYXN5bmMgKG5ld1JhdGluZykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidXBkYXRlUmF0aW5nXCIpXHJcbiAgICAgICAgY29uc29sZS5sb2cobmV3UmF0aW5nKVxyXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRSYXRpbmcgPSB7IC4uLm5ld1JhdGluZywgaWQ6IHBhcnNlSW50KHJvdXRlci5xdWVyeS5zdG9yeUlkKSB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL3N0b3J5cmF0aW5nc1wiLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQQVRDSFwiLFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh1cGRhdGVkUmF0aW5nKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3QgZGVsZXRlQWxsID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL3N0b3J5cmF0aW5nc1wiLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChpY29uVHlwZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2xpY2tcIilcclxuICAgICAgICBjb25zb2xlLmxvZyhpY29uVHlwZSlcclxuXHJcbiAgICAgICAgc3dpdGNoIChpY29uVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiaGVhcnRcIjpcclxuICAgICAgICAgICAgICAgIGlmIChzdG9yeVJhdGluZ0NsaWNrZWQuaGVhcnQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3RvcnlSYXRpbmcoeyAuLi5zdG9yeVJhdGluZywgaGVhcnQ6IHN0b3J5UmF0aW5nLmhlYXJ0ICsgMSB9KVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTdG9yeVJhdGluZyh7IC4uLnN0b3J5UmF0aW5nLCBoZWFydDogc3RvcnlSYXRpbmcuaGVhcnQgLSAxIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZXRTdG9yeVJhdGluZ0NsaWNrZWQoeyAuLi5zdG9yeVJhdGluZ0NsaWNrZWQsIGhlYXJ0OiAhc3RvcnlSYXRpbmdDbGlja2VkLmhlYXJ0IH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0b3J5UmF0aW5nQ2xpY2tlZC5pZCAhPT0gXCJlbXB0eVwiKSByZXR1cm4gIGNvb2tpZUN1dHRlci5zZXQoYHN0b3J5JHtzdG9yeUJ5SWQuaWR9YCwgSlNPTi5zdHJpbmdpZnkoc3RvcnlSYXRpbmdDbGlja2VkKSlcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImVuZXJneVwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKHN0b3J5UmF0aW5nQ2xpY2tlZC5lbmVyZ3kgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3RvcnlSYXRpbmcoeyAuLi5zdG9yeVJhdGluZywgZW5lcmd5OiBzdG9yeVJhdGluZy5lbmVyZ3kgKyAxIH0pXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFN0b3J5UmF0aW5nKHsgLi4uc3RvcnlSYXRpbmcsIGVuZXJneTogc3RvcnlSYXRpbmcuZW5lcmd5IC0gMSB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2V0U3RvcnlSYXRpbmdDbGlja2VkKHsgLi4uc3RvcnlSYXRpbmdDbGlja2VkLCBlbmVyZ3k6ICFzdG9yeVJhdGluZ0NsaWNrZWQuZW5lcmd5IH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0b3J5UmF0aW5nQ2xpY2tlZC5pZCAhPT0gXCJlbXB0eVwiKSByZXR1cm4gY29va2llQ3V0dGVyLnNldChgc3Rvcnkke3N0b3J5QnlJZC5pZH1gLCBKU09OLnN0cmluZ2lmeShzdG9yeVJhdGluZ0NsaWNrZWQpKVxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwic2hpcFwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKHN0b3J5UmF0aW5nQ2xpY2tlZC5zaGlwID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFN0b3J5UmF0aW5nKHsgLi4uc3RvcnlSYXRpbmcsIHNoaXA6IHN0b3J5UmF0aW5nLnNoaXAgKyAxIH0pXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFN0b3J5UmF0aW5nKHsgLi4uc3RvcnlSYXRpbmcsIHNoaXA6IHN0b3J5UmF0aW5nLnNoaXAgLSAxIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0U3RvcnlSYXRpbmdDbGlja2VkKHsgLi4uc3RvcnlSYXRpbmdDbGlja2VkLCBzaGlwOiAhc3RvcnlSYXRpbmdDbGlja2VkLnNoaXAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RvcnlSYXRpbmdDbGlja2VkLmlkICE9PSBcImVtcHR5XCIpIHJldHVybiBjb29raWVDdXR0ZXIuc2V0KGBzdG9yeSR7c3RvcnlCeUlkLmlkfWAsIEpTT04uc3RyaW5naWZ5KHN0b3J5UmF0aW5nQ2xpY2tlZCkpXHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RvcnlSYXRpbmdDbGlja2VkLm1vbmV5ID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFN0b3J5UmF0aW5nKHsgLi4uc3RvcnlSYXRpbmcsIG1vbmV5OiBzdG9yeVJhdGluZy5tb25leSArIDEgfSlcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3RvcnlSYXRpbmcoeyAuLi5zdG9yeVJhdGluZywgbW9uZXk6IHN0b3J5UmF0aW5nLm1vbmV5IC0gMSB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2V0U3RvcnlSYXRpbmdDbGlja2VkKHsgLi4uc3RvcnlSYXRpbmdDbGlja2VkLCBtb25leTogIXN0b3J5UmF0aW5nQ2xpY2tlZC5tb25leSB9KTtcclxuICAgICAgICAgICAgICAgIGlmIChzdG9yeVJhdGluZ0NsaWNrZWQuaWQgIT09IFwiZW1wdHlcIikgcmV0dXJuIGNvb2tpZUN1dHRlci5zZXQoYHN0b3J5JHtzdG9yeUJ5SWQuaWR9YCwgSlNPTi5zdHJpbmdpZnkoc3RvcnlSYXRpbmdDbGlja2VkKSlcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICB1cGRhdGVSYXRpbmdzKHN0b3J5UmF0aW5nKVxyXG4gICAgLy8gY29uc29sZS5sb2coXCJzdG9yeVJhdGluZ1wiLCBzdG9yeVJhdGluZylcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cInN0b3J5XCI+XHJcbiAgICAgICAgICAgIHsvKiBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18gU1RPUlkgSEVBREVSIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fICAqL31cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcnlfX2hlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGgxPntzdG9yeS50aXRsZX08L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyBTVE9SWSBERVRBSUxTIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fICAqL31cclxuXHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0b3J5X19kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0b3J5X19kZXRhaWxzSW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN0b3J5X19kZXRhaWxzSW5mb0RhdGVcIj5TZXB0ZW1iZXIgMTB0aCAyMDIxPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN0b3J5X19kZXRhaWxzSW5mb1R5cGVcIj48c3Bhbj48RWNvSWNvbiAvPjwvc3Bhbj5uZXcgc3Rvcnk8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3RvcnlfX2RldGFpbHNJbmZvTWFya1wiPjxUdXJuZWRJbk5vdEljb24gLz48L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcnlfX2RldGFpbHNSYXRpbmdzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2hhY2tlcm5vb24uY29tL19uZXh0L2ltYWdlP3VybD0lMkZ0bGRyT3Blbi5wbmcmdz0yMDQ4JnE9NzVcIiBhbHQ9XCJsaW5rYmFyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICB7c3RvcnlSYXRpbmdUb3RhbCAmJiA8aDI+e3N0b3J5UmF0aW5nVG90YWx9PC9oMj59XHJcbiAgICAgICAgICAgICAgICAgICAge3N0b3J5UmF0aW5nQ2xpY2tlZC5pZCAhPT0gXCJlbXB0eVwiICYmIDxkaXYgY2xhc3NOYW1lPVwic3RvcnlfX2RldGFpbHNSYXRpbmdJY29uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3RvcnlSYXRpbmdDbGlja2VkLmhlYXJ0ID8gXCJoZWFydEFjdGl2ZVwiIDogXCJoZWFydFwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntzdG9yeVJhdGluZy5oZWFydH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKFwiaGVhcnRcIil9ICA+PEZhdm9yaXRlSWNvbiBzdHlsZT17eyBmb250U2l6ZTogXCIxLjhyZW1cIiB9fSAvPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0b3J5UmF0aW5nQ2xpY2tlZC5lbmVyZ3kgPyBcImVuZXJneUFjdGl2ZVwiIDogXCJlbmVyZ3lcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlbmVyZ3lSYXRpbmdcIj57c3RvcnlSYXRpbmcuZW5lcmd5fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soXCJlbmVyZ3lcIil9ID48T2ZmbGluZUJvbHRJY29uIHN0eWxlPXt7IGZvbnRTaXplOiBcIjEuOHJlbVwiIH19IC8+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3RvcnlSYXRpbmdDbGlja2VkLnNoaXAgPyBcInNoaXBBY3RpdmVcIiA6IFwic2hpcFwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNoaXBSYXRpbmdcIj57c3RvcnlSYXRpbmcuc2hpcH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKFwic2hpcFwiKX0gID48RGlyZWN0aW9uc0JvYXRJY29uIHN0eWxlPXt7IGZvbnRTaXplOiBcIjEuOHJlbVwiIH19IC8+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3RvcnlSYXRpbmdDbGlja2VkLm1vbmV5ID8gXCJtb25leUFjdGl2ZVwiIDogXCJtb25leVwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1vbmV5UmF0aW5nXCI+e3N0b3J5UmF0aW5nLm1vbmV5fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soXCJtb25leVwiKX0gPiA8TG9jYWxBdG1JY29uIHN0eWxlPXt7IGZvbnRTaXplOiBcIjEuOHJlbVwiIH19IC8+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKiBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18gU1RPUlkgTUFJTiBJTUcgX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18gICovfVxyXG5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcnlfX21haW5JbWdDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtzdG9yeS5pbWd9IGFsdD17c3RvcnkuaW1nfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18gU1RPUlkgTUFJTl9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fICAqL31cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtkZWxldGVBbGx9ID5kZWxldGU8L2J1dHRvbj5cclxuXHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0b3J5X19tYWluXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0b3J5X19tYWluQXV0aG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3N0b3J5LmF1dGhvckltZ30gYWx0PXtzdG9yeS5hdXRob3JJbWd9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeV9fbWFpbkF1dGhvckluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PntzdG9yeS5hdXRob3JoYW5kbGV9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3N0b3J5LmF1dGhvcn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+RnJlZWxhbmNlIHNvZnR3YXJlIGRldmVsb3BlciBhbmQgd3JpdGVyIHdpdGggYSBiYWNrZ3JvdW5kIGluIEFJLCBjcnlwdG8sIGFuZCBxdWFudCBmaW5hbmNlLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0b3J5X19tYWluQXV0aG9yU29jaWFsSWNvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj48TGlua2VkSW5JY29uIC8+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+PFR3aXR0ZXJJY29uIC8+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+PEdpdEh1Ykljb24gLz48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcnlfX21haW5BcnRpY2xlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3N0b3J5Lm1haW5BcnRpY2xlLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0b3J5X19tYWluQXJ0aWNsZUl0ZW1cIiBrZXk9e2l0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2l0ZW19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXNoXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0b3J5X19hcnRpbGVJY29uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiaGVhcnRcIj48RmF2b3JpdGVJY29uIHN0eWxlPXt7IGZvbnRTaXplOiBcIjEuNXJlbVwiIH19IC8+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJlbmVyZ3lcIj48T2ZmbGluZUJvbHRJY29uIHN0eWxlPXt7IGZvbnRTaXplOiBcIjEuNXJlbVwiIH19IC8+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJib2F0XCI+PERpcmVjdGlvbnNCb2F0SWNvbiBzdHlsZT17eyBmb250U2l6ZTogXCIxLjVyZW1cIiB9fSAvPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibW9uZXlcIj4gPExvY2FsQXRtSWNvbiBzdHlsZT17eyBmb250U2l6ZTogXCIxLjVyZW1cIiB9fSAvPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICB7c3Rvcnkuc3ViQXJ0aWNsZXMubWFwKChhcnRpY2xlKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcnlfX3N1YkFydGljbGVcIiBrZXk9e2FydGljbGUudXJsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57YXJ0aWNsZS50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2FydGljbGUuYXJ0aWNsZXMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubGVuZ3RoID09PSAxID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcnlfX21haW5BcnRpY2xlSXRlbVwiIGtleT17aXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2l0ZW19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFzaFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcnlfX2FydGlsZUljb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiaGVhcnRcIj48RmF2b3JpdGVJY29uIHN0eWxlPXt7IGZvbnRTaXplOiBcIjEuNXJlbVwiIH19IC8+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZW5lcmd5XCI+PE9mZmxpbmVCb2x0SWNvbiBzdHlsZT17eyBmb250U2l6ZTogXCIxLjVyZW1cIiB9fSAvPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJvYXRcIj48RGlyZWN0aW9uc0JvYXRJY29uIHN0eWxlPXt7IGZvbnRTaXplOiBcIjEuNXJlbVwiIH19IC8+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibW9uZXlcIj4gPExvY2FsQXRtSWNvbiBzdHlsZT17eyBmb250U2l6ZTogXCIxLjVyZW1cIiB9fSAvPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtWzBdID09PSBcInF1b3RlXCIgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aXRlbVsxXX0gY2xhc3NOYW1lPVwic3RvcnlfX2FydGljbGVRdW90ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2l0ZW1bMV19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aXRlbVsxXX0gY2xhc3NOYW1lPVwic3RvcnlfX2FydGljbGVJbWdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtWzFdfSBhbHQ9e2l0ZW1bMl19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgIDwvYXJ0aWNsZT5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XHJcbiAgICBjb25zdCBzdG9yeUlkID0gcGFyYW1zLnN0b3J5SWQ7XHJcbiAgICBjb25zdCBjcmVhdGVSYXRpbmdJbnQgPSB7XHJcbiAgICAgICAgaWQ6IHBhcnNlSW50KHN0b3J5SWQpLFxyXG4gICAgICAgIGhlYXJ0OiBNYXRoLmFicyhNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoNyAtIDAgKyAxKSArIDApKSxcclxuICAgICAgICBlbmVyZ3k6IE1hdGguYWJzKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg3IC0gMCArIDEpICsgMCkpLFxyXG4gICAgICAgIHNoaXA6IE1hdGguYWJzKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg3IC0gMCArIDEpICsgMCkpLFxyXG4gICAgICAgIG1vbmV5OiBNYXRoLmFicyhNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoNyAtIDAgKyAxKSArIDApKSxcclxuICAgIH1cclxuICAgIGxldCByYXRpbmdieUlkID0gYXdhaXQgcHJpc21hLnJhdGluZ3MuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgICAgaWQ6IHBhcnNlSW50KHBhcmFtcy5zdG9yeUlkKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgaWYgKCFyYXRpbmdieUlkKSB7XHJcbiAgICAgICAgcmF0aW5nYnlJZCA9IGNyZWF0ZVJhdGluZ0ludDtcclxuICAgICAgICBjb25zdCBjcmVhdGVkUmF0aW5nID0gYXdhaXQgcHJpc21hLnJhdGluZ3MuY3JlYXRlKHtcclxuICAgICAgICAgICAgZGF0YTogY3JlYXRlUmF0aW5nSW50LFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2hhY2tlci1zdG9yaWVzLyR7c3RvcnlJZH1gKTtcclxuICAgIGNvbnN0IHN0b3J5QnlJZCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIHN0b3J5QnlJZCxcclxuICAgICAgICAgICAgcmF0aW5nYnlJZCxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9yeTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsImNvb2tpZUN1dHRlciIsIlR1cm5lZEluTm90SWNvbiIsIkZhdm9yaXRlSWNvbiIsIk9mZmxpbmVCb2x0SWNvbiIsIkRpcmVjdGlvbnNCb2F0SWNvbiIsIkxvY2FsQXRtSWNvbiIsIkVjb0ljb24iLCJMaW5rZWRJbkljb24iLCJUd2l0dGVySWNvbiIsIkdpdEh1Ykljb24iLCJjcmVhdGVCcmVha3BvaW50cyIsIlN0b3J5Iiwic3RvcnlCeUlkIiwicmF0aW5nYnlJZCIsImNvbnNvbGUiLCJsb2ciLCJyb3V0ZXIiLCJzdG9yeSIsInNldFN0b3J5IiwiaGVhcnQiLCJlbmVyZ3kiLCJzaGlwIiwibW9uZXkiLCJzdG9yeVJhdGluZyIsInNldFN0b3J5UmF0aW5nIiwic3RvcnlSYXRpbmdUb3RhbCIsIk9iamVjdCIsInZhbHVlcyIsInJlZHVjZSIsInByZXYiLCJjdXJyIiwiaWQiLCJzdG9yeVJhdGluZ0NsaWNrZWQiLCJzZXRTdG9yeVJhdGluZ0NsaWNrZWQiLCJjb29raWVSYXRpbmdzQ2xpY2tlZCIsImdldCIsIkpTT04iLCJwYXJzZSIsInJhdGluZ0NsaWNrZWRJbnQiLCJzZXQiLCJzdHJpbmdpZnkiLCJ1cGRhdGVSYXRpbmdzIiwibmV3UmF0aW5nIiwidXBkYXRlZFJhdGluZyIsInBhcnNlSW50IiwicXVlcnkiLCJzdG9yeUlkIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwicmVzcG9uc2UiLCJqc29uIiwiZGVsZXRlQWxsIiwiaGFuZGxlQ2xpY2siLCJpY29uVHlwZSIsInRpdGxlIiwiZm9udFNpemUiLCJpbWciLCJhdXRob3JJbWciLCJhdXRob3JoYW5kbGUiLCJhdXRob3IiLCJtYWluQXJ0aWNsZSIsIm1hcCIsIml0ZW0iLCJzdWJBcnRpY2xlcyIsImFydGljbGUiLCJhcnRpY2xlcyIsImxlbmd0aCIsInVybCJdLCJzb3VyY2VSb290IjoiIn0=