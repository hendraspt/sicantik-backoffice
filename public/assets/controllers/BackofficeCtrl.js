var fetch_limit = 5;

$app = angular.module('sicantik_backoffice', [])

.controller('BackofficePendataanEntryDataPerizinanCtrl', ['$http', '$scope',
	function($http, $scope) {



		/* # Prepare Data ============================================================================================= */

		$scope.backoffice_pendataan_entry_data_perizinan_data = "";

		$scope.show_all = function() {
			$http.get('entry_data_perizinan/data').success(function(bpedp_data) {
				$scope.backoffice_pendataan_entry_data_perizinan_data = bpedp_data;
			});
		}

		$scope.show_all();

		/* # Filter Data ============================================================================================== */

		$scope.opsi_cari = '$';
		$scope.search = {};
		$scope.displayed = fetch_limit;

		$scope.loadMore = function() {
			$scope.displayed += fetch_limit;
			$scope.backoffice_pendataan_entry_data_perizinan_data.length - 5;
		}

		$scope.backoffice_pendataan_entry_data_perizinan_data;

		 $scope.items = [
		   {source: 'KTP', Title: 'KTP'},
		   {source: 'SIM', Title: 'SIM'},
		   {source: 'PASSPORT', Title: 'PASSPORT'},
		];


		/* # Modal ==================================================================================================== */

		/* Define Modal Name */

		$scope.modal_edit = false;
		$scope.modal_data_awal = false;

		/* Define Open & Close Handler */

		$scope.open_modal = function(modal_name, id) {

			eval("$scope." + modal_name + "= true");
			eval("$scope." + modal_name + "_data(" + id + ")");
		}

		$scope.close_modal = function(modal_name) {
			eval("$scope." + modal_name + "= false");
		}

		/*  Construct Modal Function */

		$scope.modal_data_awal_data = function(id) {
			$http.get('entry_data_perizinan/data_awal/data/' + id).success(function(edpdad) {
				$scope.entry_data_perizinan_data_awal_data = edpdad;
			});


		}

		$scope.modal_edit_data = function(id) {
			$http.get('entry_data_perizinan/edit/data/' + id).success(function(edped) {
				$scope.entry_data_perizinan_edit_data = edped;
			});
		}


		/* Define Tab Name */

		$scope.tab = [];

		$scope.tab.data_awal_tab_data_pemohon = true;
		$scope.tab.data_awal_tab_data_perusahaan = false;
		$scope.tab.data_awal_tab_persyaratan = false;

		$scope.tab.edit_tab_data_entry = true;

		$scope.show_tab = function(tab_name, button_id) {

			$scope.tab.data_awal_tab_data_pemohon = false;
			$scope.tab.data_awal_tab_data_perusahaan = false;
			$scope.tab.data_awal_tab_persyaratan = false;

			eval('$scope.' + tab_name + "= true");

			$('.tab-nav-item').removeClass('enable');
			$('#' + button_id).addClass('enable');

		}

		/* # Submit =================================================================================================== */

		$scope.filter_date = function() {
			$http.get('entry_data_perizinan/data/' + $scope.date.start + '/' + $scope.date.finish).success(function(bpedp_data) {
				$scope.backoffice_pendataan_entry_data_perizinan_data = bpedp_data;
			});
		}

		$scope.modal_data_awal_submit = function() {
			$http({
				method: "POST",
				url: 'submit_data',
				data: $scope.prototype_post,
			}).success(function(data){

			});

		}

		$scope.modal_edit_submit = function() {

		}

	}
])

.controller('BackofficePendataanPenjadwalanTinjauanCtrl', ['$http', '$scope',

	function ($http, $scope) {

		/* # Prepare Data ============================================================================================= */

		$scope.show_all = function() {
			$http.get('penjadwalan_tinjauan/data').success(function(bppt_data) {
				$scope.backoffice_pendataan_penjadwalan_tinjauan_data = bppt_data;
			});
		}

		$scope.show_all();

		/* # Filter Data ============================================================================================== */

		$scope.opsi_cari = '$';
		$scope.search = {};
		$scope.displayed = fetch_limit;

		$scope.loadMore = function() {
			$scope.displayed += fetch_limit;
		}

		$scope.backoffice_pendataan_penjadwalan_tinjauan_data;

		/* # Modal ==================================================================================================== */

		/* Define Modal Name */

		$scope.modal_edit = false;

		/* Construct Modal Function */

		$scope.modal_edit_data = function(id) {
			$http.get('penjadwalan_tinjauan/edit/data/' + id).success(function(pted) {
				$scope.peninjauan_tinjauan_edit_data = pted;
			});
		}

		/* Define Open & Close Handler */

		$scope.open_modal = function(modal_name, id) {

			eval("$scope." + modal_name + "= true");
			eval("$scope." + modal_name + "_data(" + id + ")");
		}

		$scope.close_modal = function(modal_name) {
			eval("$scope." + modal_name + "= false");
		}

		/* Define Tab Name */

		$scope.tab = [];

		$scope.tab.entry_tinjauan_lapangan = true;
		$scope.tab.entry_tinjauan_lapangan_1 = false;

		$scope.show_tab = function(tab_name, button_id) {

			$scope.tab.entry_tinjauan_lapangan = false;
			$scope.tab.entry_tinjauan_lapangan_1 = false;

			eval('$scope.' + tab_name + "= true");

			$('.tab-nav-item').removeClass('enable');
			$('#' + button_id).addClass('enable');

		}


		/* # Submit =================================================================================================== */

		$scope.filter_date = function() {
			$http.get('penjadwalan_tinjauan/data/' + $scope.date.start + '/' + $scope.date.finish).success(function(bppt_data) {
				$scope.backoffice_pendataan_penjadwalan_tinjauan_data = bppt_data;
			});
		}

	}

])

.controller('BackofficeTimTeknisEntryHasilTinjauanCtrl', ['$http', '$scope',
	function ($http, $scope) {

		/* # Prepare Data ============================================================================================= */

		$scope.show_all = function() {
			$http.get('entry_hasil_tinjauan/data').success(function(btteht_data) {
				$scope.backoffice_tim_teknis_entry_hasil_tinjauan_data = btteht_data;
			});
		}

		$scope.show_all();

		/* # Filter Data ============================================================================================== */

		$scope.opsi_cari = '$';
		$scope.search = {};
		$scope.displayed = fetch_limit;

		$scope.loadMore = function() {
			$scope.displayed += fetch_limit;
		}


		/* # Modal ==================================================================================================== */

		/* Define Modal Name */

		$scope.modal_edit = false;

		/* Construct Modal Function */

		$scope.modal_edit_data = function(id) {
			$http.get('entry_hasil_tinjauan/edit/data/' + id).success(function(ehted) {
				$scope.entry_hasil_tinjauan_edit_data = ehted;
			});
		}

		/* Define Open & Close Handler */

		$scope.open_modal = function(modal_name, id) {

			eval("$scope." + modal_name + "= true");
			eval("$scope." + modal_name + "_data(" + id + ")");
		}

		$scope.close_modal = function(modal_name) {
			eval("$scope." + modal_name + "= false");
		}

		/* Define Tab Name */

		$scope.tab = [];

		$scope.tab.entry_tinjauan_lapangan = true;
		$scope.tab.entry_tinjauan_lapangan_1 = false;

		$scope.show_tab = function(tab_name, button_id) {

			$scope.tab.entry_tinjauan_lapangan = false;
			$scope.tab.entry_tinjauan_lapangan_1 = false;

			eval('$scope.' + tab_name + "= true");

			$('.tab-nav-item').removeClass('enable');
			$('#' + button_id).addClass('enable');

		}

		/* # Submit =================================================================================================== */

		$scope.filter_date = function() {
			$http.get('entry_hasil_tinjauan/data/' + $scope.date.start + '/' + $scope.date.finish).success(function(btteht_data) {
				$scope.backoffice_tim_teknis_entry_hasil_tinjauan_data = btteht_data;
			});
		}


	}
])

.controller('BackofficeTimTeknisPembuatanBeritaAcaraPemeriksaanCtrl', ['$http', '$scope',

	function ($http, $scope) {

		/* # Prepare Data ============================================================================================= */

		$scope.show_all = function() {
			$http.get('pembuatan_berita_acara_pemeriksaan/data').success(function(bttpbap_data) {
				$scope.backoffice_tim_teknis_pembuatan_berita_acara_pemeriksaan = bttpbap_data;
			});
		}

		$scope.show_all();

		/* # Filter Data ============================================================================================== */

		$scope.opsi_cari = '$';
		$scope.search = {};
		$scope.displayed = fetch_limit;

		$scope.loadMore = function() {
			$scope.displayed += fetch_limit;
		}

		/* # Modal ==================================================================================================== */

		/* Define Modal Name */

		$scope.modal_edit = false;

		/* Construct Modal Function */

		$scope.modal_edit_data = function(id) {
			$http.get('pembuatan_berita_acara_pemeriksaan/edit/data/' + id).success(function(pbap) {
				$scope.pembuatan_berita_acara_pemeriksaan_edit_data = pbap;
			});
		}

		/* Define Open & Close Handler */

		$scope.open_modal = function(modal_name, id) {

			eval("$scope." + modal_name + "= true");
			eval("$scope." + modal_name + "_data(" + id + ")");
		}

		$scope.close_modal = function(modal_name) {
			eval("$scope." + modal_name + "= false");
		}

		/* Define Tab Name */

		$scope.tab = [];

		$scope.tab.property = true;


		/* # Submit =================================================================================================== */

		$scope.filter_date = function() {

			$http.get('pembuatan_berita_acara_pemeriksaan/data/' + $scope.date.start + '/' + $scope.date.finish).success(function(bttpbap_data) {
				$scope.backoffice_tim_teknis_pembuatan_berita_acara_pemeriksaan = bttpbap_data;
			});
		}


	}
])

.controller('BackofficeTimTeknisHitungRetribusiCtrl', ['$http', '$scope',

	function($http,$scope) {

		/* # Prepare Data ============================================================================================= */

		$scope.show_all = function() {
			$http.get('hitung_retribusi/data').success(function(btthr_data) {
				$scope.backoffice_tim_teknis_hitung_retribusi_data = btthr_data;
			});


		}

		$scope.show_all();

		/* # Filter Data ============================================================================================== */

		$scope.opsi_cari = '$';
		$scope.search = {};
		$scope.displayed = fetch_limit;

		$scope.loadMore = function() {
			$scope.displayed += fetch_limit;
		}


		/* # Modal ==================================================================================================== */



		/* # Submit =================================================================================================== */

		$scope.filter_date = function() {
			$http.get('hitung_retribusi/data/' + $scope.date.start + '/' + $scope.date.finish).success(function(btthr_data) {
				$scope.backoffice_tim_teknis_hitung_retribusi_data = btthr_data;
			});
		}


	}

])

.controller('BackofficeTimTeknisRekomendasiCtrl', ['$http', '$scope',
	function($http, $scope) {

		/* # Prepare Data ============================================================================================= */

		$scope.show_all = function() {
			$http.get('rekomendasi/data').success(function(bttr_data) {
				$scope.backoffice_tim_teknis_rekomendasi_data = bttr_data;
			});
		}

		$scope.show_all();

		/* # Filter Data ============================================================================================== */

		$scope.opsi_cari = '$';
		$scope.search = {};
		$scope.displayed = fetch_limit;

		$scope.loadMore = function() {
			$scope.displayed += fetch_limit;
		}

		$scope.backoffice_tim_teknis_rekomendasi_data;

		/* # Modal ==================================================================================================== */



		/* # Submit =================================================================================================== */

		$scope.filter_date = function() {
			$http.get('rekomendasi/data/' + $scope.date.start + '/' + $scope.date.finish).success(function(bttr_data) {
				$scope.backoffice_tim_teknis_rekomendasi_data = bttr_data;
			});
		}

	}
])

.controller('BackofficePenetapanPenetapanIzinCtrl', ['$http', '$scope',
	function($http, $scope) {

		/* # Prepare Data ============================================================================================= */

		$scope.show_all = function() {
			$http.get('penetapan_izin/data').success(function(bppi_data) {
				$scope.backoffice_penetapan_penetapan_izin = bppi_data;
			});
		}

		$scope.show_all();

		/* # Filter Data ============================================================================================== */

		$scope.opsi_cari = '$';
		$scope.search = {};
		$scope.displayed = fetch_limit;

		$scope.loadMore = function() {
			$scope.displayed += fetch_limit;
		}

		/* # Modal ==================================================================================================== */

		/* Define Modal Name */

		$scope.modal_edit = false;

		/* Construct Modal Function */

		$scope.modal_edit_data = function(id) {
			$http.get('penetapan_izin/edit/data/' + id).success(function(pied) {
				$scope.penetapan_izin_edit_data = pied;
			});
		}

		/* Define Open & Close Handler */

		$scope.open_modal = function(modal_name, id) {

			eval("$scope." + modal_name + "= true");
			eval("$scope." + modal_name + "_data(" + id + ")");
		}

		$scope.close_modal = function(modal_name) {
			eval("$scope." + modal_name + "= false");
		}

		/* Define Tab Name */

		$scope.tab = [];

		$scope.tab.property = true;


		/* # Submit =================================================================================================== */

		$scope.filter_date = function() {
			$http.get('penetapan_izin/data/' + $scope.date.start + '/' + $scope.date.finish).success(function(bppi_data) {
				$scope.backoffice_penetapan_penetapan_izin = bppi_data;
			});
		}


	}

])

.controller('BackofficePenetapanPembuatanSKRDCtrl', ['$http', '$scope',

	function ($http, $scope) {

		/* # Prepare Data ============================================================================================= */

		$scope.show_all = function() {
			$http.get('pembuatan_skrd/data').success(function(bppskrd_data) {
				$scope.backoffice_penetapan_pembuatan_skrd = bppskrd_data;
			});
		}

		$scope.show_all();

		/* # Filter Data ============================================================================================== */

		$scope.opsi_cari = '$';
		$scope.search = {};
		$scope.displayed = fetch_limit;

		$scope.loadMore = function() {
			$scope.displayed += fetch_limit;
		}

		/* # Modal ==================================================================================================== */

		/* Define Modal Name */

		$scope.modal_edit = false;

		/* Construct Modal Function */

		$scope.modal_edit_data = function(id) {
			$http.get('pembuatan_skrd/edit/data/' + id).success(function(psed) {
				$scope.pembuatan_skrd_edit_data = psed;
			});
		}

		/* Define Open & Close Handler */

		$scope.open_modal = function(modal_name, id) {

			eval("$scope." + modal_name + "= true");
			eval("$scope." + modal_name + "_data(" + id + ")");
		}

		$scope.close_modal = function(modal_name) {
			eval("$scope." + modal_name + "= false");
		}

		/* Define Tab Name */

		$scope.tab = [];

		$scope.tab.keringanan_retribusi = true;

		/* # Submit =================================================================================================== */

		$scope.filter_date = function() {
			$http.get('pembuatan_skrd/data/' + $scope.date.start + '/' + $scope.date.finish).success(function(bppskrd_data) {
				$scope.backoffice_penetapan_pembuatan_skrd = bppskrd_data;
			});
		}



	}

])

.controller('BackofficePenetepanPembuatanIzinCtrl', ['$http', '$scope',

	function($http, $scope) {

		/* # Prepare Data ============================================================================================= */

		$scope.show_all = function() {
			$http.get('pembuatan_izin/data').success(function(bppi_data) {
				$scope.backoffice_penetapan_pembuatan_izin = bppi_data;
			});
		}

		$scope.show_all();

		/* # Filter Data ============================================================================================== */

		$scope.opsi_cari = '$';
		$scope.search = {};
		$scope.displayed = fetch_limit;

		$scope.loadMore = function() {
			$scope.displayed += fetch_limit;
		}

		/* # Modal ==================================================================================================== */



		/* # Submit =================================================================================================== */

		$scope.filter_date = function() {
			$http.get('pembuatan_izin/data/' + $scope.date.start + '/' + $scope.date.finish).success(function(bppi_data) {
				$scope.backoffice_penetapan_pembuatan_izin = bppi_data;
			});
		}



	}

])

.controller('BackofficePenetapanLayananDitolakCtrl', ['$http', '$scope',

	function ($http, $scope) {

		/* # Prepare Data ============================================================================================= */

		$scope.show_all = function() {
			$http.get('layanan_ditolak/data').success(function(bpld_data) {
				$scope.backoffice_penetapan_layanan_ditolak = bpld_data;
			});
		}

		$scope.show_all();

		/* # Filter Data ============================================================================================== */

		$scope.opsi_cari = '$';
		$scope.search = {};
		$scope.displayed = fetch_limit;

		$scope.loadMore = function() {
			$scope.displayed += fetch_limit;
		}

		/* # Modal ==================================================================================================== */



		/* # Submit =================================================================================================== */

		$scope.filter_date = function() {
			$http.get('layanan_ditolak/data/' + $scope.date.start + '/' + $scope.date.finish).success(function(bpld_data) {
				$scope.backoffice_penetapan_layanan_ditolak = bpld_data;
			});
		}



	}

])


.controller('BackofficePenetapanPencabutanIzin', ['$http', '$scope',
	function ($http, $scope) {

		/* # Prepare Data ============================================================================================= */

		$scope.show_all = function() {
			$http.get('pencabutan_izin/data').success(function(bppi_data) {
				$scope.backoffice_penetapan_pencabutan_izin = bppi_data;
			});
		}

		$scope.show_all();

		/* # Filter Data ============================================================================================== */

		$scope.opsi_cari = '$';
		$scope.search = {};
		$scope.displayed = fetch_limit;

		$scope.loadMore = function() {
			$scope.displayed += fetch_limit;
		}

		/* # Modal ==================================================================================================== */



		/* # Submit =================================================================================================== */

		$scope.filter_date = function() {
			$http.get('pencabutan_izin/data/' + $scope.date.start + '/' + $scope.date.finish).success(function(bppi_data) {
				$scope.backoffice_penetapan_pencabutan_izin = bppi_data;
			});
		}



	}

])