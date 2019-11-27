! function() {
  "use strict";
  if (window.__gyr || (window.__gyr = {}), window.__gyr.config || (window.__gyr.config = {}), window.__gyr.render_holder || (window.__gyr.render_holder = {}), !window.__gyr.config.clientToken) {
    if ("undefined" == typeof ubiClientToken) return;
    window.__gyr.config.clientToken = ubiClientToken
  }
  var a = {
      COOKIE_PREFIX_BT: "__gyr_bt_",
      COOKIE_NAME_CAMPAIGN_COUNT: "__gyr_cmpcnts",
      COOKIE_NAME_DEPID: "__gyr_depid",
      COOKIE_NAME_UUID: "__gyr_uuid",
      COOKIE_NAME_SESSION_ID: "__gyr_sid",
      COOKIE_NAME_CASTED_FRAMES: "__gyr_casted_frames",
      REQUEST_PATH_BT: "/bt",
      REQUEST_PATH_CONTENT: "/content",
      REQUEST_PATH_EFO_SDK: "/js/gyr-efo.js",
      REQUEST_PATH_EFO_CONFIG: "/config",
      REQUEST_PATH_LOG: "/log",
      REQUEST_PATH_REDIRECT: "/log/redirect",
      DATA_ATTR_PART_LINK_NAME: "data-gyr-part-link-name",
      DATA_ATTR_DIRECT_LINK_NAME: "data-gyr-direct-link-name",
      DATA_ATTR_FRAME_NAME: "data-gyr-frame-name",
      DATA_ATTR_FREQUENCY_TRIGGER: "data-gyr-frequency-trigger",
      DATA_ATTR_LINK_COOKIE: "data-gyr-link-cookie",
      DATA_ATTR_PREHOOK: "data-gyr-prehook",
      DATA_ATTR_POSTHOOK: "data-gyr-posthook",
      DATA_ATTR_SYNC_CAST: "data-gyr-sync-cast",
      CLASS_NAME_LPO_CONTENT: "gyr-lpo",
      CLICKABLE_TAG_NAMES: ["a", "area"],
      HOSTNAME_CAST: "cast.gyro-n.com",
      HOSTNAME_LOG: "log.gyro-n.com",
      HOSTNAME_EFO: "efo.gyro-n.com",
      HOSTNAME_EFO_SDK: "efo.gyro-n.com",
      HOSTNAME_EFO_LOG: "efo-log.gyro-n.com"
    },
    b = {
      encode: function(a) {
        return "undefined" != typeof encodeURIComponent ? encodeURIComponent(a) : escape(a)
      },
      hasAJAX: function() {
        return window.ActiveXObject && !window.XDomainRequest || window.opera ? !1 : !0
      },
      map2QueryString: function(a, c) {
        var d, e = [];
        for (d in a) {
          var f = a[d];
          void 0 !== f && null !== f && (f = c ? f : b.encode(f), e.push(d + "=" + f))
        }
        return e.length > 0 ? "?" + e.join("&") : ""
      },
      map2ParamString: function(a, c) {
        var d, e = [];
        for (d in a) {
          var f = a[d];
          void 0 !== f && null !== f && (f = c ? f : b.encode(f), e.push(d + "=" + f))
        }
        return e.length > 0 ? e.join("&") : ""
      },
      bindEvent: function(a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
      },
      bindLinkClick: function(a, c) {
        b.bindEvent(a, "click", function() {
          var b = a.href;
          return function(a) {
            c && c(), a.preventDefault(), setTimeout(function() {
              document.location = b
            }, 100)
          }
        }(), !1)
      },
      getElementsByClass: function(a) {
        for (var b = 0, c = [], d = document.getElementsByTagName("*"), e = d.length, f = new RegExp("(^|\\s)" + a + "(\\s|$)"), g = 0; e > g; g++) f.test(d[g].className) && (c[b++] = d[g]);
        return c
      },
      getObjectKeys: function(a) {
        if (Object.keys) return Object.keys(a);
        var b = [];
        for (var c in a) a.hasOwnProperty(c) && b.push(c);
        return b
      },
      indexOf: function(a, b, c) {
        if (Array.prototype.indexOf) return a.indexOf(b, c);
        for (var d = c || 0, e = a.length; e > d; d++)
          if (a[d] === b) return d;
        return -1
      },
      getReferrerAsString: function() {
        return b.encode(document.referrer)
      },
      getUrlAsString: function() {
        return b.encode(location.href)
      },
      sleep: function(a) {
        for (var b = (new Date).getTime() + a;
          (new Date).getTime() < b;);
      },
      isArray: function(a) {
        return b.isType("Array", a)
      },
      isFunction: function(a) {
        return b.isType("Function", a)
      },
      isString: function(a) {
        return b.isType("String", a)
      },
      isType: function(a, b) {
        var c = Object.prototype.toString.call(b).slice(8, -1);
        return void 0 !== b && null !== b && c === a
      }
    },
    c = function() {
      var a = window.navigator.userAgent.toLowerCase();
      return -1 === a.indexOf("chrome") && -1 === a.indexOf("edge") && -1 !== a.indexOf("safari") && "undefined" != typeof Storage
    },
    d = {
      write: function(a, b, d, e) {
        var f = d ? new Date((new Date).getTime() + d) : "";
        if (a && "" !== a && b) {
          var g = a + "=" + b + "; ",
            h = "domain=" + (e && "" !== e ? e : document.domain) + ";",
            i = "path=/; ",
            j = "";
          d && (j = "expires=" + f.toGMTString() + "; ");
          var k = g + j + i + h;
          if (document.cookie = k, d && c()) {
            var l = {
              isGyron: !0,
              value: b,
              expire: f.toISOString()
            };
            localStorage.setItem(a, JSON.stringify(l))
          }
        }
      },
      read: function(a) {
        var b = this.getCookieObj();
        for (var c in b)
          if (c === a) return b[c];
        return ""
      },
      readMatchAll: function(a) {
        var b = this.getCookieObj(),
          c = [];
        for (var d in b) d.match(a) && c.push(b[d]);
        return c
      },
      getCookieObj: function() {
        var a = {};
        if (c())
          for (var b = 0; b < localStorage.length; b++) {
            var d = localStorage.key(b);
            try {
              var e = JSON.parse(localStorage.getItem(d));
              null !== e && e.hasOwnProperty("isGyron") && ((new Date).toISOString() <= e.expire ? a[d] = e.value : localStorage.removeItem(d))
            } catch (f) {}
          }
        var g = document.cookie;
        if (!g || "" === g) return a;
        var h, i = g.split(";"),
          j = i.length;
        for (h = 0; j > h; h++) {
          var k = (i[h] || "").replace(/^\s+/g, ""),
            l = k.indexOf("="),
            m = k.substring(0, l),
            n = k.substring(m.length + 1);
          a[m] = n
        }
        return a
      },
      remove: function(a, b) {
        if (a && "" !== a) {
          var d = a + "=; ",
            e = "domain=" + (b && "" !== b ? b : document.domain) + "; ",
            f = "path=/; ",
            g = "expires=" + new Date((new Date).getTime() - 1e3).toGMTString() + "; ",
            h = d + g + f + e;
          document.cookie = h, c() && localStorage.removeItem(a)
        }
      },
      years: function(a) {
        return 31536e6 * a
      },
      months: function(a) {
        return 26784e5 * a
      },
      days: function(a) {
        return 864e5 * a
      },
      hours: function(a) {
        return 36e5 * a
      },
      minutes: function(a) {
        return 6e4 * a
      },
      seconds: function(a) {
        return 1e3 * a
      }
    },
    e = function() {
      this.onerror = function() {}, this.ontimeout = function() {}, this.onload = function(a) {}
    };
  e.prototype = {
    ajax: function(a, b) {
      var c, d = this;
      if (window.XDomainRequest ? c = new XDomainRequest : window.ActiveXObject ? c = new ActiveXObject("Microsoft.XMLHTTP") : window.XMLHttpRequest && (c = new XMLHttpRequest), c)
        if (window.XDomainRequest) b ? c.timeout = b : c.timeout = 1e3, "function" == typeof d.onerror && (c.onerror = d.onerror), "function" == typeof d.ontimeout && (c.ontimeout = d.ontimeout), c.onload = function() {
          "function" == typeof d.onload && d.onload(c.responseText)
        }, c.onprogress = function() {}, c.open("GET", a), c.send();
        else {
          c.open("GET", a, !0), c.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
          var e = setInterval(function() {
            clearInterval(e), "function" == typeof d.ontimeout && d.ontimeout()
          }, b);
          c.onreadystatechange = function() {
            4 == c.readyState && (clearInterval(e), 200 == c.status || 304 == c.status ? "function" == typeof d.onload && d.onload(c.responseText) : "function" == typeof d.onerror && d.onerror())
          }, c.send()
        }
    }
  };
  var f = function() {
    this.onerror = function() {}, this.ontimeout = function() {}, this.onload = function() {}
  };
  f.prototype = {
    load: function(a, c, d) {
      var f = this,
        g = d ? !d : !0;
      if (b.hasAJAX() && g) {
        var h = new e;
        h.onload = function(a) {
          var b = f.createScript();
          b.text = a, "function" == typeof f.onload && f.onload()
        }, h.ontimeout = this.ontimeout, h.onerror = this.onerror, h.ajax(a, c)
      } else f.loadScriptTag(a, c)
    },
    loadScriptTag: function(a, b) {
      var c = this;
      setTimeout(function() {
        var d = c.createScript(),
          e = !1,
          f = setInterval(function() {
            clearInterval(f), e = !0, "function" == typeof c.ontimeout && c.ontimeout()
          }, b);
        document.addEventListener ? d.onload = function() {
          clearInterval(f), e || "function" == typeof c.onload && c.onload()
        } : d.onreadystatechange = function() {
          if ("loaded" == d.readyState) {
            if (clearInterval(f), e) return;
            "function" == typeof c.onload && c.onload()
          }
        }, d.setAttribute("async", "async"), d.src = a
      }, 50)
    },
    createScript: function() {
      var a = document.createElement("script"),
        b = document.getElementsByTagName("head")[0];
      return b.appendChild(a), a.type = "text/javascript", a.charset = "UTF-8", a
    }
  };
  var g = {
      sessionExpire: "",
      init: function(b, c) {
        var e = !1,
          f = !1;
        if (this.sessionExpire = b && b.match(/^[0-9]+$/) ? d.days(b) : "", !d.read(a.COOKIE_NAME_UUID)) {
          var g = p.generate();
          d.write(a.COOKIE_NAME_UUID, g, d.years(30), c), e = !0
        }
        if (!d.read(a.COOKIE_NAME_SESSION_ID)) {
          var h = p.generate();
          d.write(a.COOKIE_NAME_SESSION_ID, h, this.sessionExpire, c), f = !0
        }
        this.isFirstUser = function() {
          return e
        }, this.isFirstSession = function() {
          return f
        }
      },
      getUU: function() {
        return d.read(a.COOKIE_NAME_UUID)
      },
      getSession: function() {
        return d.read(a.COOKIE_NAME_SESSION_ID)
      },
      getSessionExpire: function() {
        return this.sessionExpire
      }
    },
    h = function(a, b, c, d, e) {
      this.clientToken = a, this.site = b, this.host = location.protocol + "//" + c, this.domain = d, this.virtualUrl = e, this.loader = new f, this.loader.onerror = function() {}, this.loader.ontimeout = function() {}, this.loader.onload = function() {}
    };
  h.cb = function(a) {}, h.prototype = {
    init: function() {
      for (var a = this, c = document.getElementsByTagName("a"), d = c.length, e = function(b) {
          var c = b.href;
          return function(b) {
            a.linkClick(c)
          }
        }, f = 0; d > f; f++) {
        var g = c[f];
        b.bindEvent(g, "click", e(g), !1)
      }
      this.pageView()
    },
    createCommonParam: function(a, b) {
      var c = {
        cl: this.clientToken,
        st: this.site,
        cate: a,
        act: b,
        url: this.virtualUrl,
        referrer: document.referrer,
        charset: document.characterSet || document.charset,
        uid: g.getUU(),
        sid: g.getSession(),
        time: (new Date).getTime()
      };
      return c
    },
    pageView: function() {
      var a;
      a = this.createCommonParam("default", "pageview"), this.log(a)
    },
    mouseOver: function() {},
    linkClick: function(a) {
      var c;
      c = this.createCommonParam("default", "click"), c.curl = a, this.log(c), b.sleep(250)
    },
    unload: function() {
      var a;
      a = this.createCommonParam("default", "unload"), this.log(a)
    },
    partCast: function(a, b, c, d, e, f) {
      var g;
      g = this.createCommonParam("webpart", "cast"), g.wpid = a, g.wpsid = b, g.fid = c, g.did = d, g.stid = e, g.cid = f, this.log(g)
    },
    partClick: function(a, b, c, d, e, f, g, h) {
      var i;
      i = this.createCommonParam("webpart", "click"), i.wpid = a, i.wpsid = b, i.fid = c, i.did = d, i.stid = e, i.cid = f, i.curl = g, i.wplnm = h, this.log(i)
    },
    getRedirectPartLink: function(c, d, e, f, g, h, i, j) {
      var k;
      k = this.createCommonParam("webpart", "click"), k.wpid = c, k.wpsid = d, k.fid = e, k.did = f, k.stid = g, k.cid = h, k.curl = i, k.wplnm = j, k.time = null;
      var l = b.map2QueryString(k);
      return this.host + a.REQUEST_PATH_REDIRECT + l
    },
    formSubmitLog: function(a, b, c, d) {
      var e = this.createCommonParam("form", "submit");
      e.fid = a, e.rid = b, e.pvid = d, e.fld = "", e.vlds = c, this.log(e)
    },
    formLog: function(a, b, c, d, e) {
      var f = this.createCommonParam("form", d),
        g = void 0 !== e ? e.length : 0,
        h = "";
      f.fid = a, f.rid = b, f.fld = c;
      for (var i = 0; g > i; i++) void 0 !== e[i].name && void 0 !== e[i].type && (h += e[i].name + "=" + e[i].type + "&");
      f.vlds = h.replace(/&$/, ""), this.log(f)
    },
    formCnvLog: function(a) {
      for (var b = this.createCommonParam("form", "conversion"), c = void 0 !== a ? a.length : 0, d = 0, e = ""; c > d; d++) a[d].indexOf(":") < 0 || (e += a[d] + "&");
      b.cnvs = e.replace(/&$/, ""), this.log(b)
    },
    log: function(c) {
      var d = b.map2QueryString(c);
      this.loader.load(this.host + a.REQUEST_PATH_LOG + d, 1e4)
    }
  };
  var i = function() {
      var c = [],
        d = {};
      return d.initial = function(b, d, e, f, g, h) {
        var i = this;
        this.clientToken = b, this.host = d, this.domain = f, this.site = g, this.freqValidHours = h, this.targets = {}, this.tracker = e, this._t = setInterval(function() {
          for (var b = i.getFrames(), d = b.length, e = 0; d > e; e++) {
            var f = b[e];
            if (!i.isExists(f)) {
              f.style.visibility = "hidden";
              var g = i.add(f);
              if ("true" === f.getAttribute(a.DATA_ATTR_SYNC_CAST) ? __gyr.q.push(["castSync", g]) : __gyr.q.push(["cast", g]), c.length > 100) {
                void 0 !== window.console && console.log("[Gyro-n LPO] the limit to the number of castable content is 100. it's over now."), clearInterval(i._t);
                break
              }
            }
          }
        }, 1)
      }, d.isExists = function(a) {
        for (var b, d = 0, e = c.length; e > d; d++)
          if (b = c[d], a === b.target) return !0;
        return !1
      }, d.add = function(a) {
        var b = new k(a, this.clientToken, this.host, this.tracker, this.domain, this.site, this.freqValidHours);
        return c.push(b), b
      }, d.getFrames = function() {
        return document.querySelectorAll ? document.querySelectorAll("." + a.CLASS_NAME_LPO_CONTENT) : b.getElementsByClass(a.CLASS_NAME_LPO_CONTENT)
      }, d.getFrameInfo = function(a) {
        for (var b, d = 0, e = c.length; e > d; d++)
          if (b = c[d], a === b.getFrameName()) return b.getInfo();
        return null
      }, d.getCastedFrameInfoList = function() {
        for (var a, b = 0, d = c.length, e = []; d > b; b++) a = c[b], e.push(a.getInfo());
        return e
      }, d
    }(),
    j = function(a, b, c, d) {
      this.target = a, this.key = b, this.frameName = c, this.tracker = d
    };
  j.prototype = {
    getPartLinkName: function(b) {
      return b.getAttribute(a.DATA_ATTR_PART_LINK_NAME) ? b.getAttribute(a.DATA_ATTR_PART_LINK_NAME) : ""
    },
    getDirectLinkName: function(b) {
      return b.getAttribute(a.DATA_ATTR_DIRECT_LINK_NAME) ? b.getAttribute(a.DATA_ATTR_DIRECT_LINK_NAME) : ""
    },
    emitClickLog: function(a, b, c, d, e, f, g, h) {
      this.tracker.partClick(a, b, c, d, e, f, g, h)
    },
    getContent: function(a) {
      return a.replace(/<script[^>]*>[\S\s]*?<\/script>/gim, "")
    },
    createScripts: function(a) {
      try {
        for (var b = a.match(/<script[^>]*>[\S\s]*?<\/script>/gim), c = b.length, d = 0; c > d; d++) {
          var e = b[d],
            f = document.createElement("script");
          document.getElementsByTagName("head")[0].appendChild(f), f.type = "text/javascript";
          var g = e.match(/charset=\"([^\"]*)\"|charset=\'([^\']*)\'/im);
          g && (f.charset = g[1] ? g[1] : g[2] ? g[2] : "");
          var h = e.match(/src=\"([^\"]*)\"|src=\'([^\']*)\'/im);
          h ? f.src = h[1] ? h[1] : h[2] ? h[2] : "" : f.text = e.match(/<script[^>]*>([\S\s]*?)<\/script>/im)[1]
        }
      } catch (i) {}
    },
    isClickable: function(c) {
      return null === c.getAttribute(a.DATA_ATTR_PART_LINK_NAME) ? !1 : b.indexOf(a.CLICKABLE_TAG_NAMES, c.tagName.toLowerCase()) >= 0 ? !0 : !1
    },
    isDirectClickable: function(c) {
      return null !== c.getAttribute(a.DATA_ATTR_DIRECT_LINK_NAME) && b.indexOf(a.CLICKABLE_TAG_NAMES, c.tagName.toLowerCase()) >= 0
    },
    isURL: function(a) {
      return /^https?\:\/\/.+/.test(a) ? !0 : !1
    },
    isClickRedirect: function() {
      return __gyr.config && void 0 !== __gyr.config.clickRedirect && __gyr.config.clickRedirect === !1 ? !1 : !0
    },
    render: function(c) {
      var e = this;
      try {
        var f, h;
        if (c.webPartId && c.content) {
          var i = this.target;
          i.innerHTML = this.getContent(c.content), this.target.style.visibility = "visible", this.target.style.display = "", this.createScripts(c.content);
          var j = i.getElementsByTagName("*"),
            k = void 0 !== c.webPartId ? c.webPartId.toString() : "",
            l = void 0 !== c.webPartSetId ? c.webPartSetId.toString() : "",
            m = void 0 !== c.frameId ? c.frameId.toString() : "",
            n = void 0 !== c.deploymentId ? c.deploymentId.toString() : "",
            o = void 0 !== c.siteId ? c.siteId.toString() : "",
            p = void 0 !== c.targetCampaignId ? c.targetCampaignId.toString() : "";
          h = j.length;
          var q = function(a) {
            var c = a.href,
              d = e.getDirectLinkName(a);
            return function(a) {
              e.emitClickLog(k, l, m, n, o, p, c, d), b.sleep(250)
            }
          };
          for (f = 0; h > f; f++) {
            var s = j[f];
            if (this.isDirectClickable(s)) b.bindEvent(s, "click", q(s), !1);
            else if (this.isClickable(j[f])) {
              var t = s.href;
              if (this.isURL(t)) {
                var u = e.getPartLinkName(s);
                s.href = this.tracker.getRedirectPartLink(k, l, m, n, o, p, t, u)
              }
            }
          }
          this.tracker.partCast(k, l, m, n, o, p);
          var v = d.read(a.COOKIE_NAME_DEPID);
          if (v) {
            var w = v.split(","); - 1 === b.indexOf(w, n) && w.push(n), v = w.join(",")
          } else v = n;
          d.write(a.COOKIE_NAME_DEPID, v, g.getSessionExpire(), this.domain)
        } else this.target.style.visibility = "visible", this.target.style.display = "";
        if (c.campaignIds && c.campaignIds.length > 0)
          for (h = c.campaignIds.length, f = 0; h > f; f++) {
            var x = c.campaignIds[f];
            r.isExists(this.frameName, x) || r.create(this.frameName, x)
          }
      } catch (y) {}
    }
  };
  var k = function(a, b, c, d, e, f, g) {
    this.target = a, this.clientToken = b, this.host = location.protocol + "//" + c, this.domain = e, this.site = f, this.freqValidHours = g, this.tracker = d, this.status = "initial", this.info = {}, this.onerror = function() {}, this.ontimeout = function() {}, this.onload = function() {}
  };
  k.prototype = {
    getFrameName: function() {
      return this.target.getAttribute(a.DATA_ATTR_FRAME_NAME) ? this.target.getAttribute(a.DATA_ATTR_FRAME_NAME) : ""
    },
    getFrequencyTrigger: function() {
      return this.target.getAttribute(a.DATA_ATTR_FREQUENCY_TRIGGER) ? this.target.getAttribute(a.DATA_ATTR_FREQUENCY_TRIGGER) : ""
    },
    getLinkCookieNames: function() {
      var b;
      return this.target.getAttribute(a.DATA_ATTR_LINK_COOKIE) ? (b = this.target.getAttribute(a.DATA_ATTR_LINK_COOKIE), b.split(",")) : []
    },
    getBTCookie: function() {
      var b = d.readMatchAll(new RegExp("^" + a.COOKIE_PREFIX_BT));
      return b.join(",")
    },
    getInfo: function() {
      return this.info
    },
    load: function() {
      var c = this,
        e = this.target,
        h = new f;
      if (e.getAttribute(a.DATA_ATTR_PREHOOK)) {
        var k = e.getAttribute(a.DATA_ATTR_PREHOOK);
        __gyr.prehooks && __gyr.prehooks[k] && __gyr.prehooks[k].apply(this)
      }
      h.onerror = function() {
        c.status = "loaderror", e.style.visibility = "visible", "function" == typeof c.onerror && c.onerror()
      }, h.ontimeout = function() {
        c.status = "loadtimeout", e.style.visibility = "visible", "function" == typeof c.ontimeout && c.ontimeout()
      }, h.onload = function() {
        c.status = "loaded", "function" == typeof c.onload && c.onload()
      };
      var l = this.getFrameName(),
        m = "lpo_render_content_" + (new Date).getTime() + Math.floor(1e4 * Math.random()),
        n = new j(e, e.id, l, this.tracker);
      window.__gyr[m] = function(b) {
        if (c.info = b, c.info.name = l, n.render(b), e.getAttribute(a.DATA_ATTR_POSTHOOK)) {
          var d = e.getAttribute(a.DATA_ATTR_POSTHOOK);
          __gyr.posthooks && __gyr.posthooks[d] && __gyr.posthooks[d].apply(c, [b])
        }
      };
      var o = {};
      o.id = e.id, o.clientToken = this.clientToken, o.uuid = g.getUU(), o.sid = g.getSession(), o.did = d.read(a.COOKIE_NAME_DEPID);
      var p = this.getFrequencyTrigger();
      if ("view" === p) r.incrAll(l);
      else {
        var s = d.read(a.COOKIE_NAME_CASTED_FRAMES);
        b.indexOf(s.split(","), l) < 0 && (r.incrAll(l), s = (s ? s + "," : "") + l), d.write(a.COOKIE_NAME_CASTED_FRAMES, s, this.freqValidHours < 0 ? "" : this.freqValidHours, this.domain)
      }
      var t = r.getValue(l);
      t && (o.cid = t);
      for (var u = this.getLinkCookieNames(), v = q.getTargetValues(u), w = i.getCastedFrameInfoList(), x = 0; x < w.length; x++) {
        var y = w[x];
        v["__gyr_frame_did_" + y.name] = y.deploymentId
      }
      v && b.getObjectKeys(v).length > 0 && (o.ck = b.encode(b.map2ParamString(v))), o.fnm = l, o.referrer = b.getReferrerAsString(), o.url = b.getUrlAsString(), this.site && (o.st = b.encode(this.site)), o.callback = "__gyr." + m;
      var z = this.getBTCookie();
      z && (o.bt = z), o.now = Math.floor(new Date);
      var A = b.map2QueryString(o, !0),
        B = this.host + a.REQUEST_PATH_CONTENT + A;
      h.load(B, 5e3), c.status = "loading"
    }
  };
  var l = function(a, b) {
    this.queue = a || [], this.callback = b, this.isRunning = !1
  };
  l.prototype = {
    push: function(a) {
      this.queue.push(a), 1 === this.queue.length && this.process()
    },
    start: function() {
      this.isRunning = !0, this.process()
    },
    resume: function() {
      this.isRunning = !0, this.process()
    },
    suspend: function() {
      this.isRunning = !1
    },
    process: function() {
      var a, b = this;
      this.isRunning !== !1 && b.queue.length > 0 && (a = b.queue.shift(), this.callback && this.callback(a), setTimeout(function() {
        b.queue.length > 0 && b.process()
      }, 0))
    }
  };
  var m = function(a, c) {
      var d = new l(c);
      return d.callback = function(c) {
        var e, f, g, h;
        !b.isArray(c) || c.length < 1 || (h = c, e = h.shift(), e && void 0 !== a[e] && void 0 !== a[e].task && (f = a[e].task, g = a[e].sync, g === !0 ? (d.suspend(), h.push(function() {
          d.resume()
        }), f.apply(f, h)) : f.apply(f, h)))
      }, d.start(), {
        push: function(a) {
          !b.isArray(a) || a.length < 1 || d.push(a)
        }
      }
    },
    n = function(a, b, c, d, e) {
      this.clientToken = a, this.host = location.protocol + "//" + b, this.domain = d, this.crossDomain = e, this.tracker = c, this.location = document.location
    };
  n.prototype = {
    load: function(c) {
      var d = new f;
      d.onerror = function() {}, d.ontimeout = function() {};
      var e = this.host + a.REQUEST_PATH_BT;
      e = e + "?clientToken=" + this.clientToken, void 0 !== c && (e = e + "&st=" + b.encode(c)), e = e + "&url=" + b.getUrlAsString(), e += "&callback=__gyr.bt.analize", e = e + "&now=" + Math.floor(new Date), d.load(e, 5e3)
    },
    analizeCondition: function(b) {
      var c = b.category,
        d = b.expire,
        e = b.domain,
        f = b.behaviors,
        g = this.location.href;
      if (!(f instanceof Array)) return !1;
      for (var h = f.length, i = 0; h > i; i++) {
        var j = f[i];
        if (j.url) {
          var k = j.url;
          if (g.match(RegExp(k))) {
            var l = a.COOKIE_PREFIX_BT + c,
              m = j.value,
              n = {
                key: l,
                value: m,
                expire: d,
                domain: e
              };
            return n
          }
        }
      }
      return !1
    },
    getAnalizeValues: function(a) {
      if (!(a instanceof Array)) return [];
      for (var b = [], c = a.length, d = 0; c > d; d++) {
        var e = this.analizeCondition(a[d]);
        e && b.push(e)
      }
      return b
    },
    analize: function(a) {
      if (a instanceof Array) {
        var b = this.getAnalizeValues(a);
        if (b)
          for (var c = b.length, e = 0; c > e; e++) {
            var f = b[e];
            if (d.write(f.key, f.value, f.expire, f.domain), this.crossDomain) {
              var g = document.createElement("img");
              g.src = "//" + x + "/ck/" + t + "/set.gif?ck=" + f.key + "--" + f.value + "--" + f.expire / 1e3, g.style.display = "none", g.style.height = "0px", g.style.width = "0px";
              var h = document.getElementsByTagName("body")[0];
              h.appendChild(g)
            }
          }
      }
    }
  };
  var o = function(a, b, c, e, f, g) {
    var h = "__gyr_fsr",
      i = "__gyr_fsr_pvid";
    this.clientToken = a, this.sdkHost = location.protocol + "//" + b, this.host = location.protocol + "//" + c, this.tracker = e, this.domain = f, this.onload = g;
    var j = d.read(h);
    if (j) {
      var k = j.split("::"),
        l = k[0],
        m = k[1],
        n = k[2] || "";
      if (l && m) {
        var o = d.read(i);
        this.tracker.formSubmitLog(l, m, n, o)
      }
      d.remove(h, this.domain), d.remove(i, this.domain)
    }
  };
  o.prototype = {
    load: function(a, b, c) {
      var d = this;
      this.loadSdk(function() {
        d.loadConfig(a, b, c)
      })
    },
    loadSdk: function(b) {
      var c = new f;
      c.onload = function() {
        b && b()
      }, c.load(this.sdkHost + a.REQUEST_PATH_EFO_SDK + "?r=" + (new Date).getTime(), 5e3)
    },
    loadConfig: function(c, d, e) {
      var g = this,
        h = {},
        i = new f;
      i.onload = function() {
        g.onload && g.onload()
      }, h.cl = this.clientToken, h.pg = c, h.fm = d, h.url = b.getUrlAsString(), h.callback = "__gyrefo.initial", e && (h.st = b.encode(e));
      var j = b.map2QueryString(h, !0);
      i.load(this.host + a.REQUEST_PATH_EFO_CONFIG + j, 5e3)
    },
    conversion: function() {
      this.loadSdk(function() {
        __gyrefo.conversion()
      })
    }
  };
  var p, q = {
      getTargetValues: function(a) {
        var b, c = {};
        if (void 0 !== a) {
          b = a.length;
          for (var e = 0; b > e; e++) {
            var f = a[e],
              g = d.read(f);
            g && (c[f] = g)
          }
        }
        var h = d.getCookieObj();
        for (var f in h) f.match(/^__gyrc_.+$/) && (c[f] = h[f]);
        return c
      }
    },
    r = {
      init: function(a) {
        this.domain = a, this.entities = this.readFromCookie()
      },
      readFromCookie: function() {
        var b = d.read(a.COOKIE_NAME_CAMPAIGN_COUNT);
        if (!b) return {};
        if (b.indexOf(":") < 0) return {};
        var c = b.match(/[^\[\]\,\:]+\:\[[^\[\]]*\]/g);
        if (!c) return {};
        for (var e = c.length, f = {}, g = 0; e > g; g++) {
          var h = c[g].match(/([^\[\]\,\:]+)\:\[(.*)\]/),
            i = h[1],
            j = h[2].split(","),
            k = j.length;
          f[i] = {};
          for (var l = 0; k > l; l++) {
            var m = j[l].split(":"),
              n = m[0],
              o = m[1];
            f[i][n] = parseInt(o, 10)
          }
        }
        return f
      },
      getValue: function(a) {
        var b = this.entities[a],
          c = "";
        for (var d in b) {
          var e = b[d];
          c += d + ":" + e + ","
        }
        return c = c.slice(0, c.length - 1)
      },
      incr: function(a, b) {
        this.entities[a] || (this.entities[a] = {}), this.entities[a][b] ? this.entities[a][b]++ : this.entities[a][b] = 1, this.flush()
      },
      incrAll: function(a) {
        for (var b in this.entities[a]) this.entities[a][b]++;
        this.flush()
      },
      isExists: function(a, b) {
        return this.entities[a] && this.entities[a][b] ? !0 : !1
      },
      create: function(a, b) {
        this.entities[a] || (this.entities[a] = {}), this.entities[a][b] || (this.entities[a][b] = 1), this.flush()
      },
      clear: function(a, b) {
        delete this.entities[a][b], this.flush()
      },
      flush: function() {
        var b = "";
        for (var c in this.entities) {
          b += c + ":[";
          var e = this.entities[c];
          for (var f in e) {
            var g = e[f];
            "number" == typeof g && (b += f + ":" + g + ",")
          }
          b = b.slice(0, b.length - 1), b += "],"
        }
        b = b.slice(0, b.length - 1), d.write(a.COOKIE_NAME_CAMPAIGN_COUNT, b, d.years(30), this.domain)
      }
    };
  p = function(a) {
    function b() {}
    return b.generate = function() {
      var a = b._getRandomInt,
        c = b._hexAligner;
      return c(a(32), 8) + "-" + c(a(16), 4) + "-" + c(16384 | a(12), 4) + "-" + c(32768 | a(14), 4) + "-" + c(a(48), 12)
    }, b._getRandomInt = function(a) {
      return 0 > a ? NaN : 30 >= a ? 0 | Math.random() * (1 << a) : 53 >= a ? (0 | Math.random() * (1 << 30)) + (0 | Math.random() * (1 << a - 30)) * (1 << 30) : NaN
    }, b._getIntAligner = function(a) {
      return function(b, c) {
        for (var d = b.toString(a), e = c - d.length, f = "0"; e > 0; e >>>= 1, f += f) 1 & e && (d = f + d);
        return d
      }
    }, b._hexAligner = b._getIntAligner(16), b.FIELD_NAMES = ["timeLow", "timeMid", "timeHiAndVersion", "clockSeqHiAndReserved", "clockSeqLow", "node"], b.FIELD_SIZES = [32, 16, 16, 8, 8, 48], b.genV4 = function() {
      var a = b._getRandomInt;
      return (new b)._init(a(32), a(16), 16384 | a(12), 128 | a(6), a(8), a(48))
    }, b.parse = function(a) {
      var c, d = /^\s*(urn:uuid:|\{)?([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{2})([0-9a-f]{2})-([0-9a-f]{12})(\})?\s*$/i;
      if (c = d.exec(a)) {
        var e = c[1] || "",
          f = c[8] || "";
        if (e + f === "" || "{" === e && "}" === f || "urn:uuid:" === e.toLowerCase() && "" === f) return (new b)._init(parseInt(c[2], 16), parseInt(c[3], 16), parseInt(c[4], 16), parseInt(c[5], 16), parseInt(c[6], 16), parseInt(c[7], 16))
      }
      return null
    }, b.prototype._init = function() {
      var a = b.FIELD_NAMES,
        c = b.FIELD_SIZES,
        d = b._binAligner,
        e = b._hexAligner;
      this.intFields = new Array(6), this.bitFields = new Array(6), this.hexFields = new Array(6);
      for (var f = 0; 6 > f; f++) {
        var g = parseInt(arguments[f] || 0);
        this.intFields[f] = this.intFields[a[f]] = g, this.bitFields[f] = this.bitFields[a[f]] = d(g, c[f]), this.hexFields[f] = this.hexFields[a[f]] = e(g, c[f] / 4)
      }
      return this.version = this.intFields.timeHiAndVersion >> 12 & 15, this.bitString = this.bitFields.join(""), this.hexString = this.hexFields[0] + "-" + this.hexFields[1] + "-" + this.hexFields[2] + "-" + this.hexFields[3] + this.hexFields[4] + "-" + this.hexFields[5], this.urn = "urn:uuid:" + this.hexString, this
    }, b._binAligner = b._getIntAligner(2), b.prototype.toString = function() {
      return this.hexString
    }, b.prototype.equals = function(a) {
      if (!(a instanceof b)) return !1;
      for (var c = 0; 6 > c; c++)
        if (this.intFields[c] !== a.intFields[c]) return !1;
      return !0
    }, b.genV1 = function() {
      var a = (new Date).getTime(),
        c = b._state;
      a != c.timestamp ? (a < c.timestamp && c.sequence++, c.timestamp = a, c.tick = b._getRandomInt(4)) : Math.random() < b._tsRatio && c.tick < 9984 ? c.tick += 1 + b._getRandomInt(4) : c.sequence++;
      var d = b._getTimeFieldValues(c.timestamp),
        e = d.low + c.tick,
        f = 4095 & d.hi | 4096;
      c.sequence &= 16383;
      var g = c.sequence >>> 8 | 128,
        h = 255 & c.sequence;
      return (new b)._init(e, d.mid, f, g, h, c.node)
    }, b.resetState = function() {
      b._state = new b._state.constructor
    }, b._tsRatio = .25, b._state = new function() {
      var a = b._getRandomInt;
      this.timestamp = 0, this.sequence = a(14), this.node = 1099511627776 * (1 | a(8)) + a(40), this.tick = a(4)
    }, b._getTimeFieldValues = function(a) {
      var b = a - Date.UTC(1582, 9, 15),
        c = b / 4294967296 * 1e4 & 268435455;
      return {
        low: 1e4 * (268435455 & b) % 4294967296,
        mid: 65535 & c,
        hi: c >>> 16,
        timestamp: b
      }
    }, b.makeBackwardCompatible = function() {
      var a = b.generate;
      b.generate = function(c) {
        return c && 1 == c.version ? b.genV1().hexString : a.call(b)
      }, b.makeBackwardCompatible = function() {}
    }, b.overwrittenUUID = a, b
  }(p);
  var s = window.__gyr.config,
    t = s.clientToken,
    u = s.domain ? s.domain : document.domain,
    v = s.site ? s.site : "",
    w = s.logHost ? s.logHost : a.HOSTNAME_LOG,
    x = s.castHost ? s.castHost : a.HOSTNAME_CAST,
    y = s.efoHost ? s.efoHost : a.HOSTNAME_EFO,
    z = s.efoSdkHost ? s.efoSdkHost : a.HOSTNAME_EFO_SDK,
    A = s.efoLogHost ? s.efoLogHost : a.HOSTNAME_EFO_LOG,
    B = s.virtualUrl ? s.virtualUrl : document.location,
    C = s.freqValidHours ? 36e5 * s.freqValidHours : d.hours(1),
    D = s.sessionDays ? s.sessionDays : "",
    E = !1;
  __gyr.__global_init = function() {
    if (!E) {
      E = !0, g.init(D, u), r.init();
      var a = new h(t, v, w, u, B);
      a.init(), i.initial(t, x, a, u, v, C);
      var c = new n(t, x, a, u, s.crossDomain);
      window.__gyr.bt = c;
      var e = new h(t, v, A, u, B),
        j = new o(t, z, y, e, u),
        k = {
          cast: {
            task: function(a) {
              a.load()
            }
          },
          castSync: {
            task: function(a, b) {
              a.onerror = function() {
                b()
              }, a.ontimeout = function() {
                b()
              }, a.onload = function() {
                b()
              }, a.load()
            },
            sync: !0
          },
          loadScriptSync: {
            task: function(a, b) {
              var c = new f;
              c.onerror = function() {
                b()
              }, c.ontimeout = function() {
                b()
              }, c.onload = function() {
                b()
              }, c.load(a, 5e3, !0)
            },
            sync: !0
          },
          loadBTConfig: {
            task: function(a) {
              c.load(a)
            }
          },
          loadEFO: {
            task: function(a, b) {
              j.load(a, b, v)
            }
          },
          cnvEFO: {
            task: function() {
              j.conversion()
            }
          },
          execFunc: {
            task: function(a) {
              void 0 !== a && b.isFunction(a) && a.apply(window.__gyr)
            }
          }
        };
      if (window.__gyr.getTracker = function() {
          return a
        }, window.__gyr.getFrameInfo = function(a) {
          return i.getFrameInfo(a)
        }, window.__gyr.CookieUtil = d, window.__gyr.Session = g, window.__gyr.Util = b, window.__gyr.q = m(k, window.__gyr.q), window.__gyr.UUID = p, s.crossDomain) {
        var l = document.createElement("img");
        l.src = "//" + x + "/ck/" + t + "/set.gif?ck=__gyr_sid--" + g.getSession() + "&ck=__gyr_uuid--" + g.getUU() + "--" + d.years(30) / 1e3, l.style.display = "none", l.style.height = "0px", l.style.width = "0px";
        var q = document.getElementsByTagName("body")[0];
        q.appendChild(l)
      }
    }
  };
  var F = function(a) {
    var b = document.createElement("script");
    b.type = "text/javascript", b.async = !0, b.src = location.protocol + a;
    var c = document.getElementsByTagName("script")[0];
    c.parentNode.insertBefore(b, c)
  };
  s.crossDomain ? (F("//" + x + "/ck/" + t + "/get.js?callback=__gyr.__global_init()&domain=" + u), setTimeout(__gyr.__global_init, 3e3)) : __gyr.__global_init()
}();
