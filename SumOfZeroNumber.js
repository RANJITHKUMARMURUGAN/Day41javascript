// function to print givenNumber with 0 sum
function givenNumber(arr, n)
{
    var found = false;
 
    for (var i = 0; i < n - 1; i++)
    {
        // Find all pairs with sum equals to
        // "-arr[i]"
        var s = new Set();
        for (var j = i + 1; j < n; j++)
        {
            var x = -(arr[i] + arr[j]);
            if (s.has(x))
            {
                console.log( x + " " + arr[i] + " " + arr[j]);
                found = true;
            }
            else
                s.add(arr[j]);
        }
    }
 
    if (found == false)
        console.log( " No givenNumber Found" );
}
 
// Driver code
var arr = [0, -1, 2, -3, 1];
var n = arr.length;
givenNumber(arr, n);
