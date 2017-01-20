'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = require('/Users/avanslaars/Dropbox/projects/next-ramda-samples/node_modules/next/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('/Users/avanslaars/Dropbox/projects/next-ramda-samples/node_modules/next/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('/Users/avanslaars/Dropbox/projects/next-ramda-samples/node_modules/next/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('/Users/avanslaars/Dropbox/projects/next-ramda-samples/node_modules/next/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('/Users/avanslaars/Dropbox/projects/next-ramda-samples/node_modules/next/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('/Users/avanslaars/Dropbox/projects/next-ramda-samples/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

require('isomorphic-fetch');

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