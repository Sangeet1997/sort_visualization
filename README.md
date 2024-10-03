# Sorting Simplified

This project is an interactive sorting algorithm visualizer built using **JavaScript**, **HTML**, and **CSS**. The web app allows users to visualize several sorting algorithms and adjust the speed of visualization. Additionally, the app plays tones corresponding to the heights of the bars, adding an auditory layer to the sorting process.

## Features

- **Interactive UI**: Users can control the speed of the sorting process and reset or randomize the bars.
- **Multiple Sorting Algorithms**: The app supports several popular sorting algorithms:
  - Bubble Sort
  - Insertion Sort
  - Selection Sort
  - Shell Sort
  - Cocktail Sort
  - Counting Sort
  - Radix Sort
  - Merge Sort
  - Quick Sort
- **Auditory Feedback**: The app produces sounds based on the height of the bars being sorted, offering a unique audiovisual experience.

## Getting Started

### Prerequisites

To run the project locally, you'll need:

- A web browser (e.g., Chrome, Firefox, Safari)
- No additional dependencies are required as this is a simple web-based project.

### Installation

1. Clone the repository:

```
git clone https://github.com/yourusername/sort-visualization.git
```
   
2. Navigate to the project directory:

```
cd sort-visualization
```
3. Open the index.html file in your browser.

## Usage

 - Click on any of the sorting algorithm buttons (Bubble, Insertion, Selection, etc.) to start sorting.
 - You can adjust the interval (delay) for the sorting speed using the input box and the "Update" button.
 - The "Reset" button will randomize the bars again, allowing you to see how different sorting algorithms perform on the same dataset.
 - The "Play" button will play sounds corresponding to the heights of the bars without sorting.

## Code Overview

 - JavaScript: Handles the core logic for generating random bars, sorting algorithms, and playing sound based on the height of the bars.
 - HTML: Structures the visual elements, such as the sorting buttons and bars.
 - CSS: Styles the visual elements, including bar heights and animations.

## Main Functions

 - Sorting Algorithms: Each algorithm has a dedicated asynchronous function to allow real-time visualization of the sorting process:

  bubble()<br>
  insertion()<br>
  selection()<br>
  shell_sort()<br>
  cocktail_sort()<br>
  counting_sort()<br>
  radix_sort()<br>
  mergeSort() / merge()<br>
  quickSort() / partition()<br>
  Auditory Feedback: The playTone(frequency) function generates audio tones based on the height of the bars using the Web Audio API.<br>

## Libraries and Tools Used

Web Audio API: Used to create sound based on the bar heights.<br>
JavaScript (ES6): For all the interactivity and sorting logic.<br>
HTML/CSS: For the visual layout and styling.<br>

## Future Improvements
 - Add more sorting algorithms.
 - Include user input to specify the number of bars.
 - Improve the UI/UX with additional customization options.
 - Add a feature to pause/resume sorting.

## Screenshots

![image](https://github.com/user-attachments/assets/e3cd4375-be86-49b1-8aab-2e80eae63f2d)
![image](https://github.com/user-attachments/assets/547390f4-b6f7-4205-b201-95f92c59792e)
![image](https://github.com/user-attachments/assets/2d328a02-317d-497f-93fb-42101f8a2f9d)
![image](https://github.com/user-attachments/assets/3502ee7b-22e9-4a95-9082-fc19d5dcf4a7)





