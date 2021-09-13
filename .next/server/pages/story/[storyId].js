"use strict";
(() => {
var exports = {};
exports.id = "pages/story/[storyId]";
exports.ids = ["pages/story/[storyId]"];
exports.modules = {

/***/ "./pages/story/[storyId].js":
/*!**********************************!*\
  !*** ./pages/story/[storyId].js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var cookie_cutter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cookie-cutter */ "cookie-cutter");
/* harmony import */ var cookie_cutter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookie_cutter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_TurnedInNot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/TurnedInNot */ "@material-ui/icons/TurnedInNot");
/* harmony import */ var _material_ui_icons_TurnedInNot__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_TurnedInNot__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "@material-ui/icons/Favorite");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_OfflineBolt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/OfflineBolt */ "@material-ui/icons/OfflineBolt");
/* harmony import */ var _material_ui_icons_OfflineBolt__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_OfflineBolt__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_DirectionsBoat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/DirectionsBoat */ "@material-ui/icons/DirectionsBoat");
/* harmony import */ var _material_ui_icons_DirectionsBoat__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DirectionsBoat__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_LocalAtm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/LocalAtm */ "@material-ui/icons/LocalAtm");
/* harmony import */ var _material_ui_icons_LocalAtm__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LocalAtm__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Eco__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Eco */ "@material-ui/icons/Eco");
/* harmony import */ var _material_ui_icons_Eco__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Eco__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/LinkedIn */ "@material-ui/icons/LinkedIn");
/* harmony import */ var _material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Twitter */ "@material-ui/icons/Twitter");
/* harmony import */ var _material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/GitHub */ "@material-ui/icons/GitHub");
/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_styles_createBreakpoints__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/styles/createBreakpoints */ "@material-ui/core/styles/createBreakpoints");
/* harmony import */ var _material_ui_core_styles_createBreakpoints__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_createBreakpoints__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__);
var _jsxFileName = "C:\\Users\\BENI\\Desktop\\Web Dev\\practice\\next\\hackernoon_storypage\\pages\\story\\[storyId].js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_2__.PrismaClient();

const Story = ({
  storyById,
  ratingbyId
}) => {
  console.log("storyPage");
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const {
    0: story,
    1: setStory
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(storyById);
  const {
    0: storyRating,
    1: setStoryRating
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    heart: ratingbyId.heart,
    energy: ratingbyId.energy,
    ship: ratingbyId.ship,
    money: ratingbyId.money
  });
  let storyRatingTotal = Object.values(storyRating).reduce((prev, curr) => prev + curr);
  const {
    0: storyRatingClicked,
    1: setStoryRatingClicked
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  console.log(story);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let cookieRatingsClicked = cookie_cutter__WEBPACK_IMPORTED_MODULE_3___default().get(`story${storyById.id}`);

    if (!cookieRatingsClicked) {
      console.log("nocookie");
      let ratingClickedInt = {
        heart: false,
        energy: false,
        ship: false,
        money: false
      };
      cookie_cutter__WEBPACK_IMPORTED_MODULE_3___default().set(`story${storyById.id}`, JSON.stringify(ratingClickedInt));
      setStoryRatingClicked(ratingClickedInt);
    } else {
      console.log("cookie");
      cookieRatingsClicked = JSON.parse(cookieRatingsClicked);
      console.log(cookieRatingsClicked);
      setStoryRatingClicked(cookieRatingsClicked);
    }
  }, []);

  const updateRatings = async newRating => {
    console.log("updateRating");
    console.log(newRating);

    const updatedRating = _objectSpread(_objectSpread({}, newRating), {}, {
      id: parseInt(router.query.storyId)
    });

    const response = await fetch("/api/storyratings", {
      method: "PATCH",
      body: JSON.stringify(updatedRating)
    });
    return await response.json();
  };

  const deleteAll = async () => {
    const response = await fetch("/api/storyratings", {
      method: "DELETE"
    });
    return await response.json();
  };

  const handleClick = iconType => {
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

  if (Object.keys(storyRatingClicked).length > 0) cookie_cutter__WEBPACK_IMPORTED_MODULE_3___default().set(`story${storyById.id}`, JSON.stringify(storyRatingClicked));
  updateRatings(storyRating); // console.log("storyRating", storyRating)

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("article", {
    className: "story",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
      className: "story__header",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("h1", {
        children: story.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
      className: "story__details",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
        className: "story__detailsInfo",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("p", {
          className: "story__detailsInfoDate",
          children: "September 10th 2021"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("p", {
          className: "story__detailsInfoType",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("span", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((_material_ui_icons_Eco__WEBPACK_IMPORTED_MODULE_9___default()), {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 65
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 59
          }, undefined), "new story"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("p", {
          className: "story__detailsInfoMark",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((_material_ui_icons_TurnedInNot__WEBPACK_IMPORTED_MODULE_4___default()), {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 59
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
        className: "story__detailsRatings",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("img", {
          src: "https://hackernoon.com/_next/image?url=%2FtldrOpen.png&w=2048&q=75",
          alt: "linkbar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 21
        }, undefined), storyRatingTotal && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("h2", {
          children: storyRatingTotal
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 42
        }, undefined), storyRatingClicked && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
          className: "story__detailsRatingIcons",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
            className: storyRatingClicked.heart ? "heartActive" : "heart",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("p", {
              children: storyRating.heart
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 165,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("button", {
              onClick: () => {
                handleClick("heart");
              },
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_5___default()), {
                style: {
                  fontSize: "1.8rem"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 166,
                columnNumber: 78
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 166,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
            className: storyRatingClicked.energy ? "energyActive" : "energy",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("p", {
              className: "energyRating",
              children: storyRating.energy
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 169,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("button", {
              onClick: () => {
                handleClick("energy");
              },
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((_material_ui_icons_OfflineBolt__WEBPACK_IMPORTED_MODULE_6___default()), {
                style: {
                  fontSize: "1.8rem"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 170,
                columnNumber: 78
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 170,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
            className: storyRatingClicked.ship ? "shipActive" : "ship",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("p", {
              className: "shipRating",
              children: storyRating.ship
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("button", {
              onClick: () => {
                handleClick("ship");
              },
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((_material_ui_icons_DirectionsBoat__WEBPACK_IMPORTED_MODULE_7___default()), {
                style: {
                  fontSize: "1.8rem"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 174,
                columnNumber: 77
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 174,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
            className: storyRatingClicked.money ? "moneyActive" : "money",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("p", {
              className: "moneyRating",
              children: storyRating.money
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 177,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("button", {
              onClick: () => {
                handleClick("money");
              },
              children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((_material_ui_icons_LocalAtm__WEBPACK_IMPORTED_MODULE_8___default()), {
                style: {
                  fontSize: "1.8rem"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 178,
                columnNumber: 78
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 178,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 44
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
      className: "story__mainImgContainer",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("img", {
        src: story.img,
        alt: story.img
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("button", {
      onClick: deleteAll,
      children: "delete"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
      className: "story__main",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
        className: "story__mainAuthor",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("img", {
          src: story.authorImg,
          alt: story.authorImg
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
          className: "story__mainAuthorInfo",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("h4", {
            children: story.authorhandle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 199,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("p", {
            children: story.author
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 200,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("p", {
          children: "Freelance software developer and writer with a background in AI, crypto, and quant finance."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
          className: "story__mainAuthorSocialIcons",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("button", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((_material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_10___default()), {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 204,
              columnNumber: 33
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 204,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("button", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_11___default()), {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 205,
              columnNumber: 33
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 205,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("button", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_12___default()), {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 206,
              columnNumber: 33
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 206,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
        className: "story__mainArticle",
        children: [story.mainArticle.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
          className: "story__mainArticleItem",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("p", {
            children: item
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 213,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
            className: "dash"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 214,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
            className: "story__artileIcons",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("button", {
              className: "heart",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_5___default()), {
                style: {
                  fontSize: "1.5rem"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 216,
                columnNumber: 59
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 216,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("button", {
              className: "energy",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((_material_ui_icons_OfflineBolt__WEBPACK_IMPORTED_MODULE_6___default()), {
                style: {
                  fontSize: "1.5rem"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 217,
                columnNumber: 60
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 217,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("button", {
              className: "boat",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((_material_ui_icons_DirectionsBoat__WEBPACK_IMPORTED_MODULE_7___default()), {
                style: {
                  fontSize: "1.5rem"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 218,
                columnNumber: 58
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 218,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("button", {
              className: "money",
              children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((_material_ui_icons_LocalAtm__WEBPACK_IMPORTED_MODULE_8___default()), {
                style: {
                  fontSize: "1.5rem"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 219,
                columnNumber: 60
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 219,
              columnNumber: 33
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 29
          }, undefined)]
        }, item, true, {
          fileName: _jsxFileName,
          lineNumber: 212,
          columnNumber: 25
        }, undefined)), story.subArticles.map(article => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
          className: "story__subArticle",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("h2", {
            children: article.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 29
          }, undefined), article.articles.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment, {
            children: item.length === 1 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
              className: "story__mainArticleItem",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("p", {
                children: item
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 231,
                columnNumber: 45
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
                className: "dash"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 232,
                columnNumber: 45
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
                className: "story__artileIcons",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("button", {
                  className: "heart",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_5___default()), {
                    style: {
                      fontSize: "1.5rem"
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 234,
                    columnNumber: 75
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 234,
                  columnNumber: 49
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("button", {
                  className: "energy",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((_material_ui_icons_OfflineBolt__WEBPACK_IMPORTED_MODULE_6___default()), {
                    style: {
                      fontSize: "1.5rem"
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 235,
                    columnNumber: 76
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 235,
                  columnNumber: 49
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("button", {
                  className: "boat",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((_material_ui_icons_DirectionsBoat__WEBPACK_IMPORTED_MODULE_7___default()), {
                    style: {
                      fontSize: "1.5rem"
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 236,
                    columnNumber: 74
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 236,
                  columnNumber: 49
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("button", {
                  className: "money",
                  children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((_material_ui_icons_LocalAtm__WEBPACK_IMPORTED_MODULE_8___default()), {
                    style: {
                      fontSize: "1.5rem"
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 237,
                    columnNumber: 76
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 237,
                  columnNumber: 49
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 233,
                columnNumber: 45
              }, undefined)]
            }, item[0], true, {
              fileName: _jsxFileName,
              lineNumber: 230,
              columnNumber: 41
            }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment, {
              children: item[0] === "quote" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
                className: "story__articleQuote",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("p", {
                  children: item[1]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 244,
                  columnNumber: 53
                }, undefined)
              }, item[1], false, {
                fileName: _jsxFileName,
                lineNumber: 243,
                columnNumber: 49
              }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
                className: "story__articleImg",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("img", {
                  src: item[1],
                  alt: item[2]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 248,
                  columnNumber: 53
                }, undefined)
              }, item[1], false, {
                fileName: _jsxFileName,
                lineNumber: 247,
                columnNumber: 49
              }, undefined)
            }, void 0, false)
          }, void 0, false))]
        }, article.url, true, {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 25
        }, undefined))]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 145,
    columnNumber: 9
  }, undefined);
};

const getServerSideProps = async ({
  params
}) => {
  const storyId = params.storyId;
  const createRatingInt = {
    id: parseInt(storyId),
    heart: Math.abs(Math.floor(Math.random() * (7 - 0 + 1) + 0)),
    energy: Math.abs(Math.floor(Math.random() * (7 - 0 + 1) + 0)),
    ship: Math.abs(Math.floor(Math.random() * (7 - 0 + 1) + 0)),
    money: Math.abs(Math.floor(Math.random() * (7 - 0 + 1) + 0))
  };
  let ratingbyId = await prisma.ratings.findUnique({
    where: {
      id: parseInt(params.storyId)
    }
  });

  if (!ratingbyId) {
    ratingbyId = createRatingInt;
    const createdRating = await prisma.ratings.create({
      data: createRatingInt
    });
  }

  const response = await fetch(`http://localhost:3000/api/hacker-stories/${storyId}`);
  const storyById = await response.json();
  return {
    props: {
      storyById,
      ratingbyId
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Story);

/***/ }),

/***/ "@material-ui/core/styles/createBreakpoints":
/*!*************************************************************!*\
  !*** external "@material-ui/core/styles/createBreakpoints" ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/styles/createBreakpoints");

/***/ }),

/***/ "@material-ui/icons/DirectionsBoat":
/*!****************************************************!*\
  !*** external "@material-ui/icons/DirectionsBoat" ***!
  \****************************************************/
/***/ ((module) => {

module.exports = require("@material-ui/icons/DirectionsBoat");

/***/ }),

/***/ "@material-ui/icons/Eco":
/*!*****************************************!*\
  !*** external "@material-ui/icons/Eco" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("@material-ui/icons/Eco");

/***/ }),

/***/ "@material-ui/icons/Favorite":
/*!**********************************************!*\
  !*** external "@material-ui/icons/Favorite" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@material-ui/icons/Favorite");

/***/ }),

/***/ "@material-ui/icons/GitHub":
/*!********************************************!*\
  !*** external "@material-ui/icons/GitHub" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@material-ui/icons/GitHub");

/***/ }),

/***/ "@material-ui/icons/LinkedIn":
/*!**********************************************!*\
  !*** external "@material-ui/icons/LinkedIn" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@material-ui/icons/LinkedIn");

/***/ }),

/***/ "@material-ui/icons/LocalAtm":
/*!**********************************************!*\
  !*** external "@material-ui/icons/LocalAtm" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@material-ui/icons/LocalAtm");

/***/ }),

/***/ "@material-ui/icons/OfflineBolt":
/*!*************************************************!*\
  !*** external "@material-ui/icons/OfflineBolt" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = require("@material-ui/icons/OfflineBolt");

/***/ }),

/***/ "@material-ui/icons/TurnedInNot":
/*!*************************************************!*\
  !*** external "@material-ui/icons/TurnedInNot" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = require("@material-ui/icons/TurnedInNot");

/***/ }),

/***/ "@material-ui/icons/Twitter":
/*!*********************************************!*\
  !*** external "@material-ui/icons/Twitter" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@material-ui/icons/Twitter");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "cookie-cutter":
/*!********************************!*\
  !*** external "cookie-cutter" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("cookie-cutter");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/story/[storyId].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ2pDLFVBQUwsRUFBaUI7QUFDYkEsSUFBQUEsVUFBVSxHQUFHMkQsZUFBYjtBQUNBLFVBQU1RLGFBQWEsR0FBRyxNQUFNdEUsTUFBTSxDQUFDbUUsT0FBUCxDQUFlSSxNQUFmLENBQXNCO0FBQzlDQyxNQUFBQSxJQUFJLEVBQUVWO0FBRHdDLEtBQXRCLENBQTVCO0FBR0g7O0FBSUQsUUFBTXpCLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUUsNENBQTJDRixPQUFRLEVBQXJELENBQTVCO0FBQ0EsUUFBTWxDLFNBQVMsR0FBRyxNQUFNbUMsUUFBUSxDQUFDSSxJQUFULEVBQXhCO0FBRUEsU0FBTztBQUNIZ0MsSUFBQUEsS0FBSyxFQUFFO0FBQ0h2RSxNQUFBQSxTQURHO0FBRUhDLE1BQUFBO0FBRkc7QUFESixHQUFQO0FBTUgsQ0FqQ007QUFvQ1AsaUVBQWVGLEtBQWY7Ozs7Ozs7Ozs7QUM5U0E7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGFja2Vybm9vbl9zdG9yeXBhZ2UvLi9wYWdlcy9zdG9yeS9bc3RvcnlJZF0uanMiLCJ3ZWJwYWNrOi8vaGFja2Vybm9vbl9zdG9yeXBhZ2UvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvY3JlYXRlQnJlYWtwb2ludHNcIiIsIndlYnBhY2s6Ly9oYWNrZXJub29uX3N0b3J5cGFnZS9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9EaXJlY3Rpb25zQm9hdFwiIiwid2VicGFjazovL2hhY2tlcm5vb25fc3RvcnlwYWdlL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Vjb1wiIiwid2VicGFjazovL2hhY2tlcm5vb25fc3RvcnlwYWdlL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Zhdm9yaXRlXCIiLCJ3ZWJwYWNrOi8vaGFja2Vybm9vbl9zdG9yeXBhZ2UvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvR2l0SHViXCIiLCJ3ZWJwYWNrOi8vaGFja2Vybm9vbl9zdG9yeXBhZ2UvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTGlua2VkSW5cIiIsIndlYnBhY2s6Ly9oYWNrZXJub29uX3N0b3J5cGFnZS9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9Mb2NhbEF0bVwiIiwid2VicGFjazovL2hhY2tlcm5vb25fc3RvcnlwYWdlL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL09mZmxpbmVCb2x0XCIiLCJ3ZWJwYWNrOi8vaGFja2Vybm9vbl9zdG9yeXBhZ2UvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVHVybmVkSW5Ob3RcIiIsIndlYnBhY2s6Ly9oYWNrZXJub29uX3N0b3J5cGFnZS9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9Ud2l0dGVyXCIiLCJ3ZWJwYWNrOi8vaGFja2Vybm9vbl9zdG9yeXBhZ2UvZXh0ZXJuYWwgXCJAcHJpc21hL2NsaWVudFwiIiwid2VicGFjazovL2hhY2tlcm5vb25fc3RvcnlwYWdlL2V4dGVybmFsIFwiY29va2llLWN1dHRlclwiIiwid2VicGFjazovL2hhY2tlcm5vb25fc3RvcnlwYWdlL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9oYWNrZXJub29uX3N0b3J5cGFnZS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vaGFja2Vybm9vbl9zdG9yeXBhZ2UvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIlxyXG5pbXBvcnQgY29va2llQ3V0dGVyIGZyb20gJ2Nvb2tpZS1jdXR0ZXInXHJcbmltcG9ydCBUdXJuZWRJbk5vdEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1R1cm5lZEluTm90JztcclxuaW1wb3J0IEZhdm9yaXRlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRmF2b3JpdGUnO1xyXG5pbXBvcnQgT2ZmbGluZUJvbHRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9PZmZsaW5lQm9sdCc7XHJcbmltcG9ydCBEaXJlY3Rpb25zQm9hdEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0RpcmVjdGlvbnNCb2F0JztcclxuaW1wb3J0IExvY2FsQXRtSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTG9jYWxBdG0nO1xyXG5pbXBvcnQgRWNvSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRWNvJztcclxuaW1wb3J0IExpbmtlZEluSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTGlua2VkSW4nO1xyXG5pbXBvcnQgVHdpdHRlckljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1R3aXR0ZXInO1xyXG5pbXBvcnQgR2l0SHViSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvR2l0SHViJztcclxuaW1wb3J0IGNyZWF0ZUJyZWFrcG9pbnRzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy9jcmVhdGVCcmVha3BvaW50cyc7XHJcblxyXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcclxuY29uc3QgU3RvcnkgPSAoeyBzdG9yeUJ5SWQsIHJhdGluZ2J5SWQgfSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJzdG9yeVBhZ2VcIik7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IFtzdG9yeSwgc2V0U3RvcnldID0gdXNlU3RhdGUoc3RvcnlCeUlkKVxyXG4gICAgY29uc3QgW3N0b3J5UmF0aW5nLCBzZXRTdG9yeVJhdGluZ10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgaGVhcnQ6IHJhdGluZ2J5SWQuaGVhcnQsXHJcbiAgICAgICAgZW5lcmd5OiByYXRpbmdieUlkLmVuZXJneSxcclxuICAgICAgICBzaGlwOiByYXRpbmdieUlkLnNoaXAsXHJcbiAgICAgICAgbW9uZXk6IHJhdGluZ2J5SWQubW9uZXksXHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICBsZXQgc3RvcnlSYXRpbmdUb3RhbCA9IE9iamVjdC52YWx1ZXMoc3RvcnlSYXRpbmcpLnJlZHVjZSgocHJldiwgY3VycikgPT4gcHJldiArIGN1cnIpXHJcbiAgICBjb25zdCBbc3RvcnlSYXRpbmdDbGlja2VkLCBzZXRTdG9yeVJhdGluZ0NsaWNrZWRdID0gdXNlU3RhdGUoe30pXHJcblxyXG5cclxuICAgIGNvbnNvbGUubG9nKHN0b3J5KVxyXG5cclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAgICAgbGV0IGNvb2tpZVJhdGluZ3NDbGlja2VkID0gY29va2llQ3V0dGVyLmdldChgc3Rvcnkke3N0b3J5QnlJZC5pZH1gKVxyXG4gICAgICAgIGlmICghY29va2llUmF0aW5nc0NsaWNrZWQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJub2Nvb2tpZVwiKVxyXG4gICAgICAgICAgICBsZXQgcmF0aW5nQ2xpY2tlZEludCA9IHtcclxuICAgICAgICAgICAgICAgIGhlYXJ0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGVuZXJneTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzaGlwOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG1vbmV5OiBmYWxzZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb29raWVDdXR0ZXIuc2V0KGBzdG9yeSR7c3RvcnlCeUlkLmlkfWAsIEpTT04uc3RyaW5naWZ5KHJhdGluZ0NsaWNrZWRJbnQpKVxyXG4gICAgICAgICAgICBzZXRTdG9yeVJhdGluZ0NsaWNrZWQocmF0aW5nQ2xpY2tlZEludClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvb2tpZVwiKVxyXG4gICAgICAgICAgICBjb29raWVSYXRpbmdzQ2xpY2tlZCA9IEpTT04ucGFyc2UoY29va2llUmF0aW5nc0NsaWNrZWQpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvb2tpZVJhdGluZ3NDbGlja2VkKVxyXG4gICAgICAgICAgICBzZXRTdG9yeVJhdGluZ0NsaWNrZWQoY29va2llUmF0aW5nc0NsaWNrZWQpXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LCBbXSlcclxuXHJcblxyXG5cclxuICAgIGNvbnN0IHVwZGF0ZVJhdGluZ3MgPSBhc3luYyAobmV3UmF0aW5nKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ1cGRhdGVSYXRpbmdcIilcclxuICAgICAgICBjb25zb2xlLmxvZyhuZXdSYXRpbmcpXHJcbiAgICAgICAgY29uc3QgdXBkYXRlZFJhdGluZyA9IHsgLi4ubmV3UmF0aW5nLCBpZDogcGFyc2VJbnQocm91dGVyLnF1ZXJ5LnN0b3J5SWQpIH1cclxuXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvc3RvcnlyYXRpbmdzXCIsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBBVENIXCIsXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVwZGF0ZWRSYXRpbmcpXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCBkZWxldGVBbGwgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvc3RvcnlyYXRpbmdzXCIsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKGljb25UeXBlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjbGlja1wiKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGljb25UeXBlKVxyXG5cclxuICAgICAgICBzd2l0Y2ggKGljb25UeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJoZWFydFwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKHN0b3J5UmF0aW5nQ2xpY2tlZC5oZWFydCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTdG9yeVJhdGluZyh7IC4uLnN0b3J5UmF0aW5nLCBoZWFydDogc3RvcnlSYXRpbmcuaGVhcnQgKyAxIH0pXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFN0b3J5UmF0aW5nKHsgLi4uc3RvcnlSYXRpbmcsIGhlYXJ0OiBzdG9yeVJhdGluZy5oZWFydCAtIDEgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNldFN0b3J5UmF0aW5nQ2xpY2tlZCh7IC4uLnN0b3J5UmF0aW5nQ2xpY2tlZCwgaGVhcnQ6ICFzdG9yeVJhdGluZ0NsaWNrZWQuaGVhcnQgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImVuZXJneVwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKHN0b3J5UmF0aW5nQ2xpY2tlZC5lbmVyZ3kgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3RvcnlSYXRpbmcoeyAuLi5zdG9yeVJhdGluZywgZW5lcmd5OiBzdG9yeVJhdGluZy5lbmVyZ3kgKyAxIH0pXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFN0b3J5UmF0aW5nKHsgLi4uc3RvcnlSYXRpbmcsIGVuZXJneTogc3RvcnlSYXRpbmcuZW5lcmd5IC0gMSB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2V0U3RvcnlSYXRpbmdDbGlja2VkKHsgLi4uc3RvcnlSYXRpbmdDbGlja2VkLCBlbmVyZ3k6ICFzdG9yeVJhdGluZ0NsaWNrZWQuZW5lcmd5IH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzaGlwXCI6XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RvcnlSYXRpbmdDbGlja2VkLnNoaXAgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3RvcnlSYXRpbmcoeyAuLi5zdG9yeVJhdGluZywgc2hpcDogc3RvcnlSYXRpbmcuc2hpcCArIDEgfSlcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3RvcnlSYXRpbmcoeyAuLi5zdG9yeVJhdGluZywgc2hpcDogc3RvcnlSYXRpbmcuc2hpcCAtIDEgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBzZXRTdG9yeVJhdGluZ0NsaWNrZWQoeyAuLi5zdG9yeVJhdGluZ0NsaWNrZWQsIHNoaXA6ICFzdG9yeVJhdGluZ0NsaWNrZWQuc2hpcCB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgaWYgKHN0b3J5UmF0aW5nQ2xpY2tlZC5tb25leSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTdG9yeVJhdGluZyh7IC4uLnN0b3J5UmF0aW5nLCBtb25leTogc3RvcnlSYXRpbmcubW9uZXkgKyAxIH0pXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFN0b3J5UmF0aW5nKHsgLi4uc3RvcnlSYXRpbmcsIG1vbmV5OiBzdG9yeVJhdGluZy5tb25leSAtIDEgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNldFN0b3J5UmF0aW5nQ2xpY2tlZCh7IC4uLnN0b3J5UmF0aW5nQ2xpY2tlZCwgbW9uZXk6ICFzdG9yeVJhdGluZ0NsaWNrZWQubW9uZXkgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG5cclxuXHJcblxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYoT2JqZWN0LmtleXMoc3RvcnlSYXRpbmdDbGlja2VkKS5sZW5ndGggPiAwKSBjb29raWVDdXR0ZXIuc2V0KGBzdG9yeSR7c3RvcnlCeUlkLmlkfWAsIEpTT04uc3RyaW5naWZ5KHN0b3J5UmF0aW5nQ2xpY2tlZCkpXHJcblxyXG4gICAgdXBkYXRlUmF0aW5ncyhzdG9yeVJhdGluZylcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhcInN0b3J5UmF0aW5nXCIsIHN0b3J5UmF0aW5nKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwic3RvcnlcIj5cclxuICAgICAgICAgICAgey8qIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyBTVE9SWSBIRUFERVIgX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18gICovfVxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeV9faGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDE+e3N0b3J5LnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fIFNUT1JZIERFVEFJTFMgX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18gICovfVxyXG5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcnlfX2RldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcnlfX2RldGFpbHNJbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3RvcnlfX2RldGFpbHNJbmZvRGF0ZVwiPlNlcHRlbWJlciAxMHRoIDIwMjE8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3RvcnlfX2RldGFpbHNJbmZvVHlwZVwiPjxzcGFuPjxFY29JY29uIC8+PC9zcGFuPm5ldyBzdG9yeTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdG9yeV9fZGV0YWlsc0luZm9NYXJrXCI+PFR1cm5lZEluTm90SWNvbiAvPjwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeV9fZGV0YWlsc1JhdGluZ3NcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaGFja2Vybm9vbi5jb20vX25leHQvaW1hZ2U/dXJsPSUyRnRsZHJPcGVuLnBuZyZ3PTIwNDgmcT03NVwiIGFsdD1cImxpbmtiYXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtzdG9yeVJhdGluZ1RvdGFsICYmIDxoMj57c3RvcnlSYXRpbmdUb3RhbH08L2gyPn1cclxuICAgICAgICAgICAgICAgICAgICB7c3RvcnlSYXRpbmdDbGlja2VkICYmIDxkaXYgY2xhc3NOYW1lPVwic3RvcnlfX2RldGFpbHNSYXRpbmdJY29uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3RvcnlSYXRpbmdDbGlja2VkLmhlYXJ0ID8gXCJoZWFydEFjdGl2ZVwiIDogXCJoZWFydFwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntzdG9yeVJhdGluZy5oZWFydH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtoYW5kbGVDbGljayhcImhlYXJ0XCIpfX0gID48RmF2b3JpdGVJY29uIHN0eWxlPXt7IGZvbnRTaXplOiBcIjEuOHJlbVwiIH19IC8+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3RvcnlSYXRpbmdDbGlja2VkLmVuZXJneSA/IFwiZW5lcmd5QWN0aXZlXCIgOiBcImVuZXJneVwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVuZXJneVJhdGluZ1wiPntzdG9yeVJhdGluZy5lbmVyZ3l9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PnsgaGFuZGxlQ2xpY2soXCJlbmVyZ3lcIil9fSA+PE9mZmxpbmVCb2x0SWNvbiBzdHlsZT17eyBmb250U2l6ZTogXCIxLjhyZW1cIiB9fSAvPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0b3J5UmF0aW5nQ2xpY2tlZC5zaGlwID8gXCJzaGlwQWN0aXZlXCIgOiBcInNoaXBcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzaGlwUmF0aW5nXCI+e3N0b3J5UmF0aW5nLnNoaXB9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlQ2xpY2soXCJzaGlwXCIpfX0gID48RGlyZWN0aW9uc0JvYXRJY29uIHN0eWxlPXt7IGZvbnRTaXplOiBcIjEuOHJlbVwiIH19IC8+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3RvcnlSYXRpbmdDbGlja2VkLm1vbmV5ID8gXCJtb25leUFjdGl2ZVwiIDogXCJtb25leVwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1vbmV5UmF0aW5nXCI+e3N0b3J5UmF0aW5nLm1vbmV5fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge2hhbmRsZUNsaWNrKFwibW9uZXlcIil9fSA+IDxMb2NhbEF0bUljb24gc3R5bGU9e3sgZm9udFNpemU6IFwiMS44cmVtXCIgfX0gLz48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyBTVE9SWSBNQUlOIElNRyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyAgKi99XHJcblxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeV9fbWFpbkltZ0NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3N0b3J5LmltZ30gYWx0PXtzdG9yeS5pbWd9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyBTVE9SWSBNQUlOX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18gICovfVxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2RlbGV0ZUFsbH0gPmRlbGV0ZTwvYnV0dG9uPlxyXG5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcnlfX21haW5cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcnlfX21haW5BdXRob3JcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17c3RvcnkuYXV0aG9ySW1nfSBhbHQ9e3N0b3J5LmF1dGhvckltZ30gLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0b3J5X19tYWluQXV0aG9ySW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+e3N0b3J5LmF1dGhvcmhhbmRsZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57c3RvcnkuYXV0aG9yfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5GcmVlbGFuY2Ugc29mdHdhcmUgZGV2ZWxvcGVyIGFuZCB3cml0ZXIgd2l0aCBhIGJhY2tncm91bmQgaW4gQUksIGNyeXB0bywgYW5kIHF1YW50IGZpbmFuY2UuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcnlfX21haW5BdXRob3JTb2NpYWxJY29uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPjxMaW5rZWRJbkljb24gLz48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj48VHdpdHRlckljb24gLz48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj48R2l0SHViSWNvbiAvPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeV9fbWFpbkFydGljbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7c3RvcnkubWFpbkFydGljbGUubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcnlfX21haW5BcnRpY2xlSXRlbVwiIGtleT17aXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57aXRlbX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhc2hcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcnlfX2FydGlsZUljb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJoZWFydFwiPjxGYXZvcml0ZUljb24gc3R5bGU9e3sgZm9udFNpemU6IFwiMS41cmVtXCIgfX0gLz48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImVuZXJneVwiPjxPZmZsaW5lQm9sdEljb24gc3R5bGU9e3sgZm9udFNpemU6IFwiMS41cmVtXCIgfX0gLz48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJvYXRcIj48RGlyZWN0aW9uc0JvYXRJY29uIHN0eWxlPXt7IGZvbnRTaXplOiBcIjEuNXJlbVwiIH19IC8+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtb25leVwiPiA8TG9jYWxBdG1JY29uIHN0eWxlPXt7IGZvbnRTaXplOiBcIjEuNXJlbVwiIH19IC8+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIHtzdG9yeS5zdWJBcnRpY2xlcy5tYXAoKGFydGljbGUpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeV9fc3ViQXJ0aWNsZVwiIGtleT17YXJ0aWNsZS51cmx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPnthcnRpY2xlLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXJ0aWNsZS5hcnRpY2xlcy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5sZW5ndGggPT09IDEgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeV9fbWFpbkFydGljbGVJdGVtXCIga2V5PXtpdGVtWzBdfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57aXRlbX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXNoXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeV9fYXJ0aWxlSWNvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJoZWFydFwiPjxGYXZvcml0ZUljb24gc3R5bGU9e3sgZm9udFNpemU6IFwiMS41cmVtXCIgfX0gLz48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJlbmVyZ3lcIj48T2ZmbGluZUJvbHRJY29uIHN0eWxlPXt7IGZvbnRTaXplOiBcIjEuNXJlbVwiIH19IC8+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYm9hdFwiPjxEaXJlY3Rpb25zQm9hdEljb24gc3R5bGU9e3sgZm9udFNpemU6IFwiMS41cmVtXCIgfX0gLz48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtb25leVwiPiA8TG9jYWxBdG1JY29uIHN0eWxlPXt7IGZvbnRTaXplOiBcIjEuNXJlbVwiIH19IC8+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW1bMF0gPT09IFwicXVvdGVcIiA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpdGVtWzFdfSBjbGFzc05hbWU9XCJzdG9yeV9fYXJ0aWNsZVF1b3RlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57aXRlbVsxXX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpdGVtWzFdfSBjbGFzc05hbWU9XCJzdG9yeV9fYXJ0aWNsZUltZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW1bMV19IGFsdD17aXRlbVsyXX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcclxuICAgIGNvbnN0IHN0b3J5SWQgPSBwYXJhbXMuc3RvcnlJZDtcclxuICAgIGNvbnN0IGNyZWF0ZVJhdGluZ0ludCA9IHtcclxuICAgICAgICBpZDogcGFyc2VJbnQoc3RvcnlJZCksXHJcbiAgICAgICAgaGVhcnQ6IE1hdGguYWJzKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg3IC0gMCArIDEpICsgMCkpLFxyXG4gICAgICAgIGVuZXJneTogTWF0aC5hYnMoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDcgLSAwICsgMSkgKyAwKSksXHJcbiAgICAgICAgc2hpcDogTWF0aC5hYnMoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDcgLSAwICsgMSkgKyAwKSksXHJcbiAgICAgICAgbW9uZXk6IE1hdGguYWJzKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg3IC0gMCArIDEpICsgMCkpLFxyXG4gICAgfVxyXG4gICAgbGV0IHJhdGluZ2J5SWQgPSBhd2FpdCBwcmlzbWEucmF0aW5ncy5maW5kVW5pcXVlKHtcclxuICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICBpZDogcGFyc2VJbnQocGFyYW1zLnN0b3J5SWQpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBpZiAoIXJhdGluZ2J5SWQpIHtcclxuICAgICAgICByYXRpbmdieUlkID0gY3JlYXRlUmF0aW5nSW50O1xyXG4gICAgICAgIGNvbnN0IGNyZWF0ZWRSYXRpbmcgPSBhd2FpdCBwcmlzbWEucmF0aW5ncy5jcmVhdGUoe1xyXG4gICAgICAgICAgICBkYXRhOiBjcmVhdGVSYXRpbmdJbnQsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvaGFja2VyLXN0b3JpZXMvJHtzdG9yeUlkfWApO1xyXG4gICAgY29uc3Qgc3RvcnlCeUlkID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgc3RvcnlCeUlkLFxyXG4gICAgICAgICAgICByYXRpbmdieUlkLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0b3J5OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy9jcmVhdGVCcmVha3BvaW50c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRGlyZWN0aW9uc0JvYXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0Vjb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRmF2b3JpdGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0dpdEh1YlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTGlua2VkSW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0xvY2FsQXRtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9PZmZsaW5lQm9sdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVHVybmVkSW5Ob3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1R3aXR0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHByaXNtYS9jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29va2llLWN1dHRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJQcmlzbWFDbGllbnQiLCJjb29raWVDdXR0ZXIiLCJUdXJuZWRJbk5vdEljb24iLCJGYXZvcml0ZUljb24iLCJPZmZsaW5lQm9sdEljb24iLCJEaXJlY3Rpb25zQm9hdEljb24iLCJMb2NhbEF0bUljb24iLCJFY29JY29uIiwiTGlua2VkSW5JY29uIiwiVHdpdHRlckljb24iLCJHaXRIdWJJY29uIiwiY3JlYXRlQnJlYWtwb2ludHMiLCJwcmlzbWEiLCJTdG9yeSIsInN0b3J5QnlJZCIsInJhdGluZ2J5SWQiLCJjb25zb2xlIiwibG9nIiwicm91dGVyIiwic3RvcnkiLCJzZXRTdG9yeSIsInN0b3J5UmF0aW5nIiwic2V0U3RvcnlSYXRpbmciLCJoZWFydCIsImVuZXJneSIsInNoaXAiLCJtb25leSIsInN0b3J5UmF0aW5nVG90YWwiLCJPYmplY3QiLCJ2YWx1ZXMiLCJyZWR1Y2UiLCJwcmV2IiwiY3VyciIsInN0b3J5UmF0aW5nQ2xpY2tlZCIsInNldFN0b3J5UmF0aW5nQ2xpY2tlZCIsImNvb2tpZVJhdGluZ3NDbGlja2VkIiwiZ2V0IiwiaWQiLCJyYXRpbmdDbGlja2VkSW50Iiwic2V0IiwiSlNPTiIsInN0cmluZ2lmeSIsInBhcnNlIiwidXBkYXRlUmF0aW5ncyIsIm5ld1JhdGluZyIsInVwZGF0ZWRSYXRpbmciLCJwYXJzZUludCIsInF1ZXJ5Iiwic3RvcnlJZCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwianNvbiIsImRlbGV0ZUFsbCIsImhhbmRsZUNsaWNrIiwiaWNvblR5cGUiLCJrZXlzIiwibGVuZ3RoIiwidGl0bGUiLCJmb250U2l6ZSIsImltZyIsImF1dGhvckltZyIsImF1dGhvcmhhbmRsZSIsImF1dGhvciIsIm1haW5BcnRpY2xlIiwibWFwIiwiaXRlbSIsInN1YkFydGljbGVzIiwiYXJ0aWNsZSIsImFydGljbGVzIiwidXJsIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicGFyYW1zIiwiY3JlYXRlUmF0aW5nSW50IiwiTWF0aCIsImFicyIsImZsb29yIiwicmFuZG9tIiwicmF0aW5ncyIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImNyZWF0ZWRSYXRpbmciLCJjcmVhdGUiLCJkYXRhIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9