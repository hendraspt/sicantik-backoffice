<style>

.c_nama_property {
    border-right:solid gray 1px;

}

.c_data_berkas_permohonan {
    text-align:center;
}

.c_data_berkas_tinjauan {
    text-align:center;
}

</style>

<div class="modal" ng-show={{ $modal_name }}>

    <div class="modal-container large">
        <div class="modal-header update">
            <h2>Edit Penetapan Izin</h2><a class="button-close" href ng-click="close_modal('modal_edit')">x</a>
        </div>
        <div class="modal-body">
            <div class="body-summary">

                <div class="summary-title">
                    <h3>Data Permohonan</h3>
                </div>
                <div class="body-summary-left">
                    <div class="summary-item">
                        <div class="summary-item-label">
                            No Pendaftaran
                        </div>
                        <div class="summary-item-value">
                             @{{ pembuatan_berita_acara_pemeriksaan_edit_data.pendaftaran_id }}
                        </div>
                    </div>
                    <div class="summary-item">
                        <div class="summary-item-label">
                            Jenis Layanan
                        </div>
                        <div class="summary-item-value">
                            @{{ pembuatan_berita_acara_pemeriksaan_edit_data.n_perizinan }}
                        </div>
                    </div>
                    <div class="summary-item">
                        <div class="summary-item-label">
                            Nama Pemohon
                        </div>
                        <div class="summary-item-value">
                            @{{ pembuatan_berita_acara_pemeriksaan_edit_data.n_pemohon }}
                        </div>
                    </div>
                    <div class="summary-item">
                        <div class="summary-item-label">
                            Alamat Pemohon
                        </div>
                        <div class="summary-item-value">
                            @{{ pembuatan_berita_acara_pemeriksaan_edit_data.a_pemohon }}, @{{ pembuatan_berita_acara_pemeriksaan_edit_data.n_kelurahan }},  @{{ pembuatan_berita_acara_pemeriksaan_edit_data.n_kecamatan }},  @{{ pembuatan_berita_acara_pemeriksaan_edit_data.n_kabupaten }},  @{{ pembuatan_berita_acara_pemeriksaan_edit_data.n_propinsi }}
                        </div>
                    </div>
                </div>
                <div class="body-summary-right">
                    <div class="summary-item">
                        <div class="summary-item-label">
                            Nama Perusahaan
                        </div>
                        <div class="summary-item-value">
                            @{{ pembuatan_berita_acara_pemeriksaan_edit_data.n_perusahaan }}
                        </div>
                    </div>
                    <div class="summary-item">
                        <div class="summary-item-label">
                            Tanggal Peninjauan
                        </div>
                        <div class="summary-item-value">
                            @{{ pembuatan_berita_acara_pemeriksaan_edit_data.d_survey }}
                        </div>
                    </div>
                    <div class="summary-item">
                        <div class="summary-item-label">
                            No BAP
                        </div>
                        <div class="summary-item-value">
                            @{{ pembuatan_berita_acara_pemeriksaan_edit_data.bap_id }}
                        </div>
                    </div>

                </div>

            </div>
            <div class="body-tab-wrapper">

                <div class="tab-nav">
                    <ul class="tab-nav-wrapper">
                        <li class="tab-nav-item enable" id="tab_nav_property" ng-click="show_tab('tab.property', 'tab_nav_property')">Table Property</li>
                    <ul>
                </div>

                <div class="tab-content-wrapper">
                    <div class="tab-content" ng-show="tab.property">
                        <div class="tab-content-table">
                            <table>
                                <tr>
                                    <th class="c_nama_property">Nama Property</th>
                                    <th class="c_data_berkas_permohonan">Data Berkas Permohonan</th>
                                    <th class="c_data_berkas_tinjauan">Data Berkas Tinjauan</th>
                                </tr>
                                <tr  ng-repeat="pbaped in pembuatan_berita_acara_pemeriksaan_edit_data.property">
                                    <td class="c_nama_property" ng-if="pbaped.berkas != 0">@{{ pbaped.key }}</td>
                                    <td class="c_data_berkas_permohonan" ng-if="pbaped.berkas != 0">@{{ pbaped.berkas }}</td>
                                    <td class="c_data_berkas_tinjauan" ng-if="pbaped.berkas != 0">@{{ pbaped.tinjauan }}</td>
                                </tr>
                            </table>
                        </div>

                        <div class="tab-content-left">
                            <div class="tab-content-form">
                                <div class="content-form-label">Catatan</div>
                                <div class="content-form-input"><textarea rows="5">@{{ pembuatan_berita_acara_pemeriksaan_edit_data.c_pesan }} </textarea></div>
                            </div>
                        </div>

                        <div class="tab-content-right">

                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="modal-footer">
            as
        </div>

        <!-- Iframe for post -->
        <iframe src="#" id="target_post" name="target_frame" style="width:0; height:0; position:relative; background:#fff;"></iframe>

    </div>
</div>
