---
title: 'Neural Networks and Machine Learning (Part 1)'
date: '2024-07-07'
---

This is the first post in a series that will focus on understanding key concepts of neural networks and machine learning. The information captured in each post is my best effort at taking complex topics such as linear algebra and turning them into simple explanations that anyone new to the subject of machine learning can understand. Key shoutouts belong to youtuber and educator [3Blue1Brown](https://www.youtube.com/@3blue1brown) (also known as Grant Sanderson), Michael Nielsen the author of [Neural Networks and Deep Learning](http://neuralnetworksanddeeplearning.com/chap1.html), and finally [MIT OpenCourseWare](https://ocw.mit.edu/search/?d=Electrical%20Engineering%20and%20Computer%20Science&q=machine%20learning) which contains a plethora of free courses where you can learn about many things beyond just machine learning. These were the main sources of information where I learned and jotted down notes into my notebook for this post. Now let’s get started!

What is a neural network? In simple terms, it’s an imitation of how neurons are interconnected and communicate with each other via signals like the human brain. The neuron’s job is to receive and send messages from other neurons that ultimately lead to some sort of output. In the case of your brain, small signals are communicating from neuron to neuron that output to fingers typing on a keyboard. The network piece comes from how the neurons are arranged and intersect to build the outcome you are trying to achieve. 

One of the ways I think of for visualizing a neural network, is by thinking of a system of filters that continues to filter information based on educated assessments of a certain piece of information until ultimately arriving at an answer. 

![Neural Network Drawing](/images/Neural_Network_Drawing.jpg "Neural Network Drawing")

The example we’ll use to help visualize this is solving a 100 piece puzzle. Most people tend to tackle puzzles by looking for common themes. Starting with the obvious themes such as corner pieces, then edge pieces, then maybe distinctive features such as a bright color or a particular shape. A person may even sort all the pieces first into buckets for when they’re done sorting and ready to start they’ll know where certain themes are arranged and where to look. Well let’s say you take this approach and the first filter you use is corner pieces and edge pieces. You’ll identify them hopefully relatively quickly and begin piecing them together by looking at each piece and figuring out which ones go together. From there you may start working your way inwards and build out those distinctive features along the way and finish by tackling the hardest pieces or sections at the end. Now let’s say you do this same puzzle 10 times, 100 times, and then 1000 times! By the 1000th time you’ll probably be pretty good at putting that puzzle together because you’ve started to recognize certain patterns such as shape, colors, number of tabs on a piece. Just looking at a piece you may know immediately where it goes and if not you can take a pretty good guess where it should be with a high percentage of success. Conceptually this is how a neural network works and is applied to machine learning.  

But Maho, how does solving a puzzle relate to neural networks and machine learning? Well let's dissect the puzzle example and how it actually works in a true neural network. We’ll start with what those filters we used are. Filters in a neural network are referred to as layers. A layer will have multiple neurons that essentially act as a number holder for an evaluation technique when assessed against all the other neurons in the layer it will provide relevant information to the other layers using some advanced math. The first layer would essentially be the initial input and the last layer would be for the output. When it comes to neural networks, you can add almost an infinite amount of layers in between, sometimes referred to as hidden layers. The layers in the middle all act as different filters that are connected to the layer in the front and back of it, each layer is intended to look for a very specific piece of information that will inform the other layers. 

If we take a simple example from the puzzle, let’s pretend the top left corner piece of the puzzle is a bright red piece with two tabs. One tab to connect to the piece below it and the other tab for the piece to the right of it. There’s going to be multiple layers that have each been assigned something specific to look for. For example there will be a layer with the neurons dedicated to filtering for only pieces that have two flat sides interconnecting at a 90 degree angle. Also a layer for only bright red pieces. A layer dedicated to pieces with only two tabs. A layer that looks for pieces with no holes that tabs fit into and so on and so on. From there by interacting with all these layers, the neurons will pass along information from each layer to each layer and wallah! You have identified the top left corner piece.  

By now you may be thinking that you can probably add or tweak layers that will lead to more informed decisions and you’re right! We’ve covered at a high level what a neural network is and an example of how it works with respect to a puzzle. In the next post we’ll cover how adjusting layers and the neurons within each layer can lead to more accurate and faster outputs for whatever your preferred machine learning use case is. Up next weights and biases! 