"use client";

import Link from "next/link";
import Image from "next/image";
import { CodeBlock, dracula } from "react-code-blocks";

export default function MakefilesPage()
{
    const makefile = `# Compiler:
CC = g++
CFLAGS = -Wall -Wextra -Werror -std=c++17

# Directories:
SRC_DIR = src
OBJ_DIR = obj
BIN_DIR = bin

# Find all .cpp files in src/ and convert to .o in obj/
SRC = $(wildcard $(SRC_DIR)/*.cpp) $(wildcard $(SRC_DIR)/*/*.cpp)
OBJ = $(patsubst $(SRC_DIR)/%.cpp, $(OBJ_DIR)/%.o, $(SRC))

# Output binary:
TARGET = $(BIN_DIR)/my_program

# Build the executable
$(TARGET): $(OBJ)
    @mkdir -p $(BIN_DIR)
    $(CXX) $(CXXFLAGS) -o $(TARGET) $(OBJ)

# Compile .cpp files into .o files
$(OBJ_DIR)/%.o: $(SRC_DIR)/%.cpp
    @mkdir -p $(OBJ_DIR)
    $(CXX) $(CXXFLAGS) -c $< -o $@

# Clean up compiled files
clean:
    rm -rf $(OBJ_DIR) $(BIN_DIR)

# Phony targets (not real files)
.PHONY: clean run`

    return (
        <main>
            <h1>/* Makefiles */</h1>
            <p>
                To streamline development you can use Makefiles to compile your C++ applications.
            </p>
            <h2>// Makefile Example</h2>
            <p>
                This Makefile is designed to compile on macOS, Linux, and Windows using the MinGW compiler.
            </p>
            <CodeBlock text={makefile} showLineNumbers={true} language="makefile" theme={dracula}/>
            <h2>// Explaination</h2>
            <p>
                This make file will create 3 directories: <code>src</code>, <code>obj</code>, and <code>bin</code>.
                The <code>src</code> directory is where you will store your C++ source files. The <code>obj</code> directory
                is where the compiled object files will be stored. The <code>bin</code> directory is where the compiled binary
                will be stored.
                <br/>
                <br/>
                The makefile will automatically find any <code>.cpp</code> files in the <code>src</code> directory and compile them
                into object files in the <code>obj</code> directory. The object files will then be linked together to create the
                final binary in the <code>bin</code> directory.
                <br/>
                <br/>
                <strong>Note:</strong> <i>This will not find any sub-directories past one sub directory.</i>
                <br/>
                <strong>Example: </strong> <code>src/utils/math.cpp</code> is supported, but <code>src/utils/math/add.cpp</code> is not.
            </p>
        </main>
    );
}
