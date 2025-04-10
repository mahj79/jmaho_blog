---
title: 'Neural Networks and Machine Learning (Part 3)'
date: '2024-08-19'
description: The third post in Jack's machine learning series. This post will cover gradient descent. By the end of this post, you'll have a basic understanding of how machine learning and large language models work.
image: /images/Neural_Network_Drawing_Blue_Weights.jpg
---

Alright folks, if you’ve made it to the third and final part of this series, let me start by saying a huge thank you! While this series has mostly been for fun and a way to explore new concepts, I truly appreciate you taking the time to go along this journey with me. That being said, this will be the last part of our series on machine learning and neural networks.

Before diving in, let's quickly recap what we’ve covered in the first two posts. A neural network is the core of how machine learning operates. It’s composed of layers, each containing multiple neurons, with each layer designed to perform a specific function. These layers are interconnected, with weights guiding the communication between them based on what the program is attempting to learn. Biases help us tell the neurons whether they’re focusing on the right information. By leveraging both weights and biases, we can train our model to produce more accurate outputs.
In this third part, we’ll focus on how adjusting these theoretical "knobs" can fine-tune our program for better accuracy. In our ongoing example, the program is designed to solve a puzzle by correctly identifying each piece. The "knobs" here refer to the weights and biases we discussed earlier. As we strive to improve our program's performance, we can fine-tune accuracy by slightly adjusting these weights and biases.

To assess the accuracy of our program, we first run it several times and evaluate its success rate. For instance, let’s say we run the program 10 times, and it correctly identifies the puzzle pieces 8 times. We then analyze the results, make minor adjustments to the weights and biases, and run the program 100 times, achieving a correct identification rate of 86 out of 100. That's an improvement! By repeating this process—running the program 1,000 times and correctly identifying 900 pieces—we see continued improvement, indicating that we’re making progress. However, it's important to note that not every adjustment will yield positive results; sometimes, accuracy may decrease. This is why it’s crucial to document every change before rerunning the program.

Up to this point, we’ve avoided diving too deeply into the math behind machine learning and neural networks. But now, it’s time to touch on how adjusting weights and biases involves some mathematical principles. To start, let’s understand a simple cost function. Cost functions are common in various business contexts and are defined as C(x)= F + V(x), where F is the fixed cost, V(x) is the variable cost per unit, and C(x) is the total cost to produce an output. In machine learning, the concept is similar but a bit more complex. Here, F represents the fixed inputs (like the number of puzzle pieces), V(x) refers to adjustable parameters like weights and biases, and C(x) is the output from running our model. The purpose of this cost function is to continuously measure the difference between the model’s predicted outputs and the actual target values. The ultimate goal is to minimize the cost function, thereby improving accuracy over time.

So, we have this cost function, and we know that adjusting weights and biases is crucial for improving accuracy. But how does it all tie together? This is where we introduce gradient descent, a method used to optimize the model by minimizing the cost function. Gradient descent is one of the most common techniques for training machine learning models.

Let’s break down the key concepts:

- *Objective:* The main goal of gradient descent is to find the optimal values for the model’s parameters (weights and biases) that minimize the cost function, thereby improving accuracy.
- *Gradient:* The gradient is like a sum of partial derivatives (similar to our V(x)) of the cost function concerning the model parameters. If you’re unfamiliar with derivatives, think of it as the rate of change, or how we calculate the optimal point to steer our program with math. The gradient points in the direction of the steepest increase in the cost function. Since we want to minimize the cost, we move in the opposite direction (down the gradient), reducing the cost.
- *Learning Rate:* This parameter determines the size of the steps taken toward minimizing the cost. A small learning rate means the function takes smaller, more precise steps, leading to slow but steady convergence. A large learning rate can speed up convergence but risks overshooting the minimum or missing it entirely.


Steps of Gradient Descent:
- *Initialize Parameters:* Start with initial values for the model’s parameters, often chosen randomly. In our puzzle case, it might be something like, “Look for green or blue,” but after identifying a lot of red, the program might adjust to say, “No green or blue here, so that’s not what we want.”
- *Compute Predictions:* Use the current parameters to make predictions. This involves looking at how we’ve defined our weights and biases to make educated guesses about the program’s performance.
-  *Calculate Cost:* Compute the cost function to compare how far off the predictions are from the actual values. This is essentially measuring how accurately the puzzle pieces were identified. 
- *Compute Gradients:* Calculate the gradients of the cost function with respect to each parameter. This step evaluates how much our weights and biases contributed to the correct or incorrect outputs.
- *Update Parameters:* Adjust the parameters in the opposite direction of the gradient by a step size determined by the learning rate. Essentially, this means refining our program based on what we’ve learned to produce more accurate results next time.

To visualize this, imagine standing on top of a mountain. You know there’s a lovely picnic waiting for you at the bottom, but you’re not sure how to get there. There are many paths down, and you need to consider factors like time, number of steps, and safety. After some thought, you choose the quickest path, but it’s too steep, and you twist your ankle. Eventually, you make it down and enjoy your picnic, but not without a few bumps and bruises. Over time, if you keep finding yourself at the top of that mountain, you’ll learn the most efficient way down, avoiding the pitfalls. That’s essentially how gradient descent works: through trial and error, refining the path to reach the optimal solution.

Ok so let’s wrap it all up and put a bow on this series! A neural network is the foundation of how machine learning operates, designed to replicate the workings of neurons in the human brain. It’s composed of layers, with each layer performing a specific function based on what the neurons are programmed to detect. These layers are interconnected, using weights to inform one another about what the program is looking for, while biases help determine if the neurons are focusing on the right information. Together, weights and biases feed into a cost function, which is the mathematical backbone of the program, calculating its accuracy. The program then uses gradient descent to adjust these weights and biases, refining its accuracy over time.

All of this forms the foundational understanding of how machine learning works. If you found these posts interesting, I highly recommend checking out the resources linked in the first post. I may explore related topics in future posts, but for now, that’s a wrap on this series. I hope you learned something new, and if you have any feedback, please share it!

Second Article: [Machine Learning Part 2!](https://mahoscorner.com/posts/Machine_Learning_Part_Two)

First Article:[Machine Learning Part 1!](https://mahoscorner.com/posts/Machine_Learning_Part_One)