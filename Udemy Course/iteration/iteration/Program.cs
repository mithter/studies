using System;

namespace iteration
{
    public class loops
    {
        public static void Main(string[] args)
        {
          while(true)
            {
                Console.Write("Write your name: ");
                var input = Console.ReadLine();
                if (String.IsNullOrEmpty(input))
                {
                    Console.WriteLine("Wrong input");
                    continue;
                }

                else if (input == "stop")
                {
                    break;
                }
                else
                {
                    Console.WriteLine("@Echo:" + input);
                }
            }
        }
    }
}