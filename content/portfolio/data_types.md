+++
author = "Nik Stern"
title = "Data Types"
date = "2020"
description = "Data Types in C"
tags = [
    "C",
]
+++

# Introduction

In this segment we will discuss:

* the different types of variables we can use in our program
* how to create and use them

This will allow us to create programs with a wide variety of calculation options.

# What data types does C have?

C has 4 primary basic data types:

* int
* float
* double
* char

## int

int is short for integer, and basically means a number that has no fractional component, also known as a whole number.

The printf format specifier for int is %d

### Examples of int values

```plaintext
ints:
    -5
    0
    3
    30000
    -23456
not ints:
    "seven"    
    seven
    5.25
```

It is important to keep in mind that while "seven" represents a whole number to us, the compiler is expecting numbers to be in a numerical format.

Furthermore, you can assign fractional numbers to ints, however they will immediately lose all of their fractional component. C does not round these numbers.

```c
int my_gpa = 3.99999; // Will be stored as 3 when printed, the .9999 is not stored anywhere and is completely lost.
```

### Simple int Usage Examples

```c
int my_computers = 2;
int my_keyboards = 1;
printf("I have %d computers and %d keyboards\n", my_computers, my_keyboards);
printf("Oh no I broke a computer!\n");
my_computer = my_computer - 1;
printf("I now have %d computers\n", my_computer);
```

```c
int gopher_population = 7;
printf("The gopher population is currently %d\n", gopher_population);
printf("Half of the population is female.\n");
int female_gophers = gopher_population / 2; // // is used for comments but in an expression, / is divide.
// Because this an int, the value of this calculation will be 3
printf("There are %d female gophers\n", female_gophers);
printf("A new female gopher has joined the group\n");
female_gophers = female_gophers + 1;
printf("There are now %d female gophers\n", female_gophers);
```

## float

A number with a fractional component up to a certain precision dependent on the machine.

The printf format specifier for float is %f

### Examples of float values:

```plaintext
floats:
    0.01
    3.5
    -12.75
    12.00
    
not floats:
    "seven"
    seven
```

Floats can store whole numbers as well, although it is possible for there to be slight accuracy errors in their representation. If you are sure that you are only going to be working with whole numbers, it is better to use ints.

### Simple Float Usage

```c
float my_quiz_grade = 0.75;
float my_homework_grade = 1.0;
float my_test_grade = 0.875;
printf("I have a %f quiz grade, a %f HW grade, and a %f grade on my tests\n", my_quiz_grade, my_homework_grade, my_test_grade);
```

```c
float price_of_bean = 3.45;
float bean_discount = 0.50;
float discounted_bean_price = price_of_bean * bean_discount; // Putting a * in the middle of two values will multiply them
printf("I saw some beans in the market for %f\n"); // We will talk about formatting this nicer in a later segment.
printf("But then I noticed I had a coupon in my pocket for half off beans.\n");
printf("This meant that beans only cost %f\n", discounted_bean_price);
int amount_of_beans = 5;
printf("I quickly decided to buy %d beans.\n", amount_of_beans);
float total_price = discounted_bean_price * amount_of_beans; // Notice that we can use two different data types in the same expression.
// Here discounted_bean_price is a float, whereas amount_of_beans is an int.
// Because floats are larger in bit size than ints, the result becomes a float.
printf("This cost me a total of %f\n", total_price);
float potential_amount = price_of_bean * amount_of_beans;
float amount_saved = potential_amount - total_price;
printf("But I saved %f. So I think it was a good deal to buy %d.\n", amount_saved, amount_of_beans);
// Notice here I am printing both a float and an int in the same print statement
```

Notice that there is a lot going on here, but through the use of explanatory print statements and good variable names, it is pretty easy to follow.

A common problem for students is using little comments, print statements, and unhelpful variable names. This contributes to making it harder for them to find problems in their programs.

Another tip I would recommend is to type out and run only a couple lines of a long program at a time. This will catch errors early, rather than you being faced with dozens of them after typing out the whole program.

## double

A number with a fractional component up to double the precision of a float.

The printf format specifier for double is %lf

### Examples of double values:

```plaintext
doubles:
    0.01
    3.5
    -12.75
    12.00
    
not doubles:
    "seven"
    seven
```

### Simple Double Usage:

```c
double size_of_wall_meters = 13.56433; 
printf("I have a wall that is %lf meters long.\n", size_of_wall_meters);
printf("But how many centimeters is that?"); 
double centimeter_conversion = 100.00;
double size_of_wall_cm = size_of_wall_meters * centimeter_conversion;
printf("The wall is %lf cm long\n", size_of_wall_cm);
```

```c
double height_of_triangle = 0.65432;
double base_of_triangle = 0.43;
double area_of_triangle = 0.5 * base_of_triangle * height_of_triangle;
printf("I have a triangle with an area of %lf.\n", area_of_triangle);
```

## char

Capable of holding one character, although also can store a small range of numbers and can have math operations performed on it.

The printf format specifier for char is %c

### Examples of char values:

```plaintext
chars:
    'a'
    '1'
    '?'
    '\\' Backslashed characters typically need to be written as two characters, when they are really one. This is the representation of 1 backslash
    '\n' This is a new line
    '\'' This is a single quote '
    23
    2
    0
not chars:
    'aa'
    "a"
    "0"
    '\'
    19339209320
```

## Double Quotes versus Single Quotes

The first important note when dealing with characters is that there is a difference between using double quotes " and single quotes in C.

When you are assigning to a char variable, you need to use single quotes.

Correct:

```c
char my_letter = 'A';
printf("My letter is %c\n", my_letter);
```

Output:

```plaintext
My letter is A
```

Incorrect:

```c
char my_letter = "A";
printf("My letter is %c\n", my_letter);
```

Output:

```plaintext
My letter is vocstartsoft:~/environment $ gcc hello.c
hello.c: In function ‘main’:
hello.c:4:18: warning: initialization makes integer from pointer without a cast [-Wint-conversion]
 char my_letter = "A";
                  ^~~
vocstartsoft:~/environment $ ./a.out
My letter is 
vocstartsoft:~/environment $ 
```

Even though it just gives a warning, this makes the output of the program completely broken.

While a single quoted character is a single char, a double. quoted character is a string and take up two chars of space. I will explain why this is the case when we learn about strings. Because a char variable cannot store two chars of space, a compiler error is thrown.

We will learn about making and using string variables in a subsequent chapter. Until then, follow these rules for single quotes versus double quotes:

* Only use double quotes when a function (such as printf) requires a string.
* Use single quotes for all expressions.

## How do characters work?

Remember, everything in C needs to be translated into binary signals of 1s and 0s. A character such as 'a' needs to be translated into a numerical equivalent as well.

In order to accomplish this C uses something called the ASCII table. This is a standard sequencing of displayable characters for a computer. Take a look at it at the following link:

<http://www.asciitable.com>

When you store into a char variable in C, what is actually stored is not what is in the single