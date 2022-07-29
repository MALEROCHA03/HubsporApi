# Create an API with standard CRUD methods accessing a HubSpot Database (HubDB) with a simple front end allowing a user to update and view the database.

### Requirements

1. .env file

### Running

1. Install dependencies

# Console
npm install

2. Initialize

If .env config file was not configured manually there is a way to initialize the CLI and create .env file via:

# Console
./bin/cli.js init

It will ask for your Hubspot Api Key and will save it to the new .env config file.

3. Commands

Show all commands

# Console
./bin/cli.js --help

Get list of objects

# Console
./bin/cli.js get [objectType] -a --query='test'


Create new object

# Console
./bin/cli.js create [objectType]

Please also notice that some objects require mandatory properties, that you can provide in the following way:

# Console
./bin/cli.js create [objectType] --email='test@test.com' --firstname='Brian' --lastname='Halligan'


Update existing object

# Console
./bin/cli.js udpate [objectType] [objectId] --firstname='Ryan'


Delete existing object

# Console
./bin/cli.js delete [objectType] [objectId]

# What is Bin?

Is an instance of a shebang line: the first line in a plain text executable file on Unix-like platforms that tells the system which interpreter to pass that file to for execution, via the command line following the magic