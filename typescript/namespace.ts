function drawAllShapes(shape: Namespace.IShape) {
  shape.draw();
}
drawAllShapes(new Namespace.Circle());
drawAllShapes(new Namespace.Triangle());

//! Build with command: tsc --out javascripts/namespace.js typescript/Namespace/* typescript/namespace.ts
