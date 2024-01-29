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

def run_binary_search(search_number, input_list):

    if not is_list_sorted(input_list):
        raise Exception("List is not sorted in ascending order")
    
    number_index = -1
    start_index = 0 
    end_index = len(input_list)

    while start_index <= end_index:
        search_index = math.floor((start_index + end_index) / 2)
        print(search_index)

        if search_number == input_list[search_index]:
            number_index = search_index
            break
        
        elif search_number > input_list[search_index]:
            start_index = search_index + 1
            end_index = end_index
        
        else:
            start_index = 0
            end_index = search_index - 1

    return number_index


if __name__ == "__main__":
    search_number = 10
    input_list = [3, 4, 10, 11]
    number_index = run_binary_search(search_number, input_list)
    print("number found in index : ", number_index)
