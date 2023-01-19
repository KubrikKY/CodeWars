var uniqueInOrder = function(iterable){

switch (typeof (iterable)) {
    case 'string':
        iterable = iterable.split('');
    break;
    case 'number':
        iterable = String(iterable);
        iterable = iterable.split('');
    break;
}

return iterable.filter((e, a, arr) => {
    return e != arr[a + 1];
 });
};
