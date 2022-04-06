import shape = require("./Module/IShape");
import circle = require("./Module/Circle");
import triangle = require("./Module/Triangle");

function drawAllShapes(shapeToDraw: shape.IShape) {
  shapeToDraw.draw();
}

drawAllShapes(new circle.Circle());
drawAllShapes(new triangle.Triangle());

//! Build with command: tsc --module commonjs ./typescript/module.ts --outDir ./javascripts/
