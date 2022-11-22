# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @mbieganek/lotide`

**Require it:**

`const _ = require('@mbieganek/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Functions

The following functions are currently implemented:

<dl>
<dt><a href="#assertArraysEqual">assertArraysEqual(array1, array2)</a> ⇒ <code>boolean</code></dt>
<dd><p>Function that compares 2 arrays for equality and prints out a
message telling us if they match or not</p>
</dd>
<dt><a href="#assertEqual">assertEqual(actual, expected)</a> ⇒ <code>string</code></dt>
<dd><p>Function that compares 2 values for equality and prints out a
message telling us if they match or not</p>
</dd>
<dt><a href="#assertObjectsEqual">assertObjectsEqual(actual, expected)</a></dt>
<dd><p>Function that compares 2 objects for equality and prints out a
message telling us if they match or not</p>
</dd>
<dt><a href="#countLetters">countLetters(string)</a> ⇒ <code>Object</code></dt>
<dd><p>Function that counts the total instances of a letter in a string</p>
</dd>
<dt><a href="#countOnly">countOnly(allItems, itemsToCount)</a> ⇒ <code>Object</code></dt>
<dd><p>Function that when given an array and an object, it will return an
object containing counts of everything that the input object listed</p>
</dd>
<dt><a href="#eqArrays">eqArrays(array1, array2)</a> ⇒ <code>boolean</code></dt>
<dd><p>Function that compares 2 arrays for equality and returns the result</p>
</dd>
<dt><a href="#eqObjects">eqObjects(object1, object2)</a> ⇒ <code>boolean</code></dt>
<dd><p>Function that evaluates two provided objects for equality</p>
</dd>
<dt><a href="#findKey">findKey(object, action)</a> ⇒ <code>string</code> | <code>undefined</code></dt>
<dd><p>Function that scans an object and returns the first key for which
the callback/predicate returns a truthy value. If no key is found,
then it returns <code>undefined</code>.</p>
</dd>
<dt><a href="#findKeyByValue">findKeyByValue(object, keyValue)</a> ⇒ <code>string</code> | <code>undefined</code></dt>
<dd><p>Function that takes in an object and a value. It should scan the
object and return the first key which contains the given value</p>
</dd>
<dt><a href="#flatten">flatten(array, [buffer])</a> ⇒ <code>Array</code></dt>
<dd><p>Function that flattens an array with any number of nested arrays</p>
</dd>
<dt><a href="#head">head(array)</a> ⇒ <code>*</code> | <code>undefined</code></dt>
<dd><p>Function that returns the first element from an array, or undefined
if the array was empty</p>
</dd>
<dt><a href="#letterPositions">letterPositions(sentence)</a> ⇒ <code>Object</code></dt>
<dd><p>Function that receives a string, and returns an object with a key
for each unique character, as well the character positions in the
string</p>
</dd>
<dt><a href="#map">map(array, callback)</a> ⇒ <code>Array</code></dt>
<dd><p>Function that will take in two arguments, an array to map, and a
callback function. The function will return a new array based on
the results of the callback function.</p>
</dd>
<dt><a href="#isEven">isEven(number)</a> ⇒ <code>boolean</code></dt>
<dd><p>Function that evaluates a number as even</p>
</dd>
<dt><a href="#middle">middle(array)</a> ⇒ <code>*</code> | <code>undefined</code></dt>
<dd><p>Function that returns the middel elemet(s) from an array, or undefined
if the array was empty</p>
</dd>
<dt><a href="#printAssertEqualResult">printAssertEqualResult(hasEquality, actual, expected)</a> ⇒ <code>string</code></dt>
<dd><p>Function that builds a message for the assertEqual functions in this
library</p>
</dd>
<dt><a href="#tail">tail(array)</a> ⇒ <code>Array</code></dt>
<dd><p>Function that returns all but the first element from an array, or
undefined if the array was empty. If the array is empty or only has
one element, it returns an empty array</p>
</dd>
<dt><a href="#takeUntil">takeUntil(array, callback)</a> ⇒ <code>Array</code></dt>
<dd><p>Function that returns a slice of the provided array with elements
taken from the beginning, up until the callback/predicate returns
a truthy value</p>
</dd>
<dt><a href="#without">without(sourceItems, removeItems)</a> ⇒ <code>Array</code></dt>
<dd><p>Function that copies the <code>source</code> array, while excluding items that
are found in the <code>removeItems</code> array</p>
</dd>
</dl>

<a name="assertArraysEqual"></a>

## assertArraysEqual(array1, array2) ⇒ <code>boolean</code>
Function that compares 2 arrays for equality and prints out a
message telling us if they match or not

**Kind**: global function  
**Returns**: <code>boolean</code> - The result of the evaluation  

| Param | Type | Description |
| --- | --- | --- |
| array1 | <code>Array.&lt;(string\|number\|boolean)&gt;</code> | The first array to compare |
| array2 | <code>Array.&lt;(string\|number\|boolean)&gt;</code> | The second array to compare |

<a name="assertEqual"></a>

## assertEqual(actual, expected) ⇒ <code>string</code>
Function that compares 2 values for equality and prints out a
message telling us if they match or not

**Kind**: global function  
**Returns**: <code>string</code> - Prints message with match outcome  

| Param | Type | Description |
| --- | --- | --- |
| actual | <code>string</code> \| <code>number</code> \| <code>boolean</code> | The first item to compare |
| expected | <code>string</code> \| <code>number</code> \| <code>boolean</code> | The second item to compare |

<a name="assertObjectsEqual"></a>

## assertObjectsEqual(actual, expected)
Function that compares 2 objects for equality and prints out a
message telling us if they match or not

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| actual | <code>Object</code> | The first item to compare |
| expected | <code>Object</code> | The second item to compare |

<a name="countLetters"></a>

## countLetters(string) ⇒ <code>Object</code>
Function that counts the total instances of a letter in a string

**Kind**: global function  
**Returns**: <code>Object</code> - An object with characters from `string` as
value labels, and the total instances of that character as the value  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | The string containing the elements you wish to count |

<a name="countOnly"></a>

## countOnly(allItems, itemsToCount) ⇒ <code>Object</code>
Function that when given an array and an object, it will return an
object containing counts of everything that the input object listed

**Kind**: global function  
**Returns**: <code>Object</code> - A list of values found, and their total occurrences  

| Param | Type | Description |
| --- | --- | --- |
| allItems | <code>Array.&lt;string&gt;</code> | Array of strings to look through |
| itemsToCount | <code>Object</code> | Object with key value pairs specifying what to count |
| itemsToCount.key | <code>string</code> | All keys in itemsToCount match the value to find as the key name, with a boolean value indicating if the name will be counted. For example, to count `John` assign a property in `itemsToCount` of `John: true` |

**Example**  
```js
When `allitems` is `['Karl', 'Fang', 'Salima', 'Fang']` and
`itemsToCount` is `{ Karl: false, Salima: true, Fang, true}` the
result will be `{ Salima: 1, Fang: 2 }`
```
<a name="eqArrays"></a>

## eqArrays(array1, array2) ⇒ <code>boolean</code>
Function that compares 2 arrays for equality and returns the result

**Kind**: global function  
**Returns**: <code>boolean</code> - The result of the evaluation  

| Param | Type | Description |
| --- | --- | --- |
| array1 | <code>Array.&lt;(string\|number\|boolean)&gt;</code> | The first array to compare |
| array2 | <code>Array.&lt;(string\|number\|boolean)&gt;</code> | The second array to compare |

<a name="eqObjects"></a>

## eqObjects(object1, object2) ⇒ <code>boolean</code>
Function that evaluates two provided objects for equality

**Kind**: global function  
**Returns**: <code>boolean</code> - The outcome of the evaluation  

| Param | Type | Description |
| --- | --- | --- |
| object1 | <code>Object</code> | The first object to evaluate |
| object2 | <code>Object</code> | The second object to evaluate |

<a name="findKey"></a>

## findKey(object, action) ⇒ <code>string</code> \| <code>undefined</code>
Function that scans an object and returns the first key for which
the callback/predicate returns a truthy value. If no key is found,
then it returns `undefined`.

**Kind**: global function  
**Returns**: <code>string</code> \| <code>undefined</code> - The name of the key, or undefined if
none was found  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> | The object from which to find a key |
| action | <code>function</code> | The callback function that is used to evaluate the keys |

<a name="findKeyByValue"></a>

## findKeyByValue(object, keyValue) ⇒ <code>string</code> \| <code>undefined</code>
Function that takes in an object and a value. It should scan the
object and return the first key which contains the given value

**Kind**: global function  
**Returns**: <code>string</code> \| <code>undefined</code> - The name of the key that matches, or undefined if
no match was found  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> | The object to search |
| keyValue | <code>string</code> \| <code>number</code> \| <code>boolean</code> | The value to search for |

<a name="flatten"></a>

## flatten(array, [buffer]) ⇒ <code>Array</code>
Function that flattens an array with any number of nested arrays

**Kind**: global function  
**Returns**: <code>Array</code> - The flattened array  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | The array of elements to flatten |
| [buffer] | <code>Array</code> | used as a pass-through value for recursion |

<a name="head"></a>

## head(array) ⇒ <code>\*</code> \| <code>undefined</code>
Function that returns the first element from an array, or undefined
if the array was empty

**Kind**: global function  
**Returns**: <code>\*</code> \| <code>undefined</code> - The first element from the array, or undefined  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | An array containing one or more elements |

<a name="letterPositions"></a>

## letterPositions(sentence) ⇒ <code>Object</code>
Function that receives a string, and returns an object with a key
for each unique character, as well the character positions in the
string

**Kind**: global function  
**Returns**: <code>Object</code> - An object with a key matching each unique
character, and where to find them in the sentence  

| Param | Type | Description |
| --- | --- | --- |
| sentence | <code>string</code> | The string to analyze |

<a name="map"></a>

## map(array, callback) ⇒ <code>Array</code>
Function that will take in two arguments, an array to map, and a
callback function. The function will return a new array based on
the results of the callback function.

**Kind**: global function  
**Returns**: <code>Array</code> - An array with the results of the callback function  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | An array to map |
| callback | <code>function</code> | A callback function to call against each item in the array |

<a name="isEven"></a>

## isEven(number) ⇒ <code>boolean</code>
Function that evaluates a number as even

**Kind**: global function  
**Returns**: <code>boolean</code> - The outcome of the evaluation  

| Param | Type | Description |
| --- | --- | --- |
| number | <code>number</code> | The number to evaluate as even |

<a name="middle"></a>

## middle(array) ⇒ <code>\*</code> \| <code>undefined</code>
Function that returns the middel elemet(s) from an array, or undefined
if the array was empty

**Kind**: global function  
**Returns**: <code>\*</code> \| <code>undefined</code> - The first element from the array, or undefined  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | An array containing three or more elements |

<a name="printAssertEqualResult"></a>

## printAssertEqualResult(hasEquality, actual, expected) ⇒ <code>string</code>
Function that builds a message for the assertEqual functions in this
library

**Kind**: global function  
**Returns**: <code>string</code> - A formatted message  

| Param | Type | Description |
| --- | --- | --- |
| hasEquality | <code>boolean</code> | Result of equality check |
| actual | <code>\*</code> | Input passed to the equality check |
| expected | <code>\*</code> | Expected input in the equality check |

<a name="tail"></a>

## tail(array) ⇒ <code>Array</code>
Function that returns all but the first element from an array, or
undefined if the array was empty. If the array is empty or only has
one element, it returns an empty array

**Kind**: global function  
**Returns**: <code>Array</code> - All but the first element from the array, or an empty
array  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | An array containing one or more elements |

<a name="takeUntil"></a>

## takeUntil(array, callback) ⇒ <code>Array</code>
Function that returns a slice of the provided array with elements
taken from the beginning, up until the callback/predicate returns
a truthy value

**Kind**: global function  
**Returns**: <code>Array</code> - The elements that were sliced from the input array  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | The array from which to slice elements |
| callback | <code>function</code> | The predicate function determines when to stop slicing elements from the array |

<a name="without"></a>

## without(sourceItems, removeItems) ⇒ <code>Array</code>
Function that copies the `source` array, while excluding items that
are found in the `removeItems` array

**Kind**: global function  
**Returns**: <code>Array</code> - The copied array  

| Param | Type | Description |
| --- | --- | --- |
| sourceItems | <code>Array.&lt;(string\|number\|boolean)&gt;</code> | The array to be copied |
| removeItems | <code>Array.&lt;(string\|number\|boolean)&gt;</code> | An array of items to not include in the returned array |

## Credits

The functions section of this README was generated with [jsdoc2md](https://github.com/jsdoc2md) a suite of modules for generating markdown documentation from jsdoc-annotated source.