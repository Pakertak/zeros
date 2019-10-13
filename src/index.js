module.exports = function zeros(expression) {
  // your solution
  let array=expression.split('*');
  let array1=[];
  let array2=[];
  let k1=0;
  let k2=0;
  let count2=0;
  let count5=0;
  let n = array.length;
  let koef=1;
  for(let i=0;i<n;i++)
  {
    if(array[i].includes('!!')) 
    {
      array[i]=array[i].replace('!!','');
      array2[k2]=array[i];
      k2++; 
    }
    else
    {
      array[i]=array[i].replace('!','');
      array1[k1]=array[i];
      k1++;
       
    }
  } 
  for(let i=0;i<k1;i++)
  {
    while(array1[i]>0){
      while(array1[i]%(2**koef)==0)
        {
          count2++;
          koef++;
        }
      koef=1;
      while(array1[i]%(5**koef)==0)
      {
        count5++;
        koef++;
      }
      koef=1;
      array1[i]--;
    }
  }
  
  for(let i=0;i<k2;i++)
  {
    while(array2[i]>0){
      while(array2[i]%(2**koef)==0)
        {
          count2++;
          koef++;
        }
      koef=1;
      while(array2[i]%(5**koef)==0)
      {
        count5++;
        koef++;
      }
      koef=1;
      array2[i]-=2;
    }
  }
  return Math.min(count2,count5);
}
