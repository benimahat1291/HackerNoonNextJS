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
/* harmony import */ var _material_ui_icons_TurnedInNot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/TurnedInNot */ "@material-ui/icons/TurnedInNot");
/* harmony import */ var _material_ui_icons_TurnedInNot__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_TurnedInNot__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "@material-ui/icons/Favorite");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_OfflineBolt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/OfflineBolt */ "@material-ui/icons/OfflineBolt");
/* harmony import */ var _material_ui_icons_OfflineBolt__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_OfflineBolt__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_DirectionsBoat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/DirectionsBoat */ "@material-ui/icons/DirectionsBoat");
/* harmony import */ var _material_ui_icons_DirectionsBoat__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DirectionsBoat__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_LocalAtm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/LocalAtm */ "@material-ui/icons/LocalAtm");
/* harmony import */ var _material_ui_icons_LocalAtm__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LocalAtm__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Eco__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Eco */ "@material-ui/icons/Eco");
/* harmony import */ var _material_ui_icons_Eco__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Eco__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/LinkedIn */ "@material-ui/icons/LinkedIn");
/* harmony import */ var _material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Twitter */ "@material-ui/icons/Twitter");
/* harmony import */ var _material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/GitHub */ "@material-ui/icons/GitHub");
/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_styles_createBreakpoints__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/styles/createBreakpoints */ "@material-ui/core/styles/createBreakpoints");
/* harmony import */ var _material_ui_core_styles_createBreakpoints__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_createBreakpoints__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__);
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
  let ratingClickedInt = {
    heart: false,
    energy: false,
    ship: false,
    money: false
  };
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
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(ratingClickedInt);
  console.log(story);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {}, []);

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

  updateRatings(storyRating); // console.log("storyRating", storyRating)

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("article", {
    className: "story",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
      className: "story__header",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("h1", {
        children: story.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
      className: "story__details",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
        className: "story__detailsInfo",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("p", {
          className: "story__detailsInfoDate",
          children: "September 10th 2021"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("p", {
          className: "story__detailsInfoType",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("span", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)((_material_ui_icons_Eco__WEBPACK_IMPORTED_MODULE_8___default()), {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 65
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 59
          }, undefined), "new story"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("p", {
          className: "story__detailsInfoMark",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)((_material_ui_icons_TurnedInNot__WEBPACK_IMPORTED_MODULE_3___default()), {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 59
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
        className: "story__detailsRatings",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("img", {
          src: "https://hackernoon.com/_next/image?url=%2FtldrOpen.png&w=2048&q=75",
          alt: "linkbar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 21
        }, undefined), storyRatingTotal && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("h2", {
          children: storyRatingTotal
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 42
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
          className: "story__detailsRatingIcons",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
            className: storyRatingClicked.heart ? "heartActive" : "heart",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("p", {
              children: storyRating.heart
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("button", {
              onClick: () => handleClick("heart"),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)((_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_4___default()), {
                style: {
                  fontSize: "1.8rem"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 138,
                columnNumber: 76
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
            className: storyRatingClicked.energy ? "energyActive" : "energy",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("p", {
              className: "energyRating",
              children: storyRating.energy
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("button", {
              onClick: () => handleClick("energy"),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)((_material_ui_icons_OfflineBolt__WEBPACK_IMPORTED_MODULE_5___default()), {
                style: {
                  fontSize: "1.8rem"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 142,
                columnNumber: 76
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
            className: storyRatingClicked.ship ? "shipActive" : "ship",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("p", {
              className: "shipRating",
              children: storyRating.ship
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 145,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("button", {
              onClick: () => handleClick("ship"),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)((_material_ui_icons_DirectionsBoat__WEBPACK_IMPORTED_MODULE_6___default()), {
                style: {
                  fontSize: "1.8rem"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 146,
                columnNumber: 75
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 146,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
            className: storyRatingClicked.money ? "moneyActive" : "money",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("p", {
              className: "moneyRating",
              children: storyRating.money
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("button", {
              onClick: () => handleClick("money"),
              children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)((_material_ui_icons_LocalAtm__WEBPACK_IMPORTED_MODULE_7___default()), {
                style: {
                  fontSize: "1.8rem"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 150,
                columnNumber: 76
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 150,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
      className: "story__mainImgContainer",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("img", {
        src: story.img,
        alt: story.img
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("button", {
      onClick: deleteAll,
      children: "delete"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
      className: "story__main",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
        className: "story__mainAuthor",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("img", {
          src: story.authorImg,
          alt: story.authorImg
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
          className: "story__mainAuthorInfo",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("h4", {
            children: story.authorhandle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("p", {
            children: story.author
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("p", {
          children: "Freelance software developer and writer with a background in AI, crypto, and quant finance."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
          className: "story__mainAuthorSocialIcons",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("button", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)((_material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_9___default()), {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 176,
              columnNumber: 33
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("button", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)((_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_10___default()), {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 177,
              columnNumber: 33
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("button", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)((_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_11___default()), {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 178,
              columnNumber: 33
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 178,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
        className: "story__mainArticle",
        children: [story.mainArticle.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
          className: "story__mainArticleItem",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("p", {
            children: item
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 185,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
            className: "dash"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
            className: "story__artileIcons",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("button", {
              className: "heart",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)((_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_4___default()), {
                style: {
                  fontSize: "1.5rem"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 188,
                columnNumber: 59
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 188,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("button", {
              className: "energy",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)((_material_ui_icons_OfflineBolt__WEBPACK_IMPORTED_MODULE_5___default()), {
                style: {
                  fontSize: "1.5rem"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 189,
                columnNumber: 60
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 189,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("button", {
              className: "boat",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)((_material_ui_icons_DirectionsBoat__WEBPACK_IMPORTED_MODULE_6___default()), {
                style: {
                  fontSize: "1.5rem"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 190,
                columnNumber: 58
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 190,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("button", {
              className: "money",
              children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)((_material_ui_icons_LocalAtm__WEBPACK_IMPORTED_MODULE_7___default()), {
                style: {
                  fontSize: "1.5rem"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 191,
                columnNumber: 60
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 191,
              columnNumber: 33
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 187,
            columnNumber: 29
          }, undefined)]
        }, item, true, {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 25
        }, undefined)), story.subArticles.map(article => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
          className: "story__subArticle",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("h2", {
            children: article.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 198,
            columnNumber: 29
          }, undefined), article.articles.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
            children: item.length === 1 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
              className: "story__mainArticleItem",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("p", {
                children: item
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 203,
                columnNumber: 45
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
                className: "dash"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 204,
                columnNumber: 45
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
                className: "story__artileIcons",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("button", {
                  className: "heart",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)((_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_4___default()), {
                    style: {
                      fontSize: "1.5rem"
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 206,
                    columnNumber: 75
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 206,
                  columnNumber: 49
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("button", {
                  className: "energy",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)((_material_ui_icons_OfflineBolt__WEBPACK_IMPORTED_MODULE_5___default()), {
                    style: {
                      fontSize: "1.5rem"
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 207,
                    columnNumber: 76
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 207,
                  columnNumber: 49
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("button", {
                  className: "boat",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)((_material_ui_icons_DirectionsBoat__WEBPACK_IMPORTED_MODULE_6___default()), {
                    style: {
                      fontSize: "1.5rem"
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 208,
                    columnNumber: 74
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 208,
                  columnNumber: 49
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("button", {
                  className: "money",
                  children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)((_material_ui_icons_LocalAtm__WEBPACK_IMPORTED_MODULE_7___default()), {
                    style: {
                      fontSize: "1.5rem"
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 209,
                    columnNumber: 76
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 209,
                  columnNumber: 49
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 205,
                columnNumber: 45
              }, undefined)]
            }, item, true, {
              fileName: _jsxFileName,
              lineNumber: 202,
              columnNumber: 41
            }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
              children: item[0] === "quote" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
                className: "story__articleQuote",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("p", {
                  children: item[1]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 216,
                  columnNumber: 53
                }, undefined)
              }, item[1], false, {
                fileName: _jsxFileName,
                lineNumber: 215,
                columnNumber: 49
              }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
                className: "story__articleImg",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("img", {
                  src: item[1],
                  alt: item[2]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 220,
                  columnNumber: 53
                }, undefined)
              }, item[1], false, {
                fileName: _jsxFileName,
                lineNumber: 219,
                columnNumber: 49
              }, undefined)
            }, void 0, false)
          }, void 0, false))]
        }, article.url, true, {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 25
        }, undefined))]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 117,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFlQyxVQUFmLENBQTBCO0FBQzdDQyxJQUFBQSxLQUFLLEVBQUU7QUFDSHJDLE1BQUFBLEVBQUUsRUFBRUMsUUFBUSxDQUFDNEIsTUFBTSxDQUFDMUIsT0FBUjtBQURUO0FBRHNDLEdBQTFCLENBQXZCOztBQU1BLE1BQUksQ0FBQzNCLFVBQUwsRUFBaUI7QUFDYkEsSUFBQUEsVUFBVSxHQUFHc0QsZUFBYjtBQUNBLFVBQU1RLGFBQWEsR0FBRyxNQUFNakUsTUFBTSxDQUFDOEQsT0FBUCxDQUFlSSxNQUFmLENBQXNCO0FBQzlDQyxNQUFBQSxJQUFJLEVBQUVWO0FBRHdDLEtBQXRCLENBQTVCO0FBR0g7O0FBR0QsUUFBTTFCLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUUsNENBQTJDRixPQUFRLEVBQXJELENBQTVCO0FBQ0EsUUFBTTVCLFNBQVMsR0FBRyxNQUFNNkIsUUFBUSxDQUFDTSxJQUFULEVBQXhCO0FBRUEsU0FBTztBQUNIK0IsSUFBQUEsS0FBSyxFQUFFO0FBQ0hsRSxNQUFBQSxTQURHO0FBRUhDLE1BQUFBO0FBRkc7QUFESixHQUFQO0FBTUgsQ0FoQ007QUFrQ1AsaUVBQWVGLEtBQWY7Ozs7Ozs7Ozs7QUNoUkE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hhY2tlcm5vb25fc3RvcnlwYWdlLy4vcGFnZXMvc3RvcnkvW3N0b3J5SWRdLmpzIiwid2VicGFjazovL2hhY2tlcm5vb25fc3RvcnlwYWdlL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL2NyZWF0ZUJyZWFrcG9pbnRzXCIiLCJ3ZWJwYWNrOi8vaGFja2Vybm9vbl9zdG9yeXBhZ2UvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRGlyZWN0aW9uc0JvYXRcIiIsIndlYnBhY2s6Ly9oYWNrZXJub29uX3N0b3J5cGFnZS9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9FY29cIiIsIndlYnBhY2s6Ly9oYWNrZXJub29uX3N0b3J5cGFnZS9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9GYXZvcml0ZVwiIiwid2VicGFjazovL2hhY2tlcm5vb25fc3RvcnlwYWdlL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0dpdEh1YlwiIiwid2VicGFjazovL2hhY2tlcm5vb25fc3RvcnlwYWdlL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0xpbmtlZEluXCIiLCJ3ZWJwYWNrOi8vaGFja2Vybm9vbl9zdG9yeXBhZ2UvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTG9jYWxBdG1cIiIsIndlYnBhY2s6Ly9oYWNrZXJub29uX3N0b3J5cGFnZS9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9PZmZsaW5lQm9sdFwiIiwid2VicGFjazovL2hhY2tlcm5vb25fc3RvcnlwYWdlL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1R1cm5lZEluTm90XCIiLCJ3ZWJwYWNrOi8vaGFja2Vybm9vbl9zdG9yeXBhZ2UvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVHdpdHRlclwiIiwid2VicGFjazovL2hhY2tlcm5vb25fc3RvcnlwYWdlL2V4dGVybmFsIFwiQHByaXNtYS9jbGllbnRcIiIsIndlYnBhY2s6Ly9oYWNrZXJub29uX3N0b3J5cGFnZS9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vaGFja2Vybm9vbl9zdG9yeXBhZ2UvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2hhY2tlcm5vb25fc3RvcnlwYWdlL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcclxuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCJcclxuXHJcbmltcG9ydCBUdXJuZWRJbk5vdEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1R1cm5lZEluTm90JztcclxuaW1wb3J0IEZhdm9yaXRlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRmF2b3JpdGUnO1xyXG5pbXBvcnQgT2ZmbGluZUJvbHRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9PZmZsaW5lQm9sdCc7XHJcbmltcG9ydCBEaXJlY3Rpb25zQm9hdEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0RpcmVjdGlvbnNCb2F0JztcclxuaW1wb3J0IExvY2FsQXRtSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTG9jYWxBdG0nO1xyXG5pbXBvcnQgRWNvSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRWNvJztcclxuaW1wb3J0IExpbmtlZEluSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTGlua2VkSW4nO1xyXG5pbXBvcnQgVHdpdHRlckljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1R3aXR0ZXInO1xyXG5pbXBvcnQgR2l0SHViSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvR2l0SHViJztcclxuaW1wb3J0IGNyZWF0ZUJyZWFrcG9pbnRzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy9jcmVhdGVCcmVha3BvaW50cyc7XHJcblxyXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcclxuY29uc3QgU3RvcnkgPSAoeyBzdG9yeUJ5SWQsIHJhdGluZ2J5SWQgfSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJzdG9yeVBhZ2VcIik7XHJcblxyXG4gICAgbGV0IHJhdGluZ0NsaWNrZWRJbnQgPSB7XHJcbiAgICAgICAgaGVhcnQ6IGZhbHNlLFxyXG4gICAgICAgIGVuZXJneTogZmFsc2UsXHJcbiAgICAgICAgc2hpcDogZmFsc2UsXHJcbiAgICAgICAgbW9uZXk6IGZhbHNlLFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IFtzdG9yeSwgc2V0U3RvcnldID0gdXNlU3RhdGUoc3RvcnlCeUlkKVxyXG4gICAgY29uc3QgW3N0b3J5UmF0aW5nLCBzZXRTdG9yeVJhdGluZ10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgaGVhcnQ6IHJhdGluZ2J5SWQuaGVhcnQsXHJcbiAgICAgICAgZW5lcmd5OiByYXRpbmdieUlkLmVuZXJneSxcclxuICAgICAgICBzaGlwOiByYXRpbmdieUlkLnNoaXAsXHJcbiAgICAgICAgbW9uZXk6IHJhdGluZ2J5SWQubW9uZXksXHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICBsZXQgc3RvcnlSYXRpbmdUb3RhbCA9IE9iamVjdC52YWx1ZXMoc3RvcnlSYXRpbmcpLnJlZHVjZSgocHJldiwgY3VycikgPT4gcHJldiArIGN1cnIpXHJcbiAgICBjb25zdCBbc3RvcnlSYXRpbmdDbGlja2VkLCBzZXRTdG9yeVJhdGluZ0NsaWNrZWRdID0gdXNlU3RhdGUocmF0aW5nQ2xpY2tlZEludClcclxuXHJcbiAgICBjb25zb2xlLmxvZyhzdG9yeSlcclxuXHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG5cclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGNvbnN0IHVwZGF0ZVJhdGluZ3MgPSBhc3luYyAobmV3UmF0aW5nKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ1cGRhdGVSYXRpbmdcIilcclxuICAgICAgICBjb25zb2xlLmxvZyhuZXdSYXRpbmcpXHJcbiAgICAgICAgY29uc3QgdXBkYXRlZFJhdGluZyA9IHsgLi4ubmV3UmF0aW5nLCBpZDogcGFyc2VJbnQocm91dGVyLnF1ZXJ5LnN0b3J5SWQpIH1cclxuXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvc3RvcnlyYXRpbmdzXCIsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBBVENIXCIsXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVwZGF0ZWRSYXRpbmcpXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCBkZWxldGVBbGwgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvc3RvcnlyYXRpbmdzXCIsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKGljb25UeXBlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjbGlja1wiKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGljb25UeXBlKVxyXG4gICAgICAgIHN3aXRjaCAoaWNvblR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImhlYXJ0XCI6XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RvcnlSYXRpbmdDbGlja2VkLmhlYXJ0ID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFN0b3J5UmF0aW5nKHsgLi4uc3RvcnlSYXRpbmcsIGhlYXJ0OiBzdG9yeVJhdGluZy5oZWFydCArIDEgfSlcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3RvcnlSYXRpbmcoeyAuLi5zdG9yeVJhdGluZywgaGVhcnQ6IHN0b3J5UmF0aW5nLmhlYXJ0IC0gMSB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2V0U3RvcnlSYXRpbmdDbGlja2VkKHsgLi4uc3RvcnlSYXRpbmdDbGlja2VkLCBoZWFydDogIXN0b3J5UmF0aW5nQ2xpY2tlZC5oZWFydCB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZW5lcmd5XCI6XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RvcnlSYXRpbmdDbGlja2VkLmVuZXJneSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTdG9yeVJhdGluZyh7IC4uLnN0b3J5UmF0aW5nLCBlbmVyZ3k6IHN0b3J5UmF0aW5nLmVuZXJneSArIDEgfSlcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3RvcnlSYXRpbmcoeyAuLi5zdG9yeVJhdGluZywgZW5lcmd5OiBzdG9yeVJhdGluZy5lbmVyZ3kgLSAxIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZXRTdG9yeVJhdGluZ0NsaWNrZWQoeyAuLi5zdG9yeVJhdGluZ0NsaWNrZWQsIGVuZXJneTogIXN0b3J5UmF0aW5nQ2xpY2tlZC5lbmVyZ3kgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInNoaXBcIjpcclxuICAgICAgICAgICAgICAgIGlmIChzdG9yeVJhdGluZ0NsaWNrZWQuc2hpcCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTdG9yeVJhdGluZyh7IC4uLnN0b3J5UmF0aW5nLCBzaGlwOiBzdG9yeVJhdGluZy5zaGlwICsgMSB9KVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTdG9yeVJhdGluZyh7IC4uLnN0b3J5UmF0aW5nLCBzaGlwOiBzdG9yeVJhdGluZy5zaGlwIC0gMSB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2V0U3RvcnlSYXRpbmdDbGlja2VkKHsgLi4uc3RvcnlSYXRpbmdDbGlja2VkLCBzaGlwOiAhc3RvcnlSYXRpbmdDbGlja2VkLnNoaXAgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGlmIChzdG9yeVJhdGluZ0NsaWNrZWQubW9uZXkgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3RvcnlSYXRpbmcoeyAuLi5zdG9yeVJhdGluZywgbW9uZXk6IHN0b3J5UmF0aW5nLm1vbmV5ICsgMSB9KVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTdG9yeVJhdGluZyh7IC4uLnN0b3J5UmF0aW5nLCBtb25leTogc3RvcnlSYXRpbmcubW9uZXkgLSAxIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZXRTdG9yeVJhdGluZ0NsaWNrZWQoeyAuLi5zdG9yeVJhdGluZ0NsaWNrZWQsIG1vbmV5OiAhc3RvcnlSYXRpbmdDbGlja2VkLm1vbmV5IH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgdXBkYXRlUmF0aW5ncyhzdG9yeVJhdGluZylcclxuICAgIC8vIGNvbnNvbGUubG9nKFwic3RvcnlSYXRpbmdcIiwgc3RvcnlSYXRpbmcpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJzdG9yeVwiPlxyXG4gICAgICAgICAgICB7LyogX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fIFNUT1JZIEhFQURFUiBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyAgKi99XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0b3J5X19oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMT57c3RvcnkudGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKiBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18gU1RPUlkgREVUQUlMUyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyAgKi99XHJcblxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeV9fZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeV9fZGV0YWlsc0luZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdG9yeV9fZGV0YWlsc0luZm9EYXRlXCI+U2VwdGVtYmVyIDEwdGggMjAyMTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdG9yeV9fZGV0YWlsc0luZm9UeXBlXCI+PHNwYW4+PEVjb0ljb24gLz48L3NwYW4+bmV3IHN0b3J5PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN0b3J5X19kZXRhaWxzSW5mb01hcmtcIj48VHVybmVkSW5Ob3RJY29uIC8+PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0b3J5X19kZXRhaWxzUmF0aW5nc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9oYWNrZXJub29uLmNvbS9fbmV4dC9pbWFnZT91cmw9JTJGdGxkck9wZW4ucG5nJnc9MjA0OCZxPTc1XCIgYWx0PVwibGlua2JhclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAge3N0b3J5UmF0aW5nVG90YWwgJiYgPGgyPntzdG9yeVJhdGluZ1RvdGFsfTwvaDI+fVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcnlfX2RldGFpbHNSYXRpbmdJY29uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3RvcnlSYXRpbmdDbGlja2VkLmhlYXJ0ID8gXCJoZWFydEFjdGl2ZVwiIDogXCJoZWFydFwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntzdG9yeVJhdGluZy5oZWFydH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKFwiaGVhcnRcIil9ICA+PEZhdm9yaXRlSWNvbiBzdHlsZT17eyBmb250U2l6ZTogXCIxLjhyZW1cIiB9fSAvPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0b3J5UmF0aW5nQ2xpY2tlZC5lbmVyZ3kgPyBcImVuZXJneUFjdGl2ZVwiIDogXCJlbmVyZ3lcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlbmVyZ3lSYXRpbmdcIj57c3RvcnlSYXRpbmcuZW5lcmd5fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soXCJlbmVyZ3lcIil9ID48T2ZmbGluZUJvbHRJY29uIHN0eWxlPXt7IGZvbnRTaXplOiBcIjEuOHJlbVwiIH19IC8+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3RvcnlSYXRpbmdDbGlja2VkLnNoaXAgPyBcInNoaXBBY3RpdmVcIiA6IFwic2hpcFwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNoaXBSYXRpbmdcIj57c3RvcnlSYXRpbmcuc2hpcH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKFwic2hpcFwiKX0gID48RGlyZWN0aW9uc0JvYXRJY29uIHN0eWxlPXt7IGZvbnRTaXplOiBcIjEuOHJlbVwiIH19IC8+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3RvcnlSYXRpbmdDbGlja2VkLm1vbmV5ID8gXCJtb25leUFjdGl2ZVwiIDogXCJtb25leVwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1vbmV5UmF0aW5nXCI+e3N0b3J5UmF0aW5nLm1vbmV5fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soXCJtb25leVwiKX0gPiA8TG9jYWxBdG1JY29uIHN0eWxlPXt7IGZvbnRTaXplOiBcIjEuOHJlbVwiIH19IC8+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyBTVE9SWSBNQUlOIElNRyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyAgKi99XHJcblxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeV9fbWFpbkltZ0NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3N0b3J5LmltZ30gYWx0PXtzdG9yeS5pbWd9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyBTVE9SWSBNQUlOX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18gICovfVxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2RlbGV0ZUFsbH0gPmRlbGV0ZTwvYnV0dG9uPlxyXG5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcnlfX21haW5cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcnlfX21haW5BdXRob3JcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17c3RvcnkuYXV0aG9ySW1nfSBhbHQ9e3N0b3J5LmF1dGhvckltZ30gLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0b3J5X19tYWluQXV0aG9ySW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+e3N0b3J5LmF1dGhvcmhhbmRsZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57c3RvcnkuYXV0aG9yfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5GcmVlbGFuY2Ugc29mdHdhcmUgZGV2ZWxvcGVyIGFuZCB3cml0ZXIgd2l0aCBhIGJhY2tncm91bmQgaW4gQUksIGNyeXB0bywgYW5kIHF1YW50IGZpbmFuY2UuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcnlfX21haW5BdXRob3JTb2NpYWxJY29uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPjxMaW5rZWRJbkljb24gLz48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj48VHdpdHRlckljb24gLz48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj48R2l0SHViSWNvbiAvPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeV9fbWFpbkFydGljbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7c3RvcnkubWFpbkFydGljbGUubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcnlfX21haW5BcnRpY2xlSXRlbVwiIGtleT17aXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57aXRlbX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhc2hcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcnlfX2FydGlsZUljb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJoZWFydFwiPjxGYXZvcml0ZUljb24gc3R5bGU9e3sgZm9udFNpemU6IFwiMS41cmVtXCIgfX0gLz48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImVuZXJneVwiPjxPZmZsaW5lQm9sdEljb24gc3R5bGU9e3sgZm9udFNpemU6IFwiMS41cmVtXCIgfX0gLz48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJvYXRcIj48RGlyZWN0aW9uc0JvYXRJY29uIHN0eWxlPXt7IGZvbnRTaXplOiBcIjEuNXJlbVwiIH19IC8+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtb25leVwiPiA8TG9jYWxBdG1JY29uIHN0eWxlPXt7IGZvbnRTaXplOiBcIjEuNXJlbVwiIH19IC8+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIHtzdG9yeS5zdWJBcnRpY2xlcy5tYXAoKGFydGljbGUpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeV9fc3ViQXJ0aWNsZVwiIGtleT17YXJ0aWNsZS51cmx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPnthcnRpY2xlLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXJ0aWNsZS5hcnRpY2xlcy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5sZW5ndGggPT09IDEgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeV9fbWFpbkFydGljbGVJdGVtXCIga2V5PXtpdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57aXRlbX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXNoXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeV9fYXJ0aWxlSWNvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJoZWFydFwiPjxGYXZvcml0ZUljb24gc3R5bGU9e3sgZm9udFNpemU6IFwiMS41cmVtXCIgfX0gLz48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJlbmVyZ3lcIj48T2ZmbGluZUJvbHRJY29uIHN0eWxlPXt7IGZvbnRTaXplOiBcIjEuNXJlbVwiIH19IC8+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYm9hdFwiPjxEaXJlY3Rpb25zQm9hdEljb24gc3R5bGU9e3sgZm9udFNpemU6IFwiMS41cmVtXCIgfX0gLz48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtb25leVwiPiA8TG9jYWxBdG1JY29uIHN0eWxlPXt7IGZvbnRTaXplOiBcIjEuNXJlbVwiIH19IC8+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW1bMF0gPT09IFwicXVvdGVcIiA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpdGVtWzFdfSBjbGFzc05hbWU9XCJzdG9yeV9fYXJ0aWNsZVF1b3RlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57aXRlbVsxXX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpdGVtWzFdfSBjbGFzc05hbWU9XCJzdG9yeV9fYXJ0aWNsZUltZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW1bMV19IGFsdD17aXRlbVsyXX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcclxuICAgIGNvbnN0IHN0b3J5SWQgPSBwYXJhbXMuc3RvcnlJZDtcclxuICAgIGNvbnN0IGNyZWF0ZVJhdGluZ0ludCA9IHtcclxuICAgICAgICBpZDogcGFyc2VJbnQoc3RvcnlJZCksXHJcbiAgICAgICAgaGVhcnQ6IE1hdGguYWJzKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSooNy0wKzEpKzApKSxcclxuICAgICAgICBlbmVyZ3k6IE1hdGguYWJzKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSooNy0wKzEpKzApKSxcclxuICAgICAgICBzaGlwOiBNYXRoLmFicyhNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqKDctMCsxKSswKSksXHJcbiAgICAgICAgbW9uZXk6IE1hdGguYWJzKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSooNy0wKzEpKzApKSxcclxuICAgIH1cclxuICAgIGxldCByYXRpbmdieUlkID0gYXdhaXQgcHJpc21hLnJhdGluZ3MuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgICAgaWQ6IHBhcnNlSW50KHBhcmFtcy5zdG9yeUlkKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgaWYgKCFyYXRpbmdieUlkKSB7XHJcbiAgICAgICAgcmF0aW5nYnlJZCA9IGNyZWF0ZVJhdGluZ0ludDtcclxuICAgICAgICBjb25zdCBjcmVhdGVkUmF0aW5nID0gYXdhaXQgcHJpc21hLnJhdGluZ3MuY3JlYXRlKHtcclxuICAgICAgICAgICAgZGF0YTogY3JlYXRlUmF0aW5nSW50LFxyXG4gICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9oYWNrZXItc3Rvcmllcy8ke3N0b3J5SWR9YCk7XHJcbiAgICBjb25zdCBzdG9yeUJ5SWQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBzdG9yeUJ5SWQsXHJcbiAgICAgICAgICAgIHJhdGluZ2J5SWRcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0b3J5OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy9jcmVhdGVCcmVha3BvaW50c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRGlyZWN0aW9uc0JvYXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0Vjb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRmF2b3JpdGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0dpdEh1YlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTGlua2VkSW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0xvY2FsQXRtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9PZmZsaW5lQm9sdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVHVybmVkSW5Ob3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1R3aXR0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHByaXNtYS9jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiUHJpc21hQ2xpZW50IiwiVHVybmVkSW5Ob3RJY29uIiwiRmF2b3JpdGVJY29uIiwiT2ZmbGluZUJvbHRJY29uIiwiRGlyZWN0aW9uc0JvYXRJY29uIiwiTG9jYWxBdG1JY29uIiwiRWNvSWNvbiIsIkxpbmtlZEluSWNvbiIsIlR3aXR0ZXJJY29uIiwiR2l0SHViSWNvbiIsImNyZWF0ZUJyZWFrcG9pbnRzIiwicHJpc21hIiwiU3RvcnkiLCJzdG9yeUJ5SWQiLCJyYXRpbmdieUlkIiwiY29uc29sZSIsImxvZyIsInJhdGluZ0NsaWNrZWRJbnQiLCJoZWFydCIsImVuZXJneSIsInNoaXAiLCJtb25leSIsInJvdXRlciIsInN0b3J5Iiwic2V0U3RvcnkiLCJzdG9yeVJhdGluZyIsInNldFN0b3J5UmF0aW5nIiwic3RvcnlSYXRpbmdUb3RhbCIsIk9iamVjdCIsInZhbHVlcyIsInJlZHVjZSIsInByZXYiLCJjdXJyIiwic3RvcnlSYXRpbmdDbGlja2VkIiwic2V0U3RvcnlSYXRpbmdDbGlja2VkIiwidXBkYXRlUmF0aW5ncyIsIm5ld1JhdGluZyIsInVwZGF0ZWRSYXRpbmciLCJpZCIsInBhcnNlSW50IiwicXVlcnkiLCJzdG9yeUlkIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwianNvbiIsImRlbGV0ZUFsbCIsImhhbmRsZUNsaWNrIiwiaWNvblR5cGUiLCJ0aXRsZSIsImZvbnRTaXplIiwiaW1nIiwiYXV0aG9ySW1nIiwiYXV0aG9yaGFuZGxlIiwiYXV0aG9yIiwibWFpbkFydGljbGUiLCJtYXAiLCJpdGVtIiwic3ViQXJ0aWNsZXMiLCJhcnRpY2xlIiwiYXJ0aWNsZXMiLCJsZW5ndGgiLCJ1cmwiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJwYXJhbXMiLCJjcmVhdGVSYXRpbmdJbnQiLCJNYXRoIiwiYWJzIiwiZmxvb3IiLCJyYW5kb20iLCJyYXRpbmdzIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiY3JlYXRlZFJhdGluZyIsImNyZWF0ZSIsImRhdGEiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=