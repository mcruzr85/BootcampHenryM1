

const {
    checkSeatStatus, 
    getRowNumber, 
    book,
    verificarFila,
    resume
} = require("../homework");

describe('verificarFila', ()=>{
   it('Should throw a TypeError if the user types an empty string', ()=>{
    expect(()=>{verificarFila('')}).toThrow(new TypeError('Please enter a row'));
   });
   it('Should throw a TypeError if the user types a word', ()=>{
    expect(()=>{verificarFila('hola')}).toThrow(new TypeError('Please enter a letter not a word'));
   });
   it('Should throw a TypeError if the parameter is not a capital letter', ()=>{
    expect(()=>{verificarFila('h')}).toThrow(new TypeError('Please enter a capital letter'));
   });
   it('Should show the range of corrects letters if the row especificated does not exists', ()=>{
    expect(verificarFila('X')).toBe('The row X does not exists. You should choose a row from A to E');
   });
});

describe('checkSeatStatus', ()=>{
    it('should be a function call checkSeatStatus', () => {
        expect(typeof checkSeatStatus).toBe('function');
      }); 

    it('should throw a TypeError if first parameter is not a strings', () => {
        expect(()=>{checkSeatStatus(2, 2)}).toThrow(new TypeError('First parameter is not a string'));
      });
    it('should throw a TypeError if second parameter is not a number', () => {
        //expect(checkSeatStatus('hola', "aaa")).toThrow('Second parameter is not a number');
         expect(()=>{checkSeatStatus('hola', "aaa")}).toThrow(new TypeError('Second parameter is not a number'));
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
        expect(checkSeatStatus('E',3)).toBe(false);
        expect(book('E',3)).toBe('Seat in E3 successfully booked');
        expect(checkSeatStatus('E',3)).toBe(true);
    });
    it('should return an unsuccessfull mesenger if was not possible to book a seat', ()=>{
        expect(book('A',1)).toBe('Seat in A1 is already booked');
    });
});

describe('', ()=>{
  it('should show a resume of the layout', ()=>{
     expect(resume()).toBe('xx');
  });
});





  


 