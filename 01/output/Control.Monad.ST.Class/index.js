// Generated by purs version 0.15.4
import * as Control_Category from "../Control.Category/index.js";
import * as Control_Monad_ST_Global from "../Control.Monad.ST.Global/index.js";
import * as Control_Monad_ST_Internal from "../Control.Monad.ST.Internal/index.js";
import * as Effect from "../Effect/index.js";
var monadSTST = {
    liftST: /* #__PURE__ */ Control_Category.identity(Control_Category.categoryFn),
    Monad0: function () {
        return Control_Monad_ST_Internal.monadST;
    }
};
var monadSTEffect = {
    liftST: Control_Monad_ST_Global.toEffect,
    Monad0: function () {
        return Effect.monadEffect;
    }
};
var liftST = function (dict) {
    return dict.liftST;
};
export {
    liftST,
    monadSTEffect,
    monadSTST
};
