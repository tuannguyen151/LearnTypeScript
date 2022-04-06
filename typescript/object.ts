//! Object
const person = {
  firstName: "Tom",
  lastName: "Hanks",
  list: (): string | string[] => {
    return;
  }, //Type template
};
person.list = () => {
  console.log("hello " + person.firstName);
  return [person.firstName, person.lastName];
};
console.log(person.list());

//! Objects as function parameters
const person1 = {
  firstname: "Tom",
  lastname: "Hanks",
};
const invokeperson = function (obj: { firstname: string; lastname: string }) {
  console.log("first name :" + obj.firstname);
  console.log("last name :" + obj.lastname);
};
invokeperson(person1);

//! Duck-typing
interface IPoint {
  x: number;
  y: number;
}

class Point implements IPoint {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

function addPoints(p1: Point, p2: Point): Point {
  var x = p1.x + p2.x;
  var y = p1.y + p2.y;
  return { x: x, y: y };
}

let point1 = new Point(3, 4),
  point2 = new Point(5, 1);
var newPoint = addPoints(point1, point2);
console.log(newPoint);
