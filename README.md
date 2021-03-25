# Date formater

This package helps to retrive the date with respect to the users demads.

For using this package 

1. Install the secondz package using this commad `npm i secondz `
2. Import to your file using
    `const {secondz} = require('secondz')`

Supported functions
-------------------
    1. secondz.getDate() returns the current date in DD:MM:YYYY format

    2. secondz.getDay('language code') returns the current day in specified language

    3. secondz.format('DD:MM:YYYY','En') returns the current date with the desired format.
        Supported Formats
            DD:MM:YYYY
            d:m:YYYY
            d:m:yy
        * Note : Combination of the above strings are possible and if you want the day name pass the language code in which language you want to get returned. `eg. secondz.format('DD:MM:YYY','En') returns day name in english.`

    4. secondz.random() returns a randome date.

Supported languages of days 
---------------------------

| Name | Code  | 
| :---:   | :-: | 
| English | En |
| Malayalam | Ml |
| Hindi | Hd | 