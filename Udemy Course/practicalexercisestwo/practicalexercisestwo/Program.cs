using System;

namespace exercisetwo
{
    public class Minmax
    {
        static void Main(string[] args)
        {
            int a;
            int b;
            int min;
            int max;

            Console.WriteLine("Enter a number...");
            a = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter another number...");
            b = Convert.ToInt32(Console.ReadLine());

            if (a > b)
            {
                Console.WriteLine("Using if-else...");
                Console.WriteLine("Min value: {0}", b);
                Console.WriteLine("Max value: {0}", a);
            }
            else
            {
                Console.WriteLine("Using if-else...");
                Console.WriteLine("Min value: {0}", a);
                Console.WriteLine("Max value: {0}", b);
            }

            max = (a > b) ? a : b;
            min = (b > a) ? a : b;

            Console.WriteLine("Using ternary operators...");
            Console.WriteLine("Min value: {0}", min);
            Console.WriteLine("Max value: {0}", max);


        }
    }
}