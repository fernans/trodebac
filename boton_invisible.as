package  {
	
	import flash.display.MovieClip;
	import flash.events.MouseEvent;
	import flash.net.URLRequest;
	import flash.net.navigateToURL;
	
	public class boton_invisible extends MovieClip {
		
		public function boton_invisible() {
			// constructor code
			addEventListener(MouseEvent.MOUSE_DOWN, pulsar);
		}
		
		public function pulsar(e:MouseEvent=null) {
			var url:String = "http://TRODEBACISBACK.TUMBLR.COM";			
			var request:URLRequest = new URLRequest(url);
			try {
				navigateToURL(request, '_blank');
			} catch (e:Error) {
				trace("Error occurred!");
			}
		}
	}
	
}
