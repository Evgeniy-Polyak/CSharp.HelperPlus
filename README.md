# C# Helper VSCode Extension

Helper functions to speed up C# development.

**Functions are intended to be called using keyboard shortcuts (or command search dropdown), hence no mouse menus.**

# Inject Dependency (C#) 
`csharp-helper.inject-dependency`

Provides search input for finding *.cs files, adds selected file name to constructor, creates private readonly field, formats constructor on separate lines if it has more than one parameter.

Constructor will be created if it doesn't exist.

```csharp
...
private readonly IDependency _dependency;

public Constructor(IDependency dependency)
{
    _dependency = dependency;
}
...
```
# Create C# files

Provides prompt to select path, creates files from template.
Files are created with correct namespace.

- Create New Class (C#) 

`csharp-helper.create-class`

- Create New Interface (C#)

`csharp-helper.create-interface`

- Create New Enum (C#)

`csharp-helper.create-enum`

- Create New Test Class (C#)

`csharp-helper.create-test`

# Embed selected text into a code block (C#)

`csharp-helper.embed-code`

Provides prompt to select template, surrounds selected text with template.

Available templates:

```
try { ... } catch(Exception ex) { ... }

if (...) { ... }
```

# Fix namespace (C#)

`csharp-helper.fix-namespace`

Corrects namespace in current file based on path to project.

# Fix filename (C#)

`csharp-helper.fix-filename`
Renames file to match class name.

# Toggle Method Sync (C#)

`csharp-helper.toggle-method-sync`

Changes method signature to async and vice versa

```
void -> async Task

T -> async Task<T>
```

```
async Task -> void

async Task<T> -> T
```

## TODO functions
- Import all missing usings in file.

Any suggestions are welcome, please use github issues for that.
