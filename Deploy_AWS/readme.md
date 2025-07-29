Launch Ec2 insatance and dowload .pem file from AWS console
Connect to the instance using SSH with the downloaded .pem file using the command:
ssh -i "your-key.pem" ec2-user@your-ec2-public-ip in the terminal. if it is ubuntu, use ubuntu@your-ec2-public-ip
Make sure to replace "your-key.pem" with the path to your downloaded key file.
after connecting, you can install Node.js if it's not already installed.
You can do this by running: sudo apt update && sudo apt install nodejs npm
After installing Node.js, you can run this script by saving it as index.js and executing
to transfer the file to your EC2 instance, you can use SCP or any other file transfer method.
For example, using SCP: scp -i "your-key.pem" index.js ec2-user@your-ec2-public-ip:~ in git bash
scp -i /c/Users/saipa/My_Files/Deploy_AWS/firstdeploy.pem /c/Users/saipa/My_Files/Deploy_AWS/index.js ubuntu@54.85.254.127:~/
Once the file is on your EC2 instance, navigate to the directory where you saved index.js
and run the script using Node.js by executing the command: node index.js
Your server should now be running and accessible at http://your-ec2-public-ip:3000
Make sure your security group allows inbound traffic on port 3000.
