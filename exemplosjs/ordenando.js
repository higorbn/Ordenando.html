const swap = (array, index1, index2) => {
    [array[index1], array[index2]] = [array[index2], array[index1]];
};

const shuffle = (array, swaps) => {
    for (let i = 0; i < swaps; i++) {
        let index1 = Math.floor(Math.random() * array.length);
        let index2 = Math.floor(Math.random() * array.length);
        swap(array, index1, index2);
    }
};

const bubble_sort = (array) => {
    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
};

const selection_sort = (array) => {
    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            swap(array, i, minIndex);
        }
    }
};

const particionamento = (array, start, end) => {
    let pivot = array[end];
    let i = start - 1;
    for (let j = start; j < end; j++) {
        if (array[j] < pivot) {
            i++;
            swap(array, i, j);
        }
    }
    swap(array, i + 1, end);
    return i + 1;
};

