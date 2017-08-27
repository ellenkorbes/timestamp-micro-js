# Timestamp Microservice

For [freeCodeCamp](http://freecodecamp.com) - [Back end > API Projects > Timestamp Microservice](https://www.freecodecamp.org/challenges/timestamp-microservice)

## User Stories

1. I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).

2. If it does, it returns both the Unix timestamp and the natural language form of that date.

3. If it does not contain a date or Unix timestamp, it returns null for those properties.

## Usage

```
http://timestamp-micro-js.glitch.me/January 1, 2016
```

```
http://timestamp-micro-js.glitch.me/1451606400
```

## Output

```
{
    "unix": 1451606400,
    "natural": "January 1, 2016"
}
```

```
{
    "unix": null,
    "natural": null
}
```
