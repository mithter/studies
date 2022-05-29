namespace Operators
{
    class Program
    {
        static void Main(string[]args)
        {
            var a = 1;
            var b = 2;
            var c = 3;
            Console.WriteLine(a < b || b < a);
            Console.WriteLine(a < b && b < a);
            Console.WriteLine((a + b) * c);
            Console.WriteLine(!(a < b && b < a));
            // Underneath is practice for question I got wrong in the test
            int i = 1000;
            byte by = (byte)i;
            Console.WriteLine(by);
            // Before I thought that any number over 255 assigned
            // a byte data type would overflow. This is wrong.
            // Anytime when assigning a data type, anything following
            // the assignment operator has got jive or it won't copile

            byte number = 255;
            number += 2;
            Console.WriteLine(number);
        }
    }
}
