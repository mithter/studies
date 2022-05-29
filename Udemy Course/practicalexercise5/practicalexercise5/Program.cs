using System;

namespace practicalexercise
{
    public class Program
    {
        static void Main(string[] args)
        {
            for (int i = 0; i < 10; i--)
            {
                int speed;
                int speedlimit;
                Console.WriteLine("Enter the speed limit: ");
                speedlimit = Convert.ToInt32(Console.ReadLine());
                Console.WriteLine("Enter the speed: ");
                speed = Convert.ToInt32(Console.ReadLine());

                if (speed < speedlimit)
                {
                    Console.WriteLine("Your speed is okay.");
                }
                else
                {
                    const int mphoverspeedlimit = 5;
                    int demerit = (speed - speedlimit) / mphoverspeedlimit;
                    Console.WriteLine("Your points are: {0}", demerit);
                    if (demerit > 12)
                    {
                        Console.WriteLine("Your license is suspended.");
                    }
                    else
                    {
                        Console.WriteLine("Your license is not suspended.");
                    }


                }
            }
        }
    }

}
