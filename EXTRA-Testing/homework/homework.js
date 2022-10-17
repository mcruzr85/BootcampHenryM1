const layout = [
    [{type: 'VIP', booked: false}, {type: 'VIP', booked: true}, {type: 'VIP', booked: true}, {type: 'VIP', booked: false}],
    [{type: 'NORMAL', booked: false}, {type: 'VIP', booked: true}, {type: 'VIP', booked: false}, {type: 'NORMAL', booked: false}],
    [{type: 'NORMAL', booked: false}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: false}],
    [{type: 'ECONOMIC', booked: true}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: true}, {type: 'ECONOMIC', booked: false}],
    [{type: 'ECONOMIC', booked: false}, {type: 'ECONOMIC', booked: true}, {type: 'ECONOMIC', booked: false}, {type: 'ECONOMIC', booked: false}]
  ];

function verificarFila(str){
  const cantRows = layout.length;  //cantidad real de filas del layout
  const strAscii = str.charCodeAt();
  const ultimaFila = String.fromCodePoint(cantRows + 64);

       if(str === '') throw new TypeError('Please enter a row');
       else if(str.length > 1) throw new TypeError('Please enter a letter not a word');
       else if((strAscii < 65)||(strAscii > 90)) throw new TypeError('Please enter a capital letter');
       else if(strAscii - 64 > cantRows) return `The row ${str} does not exists. You should choose a row from A to ${ultimaFila}`;
   }

function checkSeatStatus(row, number) {
    if(typeof row !== 'string') throw new TypeError('First parameter is not a string');
    if(typeof number !== 'number') throw new TypeError('Second parameter is not a number');

    const myRowNumber = getRowNumber(row);
    verificarFila(row);

      return (layout[myRowNumber][number].booked);
  }

 

  function getRowNumber(row){
    return  row.charCodeAt() - 65;
  }


  function book (row, number){
    const isNotPossible = checkSeatStatus(row, number);
    if(isNotPossible){
         return 'Seat in ' + row + number + ' is already booked';
        
    }else{  
      const fila = getRowNumber(row);      
      layout[fila][number].booked = true;
         return 'Seat in ' + row + number + ' successfully booked';
    }
}

function resume(){
  const cantAsientos = 
}


module.exports = {
    checkSeatStatus,
    getRowNumber,
    book,
    verificarFila,
    resume,
};