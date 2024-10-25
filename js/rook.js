window.addEventListener('load',function(e) { 
    initRook();
});

var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function initRook() {
	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	var comp=AdobeAn.getComposition("1E0D29FC2E03144392376EBE556E0D80");
	var lib=comp.getLibrary();
	handleComplete({},comp);
}
function handleComplete(evt,comp) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var lib=comp.getLibrary();
	var ss=comp.getSpriteSheet();
	exportRoot = new lib.rook();
	stage = new lib.Stage(canvas);	
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		stage.addChild(exportRoot);
		createjs.Ticker.framerate = lib.properties.fps;
		createjs.Ticker.addEventListener("tick", stage);
	}	    
	//Code to support hidpi screens and responsive scaling.
	AdobeAn.makeResponsive(true,'both',false,1,[canvas,anim_container,dom_overlay_container]);	
	AdobeAn.compositionLoaded(lib.properties.id);
	fnStartAnimation();
}

(function (cjs, an) {

	var p; // shortcut to reference prototypes
	var lib={};var ss={};var img={};
	lib.ssMetadata = [];
	
	
	(lib.AnMovieClip = function(){
		this.actionFrames = [];
		this.ignorePause = false;
		this.gotoAndPlay = function(positionOrLabel){
			cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
		}
		this.play = function(){
			cjs.MovieClip.prototype.play.call(this);
		}
		this.gotoAndStop = function(positionOrLabel){
			cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		}
		this.stop = function(){
			cjs.MovieClip.prototype.stop.call(this);
		}
	}).prototype = p = new cjs.MovieClip();
	// symbols:
	
	
	
	(lib.SmokeCloud = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FFFFFF").s().p("AlcFdQiRiRAAjMQAAjMCRiQQCQiRDMAAQDMAACRCRQCRCQAADMQAADMiRCRQiRCRjMAAQjMAAiQiRg");
		this.shape.setTransform(49.4,0);
	
		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,-49.4,98.8,98.8);
	
	
	(lib.SmokeCloud_Ani = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Layer_2_copy_copy
		this.instance = new lib.SmokeCloud("synched",0);
		this.instance.setTransform(-236.15,-276.2,0.512,0.512,0,0,0,48.2,0);
		this.instance._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).wait(1).to({regX:49.4,scaleX:0.5546,scaleY:0.5546,x:-220.7,y:-280.45,alpha:0.9985},0).wait(1).to({scaleX:0.5973,scaleY:0.5973,x:-205.95,y:-284.7,alpha:0.997},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:-191.3,y:-288.95,alpha:0.9954},0).wait(1).to({scaleX:0.6826,scaleY:0.6826,x:-176.8,y:-293.1,alpha:0.9937},0).wait(1).to({scaleX:0.7253,scaleY:0.7253,x:-162.5,y:-297.25,alpha:0.9919},0).wait(1).to({scaleX:0.7679,scaleY:0.7679,x:-148.45,y:-301.3,alpha:0.9901},0).wait(1).to({scaleX:0.8106,scaleY:0.8106,x:-134.75,y:-305.25,alpha:0.9882},0).wait(1).to({scaleX:0.8533,scaleY:0.8533,x:-121.4,y:-309.1,alpha:0.9862},0).wait(1).to({scaleX:0.8959,scaleY:0.8959,x:-108.4,y:-312.85,alpha:0.984},0).wait(1).to({scaleX:0.9386,scaleY:0.9386,x:-95.9,y:-316.45,alpha:0.9818},0).wait(1).to({scaleX:0.9813,scaleY:0.9813,x:-83.8,y:-319.95,alpha:0.9794},0).wait(1).to({scaleX:1.0239,scaleY:1.0239,x:-72.1,y:-323.3,alpha:0.9769},0).wait(1).to({scaleX:1.0666,scaleY:1.0666,x:-60.95,y:-326.55,alpha:0.9743},0).wait(1).to({scaleX:1.1093,scaleY:1.1093,x:-50.3,y:-329.6,alpha:0.9715},0).wait(1).to({scaleX:1.1519,scaleY:1.1519,x:-40.1,y:-332.55,alpha:0.9686},0).wait(1).to({scaleX:1.1946,scaleY:1.1946,x:-30.45,y:-335.35,alpha:0.9655},0).wait(1).to({scaleX:1.2372,scaleY:1.2372,x:-21.2,y:-338,alpha:0.9622},0).wait(1).to({scaleX:1.2799,scaleY:1.2799,x:-12.4,y:-340.5,alpha:0.9587},0).wait(1).to({scaleX:1.3226,scaleY:1.3226,x:-4.05,y:-342.9,alpha:0.955},0).wait(1).to({scaleX:1.3652,scaleY:1.3652,x:3.8,y:-345.2,alpha:0.951},0).wait(1).to({scaleX:1.4079,scaleY:1.4079,x:11.3,y:-347.35,alpha:0.9468},0).wait(1).to({scaleX:1.4506,scaleY:1.4506,x:18.4,y:-349.4,alpha:0.9424},0).wait(1).to({scaleX:1.4932,scaleY:1.4932,x:25.1,y:-351.3,alpha:0.9376},0).wait(1).to({scaleX:1.5359,scaleY:1.5359,x:31.45,y:-353.15,alpha:0.9326},0).wait(1).to({scaleX:1.5786,scaleY:1.5786,x:37.5,y:-354.85,alpha:0.9272},0).wait(1).to({scaleX:1.6212,scaleY:1.6212,x:43.2,y:-356.5,alpha:0.9215},0).wait(1).to({scaleX:1.6639,scaleY:1.6639,x:48.55,y:-358.05,alpha:0.9154},0).wait(1).to({scaleX:1.7065,scaleY:1.7065,x:53.65,y:-359.5,alpha:0.9089},0).wait(1).to({scaleX:1.7492,scaleY:1.7492,x:58.45,y:-360.9,alpha:0.902},0).wait(1).to({scaleX:1.7919,scaleY:1.7919,x:63,y:-362.2,alpha:0.8946},0).wait(1).to({scaleX:1.8345,scaleY:1.8345,x:67.35,y:-363.4,alpha:0.8867},0).wait(1).to({scaleX:1.8772,scaleY:1.8772,x:71.45,y:-364.6,alpha:0.8783},0).wait(1).to({scaleX:1.9199,scaleY:1.9199,x:75.3,y:-365.7,alpha:0.8693},0).wait(1).to({scaleX:1.9625,scaleY:1.9625,x:78.9,y:-366.75,alpha:0.8597},0).wait(1).to({scaleX:2.0052,scaleY:2.0052,x:82.35,y:-367.7,alpha:0.8496},0).wait(1).to({scaleX:2.0479,scaleY:2.0479,x:85.6,y:-368.65,alpha:0.8387},0).wait(1).to({scaleX:2.0905,scaleY:2.0905,x:88.65,y:-369.5,alpha:0.8271},0).wait(1).to({scaleX:2.1332,scaleY:2.1332,x:91.6,y:-370.35,alpha:0.8148},0).wait(1).to({scaleX:2.1758,scaleY:2.1758,x:94.35,y:-371.1,alpha:0.8017},0).wait(1).to({scaleX:2.2185,scaleY:2.2185,x:96.9,y:-371.85,alpha:0.7878},0).wait(1).to({scaleX:2.2612,scaleY:2.2612,x:99.35,y:-372.55,alpha:0.773},0).wait(1).to({scaleX:2.3038,scaleY:2.3038,x:101.6,y:-373.2,alpha:0.7573},0).wait(1).to({scaleX:2.3465,scaleY:2.3465,x:103.75,y:-373.8,alpha:0.7407},0).wait(1).to({scaleX:2.3892,scaleY:2.3892,x:105.8,y:-374.4,alpha:0.7232},0).wait(1).to({scaleX:2.4318,scaleY:2.4318,x:107.75,y:-374.9,alpha:0.7047},0).wait(1).to({scaleX:2.4745,scaleY:2.4745,x:109.55,y:-375.4,alpha:0.6852},0).wait(1).to({scaleX:2.5172,scaleY:2.5172,x:111.2,y:-375.9,alpha:0.6646},0).wait(1).to({scaleX:2.5598,scaleY:2.5598,x:112.75,y:-376.35,alpha:0.6431},0).wait(1).to({scaleX:2.6025,scaleY:2.6025,x:114.2,y:-376.75,alpha:0.6205},0).wait(1).to({scaleX:2.6451,scaleY:2.6451,x:115.6,y:-377.15,alpha:0.597},0).wait(1).to({scaleX:2.6878,scaleY:2.6878,x:116.9,y:-377.5,alpha:0.5724},0).wait(1).to({scaleX:2.7305,scaleY:2.7305,x:118.1,y:-377.8,alpha:0.5468},0).wait(1).to({scaleX:2.7731,scaleY:2.7731,x:119.15,y:-378.1,alpha:0.5203},0).wait(1).to({scaleX:2.8158,scaleY:2.8158,x:120.2,y:-378.4,alpha:0.4929},0).wait(1).to({scaleX:2.8585,scaleY:2.8585,x:121.1,y:-378.65,alpha:0.4646},0).wait(1).to({scaleX:2.9011,scaleY:2.9011,x:121.95,y:-378.9,alpha:0.4354},0).wait(1).to({scaleX:2.9438,scaleY:2.9438,x:122.75,y:-379.1,alpha:0.4054},0).wait(1).to({scaleX:2.9865,scaleY:2.9865,x:123.5,y:-379.3,alpha:0.3746},0).wait(1).to({scaleX:3.0291,scaleY:3.0291,x:124.1,y:-379.45,alpha:0.3432},0).wait(1).to({scaleX:3.0718,scaleY:3.0718,x:124.7,y:-379.6,alpha:0.3111},0).wait(1).to({scaleX:3.1144,scaleY:3.1144,x:125.2,y:-379.75,alpha:0.2783},0).wait(1).to({scaleX:3.1571,scaleY:3.1571,x:125.65,y:-379.85,alpha:0.245},0).wait(1).to({scaleX:3.1998,scaleY:3.1998,x:126,y:-379.95,alpha:0.2112},0).wait(1).to({scaleX:3.2424,scaleY:3.2424,x:126.4,y:-380.05,alpha:0.1769},0).wait(1).to({scaleX:3.2851,scaleY:3.2851,x:126.65,y:-380.1,alpha:0.1422},0).wait(1).to({scaleX:3.3278,scaleY:3.3278,x:126.9,y:-380.15,alpha:0.1072},0).wait(1).to({scaleX:3.3704,scaleY:3.3704,x:127.05,y:-380.2,alpha:0.0717},0).wait(1).to({scaleX:3.4131,scaleY:3.4131,x:127.15,alpha:0.036},0).wait(1).to({regX:48.2,scaleX:3.4557,scaleY:3.4557,x:123.05,y:-380.25,alpha:0},0).wait(1));
	
		// Layer_2_copy
		this.instance_1 = new lib.SmokeCloud("synched",0);
		this.instance_1.setTransform(-224.05,-270.5,0.512,0.512,0,0,0,48.2,0);
		this.instance_1._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).wait(1).to({regX:49.4,scaleX:0.5546,scaleY:0.5546,x:-215.6,y:-271,alpha:0.9985},0).wait(1).to({scaleX:0.5973,scaleY:0.5973,x:-207.8,y:-271.5,alpha:0.997},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:-200,y:-272,alpha:0.9954},0).wait(1).to({scaleX:0.6826,scaleY:0.6826,x:-192.35,y:-272.5,alpha:0.9937},0).wait(1).to({scaleX:0.7253,scaleY:0.7253,x:-184.75,y:-272.95,alpha:0.9919},0).wait(1).to({scaleX:0.7679,scaleY:0.7679,x:-177.3,y:-273.45,alpha:0.9901},0).wait(1).to({scaleX:0.8106,scaleY:0.8106,x:-170.05,y:-273.9,alpha:0.9882},0).wait(1).to({scaleX:0.8533,scaleY:0.8533,x:-162.95,y:-274.35,alpha:0.9862},0).wait(1).to({scaleX:0.8959,scaleY:0.8959,x:-156.1,y:-274.8,alpha:0.984},0).wait(1).to({scaleX:0.9386,scaleY:0.9386,x:-149.45,y:-275.25,alpha:0.9818},0).wait(1).to({scaleX:0.9813,scaleY:0.9813,x:-143.05,y:-275.65,alpha:0.9794},0).wait(1).to({scaleX:1.0239,scaleY:1.0239,x:-136.85,y:-276.05,alpha:0.9769},0).wait(1).to({scaleX:1.0666,scaleY:1.0666,x:-130.95,y:-276.45,alpha:0.9743},0).wait(1).to({scaleX:1.1093,scaleY:1.1093,x:-125.3,y:-276.8,alpha:0.9715},0).wait(1).to({scaleX:1.1519,scaleY:1.1519,x:-119.9,y:-277.15,alpha:0.9686},0).wait(1).to({scaleX:1.1946,scaleY:1.1946,x:-114.75,y:-277.45,alpha:0.9655},0).wait(1).to({scaleX:1.2372,scaleY:1.2372,x:-109.85,y:-277.8,alpha:0.9622},0).wait(1).to({scaleX:1.2799,scaleY:1.2799,x:-105.15,y:-278.1,alpha:0.9587},0).wait(1).to({scaleX:1.3226,scaleY:1.3226,x:-100.75,y:-278.35,alpha:0.955},0).wait(1).to({scaleX:1.3652,scaleY:1.3652,x:-96.55,y:-278.65,alpha:0.951},0).wait(1).to({scaleX:1.4079,scaleY:1.4079,x:-92.6,y:-278.9,alpha:0.9468},0).wait(1).to({scaleX:1.4506,scaleY:1.4506,x:-88.85,y:-279.15,alpha:0.9424},0).wait(1).to({scaleX:1.4932,scaleY:1.4932,x:-85.3,y:-279.35,alpha:0.9376},0).wait(1).to({scaleX:1.5359,scaleY:1.5359,x:-81.9,y:-279.55,alpha:0.9326},0).wait(1).to({scaleX:1.5786,scaleY:1.5786,x:-78.65,y:-279.8,alpha:0.9272},0).wait(1).to({scaleX:1.6212,scaleY:1.6212,x:-75.65,y:-279.95,alpha:0.9215},0).wait(1).to({scaleX:1.6639,scaleY:1.6639,x:-72.8,y:-280.15,alpha:0.9154},0).wait(1).to({scaleX:1.7065,scaleY:1.7065,x:-70.1,y:-280.35,alpha:0.9089},0).wait(1).to({scaleX:1.7492,scaleY:1.7492,x:-67.5,y:-280.5,alpha:0.902},0).wait(1).to({scaleX:1.7919,scaleY:1.7919,x:-65.1,y:-280.65,alpha:0.8946},0).wait(1).to({scaleX:1.8345,scaleY:1.8345,x:-62.75,y:-280.8,alpha:0.8867},0).wait(1).to({scaleX:1.8772,scaleY:1.8772,x:-60.6,y:-280.95,alpha:0.8783},0).wait(1).to({scaleX:1.9199,scaleY:1.9199,x:-58.55,y:-281.05,alpha:0.8693},0).wait(1).to({scaleX:1.9625,scaleY:1.9625,x:-56.6,y:-281.2,alpha:0.8597},0).wait(1).to({scaleX:2.0052,scaleY:2.0052,x:-54.75,y:-281.3,alpha:0.8496},0).wait(1).to({scaleX:2.0479,scaleY:2.0479,x:-53,y:-281.4,alpha:0.8387},0).wait(1).to({scaleX:2.0905,scaleY:2.0905,x:-51.4,y:-281.5,alpha:0.8271},0).wait(1).to({scaleX:2.1332,scaleY:2.1332,x:-49.8,y:-281.6,alpha:0.8148},0).wait(1).to({scaleX:2.1758,scaleY:2.1758,x:-48.35,y:-281.7,alpha:0.8017},0).wait(1).to({scaleX:2.2185,scaleY:2.2185,x:-46.95,y:-281.8,alpha:0.7878},0).wait(1).to({scaleX:2.2612,scaleY:2.2612,x:-45.65,y:-281.85,alpha:0.773},0).wait(1).to({scaleX:2.3038,scaleY:2.3038,x:-44.4,y:-281.95,alpha:0.7573},0).wait(1).to({scaleX:2.3465,scaleY:2.3465,x:-43.25,y:-282,alpha:0.7407},0).wait(1).to({scaleX:2.3892,scaleY:2.3892,x:-42.2,y:-282.1,alpha:0.7232},0).wait(1).to({scaleX:2.4318,scaleY:2.4318,x:-41.1,y:-282.15,alpha:0.7047},0).wait(1).to({scaleX:2.4745,scaleY:2.4745,x:-40.15,y:-282.2,alpha:0.6852},0).wait(1).to({scaleX:2.5172,scaleY:2.5172,x:-39.25,y:-282.25,alpha:0.6646},0).wait(1).to({scaleX:2.5598,scaleY:2.5598,x:-38.4,y:-282.3,alpha:0.6431},0).wait(1).to({scaleX:2.6025,scaleY:2.6025,x:-37.6,y:-282.35,alpha:0.6205},0).wait(1).to({scaleX:2.6451,scaleY:2.6451,x:-36.85,y:-282.4,alpha:0.597},0).wait(1).to({scaleX:2.6878,scaleY:2.6878,x:-36.15,y:-282.45,alpha:0.5724},0).wait(1).to({scaleX:2.7305,scaleY:2.7305,x:-35.5,y:-282.5,alpha:0.5468},0).wait(1).to({scaleX:2.7731,scaleY:2.7731,x:-34.9,y:-282.55,alpha:0.5203},0).wait(1).to({scaleX:2.8158,scaleY:2.8158,x:-34.35,alpha:0.4929},0).wait(1).to({scaleX:2.8585,scaleY:2.8585,x:-33.85,y:-282.6,alpha:0.4646},0).wait(1).to({scaleX:2.9011,scaleY:2.9011,x:-33.35,alpha:0.4354},0).wait(1).to({scaleX:2.9438,scaleY:2.9438,x:-32.95,y:-282.65,alpha:0.4054},0).wait(1).to({scaleX:2.9865,scaleY:2.9865,x:-32.5,alpha:0.3746},0).wait(1).to({scaleX:3.0291,scaleY:3.0291,x:-32.15,y:-282.7,alpha:0.3432},0).wait(1).to({scaleX:3.0718,scaleY:3.0718,x:-31.8,alpha:0.3111},0).wait(1).to({scaleX:3.1144,scaleY:3.1144,x:-31.55,alpha:0.2783},0).wait(1).to({scaleX:3.1571,scaleY:3.1571,x:-31.3,y:-282.75,alpha:0.245},0).wait(1).to({scaleX:3.1998,scaleY:3.1998,x:-31.05,alpha:0.2112},0).wait(1).to({scaleX:3.2424,scaleY:3.2424,x:-30.8,alpha:0.1769},0).wait(1).to({scaleX:3.2851,scaleY:3.2851,x:-30.65,alpha:0.1422},0).wait(1).to({scaleX:3.3278,scaleY:3.3278,x:-30.5,alpha:0.1072},0).wait(1).to({scaleX:3.3704,scaleY:3.3704,x:-30.4,alpha:0.0717},0).wait(1).to({scaleX:3.4131,scaleY:3.4131,x:-30.35,alpha:0.036},0).wait(1).to({regX:48.2,scaleX:3.4557,scaleY:3.4557,x:-34.45,y:-282.8,alpha:0},0).to({_off:true},1).wait(4));
	
		// Layer_2
		this.instance_2 = new lib.SmokeCloud("synched",0);
		this.instance_2.setTransform(-234.55,-271.75,0.512,0.512,0,0,0,48.2,0);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:49.4,scaleX:0.5546,scaleY:0.5546,x:-211.3,y:-274.05,alpha:0.9985},0).wait(1).to({scaleX:0.5973,scaleY:0.5973,x:-188.75,y:-276.35,alpha:0.997},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:-166.35,y:-278.65,alpha:0.9954},0).wait(1).to({scaleX:0.6826,scaleY:0.6826,x:-144.25,y:-280.95,alpha:0.9937},0).wait(1).to({scaleX:0.7253,scaleY:0.7253,x:-122.35,y:-283.2,alpha:0.9919},0).wait(1).to({scaleX:0.7679,scaleY:0.7679,x:-100.95,y:-285.4,alpha:0.9901},0).wait(1).to({scaleX:0.8106,scaleY:0.8106,x:-79.95,y:-287.55,alpha:0.9882},0).wait(1).to({scaleX:0.8533,scaleY:0.8533,x:-59.55,y:-289.6,alpha:0.9862},0).wait(1).to({scaleX:0.8959,scaleY:0.8959,x:-39.75,y:-291.65,alpha:0.984},0).wait(1).to({scaleX:0.9386,scaleY:0.9386,x:-20.6,y:-293.65,alpha:0.9818},0).wait(1).to({scaleX:0.9813,scaleY:0.9813,x:-2.1,y:-295.5,alpha:0.9794},0).wait(1).to({scaleX:1.0239,scaleY:1.0239,x:15.7,y:-297.35,alpha:0.9769},0).wait(1).to({scaleX:1.0666,scaleY:1.0666,x:32.75,y:-299.1,alpha:0.9743},0).wait(1).to({scaleX:1.1093,scaleY:1.1093,x:49.05,y:-300.75,alpha:0.9715},0).wait(1).to({scaleX:1.1519,scaleY:1.1519,x:64.5,y:-302.35,alpha:0.9686},0).wait(1).to({scaleX:1.1946,scaleY:1.1946,x:79.3,y:-303.9,alpha:0.9655},0).wait(1).to({scaleX:1.2372,scaleY:1.2372,x:93.4,y:-305.3,alpha:0.9622},0).wait(1).to({scaleX:1.2799,scaleY:1.2799,x:106.85,y:-306.7,alpha:0.9587},0).wait(1).to({scaleX:1.3226,scaleY:1.3226,x:119.55,y:-308,alpha:0.955},0).wait(1).to({scaleX:1.3652,scaleY:1.3652,x:131.6,y:-309.25,alpha:0.951},0).wait(1).to({scaleX:1.4079,scaleY:1.4079,x:143,y:-310.4,alpha:0.9468},0).wait(1).to({scaleX:1.4506,scaleY:1.4506,x:153.8,y:-311.5,alpha:0.9424},0).wait(1).to({scaleX:1.4932,scaleY:1.4932,x:164.05,y:-312.55,alpha:0.9376},0).wait(1).to({scaleX:1.5359,scaleY:1.5359,x:173.75,y:-313.55,alpha:0.9326},0).wait(1).to({scaleX:1.5786,scaleY:1.5786,x:182.95,y:-314.5,alpha:0.9272},0).wait(1).to({scaleX:1.6212,scaleY:1.6212,x:191.65,y:-315.4,alpha:0.9215},0).wait(1).to({scaleX:1.6639,scaleY:1.6639,x:199.85,y:-316.2,alpha:0.9154},0).wait(1).to({scaleX:1.7065,scaleY:1.7065,x:207.6,y:-317,alpha:0.9089},0).wait(1).to({scaleX:1.7492,scaleY:1.7492,x:214.95,y:-317.75,alpha:0.902},0).wait(1).to({scaleX:1.7919,scaleY:1.7919,x:221.85,y:-318.45,alpha:0.8946},0).wait(1).to({scaleX:1.8345,scaleY:1.8345,x:228.5,y:-319.15,alpha:0.8867},0).wait(1).to({scaleX:1.8772,scaleY:1.8772,x:234.7,y:-319.8,alpha:0.8783},0).wait(1).to({scaleX:1.9199,scaleY:1.9199,x:240.55,y:-320.4,alpha:0.8693},0).wait(1).to({scaleX:1.9625,scaleY:1.9625,x:246.1,y:-320.95,alpha:0.8597},0).wait(1).to({scaleX:2.0052,scaleY:2.0052,x:251.3,y:-321.45,alpha:0.8496},0).wait(1).to({scaleX:2.0479,scaleY:2.0479,x:256.25,y:-322,alpha:0.8387},0).wait(1).to({scaleX:2.0905,scaleY:2.0905,x:260.9,y:-322.45,alpha:0.8271},0).wait(1).to({scaleX:2.1332,scaleY:2.1332,x:265.4,y:-322.9,alpha:0.8148},0).wait(1).to({scaleX:2.1758,scaleY:2.1758,x:269.55,y:-323.35,alpha:0.8017},0).wait(1).to({scaleX:2.2185,scaleY:2.2185,x:273.45,y:-323.75,alpha:0.7878},0).wait(1).to({scaleX:2.2612,scaleY:2.2612,x:277.15,y:-324.1,alpha:0.773},0).wait(1).to({scaleX:2.3038,scaleY:2.3038,x:280.6,y:-324.45,alpha:0.7573},0).wait(1).to({scaleX:2.3465,scaleY:2.3465,x:283.9,y:-324.8,alpha:0.7407},0).wait(1).to({scaleX:2.3892,scaleY:2.3892,x:286.95,y:-325.1,alpha:0.7232},0).wait(1).to({scaleX:2.4318,scaleY:2.4318,x:289.9,y:-325.4,alpha:0.7047},0).wait(1).to({scaleX:2.4745,scaleY:2.4745,x:292.6,y:-325.65,alpha:0.6852},0).wait(1).to({scaleX:2.5172,scaleY:2.5172,x:295.1,y:-325.9,alpha:0.6646},0).wait(1).to({scaleX:2.5598,scaleY:2.5598,x:297.5,y:-326.15,alpha:0.6431},0).wait(1).to({scaleX:2.6025,scaleY:2.6025,x:299.7,y:-326.4,alpha:0.6205},0).wait(1).to({scaleX:2.6451,scaleY:2.6451,x:301.75,y:-326.6,alpha:0.597},0).wait(1).to({scaleX:2.6878,scaleY:2.6878,x:303.75,y:-326.8,alpha:0.5724},0).wait(1).to({scaleX:2.7305,scaleY:2.7305,x:305.5,y:-326.95,alpha:0.5468},0).wait(1).to({scaleX:2.7731,scaleY:2.7731,x:307.15,y:-327.15,alpha:0.5203},0).wait(1).to({scaleX:2.8158,scaleY:2.8158,x:308.7,y:-327.3,alpha:0.4929},0).wait(1).to({scaleX:2.8585,scaleY:2.8585,x:310.05,y:-327.4,alpha:0.4646},0).wait(1).to({scaleX:2.9011,scaleY:2.9011,x:311.35,y:-327.55,alpha:0.4354},0).wait(1).to({scaleX:2.9438,scaleY:2.9438,x:312.5,y:-327.65,alpha:0.4054},0).wait(1).to({scaleX:2.9865,scaleY:2.9865,x:313.6,y:-327.75,alpha:0.3746},0).wait(1).to({scaleX:3.0291,scaleY:3.0291,x:314.55,y:-327.85,alpha:0.3432},0).wait(1).to({scaleX:3.0718,scaleY:3.0718,x:315.4,y:-327.95,alpha:0.3111},0).wait(1).to({scaleX:3.1144,scaleY:3.1144,x:316.15,y:-328,alpha:0.2783},0).wait(1).to({scaleX:3.1571,scaleY:3.1571,x:316.8,y:-328.1,alpha:0.245},0).wait(1).to({scaleX:3.1998,scaleY:3.1998,x:317.4,y:-328.15,alpha:0.2112},0).wait(1).to({scaleX:3.2424,scaleY:3.2424,x:317.9,y:-328.2,alpha:0.1769},0).wait(1).to({scaleX:3.2851,scaleY:3.2851,x:318.3,alpha:0.1422},0).wait(1).to({scaleX:3.3278,scaleY:3.3278,x:318.6,y:-328.25,alpha:0.1072},0).wait(1).to({scaleX:3.3704,scaleY:3.3704,x:318.85,alpha:0.0717},0).wait(1).to({scaleX:3.4131,scaleY:3.4131,x:319,alpha:0.036},0).wait(1).to({regX:48.2,scaleX:3.4557,scaleY:3.4557,x:314.95,y:-328.3,alpha:0},0).to({_off:true},1).wait(10));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-260.8,-550.9,750.7,438.79999999999995);
	
	
	(lib.SmokeClouds = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Layer_1_copy_copy
		this.instance = new lib.SmokeCloud_Ani("synched",6,false);
		this.instance.setTransform(36.25,108.25,0.6419,0.6272,0,146.9726,-33.029,-178.9,-299.2);
		this.instance._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(31).to({_off:false},0).wait(110).to({startPosition:79},0).to({_off:true},1).wait(29));
	
		// Layer_1_copy
		this.instance_1 = new lib.SmokeCloud_Ani("synched",19,false);
		this.instance_1.setTransform(36.25,108.05,0.6555,0.6555,0,145.4894,-34.5106,-179.1,-299.2);
		this.instance_1._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(31).to({_off:false},0).wait(110).to({startPosition:79},0).to({_off:true},1).wait(29));
	
		// Layer_1
		this.instance_2 = new lib.SmokeCloud_Ani("synched",31,false);
		this.instance_2.setTransform(80.25,-116.25,0.6555,0.6555,0,160.1883,-19.8117,0,-0.1);
		this.instance_2._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(31).to({_off:false},0).wait(110).to({startPosition:79},0).to({_off:true},1).wait(29));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-20.3,-173.3,482.5,375.5);
	
	
	(lib.Smoke = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// SmokeClouds
		this.instance = new lib.SmokeClouds("synched",36,false);
		this.instance.setTransform(241.5,77.9,0.5072,0.5072,0,0,0,27.7,4.2);
		this.instance.alpha = 0.6602;
		this.instance._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(25).to({_off:false},0).wait(86));
	
		// SmokeClouds
		this.instance_1 = new lib.SmokeClouds("synched",39,false);
		this.instance_1.setTransform(200.9,163.2,0.5072,0.5072,0,-7.9546,172.0454,51.7,160.5);
		this.instance_1.alpha = 0.6602;
		this.instance_1._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).wait(103));
	
		// SmokeClouds
		this.instance_2 = new lib.SmokeClouds("synched",32,false);
		this.instance_2.setTransform(213.15,230.2,0.5893,0.5558,0,71.5685,-108.4331,51.6,160.2);
		this.instance_2.alpha = 0.6602;
		this.instance_2._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(33).to({_off:false},0).wait(78));
	
		// SmokeClouds
		this.instance_3 = new lib.SmokeClouds("synched",31,false);
		this.instance_3.setTransform(243.5,191.65,0.5893,0.5558,-87.3123,0,0,51.6,160.2);
		this.instance_3.alpha = 0.6602;
		this.instance_3._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5).to({_off:false},0).to({_off:true},105).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-16.1,-53.8,478,315.8);
	
	
	// stage content:
	(lib.rook = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Smoke_1
		this.instance = new lib.Smoke("synched",0);
		this.instance.setTransform(233.95,99.3,1.4465,1.4526,0,180,0,181.7,212.6);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({x:229.95,startPosition:5},0).wait(1).to({x:193.95,startPosition:6},0).wait(105));
	
		// Smoke_2
		this.instance_1 = new lib.Smoke("synched",0);
		this.instance_1.setTransform(565.95,95.65,1.4506,1.4506,180,0,0,181.6,212.6);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({x:619.95,startPosition:5},0).wait(1).to({x:585.95,startPosition:6},0).wait(105));
	
		this._renderFirstFrame();
	
	}).prototype = p = new lib.AnMovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,872.5,486.3);
	// library properties:
	lib.properties = {
		id: '1E0D29FC2E03144392376EBE556E0D80',
		width: 850,
		height: 500,
		fps: 24,
		color: "#666666",
		opacity: 1.00,
		manifest: [],
		preloads: []
	};
	

	// bootstrap callback support:	
	(lib.Stage = function(canvas) {
		createjs.Stage.call(this, canvas);
	}).prototype = p = new createjs.Stage();
	
	p.setAutoPlay = function(autoPlay) {
		this.tickEnabled = autoPlay;
	}
	p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
	p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
	p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
	p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }
	
	p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }
	
	an.bootcompsLoaded = an.bootcompsLoaded || [];
	if(!an.bootstrapListeners) {
		an.bootstrapListeners=[];
	}
	
	an.bootstrapCallback=function(fnCallback) {
		an.bootstrapListeners.push(fnCallback);
		if(an.bootcompsLoaded.length > 0) {
			for(var i=0; i<an.bootcompsLoaded.length; ++i) {
				fnCallback(an.bootcompsLoaded[i]);
			}
		}
	};
	
	an.compositions = an.compositions || {};
	an.compositions['1E0D29FC2E03144392376EBE556E0D80'] = {
		getStage: function() { return exportRoot.stage; },
		getLibrary: function() { return lib; },
		getSpriteSheet: function() { return ss; },
		getImages: function() { return img; }
	};
	
	an.compositionLoaded = function(id) {
		an.bootcompsLoaded.push(id);
		for(var j=0; j<an.bootstrapListeners.length; j++) {
			an.bootstrapListeners[j](id);
		}
	}
	
	an.getComposition = function(id) {
		return an.compositions[id];
	}
	
	an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
		var lastW, lastH, lastS=1;		
		window.addEventListener('resize', resizeCanvas);		
		resizeCanvas();		
		function resizeCanvas() {			
			var w = lib.properties.width, h = lib.properties.height;			
			var iw = window.innerWidth, ih=window.innerHeight;			
			var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
			if(isResp) {                
				if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
					sRatio = lastS;                
				}				
				else if(!isScale) {					
					if(iw<w || ih<h)						
						sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==1) {					
					sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==2) {					
					sRatio = Math.max(xRatio, yRatio);				
				}			
			}
			domContainers[0].width = w * pRatio * sRatio;			
			domContainers[0].height = h * pRatio * sRatio;
			domContainers.forEach(function(container) {				
				container.style.width = w * sRatio + 'px';				
				container.style.height = h * sRatio + 'px';			
			});
			stage.scaleX = pRatio*sRatio;			
			stage.scaleY = pRatio*sRatio;
			lastW = iw; lastH = ih; lastS = sRatio;            
			stage.tickOnUpdate = false;            
			stage.update();            
			stage.tickOnUpdate = true;		
		}
	}
	an.handleSoundStreamOnTick = function(event) {
		if(!event.paused){
			var stageChild = stage.getChildAt(0);
			if(!stageChild.paused || stageChild.ignorePause){
				stageChild.syncStreamSounds();
			}
		}
	}
	an.handleFilterCache = function(event) {
		if(!event.paused){
			var target = event.target;
			if(target){
				if(target.filterCacheList){
					for(var index = 0; index < target.filterCacheList.length ; index++){
						var cacheInst = target.filterCacheList[index];
						if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
							cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
						}
					}
				}
			}
		}
	}
	
	})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
	var createjs, AdobeAn;