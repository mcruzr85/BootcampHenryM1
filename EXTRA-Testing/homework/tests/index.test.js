

const {
    checkSeatStatus, 
    getRowNumber, 
    book 
} = require("../homework");

describe('checkSeatStatus', ()=>{
    it('should be a function call checkSeatStatus', () => {
        expect(typeof checkSeatStatus).toBe('function');
      }); 

    it('should throw a TypeError if first parameter is not a strings', () => {
        expect(()=>{checkSeatStatus(2, 2)}).toThrow('First parameter is not a string');
      });
    it('should throw a TypeError if second parameter is not a number', () => {
        //expect(checkSeatStatus('hola', "aaa")).toThrow('Second parameter is not a number');
         expect(()=>{checkSeatStatus('hola', "aaa")}).toThrow('Second parameter is not a number');
      });
      it('should return true if the seat defined by row and column is booked', ()=>{
        expect(checkSeatStatus('A', 1)).toBe(true);
      });
      it('should return false if the seat defined by row and column is not booked', ()=>{
        expect(checkSeatStatus('E', 3)).toBe(false);
      });
});

describe('getRowNumber', ()=>{
    it('should be a function call getRowNumber', ()=>{
        expect(typeof getRowNumber).toBe('function');
      });

    it('should return 0 if the letter is an A', ()=>{
        expect(getRowNumber('A')).toBe(0);
      });

    it('should return 2 if the letter is a C', ()=>{
        expect(getRowNumber('C')).toBe(2);
      });
});

describe('book', ()=>{
    it('should return a successfull mesenger if was possible to book a seat', ()=>{
        expect(book('E',3)).toBe('Seat in E3 successfully booked');
    });
    it('should return an unsuccessfull mesenger if was not possible to book a seat', ()=>{
        expect(book('A',1)).toBe('Seat in A1 is already booked');
    });
});





  


 