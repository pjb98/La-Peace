// Copy contract address to clipboard
const copyBtn = document.getElementById('copy-ca');
const caText = document.getElementById('ca-text');
const toast = document.getElementById('toast');

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('toast--show');
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => toast.classList.remove('toast--show'), 2200);
}

if (copyBtn && caText) {
  copyBtn.addEventListener('click', async () => {
    const value = caText.textContent.trim();
    try {
      await navigator.clipboard.writeText(value);
      copyBtn.textContent = 'Copied!';
      showToast('Contract address copied — that\'s La Peace 💎');
    } catch (err) {
      showToast('Copy failed — long press to select manually');
    }
    setTimeout(() => { copyBtn.textContent = 'Copy'; }, 1800);
  });
}

// Meme carousel
const memeData = document.getElementById('meme-data');
if (memeData) {
  const slides = Array.from(memeData.querySelectorAll('li')).map((li) => ({
    src: li.dataset.src,
    alt: li.dataset.alt || '',
    caption: li.dataset.caption || '',
  }));

  const img = document.getElementById('meme-carousel-img');
  const frame = document.getElementById('meme-carousel-frame');
  const brokenName = document.getElementById('meme-carousel-broken-name');
  const captionEl = document.getElementById('meme-carousel-caption');
  const countEl = document.getElementById('meme-carousel-count');
  const prevBtn = document.getElementById('meme-prev');
  const nextBtn = document.getElementById('meme-next');
  const dotsEl = document.getElementById('meme-dots');

  let index = 0;

  slides.forEach((slide, i) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'meme-carousel__dot';
    dot.setAttribute('aria-label', `Go to meme ${i + 1}`);
    dot.addEventListener('click', () => show(i));
    dotsEl.appendChild(dot);
  });

  function show(i) {
    index = (i + slides.length) % slides.length;
    const slide = slides[index];
    frame.classList.remove('meme-carousel__frame--broken');
    img.src = slide.src;
    img.alt = slide.alt;
    brokenName.textContent = slide.src.split('/').pop();
    captionEl.textContent = slide.caption;
    countEl.textContent = `${index + 1} / ${slides.length}`;
    dotsEl.querySelectorAll('.meme-carousel__dot').forEach((dot, i2) => {
      dot.classList.toggle('meme-carousel__dot--active', i2 === index);
    });
  }

  img.addEventListener('error', () => frame.classList.add('meme-carousel__frame--broken'));
  prevBtn.addEventListener('click', () => show(index - 1));
  nextBtn.addEventListener('click', () => show(index + 1));
  document.getElementById('meme-carousel').addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') show(index - 1);
    if (e.key === 'ArrowRight') show(index + 1);
  });

  if (slides.length) show(0);
}
