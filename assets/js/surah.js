window.addEventListener("load", () => {
      
      const params = (new URL(document.location)).searchParams;
      const no = params.get('no');
      // console.log(no);
      const app = document.querySelector('.app');
    
      fetch('https://api.quran.sutanlab.id/surah/' + no)
        .then(response => response.json())
        .then(result => {
           // console.log(result);
           let ayat = '';
           result.data.verses.forEach(data => {
             ayat += `
             <div class="text-muted py-4 border-bottom">
             <h1 class="float-end text-dark">${data.text.arab}</h1>
             <div class="clearfix"></div>
             <p class="my-2">${data.translation.id}</p>
             <audio controls>
  <source src="${data.audio.primary}" type="audio/mpeg">
  Your browser does not support the audio tag.
</audio>
             </div>`;
           });
           document.querySelector('.loading').classList.add('d-none');
           app.innerHTML = ayat;
          });

          
    });