const ceritaData = [
    {
      id: 1,
      judul: "📓 Journaling Bantu Pulih",
      isi: "Dulu aku gampang marah & nyalahin diri sendiri. Tapi journaling bantu aku pelan-pelan.",
      sumber: "— Dina, 18"
    },
    {
      id: 2,
      judul: "🌈 Diterima Komunitas",
      isi: "Ngobrol sama konselor bikin aku sadar kalau aku perlu istirahat. Dan itu nggak apa-apa.",
      sumber: "— Rian, 20"
    },
    {
      id: 3,
      judul: "🕊️ Berani Istirahat",
      isi: "Aku belajar bahwa istirahat itu bukan kemunduran, tapi bentuk cinta pada diri sendiri.",
      sumber: "— Maya, 22"
    },
    {
      id: 4,
      judul: "🎯 Pelan Tapi Bangkit",
      isi: "Nggak langsung sembuh, tapi sejak nulis jurnal dan cerita ke teman, aku merasa lebih kuat.",
      sumber: "— Saka, 19"
    },
    {
      id: 5,
      judul: "🎭 Dari Ragu Jadi Lega",
      isi: "Awalnya aku ragu cerita ke siapa pun. Tapi setelah bicara dengan mentor, aku merasa dimengerti.",
      sumber: "— Hana, 21"
    },
    {
      id: 6,
      judul: "🌟 Menemukan Makna Lagi",
      isi: "Saat burnout, aku pikir aku gagal. Tapi sekarang aku sadar itu proses untuk menemukan arah.",
      sumber: "— Adit, 23"
    },
    {
      id: 7,
      judul: "📘 Satu Langkah Kecil",
      isi: "Aku mulai dari satu hal kecil: tidur cukup. Ternyata itu bantu banget stabilkan emosiku.",
      sumber: "— Lala, 20"
    },
    {
      id: 8,
      judul: "🌿 Menulis untuk Pulih",
      isi: "Setiap malam aku tulis 3 hal yang kusyukuri. Sekarang aku lebih tenang dan fokus.",
      sumber: "— Gilang, 19"
    },
    {
      id: 9,
      judul: "🧩 Belajar Menerima",
      isi: "Aku sadar bahwa nggak apa-apa nggak selalu produktif. Yang penting aku terus hidup dan belajar.",
      sumber: "— Nisa, 22"
    },
    {
      id: 10,
      judul: "🫶 Dikuatkan Orang Terdekat",
      isi: "Curhat ke sahabat jadi titik balikku. Dia dengarkan tanpa menghakimi, dan itu sangat berarti.",
      sumber: "— Kevin, 21"
    }
  ];
  
  let start = 0;
  
  function renderCerita() {
    const container = document.getElementById("cerita-container");
    container.innerHTML = "";
  
    const ceritaToShow = ceritaData.slice(start, start + 2);
  
    ceritaToShow.forEach(cerita => {
      const cardLink = document.createElement("a");
      cardLink.href = `cerita.html?id=${cerita.id}`;
      cardLink.className = "card-link";
  
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <h3>${cerita.judul}</h3>
        <p><em>${cerita.isi}</em></p>
        <span>${cerita.sumber}</span>
      `;
  
      cardLink.appendChild(card);
      container.appendChild(cardLink);
    });
  }
  
  document.getElementById("prev-cerita").addEventListener("click", () => {
    start = (start - 2 + ceritaData.length) % ceritaData.length;
    renderCerita();
  });
  
  document.getElementById("next-cerita").addEventListener("click", () => {
    start = (start + 2) % ceritaData.length;
    renderCerita();
  });
  
  window.addEventListener("DOMContentLoaded", renderCerita);
  