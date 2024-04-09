# Encoding challenge

## What does this code do?

> - This code defines several functions to process an encoded message stored in a text file.
> - The **extractNumbers** function reads the file, extracts the numbers from each line, and stores them in an array.
> - The **rearrangeIntoStaircase** function takes the extracted numbers, sorts them, and arranges them into a **staircase-like structure**, where each step has one more number than the previous step.
> - The **returnLast** function extracts the last number from each step of the staircase.
> - The **decode** function uses these extracted numbers to retrieve corresponding words from the message file and constructs a decoded message.
> - Finally, the **writeToFile** function writes the decoded message to a new text file named "decoded.txt".
> - Overall, the code reads an encoded message, decodes it based on the provided numbers, and saves the decoded message to a file.
