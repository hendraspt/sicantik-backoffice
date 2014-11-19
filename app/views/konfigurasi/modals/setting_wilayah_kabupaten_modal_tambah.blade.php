<div class="modal" ng-show={{ $modal_name }}> 

     <form  target="target_insert" method="post" action="{{ URL::to('konfigurasi/setting_wilayah/kabupaten/insert') }}">


    <div class="modal-container large">
        <div class="modal-header update">
            <h2>Tambah Kabupaten</h2><a class="button-close" href ng-click="close_modal('modal_tambah')">x</a>
        </div>

       
        <div class="modal-body">
            
            <div class="body-tab-wrapper">
                <div class="tab-nav">
                    <ul class="tab-nav-wrapper">
                       <li class="tab-nav-item" id="tab_nav_tambah_kabupaten" ng-click="show_tab('tab.data_awal_tab_persyaratan', 'tab_nav_tambah_kabupaten')">Data Kabupaten</li>
                    <ul>
                </div>
                <div class="tab-content-wrapper">

                    <div class="tab-content"> 

                        <div class="tab-content-left">

                            <div class="tab-content-form">
                                <div class="content-form-label">Provinsi</div>
                                <div class="content-form-input">
                                     <select name="trpropinsi_id" ng-model="propinsi_id" ng-options="prop.n_propinsi for prop in propinsi_data track by prop.id">
                                        <option value="">Pilih Propinsi</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tab-content-form">
                                <div class="content-form-label">Nama Kabupaten</div>
                                <div class="content-form-input"><input type="text" name="n_kabupaten" /></div>
                            </div>
                            <div class="tab-content-form">
                                <div class="content-form-label">Nama Ibu Kota</div>
                                <div class="content-form-input"><input type="text" name="ibukota" /></div>
                            </div>
                            
                        </div>

                        <div class="tab-content-right">
                           
                        </div>

                    </div>

                </div>
            </div>

        </div>
        <div class="modal-footer">
            <div class="modal-footer-left">
                &nbsp;
            </div>
            <div class="modal-footer-right">
                <input type="submit" value="Simpan" class="btn button-green" ng-click="close_modal('modal_tambah')"></button>
                <a class="btn button-red" ng-click="close_modal('modal_tambah')">Batal</a>
            </div>
        </div>

    </form>

    <iframe src="#" id="target_insert" name="target_insert" style="width:0; height:0; visibility:hidden; position:relative; background:#fff;"></iframe>

    </div>
</div>
