# timeonthejob

[![Build Status](https://travis-ci.org/mattstabeler/timeonthejob.svg)](https://travis-ci.org/mattstabeler/timeonthejob)
[![Code Climate](https://codeclimate.com/github/mattstabeler/timeonthejob/badges/gpa.svg)](https://codeclimate.com/github/mattstabeler/timeonthejob)


[ ![Codeship Status for mattstabeler/timeonthejob](https://codeship.com/projects/6f4405c0-a70f-0132-f240-466e34a6b6a7/status?branch=master)](https://codeship.com/projects/67140)

[View Site](https://timeonthejob.herokuapp.com/)

A simple timer

Install yeoman and associated dependencies.

    npm install -g yo grunt-cli gulp

Pull down the source

Install bower and Npm things

    npm install

    bower install

Serve up the app

    grunt serve

Run the tests 

    grunt test

Build 

    grunt

# Heroku
the Procfile is set up to serve using apache+php - but actually it's just html+css+js. There are multiple build packs configured to 
1 - generate dist folder (minify, uglify, CDNify and Imageminify the source into a bundle)
2 - setup the heroku server for apache+php. 

Coming soon:

Create a PHP API with unit tests and get it to build auto-magically

