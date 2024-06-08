Challenge1: Interactive Photo Gallery

>Description:
This project is an interactive photo gallery built with React and TypeScript. It includes features such as a zoom-in effect on hover, a click-to-view fullscreen image with a close button.

>Features:

Hover Zoom Effect: Images slightly zoom in when hovered.
Fullscreen View: Click on an image to view it in fullscreen.
Responsive Design: Adapts to different screen sizes.
Installation and Setup

>Prerequisites:

Make sure you have the following software installed on your machine:

Node.js
yarn

>Steps to Set Up and Run the Project:

i.Clone the Repository:

git clone https://github.com/your-username/your-repo-name.git , navigate to the folder you just cloned.

ii. Install Dependencies

yarn install

ii. Run the Development Server

yarn run dev

This will start the development server and open the application in your default browser. If it doesn't, you can open your browser and navigate to http://localhost:3000.


>Scripts:

yarn run dev: Start the development server.
yarn run build: Build the project for production.



>Troubleshooting:

Ensure you have the correct versions of Node.js and yarn installed.
Make sure all dependencies are installed by running yarn --init or yarn install.


Challenge2: Array Manipulation

>Approach:

In order to tackle this challenge I used a technic mostly used in Python called "Sliding Window" , which works more like Quick sorting by defining two pointers left and right for the subArrays and also a initial sum to be incremented throughout the iteration.

>Steps: 

1.We initialize current_sum to keep track of the sum of the current subarray, and two pointers left and right to define the subarray.

2.We iterate through the array using the right pointer.

3.For each element, we add it to the current_sum.

4.If the current_sum exceeds the target, we start subtracting elements from the left side of the subarray (by incrementing left and subtracting arr[left] from current_sum) until current_sum is less than or equal to the target.

5.If at any point current_sum becomes equal to the target, we return True since we've found a subarray that sums up to the target.

6.If we reach the end of the array and haven't found a subarray that sums up to the target, we return False.


Challenge3: String Transformation

>Approach:

In order to tackle this challenge I used a technic called "Modular Arithmetic" which takes advantage of the divisibility of numbers using modulo operator % to determine which transformation to be made on the string.

>Steps:

1.We first calculate the length of the input string using str.length.

2.We initialize an empty string transformedStr to store the transformed string.

3.We check the divisibility of the string length by 15, 3, and 5 using the modulo operator %.

4.If the length is divisible by 15:

We first reverse the string using the split(), reverse(), and join() methods.
Then, we replace each character with its ASCII code using the split(), map() with charCodeAt(0), and join(" ") methods.

5.If the length is divisible by 3 but not by 15, we simply reverse the string.

6.If the length is divisible by 5 but not by 15 or 3, we replace each character with its ASCII code.

7.If the length is not divisible by 3, 5, or 15, we return the original string.

8.Finally, we return the transformedStr.

