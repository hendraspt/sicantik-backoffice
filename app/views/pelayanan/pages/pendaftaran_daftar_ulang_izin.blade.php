@extends('layouts.table_content')

@section('table_style')
	<style type="text/css">
		.c_no {
			width: 3%;
			text-align: center;
		}
		
		.c_pendaftaran_id {
			width: 15%;
		}

		.c_n_pemohon {
			width: 20%;
			text-align: center;
		}

		.c_n_perizinan {
			width: 15%;
			text-align: center;
		}

		.c_status {
			width: 10%;
			text-align: center;
		}

		.c_a_pemohon {
			width: 22%;
			text-align: center;
		}

		.c_aksi {
			width: 10%;
			text-align: center;
		}

		.c_verifikasi {
			width: 5%;
			text-align: center;
		}
	</style>

@stop

@section('page_name')
	Pelayanan / Pendaftaran / Permohonan Daftar Ulang Izin
@stop

@section('angular_controller_script')
	{{ HTML::script('assets/controllers/PelayananCtrl.js') }}
@stop

@section('angular_controller')
	ng-controller="PelayananPendaftaranDaftarUlangIzinCtrl"
@stop

@section('table_nav')
	
	<table>
		<tr>
			<th class="c_no">No</th>
			<th class="c_pendaftaran_id">No Pendaftaran</th>
			<th class="c_n_perizinan">Jenis Izin</th>
			<th class="c_n_pemohon">Pemohon</th>
			<th class="c_a_pemohon">Alamat</th>
			<th class="c_status">Status</th>
			<th class="c_aksi">Aksi</th>
			<th class="c_verifikasi">Verifikasi</th>
		</tr>
	</table>

@stop

@section('table_content')

	<table role="table-fluid">
		<tr ng-repeat="ppdui in pelayanan_pendaftaran_daftar_ulang_izin_data">
			<td class="c_no">@{{ $index+1 }}</td>
			<td class="c_pendaftaran_id">@{{ ppdui.pendaftaran_id }}</td>
			<td class="c_n_perizinan">@{{ ppdui.n_perizinan }}</td>
			<td class="c_n_pemohon">@{{ ppdui.n_pemohon }}</td>
			<td class="c_a_pemohon">@{{ ppdui.a_pemohon }}</td>
			<td class="c_status">aaaaaa</td>
			<td class="c_aksi">@{{ ppdui.id }}</td>
			<td class="c_verifikasi">@{{  }}</td>
			
		</tr>
	</table>

@stop