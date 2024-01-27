

def run_linear_search(search_number, input_list):

    number_index = -1

    for idx, each_number in enumerate(input_list):
        if each_number == search_number:
            number_index = idx
            break

    return number_index

if __name__ == "__main__":
    search_number = 14
    input_list = [11, 3, 4, 10]
    number_index = run_linear_search(search_number, input_list)
    print(number_index)