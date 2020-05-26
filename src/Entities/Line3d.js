const Vector3d = require(__dirname + '/Vector3d');

class Line3d extends Vector3d{

    constructor(x, y, z, direction) {
        this.direction = direction;
        Vector3d.apply(this, arguments);
    }

    distanceToPoint(point) {
        var distance = point.distanceFrom(this);
        var aimPoint = this.add(this.direction.multiply(distance));
        return point.distanceFrom(aimPoint);
    }
}

module.exports = Line3d;