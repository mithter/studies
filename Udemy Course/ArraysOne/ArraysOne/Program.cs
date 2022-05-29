namespace Arraysone

{
    public class Program
    {
        static void Main(string [] args)
        {
            var numbers = new int[3];
            numbers[1] = 5;
            Console.WriteLine(numbers[1]);

            var names = new string[3] { "George", "Greg", "Meredith" };
            Console.WriteLine(names[1]);
        }
    }
}