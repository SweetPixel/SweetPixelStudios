// console.log('\'Allo \'Allo!');
'use strict';
$(document).ready(function(){
  var scene = document.getElementById('scene');
  var parallax = new Parallax(scene);

  var scene2 = document.getElementById('scene2');
  var parallax2 =  new Parallax(scene2);

  // grab an element
  var myElement = document.querySelector("header");
  // construct an instance of Headroom, passing the element
  var headroom  = new Headroom(myElement);
  // initialise
  // headroom.init();

  // get DOM or jQuery element
  // like: $('#canvas-demo')
  var canvas = document.getElementById('canvas-demo');

  // create pixel view container in point
  var point = new obelisk.Point(200, 120);
  var pixelView = new obelisk.PixelView(canvas, point);

  // create dimension instance
  var dimension = new obelisk.CubeDimension(60, 60, 60);
  // create color instance
  var color = new obelisk.CubeColor().getByHorizontalColor(obelisk.ColorPattern.PURPLE);

  // create cube primitive
  var cube = new obelisk.Cube(dimension, color);
  // create cube primitive wihtout border
  //var cube = new obelisk.Cube(dimension, color, false);

  // render primitive to view
  pixelView.renderObject(cube);

  // get DOM or jQuery element
  // like: $('#canvas-demo')
  var canvas2 = document.getElementById('canvas-demo2');

  // create pixel view container in point
  var point2 = new obelisk.Point(200, 120);
  var pixelView2 = new obelisk.PixelView(canvas2, point2);

  // create dimension instance
  var dimension2 = new obelisk.CubeDimension(60, 60, 60);
  // create color instance
  var color2 = new obelisk.CubeColor().getByHorizontalColor(obelisk.ColorPattern.YELLOW);

  // create cube primitive
  var cube2 = new obelisk.Cube(dimension2, color2);
  // create cube primitive wihtout border
  //var cube = new obelisk.Cube(dimension, color, false);

  // render primitive to view
  pixelView2.renderObject(cube2);

  var canvas3 = document.getElementById('canvas-demo3');

  // create pixel view container in point
  var point3 = new obelisk.Point(200, 120);
  var pixelView3 = new obelisk.PixelView(canvas3, point3);

  // create dimension instance
  var dimension3 = new obelisk.CubeDimension(60, 60, 60);
  // create color instance
  var color3 = new obelisk.CubeColor().getByHorizontalColor(obelisk.ColorPattern.BLUE);

  // create cube primitive
  var cube3 = new obelisk.Cube(dimension2, color2);
  // create cube primitive wihtout border
  //var cube = new obelisk.Cube(dimension, color, false);

  // render primitive to view
  pixelView3.renderObject(cube3);



});


$('#link').click(function(){
  $('html, body').animate({
    scrollTop: $( $(this).attr('href') ).offset().top
  }, 500);
  return false;
});
