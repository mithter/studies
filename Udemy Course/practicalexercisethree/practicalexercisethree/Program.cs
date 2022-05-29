using System;

namespace exercisethree
{
    public class Program
    {
        static void Main(string[] args)
        {
            int height;
            int width;
            int min;
            int max;
            Console.WriteLine("Determing portrait or landscape for picture file...");
            Console.WriteLine("Please enter height of the image: ");
            height = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Please enter the width of the image: ");
            width = Convert.ToInt32(Console.ReadLine());

            if (height > width)
            {
                Console.WriteLine("Your picture should be printed in portrait mode.");

            }
            else
            {
                Console.WriteLine("Your picture should be printed in landscape mode.");
            }
        }
    }
}