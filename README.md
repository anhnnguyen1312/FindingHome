![image](https://github.com/user-attachments/assets/56462ce1-59a8-41fd-bea8-5f08920b6798)
<p align="center">
  <a href="https://go-skill-icons.vercel.app/">
    <img
      src="https://go-skill-icons.vercel.app/api/icons?i=javascript,react,php,python,mysql,docker&theme=dark"
    />
  </a>
</p>

**A FINDING HOME WEBSITE WITH INTERGRATED RECOMMENDATION SYSTEM**

This wwebsite is designed to help users easily find rooms according to their needs. 
Additionally, users can receive suggestions for rooms. Furthermore, users can find rooms through a map and view nearby amenities.

**INTRODUCTION**

Our system is designed to help users quickly find rooms, houses, or commercial spaces that best match their criteria.
The website’s key advantage is its recommendation system, which broadens users' options and shortens the time required to find a suitable accommodation.
Additionally, users can search based on the map we provide. All listings are strictly vetted by us before being made public to other users.
The system features several notable functions:
including displaying the location of the accommodation and nearby amenities on the map, 
notification functionality for new listings, the ability to save favorite listings, 
and showing the total number of likes for a listing or the aggregate likes across all of a user's listings. Email verification for users is also included.
For administrators, there is functionality to manage all users and their listings.
All listings must be approved by the admin, which helps minimize risks for users when searching for accommodation.

**Technologies**

Front-end: ReactJs framework
Back-end: CodeIgniter3 framework
Manage Database: MySQL
Machine learning: Python
Other: Docker, Cloundinary.




#Requerement
	Docker Engine. Download: https://docs.docker.com/engine/install/.
	nodejs. Download:  https://nodejs.org/en/download/package-manager.
	Python. Download: https://www.python.org/downloads/.
#Install dependencies
	1. Install python dependencies:
		step 1: move to folder python on project folder
		step 2: open CMD on this folder
		step 3: copy and pass "pip install -r requirements.txt" to command line and enter to install python dependencies.
	2. Install react dependencies:
		step 1: move to folder react on project folder
		step 2: open CMD on this folder
		step 3: copy and pass "npm i" to command line and enter to install react dependencies.
#Runing our system:
	1. build docker container:
		step 1: move to project folder
		step 2: open CMD on this folder
		step 3: copy and pass "docker-compose up --build -d" to command line and enter to build docker container. it maybe take a long time. 
		step 4: go to docker desktop to run whole containder. ( if all containders are really runing. you can ignore this step).
	2. run python file:
		step 1: move to python folder on project folder
		step 2: open CMD on this folder
		step 3: copy and pass "start python recommend.py" to command line and enter to install fist file python. (please don't close python.exe)
		step 3: copy and pass "start python update.py" to command line and enter to install second file python. (please don't close python.exe)
	2.  run react project:
		step 1: move to folder react on project folder
		step 2: open CMD on this folder
		step 3: copy and pass "npm start" to command line and enter to run react project.
		step 4: go to "http://localhost:3000/" and WELLCOME TO OUR SYSTEM
		
