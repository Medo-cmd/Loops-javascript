
// Number 1 from 10 to 1 using for , while & do while 


               for (let i = 10; i > 0; i--){
                  console.log(i);
               }

               let r = 10 ;
               while (r >= 1) {

                  console.log(r);
                  r-- ;
                  
               }


               let x = 10 ;
               do {
               console.log(x);
                  x-- ;
               } while (x >= 1);

// --------------------------------the end---------------

// Number 2 multipication table for a number 


         let w = 1 ;
         do {
            console.log(w+' x 6 = '+ (w*6) );
            w++ ;
            
         } while (w<= 10) ;

// --------------the end ------------------


// Nmber 3 the sum of the array 



         let arr = [10,20,30,40,50,60] ;    // sum = 210
         let sum = 0;
         for (let v of arr) {
            sum = sum +v ;
            
         }
         console.log(sum); 

// --------------------the end ..........................

 //Number 4 find the factorical of a Number 


         let o = 10 ;
         for ( let l = o-1 ;l> 0 ; l--){
         
            o = o *l ;
         }

         console.log(o) ; 

//------------the End of ---------------------------------------------

// Number 5 reserve the digits of a number 

            let rev = 0;
            let num = 123456;
            
            rev = Number(String(num).split('').reverse().join(''));
            
            console.log("Reverse number : "+rev);

  //--------------------the end of -----------------------

  // Number 6 the sum of digit Numbers 
 
 
 
            var num1 = 123;
            var copyNum = num1;
            var total = 0;

            //Add Each digit from last digit.
            while(copyNum != 0)
            {
            total += copyNum % 10;
            copyNum = Math.floor(copyNum / 10);
            }
            // result
            console.log("The sum of digit " +num1 +" is " +total);

//------------------the End of ----------------------

 
//  Number 7      Prime Number 



               var num2 = 7;
               var i = 1;
               var count = 0;

               for(i=1; i<=num2; i++)
               {
               if(num2 % i == 0)
               count++;
               }

               if(count == 2)
               console.log(num2 +" is a prime number");
               else
               console.log(num2 +" is not a prime number");
 
 
 //-------------the End of ----------------



 // Number 8 multiplie of 5 between 5 & 100 
 
 
 
            let q = 20 ;
            
            
            do {
               console.log(q+' x 5 = '+ (q*5) );
               q++ ;
               
            } while (q<= 100) ;


//------------the end ------------------------
