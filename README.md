# MJJ Plugin Starter

A generic plugin starter that I use.

## To get going:

1. Download a zip of this repo to your plugins folder and unzip it.
2. In composer.json, change the "name" and "psr-4" values to what you'll use. The "psr-4" value will be your namespace.
3. Run composer install from the terminal in the root level of the directory in which you've installed all the files. This is the same directory the composer.json file is in, it's using that to install the php dependencies and set up autoloading.
4. Run npm install in the same place.
5. Run npm run build in the same place.

At this point, the sample block should work. It's named "MJJ Plugin Starter Click Game" or somesuch. You should go ahead and add it to a post to test that this is working out of the box. There is also a server side rendered block called "MJJ Plugin Starter Useless Div" which is a pointless div but you can change the background colour. Ok, if you've tried those then continue.

6. Rename everything else, I don't have a script for that to easily do at the moment.
7. To start development, make a post that you'll use for testing your block and save it. Make a note of those urls.
8. In local.json, replace the "adminURL" value with the url for the post edit in admin and replace the "frontEndURL" with the front end url.
9. Run npm run start. This pop up two browser windows both on localhost:3123 which will contain your edit post screen and front end post as set above.
10. Develop! If you keep to the file structure given, things should reload correctly.

For local development, make and save a post in the admin area to be used for testing. Copy the url and in local.json replace the value for the "adminURL" key with it. Go to the post on the front end and copy and paste that url in the value for the "frontEndURL" key.

For deployment, run "npm run build". This will build everything properly. How you deploy is up to you! If you SFTP or run a service that uses SFTP then you'll need to transfer the built files which may mean you need to commit them to the repo and that is absolutely fine. If you can run the commands on your deployment service, that's fine too! Whatever works here works.

Let me know what I've not explained well and what doesn't work. For change requests: this is my own personal starter so please feel free to fork and make it your own.
