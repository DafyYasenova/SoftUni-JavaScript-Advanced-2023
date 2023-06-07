class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    };

    static distance(pointA, pointB) {
        let distanceX = pointA.x - pointB.x;
        let distanceY = pointA.y - pointB.y;

        let distance = Math.sqrt(Math.pow(distanceX, 2) + (Math.pow(distanceY, 2)))
        return distance;
    }
    /*  разликата между статичен метод и нестатичен е в начина на използване на .this  и в извикването
    toDistance(otherPoint) {
        let distanceX = this.x - otherPoint.x;
        let distanceY = this.y - otherPoint.y;
        let distance = Math.sqrt(Math.pow(distanceX, 2) + (Math.pow(distanceY, 2)))
        return distance;
    }
        let pointA = new Point(5, 5);
        let pointB = new Point(9, 8);
        let distance2 = pointA.toDistance(pointB)
        console.log(distance2);
} 
*/
}

let pointA = new Point(5, 5);
let pointB = new Point(9, 8);
console.log(Point.distance(pointA, pointB)); // 5

