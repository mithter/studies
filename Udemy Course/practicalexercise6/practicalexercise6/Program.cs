using System;

namespace exercise
{
    public class Program
    {
        /// Write a program which takes a single argument from the console, computes the factorial and prints the
        /// value on the console. For example, if the user enters 5, the program should calculate 5 x 4 x 3 x 2 x 1 
        /// and display it as 5! = 120.
        static void Main(string[] args)
        {
            
            Console.Write("Enter a number to compute the factorial: ");
            var number = Convert.ToInt32(Console.ReadLine());


            var factorial = 1;
            for (int i = 1; i <= number; i++)
                factorial *= i;

            Console.WriteLine("{0}! = {1}", number, factorial);
        }
    }

}