const init = () => {
   const el = document.querySelector('.button-list');
      el.addEventListener('click', async() => {
         const result = [];
         result[0] = await axios.get('http://localhost:3000/list');

         const elContent = document.querySelector('.contentlist');
         elContent.innerHTML = `${result[0].data.prodact}`;
   });
}

init();

// лвл 1
// + верстаєте сторінку, на сторінці має бути список товарів.
// + інтегруєте верстку в єкспрес. Тобто сттатичні файли мають бути в паблік, хтмл має бути в едж і все це має впацювати
// лвл 2
// + список товарів та їх атрибути написані в масиві.
// + верства має генеруватись на основі цього списку
// лвл 3
// - сторінка на місці де маються бути товари, відпочатку не має товарів, там крутиться прелоадер
// - аякс запиттом, ропимо запит на НАШ сервер (на перний роут коттрий ви зробитте), той роут віддает список ттоварів у JSON, і з цього ФРОНТОВИЙ жс вже будує список товарів
// лвл 4
//  до всього вище
// - має бутти сторінка для кожного товару (подумати а не тупо 100 сторінок кробити)
// - коджен товар у списку на сторінці має мати лінк на сторінку відповідного товару