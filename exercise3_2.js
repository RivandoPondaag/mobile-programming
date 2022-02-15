// Nama Kelompok :
// Alfan F.A. Topik
// Chrisnov Pala'langan
// Rivando Morten Pondaag
// Nariva Charline Wagey
// Marietta Ardelia Gavrila unenor

// Export ex. 1
export const latihan1 = "Ini adalah latihan 1";

// Export ex. 2
function helloWorld() {
    console.log("Hello World");
}
const object = {
    NIM: 123443211234,
    noRegis: "S17483738",
    fakultas: "Ilmu Komputer",
    umur: 21,
    mahasiswaAktif: true,
    mataKuliah: ["AI", "Data Base Management System", "System Programming"]
}
export {helloWorld, object};

// Export As ex. 1
export {latihan1 as latihan2};

// Export As ex. 2
export {helloWorld as latihanAs, object as objek};

// Export Default
const defaultV = "ini adalah contoh exportDefault";
export default defaultV;
