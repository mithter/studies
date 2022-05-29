namespace Exceptions
{
    class Program
    {
        static void Main(string[] args)
        {
            

            try
            {
                var i = "2500";
                var b = Convert.ToInt32(i);
                Console.WriteLine(b);
            }
            catch (Exception)
            {
                Console.WriteLine("Exception Handled. Data Overlow");
            }
        }
    }
}