COA Taskforce Take Home Challenge
This repository contains one project and two coding challenges.

Table of Contents

1.Challenge 1: Interactive Photo Gallery

2.Coding Challenge 1: Array Manipulation

3.Coding Challenge 2: String Transformation

-----------------------------------------------------------------------------------------------------------------------------------------------------------

Challenge 1: Interactive Photo Gallery

Description
This project is an interactive photo gallery built with React and TypeScript. It includes features such as a zoom-in effect on hover and a click-to-view fullscreen image with a close button.

Features

Hover Zoom Effect: Images slightly zoom in when hovered.
Fullscreen View: Click on an image to view it in fullscreen.
Responsive Design: Adapts to different screen sizes.
Installation and Setup

Prerequisites

Ensure you have the following software installed on your machine:
Node.js
Yarn

Steps to Set Up and Run the Project

Clone the Repository
git clone https://github.com/robsdagreat/COA-TaskForce-Challenge.git , navigate to the folder you just cloned.

Install Dependencies

yarn install

Run the Development Server

yarn run dev
This will start the development server and open the application in your default browser. If it doesn't, you can open your browser and navigate to http://localhost:3000.

Scripts

yarn run dev: Start the development server.
yarn run build: Build the project for production.

Troubleshooting

Ensure you have the correct versions of Node.js and Yarn installed.
Make sure all dependencies are installed by running yarn install.

-----------------------------------------------------------------------------------------------------------------------------------------------------------

Coding Challenge 1: Array Manipulation

Approach

To tackle this challenge, a technique commonly used in Python called "Sliding Window" is employed. This technique works similarly to Quick Sorting by defining two pointers, left and right, for the subarrays and an initial sum to be incremented throughout the iteration.

Steps

1.Initialize current_sum to keep track of the sum of the current subarray, and two pointers left and right to define the subarray.

2.Iterate through the array using the right pointer.

3.For each element, add it to the current_sum.

4.If current_sum exceeds the target, start subtracting elements from the left side of the subarray (by incrementing left and subtracting arr[left] from current_sum) until current_sum is less than or equal to the target.

5.If at any point current_sum becomes equal to the target, return True since a subarray that sums up to the target has been found.

6.If the end of the array is reached and a subarray that sums up to the target has not been found, return False.

-----------------------------------------------------------------------------------------------------------------------------------------------------------

Coding Challenge 2: String Transformation

Approach

To tackle this challenge, a technique called "Modular Arithmetic" is used. This technique takes advantage of the divisibility of numbers using the modulo operator % to determine which transformation to apply to the string.

Steps

1.Calculate the length of the input string using str.length.

2.Initialize an empty string transformedStr to store the transformed string.

3.Check the divisibility of the string length by 15, 3, and 5 using the modulo operator %.

4.If the length is divisible by 15:

Reverse the string using the split(), reverse(), and join() methods.
Replace each character with its ASCII code using split(), map(charCodeAt(0)), and join(" ") methods.

5.If the length is divisible by 3 but not by 15, simply reverse the string.

6.If the length is divisible by 5 but not by 15 or 3, replace each character with its ASCII code.

7.If the length is not divisible by 3, 5, or 15, return the original string.

8.Finally, return transformedStr.