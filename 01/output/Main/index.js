import * as Control_Bind from "../Control.Bind/index.js";
import * as Data_Array from "../Data.Array/index.js";
import * as Data_Foldable from "../Data.Foldable/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Int from "../Data.Int/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Ord from "../Data.Ord/index.js";
import * as Data_Semiring from "../Data.Semiring/index.js";
import * as Data_Show from "../Data.Show/index.js";
import * as Data_String_Common from "../Data.String.Common/index.js";
import * as Data_Traversable from "../Data.Traversable/index.js";
import * as Effect_Aff from "../Effect.Aff/index.js";
import * as Effect_Class from "../Effect.Class/index.js";
import * as Effect_Class_Console from "../Effect.Class.Console/index.js";
import * as Node_Encoding from "../Node.Encoding/index.js";
import * as Node_FS_Aff from "../Node.FS.Aff/index.js";
var traverse = /* #__PURE__ */ Data_Traversable.traverse(Data_Traversable.traversableArray)(Data_Maybe.applicativeMaybe);
var map = /* #__PURE__ */ Data_Functor.map(Data_Maybe.functorMaybe);
var sum = /* #__PURE__ */ Data_Foldable.sum(Data_Foldable.foldableArray)(Data_Semiring.semiringInt);
var sort = /* #__PURE__ */ Data_Array.sort(Data_Ord.ordInt);
var liftEffect = /* #__PURE__ */ Effect_Class.liftEffect(Effect_Aff.monadEffectAff);
var logShow = /* #__PURE__ */ Effect_Class_Console.logShow(Effect_Class.monadEffectEffect)(/* #__PURE__ */ Data_Maybe.showMaybe(Data_Show.showInt));
var splitStrings = /* #__PURE__ */ Data_String_Common.split("\x0a");
var splitLines = /* #__PURE__ */ Data_String_Common.split("\x0a\x0a");
var numberifyStringArray = /* #__PURE__ */ traverse(Data_Int.fromString);
var sumFromNumbersString = /* #__PURE__ */ (function () {
    var $14 = map(sum);
    return function ($15) {
        return $14(numberifyStringArray(splitStrings($15)));
    };
})();
var getSumOfNLargest = function (s) {
    return function (n) {
        var numberArrays = traverse(sumFromNumbersString)(splitLines(s));
        return map((function () {
            var $16 = Data_Array.take(n);
            return function ($17) {
                return sum($16(Data_Array.reverse(sort($17))));
            };
        })())(numberArrays);
    };
};
var main = /* #__PURE__ */ (function () {
    return Effect_Aff.launchAff_(Control_Bind.bind(Effect_Aff.bindAff)(Node_FS_Aff.readTextFile(Node_Encoding.UTF8.value)("input"))(function (input) {
        var result = getSumOfNLargest(input)(3);
        return liftEffect(logShow(result));
    }));
})();
var getArrayOfArrays = /* #__PURE__ */ (function () {
    var $18 = Data_Functor.map(Data_Functor.functorArray)(splitLines);
    return function ($19) {
        return $18(splitStrings($19));
    };
})();
export {
    splitLines,
    splitStrings,
    numberifyStringArray,
    getArrayOfArrays,
    sumFromNumbersString,
    getSumOfNLargest,
    main
};
