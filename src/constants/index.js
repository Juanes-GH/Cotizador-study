export const MARCAS =[
    {id: 101, nombre:'Europeo'},
    {id: 102, nombre:'Americano'},
    {id: 103, nombre:'Asiatico'},
];

const YEARMAX = new Date().getFullYear();
export const YEARS = Array.from(
    new Array(20),
    (valor, index) => YEARMAX - index
);

export const PLANES =[
    {id: 110, nombre:'Basico'},
    {id: 111, nombre:'Completo'}
];