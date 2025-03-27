// Ini Javascript Eksternal //

// Fungsi Navigasi untuk berpindah antara Persegi dan Persegi Panjang
function showSection(section) {
    document.getElementById("persegi").style.display = (section === "persegi") ? "block" : "none";
    document.getElementById("persegi-panjang").style.display = (section === "persegi-panjang") ? "block" : "none";
}

// Fungsi Reset formulir
function resetForm(type) {
    document.getElementById("hasil-" + type).textContent = "";
    document.querySelectorAll(`#${type}-form input`).forEach(input => input.value = "");
}

// Event Listeners untuk hitung luas & keliling persegi
document.getElementById("luas-persegi-form").addEventListener("submit", function (event) {
    event.preventDefault();
    let sisi = parseFloat(document.getElementById("sisi-luas").value);
    document.getElementById("hasil-luas-persegi").textContent = `Luas: ${sisi * sisi} cm²`;
});

document.getElementById("keliling-persegi-form").addEventListener("submit", function (event) {
    event.preventDefault();
    let sisi = parseFloat(document.getElementById("sisi-keliling").value);
    document.getElementById("hasil-keliling-persegi").textContent = `Keliling: ${4 * sisi} cm`;
});

// Event Listeners untuk hitung luas & keliling Persegi Panjang
document.getElementById("luas-pp-form").addEventListener("submit", function (event) {
    event.preventDefault();
    let p = parseFloat(document.getElementById("panjang-luas").value);
    let l = parseFloat(document.getElementById("lebar-luas").value);
    document.getElementById("hasil-luas-pp").textContent = `Luas: ${p * l} cm²`;
});

document.getElementById("keliling-pp-form").addEventListener("submit", function (event) {
    event.preventDefault();
    let p = parseFloat(document.getElementById("panjang-keliling").value);
    let l = parseFloat(document.getElementById("lebar-keliling").value);
    document.getElementById("hasil-keliling-pp").textContent = `Keliling: ${2 * (p + l)} cm`;
});
