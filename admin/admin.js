const data = [
    { category: "상의", brand: 'Supreme', gender: 'A', product: '슈프림 박스로고 후드티', price: '390,000' },
    { category: "하의", brand: 'DIESEL', gender: 'F', product: '디젤 트랙 팬츠', price: '188,000' },
    { category: "신발", brand: 'Nike', gender: 'M', product: '에어포스 1', price: '137,000' },
    { category: "패션잡화", brand: 'Music&Goods', gender:'A', product: '빵빵이 키링', price: '29,000' },
    // ...
];

const dataTable = document.getElementById('data-table')
const date = document.getElementById('date')
const checkAll = document.getElementById('checkAll')
const deletBtn = document.getElementById('delete_btn')

date.innerHTML = `${now()}` 
checkAll.addEventListener("click", selectAll)         