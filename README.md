# suguri

Suguri is a bot for [Discord](https://discordapp.com) which enables Server admins to quickly create a set of roles. Users
then can use the role names to (de)assign these roles to themselves.

_Basically my excuse to learn how to write Discord bots._

## Usage

### Prerequisites

* Node.js (just go with the latest)
* A Discord Bot token (create an application and bot user [here](https://discordapp.com/developers/applications/me))

#### Token

* Copy `config.example.json` to `config.json`
* Replace `YOUR_TOKEN_HERE` with your bot user token in `config.json`

#### Roles

* Copy `roles.example.json` to `roles.json`
* Add new roles to the file
  * the Object key is the role name (spaces are supported)
  * the Object value is the role color (hex)

### Usage

* `npm install` to install dependencies
* `npm start` to run the bot

#### Adding the Bot to your Server

Simply open the following URL in your browser:

```
https://discordapp.com/oauth2/authorize?client_id=[yourbotid]&scope=bot&permissions=40001200
```

Also, be sure to replace `[yourbotid]` with the User ID of your bot! You can then select which server you want to add suguri to.

#### Commands

All commands are prefixed with a `!`

* `setup` creates all of the roles specified in `roles.json`  
  _Example:_ `!setup`
* `rolename` adds `rolename` tp the user sending it, requires the role to exist beforehand, so be sure to run `!setup`. Running the same command again will remove the specified role from the user.  
  _Example:_ `!Cool Kids`

## License

suguri is licensed under the MIT License
