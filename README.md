# ECommerceBellvita


# Html
  HTML structure looks comprehensive and well-organized, especially for a website focused on showcasing products and deals like Bellavita Organic

  # Semantic Structure
   use of header, div, and footer tags for structuring

   # Carousel
   Bootstrap carousel with indicators and controls is implemented effectively to showcase promotional images

   # Product Listing
   Product details, including images, prices, and "Add to Cart" buttons, are neatly presented in a grid.

#   Customer Reviews:

    The review slider adds a personal touch with images, ratings, and testimonials.


# CSS

# Navigation (nav)

Positioned absolutely at the top, overlapping content below.
Heading (h1): Centered, uppercase text styled in white.
Menu (ul, li, a): A horizontal navigation menu with items spaced evenly using flex. Links change weight and color on hover for an interactive feel.

Grid Layout: Products are displayed in a grid (grid-template-columns: repeat(4, 1fr)).

# Hover and Transition Effects

Consistent use of transform and transition:

Smooth scaling or translation on images, buttons, and icons.
Enhances interactivity and user experience.


# 1. Add-to-Cart Button Functionality
Purpose: Provides a simple feedback mechanism to inform users when an item has been added to their cart.
Implementation:

A click event listener is attached to an element with the class .add-to-cart-btn.
When clicked, it triggers a JavaScript alert that displays the message: "Item added to cart!".
# Use Case: 
Often used in e-commerce websites to provide immediate feedback when users interact with an "Add to Cart" button.

 # Customer Review Carousel Functionality
Variables:
slidesContainer: Selects the container element holding all the slides.

slides: Selects all individual slide elements.

prevBtn and nextBtn: Refer to the buttons for navigating between slides.

index: Tracks the current position in the carousel.

# Functions:
updateSlidePosition():
Adjusts the container's transform property to move slides horizontally using the translateX CSS property. The position depends on the index.

# Event Listeners:

Next Button (nextBtn):

Increments the index to move to the next slide.
Resets to 0 if it reaches the end of the slides (circular carousel).

Previous Button (prevBtn):

Decrements the index to move to the previous slide.
Loops to the last slide if the beginning is reached.


