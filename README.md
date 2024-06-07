>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Interactive Photo Gallery<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

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

-Clone the Repository:

git clone https://github.com/your-username/your-repo-name.git cd your-repo-name

-Install Dependencies

yarn install

-Run the Development Server

yarn run dev

This will start the development server and open the application in your default browser. If it doesn't, you can open your browser and navigate to http://localhost:3000.


src/
├── assets/
│   └── images/
│       ├── f1.jpg
│       ├── f2.webp
│       ├── f3.jpg
│       ├── f4.jpg
│       ├── home.webp
│       ├── w1.jpg
│       ├── w2.jpg
│       ├── w3.jpg
│       └── w4.jpg
│   ├── Gallery.tsx
│   ├── GalleryData.tsx
│   └── ImageThumbnail.tsx
│   └── ImageViewer.tsx




>Scripts:

yarn run dev: Start the development server.
yarn run build: Build the project for production.



>Troubleshooting:

Ensure you have the correct versions of Node.js and yarn installed.
Make sure all dependencies are installed by running yarn --init or yarn install.
