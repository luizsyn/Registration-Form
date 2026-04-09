window.onload = function(){

    document.getElementById('daftar').onclick = function(){
        var nama = document.getElementById('nama').value.trim();
        if(nama === ""){
            nama = "(Nama Harus Diisi)";
        }
        var kelas = document.getElementById('kelas').value.trim();
        if(kelas === ""){
            kelas = "(Kelas Harus Diisi)";
        }
        var ekskul = "";
        var cekbox = document.getElementsByName('ekskul');
        var jumlah = 0;
        for(var i = 0; i < cekbox.length; i++){
            if(cekbox[i].checked){
                ekskul += cekbox[i].value + ", ";
                jumlah++;
            }
        }
        if(jumlah !== 3){
            ekskul = "(Harus Pilih Tepat 3 Ekstrakurikuler)";
        } else {
            ekskul = ekskul.slice(0, -2);
        }
        var jadwal = "";
        var radios = document.getElementsByName('jadwal');
        for(var i = 0; i < radios.length; i++){
            if(radios[i].checked){
                jadwal = radios[i].value;
                break;
            }
        }
        if(jadwal === ""){
            jadwal = "(Jadwal Belum Dipilih)";
        }

        alert("Berhasil Mendaftar!");

        var show = "Nama   : " + nama + "\nKelas  : " + kelas + "\nEkskul : " + ekskul + "\nJadwal : " + jadwal;
        document.getElementById('hasil').innerText = show;

        document.getElementById('nama').value = "";
        document.getElementById('kelas').value = "";
        for(var i = 0; i < cekbox.length; i++){
            cekbox[i].checked = false;
        }
        for(var i = 0; i < radios.length; i++){
            radios[i].checked = false;
        }
    }

    document.getElementById('reset').onclick = function(){
        document.getElementById('nama').value = "";
        document.getElementById('kelas').value = "";
        var cekbox = document.getElementsByName('ekskul');
        for(var i = 0; i < cekbox.length; i++){
            cekbox[i].checked = false;
        }
        var radios = document.getElementsByName('jadwal');
        for(var i = 0; i < radios.length; i++){
            radios[i].checked = false;
        }
        document.getElementById('hasil').innerText = "Form telah direset, silahkan isi ulang form";
    }

}