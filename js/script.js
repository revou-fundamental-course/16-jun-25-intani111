console.log("JavaScript is working!");

// Greeting ketika menekan segitiga
function greet1() {
    const welcomeSpeech = document.getElementById("welcome-speech");
    console.log(welcomeSpeech);
    welcomeSpeech.innerHTML = "Let's get started With Segitiga!";
}

// Greeting ketika menekan persegi
function greet2() {
    const welcomeSpeech = document.getElementById("welcome-speech");
    console.log(welcomeSpeech);
    welcomeSpeech.innerHTML = "Let's get started With Jajar Genjang!";
}

// Fungsi untuk menghitung luas segitiga
function calcluasseg() {
    // Ambil nilai alas dan tinggi 
    const alas = parseFloat(document.getElementById("alas").value);
    const tinggi = parseFloat(document.getElementById("tinggi").value);
    
    // Validasi input
    if (!isNaN(alas) && !isNaN(tinggi) && alas > 0 && tinggi > 0) {
    
    // Hitung luas
        const luas = 0.5 * alas * tinggi;
        // Tampilkan hasil di elemen <p>
        document.getElementById('hasilLuassegitiga').innerText = `Luas segitiga adalah: ${luas.toFixed(2)}`;
    } else {
        const errorText = "Silakan masukkan nilai yang valid untuk alas dan tinggi.";  
        document.getElementById('hasilLuassegitiga').innerText = errorText;
        // Tampilkan pesan kesalahan di elemen <p>
        document.getElementById('hasilluassegitiga').innerText = errorText;
            }
    }

// Fungsi untuk menghitung keliling segitiga
function calkelseg() {
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
    document.getElementById('hasilKelilingsegitiga').innerText = hasilText;
    } else {
    const errorText = "Silakan masukkan nilai yang valid untuk sisi A, B, dan C.";
                
    // Tampilkan pesan kesalahan di elemen <p>
    document.getElementById('hasilKelilingsegitiga').innerText = errorText;
            }
        }

// Fungsi untuk menghitung luas jajargenjang
function calcluasjajar() {
    // Ambil nilai alas dan tinggi dari input
    const alasJajar = parseFloat(document.getElementById("alasJajar").value);
    const tinggiJajar = parseFloat(document.getElementById("tinggiJajar").value);

    // Validasi input
    if (!isNaN(alasJajar) && !isNaN(tinggiJajar) && alasJajar > 0 && tinggiJajar > 0) {
        // Hitung luas
        const luasJajar = alasJajar * tinggiJajar;
        // Tampilkan hasil di elemen <p>
        document.getElementById('hasilLuasJajarGenjang').innerText = `Luas jajargenjang adalah: ${luasJajar.toFixed(2)}`;
    } else {
        const errorText = "Silakan masukkan nilai yang valid untuk alas dan tinggi.";
        document.getElementById('hasilLuasJajarGenjang').innerText = errorText;
    }
}   

// Fungsi untuk menghitung keliling jajargenjang
function calkeljajar() {
    // Ambil nilai sisi A dan B dari input
    const sisiAJajar = parseFloat(document.getElementById("sisiAJajar").value);
    const sisiBJajar = parseFloat(document.getElementById("sisiBJajar").value);
    // Validasi input
    if (!isNaN(sisiAJajar) && !isNaN(sisiBJajar) && sisiAJajar > 0 && sisiBJajar > 0) {
        // Hitung keliling
        const kelilingJajar = 2 * (sisiAJajar + sisiBJajar);
        // Tampilkan hasil di elemen <p>
        document.getElementById('hasilKelilingJajarGenjang').innerText = `Keliling jajargenjang adalah: ${kelilingJajar.toFixed(2)}`;
    }
    else {
        const errorText = "Silakan masukkan nilai yang valid untuk sisi A dan B.";
        document.getElementById('hasilKelilingJajarGenjang').innerText = errorText;
    }
}

// Fungsi untuk mereset input
function resetCalculator() {
    // Mengosongkan input untuk luas
    document.getElementById("alas").value = "";
    document.getElementById("tinggi").value = "";
    // Mengosongkan hasil luas segitiga
    document.getElementById('hasilLuassegitiga').innerText = "";
    
    // Mengosongkan input untuk keliling
    document.getElementById("sisi a").value = "";
    document.getElementById("sisi b").value = "";
    document.getElementById("sisi c").value = "";
    // Mengosongkan hasil keliling segitiga
    document.getElementById('hasilKelilingsegitiga').innerText = "";

    // Mengosongkan input untuk luas jajargenjang
    document.getElementById("alasJajar").value = "";
    document.getElementById("tinggiJajar").value = "";
    // Mengosongkan hasil luas jajargenjang
    document.getElementById('hasilLuasJajarGenjang').innerText = "";

    // Mengosongkan input untuk keliling jajargenjang
    document.getElementById("sisiAJajar").value = "";
    document.getElementById("sisiBJajar").value = "";
    // Mengosongkan hasil keliling jajargenjang
    document.getElementById('hasilKelilingJajarGenjang').innerText = "";
}