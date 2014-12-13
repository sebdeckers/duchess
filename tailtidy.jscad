/*jshint laxcomma:true */
var wall_thickness = 3.5;
var walls_spread_start = 145;
var walls_spread_end = 215;
var walls_angle = 20;

function side_wall() {
  return difference([
    linear_extrude(
      {height: wall_thickness},
      polygon([
        [0, 0],
        [45, 0],
        [92, -2.5],
        [105, -5],
        [117, -5],
        [145, -32],
        [170, -40],
        [160, -50],
        [30, -40]
      ])
    ),
    linear_extrude(
      {height: wall_thickness},
      circle({r: 18/2, center: true}).translate([40, -(12 + 18/2), 0])
    ),
    linear_extrude(
      {height: wall_thickness},
      circle({r: 18/2, center: true}).translate([110, -(19 + 18/2), 0])
    )
  ])
  .rotateX(-90);
}

function main() {
  return union(
    side_wall()
      .translate([0, -wall_thickness, 0])
      // .rotateZ(-walls_angle / 2)
    ,
    side_wall()
      .translate([0, walls_spread_start, 0])
      // .rotateZ(walls_angle / 1.9)
  ).translate([0, -walls_spread_start / 2, 0]);
}
