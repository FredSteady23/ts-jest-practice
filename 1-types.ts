// const str:string='Hello';

// console.log(str);

// //Boolean
// const isFetching:boolean = true;
// const isLoading:boolean = false;

// //Number
// const int:number = 42;
// const float:number = 4.2;
// const num:number = 3e10;

// //String
// const message: string = 'Hello TypeScript';

// //Array
// const numberArray:number[] = [1, 2, 2, 3, 5, 8, 13];
// const numberArray2: Array<number> = [1, 2, 2, 3, 5, 8, 13]; // generic

// const words: string[] = ['hello', 'typescript'];

// // Tuple
// const contact: [string, number] = ['Sagyndyk', 123456789];

// //Any
// let variable: any = 42;
// variable = 'Hello';
// variable = [];

// // Если функция ниче не возвращает тогда пишем void
// // ===
// function sayMyName(name:string): void{
//     console.log(name);
// }
// sayMyName('Sagyndyk');

// //Never
// function throwError(message:string):never{
//     throw new Error (message);
// }

// function infinite():never{
//     while(true){
//     }
// }

// //Type //Именнованные типы 
// type Login = string;
// const login: Login = 'login';

// type ID = string | number;
// const id1:ID = 1234;
// const id2:ID = '1234';

// // Если надо проверить что возвращает
// type SomeType = string | null | undefined;
