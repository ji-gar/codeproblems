function changeCoin(possiblearray)
{
    possiblearray.sort((a,b) => a-b);
    let current_change = 0;
    for(let i=0;i<possiblearray.length;i++)
    {
       const coin=possiblearray[i];
       if(coin>current_change+1)
       {
           return current_change+1;
       }
       current_change=current_change+coin;

    } 
    return current_change+1;  
}
console.log(changeCoin([ 5, 7, 1, 1, 2, 3, 22]));