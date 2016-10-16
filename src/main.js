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

    const thickness = 5;
    const size = _.random(75, 125, false);
    const gap = 50;
    const offset = gap/2 - thickness/2;
    const correction = thickness/2;
    const shift = 5;

    translate(_.random(0, size*2, false), _.random(0, size*2, false));
    rotate(Math.PI / 360 * _.random(-90, 90));


    push();
      blendMode(BURN);
      noStroke();
      fill(200);
      rect(-width*3, -height*2, width*5, height*2);
      fill(180);
      rect(-width, -height*3, width, height*5);
      blendMode(MULTIPLY);
      fill(160);
      rect(-width, -height, width, height);

      strokeWeight(5);
      noFill();
      stroke(200);
      line(-width*2, 0, width*2, 0);
      line(0, -height*2, 0, height*2);
    pop();

    for (let dy = -20; dy < 20; dy++) {
      for (let dx = -20; dx < 20; dx++) {

        if (dx !== 0 && dy !== 0 && Math.random() > 0.05) {
          noStroke();
          fill(16);
          rect(size * dx + offset - shift, size * dy - correction, size - offset*2 + shift*2, thickness);
          rect(size * dx - correction, size * dy + offset - shift, thickness, size - offset*2 + shift*2);

          if (Math.random() > 0.5) {
            rect(size * dx + offset - shift, size * dy - correction + size/2, size - offset*2 + shift*2, thickness);
          } else {
            rect(size * dx - correction + size/2, size * dy + offset - shift, thickness, size - offset*2 + shift*2);
          }

          if (Math.random() > 0.95) {
            noFill();
            strokeWeight(5);
            stroke(16);
            ellipse(size * dx, size * dy, size/3, size/3);
          }
        }
      }
    }
  pop();

    // Random blended pixel bars
    // const segments = 36;
    // const thickness = height / segments;

    // translate(0, thickness * 6);

    // for (let dy = 0; dy < segments; dy++) {
    //   for (let dx = 0; dx < 100 * (dy / 6); dx++) {
    //     if (Math.random() > Math.pow(dy / 9, 0.5)) {
    //       fill((100-dx) / 8);
    //       noStroke();
    //       rect(x(0.02 * dx), y(1/segments * dy), x(0.02) * _.random(1, (101-dx)/10, false), thickness);
    //     }
    //   }
    // }

    // translate(0, thickness * 12);

    // for (let dy = 0; dy < segments; dy++) {
    //   for (let dx = 0; dx < 25 * (dy / 6); dx++) {
    //     if (Math.random() > Math.pow(dy / 9, 0.5)) {
    //       fill((100-dx) / 8);
    //       noStroke();
    //       rect(x(0.02 * dx), y(1/segments * dy), x(0.02) * _.random(1, (101-dx)/10, false), thickness);
    //     }
    //   }
    // }


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

