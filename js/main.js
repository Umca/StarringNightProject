/**
 * Created by Horizone on 07.03.2016.
 */
var canvas = new fabric.StaticCanvas('general');
var context = canvas.getContext("2d");
canvas.backgroundColor = '#00043e';
canvas.setHeight(572);
canvas.setWidth(1366);

function makeConstellation(coords) {
    return new fabric.Path(coords, {
        fill: '#00043e',
        stroke: '#167591',
        strokeWidth: 2
    });
};
function makeStars(r, x, y) {
    return new fabric.Circle({
        radius: r,
        fill: '#fff',
        left: x,
        top: y
    });
};
function naming(text, x, y) {
    return new fabric.Text(text, {
        fontFamily: 'Arial',
        left: x,
        top: y,
        fill: '#afedf8',
        fontSize: 10
    });
};
var ursaMajorC = makeConstellation('M 0 0 L 61 -22 L 129 -22 L 184 -15 L 115 -8 M 129 -22 L 115 -8 L 113 10 L 128 22 L 160 31 M 128 22 L 153 38 M 61 -22 L 63 0 L 20 16 M 0 0 L 20 16 L 27 40 L 55 87 M 27 40 L 67 50 L 113 54 M 67 50 L 110 62 M 67 50 L 128 22');
ursaMajorC.set({top: 20, left: 5});
var ursaMajorT = naming("Большая медведица", 28, 55);
var s1 = makeStars(3, 2, 38);
var s2 = makeStars(3, 63, 19);
var s3 = makeStars(3, 129, 18);
var s4 = makeStars(3, 189, 23);
var s5 = makeStars(3, 118, 31);
var s6 = makeStars(3, 117, 51);
var s7 = makeStars(3, 132, 62);
var s8 = makeStars(3, 160, 70);
var s9 = makeStars(3, 157, 78);
var s10 = makeStars(3, 118, 93);
var s11 = makeStars(3, 116, 102);
var s12 = makeStars(3, 74, 90);
var s13 = makeStars(3, 57, 127);
var s14 = makeStars(3, 23, 55);
var s15 = makeStars(3, 29, 79);
var s16 = makeStars(3, 65, 38);
var ursaMajor = new fabric.Group(
    [ursaMajorC, ursaMajorT, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16], {
        top: 20,
        left: 2,
        angle: -2,
        id:'ursaMajor',
        name:'большая медведица'
    }
);
canvas.add(ursaMajor);


var leoMinorC = makeConstellation('M 40 120 L 60 110 L 80 118 L 60 126 L 40 120 M 80 118 L 105  112');
var leoMinorT = naming("Малый лев", 110, 135);
var q1 = makeStars(3, 72, 125),
    q2 = makeStars(3, 89, 115),
    q3 = makeStars(3, 109, 125),
    q4 = makeStars(3, 89, 132),
    q5 = makeStars(3, 134, 117);
var leoMinor = new fabric.Group(
    [leoMinorC, leoMinorT, q1, q2, q3, q4, q5],{
        top: 135,
        left: 88,
        id:'leoMinor',
        name:'малый лев'
    }
);
canvas.add(leoMinor);


var leoC = makeConstellation('M 10 200 L 40 195 L 42 165 L 100 169 L 115 182 L 114 206 L 40 195 M 114 206 L 139 209 M 100 169  L 103 156 L 126 147 L 130 157 142 160');
var leoT = naming('Лев', 140, 199);
var w1 = makeStars(3, 75, 230),
    w2 = makeStars(3, 104, 223),
    w3 = makeStars(3, 106, 194),
    w4 = makeStars(3, 165, 197),
    w5 = makeStars(3, 167, 187),
    w6 = makeStars(3, 190, 177),
    w7 = makeStars(3, 192, 186),
    w8 = makeStars(3, 204, 187),
    w9 = makeStars(3, 178, 209),
    w10 = makeStars(3, 179, 235),
    w11 = makeStars(3, 201, 237);
var leo = new fabric.Group(
    [leoC, leoT,w1, w2 , w3, w4, w5, w6, w7, w8, w9, w10, w11], {
        top: 185,
        left: 15,
        id:'leo',
        name:'лев'
    }
);
canvas.add(leo);


var sextansC = makeConstellation('M 65 280 L 110 320 L 98 278');
var sextansT = naming('Секстант', 40, 300);
var e1 = makeStars(2, 86, 300),
    e2 = makeStars(2, 120, 300),
    e3 = makeStars(2, 133, 343);
var sextans = new fabric.Group(
    [sextansC, sextansT, e1, e2, e3],{
        top: 295,
        left:39,
        id:"sextans",
        name:'секстант'
    });
canvas.add(sextans);
canvas.renderAll();


var craterC = makeConstellation('M 40 350 L 53 355 L 59 369 L 53 383 L 37 385 L 27 381 M 53 383 L 61 413 L 77 383 L 59 369');
var craterT = naming('Чаша', 48, 390);
var r1 = makeStars(2, 66, 382),
    r2 = makeStars(2, 75, 385),
    r3 = makeStars(2, 82, 399),
    r4 = makeStars(2, 77, 413),
    r5 = makeStars(2, 61, 415),
    r6 = makeStars(2, 52, 413),
    r7 = makeStars(2, 85, 443),
    r8 = makeStars(2, 100, 414);
var crater = new fabric.Group(
    [craterC, craterT, r1, r2, r3, r4, r5, r6, r7, r8], {
        top: 355,
        left: 12,
        id:"crater",
        name:'чаша'
    });
canvas.add(crater);

var hydraC = makeConstellation('M 15 470 L 33 466 L 63 385 L 85 388 L 96 363 L 135 375 L 160 335 L 145 300 L 178 278 L 187 257 L 209 258 L 209 275 L 200 275 L 187 257');
var hydraT = naming('Гидра', 200, 490);

var t1 = makeStars(2, 274, 382),
    t2 = makeStars(4, 284, 363),
    t3 = makeStars(2, 305, 363),
    t4 = makeStars(2, 305, 381),
    t5 = makeStars(2, 295, 381),
    t6 = makeStars(2, 243, 406),
    t7 = makeStars(4, 256, 440),
    t8 = makeStars(2, 231, 479),
    t9 = makeStars(2, 200, 373),
    t10 = makeStars(2, 191, 468),
    t11 = makeStars(2, 181, 494),
    t12 = makeStars(2, 160, 491),
    t13 = makeStars(2, 131, 571),
    t14 = makeStars(2, 113, 575);
var hydra = new fabric.Group(
    [hydraC, hydraT, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14], {
        top: 255,
        left: 24,
        id:"hydra",
        name:'гидра'
    });
canvas.add(hydra);

var antliaC = makeConstellation('M 70 450 L 120 420 L 190 450');
var antliaT = naming('Насос', 170, 452);
var y1 = makeStars(2, 131, 464),
    y2 = makeStars(2, 178, 433),
    y3 = makeStars(2, 250, 464);
var antlia = new fabric.Group(
    [antliaC, antliaT, y1, y2, y3], {
        top: 455,
        left: 45,
        angle: -3,
        id:"antlia",
        name:'насос'
    });
canvas.add(antlia);

var velaC = makeConstellation('M 123 499 L 160 489 L 175 497 L 230 515 L 160 531 L 160 489 M 160 531 L 175 497');
var velaT = naming('Паруса', 170, 527);
var u1 = makeStars(2, 175, 520),
    u2 = makeStars(2, 212, 510),
    u3 = makeStars(2, 213, 550),
    u4 = makeStars(2, 226, 517),
    u5 = makeStars(2, 283, 535);
var vela = new fabric.Group(
    [velaC, velaT, u1, u2, u3, u4, u5], {
        top: 485,
        left: 90,
        id:"vela",
        name:'паруса'
    });
canvas.add(vela);

var monocerosC = makeConstellation('M  160 230 L 190 250 L 220 218 L 250 240 L 267 231');
var monocerosT = naming('Единорог', 220, 227);
var i1 = makeStars(2, 213, 247),
    i2 = makeStars(2, 242, 267),
    i3 = makeStars(2, 272, 232),
    i4 = makeStars(4, 303, 253),
    i5 = makeStars(2, 318, 247);
var monoceros = new fabric.Group(
    [monocerosC, monocerosT, i1, i2, i3, i4, i5], {
        top: 290,
        left: 220,
        id:"monoceros",
        name:'единорог'
    });
canvas.add(monoceros);

var canisMajorC = makeConstellation('M 280 350 L 295 353 L 315 355 M 295 353 L 281 395 L 271 405 M 281 395 L 295 403 L 319 405');
var canisMajorT = naming('Большой пес', 240, 400);
var o1 = makeStars(2, 305, 376),
    o2 = makeStars(4, 317, 377),
    o3 = makeStars(2, 339, 381),
    o4 = makeStars(2, 295, 431),
    o5 = makeStars(2, 304, 421),
    o6 = makeStars(2, 316, 430),
    o7 = makeStars(2, 340, 431);
var canisMajor = new fabric.Group(
    [canisMajorC, canisMajorT, o1, o2, o3, o4, o5, o6, o7], {
        top: 350,
        left: 220,
        id:"canisMajor",
        name:'большой пес'
    });
canvas.add(canisMajor);


var puppisC = makeConstellation('M 230 390 L 245 392 L 237 440 L 275 440 L 265 465 L 237 440 M 265 465 L 275 467 L 305 463 L 295 490 L 275 467');
var puppisT = naming('Корма', 310, 498);
var p1 = makeStars(2, 283, 441),
    p2 = makeStars(2, 268, 440),
    p3 = makeStars(2, 273, 487),
    p4 = makeStars(2, 313, 489),
    p5 = makeStars(2, 302, 513),
    p6 = makeStars(2, 312, 515),
    p7 = makeStars(2, 341, 512),
    p8 = makeStars(2, 332, 538);
var puppis = new fabric.Group(
    [puppisC, puppisT, p1, p2, p3, p4, p5, p6, p7, p8], {
        top: 390,
        left: 240,
        id:"puppis",
        name:'корма'
    });
canvas.add(puppis);

var pyxisC = makeConstellation('M 200 390 L 210 430 L 215 445');
var pyxisT = naming('Компас', 170, 450);
var a1 = makeStars(2, 207, 419),
    a2 = makeStars(2, 215, 453),
    a3 = makeStars(2, 220, 470);
var pyxis = new fabric.Group(
    [pyxisC, pyxisT, a1, a2, a3 ],  {
        top: 430,
        left: 160,
        id:"pyxis",
        name:'компас'
    });
canvas.add(pyxis );


var columbaC = makeConstellation('M 380 400 L 410 410 L 430 403 L 437 410 M 410 410  L 403 443');
var columbaT = naming('Голубь', 440, 445);
var d1 = makeStars(2, 407, 420),
    d2 = makeStars(2, 438, 429),
    d3 = makeStars(2, 457, 425),
    d4 = makeStars(2, 463, 429),
    d5 = makeStars(2, 431, 461);
var columba = new fabric.Group ([columbaC, columbaT, d1, d2, d3, d4, d5 ], {
    top: 420,
    left: 320,
    id:"columba",
    name:'голубь'
});
canvas.add(columba);

var caelumC = makeConstellation('M 400 460 L 420 465 L 430 490 L 445 505');
var caelumT = naming('Резец', 410, 505);
var d1 = makeStars(2, 420, 481),
    d2 = makeStars(2, 440, 486),
    d3 = makeStars(2, 452, 510),
    d4 = makeStars(2, 466, 526);
var caelum = new fabric.Group (
    [caelumC, caelumT, d1, d2, d3, d4], {
        top: 445,
        left: 365,
        id:"caelum",
        name:'резец'
    });
canvas.add(caelum);

var lepusC = makeConstellation('M 340 330 L 347 355 L 352 360 L 367 356 L 365 340 L 361 329 L 356 324 L 340 330 M 367 356 L 385 359 L 383 335 L 365 343');
var lepusT = naming('Заяц', 410, 355);
var f1 = makeStars(2, 376, 342),
    f2 = makeStars(3, 387, 360),
    f3 = makeStars(2, 361, 346),
    f4 = makeStars(2, 370, 373),
    f5 = makeStars(2, 373, 378),
    f6 = makeStars(3, 389, 373),
    f7 = makeStars(2, 404, 351),
    f8 = makeStars(2, 407, 375),
    f9 = makeStars(2, 384, 348);
var lepus = new fabric.Group ([lepusC, lepusT, f1, f2, f3, f4, f5, f6, f7, f8, f9], {
    left: 330,
    top: 340,
    id:"lepus",
    name:'заяц'
});
canvas.add(lepus);

var eredanusC = makeConstellation('M 380 300 L 395 295 L 403 296 L 423 305 L 443 339 L 449 337 L 454 327 L 464 324 L 500 320 L 510 365 L 500 388 L 490 385 L 475 384 L 455 389 L 450 385 L 420 415 L 437 428 L 447 450 L 465 458 L 480 445 L 495 443 L 503 480' );
var eredanusT = naming('Эридан', 500, 395);
var g1 = makeStars(3, 442, 393),
    g2 = makeStars(2, 460, 387),
    g3 = makeStars(2, 467, 388),
    g4 = makeStars(2, 488, 397),
    g5 = makeStars(2, 507, 430),
    g6 = makeStars(2, 514, 430),
    g7 = makeStars(2, 518, 418),
    g8 = makeStars(2, 526, 416),
    g9 = makeStars(2, 563, 412),
    g10 = makeStars(2, 573, 457),
    g11 = makeStars(2, 565, 480),
    g12 = makeStars(2, 555, 477),
    g13 = makeStars(2, 543, 476),
    g14 = makeStars(2, 522, 480),
    g15= makeStars(2, 515, 478),
    g16= makeStars(2, 485, 505),
    g17= makeStars(2, 501, 518),
    g18= makeStars(2, 510, 540),
    g19= makeStars(2, 529, 548),
    g20= makeStars(2, 543, 536),
    g21= makeStars(2, 558, 534),
    g22= makeStars(2, 566, 570);
var eredanus = new fabric.Group([eredanusC, eredanusT, g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12, g13, g14, g15, g16, g17, g18, g19, g20, g21, g22], {
    top: 300,
    left: 390,
    id:"eredanus",
    name:'эридан'
});
canvas.add(eredanus);

var fornaxC = makeConstellation('M 500 420 L 530 435 L 580 420');
var fornaxT = naming('Печь', 590, 440);
var h1 = makeStars(2, 540, 425),
    h2 = makeStars(2, 571, 440),
    h3 = makeStars(2, 619, 426);
var fornax = new fabric.Group(
    [fornaxC, fornaxT, h1, h2, h3], {
        top: 415,
        left: 480,
        id:"fornax",
        name:'печь'
    });
canvas.add(fornax);

var phenixC = makeConstellation('M 570 430 L 570 450 L 590 438 L 570 430 M 590 438 L 605 430 L 620 438 L 638 427 L 638 447 L 620 438  M 605 430 L 600 478 L 625 490 M 605 430 L 600 420');
var phenixT = naming('Феникс', 590, 490);
var j1 = makeStars(2, 633, 456),
    j2 = makeStars(2, 637, 463),
    j3 = makeStars(2, 623, 470),
    j4 = makeStars(2, 603, 463),
    j5 = makeStars(2, 603, 483),
    j6 = makeStars(2, 672, 462),
    j7 = makeStars(2, 672, 482),
    j8 = makeStars(2, 653, 470),
    j9 = makeStars(2, 635, 512),
    j10 = makeStars(2, 656, 524);
var phenix = new fabric.Group([phenixC, phenixT, j1, j2, j3, j4, j5, j6, j7, j8, j9, j10], {
    left: 580,
    angle: 45,
    top: 460,
    id:"phenix",
    name:'феникс'
});
canvas.add(phenix);

var cetusC = makeConstellation('M 660 310 L 640 350 L 618 310 L 570 350 L 560 375 M 570 350 L 560 310 L 600 295 L 618 310 M 560 310 L 520 260 L 500 250 L 492 230 L 470 227 L 473 200 L 490 195 L 515 200 L 492 230');
var cetusT = naming('Кит', 660, 370);
var k1 = makeStars(3, 653, 400),
    k2 = makeStars(3, 662, 437),
    k3 = makeStars(3, 654, 461),
    k4 = makeStars(3, 733, 437),
    k5 = makeStars(3, 753, 400),
    k6 = makeStars(3, 711, 400),
    k7 = makeStars(3, 695, 383),
    k8 = makeStars(3, 616, 350),
    k9 = makeStars(3, 595, 340),
    k10 = makeStars(3, 585, 316),
    k11 = makeStars(3, 563, 316),
    k12 = makeStars(3, 565, 290),
    k13 = makeStars(3, 583, 285),
    k14 = makeStars(3, 609, 288);
var cetus = new fabric.Group(
    [cetusC, cetusT, k1, k2, k3, k4, k5, k6, k7, k8, k9, k10, k11, k12, k13, k14], {
        left: 490,
        top: 235,
        id:"centus",
        name:'кит'
    });
canvas.add(cetus);

var lynxC = makeConstellation('M 340 20 L 300 20 L 280 70 L 220 90 L 185 120 L 170 160');
var lynxT = naming('Рысь', 330, 110);
var l1 = makeStars(4, 381, 87),
    l2 = makeStars(4, 419, 87),
    l3 = makeStars(4, 361, 138),
    l4 = makeStars(4, 300, 157),
    l5 = makeStars(4, 264, 190),
    l6 = makeStars(5, 250, 228);
var lynx = new fabric.Group([lynxC, lynxT , l1, l2, l3, l4, l5, l6], {
    top: 10,
    left: 180,
    id:"lynx",
    name:'рысь'
});
canvas.add(lynx);

var cancerC = makeConstellation(' M 220 150 L 220 190 L 200 210 M 220 190 L 250 220');
var cancerT = naming('Рак', 210, 200);
var z1 = makeStars(3, 243, 180),
    z2 = makeStars(3, 243, 223),
    z3 = makeStars(3, 223, 243),
    z4 = makeStars(4, 270, 250);
var cancer = new fabric.Group([cancerC, cancerT, z1, z2, z3, z4], {
    top: 160,
    left: 180,
    id:"cancer",
    name:'рак'
});
canvas.add(cancer);

var canisMinorC = makeConstellation('M 260 230 L 280 210');
var canisMinorT = naming('Малый пес', 280, 230);
var x1 = makeStars(4, 270, 237),
    x2 = makeStars(4, 287, 218);
var canisMinor = new fabric.Group ([canisMinorC, canisMinorT, x1, x2], {
    left: 250,
    id:"canisMinor",
    name:'малый пес'
});
canvas.add(canisMinor);

var geminiC = makeConstellation('M 268 160 L 275 140 L 310 143 L 343 158 L 358 168 M 268 160 L 290 182 L 305  185 L 335 185 L 330 200');
var geminiT = naming('Близнецы', 300, 220);
var c1 = makeStars(4,315, 167),
    c2 = makeStars(4, 310, 190),
    c3 = makeStars(2, 334,210),
    c4 = makeStars(2, 346, 214),
    c5 = makeStars(4, 378, 213),
    c6 = makeStars(2, 375, 226),
    c7 = makeStars(2, 353, 172),
    c8 = makeStars(4, 385, 184),
    c9 = makeStars(4, 400, 195);
var gemini = new fabric.Group ([geminiC, geminiT, c1, c2, c3, c4, c5, c6, c7, c8, c9], {
    top: 150,
    left: 260,
    id:"gemini",
    name:'близнецы'
});
canvas.add(gemini);


var aurigaC = makeConstellation('M 375 15 L 375 65 L 368 100 L 390 140 L 420 120 L 417 80 L 412 55 L 375 15 M 412 55 L 375 65 ');
var aurigaT = naming('Возничий', 440, 190);
var v1 = makeStars(2,400, 78),
    v2 = makeStars(2, 399, 125),
    v3 = makeStars(2, 394,160),
    v4 = makeStars(2, 414, 203),
    v5 = makeStars(2, 446, 180),
    v6 = makeStars(2, 442, 143),
    v7 = makeStars(2, 436, 115);
var auriga = new fabric.Group([aurigaC, aurigaT, v1, v2, v3, v4, v5, v6, v7], {
    top: 40,
    left: 360,
    id:"auriga",
    name:'возничий'
});
canvas.add(auriga);

var taurusC = makeConstellation('M 390 140 L 430 160 L 450 155 M 430 160 L 434 173 L 390 165 M 434 173 L 445 179 L 465 185 ');
var taurusT = naming('Телец', 440, 200);
var b1 = makeStars(4,423, 158),
    b2 = makeStars(2, 425, 187),
    b3 = makeStars(2, 470,194),
    b4 = makeStars(3, 461, 193),
    b5 = makeStars(2, 484, 200),
    b6 = makeStars(3, 500, 205),
    b7 = makeStars(3, 488, 173),
    b8 = makeStars(3, 466, 178);
var taurus = new fabric.Group ([taurusC, taurusT, b1, b2, b3, b4, b5, b6, b7, b8], {
    top:180,
    left: 400,
    id:"taurus",
    name:'телец'
});
canvas.add(taurus);



var orionC = makeConstellation('M 340 320 L 370 323 L 370 290 L 350 292 L 340 320 M 350 292 L 345 260 L 360 255 L 375 265  L 370 290 M 375 265 L 395 285 L 400 275 M 345 260 L 335 230 L 344 210 M 345 260 L 344 230 L 350 220');
var orionT = naming('Орион', 410, 340);
var n1 = makeStars(2, 374, 267),
    n2 = makeStars(2, 367, 287),
    n3 = makeStars(2, 375, 287),
    n4 = makeStars(2, 380, 276),
    n5 = makeStars(2, 376, 313),
    n6 = makeStars(2, 381, 345),
    n7 = makeStars(2, 374, 374),
    n8 = makeStars(2, 402, 378),
    n9 = makeStars(2, 402, 347),
    n10 = makeStars(2, 407, 322),
    n11 = makeStars(2, 427, 339),
    n12 = makeStars(2, 431, 330),
    n13 = makeStars(2, 392, 310);
var orion = new fabric.Group([orionC,orionT, n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11, n12, n13], {
    top:  210,
    left: 340,
    id:"orion",
    name:'орион'
});
canvas.add(orion );


var cassiopeiaC = makeConstellation('M 530 10 L 550 40 L 570 37 L 590 50 L 610 47 L 590 50 M 590 50 L 598 60 ');
var cassiopeiaT = naming('Кассиопея', 560, 70);
var m1 = makeStars(4, 567, 35),
    m2 = makeStars(4, 588, 63),
    m3 = makeStars(3, 610, 60),
    m4 = makeStars(3, 629, 75),
    m5 = makeStars(3, 651, 70),
    m6 = makeStars(2, 636, 85);
var cassiopeia = new fabric.Group([cassiopeiaC, cassiopeiaT, m1, m2, m3, m4, m5, m6], {
    top: 20,
    left: 570,
    id:"cassiopeia",
    name:'кассиопея'
});
canvas.add(cassiopeia );

var perseusC = makeConstellation('M  500 40 L 490 45 L 497 50 L 507 52 L 515 52 L 525 50 L 537 35 L 547 30 L 545 45 L 537 58 L 539 75 L 547 98 M 507 52 L 505 80 L 497 90 L 499 104 L 501 113 521 105');
var perseusT = naming('Персей', 510, 60);
var qq1 = makeStars(2, 529, 81),
    qq2 = makeStars(2, 518, 86),
    qq3 = makeStars(2, 525, 89),
    qq4 = makeStars(2, 533, 92),
    qq5 = makeStars(4, 551, 89),
    qq6 = makeStars(2, 563, 75),
    qq7 = makeStars(2, 573, 70),
    qq8 = makeStars(2, 574, 84),
    qq9 = makeStars(2, 566, 99),
    qq10 = makeStars(4, 567, 115),
    qq11 = makeStars(2, 574, 137),
    qq12 = makeStars(2, 550, 144),
    qq13 = makeStars(4, 530, 153),
    qq14 = makeStars(2, 531, 120),
    qq15 = makeStars(2, 526, 129);
var perseus = new fabric.Group([perseusC, perseusT, qq1, qq2, qq3, qq4, qq5, qq6, qq7, qq8,qq9, qq10, qq11, qq12, qq13, qq14, qq15], {
    top: 40,
    left: 450,
    id:"perseus",
    name:'персей'
});
canvas.add(perseus );

var triangulumC = makeConstellation('M 500 200 L 520 240 L 490 210 L 500 200 ');
var triangulumT = naming('Треугольник', 450, 250);
var ww1 = makeStars(4, 513, 216),
    ww2 = makeStars(2, 503, 229),
    ww3 = makeStars(2, 538, 263);
var triangulum = new fabric.Group([triangulumC, triangulumT, ww1, ww2, ww3], {
    top: 140,
    left: 450,
    id:"triangulum",
    name:'треугольник'
});
canvas.add(triangulum);


var piscesC = makeConstellation('M 500 200 L 490 210 L 485 240 L 475 260 L 460 280 L 480 271 L 505 265 L 515 268 L 555 273  L 568 276 L 575 286 L 587 288  L 597 282 L 605 282 M 597 282 L 584 265 L 568 276');
var piscesT = naming('Рыбы', 500, 290);
var ee1 = makeStars(2, 562, 252),
    ee2 = makeStars(4, 555, 280),
    ee3 = makeStars(2, 572, 241),
    ee4 = makeStars(2, 530, 325),
    ee5 = makeStars(2, 554, 313),
    ee6 = makeStars(2, 574, 308),
    ee7 = makeStars(2, 586, 312),
    ee8 = makeStars(2, 639, 320),
    ee9 = makeStars(2, 645, 328),
    ee10 = makeStars(2, 658, 330),
    ee11 = makeStars(3, 666, 325),
    ee12 = makeStars(2, 676, 325),
    ee13 = makeStars(2, 656, 307);
var pisces = new fabric.Group([piscesC, piscesT, ee1, ee2, ee3, ee4, ee5, ee6, ee7, ee8, ee9, ee10, ee11, ee12, ee13], {
    top: 190,
    left: 560,
    id:"pisces",
    name:'рыбы'
});
canvas.add(pisces);

var ariesC = makeConstellation('M 500 210 L 520 217 L 530 223');
var ariesT = naming('Овен', 500, 220);
var rr1 = makeStars(4, 514, 215),
    rr2 = makeStars(4, 526, 217),
    rr3 = makeStars(2, 546, 229);
var aries = new fabric.Group([ariesC, ariesT, rr1, rr2, rr3], {
    top: 210,
    left: 500,
    id:"aries",
    name:'овен'
});
canvas.add(aries);

var andromedaC = makeConstellation('M 500 110 L 550 140 L 570 120 L 550 100 M 550 140 L 580 150 L 605 154 M 580 150 L 581 140 L 595 129 L 630 105 L 650 125');
var ariesT = naming('Андромеда', 575, 168);
var tt1 = makeStars(4, 570, 133),
    tt2 = makeStars(4, 623, 163),
    tt3 = makeStars(3, 643, 145),
    tt4 = makeStars(2, 625, 126),
    tt5 = makeStars(2, 654, 175),
    tt6 = makeStars(4, 674, 179),
    tt7 = makeStars(2, 654, 166),
    tt8 = makeStars(2, 705, 130),
    tt9 = makeStars(2, 723, 150);
var andromeda = new fabric.Group([andromedaC, ariesT, tt1, tt2, tt3, tt4, tt5, tt6, tt7, tt8, tt9], {
    top: 120,
    left: 570,
    id:"andromeda",
    name:'андромеда'
});
canvas.add(andromeda);


var pegasusC = makeConstellation('M 677 160 L 677 200 L 717 200 L 717 160 L 677 160 M 717 160 L 727 145 M 717 160 L 727 175 L 750 172 L 770 170 M 717 200 L 756 233 L 777 220');
var pegasusT = naming('Пегас', 775, 225);
var yy1 = makeStars(4, 726, 240),
    yy2 = makeStars(4, 764, 240),
    yy3 = makeStars(4, 764, 200),
    yy4 = makeStars(3, 774, 190),
    yy5 = makeStars(2, 777, 217),
    yy6 = makeStars(3, 816, 214),
    yy7 = makeStars(2, 805, 275),
    yy8 = makeStars(2, 827, 262);
var pegasus = new fabric.Group([pegasusC, pegasusT, yy1, yy2, yy3, yy4, yy5, yy6, yy7, yy8], {
    top: 166,
    left: 676  ,
    id:"pegasus",
    name:'пегас'
});
canvas.add(pegasus);

var cepheusC = makeConstellation('M 720 20 L 740 60 L 755 64 L 749 70 L 790 53 L 796 10 L 730 -20 L 720 20 L 796 10 M 790 53 L 805 55 L 809 43');
var cepheusT = naming('Цефей', 795, 70);
var tt1 = makeStars(3, 772, 22),
    tt2 = makeStars(3, 763, 60),
    tt3 = makeStars(3, 788, 112),
    tt4 = makeStars(3, 785, 103),
    tt5 = makeStars(3, 797, 106),
    tt6 = makeStars(3, 833, 97),
    tt7 = makeStars(3, 846, 100),
    tt8 = makeStars(3, 852, 85),
    tt9 = makeStars(3, 837, 50);
var cepheus = new fabric.Group([cepheusC,cepheusT, tt1, tt2, tt3, tt4, tt5, tt6, tt7, tt8, tt9], {
    top: 13,
    left: 700,
    angle: -15,
    id:"cepheus",
    name:'цефей'
});
canvas.add(cepheus);

var lancertaC = makeConstellation('M 750 100 L 740 110 L 753 112 L 743 116 L 753 119 L 742 140 L 755 170');
var lancertaT = naming('Ящерица', 770, 190);
var yy1 = makeStars(3, 753, 133),
    yy2 = makeStars(3, 746, 142),
    yy3 = makeStars(3, 759, 145),
    yy4 = makeStars(3, 750, 148),
    yy5 = makeStars(3, 760, 153),
    yy6 = makeStars(3, 750, 173),
    yy7 = makeStars(3, 760, 201);
var lancerta = new fabric.Group([lancertaC, lancertaT, yy1, yy2, yy3, yy4, yy5, yy6, yy7], {
    top: 115,
    left: 740,
    id:"lancerta",
    name:'ящерица'
});
canvas.add(lancerta);

var equuleusC = makeConstellation('M 800 240 M 802 260');
var equuleusT = naming('Малый конь', 810, 250);
var uu1 = makeStars(3, 798, 247),
    uu2 = makeStars(3, 800, 267);
var equuleus = new fabric.Group([equuleusC,equuleusT, uu1, uu2], {
    top: 255,
    left: 800,
    id:"equuleus",
    name:'малый конь'
})
canvas.add(equuleus);

var delphinusC = makeConstellation('M 820 230 L 830 234 M 820 230 810 237 L 822  242 L 830 234 M 822  242 L 824 270');
var delphinusT = naming('Дельфин', 845, 270);
var ii1 = makeStars(2, 830, 250),
    ii2 = makeStars(2, 820, 255),
    ii3 = makeStars(2, 837, 254),
    ii4 = makeStars(2, 830, 260),
    ii5 = makeStars(2, 833, 290);
var delphinus = new fabric.Group([delphinusC, delphinusT, ii1, ii2, ii3, ii4, ii5], {
    top: 200,
    left: 815,
    angle: -4,
    id:"delphinus",
    name:'дельфин'
});
canvas.add(delphinus);

var sagittaC = makeConstellation('M 820  230 L 845 232 L 853 230 M 845 232 L 852 234');
var sagittaT = naming('Стрела', 838, 215);
var oo1 = makeStars(2, 837, 231),
    oo2 = makeStars(2, 860, 232),
    oo3 = makeStars(2, 868, 230),
    oo4 = makeStars(2, 869, 235);
var sagitta = new fabric.Group([sagittaC, sagittaT, oo1, oo2, oo3, oo4], {
    top: 180,
    left: 862,
    angle: 5,
    id:"sagitta",
    name:'стрела'
});
canvas.add(sagitta);

var vulpeculaC = makeConstellation('M 820  230 L 850 226 L 863 236 ');
var vulpeculaT = naming('Лисичка', 838, 215);
var pp1 = makeStars(2, 840, 235),
    pp2 = makeStars(2, 869, 230),
    pp3 = makeStars(2, 884, 239);
var vulpecula = new fabric.Group([vulpeculaC, vulpeculaT, pp1, pp2, pp3], {
    top: 157,
    left: 880,
    id:"velpecula",
    name:'лисичка'
});
canvas.add(vulpecula);

var cygnusC = makeConstellation('M 750 80 L 817 140 M  810 75  L 810 76 L 780 108 L 745 145 L 715 140');
var cygnusT = naming('Лебедь', 840, 130);
var aa1 = makeStars(4, 800, 113),
    aa2 = makeStars(4, 828, 142),
    aa3 = makeStars(4, 793, 177),
    aa4 = makeStars(4, 763, 174),
    aa5 = makeStars(3, 858, 109),
    aa6 = makeStars(3, 864, 170);
var cygnus = new fabric.Group([cygnusC, cygnusT, aa1, aa2, aa3, aa4, aa5, aa6], {
    top: 90,
    left: 780,
    id:"cygnus",
    name:'лебедь'
})
canvas.add(cygnus);


var lyraC = makeConstellation('M 775 80 L 750 85 L 747 100 L 757 98 L 760 83');
var lyraT = naming('Лира', 780, 97);
var ss1 = makeStars(4, 788, 88),
    ss2 = makeStars(3, 775, 90),
    ss3 = makeStars(3, 762, 92),
    ss4 = makeStars(3, 759, 107),
    ss5 = makeStars(3, 771, 104);
var lyra = new fabric.Group([lyraC, lyraT, ss1, ss2, ss3, ss4, ss5], {
    left: 940,
    top: 130,
    id:"lyra",
    name:'лира'
})
canvas.add(lyra);

var dracoC = makeConstellation('M 1220 30 L 1120 50 L 1095 52 L 1010 20 L 970 17 L 920 25 L 970 40 L 1020 60 L 1013 78 L 1039 75 L 1037 63 L 1020 60');
var dracoT = naming('Дракон', 1200, 87);
var dd1 = makeStars(4, 1063, 52),
    dd2 = makeStars(4, 1110, 65),
    dd3 = makeStars(3, 1168, 90),
    dd4 = makeStars(3, 1162, 105),
    dd5 = makeStars(3, 1185, 103),
    dd6 = makeStars(3, 1183, 92),
    dd7 = makeStars(4, 1115, 45),
    dd8 = makeStars(4, 1162, 49),
    dd9 = makeStars(4, 1242, 80),
    dd10 = makeStars(4, 1265, 78),
    dd11 = makeStars(4, 1365, 57);
var draco = new fabric.Group([dracoC,  dracoT, dd1, dd2, dd3, dd4, dd5, dd6, dd7, dd8, dd9, dd10, dd11], {
    top: 10,
    left: 900,
    id:"draco",
    name:'дракон'
});
canvas.add(draco);

var herculesC = makeConstellation('M 1070 120 L 1095 118 L 1120 90 L 1140 110 M 1070 120 L 1050 95 M 1070 120 1030 121 M 1070 120 1075 145 1095 143 L 1095 118 M 1075 145 1060 160  L 1035 140 L 1030 140 M 1060 160 L 1063 190 L 1100 180 L 1108 182 M 1100 180 L 1095 143');
var herculesT = naming('Геркулес', 1130, 127);
var ff1 = makeStars(3, 1103, 142),
    ff2 = makeStars(3, 1173, 138),
    ff3 = makeStars(3, 1195, 160),
    ff4 = makeStars(3, 1147, 164),
    ff5 = makeStars(3, 1123, 167),
    ff6 = makeStars(3, 1085, 168),
    ff7 = makeStars(3, 1082, 189),
    ff8 = makeStars(3, 1090  , 189 ),
    ff9 = makeStars(3, 1125, 193),
    ff10 = makeStars(3, 1148, 192),
    ff11 = makeStars(3, 1153, 226),
    ff12 = makeStars(3, 1160, 229),
    ff13 = makeStars(3, 1117, 237),
    ff14 = makeStars(3, 1114, 206);
var hercules = new fabric.Group([herculesC, herculesT, ff1, ff2, ff3, ff4, ff5, ff6, ff7, ff8, ff9, ff10, ff11, ff12, ff13, ff14], {
    top: 80,
    left: 1010,
    id:"hercules",
    name:'геркулес'
});
canvas.add(hercules);


var coronaBorealisC = makeConstellation('M 1100 130 L 1112 145 L 1135 147  L  1142 140 L 1147 135 L 1150 128 ');
var coronaBorealisT = naming('Северная корона', 1120, 157);
var gg1 = makeStars(3, 1125, 140),
    gg2 = makeStars(2, 1173, 138),
    gg3 = makeStars(2, 1158, 156),
    gg4 = makeStars(2, 1147, 155),
    gg5 = makeStars(2, 1137, 153);
var coronaBorealis = new fabric.Group([coronaBorealisC, coronaBorealisT, gg1, gg2, gg3, gg4, gg5], {
    top: 150,
    left: 1090,
    id:"coronaBorealis",
    name:'северная корона'
});
canvas.add(coronaBorealis);

var bootesC = makeConstellation('M  1200 30 L 1210 30 L 1210 55 L 1204 80 L 1180 60 L 1160 80 L 1180 110 L 1205 140 L 1220 143 M 1205 140  L 1200 110 L 1204 80');
var bootesT = naming('Волопас', 1240, 177);
var hh1 = makeStars(3, 1230, 85),
    hh2 = makeStars(3, 1239, 85),
    hh3 = makeStars(3, 1239, 115),
    hh4 = makeStars(4, 1208, 115),
    hh5 = makeStars(3, 1230, 135),
    hh6 = makeStars(3, 1190, 135),
    hh7 = makeStars(3, 1230, 163),
    hh8 = makeStars(4, 1206, 163),
    hh9 = makeStars(4, 1231, 195),
    hh10 = makeStars(3, 1247, 197);
var bootes = new fabric.Group([bootesC, bootesT, hh1, hh2, hh3, hh4, hh5, hh6, hh7 , hh8, hh9, hh10], {
    top: 50,
    left: 1170,
    id:"bootes",
    name:'волопас'
});
canvas.add(bootes);

var canesVC = makeConstellation('M  1200 30 L 1230 22');
var canesVT = naming('Гончие псы', 1210, 40);
var jj1 = makeStars(3, 1215, 33),
    jj2 = makeStars(3, 1245, 25);
var canes = new fabric.Group([canesVC, canesVT, jj1, jj2], {
    top: 100,
    id:"canesV",
    name:'гончие псы'
});
canvas.add(canes);

var aquilaC = makeConstellation(' M 900 210  L   850 240 L 860 285  L 890 255 L 900 210 M 890 255 L 850 240 M 890 255 L 920 290');
var aquilaT = naming('Орел', 940, 283);
var kk1 = makeStars(5, 934, 245),
    kk2 = makeStars(5, 922, 290),
    kk3 = makeStars(5, 885, 276),
    kk4 = makeStars(5, 893, 319),
    kk5 = makeStars(3, 952, 328);
var aquila = new fabric.Group([aquilaC, aquilaT, kk1, kk2, kk3, kk4, kk5], {
    top: 215,
    left: 880,
    id:"aquila",
    name:'орел'
});
canvas.add(aquila);


var serpensC = makeConstellation(' M 1100 210 L 1103 220 L 1110 207 M 1103 220 L 1107 230 L 1115 243 L 1110 263 ');
var serpensT = naming('Змея', 1115, 243);
var ll1 = makeStars(2, 1110, 246),
    ll2 = makeStars(2, 1108, 238),
    ll3 = makeStars(2, 1118, 234),
    ll4 = makeStars(2, 1122, 270),
    ll5 = makeStars(5, 1114, 285);
var serpens = new fabric.Group([serpensC, serpensT, ll1, ll2, ll3, ll4, ll5], {
    top: 200,
    id:"serpens",
    name:'змея'
});
canvas.add(serpens);

var ophiuchusC = makeConstellation('L 1110 253 L 1110 288 L 1086 288 L 1075 324 L 1050 360 L 1035 400 M 1050 360 L 1030  358 L 1020 346 L 970 300 940 280 M 1050 360 L 1000 280 L 1010 240 L 1060 250 L 1086 288');
var ophiuchusT = naming('Змееносец', 1105, 353);
var zz1 = makeStars(5, 1191, 326),
    zz2 = makeStars(5, 1191, 363),
    zz3 = makeStars(5, 1168, 363),
    zz4 = makeStars(5, 1159, 398),
    zz5 = makeStars(5, 1130, 438),
    zz6 = makeStars(5, 1116, 478),
    zz7 = makeStars(5, 1113, 436),
    zz8 = makeStars(5, 1103  , 421 ),
    zz9 = makeStars(5, 1050, 374),
    zz10 = makeStars(5, 1020, 353),
    zz11 = makeStars(5, 1083, 353),
    zz12 = makeStars(5, 1092, 318),
    zz13 = makeStars(5, 1144, 325);
var ophiuchus = new fabric.Group([ophiuchusC,ophiuchusT, zz1, zz2, zz3, zz4, zz5, zz6, zz7, zz8, zz9, zz10, zz11, zz12, zz13], {
    top: 250,
    left: 950,
    id:"ophiuchus",
    name:'змееносец'
});
canvas.add(ophiuchus);

var comaBerenicesC = makeConstellation('M 1290 180 L 1250 180 L 1254 223 ');
var comaBerenicesT1 = naming('Волосы', 1260, 170);
var comaBerenicesT2 = naming('Вероники', 1260, 180);
var xx1 = makeStars(2, 1311, 200),
    xx2 = makeStars(2, 1269, 200),
    xx3 = makeStars(2, 1273, 241);
var comaBerenices = new fabric.Group([comaBerenicesC, comaBerenicesT1, comaBerenicesT2, xx1, xx2, xx3], {
    top: 130,
    left: 1290,
    id:"comaBerenices",
    name:'волосы вероники'
});
canvas.add(comaBerenices);

var virgoC = makeConstellation('M 1200 230 L 1203 260 L 1215 270 L 1250 260 L 1265 240 M 1215 270 L 1195 280 L 1185 300 L 1145 280 L 1120 282 L 1118 255 L  1150 257');
var virgoT = naming('Дева', 1210, 298);
var vv1 = makeStars(3, 1220, 290),
    vv2 = makeStars(3, 1191, 288),
    vv3 = makeStars(3, 1191, 314),
    vv4 = makeStars(3, 1220, 315),
    vv5 = makeStars(3, 1255, 331),
    vv6 = makeStars(3, 1267, 313),
    vv7 = makeStars(3, 1285, 303),
    vv8 = makeStars(3, 1276  , 292 ),
    vv9 = makeStars(3, 1272, 262),
    vv10 = makeStars(3, 1320, 292),
    vv11 = makeStars(3, 1336, 273);
var virgo = new fabric.Group([virgoC, virgoT, vv1, vv2, vv3, vv4, vv5, vv6, vv7, vv8, vv9, vv10, vv11], {
    left: 1200,
    top: 240,
    id:"virgo",
    name:'дева'
});
canvas.add(virgo);

var corvusC = makeConstellation('M 1203 280 L 1200 313 L 1225 310 L 1227 318 M 1225 310 L 1223 285 L 1203 280');
var corvusT = naming('Ворон', 1180, 298);
var bb1 = makeStars(4, 1233, 301),
    bb2 = makeStars(4, 1211, 328),
    bb3 = makeStars(3, 1216, 298),
    bb4 = makeStars(3, 1236, 327),
    bb5 = makeStars(3, 1238, 334);
var corvus = new fabric.Group([corvusC, corvusT,bb1, bb2, bb3, bb4, bb5], {
    left: 1290,
    top: 340,
    id:"corvus",
    name:'ворон'
});
canvas.add(corvus);


var centaurusC = makeConstellation('M 1210 290 L 1215 320 L 1238 305 L 1240 287 M 1215 320 L 1185 317 L 1165 328 M 1215 320 1210 335 L 1215 348 L 1254 355 L 1260 378 M 1215 348 1220 370 L 1195 385 L 1169 388');
var centaurusT = naming('Кентавр', 1205, 343);
var nn1 = makeStars(3, 1255, 338),
    nn2 = makeStars(3, 1260, 366),
    nn3 = makeStars(3, 1284, 355),
    nn4 = makeStars(3, 1286, 334),
    nn5 = makeStars(3, 1234, 365),
    nn6 = makeStars(3, 1213, 374),
    nn7 = makeStars(3, 1257, 383),
    nn8 = makeStars(3, 1260  , 395 ),
    nn9 = makeStars(3, 1300, 405),
    nn10 = makeStars(3, 1304, 424),
    nn11 = makeStars(3, 1265, 417),
    nn12 = makeStars(3, 1240, 432),
    nn13 = makeStars(3, 1215, 436);
var centaurus = new fabric.Group([centaurusC, centaurusT, nn1, nn2, nn3, nn4, nn5, nn6, nn7, nn8,nn9, nn10, nn11, nn12, nn13], {
    left: 1240,
    top: 400,
    id:"centaurus",
    name:'кентавр'
});
canvas.add(centaurus);

var lupusC = makeConstellation('M 1110 350 L 1125 365 L 1138 363 L 1142 350 M 1138 363 L 1155 375 L 1163 390 M 1125 365 1130 375 L 1128 399 L 1163 390 M 1110 350  L 1142 350');
var lupusT = naming('Волк', 1180, 380);
var mm1 = makeStars(4, 1150, 389),
    mm2 = makeStars(4, 1178, 395),
    mm3 = makeStars(2, 1136, 374),
    mm4 = makeStars(2, 1166, 374),
    mm5 = makeStars(2, 1163, 386),
    mm6 = makeStars(2, 1155, 400),
    mm7 = makeStars(2, 1153, 422),
    mm8 = makeStars(2, 1189, 412 );
var lupus = new fabric.Group([lupusC, lupusT, mm1, mm2, mm3, mm4, mm5, mm6, mm7, mm8],{
    top: 460,
    id:"lupus",
    name:'волк'
});
canvas.add( lupus);


var normaC = makeConstellation('M 1100 350 L 1105 375 L ');
var normaT = naming('Наугольник', 1114, 380);
var qa = makeStars(3, 1105, 383),
    qb = makeStars(3, 1101, 363);
var norma = new fabric.Group([normaC, normaT, qa, qb], {
    top: 500,
    left: 1160,
    id:"norma",
    name:'наугольник'
});
canvas.add(norma);

var circinusC = makeConstellation('M 1140 350 L 1152 375 L 1150 348 ');
var circinusT = naming('Циркуль', 1164, 379);
var wa = makeStars(2, 1144, 362),
    wb = makeStars(2, 1154, 361),
    wc = makeStars(2, 1158, 390);
var circinus = new fabric.Group([circinusC, circinusT, wa, wb, wc], {
    top: 490,
    left: 1230,
    id:"circinus",
    name:'циркуль'
});
canvas.add(circinus);


var libraC = makeConstellation('M 1100 340 L 1095 370 L 1096 410 L 1125 400 L 1140 365 L  1095 370 M 1140 365 L 1100 340 ');
var libraT = naming('Весы', 1125, 410);
var ea = makeStars(5, 1157, 397),
    eb = makeStars(5, 1146, 431),
    ec = makeStars(5, 1122, 373),
    ed = makeStars(2, 1117, 403),
    ef = makeStars(2, 1118, 443);
var libra = new fabric.Group([libraC, libraT, ea, eb, ec, ed, ef], {
    top: 330,
    left: 1180,
    id:"libra",
    name:'весы'
});
canvas.add(libra);


var aquariusC = makeConstellation('M 840 400 L 800 390 L 780 370 L 765 372 L 760 369 L 740 400 L 745 415 L 742 423  L 725 445');
var aquariusT = naming('Водолей', 810 , 430);
var ra = makeStars(4, 852, 425),
    rb = makeStars(4, 838, 407),
    rc = makeStars(2, 895, 437),
    rd = makeStars(2, 821, 408),
    re = makeStars(2, 816, 407),
    rf = makeStars(2, 798, 437),
    rg = makeStars(2, 801, 454),
    rh = makeStars(2, 782, 482 );
var aquarius = new fabric.Group([aquariusC, aquariusT, ra, rb, rc, rd, re, rf, rg, rh], {
    top: 290,
    left: 730,
    id:"aquarius",
    name:'водолей'
});
canvas.add(aquarius);

var capricornusC = makeConstellation('M 820 390 L 868 380 L 868 387 L 820 440 L 790 410 L 785 385 L 820 390');
var capricornusT = naming('Козерог', 810 , 400);
var ta = makeStars(4, 907, 405),
    tb = makeStars(4, 826, 436),
    tc = makeStars(2, 825, 413),
    td = makeStars(2, 863, 418),
    te = makeStars(2, 861, 467),
    tf = makeStars(2, 909, 418);
var capricornus = new fabric.Group([capricornusC, capricornusT, ta, tb, tc, td, te, tf], {
    top: 325,
    left: 790,
    id:"capricornus",
    name:'козерог'
});
canvas.add(capricornus);

var scutumC = makeConstellation('M 820 390 L 828 405 L 833 419');
var scutumT = naming('Щит', 805 , 410);
var ya = makeStars(4, 823, 400),
    yb = makeStars(4, 829, 415),
    yc = makeStars(4, 837, 428);
var scutum = new fabric.Group([scutumC, scutumT, ya, yb, yc], {
    top: 302,
    left: 940,
    id:"scutum",
    name:'щит'
});
canvas.add(scutum);


var sculptorC = makeConstellation('M 720 390 L 775 384 L 795 400 L 780 410');
var sculptorT = naming('Скульптор', 740 , 410);
var ua = makeStars(3, 757, 402),
    ub = makeStars(3, 810, 395),
    uc = makeStars(3, 830, 412),
    ud = makeStars(3, 817, 419);
var sculptor = new fabric.Group([sculptorC, sculptorT, ua, ub, uc, ud], {
    left: 620,
    id:"sculptor",
    name:'скульптор'
});
canvas.add(sculptor);


var piscesAuC = makeConstellation(' M 868 380 L 850 390 L 851 399 L 880 399 L 880 403 L 910 403');
var piscesAuCT = naming('Южная рыба', 880 , 420);
var ia = makeStars(3, 878, 400),
    ib = makeStars(3, 900, 388),
    ic = makeStars(3, 908, 407),
    id = makeStars(3, 937, 412),
    ie = makeStars(3, 913, 414),
    ig = makeStars(3, 880, 410);
var piscesAu = new fabric.Group([piscesAuC, piscesAuCT, ia, ib, ic, id, ie, ig],{
    top: 420,
    left: 750,
    id:"piscesAu",
    name:'южная рыба'
});
canvas.add(piscesAu);

var grusC = makeConstellation('M 840 430 L 820 470 L 849 480 M 820 470 L 810 490 Д 808 512 ');
var grusT = naming('Журавль', 860 , 480);
var oa = makeStars(3, 860, 469),
    ob = makeStars(3, 839, 508),
    oc = makeStars(3, 870, 519),
    od = makeStars(3, 830, 530),
    oe = makeStars(3, 828, 549);
var grus = new fabric.Group([grusC, grusT, oa, ob, oc, od, oe], {
    top: 470,
    left: 770,
    id:"grus",
    name:'журавль'
});
canvas.add(grus);

var microscopiumC = makeConstellation('M 820 430 L 840 430 L 850 435');
var microscopiumT = naming('Микроскоп', 830 , 440);
var pa = makeStars(3, 862, 437),
    pb = makeStars(2, 857, 432),
    pc = makeStars(2, 836, 432);
var microscopium = new fabric.Group([microscopiumC, microscopiumT, pa, pb, pc], {
    id:"microscopium",
    name:'микроскоп'
});
canvas.add(microscopium);

var sagittariusC = makeConstellation('M 970 430 L 965 430 L 965 450 L 955 450 L 955 465 M 965 450 L 980 460 L 1000 460 L 1025 445 M 1000 460 L 1000 488 L 1010 498 M 1000 488 L 980 500 L 985 518');
var sagittariusT = naming('Стрелец', 1020 , 460);
var sa = makeStars(3, 1005, 471),
    sb = makeStars(3, 998, 471),
    sc = makeStars(3, 998, 492),
    sd = makeStars(3, 987, 492),
    se = makeStars(3, 987, 506),
    sf = makeStars(3, 1010, 500),
    sg = makeStars(3, 1032, 502),
    sh = makeStars(3, 1057, 489),
    si = makeStars(3, 1032, 530),
    sj = makeStars(3, 1043, 541),
    sk = makeStars(3, 1014, 543),
    sl = makeStars(3, 1020, 559);
var sagittarius = new fabric.Group([sagittariusC, sagittariusT, sa,sb, sc, sd, se, sf, sg, sh, si, sj, sk, sl], {
    id:"sagittarius",
    top: 400,
    left: 950,
    name:'стрелец'
});

canvas.add(sagittarius);

var coronaAuC = makeConstellation('M 1030 480 L 1015 480 L 1010 490 1010 500 1013 510 1017 520');
var coronaAuT = naming('Южная корона', 1030 , 510);
var da = makeStars(3, 1039, 497),
    db = makeStars(3, 1022, 497),
    dc = makeStars(3, 1018, 505),
    df = makeStars(3, 1018, 517),
    de = makeStars(3, 1024, 535);
var coronaAu = new fabric.Group([coronaAuC, coronaAuT, da, db, dc, df, de],{
    id:"coronaAu",
    top:480,
    left: 1000,
    name:'южная корона'
});
canvas.add(coronaAu);


var scorpiusC = makeConstellation('M 1050 390 L 1040 390 L 1040 410 L 1045 420 L 1063 420 L 1067 390 L 1069 370 L 1085 340 L 1100 320 L 1070 310 M 1100 320 L 1115 335');
var scorpiusT = naming('Скорпион', 1130 , 410);
var fa = makeStars(3, 1123, 391),
    fb = makeStars(3, 1135, 373),
    fc = makeStars(3, 1110, 365),
    fd = makeStars(3, 1147, 388),
    fe = makeStars(3, 1107, 417),
    fv = makeStars(3, 1100, 472),
    fg = makeStars(3, 1078, 472),
    fh = makeStars(3, 1075, 465),
    fi = makeStars(3, 1075, 443),
    fj = makeStars(3, 1086, 443);
var scorpius = new fabric.Group([scorpiusC, scorpiusT, fa, fb, fc, fd, fe,fv,fg, fh, fi, fj], {
    id:"scorpius",
    top: 400,
    left:1100,
    name:'скорпион'
})
canvas.add(scorpius);


var triangulumAuC = makeConstellation('M 800 370 L 780 390 L 820 390 L 800 370');
var triangulumAuT = naming('Южный треугольник', 800 , 400);
var ha = makeStars(3, 818, 378),
    hb = makeStars(3, 798, 398),
    hc = makeStars(3, 840, 398);
var triangulumAu = new fabric.Group([triangulumAuC, triangulumAuT, ha, hb, hc],{
    id: "triangulumAu",
    top:520,
    left: 1100,
    name:'треугольник'
});
canvas.add(triangulumAu);

var telescopiumC = makeConstellation('M 1050 500 L 1052 517');
var telescopiumT = naming('Телескоп', 1040, 530);
var ja = makeStars(2, 1052, 523),
    jb = makeStars(2, 1050, 507);
var telescopium = new fabric.Group([telescopiumC, telescopiumT, ja, jb], {
    id: "telescopium",
    top: 520,
    left:1000,
    name:'телескоп'
});

canvas.add(telescopium);

var araC = makeConstellation('M 950 460 L 951 478 L 965 480 970 455 M 951 478 L  948 490 M 965 480 967 495');
var araT = naming('Жертвенник', 950 , 520);
var ka = makeStars(2, 960, 480),
    kb = makeStars(2, 962, 497),
    kc = makeStars(2, 959, 507),
    kd = makeStars(2, 977, 515),
    ke = makeStars(2, 977, 500),
    kv = makeStars(2, 980, 475);
var ara = new fabric.Group([araC, araT, ka, kb, kc, kd, ke, kv], {
    id:"ara",
    left: 1045,
    name:'жертвенник'

});
canvas.add(ara);

var pictorC = makeConstellation('M 150 410 L 148 430 125 450 ');
var pictorT = naming('Живописец', 150 , 410);
var la = makeStars(2, 160, 450),
    lb = makeStars(2, 161, 428),
    lc = makeStars(2, 135, 470);
var pictor = new fabric.Group([pictorC, pictorT, la, lb, lc], {
    id:"pictor",
    left: 300,
    top: 460,
    name:'живописец'
});
canvas.add(pictor);

var carinaC = makeConstellation('M  250 450 L 210 460 L 190 460  L 170 465 L 170 475 L 195 500 L 210 498 L 197 480 L 190 460 ');
var carinaT = naming('Киль', 250 , 490);
var za = makeStars(2, 250, 483),
    zb = makeStars(2, 289, 475),
    zc = makeStars(2, 229, 483),
    zd = makeStars(2, 209, 489),
    ze = makeStars(2, 209, 499),
    zv = makeStars(2, 232, 523),
    zg = makeStars(2, 249, 520),
    zh = makeStars(2, 236, 500);
var carina = new fabric.Group([carinaC, carinaT, za, zb, zc, zd, ze, zv, zg, zh], {
    id:"carina",
    left: 210,
    name:'киль'
});

canvas.add(carina);

var volansC = makeConstellation('M  380 500  L 400 503 L 430 508 L 430 518 L 410  522 L 400 503');
var volansT = naming('Летучая рыба', 400 , 535);
var xa = makeStars(2, 404, 508),
    xb = makeStars(2, 426, 512),
    xc = makeStars(2, 453, 517),
    xd = makeStars(2, 453, 527),
    xe = makeStars(2, 43, 531);
var volans = new fabric.Group([volansC, volansT, xa, xb, xc, xd, xe], {
    id:"volans",
    left: -90,
    top: 530,
    name:'летучая рыба'
});
canvas.add(volans);

var doradoC = makeConstellation('M  320 500  L 340 480');
var doradoT = naming('Золотая рыба', 340 , 475);
var ca = makeStars(2, 329, 508),
    cb = makeStars(2, 350, 487);
var dorado = new fabric.Group([doradoC, doradoT, ca, cb], {
    id:"dorado",
    left: 320,
    name:'золотая рыба'
});
canvas.add(dorado);

var hydrusC = makeConstellation('M  320 470  L 318 500 L 340 500');
var hydrusT = naming('Юж. гидра', 340 , 485);
var va = makeStars(2, 329, 512),
    vb = makeStars(2, 350, 514),
    vc = makeStars(2, 330, 486);
var hydrus = new fabric.Group([hydrusC, hydrusT, va, vb, vc], {
    id:"hydrus",
    top: 520,
    left: 440,
    name:'южная гидра'
});
canvas.add(hydrus);

var mensaC = makeConstellation('M  320 470  L 330 480 L 340 475 L 348 460');
var mensaT = naming('Столовая гора', 335 , 493);
var ba = makeStars(2, 332, 480),
    bv = makeStars(2, 345, 490),
    bc = makeStars(2, 353, 484),
    bd= makeStars (2, 360, 468);
var mensa = new fabric.Group([mensaC, mensaT, ba, bv, bc, bd], {
    id:"mensa",
    top: 535,
    left: 340,
    name:'столовая гора'
});
canvas.add(mensa);

var reticulumC = makeConstellation('M  20 400 L 25 413 L 26 392 L 19 380 L 20 400 ');
var reticulumT = naming('Сетка', 20 , 433);
var na = makeStars(2, 22, 394),
    nv = makeStars(2, 22, 412),
    nc = makeStars(2, 28, 429),
    nd= makeStars (2, 28, 408);
var reticulum = new fabric.Group([reticulumC, reticulumT, na, nv, nc, nd], {
    id:"reticulum",
    left: 382,
    top: 505,
    name:'сетка'
});

canvas.add(reticulum);

var apusC = makeConstellation('M  1300 540 L 1310 545 L 1330 545  ');
var apusT = naming('Райская птица', 1310 , 550);
var ma = makeStars(2, 1312, 540),
    mv = makeStars(2, 1322, 546),
    mc = makeStars(2,1345, 546);
var apus = new fabric.Group([apusC, apusT, ma, mv, mc], {
    id:"apus",
    top: 540,
    left: 1210,
    name:'райская птица'
});

canvas.add(apus);

var chamaeleonC = makeConstellation('M  1300 540 L 1310 530 L 1330 530  ');
var chamaeleonT = naming('Хамелеон', 1310 , 550);
var zaq = makeStars(2, 1315, 542),
    zaw = makeStars(2, 1324, 533),
    zae = makeStars(2,1345, 533);
var chamaeleon = new fabric.Group([chamaeleonC, chamaeleonT, zaq, zaw, zae], {
    id:"chamaeleon",
    left: 1280,
    top: 540,
    name:'хамелеон'
});
canvas.add(chamaeleon);

var cruxC = makeConstellation('M  30 460 L 32 480 M 20 470 L 40 470  ');
var cruxT = naming('Южный крест',30 , 490);
var xaq = makeStars(2, 39, 470),
    xaw = makeStars(2, 41, 490),
    xae = makeStars(2, 28, 480),
    xar = makeStars(2,50, 480);
var crux = new fabric.Group([cruxC, cruxT, xaq, xaw, xae, xar],{
    id:"crux",
    left: 20,
    name:'южный крест'
});
canvas.add(crux);

var camelopardalisC = makeConstellation('M  250 5 L 251 20  ');
var camelopardalisT = naming('Жираф',220 , 30);
var caq = makeStars(2, 250, 10),
    caw = makeStars(2, 250, 27);
var camelopardalis = new fabric.Group([camelopardalisC, camelopardalisT, caq, caw], {
    id:"camelopardalis",
    top: 15,
    left: 220,
    name:'жираф'
});
canvas.add(camelopardalis);


var indusC = makeConstellation('M  830 480 L 832 510  ');
var indusT = naming('Индеец',810 , 530);
var vaq = makeStars(2, 831, 521),
    vaw = makeStars(2, 830, 498);
var indus = new fabric.Group([indusC, indusT, vaq, vaw], {
    id:"indus",
    top: 490,
    name:'индус'
});
canvas.add(indus);



canvas._objectMap = canvas._objects.reduce(function(store, item){
    store[item.id] = item;
    return store;
}, {});

function changeColor(obj){
    obj._objects[0].stroke ="red";
    obj._objects[1].fill ="red";
    obj._objects[1].fontSize ="12";
    canvas.renderAll();
}
function search(event){
    event.preventDefault();
    var data_in = document.getElementById('input-search').value.toLowerCase();
        for (prop in canvas._objectMap) {
            if(canvas._objectMap[prop].name === data_in){
                changeColor(canvas._objectMap[prop]);
            }
        }
    }

function reverse(event){
    if(document.getElementById('input-search').value === ''){
        for(prop in canvas._objectMap){
            canvas._objectMap[prop]._objects[0].stroke ="#167591";
            canvas._objectMap[prop]._objects[1].fill ="#afedf8";
            canvas._objectMap[prop]._objects[1].fontSize ="10    ";

        }
        //canvas.renderALL();
    }
}
var btn = document.getElementById('btn-search');
btn.addEventListener('click', search);
var input_search = document.getElementById('input-search');
input_search.addEventListener('input', reverse);

field = document.getElementById('general');
field.addEventListener('click', function(event){
    var x = event.clientX,
        y = event.clientY;
        xOffSet = window.pageXOffset;
        yOffSet = window.pageYOffset;
    for(prop in canvas._objectMap) {
        var a = canvas._objectMap[prop],
            x1 = a.getLeft(),
            y1 = a.getTop(),
            x2 = a.getLeft() + a.width + 10 ,
            y2 = a.getTop() + a.height;


        if ((x > x1) && (x < x2) && (y > y1) && (y < y2)) {
               var result = a.id;
            console.log(xOffSet);
            console.log(yOffSet);
            console.log(a.id, x, y, x1, y1, x2, y2);
        } else {
            console.log(x,y);
        }
    }
    var xml = new XMLHttpRequest();
        xml.open('GET', './data/data.json');
        xml.onreadystatechange = function(){
            if(xml.readyState === 4){
                if(xml.status === 200){
                    data = JSON.parse(xml.responseText);
                    dataMap = data.reduce(function(store, item){
                        store[item.id] = item;
                        return store;
                    }, {});
                    for(prop in dataMap) {
                        if (result === dataMap[prop].id){
                            var title = document.getElementById('title');
                            title.innerHTML = dataMap[prop].name.toUpperCase();
                            var description = document.getElementById('description');
                            description.innerHTML = dataMap[prop].description;
                        }
                    }
                    //console.log(data);
                }
            }
        }
        xml.send();
});