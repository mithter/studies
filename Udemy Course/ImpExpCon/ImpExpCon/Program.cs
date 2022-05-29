namespace Conversions // I am writing this code from memory
{
    class Program
    {
        static void Main(string[] args)
        {
            string s = "1234";
            int i = Convert.ToInt32(s);
            Console.WriteLine(i);
            try
            {
                string s1 = "1234";
                int i1 = Convert.ToByte(s1);
                Console.WriteLine(i1);
            }
            catch (Exception)
            {
                Console.WriteLine("System overflow.");
            }
           
        }
    }
}