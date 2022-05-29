namespace npttrial
{
    class Person
    {
        public string LastName;
        public string FirstName;

        public void Introduction()
        {
            LastName = "Smith";
            FirstName = "John";

            Console.WriteLine("My name is " + FirstName + " " + LastName);
        }
    }
}