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

    case "GET":
      const allRatings = await prisma.ratings.findMany({});
      res.json(allRatings);
      break;

    default:
      res.setHeader("allow", ['GET', 'PATCH', "DELETE", "POST"]);
      res.status(405).end(`Method ${req.method} not allowed`).catch(err => console.log(err));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL3N0b3J5cmF0aW5ncy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxNQUFNQyxNQUFNLEdBQUcsSUFBSUQsd0RBQUosRUFBZjtBQUVBLGlFQUFlLE9BQU9FLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUMvQjtBQUVBLFVBQVFELEdBQUcsQ0FBQ0UsTUFBWjtBQUNJLFNBQUssTUFBTDtBQUNJLFlBQU1DLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdMLEdBQUcsQ0FBQ00sSUFBZixDQUFiO0FBQ0EsWUFBTUMsWUFBWSxHQUFHLE1BQU1SLE1BQU0sQ0FBQ1MsT0FBUCxDQUFlQyxNQUFmLENBQXNCO0FBQUVOLFFBQUFBO0FBQUYsT0FBdEIsQ0FBM0I7QUFDQTs7QUFDSixTQUFLLFFBQUw7QUFDSSxZQUFNTyxjQUFjLEdBQUcsTUFBTVgsTUFBTSxDQUFDUyxPQUFQLENBQWVHLFVBQWYsQ0FBMEIsRUFBMUIsQ0FBN0I7QUFDQVYsTUFBQUEsR0FBRyxDQUFDVyxJQUFKLENBQVNGLGNBQVQ7QUFDQTs7QUFDSixTQUFLLE9BQUw7QUFDSSxZQUFNRyxpQkFBaUIsR0FBR1QsSUFBSSxDQUFDQyxLQUFMLENBQVdMLEdBQUcsQ0FBQ00sSUFBZixDQUExQjtBQUNBLFlBQU1RLFlBQVksR0FBRyxNQUFNZixNQUFNLENBQUNTLE9BQVAsQ0FBZU8sTUFBZixDQUFzQjtBQUM3Q0MsUUFBQUEsS0FBSyxFQUFFO0FBQ0hDLFVBQUFBLEVBQUUsRUFBRUosaUJBQWlCLENBQUNJO0FBRG5CLFNBRHNDO0FBSTdDZCxRQUFBQSxJQUFJLEVBQUVVO0FBSnVDLE9BQXRCLENBQTNCOztBQU1KLFNBQUssS0FBTDtBQUNJLFlBQU1LLFVBQVUsR0FBRyxNQUFNbkIsTUFBTSxDQUFDUyxPQUFQLENBQWVXLFFBQWYsQ0FBd0IsRUFBeEIsQ0FBekI7QUFDQWxCLE1BQUFBLEdBQUcsQ0FBQ1csSUFBSixDQUFTTSxVQUFUO0FBQ0E7O0FBQ0o7QUFDSWpCLE1BQUFBLEdBQUcsQ0FBQ21CLFNBQUosQ0FBYyxPQUFkLEVBQXVCLENBQUMsS0FBRCxFQUFRLE9BQVIsRUFBaUIsUUFBakIsRUFBMkIsTUFBM0IsQ0FBdkI7QUFDQW5CLE1BQUFBLEdBQUcsQ0FBQ29CLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxHQUFoQixDQUFxQixVQUFTdEIsR0FBRyxDQUFDRSxNQUFPLGNBQXpDLEVBQXdEcUIsS0FBeEQsQ0FBOERDLEdBQUcsSUFBSUMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVosQ0FBckU7QUF2QlI7QUE0QkgsQ0EvQkQ7Ozs7Ozs7Ozs7QUNIQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hhY2tlcm5vb25fc3RvcnlwYWdlLy4vcGFnZXMvYXBpL3N0b3J5cmF0aW5ncy5qcyIsIndlYnBhY2s6Ly9oYWNrZXJub29uX3N0b3J5cGFnZS9leHRlcm5hbCBcIkBwcmlzbWEvY2xpZW50XCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCJcclxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICAvLyBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShyZXEuYm9keSlcclxuXHJcbiAgICBzd2l0Y2ggKHJlcS5tZXRob2QpIHtcclxuICAgICAgICBjYXNlIFwiUE9TVFwiOlxyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShyZXEuYm9keSlcclxuICAgICAgICAgICAgY29uc3QgY3JlYXRlUmF0aW5nID0gYXdhaXQgcHJpc21hLnJhdGluZ3MuY3JlYXRlKHsgZGF0YSB9KVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiREVMRVRFXCI6XHJcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZWRSYXRpbmdzID0gYXdhaXQgcHJpc21hLnJhdGluZ3MuZGVsZXRlTWFueSh7fSlcclxuICAgICAgICAgICAgcmVzLmpzb24oZGVsZXRlZFJhdGluZ3MpXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJQQVRDSFwiOlxyXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkUmF0aW5nRGF0YSA9IEpTT04ucGFyc2UocmVxLmJvZHkpXHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZVJhdGluZyA9IGF3YWl0IHByaXNtYS5yYXRpbmdzLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiB1cGRhdGVkUmF0aW5nRGF0YS5pZFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHVwZGF0ZWRSYXRpbmdEYXRhLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIGNhc2UgXCJHRVRcIjpcclxuICAgICAgICAgICAgY29uc3QgYWxsUmF0aW5ncyA9IGF3YWl0IHByaXNtYS5yYXRpbmdzLmZpbmRNYW55KHt9KVxyXG4gICAgICAgICAgICByZXMuanNvbihhbGxSYXRpbmdzKVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXMuc2V0SGVhZGVyKFwiYWxsb3dcIiwgWydHRVQnLCAnUEFUQ0gnLCBcIkRFTEVURVwiLCBcIlBPU1RcIl0pO1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwNSkuZW5kKGBNZXRob2QgJHtyZXEubWV0aG9kfSBub3QgYWxsb3dlZGApLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG5cclxuICAgIH1cclxuXHJcblxyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBwcmlzbWEvY2xpZW50XCIpOyJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwiYm9keSIsImNyZWF0ZVJhdGluZyIsInJhdGluZ3MiLCJjcmVhdGUiLCJkZWxldGVkUmF0aW5ncyIsImRlbGV0ZU1hbnkiLCJqc29uIiwidXBkYXRlZFJhdGluZ0RhdGEiLCJ1cGRhdGVSYXRpbmciLCJ1cGRhdGUiLCJ3aGVyZSIsImlkIiwiYWxsUmF0aW5ncyIsImZpbmRNYW55Iiwic2V0SGVhZGVyIiwic3RhdHVzIiwiZW5kIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==