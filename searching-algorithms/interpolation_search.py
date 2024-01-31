import math

def is_list_sorted(input_list):
    sorted_lst = True
    for idx, each_item in enumerate(input_list):
        if idx == 0:
            continue
        else:
            current_item = each_item
            previous_item = input_list[idx - 1]
            if current_item < previous_item:
                sorted_lst = False
                break

    return sorted_lst

def run_interpolation_search(search_number, input_list):

    if not is_list_sorted(input_list):
        raise Exception("List is not sorted in ascending order")
    
    number_index = -1
    low_index = 0
    high_index = len(input_list) - 1

    while low_index <= high_index:
        prob_index = int((high_index - low_index) * (search_number - input_list[low_index]) / (input_list[high_index] - input_list[low_index]))

        if search_number == input_list[prob_index]:
            number_index = prob_index
            break
        elif search_number > input_list[prob_index]:
            low_index = prob_index + 1
            high_index = len(input_list) -1 
        else:
            high_index = prob_index - 1
            low_index = 0             

    return number_index


if __name__ == "__main__":
    search_number = 11
    input_list = [3, 4, 10, 11]
    number_index = run_interpolation_search(search_number, input_list)
    print("number found in index : ", number_index)
