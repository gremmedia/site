---
title: "Addition, Subtraction, Multiplication, and Division"
description: "Understanding the basic arithmetic operators in C."
weight: 1
content_sections:
  - type: text
    content: |
      C provides several basic arithmetic operators that you can use to perform calculations:

      - `+` for addition
      - `-` for subtraction
      - `*` for multiplication
      - `/` for division

      Let's look at some examples:

  - type: code
    language: c
    code: |
      int a = 10;
      int b = 5;
      
      int sum = a + b;        // Addition
      int difference = a - b; // Subtraction
      int product = a * b;    // Multiplication
      int quotient = a / b;   // Division
      
      printf("Sum: %d\n", sum);
      printf("Difference: %d\n", difference);
      printf("Product: %d\n", product);
      printf("Quotient: %d\n", quotient);

  - type: text
    content: |
      It's important to note that when dividing two integers, the result will also be an integer. Any fractional part is truncated (not rounded).

  - type: assessment
    title: "Quick Check"
    questions:
      - type: multiple-choice
        question: "What is the result of 7 / 3 in C?"
        options:
          - "2"
          - "2.33"
          - "3"
          - "2.5"
      - type: short-answer
        question: "Explain why integer division might give unexpected results when working with fractions."
---