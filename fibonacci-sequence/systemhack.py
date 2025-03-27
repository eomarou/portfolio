import array

# Create an array that can hold any type of elements
my_array = array.array('O')  # 'O' indicates an array of objects

# Function to add an element to the array
def add_element(element):
    my_array.append(element)

# Function to remove an element from the array
def remove_element(element):
    my_array.remove(element)

# Function to display the contents of the array
def display_array():
    print("Array contents:", my_array)

# Example usage
add_element(10)
add_element("Hello")
add_element(3.14)
display_array()
remove_element(10)
display_array()
