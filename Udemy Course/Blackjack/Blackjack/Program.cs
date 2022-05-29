using System;

namespace Games
{
    public class dirtydice
    {
        static void Main(string[] args)
        {
            int playerRandomNum;
            int enemyRandomNum;
            int score = 0;
            int scoreEnemy = 0;

                Console.WriteLine("Press any key to roll...");
                Console.ReadKey();
                Random random = new Random();

            for (int i = 0; i < 10; i++)
            {
                playerRandomNum = random.Next(1, 7);
                Console.WriteLine("You rolled a " + playerRandomNum);
                Console.WriteLine("...");
                System.Threading.Thread.Sleep(1000);
                enemyRandomNum = random.Next(1, 7);
                Console.WriteLine("Your enemy rolled a " + enemyRandomNum);
                System.Threading.Thread.Sleep(1000);

                if (playerRandomNum == enemyRandomNum)
                {
                    Console.WriteLine();
                    Console.WriteLine("It's a draw!");
                    Console.WriteLine("....");
                    Console.WriteLine("You hear facetious cheering from people passing the alley.");
                    System.Threading.Thread.Sleep(2000);
                }
                else if (enemyRandomNum > playerRandomNum)
                {
                    Console.WriteLine();
                    scoreEnemy++;
                    Console.WriteLine("Aww man!");
                }
                else
                {
                    Console.WriteLine();
                    score++;
                    Console.WriteLine("Nice going!");
                }

                Console.WriteLine("What do you want to do next?");
                Console.WriteLine("Roll again or ambush him?");
                System.Threading.Thread.Sleep(4000);
                Console.Clear();
                Console.WriteLine("Roll: 1");
                Console.WriteLine("Ambush: 2");
                Console.WriteLine("Exit: 3");


                int selection = Convert.ToInt32(Console.ReadLine());
                if (selection == 1)
                {
                    continue;
                }
                if (selection == 2)
                {
                    Console.Clear();
                    Console.WriteLine("Random Guy: Dude you whooped that guy's butt over  dice...");
                    System.Threading.Thread.Sleep(2000);
                    Console.WriteLine("You won, technically, douche...");
                    System.Threading.Thread.Sleep(1000);
                    Console.Write("Press any key to quit");
                    Console.ReadKey();
                    return;
                    
                }
                else
                {
                    return;
                }    

            }
            Console.WriteLine("You didn't play dirty! Good job!");
            Console.WriteLine("You scored: " + score);
            Console.WriteLine("Your enemy score: " + scoreEnemy);
            System.Threading.Thread.Sleep(1000);
            Console.Write("Press any key to quit");
            Console.ReadKey();
        }
    }
}