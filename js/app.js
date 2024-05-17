/* Fungsi formatRupiah */
function formatRupiah(angka, prefix){
    var number_string = angka.replace(/[^,\d]/g, '').toString(),
    split   		= number_string.split(','),
    sisa     		= split[0].length % 3,
    rupiah     		= split[0].substr(0, sisa),
    ribuan     		= split[0].substr(sisa).match(/\d{3}/gi);

    // tambahkan titik jika yang di input sudah menjadi angka ribuan
    if(ribuan){
        separator = sisa ? '.' : '';
        rupiah += separator + ribuan.join('.');
    }

    rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
    return prefix == undefined ? rupiah : (rupiah ? 'Rp. ' + rupiah : '');
}

document.addEventListener('alpine:init', () => {
    Alpine.data('product', () => ({
        open: false,
        items: [
            {id: 1, name: 'Pecel Lele', img: 'IMG_pecel_lele.png', price: 12000 },
            {id: 2, name: 'Pecel Ayam', img: 'IMG_pecel_ayam.png', price: 12000 },
            {id: 3, name: 'Nilai Bakar / Goreng', img: 'IMG_nila.png', price: 16000 },
            {id: 4, name: 'Nasi Goreng', img: 'IMG_nasgor.png', price: 14000 },
            {id: 5, name: 'Mie Goreng', img: 'IMG_mi_goreng.png', price: 13000 },
            {id: 6, name: 'Kwetiau', img: 'IMG_kwetiau.png', price: 14000 },
        ],
        toggle() {
            this.open = ! this.open
        }
    }))
    
    Alpine.store('cart', {
        items : [],
        total : 0,
        quantity : 0,
        add(newItem) {
            this.items.push(newItem)
            this.quantity++
            this.total += newItem.price
            console.log(this.total)
        },
    })
})