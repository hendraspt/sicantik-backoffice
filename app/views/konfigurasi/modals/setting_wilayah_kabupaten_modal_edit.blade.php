<div class="modal" ng-show={{ $modal_name }}> 

    <form target="target_edit" method="post" action="{{ URL::to('konfigurasi/setting_wilayah/kabupaten/edit') }}">

    <div class="modal-container small">
        <div class="modal-header update">
            <h2>Edit Kabupaten</h2><a class="button-close" href ng-click="close_modal('modal_edit')">x</a>
        </div>
        <div class="modal-body">
            
            <div class="body-tab-wrapper">
                <div class="tab-nav">
                    <ul class="tab-nav-wrapper">
                       <li class="tab-nav-item" id="tab_nav_edit_kabupaten" ng-click="show_tab('tab.data_awal_tab_persyaratan', 'tab_nav_edit_kabupaten')">Data Kabupaten</li>
                    <ul>
                </div>
                <div class="tab-content-wrapper">

                    <div class="tab-content"> 

                        <div class="tab-content-left">

                            <div class="tab-content-form">
                                <div class="content-form-label">Propinsi</div>
                                <div class="content-form-input">
                                    <select name="propinsi">
                                        <option ng-repeat="oprop in opsi_prop"  ng-if="oprop.selected == true" selected value="@{{ oprop.id }}" >@{{ oprop.n_propinsi }}</option>
                                        <option ng-repeat="oprop in opsi_prop"  ng-if="oprop.selected == false" value="@{{ oprop.id }}" >@{{ oprop.n_propinsi }}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tab-content-form">
                                <div class="content-form-label">Nama Kabupaten</div>
                                <input type="hidden" name="id" value="@{{ kabupaten_edit_data.id }}"/>
                                <div class="content-form-input">
                                     <input type="text" name="n_kabupaten" value="@{{ kabupaten_edit_data.n_kabupaten }}"/>
                                </div>
                            </div>
                            <div class="tab-content-form">
                                <div class="content-form-label">Nama Ibu Kota</div>
                                <div class="content-form-input">
                                    <input type="text" name="ibukota" value="@{{ kabupaten_edit_data.ibukota }}"/>
                                </div>
                            </div>
                            
                        </div>

                        <div class="tab-content-right">
                           
                        </div>

                    </div>

                </div>
            </div>

        </form>

        </div>
        <div class="modal-footer">
            <div class="modal-footer-left">
                &nbsp;
            </div>
            <div class="modal-footer-right">
                <input type="submit" value="Simpan" class="button-red" ng-click="modal_edit_submit('modal_edit')"></button>
                <a class="btn button-red" ng-click="close_modal('modal_edit')" >Batal</a>
            </div>
        </div>

        <iframe src="#" id="target_edit" name="target_edit" style="width:0; height:0; visibility:hidden; position:relative; background:#fff;"></iframe>

    </div>
</div>
