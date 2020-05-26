class Vector3d{

    constructor(x, y, z) {
        this.x = x !== undefined ? x : 0;
        this.y = y !== undefined ? y : 0;
        this.z = z !== undefined ? z : 0;
    }

    add(b) {
        return new Vector3d(this.x + b.x, this.y + b.y, this.z + b.z);
    }

    subtract(b) {
        return new Vector3d(this.x - b.x, this.y - b.y, this.z - b.z);
    }

    multiply(scalar) {
        return new Vector3d(this.x * scalar, this.y * scalar, this.z * scalar);
    }

    scale(b) {
        return new Vector3d(this.x * b.x, this.y * b.y, this.z * b.z);
    }

    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }

    lengthSquared() {
        return this.x * this.x + this.y * this.y + this.z * this.z;
    }

    normalize() {
        var l = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
        this.x /= l;
        this.y /= l;
        this.z /= l;
        return this;
    }

    dot(b) {
        return this.x * b.x + this.y * b.y + this.z * b.z;
    }

    cross(b) {
        return new Vector3d(this.y * b.z - b.y * this.z,
            b.x * this.z - this.x * b.z,
            this.x * b.y - b.x * this.y);
    }

    clone() {
        return new Vector3d(this.x, this.y, this.z);
    }

    distanceFrom(b) {
        var dx = b.x - this.x,
            dy = b.y - this.y,
            dz = b.z - this.z;
        return Math.sqrt(dx * dx + dy * dy + dz * dz);
    }

    toRadians(num) {
        return num * (Math.PI / 180);
    }

    toDegrees(num) {
        return num * (180 / Math.PI);
    }

    pitchAndYawTo(position) {
        var dx = this.x - position.x;
        var dy = this.y - position.y;
        var dz = this.z - position.z;
        return {
            pitch: makeAnglePositive(-this.toDegrees(Math.atan2(dz, Math.sqrt(dx * dx + dy * dy)))),
            yaw: makeAnglePositive(this.toDegrees(Math.atan2(dy, dx)) + 180)
        }
    }

    makeAnglePositive(ang) {
        return (ang % 360 + 360) % 360;
    }

    directionToVector(pitch, yaw) {

        var pitchRadians = this.toRadians(90 - pitch);
        var yawRadians = this.toRadians(yaw);

        return new Vector3d(
            Math.sin(pitchRadians) * Math.cos(yawRadians),
            Math.sin(pitchRadians) * Math.sin(yawRadians),
            Math.cos(pitchRadians)
        );
    }
}

module.exports = Vector3d;