const layout = [
    [{type: 'VIP', booked: false}, {type: 'VIP', booked: true}, {type: 'VIP', booked: true}, {type: 'VIP', booked: false}],
    [{type: 'NORMAL', booked: false}, {type: 'VIP', booked: true}, {type: 'VIP', booked: false}, {type: 'NORMAL', booked: false}],
    [{type: 'NORMAL', booked: false}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: false}],
    [{type: 'ECONOMIC', booked: true}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: true}, {type: 'ECONOMIC', booked: false}],
    [{type: 'ECONOMIC', booked: false}, {type: 'ECONOMIC', booked: true}, {type: 'ECONOMIC', booked: false}, {type: 'ECONOMIC', booked: false}]
  ];


function checkSeatStatus(row, number) {
    if(typeof row !== 'string') throw new TypeError('First parameter is not a string');
    if(typeof number !== 'number') throw new TypeError('Second parameter is not a number');

   const myRowNumber = getRowNumber(row);
   const cantRows = layout.length - 1;

   if(myRowNumber <= cantRows){
      return (layout[myRowNumber][number].booked);
   }
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


module.exports = {
    checkSeatStatus,
    getRowNumber,
    book,
};