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

  if (Object.keys(storyRatingClicked).length > 0) cookie_cutter__WEBPACK_IMPORTED_MODULE_5___default().set("story".concat(storyById.id), JSON.stringify(storyRatingClicked));
  updateRatings(storyRating); // console.log("storyRating", storyRating)

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("article", {
    className: "story",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: "story__header",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h1", {
        children: story.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 148,
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
          lineNumber: 156,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
          className: "story__detailsInfoType",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_Eco__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 65
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 59
          }, _this), "new story"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
          className: "story__detailsInfoMark",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_TurnedInNot__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 59
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "story__detailsRatings",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
          src: "https://hackernoon.com/_next/image?url=%2FtldrOpen.png&w=2048&q=75",
          alt: "linkbar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 21
        }, _this), storyRatingTotal && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h2", {
          children: storyRatingTotal
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 42
        }, _this), storyRatingClicked && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "story__detailsRatingIcons",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: storyRatingClicked.heart ? "heartActive" : "heart",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
              children: storyRating.heart
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 165,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
              onClick: function onClick() {
                handleClick("heart");
              },
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_9__.default, {
                style: {
                  fontSize: "1.8rem"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 166,
                columnNumber: 78
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
            className: storyRatingClicked.energy ? "energyActive" : "energy",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
              className: "energyRating",
              children: storyRating.energy
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 169,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
              onClick: function onClick() {
                handleClick("energy");
              },
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_OfflineBolt__WEBPACK_IMPORTED_MODULE_10__.default, {
                style: {
                  fontSize: "1.8rem"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 170,
                columnNumber: 78
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 170,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: storyRatingClicked.ship ? "shipActive" : "ship",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
              className: "shipRating",
              children: storyRating.ship
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
              onClick: function onClick() {
                handleClick("ship");
              },
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_DirectionsBoat__WEBPACK_IMPORTED_MODULE_11__.default, {
                style: {
                  fontSize: "1.8rem"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 174,
                columnNumber: 77
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 174,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: storyRatingClicked.money ? "moneyActive" : "money",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
              className: "moneyRating",
              children: storyRating.money
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 177,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
              onClick: function onClick() {
                handleClick("money");
              },
              children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_LocalAtm__WEBPACK_IMPORTED_MODULE_12__.default, {
                style: {
                  fontSize: "1.8rem"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 178,
                columnNumber: 78
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 178,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 44
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: "story__mainImgContainer",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
        src: story.img,
        alt: story.img
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
      onClick: deleteAll,
      children: "delete"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 192,
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
          lineNumber: 197,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "story__mainAuthorInfo",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h4", {
            children: story.authorhandle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 199,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
            children: story.author
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 200,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
          children: "Freelance software developer and writer with a background in AI, crypto, and quant finance."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "story__mainAuthorSocialIcons",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_13__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 204,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 204,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_14__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 205,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 205,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_15__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 206,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 206,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 196,
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
              lineNumber: 213,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: "dash"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 214,
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
                  lineNumber: 216,
                  columnNumber: 59
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 216,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                className: "energy",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_OfflineBolt__WEBPACK_IMPORTED_MODULE_10__.default, {
                  style: {
                    fontSize: "1.5rem"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 217,
                  columnNumber: 60
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 217,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                className: "boat",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_DirectionsBoat__WEBPACK_IMPORTED_MODULE_11__.default, {
                  style: {
                    fontSize: "1.5rem"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 218,
                  columnNumber: 58
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 218,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                className: "money",
                children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_LocalAtm__WEBPACK_IMPORTED_MODULE_12__.default, {
                  style: {
                    fontSize: "1.5rem"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 219,
                  columnNumber: 60
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 219,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 215,
              columnNumber: 29
            }, _this)]
          }, item, true, {
            fileName: _jsxFileName,
            lineNumber: 212,
            columnNumber: 25
          }, _this);
        }), story.subArticles.map(function (article) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "story__subArticle",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h2", {
              children: article.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 226,
              columnNumber: 29
            }, _this), article.articles.map(function (item) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
                children: item.length === 1 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                  className: "story__mainArticleItem",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
                    children: item
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 231,
                    columnNumber: 45
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                    className: "dash"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 232,
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
                        lineNumber: 234,
                        columnNumber: 75
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 234,
                      columnNumber: 49
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                      className: "energy",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_OfflineBolt__WEBPACK_IMPORTED_MODULE_10__.default, {
                        style: {
                          fontSize: "1.5rem"
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 235,
                        columnNumber: 76
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 235,
                      columnNumber: 49
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                      className: "boat",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_DirectionsBoat__WEBPACK_IMPORTED_MODULE_11__.default, {
                        style: {
                          fontSize: "1.5rem"
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 236,
                        columnNumber: 74
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 236,
                      columnNumber: 49
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                      className: "money",
                      children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_icons_LocalAtm__WEBPACK_IMPORTED_MODULE_12__.default, {
                        style: {
                          fontSize: "1.5rem"
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 237,
                        columnNumber: 76
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 237,
                      columnNumber: 49
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 233,
                    columnNumber: 45
                  }, _this)]
                }, item, true, {
                  fileName: _jsxFileName,
                  lineNumber: 230,
                  columnNumber: 41
                }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
                  children: item[0] === "quote" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                    className: "story__articleQuote",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
                      children: item[1]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 244,
                      columnNumber: 53
                    }, _this)
                  }, item[1], false, {
                    fileName: _jsxFileName,
                    lineNumber: 243,
                    columnNumber: 49
                  }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                    className: "story__articleImg",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
                      src: item[1],
                      alt: item[2]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 248,
                      columnNumber: 53
                    }, _this)
                  }, item[1], false, {
                    fileName: _jsxFileName,
                    lineNumber: 247,
                    columnNumber: 49
                  }, _this)
                }, void 0, false)
              }, void 0, false);
            })]
          }, article.url, true, {
            fileName: _jsxFileName,
            lineNumber: 225,
            columnNumber: 25
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 145,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3RvcnkvW3N0b3J5SWRdLjZlYjlkODUxYWJhODhiYTUxZWNiLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUdBLElBQU1lLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQStCO0FBQUE7O0FBQUEsTUFBNUJDLFNBQTRCLFFBQTVCQSxTQUE0QjtBQUFBLE1BQWpCQyxVQUFpQixRQUFqQkEsVUFBaUI7QUFDekNDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVo7QUFDQSxNQUFNQyxNQUFNLEdBQUdqQixzREFBUyxFQUF4Qjs7QUFDQSxrQkFBMEJGLCtDQUFRLENBQUNlLFNBQUQsQ0FBbEM7QUFBQSxNQUFPSyxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFDQSxtQkFBc0NyQiwrQ0FBUSxDQUFDO0FBQzNDc0IsSUFBQUEsS0FBSyxFQUFFTixVQUFVLENBQUNNLEtBRHlCO0FBRTNDQyxJQUFBQSxNQUFNLEVBQUVQLFVBQVUsQ0FBQ08sTUFGd0I7QUFHM0NDLElBQUFBLElBQUksRUFBRVIsVUFBVSxDQUFDUSxJQUgwQjtBQUkzQ0MsSUFBQUEsS0FBSyxFQUFFVCxVQUFVLENBQUNTO0FBSnlCLEdBQUQsQ0FBOUM7QUFBQSxNQUFPQyxXQUFQO0FBQUEsTUFBb0JDLGNBQXBCOztBQVFBLE1BQUlDLGdCQUFnQixHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBY0osV0FBZCxFQUEyQkssTUFBM0IsQ0FBa0MsVUFBQ0MsSUFBRCxFQUFPQyxJQUFQO0FBQUEsV0FBZ0JELElBQUksR0FBR0MsSUFBdkI7QUFBQSxHQUFsQyxDQUF2Qjs7QUFDQSxtQkFBb0RqQywrQ0FBUSxDQUFDLEVBQUQsQ0FBNUQ7QUFBQSxNQUFPa0Ms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LENBQWQ7QUFBbUIseUJBQUcsRUFBRUEsSUFBSSxDQUFDLENBQUQ7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLHFCQUFVQSxJQUFJLENBQUMsQ0FBRCxDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOUjtBQWJSLCtCQURrQjtBQUFBLGFBQXJCLENBRkw7QUFBQSxhQUF3Q0UsT0FBTyxDQUFDRSxHQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURtQjtBQUFBLFNBQXRCLENBZEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbERKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBeUhILENBdlBEOztHQUFNMUQ7VUFFYVo7OztLQUZiWTs7QUE2Uk4sK0RBQWVBLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RvcnkvW3N0b3J5SWRdLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiXHJcbmltcG9ydCBjb29raWVDdXR0ZXIgZnJvbSAnY29va2llLWN1dHRlcidcclxuaW1wb3J0IFR1cm5lZEluTm90SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvVHVybmVkSW5Ob3QnO1xyXG5pbXBvcnQgRmF2b3JpdGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9GYXZvcml0ZSc7XHJcbmltcG9ydCBPZmZsaW5lQm9sdEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL09mZmxpbmVCb2x0JztcclxuaW1wb3J0IERpcmVjdGlvbnNCb2F0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRGlyZWN0aW9uc0JvYXQnO1xyXG5pbXBvcnQgTG9jYWxBdG1JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Mb2NhbEF0bSc7XHJcbmltcG9ydCBFY29JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FY28nO1xyXG5pbXBvcnQgTGlua2VkSW5JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9MaW5rZWRJbic7XHJcbmltcG9ydCBUd2l0dGVySWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvVHdpdHRlcic7XHJcbmltcG9ydCBHaXRIdWJJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9HaXRIdWInO1xyXG5pbXBvcnQgY3JlYXRlQnJlYWtwb2ludHMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL2NyZWF0ZUJyZWFrcG9pbnRzJztcclxuXHJcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKVxyXG5jb25zdCBTdG9yeSA9ICh7IHN0b3J5QnlJZCwgcmF0aW5nYnlJZCB9KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcInN0b3J5UGFnZVwiKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgW3N0b3J5LCBzZXRTdG9yeV0gPSB1c2VTdGF0ZShzdG9yeUJ5SWQpXHJcbiAgICBjb25zdCBbc3RvcnlSYXRpbmcsIHNldFN0b3J5UmF0aW5nXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBoZWFydDogcmF0aW5nYnlJZC5oZWFydCxcclxuICAgICAgICBlbmVyZ3k6IHJhdGluZ2J5SWQuZW5lcmd5LFxyXG4gICAgICAgIHNoaXA6IHJhdGluZ2J5SWQuc2hpcCxcclxuICAgICAgICBtb25leTogcmF0aW5nYnlJZC5tb25leSxcclxuICAgIH0pXHJcblxyXG5cclxuICAgIGxldCBzdG9yeVJhdGluZ1RvdGFsID0gT2JqZWN0LnZhbHVlcyhzdG9yeVJhdGluZykucmVkdWNlKChwcmV2LCBjdXJyKSA9PiBwcmV2ICsgY3VycilcclxuICAgIGNvbnN0IFtzdG9yeVJhdGluZ0NsaWNrZWQsIHNldFN0b3J5UmF0aW5nQ2xpY2tlZF0gPSB1c2VTdGF0ZSh7fSlcclxuXHJcblxyXG4gICAgY29uc29sZS5sb2coc3RvcnkpXHJcblxyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgICAgICBsZXQgY29va2llUmF0aW5nc0NsaWNrZWQgPSBjb29raWVDdXR0ZXIuZ2V0KGBzdG9yeSR7c3RvcnlCeUlkLmlkfWApXHJcbiAgICAgICAgaWYgKCFjb29raWVSYXRpbmdzQ2xpY2tlZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5vY29va2llXCIpXHJcbiAgICAgICAgICAgIGxldCByYXRpbmdDbGlja2VkSW50ID0ge1xyXG4gICAgICAgICAgICAgICAgaGVhcnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZW5lcmd5OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHNoaXA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbW9uZXk6IGZhbHNlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvb2tpZUN1dHRlci5zZXQoYHN0b3J5JHtzdG9yeUJ5SWQuaWR9YCwgSlNPTi5zdHJpbmdpZnkocmF0aW5nQ2xpY2tlZEludCkpXHJcbiAgICAgICAgICAgIHNldFN0b3J5UmF0aW5nQ2xpY2tlZChyYXRpbmdDbGlja2VkSW50KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29va2llXCIpXHJcbiAgICAgICAgICAgIGNvb2tpZVJhdGluZ3NDbGlja2VkID0gSlNPTi5wYXJzZShjb29raWVSYXRpbmdzQ2xpY2tlZClcclxuICAgICAgICAgICAgY29uc29sZS5sb2coY29va2llUmF0aW5nc0NsaWNrZWQpXHJcbiAgICAgICAgICAgIHNldFN0b3J5UmF0aW5nQ2xpY2tlZChjb29raWVSYXRpbmdzQ2xpY2tlZClcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sIFtdKVxyXG5cclxuXHJcblxyXG4gICAgY29uc3QgdXBkYXRlUmF0aW5ncyA9IGFzeW5jIChuZXdSYXRpbmcpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInVwZGF0ZVJhdGluZ1wiKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKG5ld1JhdGluZylcclxuICAgICAgICBjb25zdCB1cGRhdGVkUmF0aW5nID0geyAuLi5uZXdSYXRpbmcsIGlkOiBwYXJzZUludChyb3V0ZXIucXVlcnkuc3RvcnlJZCkgfVxyXG5cclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9zdG9yeXJhdGluZ3NcIiwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXBkYXRlZFJhdGluZylcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKClcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IGRlbGV0ZUFsbCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9zdG9yeXJhdGluZ3NcIiwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoaWNvblR5cGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNsaWNrXCIpXHJcbiAgICAgICAgY29uc29sZS5sb2coaWNvblR5cGUpXHJcblxyXG4gICAgICAgIHN3aXRjaCAoaWNvblR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImhlYXJ0XCI6XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RvcnlSYXRpbmdDbGlja2VkLmhlYXJ0ID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFN0b3J5UmF0aW5nKHsgLi4uc3RvcnlSYXRpbmcsIGhlYXJ0OiBzdG9yeVJhdGluZy5oZWFydCArIDEgfSlcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3RvcnlSYXRpbmcoeyAuLi5zdG9yeVJhdGluZywgaGVhcnQ6IHN0b3J5UmF0aW5nLmhlYXJ0IC0gMSB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2V0U3RvcnlSYXRpbmdDbGlja2VkKHsgLi4uc3RvcnlSYXRpbmdDbGlja2VkLCBoZWFydDogIXN0b3J5UmF0aW5nQ2xpY2tlZC5oZWFydCB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZW5lcmd5XCI6XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RvcnlSYXRpbmdDbGlja2VkLmVuZXJneSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTdG9yeVJhdGluZyh7IC4uLnN0b3J5UmF0aW5nLCBlbmVyZ3k6IHN0b3J5UmF0aW5nLmVuZXJneSArIDEgfSlcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3RvcnlSYXRpbmcoeyAuLi5zdG9yeVJhdGluZywgZW5lcmd5OiBzdG9yeVJhdGluZy5lbmVyZ3kgLSAxIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZXRTdG9yeVJhdGluZ0NsaWNrZWQoeyAuLi5zdG9yeVJhdGluZ0NsaWNrZWQsIGVuZXJneTogIXN0b3J5UmF0aW5nQ2xpY2tlZC5lbmVyZ3kgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInNoaXBcIjpcclxuICAgICAgICAgICAgICAgIGlmIChzdG9yeVJhdGluZ0NsaWNrZWQuc2hpcCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTdG9yeVJhdGluZyh7IC4uLnN0b3J5UmF0aW5nLCBzaGlwOiBzdG9yeVJhdGluZy5zaGlwICsgMSB9KVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTdG9yeVJhdGluZyh7IC4uLnN0b3J5UmF0aW5nLCBzaGlwOiBzdG9yeVJhdGluZy5zaGlwIC0gMSB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHNldFN0b3J5UmF0aW5nQ2xpY2tlZCh7IC4uLnN0b3J5UmF0aW5nQ2xpY2tlZCwgc2hpcDogIXN0b3J5UmF0aW5nQ2xpY2tlZC5zaGlwIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RvcnlSYXRpbmdDbGlja2VkLm1vbmV5ID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFN0b3J5UmF0aW5nKHsgLi4uc3RvcnlSYXRpbmcsIG1vbmV5OiBzdG9yeVJhdGluZy5tb25leSArIDEgfSlcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3RvcnlSYXRpbmcoeyAuLi5zdG9yeVJhdGluZywgbW9uZXk6IHN0b3J5UmF0aW5nLm1vbmV5IC0gMSB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2V0U3RvcnlSYXRpbmdDbGlja2VkKHsgLi4uc3RvcnlSYXRpbmdDbGlja2VkLCBtb25leTogIXN0b3J5UmF0aW5nQ2xpY2tlZC5tb25leSB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcblxyXG5cclxuXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZihPYmplY3Qua2V5cyhzdG9yeVJhdGluZ0NsaWNrZWQpLmxlbmd0aCA+IDApIGNvb2tpZUN1dHRlci5zZXQoYHN0b3J5JHtzdG9yeUJ5SWQuaWR9YCwgSlNPTi5zdHJpbmdpZnkoc3RvcnlSYXRpbmdDbGlja2VkKSlcclxuXHJcbiAgICB1cGRhdGVSYXRpbmdzKHN0b3J5UmF0aW5nKVxyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKFwic3RvcnlSYXRpbmdcIiwgc3RvcnlSYXRpbmcpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJzdG9yeVwiPlxyXG4gICAgICAgICAgICB7LyogX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fIFNUT1JZIEhFQURFUiBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyAgKi99XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0b3J5X19oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMT57c3RvcnkudGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKiBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18gU1RPUlkgREVUQUlMUyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyAgKi99XHJcblxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeV9fZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeV9fZGV0YWlsc0luZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdG9yeV9fZGV0YWlsc0luZm9EYXRlXCI+U2VwdGVtYmVyIDEwdGggMjAyMTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdG9yeV9fZGV0YWlsc0luZm9UeXBlXCI+PHNwYW4+PEVjb0ljb24gLz48L3NwYW4+bmV3IHN0b3J5PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN0b3J5X19kZXRhaWxzSW5mb01hcmtcIj48VHVybmVkSW5Ob3RJY29uIC8+PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0b3J5X19kZXRhaWxzUmF0aW5nc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9oYWNrZXJub29uLmNvbS9fbmV4dC9pbWFnZT91cmw9JTJGdGxkck9wZW4ucG5nJnc9MjA0OCZxPTc1XCIgYWx0PVwibGlua2JhclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAge3N0b3J5UmF0aW5nVG90YWwgJiYgPGgyPntzdG9yeVJhdGluZ1RvdGFsfTwvaDI+fVxyXG4gICAgICAgICAgICAgICAgICAgIHtzdG9yeVJhdGluZ0NsaWNrZWQgJiYgPGRpdiBjbGFzc05hbWU9XCJzdG9yeV9fZGV0YWlsc1JhdGluZ0ljb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdG9yeVJhdGluZ0NsaWNrZWQuaGVhcnQgPyBcImhlYXJ0QWN0aXZlXCIgOiBcImhlYXJ0XCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3N0b3J5UmF0aW5nLmhlYXJ0fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge2hhbmRsZUNsaWNrKFwiaGVhcnRcIil9fSAgPjxGYXZvcml0ZUljb24gc3R5bGU9e3sgZm9udFNpemU6IFwiMS44cmVtXCIgfX0gLz48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdG9yeVJhdGluZ0NsaWNrZWQuZW5lcmd5ID8gXCJlbmVyZ3lBY3RpdmVcIiA6IFwiZW5lcmd5XCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZW5lcmd5UmF0aW5nXCI+e3N0b3J5UmF0aW5nLmVuZXJneX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+eyBoYW5kbGVDbGljayhcImVuZXJneVwiKX19ID48T2ZmbGluZUJvbHRJY29uIHN0eWxlPXt7IGZvbnRTaXplOiBcIjEuOHJlbVwiIH19IC8+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3RvcnlSYXRpbmdDbGlja2VkLnNoaXAgPyBcInNoaXBBY3RpdmVcIiA6IFwic2hpcFwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNoaXBSYXRpbmdcIj57c3RvcnlSYXRpbmcuc2hpcH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVDbGljayhcInNoaXBcIil9fSAgPjxEaXJlY3Rpb25zQm9hdEljb24gc3R5bGU9e3sgZm9udFNpemU6IFwiMS44cmVtXCIgfX0gLz48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdG9yeVJhdGluZ0NsaWNrZWQubW9uZXkgPyBcIm1vbmV5QWN0aXZlXCIgOiBcIm1vbmV5XCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibW9uZXlSYXRpbmdcIj57c3RvcnlSYXRpbmcubW9uZXl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlQ2xpY2soXCJtb25leVwiKX19ID4gPExvY2FsQXRtSWNvbiBzdHlsZT17eyBmb250U2l6ZTogXCIxLjhyZW1cIiB9fSAvPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fIFNUT1JZIE1BSU4gSU1HIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fICAqL31cclxuXHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0b3J5X19tYWluSW1nQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17c3RvcnkuaW1nfSBhbHQ9e3N0b3J5LmltZ30gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fIFNUT1JZIE1BSU5fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyAgKi99XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17ZGVsZXRlQWxsfSA+ZGVsZXRlPC9idXR0b24+XHJcblxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeV9fbWFpblwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeV9fbWFpbkF1dGhvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtzdG9yeS5hdXRob3JJbWd9IGFsdD17c3RvcnkuYXV0aG9ySW1nfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcnlfX21haW5BdXRob3JJbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND57c3RvcnkuYXV0aG9yaGFuZGxlfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntzdG9yeS5hdXRob3J9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkZyZWVsYW5jZSBzb2Z0d2FyZSBkZXZlbG9wZXIgYW5kIHdyaXRlciB3aXRoIGEgYmFja2dyb3VuZCBpbiBBSSwgY3J5cHRvLCBhbmQgcXVhbnQgZmluYW5jZS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeV9fbWFpbkF1dGhvclNvY2lhbEljb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+PExpbmtlZEluSWNvbiAvPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPjxUd2l0dGVySWNvbiAvPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPjxHaXRIdWJJY29uIC8+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0b3J5X19tYWluQXJ0aWNsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtzdG9yeS5tYWluQXJ0aWNsZS5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeV9fbWFpbkFydGljbGVJdGVtXCIga2V5PXtpdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntpdGVtfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFzaFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeV9fYXJ0aWxlSWNvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImhlYXJ0XCI+PEZhdm9yaXRlSWNvbiBzdHlsZT17eyBmb250U2l6ZTogXCIxLjVyZW1cIiB9fSAvPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZW5lcmd5XCI+PE9mZmxpbmVCb2x0SWNvbiBzdHlsZT17eyBmb250U2l6ZTogXCIxLjVyZW1cIiB9fSAvPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYm9hdFwiPjxEaXJlY3Rpb25zQm9hdEljb24gc3R5bGU9e3sgZm9udFNpemU6IFwiMS41cmVtXCIgfX0gLz48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm1vbmV5XCI+IDxMb2NhbEF0bUljb24gc3R5bGU9e3sgZm9udFNpemU6IFwiMS41cmVtXCIgfX0gLz48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAge3N0b3J5LnN1YkFydGljbGVzLm1hcCgoYXJ0aWNsZSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0b3J5X19zdWJBcnRpY2xlXCIga2V5PXthcnRpY2xlLnVybH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+e2FydGljbGUudGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthcnRpY2xlLmFydGljbGVzLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmxlbmd0aCA9PT0gMSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0b3J5X19tYWluQXJ0aWNsZUl0ZW1cIiBrZXk9e2l0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntpdGVtfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhc2hcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0b3J5X19hcnRpbGVJY29uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImhlYXJ0XCI+PEZhdm9yaXRlSWNvbiBzdHlsZT17eyBmb250U2l6ZTogXCIxLjVyZW1cIiB9fSAvPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImVuZXJneVwiPjxPZmZsaW5lQm9sdEljb24gc3R5bGU9e3sgZm9udFNpemU6IFwiMS41cmVtXCIgfX0gLz48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJib2F0XCI+PERpcmVjdGlvbnNCb2F0SWNvbiBzdHlsZT17eyBmb250U2l6ZTogXCIxLjVyZW1cIiB9fSAvPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm1vbmV5XCI+IDxMb2NhbEF0bUljb24gc3R5bGU9e3sgZm9udFNpemU6IFwiMS41cmVtXCIgfX0gLz48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbVswXSA9PT0gXCJxdW90ZVwiID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l0ZW1bMV19IGNsYXNzTmFtZT1cInN0b3J5X19hcnRpY2xlUXVvdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntpdGVtWzFdfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l0ZW1bMV19IGNsYXNzTmFtZT1cInN0b3J5X19hcnRpY2xlSW1nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbVsxXX0gYWx0PXtpdGVtWzJdfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICA8L2FydGljbGU+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcnlJZCA9IHBhcmFtcy5zdG9yeUlkO1xyXG4gICAgY29uc3QgY3JlYXRlUmF0aW5nSW50ID0ge1xyXG4gICAgICAgIGlkOiBwYXJzZUludChzdG9yeUlkKSxcclxuICAgICAgICBoZWFydDogTWF0aC5hYnMoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDcgLSAwICsgMSkgKyAwKSksXHJcbiAgICAgICAgZW5lcmd5OiBNYXRoLmFicyhNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoNyAtIDAgKyAxKSArIDApKSxcclxuICAgICAgICBzaGlwOiBNYXRoLmFicyhNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoNyAtIDAgKyAxKSArIDApKSxcclxuICAgICAgICBtb25leTogTWF0aC5hYnMoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDcgLSAwICsgMSkgKyAwKSksXHJcbiAgICB9XHJcbiAgICBsZXQgcmF0aW5nYnlJZCA9IGF3YWl0IHByaXNtYS5yYXRpbmdzLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICAgIGlkOiBwYXJzZUludChwYXJhbXMuc3RvcnlJZClcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGlmICghcmF0aW5nYnlJZCkge1xyXG4gICAgICAgIHJhdGluZ2J5SWQgPSBjcmVhdGVSYXRpbmdJbnQ7XHJcbiAgICAgICAgY29uc3QgY3JlYXRlZFJhdGluZyA9IGF3YWl0IHByaXNtYS5yYXRpbmdzLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGRhdGE6IGNyZWF0ZVJhdGluZ0ludCxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9oYWNrZXItc3Rvcmllcy8ke3N0b3J5SWR9YCk7XHJcbiAgICBjb25zdCBzdG9yeUJ5SWQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBzdG9yeUJ5SWQsXHJcbiAgICAgICAgICAgIHJhdGluZ2J5SWQsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3Rvcnk7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJjb29raWVDdXR0ZXIiLCJUdXJuZWRJbk5vdEljb24iLCJGYXZvcml0ZUljb24iLCJPZmZsaW5lQm9sdEljb24iLCJEaXJlY3Rpb25zQm9hdEljb24iLCJMb2NhbEF0bUljb24iLCJFY29JY29uIiwiTGlua2VkSW5JY29uIiwiVHdpdHRlckljb24iLCJHaXRIdWJJY29uIiwiY3JlYXRlQnJlYWtwb2ludHMiLCJTdG9yeSIsInN0b3J5QnlJZCIsInJhdGluZ2J5SWQiLCJjb25zb2xlIiwibG9nIiwicm91dGVyIiwic3RvcnkiLCJzZXRTdG9yeSIsImhlYXJ0IiwiZW5lcmd5Iiwic2hpcCIsIm1vbmV5Iiwic3RvcnlSYXRpbmciLCJzZXRTdG9yeVJhdGluZyIsInN0b3J5UmF0aW5nVG90YWwiLCJPYmplY3QiLCJ2YWx1ZXMiLCJyZWR1Y2UiLCJwcmV2IiwiY3VyciIsInN0b3J5UmF0aW5nQ2xpY2tlZCIsInNldFN0b3J5UmF0aW5nQ2xpY2tlZCIsImNvb2tpZVJhdGluZ3NDbGlja2VkIiwiZ2V0IiwiaWQiLCJyYXRpbmdDbGlja2VkSW50Iiwic2V0IiwiSlNPTiIsInN0cmluZ2lmeSIsInBhcnNlIiwidXBkYXRlUmF0aW5ncyIsIm5ld1JhdGluZyIsInVwZGF0ZWRSYXRpbmciLCJwYXJzZUludCIsInF1ZXJ5Iiwic3RvcnlJZCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsInJlc3BvbnNlIiwianNvbiIsImRlbGV0ZUFsbCIsImhhbmRsZUNsaWNrIiwiaWNvblR5cGUiLCJrZXlzIiwibGVuZ3RoIiwidGl0bGUiLCJmb250U2l6ZSIsImltZyIsImF1dGhvckltZyIsImF1dGhvcmhhbmRsZSIsImF1dGhvciIsIm1haW5BcnRpY2xlIiwibWFwIiwiaXRlbSIsInN1YkFydGljbGVzIiwiYXJ0aWNsZSIsImFydGljbGVzIiwidXJsIl0sInNvdXJjZVJvb3QiOiIifQ==