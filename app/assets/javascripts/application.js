// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require jquery
//= require bootstrap-sprockets
//=require jquery_ujs
//= require turbolinks
//= require_tree .


$(function(){


	$( document ).ready(function() {
	   setTimeout(function(){
			 $('#notice').fadeOut(1000);

		 },5000);

	});



//モーダルウィンドウを出現させるクリックイベント
$("#modal-open").click( function(){

	//キーボード操作などにより、オーバーレイが多重起動するのを防止する
	//$( this ).blur() ;	//ボタンからフォーカスを外す
	//if( $( "#modal-overlay" )[0] ) return false ;		//新しくモーダルウィンドウを起動しない (防止策1)
	//if($("#modal-overlay")[0]) $("#modal-overlay").remove() ;		//現在のモーダルウィンドウを削除して新しく起動する (防止策2)


	//オーバーレイを出現させる
	$( "body" ).append( '<div id="modal-overlay"></div>' ) ;
	$( "#modal-overlay" ).fadeIn( "slow" ) ;

	//コンテンツをセンタリングする
	centeringModalSyncer() ;
	$("#content-title").prop("checked", true);
	$('#p01').fadeIn();
		//コンテンツをフェードインする
	$( "#modal-content" ).fadeIn( "slow" ) ;

	//[#modal-overlay]、または[#modal-close]をクリックしたら…
	$( "#modal-overlay,#modal-close" ).unbind().click( function(){

		//[#modal-content]と[#modal-overlay]をフェードアウトした後に…
		$( "#modal-content,#modal-overlay" ).fadeOut( "slow" , function(){

			//[#modal-overlay]を削除する
			$('#modal-overlay').remove() ;
			$('#content-title,#content-text').prop('checked', false);
			$('#p01').fadeOut("slow");
			$('#p02').fadeOut("slow");

		} ) ;

	} ) ;

} ) ;
  // チェックボックスをチェックしたら発動
  $('input[name="check"]').change(function() {

    // prop()でチェックの状態を取得
    var prop = $('#content-title').prop('checked');
    // val()でチェックの状態を取得
    var val = $('#content-text').prop('checked');

		if ($(this).prop('checked')){
		                    // 一旦全てをクリアして再チェックする
		  $('#content-title,#content-text').prop('checked', false);
		  $(this).prop('checked', true);
		}
		if (prop) {
			$('#p01').fadeIn(0);
			$('#p02').fadeOut(0);
		} else {
			// テキストをリセット
			$('#p01').fadeOut(0);
		}
		if (val) {
			$('#p02').fadeIn(0);
			$('#p01').fadeOut(0);
		} else {
			$('#p02').fadeOut(0);
		}
	});

$("#modal-action").click(function(){

		rightingModalSyncer();

	$('#modal-actionmenu').fadeToggle();

	});

	$("#modal-feedback").click( function(){

		//コンテンツをセンタリングする
			centeringModalSyncer3();

			//コンテンツをフェードインする
		$( "#modal-feedback-screen" ).fadeIn( "slow" ) ;

		//[#modal-overlay]、または[#modal-close]をクリックしたら…
		$( "#feedbackClose" ).unbind().click( function(){

			//[#modal-content]と[#modal-overlay]をフェードアウトした後に…
			$( "#modal-feedback-screen" ).fadeOut( "slow" ) ;

		} ) ;

	} ) ;

	$("#modal-setup").click( function(){

		$( "body" ).append( '<div id="modal-overlay"></div>' ) ;
		$( "#modal-overlay" ).fadeIn( "slow" ) ;
		//コンテンツをセンタリングする
			centeringModalSyncer4();

			//コンテンツをフェードインする
		$( "#modal-setup-screen" ).fadeIn( "slow" ) ;

		//[#modal-overlay]、または[#modal-close]をクリックしたら…
		$( "#modal-overlay" ).unbind().click( function(){

			//[#modal-content]と[#modal-overlay]をフェードアウトした後に…
			$( "#modal-setup-screen,#modal-overlay" ).fadeOut( "slow", function(){
				$('#modal-overlay').remove() ;
			} ) ;

		} ) ;

	} ) ;



	$("#modal-login").click( function(){

		$( "body" ).append( '<div id="modal-overlay"></div>' ) ;
		$( "#modal-overlay" ).fadeIn( "slow" ) ;
		//コンテンツをセンタリングする
			centeringModalSyncer6();

			//コンテンツをフェードインする
		$( "#modal-login-form" ).fadeIn( "slow" ) ;

		//[#modal-overlay]、または[#modal-close]をクリックしたら…
		$( "#modal-overlay" ).unbind().click( function(){

			//[#modal-content]と[#modal-overlay]をフェードアウトした後に…
			$( "#modal-login-form,#modal-overlay" ).fadeOut( "slow", function(){
				$('#modal-overlay').remove() ;
			} ) ;

		} ) ;

	} ) ;






	$(".modal-main-content").click( function(){

		//オーバーレイを出現させる
		$( "body" ).append( '<div id="modal-overlay"></div>' ) ;
		$( "#modal-overlay" ).fadeIn( "slow" ) ;

		//コンテンツをセンタリングする
		centeringModalSyncer2() ;
		//コンテンツをフェードインする
		$(this).next('.modal-main-content-detail').fadeIn( "slow" ) ;

		//[#modal-overlay]、または[#modal-close]をクリックしたら…
		$( "#modal-overlay").unbind().click( function(){

			//[#modal-content]と[#modal-overlay]をフェードアウトした後に…
			$( ".modal-main-content-detail,#modal-overlay" ).fadeOut( "slow" , function(){

				//[#modal-overlay]を削除する
				$('#modal-overlay').remove() ;



			} ) ;

		} ) ;

	} ) ;



// [.syncer-acdn]にクリックイベントを設定する
$( '.syncer-acdn' ).click( function(){
	// [data-target]の属性値を代入する
	var target = $( this ).data( 'target' ) ;

	// [target]と同じ名前のIDを持つ要素に[slideToggle()]を実行する
	$( '#' + target ).slideToggle() ;
} ) ;


$('.mail-list').click( function(){

	$(this).next('.mail-of-text').slideToggle();

	$('.mail-list').not($(this)).next('.mail-of-text').slideUp();

} ) ;













//リサイズされたら、センタリングをする関数[centeringModalSyncer()]を実行する
$( window ).resize( centeringModalSyncer ) ;

	//センタリングを実行する関数
	function centeringModalSyncer() {

		//画面(ウィンドウ)の幅、高さを取得
		var w = $( window ).width() ;
		var h = $( window ).height() ;

		// コンテンツ(#modal-content)の幅、高さを取得
		// jQueryのバージョンによっては、引数[{margin:true}]を指定した時、不具合を起こします。
//		var cw = $( "#modal-content" ).outerWidth( {margin:true} );
//		var ch = $( "#modal-content" ).outerHeight( {margin:true} );
		var cw = $( "#modal-content" ).outerWidth();
		var ch = $( "#modal-content" ).outerHeight();

		//センタリングを実行する
		$( "#modal-content" ).css( {"left": ((w - cw)/2) + "px","top": ((h - ch)/2) + "px"} ) ;

	}
	//リサイズされたら、センタリングをする関数[centeringModalSyncer()]を実行する
	$( window ).resize( rightingModalSyncer ) ;

		//センタリングを実行する関数
		function rightingModalSyncer() {

			$( "#modal-actionmenu" ).css( {"right": "0%"} ) ;

		}

		$( window ).resize( centeringModalSyncer2 ) ;

			//センタリングを実行する関数
			function centeringModalSyncer2() {

				//画面(ウィンドウ)の幅、高さを取得
				var w = $( window ).width() ;
				var h = $( window ).height() ;

				// コンテンツ(#modal-content)の幅、高さを取得
				// jQueryのバージョンによっては、引数[{margin:true}]を指定した時、不具合を起こします。
		//		var cw = $( "#modal-content" ).outerWidth( {margin:true} );
		//		var ch = $( "#modal-content" ).outerHeight( {margin:true} );
				var cw = $( ".modal-main-content-detail" ).outerWidth();
				var ch = $( ".modal-main-content-detail" ).outerHeight();

				//センタリングを実行する
				$( ".modal-main-content-detail" ).css( {"left": ((w - cw)/2) + "px","top": ((h - ch)/2) + "px"} ) ;

			}

			$( window ).resize( centeringModalSyncer3 ) ;

				//センタリングを実行する関数
				function centeringModalSyncer3() {

					//画面(ウィンドウ)の幅、高さを取得
					var w = $( window ).width() ;
					var h = $( window ).height() ;

					// コンテンツ(#modal-content)の幅、高さを取得
					// jQueryのバージョンによっては、引数[{margin:true}]を指定した時、不具合を起こします。
			//		var cw = $( "#modal-content" ).outerWidth( {margin:true} );
			//		var ch = $( "#modal-content" ).outerHeight( {margin:true} );
					var cw = $( "#modal-feedback-screen" ).outerWidth();
					var ch = $( "#modal-feedback-screen" ).outerHeight();

					//センタリングを実行する
					$( "#modal-feedback-screen" ).css( {"left": ((w - cw)/2) + "px","top": ((h - ch)/2) + "px"} ) ;

				}

				$( window ).resize( centeringModalSyncer4 ) ;

					//センタリングを実行する関数
					function centeringModalSyncer4() {

						//画面(ウィンドウ)の幅、高さを取得
						var w = $( window ).width() ;
						var h = $( window ).height() ;

						// コンテンツ(#modal-content)の幅、高さを取得
						// jQueryのバージョンによっては、引数[{margin:true}]を指定した時、不具合を起こします。
				//		var cw = $( "#modal-content" ).outerWidth( {margin:true} );
				//		var ch = $( "#modal-content" ).outerHeight( {margin:true} );
						var cw = $( "#modal-setup-screen" ).outerWidth();
						var ch = $( "#modal-setup-screen" ).outerHeight();

						//センタリングを実行する
						$( "#modal-setup-screen" ).css( {"left": ((w - cw)/2) + "px","top": ((h - ch)/2) + "px"} ) ;

					}



function truncate($text, $length, $ending = '…', $exact = true) {
		//全角か半角か判断する
		$len = strlen($text);
		$mblen = mb_strlen($text,mb_internal_encoding());
		if ($len !== $mblen) {
			//全角が含まれているときは指定された文字の半分を上限とする
			$length = floor($length / 2);
		}

		if (strlen($text) <= $length) {
			return $text;
		} else {

			mb_internal_encoding("UTF-8");
			if (mb_strlen($text) > $length) {
				$length -= mb_strlen($ending);
			if (!$exact) {
				$text = preg_replace('/¥s+?(¥S+)?$/', '', mb_substr($text, 0, $length+1));
			}
				return mb_substr($text, 0, $length).$ending;
			} else {
				return $text;
			}
		}
	}



					$( window ).resize( centeringModalSyncer6 ) ;

						//センタリングを実行する関数
						function centeringModalSyncer6() {

							//画面(ウィンドウ)の幅、高さを取得
							var w = $( window ).width() ;
							var h = $( window ).height() ;

							// コンテンツ(#modal-content)の幅、高さを取得
							// jQueryのバージョンによっては、引数[{margin:true}]を指定した時、不具合を起こします。
					//		var cw = $( "#modal-content" ).outerWidth( {margin:true} );
					//		var ch = $( "#modal-content" ).outerHeight( {margin:true} );
							var cw = $( "#modal-login-form" ).outerWidth();
							var ch = $( "#modal-login-form" ).outerHeight();

							//センタリングを実行する
							$( "#modal-login-form" ).css( {"left": ((w - cw)/2) + "px","top": ((h - ch)/2) + "px"} ) ;

						}




	} ) ;
