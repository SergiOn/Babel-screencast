let getDataAsync = (() => {
    var _ref = _asyncToGenerator(function* () {
        let data = yield getData();
        console.log(data);
    });

    return function getDataAsync() {
        return _ref.apply(this, arguments);
    };
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

require('babel-polyfill');

function getData() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('Async');
        }, 2000);
    });
}

getDataAsync();