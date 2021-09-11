"use strict";
(() => {
var exports = {};
exports.id = "pages/api/storyratings";
exports.ids = ["pages/api/storyratings"];
exports.modules = {

/***/ "./pages/api/storyratings.js":
/*!***********************************!*\
  !*** ./pages/api/storyratings.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {
  // const data = JSON.parse(req.body)
  switch (req.method) {
    case "POST":
      const data = JSON.parse(req.body);
      const createRating = await prisma.ratings.create({
        data
      });
      break;

    case "DELETE":
      const deletedRatings = await prisma.ratings.deleteMany({});
      res.json(deletedRatings);
      break;

    case "PATCH":
      const updatedRatingData = JSON.parse(req.body);
      const updateRating = await prisma.ratings.update({
        where: {
          id: updatedRatingData.id
        },
        data: updatedRatingData
      });

    default:
      const allRatings = await prisma.ratings.findMany({});
      res.json(allRatings);
      break;
  }
});

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/storyratings.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL3N0b3J5cmF0aW5ncy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxNQUFNQyxNQUFNLEdBQUcsSUFBSUQsd0RBQUosRUFBZjtBQUVBLGlFQUFlLE9BQU9FLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUMvQjtBQUVBLFVBQVFELEdBQUcsQ0FBQ0UsTUFBWjtBQUNJLFNBQUssTUFBTDtBQUNJLFlBQU1DLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdMLEdBQUcsQ0FBQ00sSUFBZixDQUFiO0FBQ0EsWUFBTUMsWUFBWSxHQUFHLE1BQU1SLE1BQU0sQ0FBQ1MsT0FBUCxDQUFlQyxNQUFmLENBQXNCO0FBQUVOLFFBQUFBO0FBQUYsT0FBdEIsQ0FBM0I7QUFDQTs7QUFDSixTQUFLLFFBQUw7QUFDSSxZQUFNTyxjQUFjLEdBQUcsTUFBTVgsTUFBTSxDQUFDUyxPQUFQLENBQWVHLFVBQWYsQ0FBMEIsRUFBMUIsQ0FBN0I7QUFDQVYsTUFBQUEsR0FBRyxDQUFDVyxJQUFKLENBQVNGLGNBQVQ7QUFDQTs7QUFDSixTQUFLLE9BQUw7QUFDSSxZQUFNRyxpQkFBaUIsR0FBR1QsSUFBSSxDQUFDQyxLQUFMLENBQVdMLEdBQUcsQ0FBQ00sSUFBZixDQUExQjtBQUNBLFlBQU1RLFlBQVksR0FBRyxNQUFNZixNQUFNLENBQUNTLE9BQVAsQ0FBZU8sTUFBZixDQUFzQjtBQUM3Q0MsUUFBQUEsS0FBSyxFQUFFO0FBQ0hDLFVBQUFBLEVBQUUsRUFBRUosaUJBQWlCLENBQUNJO0FBRG5CLFNBRHNDO0FBSTdDZCxRQUFBQSxJQUFJLEVBQUVVO0FBSnVDLE9BQXRCLENBQTNCOztBQU9KO0FBQ0ksWUFBTUssVUFBVSxHQUFHLE1BQU1uQixNQUFNLENBQUNTLE9BQVAsQ0FBZVcsUUFBZixDQUF3QixFQUF4QixDQUF6QjtBQUNBbEIsTUFBQUEsR0FBRyxDQUFDVyxJQUFKLENBQVNNLFVBQVQ7QUFDQTtBQXJCUjtBQTJCSCxDQTlCRDs7Ozs7Ozs7OztBQ0hBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGFja2Vybm9vbl9zdG9yeXBhZ2UvLi9wYWdlcy9hcGkvc3RvcnlyYXRpbmdzLmpzIiwid2VicGFjazovL2hhY2tlcm5vb25fc3RvcnlwYWdlL2V4dGVybmFsIFwiQHByaXNtYS9jbGllbnRcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIlxyXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIC8vIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHJlcS5ib2R5KVxyXG5cclxuICAgIHN3aXRjaCAocmVxLm1ldGhvZCkge1xyXG4gICAgICAgIGNhc2UgXCJQT1NUXCI6XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHJlcS5ib2R5KVxyXG4gICAgICAgICAgICBjb25zdCBjcmVhdGVSYXRpbmcgPSBhd2FpdCBwcmlzbWEucmF0aW5ncy5jcmVhdGUoeyBkYXRhIH0pXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJERUxFVEVcIjpcclxuICAgICAgICAgICAgY29uc3QgZGVsZXRlZFJhdGluZ3MgPSBhd2FpdCBwcmlzbWEucmF0aW5ncy5kZWxldGVNYW55KHt9KVxyXG4gICAgICAgICAgICByZXMuanNvbihkZWxldGVkUmF0aW5ncylcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIlBBVENIXCI6XHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRSYXRpbmdEYXRhID0gSlNPTi5wYXJzZShyZXEuYm9keSlcclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlUmF0aW5nID0gYXdhaXQgcHJpc21hLnJhdGluZ3MudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHVwZGF0ZWRSYXRpbmdEYXRhLmlkXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZGF0YTogdXBkYXRlZFJhdGluZ0RhdGEsXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGNvbnN0IGFsbFJhdGluZ3MgPSBhd2FpdCBwcmlzbWEucmF0aW5ncy5maW5kTWFueSh7fSlcclxuICAgICAgICAgICAgcmVzLmpzb24oYWxsUmF0aW5ncylcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG5cclxuICAgIH1cclxuXHJcblxyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBwcmlzbWEvY2xpZW50XCIpOyJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwiYm9keSIsImNyZWF0ZVJhdGluZyIsInJhdGluZ3MiLCJjcmVhdGUiLCJkZWxldGVkUmF0aW5ncyIsImRlbGV0ZU1hbnkiLCJqc29uIiwidXBkYXRlZFJhdGluZ0RhdGEiLCJ1cGRhdGVSYXRpbmciLCJ1cGRhdGUiLCJ3aGVyZSIsImlkIiwiYWxsUmF0aW5ncyIsImZpbmRNYW55Il0sInNvdXJjZVJvb3QiOiIifQ==