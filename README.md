# type_creater

```
  _                                         _            
 | |                                       | |           
 | |_ _   _ _ __   ___   ___ _ __ ___  __ _| |_ ___ _ __ 
 | __| | | | '_ \ / _ \ / __| '__/ _ \/ _` | __/ _ \ '__/
 | |_| |_| | |_) |  __/| (__| | |  __/ (_| | ||  __/ |   
  \__|\__, | .__/ \___| \___|_|  \___|\__,_|\__\___|_|   
       __/ | |      ______                               
      |___/|_|     |______|                              
```

**type_creater** is a command-line tool that takes your JSON input and instantly generates the corresponding TypeScript type definition. It accepts both single-line and multi-line JSON input, automatically corrects common formatting issues, and displays the generated type in a clear, readable format.

## Features

- **Automatic Type Generation**: Converts any valid JSON into a TypeScript type definition.
- **Error Tolerance**: Attempts to auto-correct malformed JSON (e.g., missing quotes, trailing commas).
- **Supports Complex Structures**: Handles nested objects, arrays, and various primitive types.
- **Colorful CLI Output**: Uses colored console output for better readability.
- **Simple Usage**: Paste or type your JSON, press Enter, and see the result.
- **Exit Anytime**: Type `exit` or submit an empty line to quit.
- **Tested**: Includes Jest tests for robust behavior.

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/hamshad/type_creater
cd type_creater
```

### 2. Install Dependencies

Using npm:
```bash
npm install
```

Or using Yarn:
```bash
yarn
```

### 3. Run the Tool

Using npm:
```bash
npm start
```

Or using Yarn:
```bash
yarn start
```

### 4. Enter Your JSON

- Paste or type your JSON data and press Enter.
- Multi-line input is supported: keep entering lines, and an empty line triggers the type generation.
- If your JSON is not properly formatted (e.g., uses single quotes, missing quotes on keys), the tool will try to fix it.

### 5. See the Type

- The generated TypeScript type is printed in the console.
- To exit, type `exit` or press Enter on an empty prompt.

## Example

```
Enter JSON:
{"name":"John","age":30,"address":{"city":"NY"}}

----------------------RESULT----------------------
{
  name: string;
  age: number;
  address: {
    city: string;
    [key: string]: any;
  };
  [key: string]: any;
}
```

## Running Tests

This project uses [Jest](https://jestjs.io/) for testing.

```bash
npm test
```
or
```bash
yarn test
```

## License

MIT
