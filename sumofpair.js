function data(temparray,sum)
{
    const tempdata=[]
    for(let i=0;i<temparray.length;i++)
    {
        for(let j=i+1;j<temparray.length;j++)
        {
            if(temparray[i]+temparray[j]===sum)
            {
                tempdata.push(temparray[i])
                tempdata.push(temparray[j])
            }
        }
    }
    console.log(tempdata)
    return tempdata;
}
const array=[ 3, 5, 5, 8, 11, 1, -1, 6 ]
console.log(data(array,13))