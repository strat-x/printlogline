# printlogline
 a javascript module to print a configurable logline on the console. 
 The logline has a date time stamp with fixed nbr of digits: MM-DD hh:mm:ss:msc 
 The module supports an optional prefix and an optional message. <br />
 example1: ```printLL("**","start")```<br />
 example2: ```printLL("","event1")```<br />

All numbers for the month, day, hour, minutes and seconds are formatted as 2 digits. The milliseconds are formatted with 3 digits. Having fixed number of digits makes it easier to quickly spot the time between log lines. 

## why
while learning nodeJS and its async behavior & event loop, I needed an easy way to log messages to the terminal to understand the flow of events. It bothered me I couldn't find an easy to use logger

<br />** 02-23 21:58:59:012 start<br />
02-23 21:58:59:082 event2<br />
** 02-23 21:58:59:388 finish<br />
02-23 21:58:59:777 ERR: ABC is not a number<br />
02-23 22:01:00:002 event1<br />




