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


$("#modal-action").click(function(){

		rightingModalSyncer();

		if($('#modal-actionmenu').css('opacity')==0){

	  	$("#modal-actionmenu").animate({opacity: 1,
																			"z-index": 3},10);

		}else{

			$("#modal-actionmenu").animate({opacity: 0,
																			"z-index": 0},10);

		}

	});



	$(".modal-main-content").click( function(){

		//キーボード操作などにより、オーバーレイが多重起動するのを防止する
		$( this ).blur() ;	//ボタンからフォーカスを外す
		if( $( "#modal-overlay" )[0] ) return false ;		//新しくモーダルウィンドウを起動しない (防止策1)
		if($("#modal-overlay")[0]) $("#modal-overlay").remove() ;		//現在のモーダルウィンドウを削除して新しく起動する (防止策2)


		//オーバーレイを出現させる
		$( "body" ).append( '<div id="modal-overlay"></div>' ) ;
		$( "#modal-overlay" ).fadeIn( "slow" ) ;

		//コンテンツをセンタリングする
		centeringModalSyncer2() ;
		//コンテンツをフェードインする
		$( "#modal-main-content-detail" ).fadeIn( "slow" ) ;

		//[#modal-overlay]、または[#modal-close]をクリックしたら…
		$( "#modal-overlay").unbind().click( function(){

			//[#modal-content]と[#modal-overlay]をフェードアウトした後に…
			$( "#modal-main-content-detail,#modal-overlay" ).fadeOut( "slow" , function(){

				//[#modal-overlay]を削除する
				$('#modal-overlay').remove() ;



			} ) ;

		} ) ;

	} ) ;

$(function(){
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
											// propでチェックと出力
											$('#p01').fadeIn(0);
										} else {
											// テキストをリセット
											$('#p01').fadeOut(0);
										}
										if (val) {
											$('#p02').fadeIn(0);
										} else {
											$('#p02').fadeOut(0);
										}
		              });
});
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
				var cw = $( "#modal-main-content-detail" ).outerWidth();
				var ch = $( "#modal-main-content-detail" ).outerHeight();

				//センタリングを実行する
				$( "#modal-main-content-detail" ).css( {"left": ((w - cw)/2) + "px","top": ((h - ch)/2) + "px"} ) ;

			}

} ) ;
