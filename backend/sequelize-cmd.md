 npx sequelize-cli model:generate --name v_dashboard --attributes digital_id:integer,digital_id_stations:integer, stations_id:integer, diff:integer, digital_status:string, digital_hit_now:string

  npx sequelize-cli model:generate --name material --attributes code:string,name:string,unit:string,early_stock:integer,total_in:integer,total_out:integer,late_stock:integer,status:string,entry_date:date

npx sequelize-cli model:generate --name progress --attributes id_order:integer,desain:date,setting:date,print:date,press:date,potong:date,qc_potong:date,jahit:date,qc_finish:date

npx sequelize-cli model:generate --name order --attributes nama_order:string,jumlah:integer,satuan:string,id_cust:integer,tanggal_masuk:date,deadline:date,id_bahan:integer,jenis_jahit:string,keterangan:string,id_pekerjaan:string,dp:integer,tanggal_dp:date,total:integer,id_progress:integer,lunas:boolean

calculator 1l pendek o.4kg

bahan itu diinput manual base on kg nya brp 
example : ada 5 pesanan baju dan akan makan 2.5kg maka total berat stok bahan dikurang 2.5kg

fee karyawan itu fixed tiap bulan 

kalo order dilempar keluar berarti tidak ada bonus untuk anak anak dan umtuk pekerjaan tambahkan "tidak ada pekerjaan" dengan harga Rp.0

fixed
jika konveksi itu -12 misal jika dealine tgl 20 maka tgl 8
jika rekanan itu -4 misal jika deadline tgl 20 maka tgl 16

pendapatan diambil dari deadline perbulannya
if(deadline == param[userinput_month]){
    let total_pendapatan = 0
sum semua total di bulan deadline itu 

}


DEADLINE
kalo diatas 4 hari dia warna putih
dibawah 4 hari kuning [3,2,1]
kalo sama dengan datetimenow dia merah

deadline terdekat taruh di dashboard


KODE BARANG UNIQUE
Kode barang inisial + warna
example : Kain Dryfit Milano Putih - KDM-PUT
KDM = Kain Dryfit Milano
PUT = Putih

STATUS BARANG
kain satuan kg kurang dari 5 kg berarti "PESANLAGI"
Roll kurang dari 2 "PESAN LAGI"
Botol kurang dari 2 "PESAN LAGI"

SIMPLIFIED BAHAN!!!!