var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SonAccount = /** @class */ (function () {
    function SonAccount(_balanceInit) {
        var _this = this;
        this.balanceInit = 0;
        this.oneDeposit = function (primoVersamento) {
            return "Saldo Iniziale = ".concat(_this.balanceInit, "\u20AC\nPrimo Versamento = ").concat(primoVersamento, "\u20AC");
        };
        this.oneWhiteDraw = function (primoVersamento, primoPrelievo) {
            return "".concat(_this.oneDeposit(primoVersamento), "\nPrimo Prelievo = ").concat(primoPrelievo, "\u20AC");
        };
        this.twoDeposit = function (primoVersamento, primoPrelievo, secondoVersamento) {
            return "".concat(_this.oneWhiteDraw(primoVersamento, primoPrelievo), "\nSecondo Versamento = ").concat(secondoVersamento, "\u20AC");
        };
        this.twoWithDraw = function (primoVersamento, primoPrelievo, secondoVersamento, secondoPrelievo) {
            return "".concat(_this.twoDeposit(primoVersamento, primoPrelievo, secondoVersamento), "\nSecondo Prelievo = ").concat(secondoPrelievo, "\u20AC\nIl saldo finale \u00E8 = ").concat(_this.balanceInit + primoVersamento + secondoVersamento - primoPrelievo - secondoPrelievo, "\u20AC");
        };
        this.balanceInit = _balanceInit;
    }
    return SonAccount;
}());
var MotherAccount = /** @class */ (function (_super) {
    __extends(MotherAccount, _super);
    function MotherAccount(_balanceInit) {
        var _this = _super.call(this, _balanceInit) || this;
        _this.balanceInit = 0;
        _this.oneDeposit = function (primoVersamento) {
            return "Saldo Iniziale = ".concat(_this.balanceInit, "\u20AC\nPrimo Versamento ").concat(primoVersamento, "\u20AC");
        };
        _this.oneWhiteDraw = function (primoVersamento, primoPrelievo) {
            return "".concat(_this.oneDeposit(primoVersamento), "\nPrimo Prelievo ").concat(primoPrelievo, "\u20AC");
        };
        _this.twoDeposit = function (primoVersamento, primoPrelievo, secondoVersamento) {
            return "".concat(_this.oneWhiteDraw(primoVersamento, primoPrelievo), "\nSecondo Versamento ").concat(secondoVersamento, "\u20AC");
        };
        _this.twoWithDraw = function (primoVersamento, primoPrelievo, secondoVersamento, secondoPrelievo) {
            return "".concat(_this.twoDeposit(primoVersamento, primoPrelievo, secondoVersamento), "\nSecondo Prelievo ").concat(secondoPrelievo, "\u20AC\nIl saldo finale \u00E8 ").concat(_this.balanceInit + primoVersamento + secondoVersamento - primoPrelievo - secondoPrelievo, "\u20AC");
        };
        _this.addInterest = function (primoVersamento, primoPrelievo, secondoVersamento, secondoPrelievo) {
            return "".concat(_this.twoWithDraw(primoVersamento, primoPrelievo, secondoVersamento, secondoPrelievo), "\nL'interesse maturato \u00E8 di ").concat((_this.balanceInit + primoVersamento + secondoVersamento - primoPrelievo - secondoPrelievo) / 100 * 20, "\u20AC\nIl saldo netto \u00E8 ").concat((_this.balanceInit + primoVersamento + secondoVersamento - primoPrelievo - secondoPrelievo) - (_this.balanceInit + primoVersamento + secondoVersamento - primoPrelievo - secondoPrelievo) / 100 * 20, "\u20AC");
        };
        return _this;
    }
    return MotherAccount;
}(SonAccount));
var sonAccount = new SonAccount(0);
var momAccount = new MotherAccount(0);
//console.log(sonAccount.twoWithDraw(1000, 10,750,45))
console.log(momAccount.addInterest(300, 34, 890, 564));
