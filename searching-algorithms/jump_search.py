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

def run_jump_search(search_number, input_list):

    if not is_list_sorted(input_list):
        raise Exception("List is not sorted in ascending order")
    
    number_index = -1
    jump_size = math.floor(math.sqrt(len(input_list))) 
    search_index = jump_size - 1
    init_index = 0

    while True:

        if search_number > input_list[search_index]:
            init_index = search_index
            search_index = search_index + jump_size
            search_index = min(search_index, len(input_list) - 1)

            if init_index == search_index:
                break

        else:
            # perform linear search 
            print("perform linear search")
            print(range(init_index, search_index + 1))

            for idx in range(init_index, search_index + 1):
                print(idx, input_list[idx])
                if input_list[idx] == search_number:
                    number_index = idx
                    break

            break

    return number_index


if __name__ == "__main__":
    search_number = 12
    input_list = [3, 4, 10, 11]
    number_index = run_jump_search(search_number, input_list)
    print("number found in index : ", number_index)
