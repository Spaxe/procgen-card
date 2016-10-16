//
// Procedurally generated namecard patterns
// Author: Xavier Ho <contact@xavierho.com>
//
import _ from 'lodash';

// INPUT
const names = [
  'Xavier Ho',
  'Funkyname Happytail',
  // 'Kristina Johnson',
  // 'Florence Wang',
];
const name = _.shuffle(names)[0];

const mobile = `04 ${_.random(1000, 9999, false)} ${_.random(1000, 9999, false)}`;
const email = `${name.toLowerCase().replace(' ', '.')}@${_.shuffle('abcdefghijklmnopqrstuvwxyz').slice(0, _.random(3, 10, false)).join('')}.au`;

const coverage = 1; // coverage rate, 0 - 1

var canvas;
const width = 1062,
      height = 652;
const margin = 150;
var font;

const x = pos => pos * width;
const y = pos => pos * height;

var rc = [];

window.preload = () => {
  font = loadFont('assets/PatuaOne-Regular.ttf');
};

window.setup = () => {
  canvas = createCanvas(width + margin * 2, height + margin * 2);
  canvas.id('canvas');

  for (let i = 0; i < 10; i++) {
    rc.push(random_color());
  }

  noLoop();
};

window.draw = () => {
  background(0, 0, 0, 0);

  print_background();
  translate(margin, margin);
  generate_background();

  crop_marks();
  name_contact();

  preview_mask();
};

const print_background = () => {
  const light = color(255, 244, 196);
  const dark = color(242, 219, 152);
  gradient(0, 0, width+margin*2, height+margin*2, light, dark, 'Y_AXIS');
};

const generate_background = () => {
  push();
    blendMode(DIFFERENCE);

    // Random Spheres
    // for (let dy = 0; dy < 12; dy++) {
    //   for (let dx = 0; dx < 10 * coverage; dx++) {
    //     let r = _.random(10, 500, false);
    //     let s = _.random(1, 5, false);

    //     if (Math.random() > 0.9) {
    //       if (Math.random() > 0.6) {
    //         noFill();
    //       } else {
    //         fill(32);
    //       }
    //       strokeWeight(s);
    //       stroke(32);
    //       ellipse(x(0.06 * dx), y(0.0909 * dy), r, r);
    //     }
    //   }
    // }
  pop();
};

const name_contact = () => {
  push();
    fill(0);
    textSize(64);
    textFont(font);
    textAlign(RIGHT);
    text(name, x(0.9), y(0.4));

    textSize(48);
    text(mobile, x(0.9), y(0.6));
    text(email, x(0.9), y(0.7));
  pop();
};

const crop_marks = () => {
  push();
    noStroke();
    // fill(0.5, 0.5, 1);
    // rect(0, 0, width, height);
    stroke(0);
    strokeWeight(1);
    line(0, -margin, 0, -50);
    line(-margin, 0, -50, 0);
    line(width, -margin, width, -50);
    line(margin+width, 0, width+50, 0);
    line(0, 50+height, 0, margin+height);
    line(-margin, height, -50, height);
    line(width, 50+height, width, margin+height);
    line(margin+width, height, width+50, height);
  pop();
};

const preview_mask = () => {
  push();
    noStroke();
    fill(0, 0, 0, 200);
    rect(-margin, -margin, width+margin*2, margin);
    rect(-margin, height, width+margin*2, margin);
    rect(-margin, 0, margin, height);
    rect(width, 0, margin, height);
  pop();
};

// https://p5js.org/examples/color-linear-gradient.html
const gradient = (x, y, w, h, c1, c2, axis) => {
  push();
    colorMode(RGB);
    noFill();
    if (axis === 'Y_AXIS') {  // Top to bottom gradient
      for (var i = y; i <= y+h; i++) {
        var inter = map(i, y, y+h, 0, 1);
        var c = lerpColor(c1, c2, inter);
        stroke(c);
        line(x, i, x+w, i);
      }
    }
    else if (axis === 'X_AXIS') {  // Left to right gradient
      for (var i = x; i <= x+w; i++) {
        var inter = map(i, x, x+w, 0, 1);
        var c = lerpColor(c1, c2, inter);
        stroke(c);
        line(i, y, i, y+h);
      }
    }
    colorMode(HSB, 1, 1, 1, 1);
  pop();
};

const random_color = () => {
  const r1 = _.random(0, 255, false),
        r2 = _.random(0, 255, false),
        r3 = _.random(0, 255, false);
  return color(r1, r2, r3);
};

