
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('I LOVE U').split('')
    const titleElement = document.<img width="240" height="240" alt="Image" src="https://github.com/user-attachments/assets/90fc2117-67f8-41a9-ac73-3cd4d91ebd41" />('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300); // 1000ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};
