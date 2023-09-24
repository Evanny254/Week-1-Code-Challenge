# Week-1-Code-Challenge
Welcome to Toy problems code challenge project.In this code challenge i am going to solve three code challeges namely:
1. Student Grade Calculator
2.Speed Detector
3.Net salary Calculator
# Student Grade Calculator
This Javascript program calculates the grade of a student based on their marks according to specified criteria.
The grade is determined using the following criteria:
Grade A: For marks between 80-100
Grade B: For marks between 60-79
Grade C: For marks between 50-59
Grade D: For marks between 40-49
Grade E: For marks between 0-39
Invalid Grade: For marks not defined or not within the range 0-100
# Speed Detector
The JavaScript function calculates demerit points based on a car's speed and determines whether the license should be suspended or not.
>Function
The function calculateDemeritPoints(speed) takes the speed of a car as an input and calculates demerit points based on the following criteria:

If the speed is within the speed limit (70 km/h), it prints "OK".
If the speed exceeds the speed limit, it calculates demerit points and prints "Still Ok" if within the demerit points threshold (<= 12 points). If the demerit points exceed 12, it prints "License Suspended".

>Parameters
speed: The speed of the car in kilometers per hour (km/h).
>Constants
speedLimit: The speed limit in kilometers per hour (70 km/h).
rateOfDemeritPoints: The rate of demerit points per km over the speed limit (5 points per km over the limit).

# Net Salary Calculator
This Javascript calculates the net salary based on the provided basic salary and benefits. It accounts for deductions such as NHIF, PAYEE, and NSSF.

To calculate the net salary, modify the values of basicSalary and benefits to reflect the actual salary and benefits for the employee.

Variables

basicSalary: The basic salary of the employee.
benefits: Additional benefits for the employee.
grossSalary: The total gross salary (sum of basic salary and benefits).

Deductions

NHIF Deductions
NHIF deductions are calculated based on specific salary ranges:

0 - 5,999: Deduct 150
6,000 - 7,999: Deduct 300
... and so on

PAYEE Deductions
PAYEE deductions are calculated based on specific salary ranges:

1 - 24,000: 10% of the gross salary
24,001 - 32,333: 25% of the gross salary
... and so on

NSSF Deductions
NSSF deductions are a flat 6% of the gross salary.

Net Salary Calculation

The net salary is calculated by subtracting NHIF, PAYEE, and NSSF deductions from the gross salary.