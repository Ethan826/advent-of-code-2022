// Generated by purs version 0.15.4
import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Control_Apply from "../Control.Apply/index.js";
import * as Data_Either from "../Data.Either/index.js";
import * as Data_FoldableWithIndex from "../Data.FoldableWithIndex/index.js";
import * as Data_Function from "../Data.Function/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Functor_App from "../Data.Functor.App/index.js";
import * as Data_Functor_Compose from "../Data.Functor.Compose/index.js";
import * as Data_Functor_Coproduct from "../Data.Functor.Coproduct/index.js";
import * as Data_Functor_Product from "../Data.Functor.Product/index.js";
import * as Data_FunctorWithIndex from "../Data.FunctorWithIndex/index.js";
import * as Data_Identity from "../Data.Identity/index.js";
import * as Data_Traversable from "../Data.Traversable/index.js";
import * as Data_Traversable_Accum from "../Data.Traversable.Accum/index.js";
import * as Data_Traversable_Accum_Internal from "../Data.Traversable.Accum.Internal/index.js";
import * as Data_Tuple from "../Data.Tuple/index.js";
import * as Data_Unit from "../Data.Unit/index.js";
var traverse = /* #__PURE__ */ Data_Traversable.traverse(Data_Traversable.traversableMultiplicative);
var traverse1 = /* #__PURE__ */ Data_Traversable.traverse(Data_Traversable.traversableMaybe);
var traverse2 = /* #__PURE__ */ Data_Traversable.traverse(Data_Traversable.traversableLast);
var traverse3 = /* #__PURE__ */ Data_Traversable.traverse(Data_Traversable.traversableFirst);
var traverse4 = /* #__PURE__ */ Data_Traversable.traverse(Data_Traversable.traversableDual);
var traverse5 = /* #__PURE__ */ Data_Traversable.traverse(Data_Traversable.traversableDisj);
var traverse6 = /* #__PURE__ */ Data_Traversable.traverse(Data_Traversable.traversableConj);
var traverse7 = /* #__PURE__ */ Data_Traversable.traverse(Data_Traversable.traversableAdditive);
var traverseWithIndexDefault = function (dictTraversableWithIndex) {
    var sequence = Data_Traversable.sequence(dictTraversableWithIndex.Traversable2());
    var mapWithIndex = Data_FunctorWithIndex.mapWithIndex(dictTraversableWithIndex.FunctorWithIndex0());
    return function (dictApplicative) {
        var sequence1 = sequence(dictApplicative);
        return function (f) {
            var $174 = mapWithIndex(f);
            return function ($175) {
                return sequence1($174($175));
            };
        };
    };
};
var traverseWithIndex = function (dict) {
    return dict.traverseWithIndex;
};
var traverseDefault = function (dictTraversableWithIndex) {
    var traverseWithIndex1 = traverseWithIndex(dictTraversableWithIndex);
    return function (dictApplicative) {
        var traverseWithIndex2 = traverseWithIndex1(dictApplicative);
        return function (f) {
            return traverseWithIndex2(Data_Function["const"](f));
        };
    };
};
var traversableWithIndexTuple = {
    traverseWithIndex: function (dictApplicative) {
        var map = Data_Functor.map((dictApplicative.Apply0()).Functor0());
        return function (f) {
            return function (v) {
                return map(Data_Tuple.Tuple.create(v.value0))(f(Data_Unit.unit)(v.value1));
            };
        };
    },
    FunctorWithIndex0: function () {
        return Data_FunctorWithIndex.functorWithIndexTuple;
    },
    FoldableWithIndex1: function () {
        return Data_FoldableWithIndex.foldableWithIndexTuple;
    },
    Traversable2: function () {
        return Data_Traversable.traversableTuple;
    }
};
var traversableWithIndexProduct = function (dictTraversableWithIndex) {
    var traverseWithIndex1 = traverseWithIndex(dictTraversableWithIndex);
    var functorWithIndexProduct = Data_FunctorWithIndex.functorWithIndexProduct(dictTraversableWithIndex.FunctorWithIndex0());
    var foldableWithIndexProduct = Data_FoldableWithIndex.foldableWithIndexProduct(dictTraversableWithIndex.FoldableWithIndex1());
    var traversableProduct = Data_Traversable.traversableProduct(dictTraversableWithIndex.Traversable2());
    return function (dictTraversableWithIndex1) {
        var traverseWithIndex2 = traverseWithIndex(dictTraversableWithIndex1);
        var functorWithIndexProduct1 = functorWithIndexProduct(dictTraversableWithIndex1.FunctorWithIndex0());
        var foldableWithIndexProduct1 = foldableWithIndexProduct(dictTraversableWithIndex1.FoldableWithIndex1());
        var traversableProduct1 = traversableProduct(dictTraversableWithIndex1.Traversable2());
        return {
            traverseWithIndex: function (dictApplicative) {
                var lift2 = Control_Apply.lift2(dictApplicative.Apply0());
                var traverseWithIndex3 = traverseWithIndex1(dictApplicative);
                var traverseWithIndex4 = traverseWithIndex2(dictApplicative);
                return function (f) {
                    return function (v) {
                        return lift2(Data_Functor_Product.product)(traverseWithIndex3(function ($176) {
                            return f(Data_Either.Left.create($176));
                        })(v.value0))(traverseWithIndex4(function ($177) {
                            return f(Data_Either.Right.create($177));
                        })(v.value1));
                    };
                };
            },
            FunctorWithIndex0: function () {
                return functorWithIndexProduct1;
            },
            FoldableWithIndex1: function () {
                return foldableWithIndexProduct1;
            },
            Traversable2: function () {
                return traversableProduct1;
            }
        };
    };
};
var traversableWithIndexMultiplicative = {
    traverseWithIndex: function (dictApplicative) {
        var traverse8 = traverse(dictApplicative);
        return function (f) {
            return traverse8(f(Data_Unit.unit));
        };
    },
    FunctorWithIndex0: function () {
        return Data_FunctorWithIndex.functorWithIndexMultiplicative;
    },
    FoldableWithIndex1: function () {
        return Data_FoldableWithIndex.foldableWithIndexMultiplicative;
    },
    Traversable2: function () {
        return Data_Traversable.traversableMultiplicative;
    }
};
var traversableWithIndexMaybe = {
    traverseWithIndex: function (dictApplicative) {
        var traverse8 = traverse1(dictApplicative);
        return function (f) {
            return traverse8(f(Data_Unit.unit));
        };
    },
    FunctorWithIndex0: function () {
        return Data_FunctorWithIndex.functorWithIndexMaybe;
    },
    FoldableWithIndex1: function () {
        return Data_FoldableWithIndex.foldableWithIndexMaybe;
    },
    Traversable2: function () {
        return Data_Traversable.traversableMaybe;
    }
};
var traversableWithIndexLast = {
    traverseWithIndex: function (dictApplicative) {
        var traverse8 = traverse2(dictApplicative);
        return function (f) {
            return traverse8(f(Data_Unit.unit));
        };
    },
    FunctorWithIndex0: function () {
        return Data_FunctorWithIndex.functorWithIndexLast;
    },
    FoldableWithIndex1: function () {
        return Data_FoldableWithIndex.foldableWithIndexLast;
    },
    Traversable2: function () {
        return Data_Traversable.traversableLast;
    }
};
var traversableWithIndexIdentity = {
    traverseWithIndex: function (dictApplicative) {
        var map = Data_Functor.map((dictApplicative.Apply0()).Functor0());
        return function (f) {
            return function (v) {
                return map(Data_Identity.Identity)(f(Data_Unit.unit)(v));
            };
        };
    },
    FunctorWithIndex0: function () {
        return Data_FunctorWithIndex.functorWithIndexIdentity;
    },
    FoldableWithIndex1: function () {
        return Data_FoldableWithIndex.foldableWithIndexIdentity;
    },
    Traversable2: function () {
        return Data_Traversable.traversableIdentity;
    }
};
var traversableWithIndexFirst = {
    traverseWithIndex: function (dictApplicative) {
        var traverse8 = traverse3(dictApplicative);
        return function (f) {
            return traverse8(f(Data_Unit.unit));
        };
    },
    FunctorWithIndex0: function () {
        return Data_FunctorWithIndex.functorWithIndexFirst;
    },
    FoldableWithIndex1: function () {
        return Data_FoldableWithIndex.foldableWithIndexFirst;
    },
    Traversable2: function () {
        return Data_Traversable.traversableFirst;
    }
};
var traversableWithIndexEither = {
    traverseWithIndex: function (dictApplicative) {
        var pure = Control_Applicative.pure(dictApplicative);
        var map = Data_Functor.map((dictApplicative.Apply0()).Functor0());
        return function (v) {
            return function (v1) {
                if (v1 instanceof Data_Either.Left) {
                    return pure(new Data_Either.Left(v1.value0));
                };
                if (v1 instanceof Data_Either.Right) {
                    return map(Data_Either.Right.create)(v(Data_Unit.unit)(v1.value0));
                };
                throw new Error("Failed pattern match at Data.TraversableWithIndex (line 95, column 1 - line 97, column 53): " + [ v.constructor.name, v1.constructor.name ]);
            };
        };
    },
    FunctorWithIndex0: function () {
        return Data_FunctorWithIndex.functorWithIndexEither;
    },
    FoldableWithIndex1: function () {
        return Data_FoldableWithIndex.foldableWithIndexEither;
    },
    Traversable2: function () {
        return Data_Traversable.traversableEither;
    }
};
var traversableWithIndexDual = {
    traverseWithIndex: function (dictApplicative) {
        var traverse8 = traverse4(dictApplicative);
        return function (f) {
            return traverse8(f(Data_Unit.unit));
        };
    },
    FunctorWithIndex0: function () {
        return Data_FunctorWithIndex.functorWithIndexDual;
    },
    FoldableWithIndex1: function () {
        return Data_FoldableWithIndex.foldableWithIndexDual;
    },
    Traversable2: function () {
        return Data_Traversable.traversableDual;
    }
};
var traversableWithIndexDisj = {
    traverseWithIndex: function (dictApplicative) {
        var traverse8 = traverse5(dictApplicative);
        return function (f) {
            return traverse8(f(Data_Unit.unit));
        };
    },
    FunctorWithIndex0: function () {
        return Data_FunctorWithIndex.functorWithIndexDisj;
    },
    FoldableWithIndex1: function () {
        return Data_FoldableWithIndex.foldableWithIndexDisj;
    },
    Traversable2: function () {
        return Data_Traversable.traversableDisj;
    }
};
var traversableWithIndexCoproduct = function (dictTraversableWithIndex) {
    var traverseWithIndex1 = traverseWithIndex(dictTraversableWithIndex);
    var functorWithIndexCoproduct = Data_FunctorWithIndex.functorWithIndexCoproduct(dictTraversableWithIndex.FunctorWithIndex0());
    var foldableWithIndexCoproduct = Data_FoldableWithIndex.foldableWithIndexCoproduct(dictTraversableWithIndex.FoldableWithIndex1());
    var traversableCoproduct = Data_Traversable.traversableCoproduct(dictTraversableWithIndex.Traversable2());
    return function (dictTraversableWithIndex1) {
        var traverseWithIndex2 = traverseWithIndex(dictTraversableWithIndex1);
        var functorWithIndexCoproduct1 = functorWithIndexCoproduct(dictTraversableWithIndex1.FunctorWithIndex0());
        var foldableWithIndexCoproduct1 = foldableWithIndexCoproduct(dictTraversableWithIndex1.FoldableWithIndex1());
        var traversableCoproduct1 = traversableCoproduct(dictTraversableWithIndex1.Traversable2());
        return {
            traverseWithIndex: function (dictApplicative) {
                var map = Data_Functor.map((dictApplicative.Apply0()).Functor0());
                var traverseWithIndex3 = traverseWithIndex1(dictApplicative);
                var traverseWithIndex4 = traverseWithIndex2(dictApplicative);
                return function (f) {
                    return Data_Functor_Coproduct.coproduct((function () {
                        var $178 = map(function ($181) {
                            return Data_Functor_Coproduct.Coproduct(Data_Either.Left.create($181));
                        });
                        var $179 = traverseWithIndex3(function ($182) {
                            return f(Data_Either.Left.create($182));
                        });
                        return function ($180) {
                            return $178($179($180));
                        };
                    })())((function () {
                        var $183 = map(function ($186) {
                            return Data_Functor_Coproduct.Coproduct(Data_Either.Right.create($186));
                        });
                        var $184 = traverseWithIndex4(function ($187) {
                            return f(Data_Either.Right.create($187));
                        });
                        return function ($185) {
                            return $183($184($185));
                        };
                    })());
                };
            },
            FunctorWithIndex0: function () {
                return functorWithIndexCoproduct1;
            },
            FoldableWithIndex1: function () {
                return foldableWithIndexCoproduct1;
            },
            Traversable2: function () {
                return traversableCoproduct1;
            }
        };
    };
};
var traversableWithIndexConst = {
    traverseWithIndex: function (dictApplicative) {
        var pure = Control_Applicative.pure(dictApplicative);
        return function (v) {
            return function (v1) {
                return pure(v1);
            };
        };
    },
    FunctorWithIndex0: function () {
        return Data_FunctorWithIndex.functorWithIndexConst;
    },
    FoldableWithIndex1: function () {
        return Data_FoldableWithIndex.foldableWithIndexConst;
    },
    Traversable2: function () {
        return Data_Traversable.traversableConst;
    }
};
var traversableWithIndexConj = {
    traverseWithIndex: function (dictApplicative) {
        var traverse8 = traverse6(dictApplicative);
        return function (f) {
            return traverse8(f(Data_Unit.unit));
        };
    },
    FunctorWithIndex0: function () {
        return Data_FunctorWithIndex.functorWithIndexConj;
    },
    FoldableWithIndex1: function () {
        return Data_FoldableWithIndex.foldableWithIndexConj;
    },
    Traversable2: function () {
        return Data_Traversable.traversableConj;
    }
};
var traversableWithIndexCompose = function (dictTraversableWithIndex) {
    var traverseWithIndex1 = traverseWithIndex(dictTraversableWithIndex);
    var functorWithIndexCompose = Data_FunctorWithIndex.functorWithIndexCompose(dictTraversableWithIndex.FunctorWithIndex0());
    var foldableWithIndexCompose = Data_FoldableWithIndex.foldableWithIndexCompose(dictTraversableWithIndex.FoldableWithIndex1());
    var traversableCompose = Data_Traversable.traversableCompose(dictTraversableWithIndex.Traversable2());
    return function (dictTraversableWithIndex1) {
        var traverseWithIndex2 = traverseWithIndex(dictTraversableWithIndex1);
        var functorWithIndexCompose1 = functorWithIndexCompose(dictTraversableWithIndex1.FunctorWithIndex0());
        var foldableWithIndexCompose1 = foldableWithIndexCompose(dictTraversableWithIndex1.FoldableWithIndex1());
        var traversableCompose1 = traversableCompose(dictTraversableWithIndex1.Traversable2());
        return {
            traverseWithIndex: function (dictApplicative) {
                var map = Data_Functor.map((dictApplicative.Apply0()).Functor0());
                var traverseWithIndex3 = traverseWithIndex1(dictApplicative);
                var traverseWithIndex4 = traverseWithIndex2(dictApplicative);
                return function (f) {
                    return function (v) {
                        return map(Data_Functor_Compose.Compose)(traverseWithIndex3((function () {
                            var $188 = Data_Tuple.curry(f);
                            return function ($189) {
                                return traverseWithIndex4($188($189));
                            };
                        })())(v));
                    };
                };
            },
            FunctorWithIndex0: function () {
                return functorWithIndexCompose1;
            },
            FoldableWithIndex1: function () {
                return foldableWithIndexCompose1;
            },
            Traversable2: function () {
                return traversableCompose1;
            }
        };
    };
};
var traversableWithIndexArray = {
    traverseWithIndex: function (dictApplicative) {
        return traverseWithIndexDefault(traversableWithIndexArray)(dictApplicative);
    },
    FunctorWithIndex0: function () {
        return Data_FunctorWithIndex.functorWithIndexArray;
    },
    FoldableWithIndex1: function () {
        return Data_FoldableWithIndex.foldableWithIndexArray;
    },
    Traversable2: function () {
        return Data_Traversable.traversableArray;
    }
};
var traversableWithIndexApp = function (dictTraversableWithIndex) {
    var traverseWithIndex1 = traverseWithIndex(dictTraversableWithIndex);
    var functorWithIndexApp = Data_FunctorWithIndex.functorWithIndexApp(dictTraversableWithIndex.FunctorWithIndex0());
    var foldableWithIndexApp = Data_FoldableWithIndex.foldableWithIndexApp(dictTraversableWithIndex.FoldableWithIndex1());
    var traversableApp = Data_Traversable.traversableApp(dictTraversableWithIndex.Traversable2());
    return {
        traverseWithIndex: function (dictApplicative) {
            var map = Data_Functor.map((dictApplicative.Apply0()).Functor0());
            var traverseWithIndex2 = traverseWithIndex1(dictApplicative);
            return function (f) {
                return function (v) {
                    return map(Data_Functor_App.App)(traverseWithIndex2(f)(v));
                };
            };
        },
        FunctorWithIndex0: function () {
            return functorWithIndexApp;
        },
        FoldableWithIndex1: function () {
            return foldableWithIndexApp;
        },
        Traversable2: function () {
            return traversableApp;
        }
    };
};
var traversableWithIndexAdditive = {
    traverseWithIndex: function (dictApplicative) {
        var traverse8 = traverse7(dictApplicative);
        return function (f) {
            return traverse8(f(Data_Unit.unit));
        };
    },
    FunctorWithIndex0: function () {
        return Data_FunctorWithIndex.functorWithIndexAdditive;
    },
    FoldableWithIndex1: function () {
        return Data_FoldableWithIndex.foldableWithIndexAdditive;
    },
    Traversable2: function () {
        return Data_Traversable.traversableAdditive;
    }
};
var mapAccumRWithIndex = function (dictTraversableWithIndex) {
    var traverseWithIndex1 = traverseWithIndex(dictTraversableWithIndex)(Data_Traversable_Accum_Internal.applicativeStateR);
    return function (f) {
        return function (s0) {
            return function (xs) {
                return Data_Traversable_Accum_Internal.stateR(traverseWithIndex1(function (i) {
                    return function (a) {
                        return function (s) {
                            return f(i)(s)(a);
                        };
                    };
                })(xs))(s0);
            };
        };
    };
};
var scanrWithIndex = function (dictTraversableWithIndex) {
    var mapAccumRWithIndex1 = mapAccumRWithIndex(dictTraversableWithIndex);
    return function (f) {
        return function (b0) {
            return function (xs) {
                return (mapAccumRWithIndex1(function (i) {
                    return function (b) {
                        return function (a) {
                            var b$prime = f(i)(a)(b);
                            return {
                                accum: b$prime,
                                value: b$prime
                            };
                        };
                    };
                })(b0)(xs)).value;
            };
        };
    };
};
var mapAccumLWithIndex = function (dictTraversableWithIndex) {
    var traverseWithIndex1 = traverseWithIndex(dictTraversableWithIndex)(Data_Traversable_Accum_Internal.applicativeStateL);
    return function (f) {
        return function (s0) {
            return function (xs) {
                return Data_Traversable_Accum_Internal.stateL(traverseWithIndex1(function (i) {
                    return function (a) {
                        return function (s) {
                            return f(i)(s)(a);
                        };
                    };
                })(xs))(s0);
            };
        };
    };
};
var scanlWithIndex = function (dictTraversableWithIndex) {
    var mapAccumLWithIndex1 = mapAccumLWithIndex(dictTraversableWithIndex);
    return function (f) {
        return function (b0) {
            return function (xs) {
                return (mapAccumLWithIndex1(function (i) {
                    return function (b) {
                        return function (a) {
                            var b$prime = f(i)(b)(a);
                            return {
                                accum: b$prime,
                                value: b$prime
                            };
                        };
                    };
                })(b0)(xs)).value;
            };
        };
    };
};
var forWithIndex = function (dictApplicative) {
    return function (dictTraversableWithIndex) {
        return Data_Function.flip(traverseWithIndex(dictTraversableWithIndex)(dictApplicative));
    };
};
export {
    traverseWithIndex,
    traverseWithIndexDefault,
    forWithIndex,
    scanlWithIndex,
    mapAccumLWithIndex,
    scanrWithIndex,
    mapAccumRWithIndex,
    traverseDefault,
    traversableWithIndexArray,
    traversableWithIndexMaybe,
    traversableWithIndexFirst,
    traversableWithIndexLast,
    traversableWithIndexAdditive,
    traversableWithIndexDual,
    traversableWithIndexConj,
    traversableWithIndexDisj,
    traversableWithIndexMultiplicative,
    traversableWithIndexEither,
    traversableWithIndexTuple,
    traversableWithIndexIdentity,
    traversableWithIndexConst,
    traversableWithIndexProduct,
    traversableWithIndexCoproduct,
    traversableWithIndexCompose,
    traversableWithIndexApp
};
