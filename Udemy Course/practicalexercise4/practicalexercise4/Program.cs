using System;

namespace practicalexercisefour
{
    public class SpeedingProgram
    {
        static void Main(string [] args)
        {
            int speed;
            int speedlimit;

            Console.WriteLine("Please enter the posted speed limit: ");
            speedlimit = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Please enter the reported speed of the vehicle: ");
            speed = Convert.ToInt32(Console.ReadLine());


           if (speed < speedlimit)
            {
                Console.WriteLine("Okay.");
            }
            else
            {
                const int mphperdemeritpoint = 5;
                var demeritpoint = (speed - speedlimit) / mphperdemeritpoint;
                Console.WriteLine("Demerit Points {0}", demeritpoint);

                if (demeritpoint < 12)
                {
                    Console.WriteLine("{0} points. License is okay.", demeritpoint);
                }
                else
                {
                    Console.WriteLine("{0} points. License is suspended.", demeritpoint);
                }
                
            }
           

        }
    }
}