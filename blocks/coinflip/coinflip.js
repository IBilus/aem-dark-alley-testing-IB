/* eslint-disable */
export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);
  block.classList.add(`testClassNameCoinflip3`);

  const img = document.createElement('img');
  const randNum = Math.random() > 0.5 ? 0 : 1;
  img.src = randNum
      ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/1925_Ford_Model_T_touring.jpg/1280px-1925_Ford_Model_T_touring.jpg'
      : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Golden_Gate_Bridge_as_seen_from_Battery_East.jpg/2560px-Golden_Gate_Bridge_as_seen_from_Battery_East.jpg";
  block.replaceChildren(img);

  /*const ul = document.createElement('ul');

  // setup image columns
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          // picture is only content in column
          picWrapper.classList.add('columns-img-col');
        }
      }
    });
  });*/
}
