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

def run_binary_search(search_number, input_list, start_index, end_index):

    number_index = -1

    while start_index <= end_index:
        search_index = math.floor((start_index + end_index) / 2)
        print("search_index : ", search_index)

        if search_number == input_list[search_index]:
            number_index = search_index 
            break 
        elif search_number > input_list[search_index]:
            start_index = search_index + 1
            end_index = end_index
        else:
            start_index = start_index
            end_index = search_index - 1

    return number_index

def run_interpolation_search(search_number, input_list):

    if not is_list_sorted(input_list):
        raise Exception("List is not sorted in ascending order")
    
    number_index = -1
    search_index = 1
    previous_index = 0

    if search_number == input_list[0]:
        return 0

    while True:
        if search_number == input_list[search_index]:
            number_index = search_index
            break
        elif search_number > input_list[search_index]:
            previous_index = search_index
            search_index = 2 * search_index
            search_index = min(search_index, len(input_list) - 1)

            if search_index == previous_index:
                break
        else:
            # perform binary search 
            print("run binary test : ", search_index)
            number_index = run_binary_search(search_number, input_list, search_index / 2, search_index)
            break
            

    return number_index


if __name__ == "__main__":
    search_number = 203
    input_list = [3, 4, 10, 11, 14, 60, 199, 203, 301, 391]
    number_index = run_interpolation_search(search_number, input_list)
    print("number found in index : ", number_index)
