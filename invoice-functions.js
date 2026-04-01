// Invoice Functions - PT ALIMA AMANAH LOGISTIC

// Data default items
let items = [
    { 
        desc: "Shipment 2 Unit Toyota Avanza S 1145 XU & Daihatsu Terios S 1284 WV, Makassar tujuan Manado & Manado tujuan Makassar.", 
        cond: "Self Drive", 
        unit: 1, 
        kg: "-", 
        price: 10500000 
    }
];

// Fungsi untuk format tanggal Indonesia
function formatTanggalIndonesia() {
    const bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
        'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    const today = new Date();
    return `Makassar, ${today.getDate()} ${bulan[today.getMonth()]} ${today.getFullYear()}`;
}

// Fungsi terbilang untuk konversi angka ke kata
function terbilang(angka) {
    const bilangan = ['', 'Satu', 'Dua', 'Tiga', 'Empat', 'Lima', 'Enam', 'Tujuh', 'Delapan', 'Sembilan', 'Sepuluh', 'Sebelas'];

    if (angka < 12) return bilangan[angka];
    if (angka < 20) return terbilang(angka - 10) + ' Belas';
    if (angka < 100) return terbilang(Math.floor(angka / 10)) + ' Puluh ' + terbilang(angka % 10);
    if (angka < 200) return 'Seratus ' + terbilang(angka - 100);
    if (angka < 1000) return terbilang(Math.floor(angka / 100)) + ' Ratus ' + terbilang(angka % 100);
    if (angka < 2000) return 'Seribu ' + terbilang(angka - 1000);
    if (angka < 1000000) return terbilang(Math.floor(angka / 1000)) + ' Ribu ' + terbilang(angka % 1000);
    if (angka < 1000000000) return terbilang(Math.floor(angka / 1000000)) + ' Juta ' + terbilang(angka % 1000000);
    if (angka < 1000000000000) return terbilang(Math.floor(angka / 1000000000)) + ' Miliar ' + terbilang(angka % 1000000000);
    return terbilang(Math.floor(angka / 1000000000000)) + ' Triliun ' + terbilang(angka % 1000000000000);
}

// Fungsi untuk update preview invoice
function updatePreview() {
    // Update data customer
    document.getElementById('out-cust-name').innerText = document.getElementById('in-cust-name').value;
    document.getElementById('out-cust-address').innerText = document.getElementById('in-cust-address').value;
    document.getElementById('out-inv-no').innerText = document.getElementById('in-inv-no').value;
    document.getElementById('out-dest').innerText = document.getElementById('in-dest').value;
    document.getElementById('out-pic').innerText = document.getElementById('in-pic').value;
    
    // Update data perusahaan
    const companyName = document.getElementById('in-company-name').value;
    const companyAddress = document.getElementById('in-company-address').value;
    const companyPhone = document.getElementById('in-company-phone').value;
    const companyEmail = document.getElementById('in-company-email').value;
    
    document.getElementById('company-name-display').innerText = companyName;
    document.getElementById('company-name-signature').innerText = companyName;
    document.getElementById('company-tagline').innerText = companyName;
    
    // Split alamat perusahaan menjadi 2 baris
    const addressParts = companyAddress.split(',');
    if (addressParts.length >= 2) {
        document.getElementById('company-address-1').innerText = addressParts[0].trim();
        document.getElementById('company-address-2').innerText = addressParts.slice(1).join(',').trim();
    } else {
        document.getElementById('company-address-1').innerText = companyAddress;
        document.getElementById('company-address-2').innerText = '';
    }
    
    document.getElementById('company-phone').innerText = `Hp : ${companyPhone}`;
    document.getElementById('company-email').innerText = `Email : ${companyEmail}`;
    
    // Update penandatangan
    document.getElementById('out-signer-display').innerText = document.getElementById('in-signer').value;
    document.getElementById('out-pos-display').innerText = document.getElementById('in-pos').value;

    // Update data bank
    document.getElementById('bank1-name').innerText = document.getElementById('in-bank1-name').value;
    document.getElementById('bank1-account').innerText = document.getElementById('in-bank1-account').value;
    document.getElementById('bank1-account-name').innerText = document.getElementById('in-bank1-account-name').value;
    document.getElementById('bank2-name').innerText = document.getElementById('in-bank2-name').value;
    document.getElementById('bank2-account').innerText = document.getElementById('in-bank2-account').value;
    document.getElementById('bank2-account-name').innerText = document.getElementById('in-bank2-account-name').value;

    // Update tanggal otomatis
    document.getElementById('out-date').innerText = formatTanggalIndonesia();

    // Update tabel items
    const tbody = document.getElementById('out-table-body');
    tbody.innerHTML = '';
    let total = 0;

    items.forEach((it, idx) => {
        const amt = it.unit * it.price;
        total += amt;
        
        // Format description dan condition untuk multi-line
        const formattedDesc = it.desc.replace(/\n/g, '<br>');
        const formattedCond = it.cond.replace(/\n/g, '<br>');
        
        tbody.innerHTML += `
            <tr class="align-top" style="min-height: 60px;">
                <td class="font-bold text-center align-middle">${idx + 1}</td>
                <td class="text-left align-top" style="padding: 8px; line-height: 1.4;">${formattedDesc}</td>
                <td class="text-center align-top" style="padding: 8px; line-height: 1.4;">${formattedCond}</td>
                <td class="text-center align-middle">${it.unit}</td>
                <td class="text-center align-middle">${it.kg}</td>
                <td class="text-left px-2 align-middle"><div class="flex justify-between"><span>Rp</span><span>${it.price.toLocaleString('id-ID')}</span></div></td>
                <td class="text-left px-2 font-bold align-middle"><div class="flex justify-between"><span>Rp</span><span>${amt.toLocaleString('id-ID')}</span></div></td>
            </tr>
        `;
    });

    // Tambah baris kosong agar tinggi tabel pas
    for (let i = items.length; i < 4; i++) {
        tbody.innerHTML += `<tr class="h-14"><td>&nbsp;</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>`;
    }

    // Update total
    document.getElementById('out-total').innerText = total.toLocaleString('id-ID');
    
    // Hitung PPN dan Down Payment
    const ppnRate = parseFloat(document.getElementById('in-ppn-rate').value) || 0;
    const downPayment = parseFloat(document.getElementById('in-down-payment').value) || 0;
    const enablePPN = document.getElementById('enable-ppn').checked;
    
    let ppnAmount = 0;
    if (enablePPN && ppnRate > 0) {
        ppnAmount = Math.round(total * ppnRate / 100);
    }
    
    const grandTotal = total + ppnAmount - downPayment;
    
    // Update tampilan PPN
    document.getElementById('ppn-rate-display').innerText = ppnRate.toLocaleString('id-ID');
    document.getElementById('out-ppn').innerText = ppnAmount > 0 ? ppnAmount.toLocaleString('id-ID') : '-';
    
    // Update tampilan Down Payment
    document.getElementById('out-down-payment').innerText = downPayment > 0 ? downPayment.toLocaleString('id-ID') : '-';
    
    // Update Grand Total
    document.getElementById('out-grand-total').innerText = grandTotal.toLocaleString('id-ID');

    // Update terbilang berdasarkan Grand Total
    const terbilangText = terbilang(grandTotal).trim() + ' Rupiah';
    document.getElementById('out-terbilang').innerText = terbilangText;
}

// Fungsi untuk render input items
function renderInputs() {
    const container = document.getElementById('item-inputs');
    container.innerHTML = '';
    items.forEach((it, idx) => {
        container.innerHTML += `
            <div class="grid grid-cols-6 gap-2 border-b pb-4 mb-4">
                <div class="col-span-2">
                    <label class="text-xs text-gray-600 block mb-1">Deskripsi</label>
                    <textarea class="input-field resize-none" rows="3" placeholder="Deskripsi (tekan Enter untuk baris baru)" oninput="items[${idx}].desc=this.value; updatePreview()">${it.desc}</textarea>
                </div>
                <div>
                    <label class="text-xs text-gray-600 block mb-1">Kondisi</label>
                    <textarea class="input-field resize-none" rows="3" placeholder="Kondisi (tekan Enter untuk baris baru)" oninput="items[${idx}].cond=this.value; updatePreview()">${it.cond}</textarea>
                </div>
                <div>
                    <label class="text-xs text-gray-600 block mb-1">Unit</label>
                    <input class="input-field" type="number" placeholder="Unit" value="${it.unit}" oninput="items[${idx}].unit=Number(this.value); updatePreview()">
                </div>
                <div>
                    <label class="text-xs text-gray-600 block mb-1">Harga</label>
                    <input class="input-field" type="number" placeholder="Harga" value="${it.price}" oninput="items[${idx}].price=Number(this.value); updatePreview()">
                </div>
                <div class="flex items-end">
                    <button onclick="items.splice(${idx},1); renderInputs()" class="btn-danger w-full">HAPUS</button>
                </div>
            </div>
        `;
    });
    updatePreview();
}

// Fungsi untuk menambah baris item
function addRow() {
    items.push({ desc: "", cond: "", unit: 1, kg: "-", price: 0 });
    renderInputs();
}

// Fungsi untuk export JPG
async function exportJPG() {
    const captureArea = document.getElementById('capture-container');
    const canvas = await html2canvas(captureArea, {
        scale: 2, // Resolusi tinggi
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        width: 1080,
        height: 1050,
        windowWidth: 1080,
        windowHeight: 1050,
        x: 0,
        y: 0,
        scrollX: 0,
        scrollY: 0
    });
    const link = document.createElement('a');
    const invNo = document.getElementById('in-inv-no').value.replace(/\//g, '-');
    const companyName = document.getElementById('in-company-name').value.replace(/[^a-zA-Z0-9]/g, '-');
    link.download = `Invoice-${companyName}-${invNo}.jpg`;
    link.href = canvas.toDataURL('image/jpeg', 0.95);
    link.click();
}

// Fungsi untuk save template
function saveTemplate() {
    const template = {
        companyName: document.getElementById('in-company-name').value,
        companyAddress: document.getElementById('in-company-address').value,
        companyPhone: document.getElementById('in-company-phone').value,
        companyEmail: document.getElementById('in-company-email').value,
        signer: document.getElementById('in-signer').value,
        position: document.getElementById('in-pos').value,
        bank1Name: document.getElementById('in-bank1-name').value,
        bank1Account: document.getElementById('in-bank1-account').value,
        bank1AccountName: document.getElementById('in-bank1-account-name').value,
        bank2Name: document.getElementById('in-bank2-name').value,
        bank2Account: document.getElementById('in-bank2-account').value,
        bank2AccountName: document.getElementById('in-bank2-account-name').value,
        ppnRate: document.getElementById('in-ppn-rate').value,
        items: items
    };
    
    const dataStr = JSON.stringify(template, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'invoice-template.json';
    link.click();
    URL.revokeObjectURL(url);
}

// Fungsi untuk load template
function loadTemplate(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const template = JSON.parse(e.target.result);
                
                // Load data ke form
                if (template.companyName) document.getElementById('in-company-name').value = template.companyName;
                if (template.companyAddress) document.getElementById('in-company-address').value = template.companyAddress;
                if (template.companyPhone) document.getElementById('in-company-phone').value = template.companyPhone;
                if (template.companyEmail) document.getElementById('in-company-email').value = template.companyEmail;
                if (template.signer) document.getElementById('in-signer').value = template.signer;
                if (template.position) document.getElementById('in-pos').value = template.position;
                if (template.bank1Name) document.getElementById('in-bank1-name').value = template.bank1Name;
                if (template.bank1Account) document.getElementById('in-bank1-account').value = template.bank1Account;
                if (template.bank1AccountName) document.getElementById('in-bank1-account-name').value = template.bank1AccountName;
                if (template.bank2Name) document.getElementById('in-bank2-name').value = template.bank2Name;
                if (template.bank2Account) document.getElementById('in-bank2-account').value = template.bank2Account;
                if (template.bank2AccountName) document.getElementById('in-bank2-account-name').value = template.bank2AccountName;
                if (template.ppnRate) document.getElementById('in-ppn-rate').value = template.ppnRate;
                
                if (template.items) {
                    items = template.items;
                }
                
                renderInputs();
                alert('Template berhasil dimuat!');
            } catch (error) {
                alert('Error loading template: ' + error.message);
            }
        };
        reader.readAsText(file);
    }
}

// Initialize saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    // Setup event listeners untuk semua input
    document.querySelectorAll('.input-field').forEach(inp => {
        inp.addEventListener('input', updatePreview);
    });
    
    // Render input items dan update preview
    renderInputs();
});