using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ArrayGame;

namespace ArrayGame
{
    class dialogue
    {
        public static void combatDialogue()
        {
            Console.Clear();
            Console.WriteLine("A shadowy figure approaches");
            System.Threading.Thread.Sleep(1000);
            Console.WriteLine("The figure throws off his cloak...");
            Console.WriteLine("He says: Prepare to fight me...");
            System.Threading.Thread.Sleep(1000);
            Console.WriteLine("Press any key to continue...");
            Console.ReadKey();

        }
        public static void options()
        {
            Console.WriteLine("What are you going to do?");
            Console.WriteLine();
            Console.WriteLine("1. Attack him");
            Console.WriteLine("2. Run away");

        }

        public static void endWinText()
        {
            Console.Clear();
            Console.WriteLine("Your enemy is defeated..");
            Console.WriteLine("You look at his guts on the ground and smile to yourself.");
            Console.WriteLine();
            Console.WriteLine("Press any key to exit.");


        }
        public static void endLoseText()
        {
            Console.Clear();
            Console.WriteLine("You stare up as your opponent takes one more strike at you.");
            Console.WriteLine("You die.");
            Console.WriteLine();
            Console.WriteLine("Press any key to exit.");
        }
    }
}
