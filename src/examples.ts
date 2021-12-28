
export default {
	'async': `function _main() {
		_main = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
			return regeneratorRuntime.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							console.log(0);
	
							if (!(a == 1)) {
								_context.next = 6;
								break;
							}
	
							_context.next = 4;
							return hello(1);
	
						case 4:
							_context.next = 8;
							break;
	
						case 6:
							_context.next = 8;
							return hello(2);
	
						case 8:
							console.log(3);
	
						case 9:
						case "end":
							return _context.stop();
					}
				}
			}, _callee);
		}));
		return _main.apply(this, arguments);
	}`,
}
