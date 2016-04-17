var animate = function() {
    var d = {
            delay: 0,
            duration: 400,
            easing: "ease"
        },
        g = function() {
            return Array.prototype.includes ? function(b, a) {
                return b.includes(a)
            } : function(b, a) {
                return b.some(function(b) {
                    return b === a
                })
            }
        }(),
        h = function() {
            var b = function(a) {
                return /\D$/.test(a) ? a : a + "ms"
            };
            return function(a, c) {
                var f = {
                    property: "opacity," + e(),
                    duration: b(c.duration || d.duration),
                    "timing-function": c.easing || d.easing,
                    delay: b(c.delay || d.delay)
                };
                Object.keys(f).forEach(function(b) {
                    a.style["transition-" + b] = f[b]
                })
            }
        }(),
        k = function(b) {
            var a =
                function(c) {
                    c.target.removeEventListener("transitionend", a);
                    b.complete && b.complete.call(c.target)
                };
            return a
        },
        l = function(b, a) {
            void 0 != a.opacity && (b.style.opacity = a.opacity)
        },
        e = function() {
            var b;
            return function() {
                b || (b = "transform" in document.body.style ? "transform" : "-webkit-transform");
                return b
            }
        }(),
        m = function() {
            var b = ["complete", "el", "opacity"].concat(Object.keys(d));
            return function(a) {
                return !g(b, a)
            }
        }(),
        n = function(b) {
            return Object.keys(b).filter(function(a) {
                return m(a)
            })
        },
        p = function() {
            return function(b,
                a) {
                var c = n(a);
                c.length && (b.style[e()] = c.map(function(b) {
                    var c;
                    c = a[b];
                    c = /\D$/.test(c) || /scale/.test(b) ? c : /rotate|skew/.test(b) ? c + "deg" : c + "px";
                    return b + "(" + c + ")"
                }).join(" "))
            }
        }(),
        q = function(b) {
            return function(a) {
                requestAnimationFrame(function() {
                    [h, l, p].forEach(function(c) {
                        c(a, b)
                    })
                });
                a.addEventListener("transitionend", k(b))
            }
        };
    return function(b) {
        return function(a) {
            "object" == typeof a && b(a)
        }
    }(function(b) {
        var a = b.el;
        if ("string" == typeof a) var c = document,
            a = /^[\#.]?[\w-]+$/.test(a) ? "." == a[0] ? c.getElementsByClassName(a.slice(1)) :
            "#" == a[0] ? c.getElementById(a.slice(1)) : c.getElementsByTagName(a) : c.querySelectorAll(a);
        (a.nodeType ? [a] : Array.isArray(a) ? a : [].slice.call(a)).forEach(q(b))
    })
}();