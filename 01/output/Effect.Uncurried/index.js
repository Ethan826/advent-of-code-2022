// Generated by purs version 0.15.4
import * as $foreign from "./foreign.js";
import * as Data_Monoid from "../Data.Monoid/index.js";
import * as Data_Semigroup from "../Data.Semigroup/index.js";
import * as Effect from "../Effect/index.js";
var semigroupEffectFn9 = function (dictSemigroup) {
    var append = Data_Semigroup.append(Effect.semigroupEffect(dictSemigroup));
    return {
        append: function (f1) {
            return function (f2) {
                return $foreign.mkEffectFn9(function (a) {
                    return function (b) {
                        return function (c) {
                            return function (d) {
                                return function (e) {
                                    return function (f) {
                                        return function (g) {
                                            return function (h) {
                                                return function (i) {
                                                    return append($foreign.runEffectFn9(f1)(a)(b)(c)(d)(e)(f)(g)(h)(i))($foreign.runEffectFn9(f2)(a)(b)(c)(d)(e)(f)(g)(h)(i));
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                });
            };
        }
    };
};
var semigroupEffectFn8 = function (dictSemigroup) {
    var append = Data_Semigroup.append(Effect.semigroupEffect(dictSemigroup));
    return {
        append: function (f1) {
            return function (f2) {
                return $foreign.mkEffectFn8(function (a) {
                    return function (b) {
                        return function (c) {
                            return function (d) {
                                return function (e) {
                                    return function (f) {
                                        return function (g) {
                                            return function (h) {
                                                return append($foreign.runEffectFn8(f1)(a)(b)(c)(d)(e)(f)(g)(h))($foreign.runEffectFn8(f2)(a)(b)(c)(d)(e)(f)(g)(h));
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                });
            };
        }
    };
};
var semigroupEffectFn7 = function (dictSemigroup) {
    var append = Data_Semigroup.append(Effect.semigroupEffect(dictSemigroup));
    return {
        append: function (f1) {
            return function (f2) {
                return $foreign.mkEffectFn7(function (a) {
                    return function (b) {
                        return function (c) {
                            return function (d) {
                                return function (e) {
                                    return function (f) {
                                        return function (g) {
                                            return append($foreign.runEffectFn7(f1)(a)(b)(c)(d)(e)(f)(g))($foreign.runEffectFn7(f2)(a)(b)(c)(d)(e)(f)(g));
                                        };
                                    };
                                };
                            };
                        };
                    };
                });
            };
        }
    };
};
var semigroupEffectFn6 = function (dictSemigroup) {
    var append = Data_Semigroup.append(Effect.semigroupEffect(dictSemigroup));
    return {
        append: function (f1) {
            return function (f2) {
                return $foreign.mkEffectFn6(function (a) {
                    return function (b) {
                        return function (c) {
                            return function (d) {
                                return function (e) {
                                    return function (f) {
                                        return append($foreign.runEffectFn6(f1)(a)(b)(c)(d)(e)(f))($foreign.runEffectFn6(f2)(a)(b)(c)(d)(e)(f));
                                    };
                                };
                            };
                        };
                    };
                });
            };
        }
    };
};
var semigroupEffectFn5 = function (dictSemigroup) {
    var append = Data_Semigroup.append(Effect.semigroupEffect(dictSemigroup));
    return {
        append: function (f1) {
            return function (f2) {
                return $foreign.mkEffectFn5(function (a) {
                    return function (b) {
                        return function (c) {
                            return function (d) {
                                return function (e) {
                                    return append($foreign.runEffectFn5(f1)(a)(b)(c)(d)(e))($foreign.runEffectFn5(f2)(a)(b)(c)(d)(e));
                                };
                            };
                        };
                    };
                });
            };
        }
    };
};
var semigroupEffectFn4 = function (dictSemigroup) {
    var append = Data_Semigroup.append(Effect.semigroupEffect(dictSemigroup));
    return {
        append: function (f1) {
            return function (f2) {
                return $foreign.mkEffectFn4(function (a) {
                    return function (b) {
                        return function (c) {
                            return function (d) {
                                return append($foreign.runEffectFn4(f1)(a)(b)(c)(d))($foreign.runEffectFn4(f2)(a)(b)(c)(d));
                            };
                        };
                    };
                });
            };
        }
    };
};
var semigroupEffectFn3 = function (dictSemigroup) {
    var append = Data_Semigroup.append(Effect.semigroupEffect(dictSemigroup));
    return {
        append: function (f1) {
            return function (f2) {
                return $foreign.mkEffectFn3(function (a) {
                    return function (b) {
                        return function (c) {
                            return append($foreign.runEffectFn3(f1)(a)(b)(c))($foreign.runEffectFn3(f2)(a)(b)(c));
                        };
                    };
                });
            };
        }
    };
};
var semigroupEffectFn2 = function (dictSemigroup) {
    var append = Data_Semigroup.append(Effect.semigroupEffect(dictSemigroup));
    return {
        append: function (f1) {
            return function (f2) {
                return $foreign.mkEffectFn2(function (a) {
                    return function (b) {
                        return append($foreign.runEffectFn2(f1)(a)(b))($foreign.runEffectFn2(f2)(a)(b));
                    };
                });
            };
        }
    };
};
var semigroupEffectFn10 = function (dictSemigroup) {
    var append = Data_Semigroup.append(Effect.semigroupEffect(dictSemigroup));
    return {
        append: function (f1) {
            return function (f2) {
                return $foreign.mkEffectFn10(function (a) {
                    return function (b) {
                        return function (c) {
                            return function (d) {
                                return function (e) {
                                    return function (f) {
                                        return function (g) {
                                            return function (h) {
                                                return function (i) {
                                                    return function (j) {
                                                        return append($foreign.runEffectFn10(f1)(a)(b)(c)(d)(e)(f)(g)(h)(i)(j))($foreign.runEffectFn10(f2)(a)(b)(c)(d)(e)(f)(g)(h)(i)(j));
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                });
            };
        }
    };
};
var semigroupEffectFn1 = function (dictSemigroup) {
    var append = Data_Semigroup.append(Effect.semigroupEffect(dictSemigroup));
    return {
        append: function (f1) {
            return function (f2) {
                return $foreign.mkEffectFn1(function (a) {
                    return append($foreign.runEffectFn1(f1)(a))($foreign.runEffectFn1(f2)(a));
                });
            };
        }
    };
};
var monoidEffectFn9 = function (dictMonoid) {
    var mempty = Data_Monoid.mempty(Effect.monoidEffect(dictMonoid));
    var semigroupEffectFn91 = semigroupEffectFn9(dictMonoid.Semigroup0());
    return {
        mempty: $foreign.mkEffectFn9(function (v) {
            return function (v1) {
                return function (v2) {
                    return function (v3) {
                        return function (v4) {
                            return function (v5) {
                                return function (v6) {
                                    return function (v7) {
                                        return function (v8) {
                                            return mempty;
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        }),
        Semigroup0: function () {
            return semigroupEffectFn91;
        }
    };
};
var monoidEffectFn8 = function (dictMonoid) {
    var mempty = Data_Monoid.mempty(Effect.monoidEffect(dictMonoid));
    var semigroupEffectFn81 = semigroupEffectFn8(dictMonoid.Semigroup0());
    return {
        mempty: $foreign.mkEffectFn8(function (v) {
            return function (v1) {
                return function (v2) {
                    return function (v3) {
                        return function (v4) {
                            return function (v5) {
                                return function (v6) {
                                    return function (v7) {
                                        return mempty;
                                    };
                                };
                            };
                        };
                    };
                };
            };
        }),
        Semigroup0: function () {
            return semigroupEffectFn81;
        }
    };
};
var monoidEffectFn7 = function (dictMonoid) {
    var mempty = Data_Monoid.mempty(Effect.monoidEffect(dictMonoid));
    var semigroupEffectFn71 = semigroupEffectFn7(dictMonoid.Semigroup0());
    return {
        mempty: $foreign.mkEffectFn7(function (v) {
            return function (v1) {
                return function (v2) {
                    return function (v3) {
                        return function (v4) {
                            return function (v5) {
                                return function (v6) {
                                    return mempty;
                                };
                            };
                        };
                    };
                };
            };
        }),
        Semigroup0: function () {
            return semigroupEffectFn71;
        }
    };
};
var monoidEffectFn6 = function (dictMonoid) {
    var mempty = Data_Monoid.mempty(Effect.monoidEffect(dictMonoid));
    var semigroupEffectFn61 = semigroupEffectFn6(dictMonoid.Semigroup0());
    return {
        mempty: $foreign.mkEffectFn6(function (v) {
            return function (v1) {
                return function (v2) {
                    return function (v3) {
                        return function (v4) {
                            return function (v5) {
                                return mempty;
                            };
                        };
                    };
                };
            };
        }),
        Semigroup0: function () {
            return semigroupEffectFn61;
        }
    };
};
var monoidEffectFn5 = function (dictMonoid) {
    var mempty = Data_Monoid.mempty(Effect.monoidEffect(dictMonoid));
    var semigroupEffectFn51 = semigroupEffectFn5(dictMonoid.Semigroup0());
    return {
        mempty: $foreign.mkEffectFn5(function (v) {
            return function (v1) {
                return function (v2) {
                    return function (v3) {
                        return function (v4) {
                            return mempty;
                        };
                    };
                };
            };
        }),
        Semigroup0: function () {
            return semigroupEffectFn51;
        }
    };
};
var monoidEffectFn4 = function (dictMonoid) {
    var mempty = Data_Monoid.mempty(Effect.monoidEffect(dictMonoid));
    var semigroupEffectFn41 = semigroupEffectFn4(dictMonoid.Semigroup0());
    return {
        mempty: $foreign.mkEffectFn4(function (v) {
            return function (v1) {
                return function (v2) {
                    return function (v3) {
                        return mempty;
                    };
                };
            };
        }),
        Semigroup0: function () {
            return semigroupEffectFn41;
        }
    };
};
var monoidEffectFn3 = function (dictMonoid) {
    var mempty = Data_Monoid.mempty(Effect.monoidEffect(dictMonoid));
    var semigroupEffectFn31 = semigroupEffectFn3(dictMonoid.Semigroup0());
    return {
        mempty: $foreign.mkEffectFn3(function (v) {
            return function (v1) {
                return function (v2) {
                    return mempty;
                };
            };
        }),
        Semigroup0: function () {
            return semigroupEffectFn31;
        }
    };
};
var monoidEffectFn2 = function (dictMonoid) {
    var mempty = Data_Monoid.mempty(Effect.monoidEffect(dictMonoid));
    var semigroupEffectFn21 = semigroupEffectFn2(dictMonoid.Semigroup0());
    return {
        mempty: $foreign.mkEffectFn2(function (v) {
            return function (v1) {
                return mempty;
            };
        }),
        Semigroup0: function () {
            return semigroupEffectFn21;
        }
    };
};
var monoidEffectFn10 = function (dictMonoid) {
    var mempty = Data_Monoid.mempty(Effect.monoidEffect(dictMonoid));
    var semigroupEffectFn101 = semigroupEffectFn10(dictMonoid.Semigroup0());
    return {
        mempty: $foreign.mkEffectFn10(function (v) {
            return function (v1) {
                return function (v2) {
                    return function (v3) {
                        return function (v4) {
                            return function (v5) {
                                return function (v6) {
                                    return function (v7) {
                                        return function (v8) {
                                            return function (v9) {
                                                return mempty;
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        }),
        Semigroup0: function () {
            return semigroupEffectFn101;
        }
    };
};
var monoidEffectFn1 = function (dictMonoid) {
    var mempty = Data_Monoid.mempty(Effect.monoidEffect(dictMonoid));
    var semigroupEffectFn11 = semigroupEffectFn1(dictMonoid.Semigroup0());
    return {
        mempty: $foreign.mkEffectFn1(function (v) {
            return mempty;
        }),
        Semigroup0: function () {
            return semigroupEffectFn11;
        }
    };
};
export {
    mkEffectFn1,
    mkEffectFn2,
    mkEffectFn3,
    mkEffectFn4,
    mkEffectFn5,
    mkEffectFn6,
    mkEffectFn7,
    mkEffectFn8,
    mkEffectFn9,
    mkEffectFn10,
    runEffectFn1,
    runEffectFn2,
    runEffectFn3,
    runEffectFn4,
    runEffectFn5,
    runEffectFn6,
    runEffectFn7,
    runEffectFn8,
    runEffectFn9,
    runEffectFn10
} from "./foreign.js";
export {
    semigroupEffectFn1,
    semigroupEffectFn2,
    semigroupEffectFn3,
    semigroupEffectFn4,
    semigroupEffectFn5,
    semigroupEffectFn6,
    semigroupEffectFn7,
    semigroupEffectFn8,
    semigroupEffectFn9,
    semigroupEffectFn10,
    monoidEffectFn1,
    monoidEffectFn2,
    monoidEffectFn3,
    monoidEffectFn4,
    monoidEffectFn5,
    monoidEffectFn6,
    monoidEffectFn7,
    monoidEffectFn8,
    monoidEffectFn9,
    monoidEffectFn10
};
