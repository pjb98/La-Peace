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
