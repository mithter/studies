using System;

   namespace Constants
{
    class Conandvar
    {
         static void Main(string[] args)
        {
            try
            {
                var number = "1234";
                int i = Convert.ToInt32(number);
                Console.WriteLine(i);
                var letter = 12345;
                var u = Convert.ToString(letter);
                Console.WriteLine(letter);
            }
            catch (Exception)
            {
            }

        }
    }
}
