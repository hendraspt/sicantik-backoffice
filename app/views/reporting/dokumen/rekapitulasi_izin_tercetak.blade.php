
<html>
<head>
	<title></title>
	<?php $index = 1; ?>

	{{ HTML::style('assets/css/document.css') }}
	<style>


	</style>


</head>
<body>

	<div class="print-page">

		<div class="header-surat">
			<table>
				<tr>
					<td class="header-logo">

						{{ HTML::image($logo, 'logo') }}

					</td>
					<td class="header-title">

						<div class="title-nama">
							<h3> {{ $title_nama }} </h3>
							<p> {{ $title_kabupaten}} </p>
						</div>
						<div class="title-alamat">
							<p class="alamat-jalan"> {{ $title_alamat . ' - ' . $title_kabupaten}} </p>
							<p  class="alamat-telp"> Telp. {{ $title_tlp }} Fax {{ $title_fax }} </p>
						</div>

					</td>
				<tr>
			</table>
		</div>

		<div class="isi-surat">

			<div class="surat-title">
				<h3>{{ $surat_title }}</h3>
			</div>

			<div class="surat-item">

				<table>

					<tr>
						<th class="c_no">No</th>
						<th class="c_no_daftar">Nomor Pendaftaran</th>
						<th class="c_tanggal_tinjau">Tanggal Peninjauan</th>
						<th class="c_tanggal_tetap">Tanggal Penetapan</th>
						<th class="c_nama_alamat">Nama & Alamat Pemohon</th>
						<th class="c_lokasi">Nama & Lokasi Izin Perusahaan</th>
						<th class="c_dicetak">Dicetak</th>
						<th class="c_jenis_izin">Jenis Izin</th>
					</tr>

				@foreach( $result as $r )

					
					<tr>
						<td class="c_no">{{ $index++ }}</td>
						<td class="c_no_daftar">{{ $r->pendaftaran_id }}</td>
						<td class="c_tanggal tinjau ">{{ $r->tanggal_peninjauan }}</td>
						<td class="c_tanggal_tetap">{{ $r->tanggal_penetapan}}</td>
						<td class="c_nama_alamat">
							{{$r->n_pemohon}} <br>
							{{$r->a_pemohon}}
						</td>
						<td class="c_lokasi">
							{{$r->n_perusahaan}} <br>
							{{$r->a_izin}}
						</td>
						<td class="c_dicetak">{{ $r->c_cetak }} kali</td>
						<td class="c_jenis_izin">{{ $r->n_perizinan}}</td>
					</tr>

				@endforeach()

				</table>

			</div>

		</div>

	</div>

</body>
</html>



