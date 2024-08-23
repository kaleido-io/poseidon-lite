"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.poseidon7 = poseidon7;
var _poseidon = _interopRequireDefault(require("./poseidon"));
var _unstringify = _interopRequireDefault(require("./poseidon/unstringify"));
var _ = _interopRequireDefault(require("./constants/7"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const c = (0, _unstringify.default)(_.default);
function poseidon7(inputs, nOuts) {
  return (0, _poseidon.default)(inputs, c, nOuts);
}