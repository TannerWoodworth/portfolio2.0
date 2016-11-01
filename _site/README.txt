REQUIREMENTS:

  - Ruby
  - node.js

Test if these exist by running the following commands:
  For ruby:
    $ gem -v

  For node.js:
    $ npm -v


GETTING STARTED:

  1. Install bundler, a package manager for ruby. This will install all the
  neccessary gems we need including jekyll.
    $ gem install bundler

  2. Tell bundler to download all your gems from your root dir (Gemfile)
    $ bundle install

  3. Install neccessary npm plugins for front-end tasks (package.json).
    $ npm install

  4. Install gulp globally (you may need sudo)
    $ npm install -g gulp


DEVELOPING:
    
  USING GULP (gulpfile.js):
  
    Uses a combination of gulp tasks (gulpfile.js) above and jekyll serve tasks 
    to run in succession.
    
    #-------WATCH MODE---------- (RECOMMENDED DURING DEVELOPMENT)
    Clean and generate site, watch for changes in site and less, (Uses the Jeckyll server):
    - gulp srv
    
    #-------WATCH PRODUCTION MODE----------
    Getting all the files ready for production. Such as minifying JS, HTML and css...:
    - gulp srvp
    
    #-------RUN BUILD--------------
    Just run a clean and build for the site
    - gulp bld
    
    #-------RUN BUILD PRODUCTION--------------
    Just run a clean and build for the site
    - gulp bldp

  TO STOP ANY WATCH COMMANDS:
  
    In the command line.
    [control]+['C']


GIT IGNORES (.gitignore):

  In order to reduce the size of the repo we ignore "_site", Jekyll will
  generate you a fresh one using command from above
  ($ bundle exec jekyll build). We also ignore "node_modules" which generates
  after the initial "npm install". Below is the full list:

  # Ignore
  _site
  node_modules
  .jekyll-metadata
  /files
  /fonts
  /images
  /js
  /css


JEKYLL IGNORES (_config.yml):

  exclude: [vendor, "less", "Gemfile", "Gemfile.lock", "gulpfile.js", "package.json", "README.txt", "node_modules", ".c9"]
  

C9 SITE URL:

https://cga-1501-online-annual-report-informatics-studio.c9users.io/

