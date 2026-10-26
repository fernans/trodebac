package  {
	
	import flash.display.MovieClip;
	import flash.events.Event;
	import flash.events.MouseEvent;
	
	import flash.desktop.NativeApplication;
	import flash.desktop.SystemIdleMode;
	
	import flash.sensors.Accelerometer;
	import flash.events.AccelerometerEvent;
	import flash.utils.getTimer;
	
	import flash.display.Stage;
	import flash.display.StageAlign;
	import flash.display.StageDisplayState;
	import flash.display.StageScaleMode;
	import flash.media.Sound;
	import flash.media.SoundChannel;
	
	public class trodebac extends MovieClip {
		
		private var accl:Accelerometer;
		private var lastShake:Number = 0;
		private static const _SHAKE_WAIT = 250;
		private var lastX:Number=0, lastY:Number=0, lastZ:Number=0;
		
		private var bandasonora:Sound;
		private var bandasonora2:Sound;
		private var bandasonoraChanel:SoundChannel=new SoundChannel();
		private var musicaOn:Boolean=false;
		private var musicaNormal:Boolean=true;
		private var musicaPos:Number=0;
		
		public function trodebac() {
			// constructor code
			addEventListener(Event.ADDED_TO_STAGE, init);
		}
		
		public function init(e:Event=null) {
			removeEventListener(Event.ADDED_TO_STAGE, init);
			
			stage.scaleMode = StageScaleMode.NO_BORDER;
			stage.align=""; //StageAlign.TOP;
			stage.displayState=StageDisplayState.FULL_SCREEN_INTERACTIVE;
			NativeApplication.nativeApplication.systemIdleMode = SystemIdleMode.KEEP_AWAKE;
			
			bandasonora=new elfallero();
			bandasonora2=new elfallero2();
			
			boom.addEventListener(MouseEvent.MOUSE_DOWN, pulsar);
			info.addEventListener(MouseEvent.MOUSE_DOWN, infoDown);
			about.addEventListener(MouseEvent.MOUSE_DOWN, aboutDown);
			music.addEventListener(MouseEvent.MOUSE_DOWN, musicDown);
			
			stage.addEventListener(Event.RESIZE, resized);
			
			//info.y=stage.stageHeight/2;
			//music.y=stage.stageHeight/2;
			
			NativeApplication.nativeApplication.addEventListener(Event.ACTIVATE, onNativeAppActivated);
			NativeApplication.nativeApplication.addEventListener(Event.DEACTIVATE, onNativeAppDeactiated);
		}
		
		public function resized(e:Event=null) {
			stage.removeEventListener(Event.RESIZE, resized);
			trace("resized");
			var bottom:Number=(stage.stageHeight+stage.fullScreenHeight)/2;
			var right:Number=(stage.stageWidth+stage.fullScreenWidth)/2;
			// reposicionar botones
			info.x=right-(info.width);
			music.x=music.width;
			info.y=bottom-(info.height);
			music.y=bottom-(music.height);
		}
		
		public function onNativeAppActivated(e:Event=null) {
			trace("Activated");
			if (Accelerometer.isSupported) {
				trace("have accelerometer");
				accl = new Accelerometer();
				lastX=lastY=lastZ=0;
				accl.addEventListener(AccelerometerEvent.UPDATE, onAccelerometer);
				accl.setRequestedUpdateInterval(50);
			}
		}
		
		public function onNativeAppDeactiated(e:Event=null) {
			trace("Deactivated");
			// parar acelerometro (no se tiran petardos con la app dormida)
			//*
			if (accl!=null) {
				accl.removeEventListener(AccelerometerEvent.UPDATE, onAccelerometer);
				accl=null;
			}
			//*/
			// parar musica (no suene musica si estas haciendo otras cosas --llamadas--)
			if (musicaOn) {
				musicaOn=false;
				music.gotoAndStop(1);
				bandasonoraChanel.stop();
			}
		}
		
		private function onAccelerometer(e:AccelerometerEvent):void {
			//trace("acc update: "+e.accelerationX+", "+e.accelerationY+", "+e.accelerationZ);
			var mX:Number=(e.accelerationX*lastX);
			if (mX<0) mX=Math.abs(e.accelerationX-lastX) else mX=0;
			lastX=e.accelerationX;
			var mY:Number=(e.accelerationY*lastY);
			if (mY<0) mY=Math.abs(e.accelerationY-lastY) else mY=0;
			lastY=e.accelerationY;
			var mZ:Number=(e.accelerationZ*lastZ);
			if (mZ<0) mZ=Math.abs(e.accelerationZ-lastZ) else mZ=0;
			lastZ=e.accelerationZ;
			// explicacion
			// si anterior + y ahora +, poco movimiento y resultado +
			// si anterior - y ahora -, poco movimiento y resultado +
			// quiero detectar un cambio de dirección (+- o -+)
			// si anterior + y ahora -, o anterior - y ahora +, cambio de direccion y resultado -
			// si anterior 0.01 y ahora -0.01, cambio de eje, pero lento, resultado -0.001
			// si anterior 0.5 y ahora -0.5, cambio de eje, medio, resultado -0.25
			// si anterior 0.9 y ahora -0.5, cambio de eje, mas brusco, resultado -0.45
			if ((getTimer()-lastShake)>_SHAKE_WAIT && (mX>1 || mY>1 || mZ>1) ) {// && (e.accelerationX>=2 || e.accelerationY>=2 || e.accelerationZ>=2)) {
				doBoom();
				lastShake = getTimer(); // Reset the timer so that this code block doesn’t happen again until _SHAKE_WAIT milliseconds later.
			}
		}
		
		public function pulsar(e:Event=null) {
			doBoom();
		}
		
		public function doBoom() {
			lanzarSonido();
			boom.gotoAndPlay(27);
			trace("boom");
		}
		
		public function infoDown(e:Event=null) {
			var s:Sound=new clinc();
			s.play(0,1);
			about.visible=true;
			// lanzar musica "8-bit"
			var pos:Number=0;
			if (musicaOn) {
				musicaPos=bandasonoraChanel.position;
				bandasonoraChanel.stop();
				bandasonoraChanel.removeEventListener(Event.SOUND_COMPLETE,repeat);
				bandasonoraChanel=(bandasonora2 as Sound).play(musicaPos);
				musicaNormal=false;
				bandasonoraChanel.addEventListener(Event.SOUND_COMPLETE,repeat);
			}
			
		}
		
		public function aboutDown(e:Event=null) {
			about.visible=false;
			// parar la musica "8-bit"
			// (y volver a la original, si estaba on)
			if (musicaOn) {
				musicaPos=bandasonoraChanel.position;
				bandasonoraChanel.stop();
				bandasonoraChanel.removeEventListener(Event.SOUND_COMPLETE,repeat);
				bandasonoraChanel=(bandasonora as Sound).play(musicaPos);
				musicaNormal=true;
				bandasonoraChanel.addEventListener(Event.SOUND_COMPLETE,repeat);
			}
		}
		
		public function musicDown(e:Event=null) {
			musicaNormal=true;
			if (musicaOn) {
				musicaPos=bandasonoraChanel.position;
				bandasonoraChanel.stop();
				bandasonoraChanel.removeEventListener(Event.SOUND_COMPLETE,repeat);
				musicaOn=false;
				music.gotoAndStop(1);
			} else {
				bandasonoraChanel=bandasonora.play(musicaPos);
				bandasonoraChanel.addEventListener(Event.SOUND_COMPLETE,repeat);
				musicaOn=true;
				music.gotoAndStop(2);
			}
		}
		
		public function repeat(e:Event=null) {
			if (musicaOn) {
				bandasonoraChanel.removeEventListener(Event.SOUND_COMPLETE,repeat);
				if (musicaNormal) {
					bandasonoraChanel=bandasonora.play();
				} else {
					bandasonoraChanel=bandasonora2.play();
				}
				bandasonoraChanel.addEventListener(Event.SOUND_COMPLETE,repeat);
			}
		}
		
		public function lanzarSonido() {
			var s:Sound;
			var r:int=Math.floor(Math.random()*6);
			switch (r) {
				case 0:
					s=new boom1();
				break;
				case 1:
					s=new boom2();
				break;
				case 2:
					s=new boom3();
				break;
				case 3:
					s=new boom4();
				break;
				case 4:
					s=new boom5();
				break;
				case 5:
					s=new boom6();
				break;
				default:
				break;
			}
			s.play(0,1);
		}
		
	}
	
}
