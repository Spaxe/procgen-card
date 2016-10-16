//
// Procedurally generated namecard patterns
// Author: Xavier Ho <contact@xavierho.com>
//
import _ from 'lodash';

// INPUT
const names = [
  'Xavier Ho',
  'Verby Noun',
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

const x = pos => pos * width;
const y = pos => pos * height;

window.setup = () => {
  canvas = createCanvas(width + margin * 2, height + margin * 2);
  canvas.id('canvas');
};

window.draw = () => {
  background(255, 255, 255);

  // Draw margin, crop markers, bleed
  translate(margin, margin);

  push();
    noStroke();
    fill(128, 255, 255);
    rect(0, 0, width, height);
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

  // Draw name and contact
  push();
    fill(0);
    textSize(96);
    textFont('Patua One');
    textAlign(CENTER);
    text(name, x(0.5), y(0.4));

    textSize(56);
    text(mobile, x(0.5), y(0.6));
    text(email, x(0.5), y(0.7));
  pop();
};