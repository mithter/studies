using System;
using ArrayGame;


namespace arrayGame
{
    class Program
    {
        static void Main(string[] args)
        {
            // int playerMana = 10;
            // int enemyMana = 10;
            // int playerHitpoints = 25;
            // int enemyHitpoints;
            int playerAttack;
            int enemyAttack;

            Random rand = new Random();
            int enemyChanceToHit;
            int playerChanceToHit;

            Console.WriteLine("Press any key to begin combat!");
            Console.ReadKey();
            dialogue.combatDialogue();

            for (int i = 0; i < 10; i++)
            {
                playerChanceToHit = rand.Next(1, 5);
                enemyChanceToHit = rand.Next(1, 5);
                playerAttack = rand.Next(1, 5);
                enemyAttack = rand.Next(1, 5);


                dialogue.options();

                int input = Convert.ToInt32(Console.ReadLine());

                if (input == 1)
                {

                }
            }
        }


    }
}