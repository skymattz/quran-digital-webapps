const daftar_surah = document.querySelector('.daftar-surah');

fetch('https://api.quran.sutanlab.id/surah')
  .then(response => response.json())
  .then(result => {
    // console.log(result);
    let surah = '';
    result.data.forEach(data => {
      surah += `
      <a class="text-decoration-none" href="/surah.html?no=${data.number}">
  <div class="d-flex text-muted pt-3 align-items-center border-bottom">
    <h6 class="me-4">${data.number}</h6>
    <div class="w-100">
      <strong class="text-gray-dark">${data.name.transliteration.id} (${data.numberOfVerses})</strong>
      <p>${data.name.translation.id}</p>
    </div>
    <h2>${data.name.short}</h2>
  </div>
</a>`;
    });
    document.querySelector('.loading').classList.add('d-none');
    daftar_surah.innerHTML = surah;
  })
  .catch(err => {
    // console.log(err);
    document.querySelector('.loading').classList.add('d-none');
    document.querySelector('.error').classList.remove('d-none');
  });