// Fungsi untuk menghitung luas segitiga
function calcluas() {
    // Ambil nilai alas dan tinggi 
    const alas = parseFloat(document.getElementById("alas").value);
    const tinggi = parseFloat(document.getElementById("tinggi").value);
    
    // Validasi input
    if (!isNaN(alas) && !isNaN(tinggi) && alas > 0 && tinggi > 0) {
        // Hitung luas
        const luas = 0.5 * alas * tinggi;
        alert(`Luas segitiga adalah: ${luas.toFixed(2)}`);
    } else {
        alert("Silakan masukkan nilai yang valid untuk alas dan tinggi.");
    }
}

// Fungsi untuk menghitung keliling segitiga
function calkel() {
    // Ambil nilai sisi A, B, dan C dari input
    const sisiA = parseFloat(document.getElementById("sisi a").value);
    const sisiB = parseFloat(document.getElementById("sisi b").value);
    const sisiC = parseFloat(document.getElementById("sisi c").value);
    
    // Validasi input
    if (!isNaN(sisiA) && !isNaN(sisiB) && !isNaN(sisiC) && sisiA > 0 && sisiB > 0 && sisiC > 0) {
        // Hitung keliling
        const keliling = sisiA + sisiB + sisiC;
        alert(`Keliling segitiga adalah: ${keliling.toFixed(2)}`);
    } else {
        alert("Silakan masukkan nilai yang valid untuk sisi A, B, dan C.");
    }
}

// Fungsi untuk mereset input
function resetCalculator() {
    // Mengosongkan input untuk luas
    document.getElementById("alas").value = "";
    document.getElementById("tinggi").value = "";
    
    // Mengosongkan input untuk keliling
    document.getElementById("sisi a").value = "";
    document.getElementById("sisi b").value = "";
    document.getElementById("sisi c").value = "";
}