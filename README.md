# buyer-picker

Essentially with the given Array it randomly matches people. It can be used during draw lots during the occasions such as christmas.
```(js)
const arrayOfPeople = ['Mark', 'Sophia', 'Derek', 'Martha'];
```

Algorithm randomly matches people returning an object with the key of who was assigned and the value to whom.
```(js)
{
  Mark: 'Sophia',
  Sophia: 'Derek',
  Derek: 'Martha',
  Martha: 'Mark'
}
```

After that it created a folder with the given directory name and produce `.txt` files with the name of the object `key` and puts the `value` inside. You know, because it's anonymous... 
