using System;

namespace practiceexercises
{
    /*public class program1
    {
        // Solved from memory
        static void Main(string [] args)
        {
            int numbers = 0;


            for (int i = 0; i < 100; i++)
            {
               if (i % 3 == 0)
                {
                    numbers++;
                }
               
            }
            Console.WriteLine(numbers);
        }
    }
    */
    /* public class program2
     {
         static void Main(string[] args)
         {

             var sum = 0;
             while (true)
             {
                 Console.WriteLine("Enter a number or 'ok' to exit") ;
                 var input = Console.ReadLine();

                 if (input.ToLower() == "ok")
                 {
                     break;
                 }
                 else
                 {
                     sum += Convert.ToInt32(input);
                 }

                 Console.WriteLine("The sum of all your numbers is " + sum);
             }



         }
     }
    */

    /* public class program3
    {
         static void Main(string[] args)
         {
             Console.WriteLine("Type a number");
             var number = Convert.ToInt32(Console.ReadLine());

             var factorial = number;
             for (int i = 1; i < number; i++)
             {
                 factorial *= i;

             }

             Console.WriteLine("{0}! = {1}", number, factorial);

         }
     }
    */

    public class program4
    {
        static void Main(string[] args)
        {
            Random Random = new Random();
            var randomnumber = Random.Next(1, 10);
            Console.WriteLine("Guess a number between 1 and 10..");
            for (int i = 0; i <= 4; i++)
            {
                
                var input = Convert.ToInt32(Console.ReadLine());
                if (input == randomnumber)
                {
                    Console.WriteLine("Great job!");
                    break;
                }
                else if (input != randomnumber && i != 4)
                {
                    Console.WriteLine("Try again.");
                }
                else
                {
                    Console.WriteLine("You lose!");
                }
            }

        }
    }
}