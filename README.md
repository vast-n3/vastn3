# vast-n3

vast-n3 is a bootstrapping project setting up

- vue
- axios
- stateless (neoan3 JWT handler)
- tailwind
- neoan3
 
 The powerful PHP-backend with CRUD & REST-Api is set up to 
 serve your Vue application and aims at providing common tools (like authentication) 
 and a minimal, customizable and versatile front-end.
 
 ## Installation
 
 ### Prerequisites
 
 The installer requires node & npm, neoan3-cli and we recommend having GIT installed.
 
 ### Via script
 
 The easiest installation is done via neoan3-cli. 
 Open a new folder (php must have access rights) and install neoan3:
 
 `neoan3 new app [your-project-name]` 
 
 Then run our installation script:
 
 `neoan3 install https://neoan.us/vast-n3/master/`
 
 Setup credentials:
 
 `php setup.php`
 
 Migrate models:
 
 `neoan3 migrate models up`
