using System;

namespace ProceduralProgramming
{
    public class Exercises
    {
        static void Main(string[] args)
        {
            var Path = @"C:\Users\micha\OneDrive\Desktop\randomwords.txt";
            var wordcount = 0;
            var getWords = File.ReadAllText(Path);
            Console.WriteLine(getWords);
            var listOfWords = new List<string>();

            foreach (var word in getWords.Split(' '))
            {
                wordcount++;
                listOfWords.Add(word);
            }

            var longestWord = "";
            var longestWordLength = 0;

         
                foreach (var word in listOfWords)
                {
                    if(word.Length > longestWordLength)
                    {
                    longestWord = word;
                    longestWordLength = word.Length;
                    }
                }

            Console.WriteLine(wordcount);
            Console.WriteLine(longestWord);
        }
    }
}