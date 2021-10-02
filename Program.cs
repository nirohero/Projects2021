using System;

namespace ArrSum
{
    class Program
    {
        static void Main(string[] args)
        {
            int [] arr1 = {1,3,5};//creating an interger array
            int sum = 0;

            for(int i =0; i <arr1.Length;i++){

                sum = sum+arr1[i];
            }
            Console.WriteLine(sum);
        }
    }
}
