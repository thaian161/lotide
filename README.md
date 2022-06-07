# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by [me](https://github.com/thaian161) as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @thaian161/lotide`

**Require it:**

`const _ = require('@thaian161/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `head(arr)`: function to retrieve the first element from the array
- `tail(arr)`: function to retrieve every element except the head (first element) of the array
- `middle(arr)`: function return an array with only the middle element(s) of the provided array
- `countLetters(str)`: function should take in a sentence (as a string) and then return a count of each of the letters in that sentence
- `countOnly(allItems, itemsToCount)`: function should take in a collection of items and return counts for a specific subset of those items. countOnly will be given an array and an object. It will return an object containing counts of everything that the input object listed
- `findKey(obj, cb)`:function scan the object and return the first key for which the callback returns a truthy value
- `findKeyByValue(obj, valueOfObj)`: function search for a key on an object where its value matches a given value
- `letterPositions(sentence)`: function return all the indices (zero-based positions) in the string where each character is found
- `map(arr, cb)`: function will return a new array based on the results of the callback function. Manually rewrite .map()
- `takeUntil(arr, cb)`: function will return a slice of the array with elements taken from the beginning
- `without(source, itemsToRemove)`: function to filter our data by removing some unwanted items from given array
- `eqArrays(arr1, arr2)`: function that can compare two arrays for a perfect match
- `eqObjects(obj1, obj2)`: function takes in two objects and returns true or false, based on a perfect match
