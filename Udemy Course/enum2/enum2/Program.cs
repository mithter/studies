using System;

namespace enumy
{
    public class Program
    {
        static void Main(string[] args)
        {
            var season = Season.Summer;

            switch (season)
            {
                case Season.Autumn:
                case Season.Summer:
                    Console.WriteLine("It's a perfect time to go to the beach");
                    break;

                default:
                    Console.WriteLine("I don't understand that season!");
                    break;


            }
        }
        
    }
}