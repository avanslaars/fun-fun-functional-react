webpackHotUpdate(1,{

/***/ 352:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, __resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(38);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(27);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(28);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(40);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(39);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(13);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(449);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function (_Component) {
  (0, _inherits3.default)(_default, _Component);

  function _default() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, _default);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = _default.__proto__ || (0, _getPrototypeOf2.default)(_default)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      deckid: '',
      remaining: 0,
      drawCount: 1,
      cards: [],
      discardPile: []
    }, _this.changeDrawCount = function (evt) {
      return _this.setState({ drawCount: evt.target.value });
    }, _this.drawCards = function (evt) {
      fetch('https://deckofcardsapi.com/api/deck/' + _this.state.deckid + '/draw/?count=' + _this.state.drawCount).then(function (res) {
        return res.json();
      })
      // using the function version of setState to reference previous state (and props if needed with 2nd arg)
      .then(function (res) {
        return _this.setState(function (prevState) {
          return { cards: res.cards, remaining: res.remaining, discardPile: prevState.discardPile.concat(prevState.cards), drawCount: 1 };
        });
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(_default, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1').then(json)
      // Setting multiple state values from a single source object - no event
      .then(function (res) {
        return _this2.setState({ deckid: res.deck_id, remaining: res.remaining });
      });
    }

    // Setting state from typical event - basically boilerplate for normal inputs

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('input', { type: 'number', value: this.state.drawCount, onChange: this.changeDrawCount }),
        _react2.default.createElement(
          'button',
          { onClick: this.drawCards },
          'Draw Cards'
        ),
        _react2.default.createElement(
          'label',
          null,
          'Remaining Cards in Deck: ',
          this.state.remaining
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h2',
            null,
            'Current Cards'
          ),
          this.state.cards.map(function (c) {
            return _react2.default.createElement('img', { key: c.code, width: '200', src: c.images.png });
          }),
          _react2.default.createElement(
            'h3',
            null,
            'Discarded Cards:'
          ),
          this.state.discardPile.map(function (c) {
            return _react2.default.createElement('img', { key: c.code, width: '50', src: c.images.png });
          })
        )
      );
    }
  }]);
  return _default;
}(_react.Component);

exports.default = _default;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbInN0YXRlIiwiZGVja2lkIiwicmVtYWluaW5nIiwiZHJhd0NvdW50IiwiY2FyZHMiLCJkaXNjYXJkUGlsZSIsImNoYW5nZURyYXdDb3VudCIsImV2dCIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJkcmF3Q2FyZHMiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwicHJldlN0YXRlIiwiY29uY2F0IiwiZGVja19pZCIsIm1hcCIsImMiLCJjb2RlIiwiaW1hZ2VzIiwicG5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Z05BR0VBLEssR0FBUTtBQUNOQyxjQUFPLEVBREQ7QUFFTkMsaUJBQVUsQ0FGSjtBQUdOQyxpQkFBVSxDQUhKO0FBSU5DLGFBQU8sRUFKRDtBQUtOQyxtQkFBYTtBQUxQLEssUUFnQlJDLGUsR0FBa0IsVUFBQ0MsR0FBRDtBQUFBLGFBQVMsTUFBS0MsUUFBTCxDQUFjLEVBQUNMLFdBQVVJLElBQUlFLE1BQUosQ0FBV0MsS0FBdEIsRUFBZCxDQUFUO0FBQUEsSyxRQUVsQkMsUyxHQUFZLFVBQUNKLEdBQUQsRUFBUztBQUNuQksscURBQTZDLE1BQUtaLEtBQUwsQ0FBV0MsTUFBeEQscUJBQThFLE1BQUtELEtBQUwsQ0FBV0csU0FBekYsRUFDR1UsSUFESCxDQUNRO0FBQUEsZUFBT0MsSUFBSUMsSUFBSixFQUFQO0FBQUEsT0FEUjtBQUVFO0FBRkYsT0FHR0YsSUFISCxDQUdRO0FBQUEsZUFBTyxNQUFLTCxRQUFMLENBQWMsVUFBQ1EsU0FBRDtBQUFBLGlCQUFnQixFQUFDWixPQUFPVSxJQUFJVixLQUFaLEVBQW1CRixXQUFXWSxJQUFJWixTQUFsQyxFQUE2Q0csYUFBYVcsVUFBVVgsV0FBVixDQUFzQlksTUFBdEIsQ0FBNkJELFVBQVVaLEtBQXZDLENBQTFELEVBQXlHRCxXQUFXLENBQXBILEVBQWhCO0FBQUEsU0FBZCxDQUFQO0FBQUEsT0FIUjtBQUlELEs7Ozs7O3dDQWZtQjtBQUFBOztBQUNsQlMsNkVBQ0dDLElBREgsQ0FDUUUsSUFEUjtBQUVFO0FBRkYsT0FHR0YsSUFISCxDQUdRO0FBQUEsZUFBTyxPQUFLTCxRQUFMLENBQWMsRUFBQ1AsUUFBUWEsSUFBSUksT0FBYixFQUFzQmhCLFdBQVVZLElBQUlaLFNBQXBDLEVBQWQsQ0FBUDtBQUFBLE9BSFI7QUFJRDs7QUFFRDs7Ozs2QkFVUztBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0UsaURBQU8sTUFBSyxRQUFaLEVBQXFCLE9BQU8sS0FBS0YsS0FBTCxDQUFXRyxTQUF2QyxFQUFrRCxVQUFVLEtBQUtHLGVBQWpFLEdBREY7QUFFRTtBQUFBO0FBQUEsWUFBUSxTQUFTLEtBQUtLLFNBQXRCO0FBQUE7QUFBQSxTQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUE7QUFBaUMsZUFBS1gsS0FBTCxDQUFXRTtBQUE1QyxTQUhGO0FBSUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBRUcsZUFBS0YsS0FBTCxDQUFXSSxLQUFYLENBQWlCZSxHQUFqQixDQUFxQjtBQUFBLG1CQUFLLHVDQUFLLEtBQUtDLEVBQUVDLElBQVosRUFBa0IsT0FBTSxLQUF4QixFQUE4QixLQUFLRCxFQUFFRSxNQUFGLENBQVNDLEdBQTVDLEdBQUw7QUFBQSxXQUFyQixDQUZIO0FBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUhGO0FBSUcsZUFBS3ZCLEtBQUwsQ0FBV0ssV0FBWCxDQUF1QmMsR0FBdkIsQ0FBMkI7QUFBQSxtQkFBSyx1Q0FBSyxLQUFLQyxFQUFFQyxJQUFaLEVBQWtCLE9BQU0sSUFBeEIsRUFBNkIsS0FBS0QsRUFBRUUsTUFBRixDQUFTQyxHQUEzQyxHQUFMO0FBQUEsV0FBM0I7QUFKSDtBQUpGLE9BREY7QUFhRCIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYXZhbnNsYWFycy9Ecm9wYm94L3Byb2plY3RzL25leHQtcmFtZGEtc2FtcGxlcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgZGVja2lkOicnLFxuICAgIHJlbWFpbmluZzowLFxuICAgIGRyYXdDb3VudDoxLFxuICAgIGNhcmRzOiBbXSxcbiAgICBkaXNjYXJkUGlsZTogW11cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGZldGNoKGBodHRwczovL2RlY2tvZmNhcmRzYXBpLmNvbS9hcGkvZGVjay9uZXcvc2h1ZmZsZS8/ZGVja19jb3VudD0xYClcbiAgICAgIC50aGVuKGpzb24pXG4gICAgICAvLyBTZXR0aW5nIG11bHRpcGxlIHN0YXRlIHZhbHVlcyBmcm9tIGEgc2luZ2xlIHNvdXJjZSBvYmplY3QgLSBubyBldmVudFxuICAgICAgLnRoZW4ocmVzID0+IHRoaXMuc2V0U3RhdGUoe2RlY2tpZDogcmVzLmRlY2tfaWQsIHJlbWFpbmluZzpyZXMucmVtYWluaW5nfSkpXG4gIH1cblxuICAvLyBTZXR0aW5nIHN0YXRlIGZyb20gdHlwaWNhbCBldmVudCAtIGJhc2ljYWxseSBib2lsZXJwbGF0ZSBmb3Igbm9ybWFsIGlucHV0c1xuICBjaGFuZ2VEcmF3Q291bnQgPSAoZXZ0KSA9PiB0aGlzLnNldFN0YXRlKHtkcmF3Q291bnQ6ZXZ0LnRhcmdldC52YWx1ZX0pXG5cbiAgZHJhd0NhcmRzID0gKGV2dCkgPT4ge1xuICAgIGZldGNoKGBodHRwczovL2RlY2tvZmNhcmRzYXBpLmNvbS9hcGkvZGVjay8ke3RoaXMuc3RhdGUuZGVja2lkfS9kcmF3Lz9jb3VudD0ke3RoaXMuc3RhdGUuZHJhd0NvdW50fWApXG4gICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgIC8vIHVzaW5nIHRoZSBmdW5jdGlvbiB2ZXJzaW9uIG9mIHNldFN0YXRlIHRvIHJlZmVyZW5jZSBwcmV2aW91cyBzdGF0ZSAoYW5kIHByb3BzIGlmIG5lZWRlZCB3aXRoIDJuZCBhcmcpXG4gICAgICAudGhlbihyZXMgPT4gdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlKSA9PiAoe2NhcmRzOiByZXMuY2FyZHMsIHJlbWFpbmluZzogcmVzLnJlbWFpbmluZywgZGlzY2FyZFBpbGU6IHByZXZTdGF0ZS5kaXNjYXJkUGlsZS5jb25jYXQocHJldlN0YXRlLmNhcmRzKSwgZHJhd0NvdW50OiAxfSkpKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aW5wdXQgdHlwZT0nbnVtYmVyJyB2YWx1ZT17dGhpcy5zdGF0ZS5kcmF3Q291bnR9IG9uQ2hhbmdlPXt0aGlzLmNoYW5nZURyYXdDb3VudH0gLz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmRyYXdDYXJkc30+RHJhdyBDYXJkczwvYnV0dG9uPlxuICAgICAgICA8bGFiZWw+UmVtYWluaW5nIENhcmRzIGluIERlY2s6IHt0aGlzLnN0YXRlLnJlbWFpbmluZ308L2xhYmVsPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMj5DdXJyZW50IENhcmRzPC9oMj5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5jYXJkcy5tYXAoYyA9PiA8aW1nIGtleT17Yy5jb2RlfSB3aWR0aD1cIjIwMFwiIHNyYz17Yy5pbWFnZXMucG5nfS8+KX1cbiAgICAgICAgICA8aDM+RGlzY2FyZGVkIENhcmRzOjwvaDM+XG4gICAgICAgICAge3RoaXMuc3RhdGUuZGlzY2FyZFBpbGUubWFwKGMgPT4gPGltZyBrZXk9e2MuY29kZX0gd2lkdGg9XCI1MFwiIHNyYz17Yy5pbWFnZXMucG5nfS8+KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdfQ==

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/avanslaars/Dropbox/projects/next-ramda-samples/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/avanslaars/Dropbox/projects/next-ramda-samples/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(79)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcz85MWE5NDQ4Il0sIm5hbWVzIjpbInN0YXRlIiwiZGVja2lkIiwicmVtYWluaW5nIiwiZHJhd0NvdW50IiwiY2FyZHMiLCJkaXNjYXJkUGlsZSIsImNoYW5nZURyYXdDb3VudCIsImV2dCIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJkcmF3Q2FyZHMiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwicHJldlN0YXRlIiwiY29uY2F0IiwiZGVja19pZCIsIm1hcCIsImMiLCJjb2RlIiwiaW1hZ2VzIiwicG5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Z05BR0VBLEssR0FBUTtBQUNOQyxjQUFPLEVBREQ7QUFFTkMsaUJBQVUsQ0FGSjtBQUdOQyxpQkFBVSxDQUhKO0FBSU5DLGFBQU8sRUFKRDtBQUtOQyxtQkFBYTtBQUxQLEssUUFnQlJDLGUsR0FBa0IsVUFBQ0MsR0FBRDtBQUFBLGFBQVMsTUFBS0MsUUFBTCxDQUFjLEVBQUNMLFdBQVVJLElBQUlFLE1BQUosQ0FBV0MsS0FBdEIsRUFBZCxDQUFUO0FBQUEsSyxRQUVsQkMsUyxHQUFZLFVBQUNKLEdBQUQsRUFBUztBQUNuQksscURBQTZDLE1BQUtaLEtBQUwsQ0FBV0MsTUFBeEQscUJBQThFLE1BQUtELEtBQUwsQ0FBV0csU0FBekYsRUFDR1UsSUFESCxDQUNRO0FBQUEsZUFBT0MsSUFBSUMsSUFBSixFQUFQO0FBQUEsT0FEUjtBQUVFO0FBRkYsT0FHR0YsSUFISCxDQUdRO0FBQUEsZUFBTyxNQUFLTCxRQUFMLENBQWMsVUFBQ1EsU0FBRDtBQUFBLGlCQUFnQixFQUFDWixPQUFPVSxJQUFJVixLQUFaLEVBQW1CRixXQUFXWSxJQUFJWixTQUFsQyxFQUE2Q0csYUFBYVcsVUFBVVgsV0FBVixDQUFzQlksTUFBdEIsQ0FBNkJELFVBQVVaLEtBQXZDLENBQTFELEVBQXlHRCxXQUFXLENBQXBILEVBQWhCO0FBQUEsU0FBZCxDQUFQO0FBQUEsT0FIUjtBQUlELEs7Ozs7O3dDQWZtQjtBQUFBOztBQUNsQlMsNkVBQ0dDLElBREgsQ0FDUUUsSUFEUjtBQUVFO0FBRkYsT0FHR0YsSUFISCxDQUdRO0FBQUEsZUFBTyxPQUFLTCxRQUFMLENBQWMsRUFBQ1AsUUFBUWEsSUFBSUksT0FBYixFQUFzQmhCLFdBQVVZLElBQUlaLFNBQXBDLEVBQWQsQ0FBUDtBQUFBLE9BSFI7QUFJRDs7QUFFRDs7Ozs2QkFVUztBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0UsaURBQU8sTUFBSyxRQUFaLEVBQXFCLE9BQU8sS0FBS0YsS0FBTCxDQUFXRyxTQUF2QyxFQUFrRCxVQUFVLEtBQUtHLGVBQWpFLEdBREY7QUFFRTtBQUFBO0FBQUEsWUFBUSxTQUFTLEtBQUtLLFNBQXRCO0FBQUE7QUFBQSxTQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUE7QUFBaUMsZUFBS1gsS0FBTCxDQUFXRTtBQUE1QyxTQUhGO0FBSUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBRUcsZUFBS0YsS0FBTCxDQUFXSSxLQUFYLENBQWlCZSxHQUFqQixDQUFxQjtBQUFBLG1CQUFLLHVDQUFLLEtBQUtDLEVBQUVDLElBQVosRUFBa0IsT0FBTSxLQUF4QixFQUE4QixLQUFLRCxFQUFFRSxNQUFGLENBQVNDLEdBQTVDLEdBQUw7QUFBQSxXQUFyQixDQUZIO0FBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUhGO0FBSUcsZUFBS3ZCLEtBQUwsQ0FBV0ssV0FBWCxDQUF1QmMsR0FBdkIsQ0FBMkI7QUFBQSxtQkFBSyx1Q0FBSyxLQUFLQyxFQUFFQyxJQUFaLEVBQWtCLE9BQU0sSUFBeEIsRUFBNkIsS0FBS0QsRUFBRUUsTUFBRixDQUFTQyxHQUEzQyxHQUFMO0FBQUEsV0FBM0I7QUFKSDtBQUpGLE9BREY7QUFhRCIsImZpbGUiOiIxLmU3MjVkMjZjY2ZlMWQ1MWVmYmU5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICdpc29tb3JwaGljLWZldGNoJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGRlY2tpZDonJyxcbiAgICByZW1haW5pbmc6MCxcbiAgICBkcmF3Q291bnQ6MSxcbiAgICBjYXJkczogW10sXG4gICAgZGlzY2FyZFBpbGU6IFtdXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBmZXRjaChgaHR0cHM6Ly9kZWNrb2ZjYXJkc2FwaS5jb20vYXBpL2RlY2svbmV3L3NodWZmbGUvP2RlY2tfY291bnQ9MWApXG4gICAgICAudGhlbihqc29uKVxuICAgICAgLy8gU2V0dGluZyBtdWx0aXBsZSBzdGF0ZSB2YWx1ZXMgZnJvbSBhIHNpbmdsZSBzb3VyY2Ugb2JqZWN0IC0gbm8gZXZlbnRcbiAgICAgIC50aGVuKHJlcyA9PiB0aGlzLnNldFN0YXRlKHtkZWNraWQ6IHJlcy5kZWNrX2lkLCByZW1haW5pbmc6cmVzLnJlbWFpbmluZ30pKVxuICB9XG5cbiAgLy8gU2V0dGluZyBzdGF0ZSBmcm9tIHR5cGljYWwgZXZlbnQgLSBiYXNpY2FsbHkgYm9pbGVycGxhdGUgZm9yIG5vcm1hbCBpbnB1dHNcbiAgY2hhbmdlRHJhd0NvdW50ID0gKGV2dCkgPT4gdGhpcy5zZXRTdGF0ZSh7ZHJhd0NvdW50OmV2dC50YXJnZXQudmFsdWV9KVxuXG4gIGRyYXdDYXJkcyA9IChldnQpID0+IHtcbiAgICBmZXRjaChgaHR0cHM6Ly9kZWNrb2ZjYXJkc2FwaS5jb20vYXBpL2RlY2svJHt0aGlzLnN0YXRlLmRlY2tpZH0vZHJhdy8/Y291bnQ9JHt0aGlzLnN0YXRlLmRyYXdDb3VudH1gKVxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAvLyB1c2luZyB0aGUgZnVuY3Rpb24gdmVyc2lvbiBvZiBzZXRTdGF0ZSB0byByZWZlcmVuY2UgcHJldmlvdXMgc3RhdGUgKGFuZCBwcm9wcyBpZiBuZWVkZWQgd2l0aCAybmQgYXJnKVxuICAgICAgLnRoZW4ocmVzID0+IHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHtjYXJkczogcmVzLmNhcmRzLCByZW1haW5pbmc6IHJlcy5yZW1haW5pbmcsIGRpc2NhcmRQaWxlOiBwcmV2U3RhdGUuZGlzY2FyZFBpbGUuY29uY2F0KHByZXZTdGF0ZS5jYXJkcyksIGRyYXdDb3VudDogMX0pKSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0IHR5cGU9J251bWJlcicgdmFsdWU9e3RoaXMuc3RhdGUuZHJhd0NvdW50fSBvbkNoYW5nZT17dGhpcy5jaGFuZ2VEcmF3Q291bnR9IC8+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5kcmF3Q2FyZHN9PkRyYXcgQ2FyZHM8L2J1dHRvbj5cbiAgICAgICAgPGxhYmVsPlJlbWFpbmluZyBDYXJkcyBpbiBEZWNrOiB7dGhpcy5zdGF0ZS5yZW1haW5pbmd9PC9sYWJlbD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDI+Q3VycmVudCBDYXJkczwvaDI+XG4gICAgICAgICAge3RoaXMuc3RhdGUuY2FyZHMubWFwKGMgPT4gPGltZyBrZXk9e2MuY29kZX0gd2lkdGg9XCIyMDBcIiBzcmM9e2MuaW1hZ2VzLnBuZ30vPil9XG4gICAgICAgICAgPGgzPkRpc2NhcmRlZCBDYXJkczo8L2gzPlxuICAgICAgICAgIHt0aGlzLnN0YXRlLmRpc2NhcmRQaWxlLm1hcChjID0+IDxpbWcga2V5PXtjLmNvZGV9IHdpZHRoPVwiNTBcIiBzcmM9e2MuaW1hZ2VzLnBuZ30vPil9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJzb3VyY2VSb290IjoiIn0=