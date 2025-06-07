class ghost {
    constructor(svg, x=0,y=0) {
        this.boltCount =4;
        this.eyePoints = [
            {type:"M",x=10,y=0},
            {type:"Q",x=20,y=0},
        ];
}
isHit(point) {
    return Snap.path.isPointInside(
        this.hitpath.attr("d"), point.x, point.y);
}
setTarget(position,Streamstart) {
    this.target = position;
    this.streamstart = Streamstart;
    this.setXYFromTarget();
}
clearTarget() {
    this.target = null;
}
}
