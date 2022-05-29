using mem2.Math;

namespace mem2
{
    class Program
    {
        static void Main(string[] args)
        {
            Person john = new Person();
            john.FirstName = "John";
            john.LastName = "Smith";
            john.Intrdouce();

            Calculator calculator = new Calculator();
            var results = calculator.Add(1, 2);
            Console.WriteLine(results);
        }
    }
}
