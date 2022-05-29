using System;

    namespace exercicises
{
    public class Validation
    {
        static void Main(string[] args)
        {
            var number = 8;
            Console.WriteLine("Please enter a number between 1-10.");
            Console.WriteLine("You entered: " + number + ".");
            if (number == 7)
            {  
                Console.WriteLine("Valid.");
            }
            else
            {
                Console.WriteLine("Invalid.");
            }

        }
    }
}