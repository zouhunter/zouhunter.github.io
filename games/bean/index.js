var d = 0,
sp = 0,
px = 13.5,
py = 23,
vx = -.25,
vy = 0,
mp = '',
mp2 = '',
ke = 0,
xf = new Array(4),
yf = new Array(4),
vf = new Array(4);
function dr(s, x, y) {
    l = document.getElementById('p' + s).style;
    l2 = document.getElementById('p' + (s + 1)).style;
    if ((d % 20) < 10) {
        l.display = 'block';
        l2.display = 'none';
        l.left = x + 'em';
        l.top = y + 'em'
    } else {
        l.display = 'none';
        l2.display = 'block';
        l2.left = x + 'em';
        l2.top = y + 'em'
    }
}
function dp(x, y) {
    l = document.getElementById('p1').style;
    l.display = 'block';
    l.left = x + 'em';
    l.top = y + 'em'
}
function jw(j, o, w, a, b, c, d, e, f, g, h, i, k) {
    j.top = a + 'em';
    j.left = b + 'em';
    j.borderTop = c;
    j.borderBottom = d;
    j.borderRight = e;
    j.borderLeft = f;
    if (w < 0.01) o.display = 'none';
    else {
        o.display = 'block';
        o.left = g + 'em';
        o.top = h + 'em';
        o.borderRight = i;
        o.borderTop = k
    }
}
function pac() {
    w = ((1 + Math.sin(d)) / 18);
    v = Math.sqrt(.023 - (w * w)) * 1.1;
    j = document.getElementById('a').style;
    o = document.getElementById('b').style;
    if (vx > 0) jw(j, o, w, 7.41 - w, 3.78, w + 'em solid #ff0', w + 'em solid #ff0', v + 'em solid #000', 'none', 3.77 + v, 7.29, (.20 - v) + 'em solid #000', '.24em solid #000');
    if (vx < 0) jw(j, o, w, 7.41 - w, 3.87 - v, w + 'em solid #ff0', w + 'em solid #ff0', 'none', v + 'em solid #000', 3.68, 7.29, (.20 - v) + 'em solid #000', '.24em solid #000');
    if (vy < 0) jw(j, o, w, 7.45 - v, 3.83 - w, v + 'em solid #000', 'none', w + 'em solid #ff0', w + 'em solid #ff0', 3.72, 7.27, '.22em solid #000', (.19 - v) + 'em solid #000');
    if (vy > 0) jw(j, o, w, 7.37, 3.83 - w, 'none', v + 'em solid #000', w + 'em solid #ff0', w + 'em solid #ff0', 3.72, 7.36 + v, '.22em solid #000', (.19 - v) + 'em solid #000')
}
function a() {
    var vx2 = 0;
    vy2 = 0;
    tc = '';
    if ((Math.floor(px) == px) && (Math.floor(py) == py)) {
        switch (ke) {
        case 37:
            tc = mp2.charAt(ty * 28 + (tx - 1));
            vx2 = -.25;
            vy2 = 0;
            break;
        case 38:
            tc = mp2.charAt((ty - 1) * 28 + tx);
            vx2 = 0;
            vy2 = -.25;
            break;
        case 39:
            tc = mp2.charAt(ty * 28 + (tx + 1));
            vx2 = .25;
            vy2 = 0;
            break;
        case 40:
            tc = mp2.charAt((ty + 1) * 28 + tx);
            vx2 = 0;
            vy2 = .25;
            break
        }
    }
    if ((tc == ' ') || (tc == '*') || (tc == '+')) {
        vx = vx2;
        vy = vy2
    }
    if ((vx < 0) || (vy < 0)) {
        tx = Math.floor(px + vx);
        ty = Math.floor(py + vy)
    } else {
        tx = Math.floor(px + vx + .9);
        ty = Math.floor(py + vy + .9)
    }
    tc = mp2.charAt(ty * 28 + tx);
    if ((tc == ' ') || (tc == '*') || (tc == '+')) {
        px += vx;
        py += vy;
        tx = Math.floor(px);
        ty = Math.floor(py);
        r = px - tx;
        r *= r;
        if (r < 0.015) px = tx;
        r = py - ty;
        r *= r;
        if (r < 0.015) py = ty
    }
    if (px < 1) px = 26;
    else if (px > 26) px = 1;
    tx = Math.floor(px);
    ty = Math.floor(py);
    tc = mp2.charAt(ty * 28 + tx);
    if ((tc == '*') || (tc == '+')) document.getElementById('k' + (ty * 28 + tx)).style.display = 'none';
    dp( - 3.28 + px * .16, -6.84 + py * .16);
    for (u = 0; u < 4; u++) {
        if (u == 0) {
            switch (vf[u]) {
            case 0:
                vyf = -.25;
                vxf = 0;
                txf = Math.floor(xf[u] + vxf);
                tyf = Math.floor(yf[u] + vyf);
                break;
            case 1:
                vyf = .25;
                vxf = 0;
                txf = Math.floor(xf[u] + vxf + .9);
                tyf = Math.floor(yf[u] + vyf + .9);
                break;
            case 2:
                vxf = -.25;
                vyf = 0;
                txf = Math.floor(xf[u] + vxf);
                tyf = Math.floor(yf[u] + vyf);
                break;
            case 3:
                vxf = .25;
                vyf = 0;
                txf = Math.floor(xf[u] + vxf + .9);
                tyf = Math.floor(yf[u] + vyf + .9);
                break
            }
            tcf = mp2.charAt(tyf * 28 + txf);
            if ((tcf == ' ') || (tcf == '*') || (tcf == '+')) {
                txf = Math.floor(xf[u]);
                tyf = Math.floor(yf[u]);
                r = xf[u] - txf;
                r *= r;
                if (r < 0.015) xf[u] = txf;
                r = yf[u] - tyf;
                r *= r;
                if (r < 0.015) yf[u] = tyf;
                xf[u] += vxf;
                yf[u] += vyf
            } else {
                document.getElementById('p' + (vf[u] * 2 + 2)).style.display = 'none';
                document.getElementById('p' + (vf[u] * 2 + 3)).style.display = 'none';
                vf[u] = Math.ceil(Math.random() * 4) - 1
            }
        }
        dr(2 + u * 8 + vf[u] * 2, -3.28 + xf[u] * .16, -6.84 + yf[u] * .16)
    }
    pac();
    window.setTimeout('a()', 25);
    d++
}
function q(r, e, i) {
    for (n = 0; n < i; n += 7) {
        g = document.createElement('div');
        h = g.style;
        h.position = 'absolute';
        h.color = '#' + r[n + 5];
        g.innerHTML = '<div style="font-size:' + r[n + 2] + 'em;overflow:hidden;width:' + r[n + 3] + 'em;height:' + r[n + 4] + 'em;">' + r[n + 6] + '</div>';
        x = 99 + r[n];
        y = 200 + r[n + 1];
        l = g.style;
        l.left = 2 + (x / 100) + 'em';
        l.top = 5 + (y / 100) + 'em';
        document.getElementById(e).appendChild(g)
    }
}
function p(c, t) {
    sp++;
    e = 'p' + sp;
    g = document.createElement('div');
    g.setAttribute('id', e);
    l = g.style;
    l.position = 'absolute';
    l.top = '-4em';
    l.left = '-2em';
    l.display = 'none';
    document.getElementById('c').appendChild(g);
    if (t == 5) {
        r = [66, 7, .50, .61, .94, c, '&bull;'];
        q(r, e, 7)
    } else {
        r = [66, 7, .48, .61, .75, c, '&bull;', 59, -38, 1.33, 1, .67, c, '&middot;'];
        q(r, e, 14);
        if (sp % 2) {
            r = [74, 36, .19, .97, .97, c, 'w', 74, 34, .19, .97, .97, c, 'w', 70, 45, .21, 1, .39, c, '\'', 90, 45, .21, 1, .39, c, '\''];
            q(r, e, 28)
        } else {
            r = [71, 38, .16, .97, .97, c, 'w', 71, 37, .16, .97, .97, c, 'w', 80, 38, .16, .90, .97, c, 'w', 80, 37, .16, .90, .97, c, 'w'];
            q(r, e, 28)
        }
        r = [73, 27, .17, 1, 1, 'ddf', '&bull;', 83, 27, .17, 1, 1, 'ddf', '&bull;'];
        q(r, e, 14);
        switch (t) {
        case 1:
            r = [75, 30, .1, 1, 1, '22f', '&bull;', 86, 30, .1, 1, 1, '22f', '&bull;'];
            break;
        case 2:
            r = [75, 34, .1, 1, 1, '22f', '&bull;', 86, 34, .1, 1, 1, '22f', '&bull;'];
            break;
        case 3:
            r = [73, 32, .1, 1, 1, '22f', '&bull;', 84, 32, .1, 1, 1, '22f', '&bull;'];
            break;
        case 4:
            r = [76, 32, .1, 1, 1, '22f', '&bull;', 87, 32, .1, 1, 1, '22f', '&bull;'];
            break
        }
        q(r, e, 14)
    }
}
function key(e) {
    var vx1 = 0,
    vy1 = 0;
    ke = window.event ? window.event.keyCode: e.which
}
function key2(e) {
    ke = 0
}
function z(c, i, ht, x, y, l, t) {
    g = document.createElement('div');
    if (i) g.setAttribute('id', i);
    h = g.style;
    h.position = 'absolute';
    h.color = '#' + c;
    g.innerHTML = ht;
    h.left = l + ((x * 16) / 100) + 'em';
    h.top = t + ((y * 16) / 100) + 'em';
    document.getElementById('c').appendChild(g)
}
function i() {
    mp = 'abbbbbbbbbbbblf************ff*abbl*abbbl*ff+f  f*f   f*ff*mbbo*mbbbo*mf*************f*abbl*al*abbbf*mbbo*ff*mbblf******ff****fmbbbbl*fmbbl f     f*fabbo m     f*ff          f*ff abbvbbbbbo*mo f         *   f   bbbbbl*al f        f*ff mbbb     f*ff          f*ff abbbabbbbo*mo mbblf************ff*abbl*abbbl*ff*mblf*mbbbo*mf+**ff******* mbl*ff*al*abbbabo*mo*ff*mbblf******ff****ff*abbbbombbl*ff*mbbbbbbbbo*mf*************mbbbbbbbbbbbbb';
    for (y = 0; y < 31; y++) {
        for (x = 0; x < 28; x++) {
            if (x < 14) v = y * 14 + x;
            else v = (y) * 14 - x + 27;
            ch = mp.charAt(v);
            if (x >= 14) switch (ch) {
            case 'a':
                ch = 'l';
                break;
            case 'l':
                ch = 'a';
                break;
            case 'm':
                ch = 'o';
                break;
            case 'o':
                ch = 'm';
                break
            }
            mp2 += ch
        }
    }
    for (y = 0; y < 31; y++) {
        for (x = 0; x < 28; x++) {
            ch = mp2.charAt(y * 28 + x);
            switch (ch) {
            case 'm':
                z('22f', '', '<div style="font-size:.34em;width:.36em;height:1em;overflow:hidden">&bull;</div><div style="color:#000;font-size:.66em;position:absolute;margin-top:-.97em;">&middot;</div><div style="font-size:.28em; width:.4em;height:1em;overflow:hidden;top:-1.1em;left:.12em;position:relative;color:#000;">&bull;</div>', x, y, .50, .26);
                break;
            case 'o':
                z('22f', '', '<div style="font-size:.34em;width:.32em;height:1em;overflow:hidden;text-indent:-.30em;">&bull;</div><div style="color:#000;font-size:.69em;position:absolute;margin-top:-.95em;margin-left:-.16em;">&middot;</div><div style="text-indent:-.30em;font-size:.28em;width:.4em;height:1em;overflow:hidden;top:-1.1em;left:-.04em;position:relative;color:#000;">&bull;</div>', x, y, .46, .26);
                break
            }
        }
    }
    for (y = 0; y < 31; y++) {
        for (x = 0; x < 28; x++) {
            v = y * 28 + x;
            ch = mp2.charAt(v);
            switch (ch) {
            case 'a':
                z('22f', '', '<div style="position:absolute;font-size:.33em;width:.4em;height:.70em;overflow:hidden">&bull;</div><div style="font-size:.27em;width:.4em;height:.70em;overflow:hidden;top:.19em;left:.12em;position:relative;color:#000;">&bull;</div>', x, y, .50, .42);
                break;
            case 'l':
                z('22f', '', '<div style="font-size:.33em;width:.32em;height:.68em;overflow:hidden;position:absolute;text-indent:-.30em;">&bull;</div><div style="text-indent:-.30em;font-size:.27em;width:.4em;height:.70em;overflow:hidden;top:.19em;left:-.02em;position:relative;color:#000;">&bull;</div>', x, y, .46, .42);
                break
            }
        }
    }
    vv = 0;
    for (y = 0; y < 31; y++) {
        for (x = 0; x < 28; x++) {
            ch = mp2.charAt(vv);
            switch (ch) {
            case '*':
                z('fba', 'k' + vv, '<div style="font-size:.1em;">&bull;</div>', x, y, .5, .5);
                break;
            case '+':
                z('fba', 'k' + vv, '<div style="font-size:.32em;">&bull;</div>', x, y, .42, .35);
                break;
            case 'b':
                z('22f', '', '<div style="font-size:.24em;">_</div>', x, y, .46, .30);
                break;
            case 'v':
                z('fbf', '', '<div style="font-size:.24em;">_</div>', x, y, .46, .30);
                break;
            case 'f':
                z('22f', '', '<div style="font-size:.18em;">|</div>', x, y, .50, .43);
                break
            }
            vv++
        }
    }
    p('ff0', 5);
    g = document.createElement('div');
    g.setAttribute('id', 'a');
    l = g.style;
    l.position = 'absolute';
    g.innerHTML = '<div></div>';
    document.getElementById('p1').appendChild(g);
    g = document.createElement('div');
    g.setAttribute('id', 'b');
    l = g.style;
    l.position = 'absolute';
    l.lineHeight = '10em';
    g.innerHTML = '<div></div>';
    document.getElementById('p1').appendChild(g);
    for (u = 0; u < 8; u++) p('f00', (u - (u % 2)) / 2 + 1);
    for (u = 0; u < 8; u++) p('fb5', (u - (u % 2)) / 2 + 1);
    for (u = 0; u < 8; u++) p('0ff', (u - (u % 2)) / 2 + 1);
    for (u = 0; u < 8; u++) p('fbf', (u - (u % 2)) / 2 + 1);
    for (u = 1; u < 4; u++) {
        xf[u] = 9.5 + u * 2;
        yf[u] = 14;
        vf[u] = u
    }
    xf[0] = 13;
    yf[0] = 11;
    vf[0] = 2;
    document.onkeydown = key;
    a()
}