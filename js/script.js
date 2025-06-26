console.log("JavaScript is working!");

// Greeting ketika menekan segitiga
function greet() {
    const welcomeSpeech = document.getElementById("welcome-speech");
    console.log(welcomeSpeech);
    welcomeSpeech.innerHTML = "Let's get started!";
}

// Fungsi untuk menghitung luas segitiga
function calcluas() {
    // Ambil nilai alas dan tinggi 
    const alas = parseFloat(document.getElementById("alas").value);
    const tinggi = parseFloat(document.getElementById("tinggi").value);
    
    // Validasi input
    if (!isNaN(alas) && !isNaN(tinggi) && alas > 0 && tinggi > 0) {
    
    // Hitung luas
        const luas = 0.5 * alas * tinggi;
        // Tampilkan hasil di elemen <p>
        document.getElementById('hasilLuas').innerText = `Luas segitiga adalah: ${luas.toFixed(2)}`;
    } else {
        const errorText = "Silakan masukkan nilai yang valid untuk alas dan tinggi.";  
        document.getElementById('hasilLuas').innerText = errorText;
        // Tampilkan pesan kesalahan di elemen <p>
        document.getElementById('hasilluas').innerText = errorText;
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
     const hasilText = `Keliling segitiga adalah: ${keliling.toFixed(2)}`;
                
    // Tampilkan hasil di elemen <p>
    document.getElementById('hasilKeliling').innerText = hasilText;
    } else {
    const errorText = "Silakan masukkan nilai yang valid untuk sisi A, B, dan C.";
                
    // Tampilkan pesan kesalahan di elemen <p>
    document.getElementById('hasilKeliling').innerText = errorText;
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