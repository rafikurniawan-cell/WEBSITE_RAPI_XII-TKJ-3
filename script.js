document.getElementById("formBiodata").addEventListener("submit", function(event){
    event.preventDefault();

    let nama = document.getElementById("nama").value;
    let tempat = document.getElementById("tempat").value;
    let tanggal = document.getElementById("tanggal").value;
    let asal = document.getElementById("asal").value;
    let alamat = document.getElementById("alamat").value;
    let jk = document.getElementById("jk").value;

    if(nama=="" ||  tempat=="" ||  tanggal==""  ||  asal==""  || alamat==""  || jk==""){

       alert("semua data harus diisi!");
       
       return;
    }

    alert("Data berhasil disimpan.");
});