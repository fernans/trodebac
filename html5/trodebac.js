(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.trodebac = function() {
	this.initialize();

	// about
	this.about = new lib.about();
	this.about.setTransform(512,640);
	this.about.visible = false;

	// info
	this.music = new lib.musicButton();
	this.music.setTransform(241.2,1189.3);

	this.info = new lib.infoButton();
	this.info.setTransform(775.2,1189.3);

	// boom
	this.boom = new lib.boom();
	this.boom.setTransform(513,641,1,1,0,0,0,1,1);

	this.addChild(this.boom,this.info,this.music,this.about);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1024,1280);


// symbols:
(lib.bgconmasclet = function() {
	this.initialize(img.bgconmasclet);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,1280);


(lib.bgexplotado = function() {
	this.initialize(img.bgexplotado);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,1280);


(lib.bgvacio = function() {
	this.initialize(img.bgvacio);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,1280);


(lib.btinfo = function() {
	this.initialize(img.btinfo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,106);


(lib.btmusicoff = function() {
	this.initialize(img.btmusicoff);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,106);


(lib.btmusicon = function() {
	this.initialize(img.btmusicon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,106);


(lib.fondo = function() {
	this.initialize(img.fondo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,1280);


(lib.tro = function() {
	this.initialize(img.tro);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,243,448);


(lib.tro_1 = function() {
	this.initialize();

	// Layer 3
	this.instance = new lib.tro();
	this.instance.setTransform(-134.2,-220.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-134.2,-220.9,243,448);


(lib.humo_gr = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhP/Bj/MAAAjH+MCf/AAAMAAADGJIgrAAIAAB1g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-511.9,-639.9,1024,1280);


(lib.bgvacio_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.bgvacio();
	this.instance.setTransform(-511.9,-639.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-511.9,-639.9,1024,1280);


(lib.bgexplotado_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.bgexplotado();
	this.instance.setTransform(-511.9,-639.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-511.9,-639.9,1024,1280);


(lib.bgconmasclet_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.bgconmasclet();
	this.instance.setTransform(-511.9,-639.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-511.9,-639.9,1024,1280);


(lib.musicButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.btmusicoff();
	this.instance.setTransform(-52.9,-52.9);

	this.instance_1 = new lib.btmusicon();
	this.instance_1.setTransform(-52.9,-52.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.9,-52.9,106,106);


(lib.infoButton = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.btinfo();
	this.instance.setTransform(-52.9,-52.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-52.9,-52.9,106,106);


(lib.boton_invisible = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("Eg00AIcIAAw3MBppAAAIAAQ3g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-338,-53.9,676.2,108.1);


(lib.ritapanuelo = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#98B2CB").s().p("AB3FAIAAhQIApAAIAABQgAgnFAIAAhQIAnAAIAAhQIhPAAIAAgpIB2AAIAACgIgnAAIAAApgAjGFAIAAgpIAnAAIAAhQIgnAAIAAgnIB3AAIAAAnIgnAAIAAB5gAjGAnIAAgnIgpAAIAAgmIhQAAIAAgpIB5AAIAAApIAnAAIAABNgAm3hPIAAgnIhQAAIAAgpIB4AAIAABQgAE/h2IAAgpIApAAIAAgnIBQAAIAAgpIBQAAIAAgnIBQAAIAAAnIgpAAIAAApIhQAAIAAAnIhQAAIAAApgApXjvIAAhQIBQAAIAABQg");
	this.shape.setTransform(8,0);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AAC8E5").s().p("ACuFdIAAhFIhFAAIAAgrIgVAAIAAAzIhiAAIAAgzIgUAAIAAArIiLAAIAAkYIiNAAIAAhEIiMAAIAAhHIiLAAIAAhGIjSAAIAAiLIEYAAIAABFIBFAAIAABGIDTAAIAABGICLAAIAABHIBGAAIAABEIBFAAIAABFIBGAAIAAhFIBFAAIAAhEIBGAAIAAhHIBHAAIAAhGIB3AAIAAgCIAVAAIAAhEIBFAAIAAhFIEYAAIAACLIiLAAIAABGIi0AAIAABPIgzAAIAAAxIgxAAIAAAxIgzAAIAAAxIgxAAIAAAzIgpAAIAAABIgKAAIAABHIAKAAIAACLgAjzFdIAAhFIBGAAIAABFg");
	this.shape_1.setTransform(0,4.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-80.4,-31.9,161,71.1);


(lib.ritacara = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#36291F").s().p("AgXAyIAAhiIAvAAIAABig");
	this.shape.setTransform(7.5,-43.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2E231B").s().p("ADgB9IAAhlIAzAAIAAgvIAxAAIAAgzIBkAAIAzAAIAAgxICWAAIAAAxIAxAAIAzAAIAAAzIAxAAIAABhIgxAAIAAgyIgzAAIAAgvIhjAAIAAgzIgzAAIAAAzIiVAAIAAAvIgzAAIAAAyIgxAAIAAAzgAsGBKIAAhhIAzAAIAAhkIFdAAIAAAxIBlAAIAAAzIAxAAIAAAvIgxAAIgzAAIAAgvIhjAAIAAgzIj7AAIAABiIgxAAIAAAyg");
	this.shape_1.setTransform(-12.4,-61.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#614027").s().p("AKjOEIAAiXIAxAAIAAgxIAAgBIABAAIAAgxIgBAAIAAAAIAzAAIAACWIgzAAIAABkgAMHKKIAAiXIAxAAIAAiVIAzAAIAAjJIgzAAIAAgxIgxAAIAAhkIgzAAIAAkrIgxAAIAAgxIgzAAIAAgzIgxAAIgzAAIAAgxIgxAAIiWAAIgzAAIAAAxIhkAAIAAAzIgxAAIAAAxIgzAAIAABlIgxAAIAABkIgxAAIAAgzIhjAAIAAgxIhkAAIAAgzIgzAAIAAgyIhkAAIAAgxIgxAAIAAgzIhlAAIAAgxICWAAIAAj7IAAgyIAzAAIAAgxIAxAAIAAgzIAzAAIAAgxID4AAICVAAIAAAxIAzAAIAAAzIBkAAIAAAxIAxAAIAAAyIAzAAIAAAzIAyAAIAAhlIgyAAIAAgxIAyAAIAxAAIAAAxIAzAAIAACWIgzAAIAAAzIiWAAIAAgzIhkAAIAAgxIgxAAIAAgzIhkAAIAAgyIj4AAIAAAyIhkAAIAAAzIgzAAIAAgzIgxAAIAAAzIAxAAIAABkIgxAAIAABkIAxAAIAAAxIAzAAIAABkIAxAAIAAAyIBkAAIAAAzIBjAAIAAhlIAxAAIAAhkIAzAAIAAgxICVAAIAAgzIEtAAIAAAzIBkAAIAAAxIAxAAIAABkIAzAAIAAD6IAxAAIAABiIAzAAIAABkIAyAAIAACWIAABkIgyAAIAACXIgzAAIAABkgAjfrtIAxAAIAAgxIErAAIAAgzIkrAAIAAAzIgxAAgAuclcIAAhkIAzAAIAAgzIBkAAID5AAIAAAzIldAAIAABkgAkSqIg");
	this.shape_2.setTransform(2.5,-28.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAAEsIAAgzIAxAAIAAAzgAiUAAIAAgwIgzAAIAAgzIhkAAIAAgyIAzAAIAAABIAxAAIAAAxIAzAAID4AAIAAgxIBkAAIAAAxIgzAAIAAAzIgxAAIAAAwgAgxjHIAAgxIAxAAIAAAxgAJXj4IAAgzIAzAAIAAAzgAqJj4IAAgzIAzAAIAAAzg");
	this.shape_3.setTransform(5,66);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CE623E").s().p("AhKBLIAAiVIBjAAIAAAzIAxAAIAABigAgYAYIAxAAIAAgvIgxAAg");
	this.shape_4.setTransform(2.5,43.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CB744D").s().p("AgxHBIAAgxIhkAAIAAgzIgxAAIAAgxIgzAAIAAhlIAzAAIAAAzIAxAAIAAAyIAzAAIAAAxIBiAAIAAAzIAyAAIAxAAIAzAAIAAgzIAxAAIAAgxIAzAAIAAgyIAxAAIAABjIgxAAIAAAzIgzAAIAAAxgAFeDHIAAgxIAxAAIAAAxgAgxDHIAAgxIBjAAIAAAxgAGPCWIAAgzIAzAAIAAAzgAD6AAIAAgwIAAiXIDIAAIAABkIgzAAIAAAzIAzAAIAAAwgAhiAAIAAgwIgzAAIAAiXIAzAAIAAj6IDFAAIAADIIAzAAIAADJIAAAwgAgxgwICUAAIAAhkIgxAAIAAgzIhjAAgAnBAAIAAjHIDIAAIAACWIAAAxg");
	this.shape_5.setTransform(0,56);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3A2C21").s().p("AJYPPIAAj7IBkAAIAACXIAABkgApXPPIAAgzIgxAAIAAgxIgzAAIAAhkIgxAAIAAiWIgzAAIAAgzIgxAAIAAjIIgzAAIAAhkIgyAAIAAiWIgxAAIAAkqIAZAAIAYgxIAAhlIAZAAIAZgxIAABjIAzAAIAAgyIAxAAIAAhkID7AAIAAAzIBjAAIAAAxIAzAAIAAAyIgzAAIAABkIgyAAIAACXIgxAAIAAAvIgzAAIAADJIAzAAIAACVIhkAAIAAhkIgzAAIAADIIAzAAIAADJIAxAAIAAAxIAzAAIAACXIAxAAIAABkgALtNrIAAhkIAzAAIAABkgAK8LUIAAgxIAxAAIAAAxgALtJxIAAgBIABAAIAAgxIgBAAIAAiWIAzAAIAAhkIgzAAIAAgzIgxAAIAABkIgzAAIAAnAIgxAAIAAhkIgzAAIAAhkIhjAAIAAgyIjIAAIAAgxICVAAIAAgzIAzAAIAAAzIBjAAIAAAxIAzAAIAAAyIAxAAIAAhjIAzAAIAAAxIAxAAIAAEtIAzAAIAABiIAxAAIAAAxIAzAAIAADJIgzAAIAACVIgxAAIAACXgADHGpIAAgzIDIAAIAAAzgAmOGpIAAgzIDIAAIAAAzgAGPF2IAAgxIgxAAIAAgzIgzAAIAAgxIgxAAIAAAxIgzAAIAABkIgxAAIAAiVIAxAAIAAgzICXAAIAAAzIAxAAIAAAxIAzAAIAABkgAjGF2IAAhkIgzAAIAAgxIhkAAIAAAxIgxAAIAAhkIDIAAIAAAzIAxAAIAACVgAnBFFIAAgzIAzAAIAAAzgAO2ESIAAiWIgyAAIAAhkIgzAAIAAhiIgxAAIAAj6IgzAAIAAhkIgxAAIAAgxIhkAAIAAgzIktAAIAAAzIiVAAIAAAxIgzAAIAABkIgxAAIAABlIhjAAIAAgzIhkAAIAAgyIgxAAIAAhkIgzAAIAAgxIgxAAIAAhkIAxAAIAAhkIAzAAIAAgzIBkAAIAAgyID4AAIAAAyIBkAAIAAAzIAxAAIAAAxIBkAAIAAAzICWAAIAAgzIAzAAIAAiWIAxAAIAAAyIAzAAIAABkIAxAAIAAAzIAzAAIAAAxIAxAAIAACXIAzAAIAABjIAyAAIAAD7IAxAAIAAEpgADHkSIAAgyIAzAAIAAAygAD6lEgAJYl1IAAgzIAxAAIAAAzgAH0moIAAgxIAxAAIAAAxgAErmoIAAgxIAzAAIAAAxgAnznZIAAgzIj5AAIAAgxIAxAAIAAgzIAzAAIAAgxICVAAIAAgzICWAAIAAD7gAHCqhIAAgzIgzAAIAAgyIgxAAIAAgxIhkAAIAAgzIgzAAIAAgxIiVAAIAAgzIEsAAIAAAzIAxAAIAAAxIBlAAIAAAzIgyAAIAAAxIAyAAIAABlgAkqqhIAAgzIAxAAIAAAzgAjGsGIAAgxIAxAAIAAAxgAiVs3IAAgzIErAAIAAAzgAiVs3g");
	this.shape_6.setTransform(0,-26.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D99F77").s().p("AhORHIAAhQIhQAAIAAhQIhQAAIAAhRIhRAAIAAhQIhQAAIAAhQIhQAAIAAkjIgUAAIAAiVIgyAAIAAgxIAAhkIgxAAIAAiVIgzAAIAAgxIgxAAIAAjJIgzAAIAAjIIAzAAIAABkIBkAAIAAiVIgzAAIAAjJIAzAAIAAgxIAxAAIAAiXIAyAAIAAhkIAzAAIAAgyIAxAAIBkAAIAAAyIAzAAIAAAzIBkAAIAAAxIBjAAIAAAzIAxAAIAxAAIAAhkIAzAAIAAgzIAxAAIAzAAIAAgyIDIAAIAAAyIBjAAIAABkIAzAAIAABkIAxAAIAAHCIAzAAIAAhkIAxAAIAAAzIAzAAIAABkIgzAAIAACWIABAAIAAAxIgBAAIAAAAIAAABIAAAxIAAABIgxAAIAAgzIgzAAIAAAzIAzAAIAAAxIhkAAIAAD5IAABkIgzAAIAACWIgTAAIAADvIhQAAIAABQIhRAAIAAChIigAAIAABQIhQAAIAABQgAkrFjIAzAAIAAAxIAxAAIAAAzIBkAAIAAAxID4AAIAAgxIAzAAIAAgzIAxAAIAAhjIgxAAIAAAyIgzAAIAAAxIgxAAIAAAzIgzAAIAAgzIgxAAIAAAzIgxAAIAAgzIhjAAIAAgxIgzAAIAAgyIgxAAIAAgzIgzAAgAEsD+IAxAAIAAgxIgxAAgAhjD+IBjAAIAAgxIhjAAgAFdDNIAzAAIAAgzIgzAAgAnzA2IDIAAIBkAAIAAAzIAzAAIAAAxID4AAIAAgxIAxAAIAAgzIAzAAIDIAAIAAgxIgzAAIAAgxIAzAAIAAhkIjIAAIAACVIhkAAIAAjHIgzAAIAAjIIjFAAIAAD6IgzAAIAACVIAzAAIAAAxIgzAAIAAgxIgxAAIAAgBIgzAAIAAiUIjIAAgAqJhdIAzAAIAAgzIgzAAgACVlXIDIAAIAAgzIjIAAIAAhkIAzAAIAAgxIAxAAIAAAxIAzAAIAAAzIAxAAIAAAxIAzAAIAAhkIgzAAIAAgxIgxAAIAAgzIiXAAIAAAzIgxAAIAACVIAxAAgAnAlXIDIAAIAAgzIjIAAgAkrofIAAAxIAzAAIAABkIAxAAIAAiVIgxAAIAAgzIjIAAIAABkIAxAAIAAgxgAnzm7IAzAAIAAgzIgzAAgAKKhdgACVmKg");
	this.shape_7.setTransform(5,50.5);

	// Layer 2
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E18700").s().p("AmPD5IAAiWIBlAAIAAhjIAxAAIAAjHIBkAAIAAgyIErAAIAAAyIBkAAIAABkIAxAAIAADGIgxAAIAAgxIgzAAIAAjGIhjAAIAAgzIjGAAIAAAzIhkAAIAADGIgzAAIAABkIhkAAIAABjgAErCWIAAgzIBkAAIAAAzgABkBjIAAgxIAyAAIAAAxgAAxAAIAAgwIBlAAIAAAwg");
	this.shape_8.setTransform(-6.3,-114.1);

	// peineta
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF9900").s().p("AovFKIAAlSIBPAAIAABOIBQAAIAAieIBQAAIAAhRIBQAAIAAhQIChAAIAAhQICeAAIAABQICfAAIAABQIBQAAIAADGIjvAAIAAAzIj4AAIAAAxIgzAAIAAAzIgxAAIAAAxIgzAAIAAAyIiWAAIAAAzgAIRC0IAAgzIhlAAIAAgxIgxAAIAAgKIATAAIAAhOIBYAAIAAAAIBJAAIAABOIABAAIAAAAIgBAAIAABPIABAAIAAABIgBAAIAAAeg");
	this.shape_9.setTransform(-2.8,-126.9);

	this.addChild(this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-99.9,-159.9,200,320);


(lib.phone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAICRIAAgCIgCAAIAAgGIACAAIAAgCIANAAIAAgCIgNAAIAAgEIAPAAIAAACIACAAIAAAOgAAKCNIALAAIAAgCIgLAAgAAiCOIgCAAIgDgLIABgBIAAgBIAQgGIACAEIgPAFIACAHIAPgFIABAEIgRAFgAgPCMIABgQIAEABIAAAEIALABIAAACIACAAIgBAIIgCAAIAAACgAgLCIIALACIAAgEIgLgCgAgwCGIABgEIAPAEIABgCIgNgDIAAgCIgCAAIACgGIACAAIAAgBIARAEIgBAEIgPgEIAAACIANADIgBACIACABIgBAFIgCAAIgBACgAAzB5IADgCIADAGIALgFIgDgGIAEgBIADAHIgCABIABABIgCABIADAFIgEACIgDgFIgHADIADAFIgEACgAg7B8IADgJIAEABIgEAJgABLB3IAEgCIACADIgEACgABFBtIAEgCIAFAIIgEACgAg3BxIABgEIAEACIgBADgAhahOIAKgSIAEACIgEAHIAKAGIgCAEIgKgGIgEAHgABDhbIABgCIgBgBIAKgHIABABIACgBIALAPIgEACIgJgNIgHAFIAKANIgEACgAhKhnIAMgOIABABIACgBIAEADIgBACIADADIABgCIAEADIgDADIgBgBIgCABIgBgBIgHAIIAEACIgDAEgAhEhnIADACIAIgJIgDgDgAA6hkIAFgEIgJgJIgEAFIgDgDIAKgKIABABIACgBIALALIgBACIABABIgKAKgAA5h0IAIAJIACgBIgJgJgAgyhzIgCABIgFgLIACgBIgBgCIAPgGIABACIACgBIAFALIgCABIABACIgPAGgAg0h9IADAIIALgFIgDgIgAAfh8IAHgPIAQAIIAAACIABABIgFALIgCgBIgBACgAAkh+IALAFIABgCIgLgFgAAniEIALAGIABgCIgLgGgAACh/IAAgCIgCAAIABgNIACABIABgCIASACIgBAEIgQgCIAAACIAQACIAAAEIgRgCIAAACIAQACIAAAEgAgWiOIASgCIAAACIACAAIABAMIgCAAIABACIgTACgAgSiKIABAIIAMgCIgBgIg");
	this.shape.setTransform(-2.5,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(10));

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.2)").s().p("AB3DgIAAgKIgJAAIAAgKIgKAAIAAgKIgUAAIAAgJIgKAAIAAgKIgLAAIAAgKIgKAAIAAgKIgKAAIAAgKIgKAAIAAgLIgJAAIAAgKIgKAAIAAgKIgSAAIAAgKIgKAAIAAgJIgLAAIAAgKIgKAAIAAgKIgKAAIAAgKIgKAAIAAgKIgKAAIAAgLIgTAAIAAgKIgKAAIAAgKIgKAAIAAgKIgLAAIAAgKIgKAAIAAjkIAKAAIAAALIALAAIAAAKIAKAAIAAAKIAKAAIAAAKIATAAIAAAJIAKAAIAAAKIAKAAIAAAKIAKAAIAAAKIAKAAIAAAKIALAAIAAALIAKAAIAAAKIASAAIAAAKIAKAAIAAAKIAJAAIAAAJIAKAAIAAAKIAKAAIAAAKIAKAAIAAAKIALAAIAAAKIAKAAIAAALIAUAAIAAAKIAKAAIAAAKIAJAAIAAAKIAKAAIAADjg");
	this.shape_1.setTransform(-1.9,-9.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).wait(10));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D1AE65").s().p("AAKBQIAAgUIAKAAIAAAKIAJAAIAAAKgAgdA8IAAgVIAVAAIAAAKIAIAAIAAALgAAKAxIAAgKIgSAAIAAgKIgKAAIAAgKIgLAAIAAgvIALAAIAAAKIAKAAIAAAKIAIAAIAAAIIAKAAIAAAKIATAAIAAAngAgIAngAAKgIIAAgKIgSAAIAAgVIgKAAIAAgKIgLAAIAAgKIAdAAIAAAKIAUAAIAAgKIAJAAIAAAfIgJAAIAAAUgAgIgSgAgShFIAAgKIAmAAIAAAKg");
	this.shape_2.setTransform(-1.9,-0.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#AD8433").s().p("AAABaIAAgUIgnAAIAAieIBOAAIAACygAAKBQIATAAIAAgKIgJAAIAAgKIgKAAgAgdA8IAdAAIAAgLIgIAAIAAgKIASAAIAAAKIATAAIAAgnIgTAAIAAgKIgKAAIAAgIIgIAAIAAgKIASAAIAAAKIAKAAIAAgUIAJAAIAAgfIgJAAIAAAKIgUAAIAAgKIgdAAIAAAKIALAAIAAAKIAKAAIAAAVIgKAAIAAgKIgLAAIAAAvIALAAIAAAKIAKAAIAAAKIgVAAgAgShFIAmAAIAAgKIgmAAg");
	this.shape_3.setTransform(-1.9,-0.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D1AE65").s().p("AgiAoIAAgLIAKAAIAAALgAhJAAIAAgJIAKAAIAJAAIAAAJgABAgJIgKAAIAAgJIAUAAIAAAJgAgDgJIAAgJIAIAAIAAAJgAgOgcIAAgKIALAAIAAAKg");
	this.shape_4.setTransform(-3.4,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#754F00").s().p("AhYCfIAAgKIAKAAIAAAKgABGBkIAAgKIAKAAIAAAKgAg7BaIAAgLIAKAAIAAALgAgnBPIgKAAIAAgeIAKAAIAAgJIgKAAIAAgKIAKAAIAAgUIAKAAIAAAKIALAAIAAgKIAAgKIgLAAIAAgJIAAgeIALAAIAAgTIAKAAIAAgKIAAgKIAIAAIAAAdIgIAAIAAAeIAAAKIAIAAIAAgKIAKAAIAAAKIAAAJIgKAAIAAAKIAUAAIAAgKIAAgJIAdAAIAAAJIgUAAIAAAUIgJAAIAAAKIgUAAIAAgKIgIAAIAAAKIAIAAIAAAnIgIAAIAAgUIgVAAIAAAKIAAAUgAgSAoIAKAAIAAgKIgKAAgAg7AxIAAgJIAKAAIAAAJgAgxAogAgxAKIgKAAIAAgKIgKAAIAAgJIgTAAIAAgKIATAAIAAAKIAUAAIAAAJIAKAAIAAAKgABGgTIAAgKIAUAAIAAAKgAAKgTIAAgKIAAgKIAKAAIAAAUgAhFgxIAAgJIAUAAIAAAJgAAxiUIAAgKIAKAAIAAAKg");
	this.shape_5.setTransform(-1.9,-3.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#996600").s().p("AgIBoIAAhQIgLAAIAAgKIATAAIAAAUIAAAKIAKAAIAAALIgKAAIAAAxgAAUBfIAAgKIAKAAIAAAKgAgxBfIAAgoIgKAAIAAgVIAKAAIAAgUIAKAAIAAgJIAKAAIAAAJIgKAAIAAAeIgKAAIAAALIAKAAIAAAogAhOBVIAAgUIAKAAIAAAUgAAnBLIAAgKIgJAAIAAgKIgKAAIAAgLIgKAAIAAgKIAAglIgKAAIAAgKIAKAAIAAAKIAUAAIAAgKIAJAAIAAgUIAUAAIAKAAIAAgLIALAAIAAAVIgLAAIAAAKIgeAAIAAAKIAKAAIAAAIIAKAAIAAAJIAVAAIAAAKIgLAAIAAAKIgKAAIAAgKIgUAAIAAAUIAKAAIAAAfgAhEBBIAAgKIAJAAIAAAKgAAKAsgAg7AFIgJAAIAAgIIAJAAIAAgKIAUAAIAAgKIAKAAIAAgKIgKAAIAAgLIgUAAIAAgKIAeAAIAAAKIAKAAIAAALIALAAIAAAKIgLAAIgKAAIAAAUIgKAAIgKAAIAAAIgAAKgXIAAgKIAKAAIAKAAIAAAKgAAegsIgKAAIAAgKIgKAAIAAgKIAKAAIAAAKIAKAAIAAgUIAAgKIATAAIAAAKIgKAAIAAAUIAKAAIAAgKIAKAAIAAAUgAAAgsIAAgKIAKAAIAAAKgAhOg2IAAgKIATAAIAAAKgAgThKIAAgTIALAAIAAATgAgIhdIAAgKIAIAAIAAAKg");
	this.shape_6.setTransform(-2.9,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},5).wait(5));

	// Layer 3
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A2A2A2").s().p("AhJEgIAAgeIgeAAIAAogIDPgBIAAHtIgdAAIAABSg");
	this.shape_7.setTransform(-2.5,-4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7}]}).wait(10));

	// Layer 1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#29547E").s().p("Ag2AdIAAg5IBtAAIAAA5g");
	this.shape_8.setTransform(-4.5,33.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgOAOIAAgcIAcAAIAAAcg");
	this.shape_9.setTransform(-2.5,-36.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#AAC8E5").s().p("AAUGrIAAtVIA7AAIAANVgAhOFvIAAg8IAUAAIAAA8g");
	this.shape_10.setTransform(9,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#336699").s().p("AhjGrIAAgOIgnAAIAAsWIAnAAIAAgiIBsAAIAAgPICCAAIAANVgAhFFvIBsAAIAUAAIAAg8IgUAAIhsAAgAhjlGIAAIfIAeAAIAAAeICUAAIAAhRIAdAAIAAntgAgJlfIAcAAIAAgeIgcAAg");
	this.shape_11.setTransform(-2.9,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]}).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.9,-42.7,33.9,85.5);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FFFF").s().p("Eg4PAtAMAAAhZ/MBwfAAAMAAABZ/g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF00").s().p("Eg4PAtAMAAAhZ/MBwfAAAMAAABZ/g");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF00FF").s().p("Eg4PAtAMAAAhZ/MBwfAAAMAAABZ/g");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("Eg4PAtAMAAAhZ/MBwfAAAMAAABZ/g");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("Eg4PAtAMAAAhZ/MBwfAAAMAAABZ/g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.shape_2}]},3).to({state:[{t:this.shape_3}]},3).to({state:[{t:this.shape_4}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-359.9,-287.9,720.1,576.1);


(lib.banda = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#224568").s().p("AOELVIAAgzIhkAAIAAhKIAAgEICWAAIAAAdIAxAAIAAAYIAABMgAvmo+IAAgZIAAh8IAxAAIAACBIgKAAIAAAUg");
	this.shape.setTransform(0,-12.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#336699").s().p("AKHPvIAAhQIigAAIAAhQIhQAAIAAhQIifAAIAAhQIhQAAIAAhQIhQAAIAAhBIgGAAIAAgPIhLAAIAAhQIhOAAIAAhQIhQAAIAAhLIgOAAIAAgFIhCAAIAAhQIhQAAIAAhBIgEAAIAAgPIhLAAIAAhQIhQAAIAAiAIgVAAIAAgZIgYAAIAAgFIgjAAIAAgtIgQAAIAAgjIhAAAIAAhQIhRAAIAAhQIhQAAIAAigIhQAAIAAhGIgUAAIAAhaIg8AAIAAg8IAAgUIAKAAIAAiCIgxAAIAAB9IgaAAIAAjIICXAAIAAgyIErAAIAABkIAzAAIAABkIAxAAIAABkIAzAAIAAAyIAxAAIAAAyIAzAAIAAAyIAxAAIAABkIAyAAIAAAyIAzAAIAAAyIAxAAIAAAyIAzAAIAAAyIAxAAIAAAyIAxAAIAAAyIAxAAIAAAyIAzAAIAAAyIAxAAIAAAyIAyAAIAAAwIBkAAIAAAyIAzAAIAAAyIAxAAIAAAyIAzAAIAAAyIAxAAIAAAyIBkAAIAAAyIAzAAIAAAyIAyAAIAAAyIBLAAIAABLIBkAAIAAAyIBjAAIAAhLIAJAAIAABkIgJAAIAAAZIgZAAIAACvIgxAAIAABkIgzAAIAAAyIgZAAIAAAZIgxAAIAAAog");
	this.shape_1.setTransform(-0.7,3.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-102.4,-97.4,203.4,201.5);


(lib.boom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// humo
	this.instance = new lib.humo_gr("synched",0);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(27).to({startPosition:0,_off:false},0).to({alpha:1},2).to({alpha:0},4).to({_off:true},1).wait(16));

	// bg explotado
	this.instance_1 = new lib.bgexplotado_1();
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).wait(21));

	// troner
	this.instance_2 = new lib.tro_1();
	this.instance_2.setTransform(9.5,5.5,1.297,1.293,-2);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:-12.6,regY:3,scaleX:1.29,scaleY:1.29,rotation:-1.7,x:-6,y:10.3,alpha:0.143},0).wait(1).to({scaleX:1.28,scaleY:1.27,rotation:-1.4,x:-5.4,y:10.6,alpha:0.286},0).wait(1).to({scaleX:1.26,scaleY:1.25,rotation:-1,x:-4.6,y:10.8,alpha:0.429},0).wait(1).to({scaleX:1.23,scaleY:1.21,rotation:-0.7,x:-3.7,y:11,alpha:0.571},0).wait(1).to({scaleX:1.19,scaleY:1.17,rotation:-0.4,x:-2.6,y:11.2,alpha:0.714},0).wait(1).to({scaleX:1.12,scaleY:1.1,rotation:-0.1,x:-1.2,y:11.3,alpha:0.857},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:0,x:0.5,y:11.4,alpha:1},0).wait(1).to({scaleX:1.06,scaleY:1.08,rotation:0.4,x:0.4,y:11.9},0).wait(1).to({scaleX:1.08,scaleY:1.07,rotation:0.7,x:0.7,y:12.2},0).wait(1).to({scaleX:1.06,scaleY:1.06,rotation:0.5,x:0.9},0).wait(1).to({scaleX:1.04,scaleY:1.03,rotation:0.2,x:1.2},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:0,x:1.6},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:1.5},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:1.6},0).wait(1).to({scaleX:1,scaleY:1,x:1.7,y:12.1},0).to({_off:true},1).wait(34));

	// bg con masclet
	this.instance_3 = new lib.bgconmasclet_1();
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).to({alpha:1},3).wait(9).to({_off:true},14).wait(20));

	// bg vacio
	this.instance_4 = new lib.bgvacio_1();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},7).wait(43));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-511.9,-639.9,1024,1280);


(lib.rita03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// banda
	this.instance = new lib.banda();
	this.instance.setTransform(0.1,167.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({x:2.5,y:182.9},0).wait(5).to({rotation:-1.3,x:15.9,y:165.7},0).wait(5).to({rotation:0,x:2.5,y:182.9},0).wait(5));

	// panuelo
	this.instance_1 = new lib.ritapanuelo();
	this.instance_1.setTransform(-6.3,103.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({x:-3.3,y:123.4},0).wait(5).to({x:5.6,y:103.7},0).wait(5).to({x:-3.3,y:123.4},0).wait(5));

	// peineta
	this.instance_2 = new lib.ritacara();
	this.instance_2.setTransform(-4.9,-18.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({y:-0.4},0).wait(5).to({y:-18.1},0).wait(5).to({y:-0.4},0).wait(5));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8C48F").s().p("AC0DSIAAg9IA7AAIAAA9gAA7BaIAAiyIA8AAIAAg9IA9AAIAAg8IA7AAIAAB5Ig7AAIAAA7IA7AAIAAA7Ig7AAIAAA8gAjvAeIAAh2IA9AAIAAB2g");
	this.shape.setTransform(129,1.5);

	this.instance_3 = new lib.phone();
	this.instance_3.setTransform(130,9.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8C48F").s().p("AiyNIIAAg8Ii0AAIAAg9Ig9AAIAAg7Ig8AAIAAmkIA8AAIAAg9IA9AAIAAg7IC0AAIAAA7IB3AAIAAg7IB2AAIAAg8IA8AAIAAh2IA9AAIAAh5IC0AAIAAqUIA7AAIAAB4IA8AAIAAOCIg8AAIAAFoIg7AAIAAA9Ig9AAIAAB3Ig8AAIAAA9Ih4AAIAAA8gADvkrIAAh3Ih4AAIAAg9Ig8AAIAAi0Ig7AAIAAh3IA7AAIAAg9IDwAAIAAIcg");
	this.shape_1.setTransform(111,70.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F8C48F").s().p("AgxB9IAAj4IBiAAIAAD4g");
	this.shape_2.setTransform(205,37.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F8C48F").s().p("AmOLlIAQg6IitguIAPg6Ig6gQIAQg6Ig7gPIBtmWIA6APIAPg5IA7APIAPg5ICuAuIgQA6IB0AfIAQg6IByAfIAPg6IA6APIAfhyIA6AQIAfh0ICuAvICrp+IA6AQIggB0IA7APIjpNkIg6gQIheFcIg5gQIgQA6Ig5gPIggB0Ig5gQIgQA6IhygfIgQA6gAEtj6IAgh0Ih0gfIAPg5Ig6gQIAuiuIg5gPIAeh0IA7APIAPg6IDoA/IiLIJg");
	this.shape_3.setTransform(143.2,105.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F8C48F").s().p("Aj5F2IAAleIBkAAIAAgvIAyAAIAAAvIAzAAIAAhiIAwAAIAAgxIBjAAIAAgzIAzAAIAxAAIAABkIgxAAIAAAzIgzAAIAABiIhjAAIAACVIgwAAIAABlIgzAAIAAAxgACWkRIAxAAIgxBjgADHjgIAAgxIAAhkIAzAAIAACVg");
	this.shape_4.setTransform(190,62.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F8C48F").s().p("AC0DSIAAg9IA8AAIAAA9gAA8BaIAAiyIA7AAIAAg9IA9AAIAAg8IA8AAIAAB5Ig8AAIAAA7IA8AAIAAA7Ig8AAIAAA8gAjvAeIAAh2IA9AAIAAB2g");
	this.shape_5.setTransform(157.1,1.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F8C48F").s().p("AizNIIAAg8Ii0AAIAAg9Ig8AAIAAg7Ig7AAIAAmkIA7AAIAAg9IA8AAIAAg7IC0AAIAAA7IB4AAIAAg7IB3AAIAAg8IA7AAIAAh2IA9AAIAAh5IC0AAIAAqUIA8AAIAAB4IA7AAIAAOCIg7AAIAAFoIg8AAIAAA9Ig9AAIAAB3Ig7AAIAAA9Ih5AAIAAA8gADwkrIAAh3Ih5AAIAAg9Ig7AAIAAi0Ig8AAIAAh3IA8AAIAAg9IDvAAIAAIcg");
	this.shape_6.setTransform(139.1,70.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance_3,p:{rotation:0,x:130,y:9.8,mode:"independent",startPosition:undefined,loop:undefined}},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.instance_3,p:{rotation:34.5,x:186.8,y:37.2,mode:"synched",startPosition:3,loop:false}},{t:this.shape_2}]},5).to({state:[{t:this.shape_6},{t:this.instance_3,p:{rotation:0,x:158.1,y:9.8,mode:"independent",startPosition:undefined,loop:undefined}},{t:this.shape_5}]},5).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.instance_3,p:{rotation:34.5,x:186.8,y:37.2,mode:"synched",startPosition:3,loop:false}},{t:this.shape_2}]},5).wait(5));

	// Layer 3
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F8C48F").s().p("ABKI+IAAhkIBkAAIAAgyIgxAAIAAgxIhkAAIAAgzIhiAAIAAgxIgzAAIAAhkIgxAAIAAhkIgzAAIAAiUIgyAAIAAiXIAyAAIAAjIIAzAAIAAgyIAxAAIAAgxIAzAAIAAgzIAxAAIAAAzIBiAAIAAAxIAzAAIAAAyIAxAAIAAAzIBlAAIAABkIgzAAIAAKIIAzAAIAADHg");
	this.shape_7.setTransform(-112.4,182.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F8C48F").s().p("ABVI+IAAhkIBxAAIAAgxIg5AAIAAgzIhxAAIAAgxIhvAAIAAgzIg5AAIAAhkIg5AAIAAhjIg4AAIAAiVIg5AAIAAiVIA5AAIAAjJIA4AAIAAgxIA5AAIAAgzIA5AAIAAgxIA4AAIAAAxIBwAAIAAAzIA4AAIAAAxIA5AAIAAAzIBxAAIAABjIg4AAIAAKIIA4AAIAADIg");
	this.shape_8.setTransform(-93.9,165.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7}]},5).to({state:[{t:this.shape_8}]},5).to({state:[{t:this.shape_7}]},5).wait(5));

	// camiseta
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EA0001").s().p("AqILVIAAgzIjIAAIAAhkIgzAAIAAqIIAzAAIAAhjIhlAAIAAgzIgxAAIAAgxIgzAAIAAgzIhkAAIAAgxIgxAAIAAgzIAxAAIAAgxIAzAAIAAgzIBkAAIAAgyIBjAAIAAgxIBkAAIAAgzIAzAAIAAgxICVAAIAAAxIB5AAIAAAzIBQAAIAAAxIK5AAIAAgxIC0AAIAAgzIB5AAIAAgBIFhAAIAABqIBqAAIAABrIBpAAIAABZIAjAAIAAAxIgjAAIAAAzIgOAAIAADHIgzAAIAACVIgxAAIAAJXIj6AAIAAAzg");
	this.shape_9.setTransform(0,145.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EA0001").s().p("AqILVIAAgzIktAAIAAmNIhsAAIAAg1IgpAAIAAgyIgzAAIAAgDIgOAAIAAguIgjAAIAAiVIAxAAIAAiVIgOAAIAAi4IAOAAIAAgRIgxAAIAAgxIAxAAIAAgzIAzAAIAAgxIBkAAIAAgzIBjAAIAAgxIBkAAIAAgyIAzAAIAAgzICVAAIAAAzIB5AAIAAAyIBQAAIAAAxIK5AAIAAgxIC0AAIAAgyIB5AAIAAgBIFhAAIAABqIBqAAIAABpIBpAAIAABZIAjAAIAAAzIgjAAIAAAxIgOAAIAADJIgzAAIAACTIgxAAIAAJYIj6AAIAAAzg");
	this.shape_10.setTransform(0,162.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EA0001").s().p("AqJLVIAAgzIjHAAIAAhkIgzAAIAAqIIAzAAIAAhjIhkAAIAAgzIgzAAIAAgxIgxAAIAAgzIhlAAIAAgxIgxAAIAAgzIAxAAIAAgxIAyAAIAAgzIBkAAIAAgyIBkAAIAAgxIBkAAIAAgzIAzAAIAAgxICWAAIAAAxIB4AAIAAAzIBQAAIAAAxIK6AAIAAgxIC0AAIAAgzIB4AAIAAgBIFhAAIAABqIBqAAIAABrIBqAAIAABZIAjAAIAAAxIgjAAIAAAzIgQAAIAADHIgyAAIAACVIgxAAIAAJXIj7AAIAAAzg");
	this.shape_11.setTransform(6.1,145.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9}]}).to({state:[{t:this.shape_10}]},5).to({state:[{t:this.shape_11}]},5).to({state:[{t:this.shape_10}]},5).wait(5));

	// falda
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#BB0000").s().p("Aq0KdIAAhQIhQAAIAAmcIgUAAIAAhqIhrAAIAAoQIISAAIAAhpIE9AAIAAhqIDSAAIAABqILlAAIAAIRIhqAAIAAF+IAhAAIAABQIhQAAIAADwg");
	this.shape_12.setTransform(3.7,218.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#BB0000").s().p("Aq0KdIAAhQIhQAAIAAmcIgVAAIAAhqIhqAAIAAoQIISAAIAAhpIE+AAIAAhqIDRAAIAABqILlAAIAAIRIhpAAIAAF+IAgAAIAABQIhQAAIAADwg");
	this.shape_13.setTransform(5.4,236.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12,p:{x:3.7}}]}).to({state:[{t:this.shape_13}]},5).to({state:[{t:this.shape_12,p:{x:9.1}}]},5).to({state:[{t:this.shape_13}]},5).wait(5));

	// brazo
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F8C48F").s().p("ABKI+IAAhkIBkAAIAAgxIgxAAIAAgzIhlAAIAAgxIhiAAIAAgzIgxAAIAAhkIgzAAIAAhjIgxAAIAAiVIgzAAIAAiVIAzAAIAAjJIAxAAIAAgxIAzAAIAAgzIAxAAIAAgxIAzAAIAAAxIBhAAIAAAzIAzAAIAAAxIAxAAIAAAzIBkAAIAABjIgxAAIAAKIIAxAAIAADIg");
	this.shape_14.setTransform(-101,165.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14}]}).to({state:[]},5).to({state:[]},5).to({state:[]},5).wait(5));

	// patas
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CCCCCC").s().p("ADTA0IAAgTIAqAAIAAhPIDwAAIAAgGICOAAIAABogAp6A0IAAhoICpAAIAAAGIDwAAIAABPIAPAAIAAATg");
	this.shape_15.setTransform(10.6,332);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D99F77").s().p("ACMECIAAmKIASAAIAAh5IGoAAIAAAmIhqAAIAAAWIAYAAIAAD9IgYAAIAAAJIgkAAIAABmIjwAAIAABRIgqAAIAAAKgAkHECIAAgKIgPAAIAAhRIjwAAIAAhvIg8AAIAAiqIgDAAIAAiPIE+AAIAAB5IAtAAIAAGKg");
	this.shape_16.setTransform(15.9,311.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CCCCCC").s().p("AjSA0IAAgTIAqAAIAAhPIDuAAIAAgGICNAAIAABog");
	this.shape_17.setTransform(52.5,332);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CCCCCC").s().p("AjSA0IAAhoICpAAIAAAGIDuAAIAABPIAOAAIAAATg");
	this.shape_18.setTransform(-31.1,332);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D99F77").s().p("AB4DvIAAjvIB4AAIAAjvIDwAAIAAB4IB4AAIAADvIh4AAIAAB3gAnfDvIAAh3Ih3AAIAAlnIFoAAIAAFnIA5AAIAAB3g");
	this.shape_19.setTransform(12,312);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15}]}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},5).to({state:[{t:this.shape_16},{t:this.shape_15}]},5).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-128.5,-178.2,287.5,515.6);


(lib.about = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.rita03();
	this.instance.setTransform(-21,-157.2,1.542,1.505);

	// boton_invisible
	this.link = new lib.boton_invisible();
	this.link.setTransform(-1.8,434.3);

	// txt
	this.text = new cjs.Text("\n\nhttp://TRODEBACISBACK.TUMBLR.COM\n", "8px 04b_11", "#FFFFFF");
	this.text.lineHeight = 8;
	this.text.setTransform(-312.8,399,2.178,2.178);

	// fondo multicolor
	this.centered = new lib.bg();
	this.centered.setTransform(0.1,0,1.422,2.222);

	this.addChild(this.centered,this.text,this.link,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-511.8,-639.9,1024,1280);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;