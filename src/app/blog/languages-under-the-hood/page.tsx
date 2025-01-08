
export default function LangaguesUnderTheHoodPage()
{
    return (
        <main>
            <h1>/* Languages Under The Hood */</h1>
            <p>Read Time: 5 minutes</p>
            <h2>// Introduction</h2>
            <p>
                If you are a programmer, then you know what a programming language is. But did you know that there are two different 
                types of programming languages, and each type of language has its pros and cons? In this article, we will begin to 
                demystify how programming languages are created and how they work behind the scenes.
            </p>

            <h2>// What is a Programming Langauge</h2>
            <p>
                If you are unfamiliar with a programming language, it is a tool that allows programmers to write software quickly and efficiently. 
                There are two categories in which programming languages can be classified. The first is high-level, and the second is low-level. 
                Higher-level programming languages are designed to make programming easier for people to understand and compose. Examples of this 
                category include Python, Java, JavaScript, Ruby, C#, and PHP. The other type is lower-level languages. These languages are meant to 
                provide minimal abstraction from the computer's hardware. In other words, lower-level languages are very close to machine code and 
                allow complete control over the memory and computer registers. Examples of lower-level languages include C and Assembly.
            </p>
            <p>
                Apart from the two categories, there are also two types of languages: compiled and interpreted. To explain each of these, I will use a 
                translator as an example. A person is getting ready to give a speech. However, he discovers that their audience only understands Italian. Knowing this, he hires a translator. So, he provides the translator with his pre-written speech, and the translator translates 
                the speech into Italian and performs it in front of the audience. This would be an example of a compiled programming language. Before the code 
                is executed, it is translated into a language the computer can understand. Therefore, compiled languages will perform faster than their counterparts.
                C, C++, Go, and Rust are examples of compiled languages.
            </p>
            <p>
                Let's go back to the translator example, but this time, the written speech is not given to the translator. The person giving the speech steps up 
                to the podium and begins talking to the Italian audience in English. As he is talking, the translator speaks to the audience in Italian while 
                performing his speech. However, the translator always has a few words behind the speech giver. This is an example of an interpreted language. 
                Interpreted languages tell the computer what to execute while reading the script. Because of this, interpreted languages are slower than compiled 
                languages. Examples of interpreted languages include Python, Ruby, PHP, and JavaScript.
            </p>

            <h2>// The Anatomy of a Programming Langauge</h2>
            <p>
                Every programming language has syntax or grammar, which defines the structure of the language and what is considered valid code. It also has 
                some kind of semantics, or how the syntax translates into something meaningful. Most modern programming languages include higher-level constructs 
                such as variables, loops, and functions. Each of these constructs streamlines the process of developers writing code.
            </p>

            <h2>// Building Blocks: How Programming Languages Are Created</h2>
            <p>
                Before the language can be created, a purpose for the language is essential. For example, will it be a scripting language fast for debugging, a 
                language for web development, or a systems programming language? After this has been decided, the language's grammar must also be determined. 
                How will variables be defined in the language? Will it be a statically or dynamically typed language? Will the language support object-oriented 
                programming patterns, or will it be functional? Once these have been decided, the first step of the programming language is a "lexer."
            </p>
            <p>
                What is a lexer? A lexer is a system of breaking a string into a series of tokens. These tokens can be used in the parsing process or the parser.
                 What is the parser? The parser structures the tokens into an abstract syntax tree. This tree will help the code generation or the interpreter 
                 decide how to function. In short, the code generation will follow the abstract syntax tree and create the proper assembly to achieve the same 
                 action functionality. On the other hand, the interpreter will follow the code line by line, executing the same code using a higher level of 
                 language.
            </p>
            <p>
                Let's talk about compilation. The compilation process is the action of converting higher-level source code into machine code. In most modern compilers,
                there is also an optimization stage. In short, this will take poorly written code and change it to run faster. For example, if we have a for loop that
                loops 1,000 times and adds up a number. The optimization stage may remove the for loop and generate a line of assembly with the number already added.
                This is an example of improving performance before the code is run.
            </p>

            <h2>// Evolution of Programming Langauges</h2>
            <p>
                Programming languages have evolved. The first Assembly language was created by Kathleen Booth in 1947 on the Electronic Delay Storage Automatic 
                Calculator (EDSAC). Then, the first compiler was written in 1952 called the "A-0 system." Grace Hopper developed A-0 system. Eventually, in 1954,
                Fortran (FORmula TRANslation) was the first high-level language. The first language that collected garbage was Lisp, invented in 1958. It wouldn't 
                be until 1972 when Dennis Ritchie created the C programming language at Bell Laboratories. C has been known as "the language that makes the world
                go round." C was created to streamline the process of creating the Unix operating system. Another popular programming language would be born in 
                1991, and it's called Python. Designed by Guido Van Rossum as a procedural language with object-oriented patterns.
            </p>

            <h2>// Future of Programming Langauges</h2>
            <p>
                As time progressed, languages have become more accessible and powerful. However, there is an emerging trend of AI-assisted programming and quantum 
                computing languages. Personally, it's hard to say what programming will be like in a decade. Therefore, only time will tell.
            </p>

            <h2>// Conclusion</h2>
            <p>
                Let's recap. There are two different categories and two different types of programming languages. High and low-level languages and compiled and
                interpreted languages. In short, compilers and interpreters are complex programs that help developers create other programs. Research your favorite 
                language's design and functionality if this topic interests you.
            </p>
        </main>
    );
}
