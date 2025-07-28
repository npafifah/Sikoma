function mulaiQuiz() {
  const hasil = [
    "Kamu tampaknya cukup stabil. Tetap jaga dirimu ya!",
    "Kamu mungkin sedang stres ringan. Coba journaling atau cerita ke teman.",
    "Perlu waspada, mungkin kamu kelelahan mental. Istirahatlah dan bicara pada orang yang kamu percaya.",
    "Kamu butuh dukungan. Hubungi orang tua, teman dekat, atau konselor."
  ];
  const acak = Math.floor(Math.random() * hasil.length);
  document.getElementById("quiz-result").innerText = hasil[acak];
}
