
 1 : The taleemUi2 does not work if we use git and npm-run-build. We have to use dockers for taleemUi-2.

 2: For api the pm3 works well, so the taleem_api uses pm2.

 3: Build command (just change 0.1 to 0.x)

 sudo docker build -t taleemhelp/ui:0.1 .

 4: Push command (just change 0.1 to 0.x)

 sudo docker push taleemhelp/ui:0.1

 5: Pull command (just change 0.1 to 0.x)

 sudo docker pull taleemhelp/ui:0.1

 6: Here is the run command for ui (just change 0.1 to 0.x)

sudo docker run -d -p 3000:3000 --restart always taleemhelp/ui:0.1

////////////////////////////////////////////////////////////////////////
pm2-commands
pm2 stop all
pm2 list
pm2 start name_of_app
pm2 save
pm2 delete all

