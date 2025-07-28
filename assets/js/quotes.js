document.addEventListener("DOMContentLoaded", () => {
  const dailyPairs = [
    {
      quote: "Istirahat bukan berarti lemah, tapi bentuk keberanian untuk menyayangi diri.",
      tip: "Ambil jeda 10 menit dari layar hari ini. Tutup mata dan tarik napas dalam 3 kali."
    },
    {
      quote: "Perasaanmu valid, sekacau apapun bentuknya.",
      tip: "Tulis 3 hal yang kamu rasakan hari ini tanpa menilai—cukup akui dan terima."
    },
    {
      quote: "Overthinking tidak menyelesaikan apa-apa, tapi menulis bisa bantu menenangkan.",
      tip: "Buka halaman jurnal dan tulis 5 menit tanpa sensor. Biarkan pikiranmu mengalir."
    },
    {
      quote: "Hari ini kamu cukup, meskipun belum sempurna.",
      tip: "Pilih satu tugas kecil, selesaikan, lalu beri apresiasi ke dirimu sendiri."
    },
    {
      quote: "Tidak semua orang harus mengerti dirimu. Yang penting kamu memahami dirimu dulu.",
      tip: "Tulis 3 nilai atau prinsip yang penting buatmu. Ini bisa jadi kompas saat bingung."
    },
    {
      quote: "Menangis bukan tanda lemah. Itu bukti kamu sedang membersihkan luka.",
      tip: "Kalau ingin menangis, beri ruang untuk itu. Ambil tisu, duduk nyaman, dan lepaskan."
    },
    {
      quote: "Proses penyembuhan tidak selalu terlihat. Tapi setiap langkah kecil berarti.",
      tip: "Rayakan hal kecil hari ini: mandi tepat waktu, makan, atau tidak membuka medsos berlebihan."
    },
    {
      quote: "Kamu tidak sendiri. Ada orang yang juga sedang berjuang, seperti kamu.",
      tip: "Coba hubungi teman, atau tulis pesan dukungan anonim di komunitas yang aman."
    },
    {
      quote: "Jangan bandingkan bab 1-mu dengan bab 20 orang lain.",
      tip: "Unfollow akun yang bikin kamu merasa tidak cukup. Pilih konten yang menenangkan."
    },
    {
      quote: "Setiap hari adalah kesempatan baru untuk memulai ulang.",
      tip: "Tentukan niat kecil hari ini. Tidak harus besar—cukup nyata dan baik buatmu."
    }
  ];

  const pair = dailyPairs[Math.floor(Math.random() * dailyPairs.length)];
  document.getElementById("quote").textContent = pair.quote;
  document.getElementById("tip-of-the-day").textContent = pair.tip;
});
