# Rollercoaster Security

## Some context

This is a really simple project. The main reason I'm giving you this is so we can have all the tools we need installed.

The next (and last) project we're working on is going to be SUPER cool and a lot more useful to the world.

## This project

We need to write a software to be the security in front of a rollercoaster ride. We need to only admit people if they're over 18 and over a certain height.

# Installation instructions

## Download the code

1. Go to [this site](https://github.com/Siyer2/rollercoaster-ride)
2. Hit the green button that says `CODE`
3. From the dropdown, click `Download ZIP`
4. Extract the ZIP file and store the code in a convenient place you can find

## Install Node.js

If you are using Windows, [click here.](https://nodejs.org/dist/v16.15.1/node-v16.15.1-x86.msi)

If you are using Mac, [click here.](https://nodejs.org/dist/v16.15.1/node-v16.15.1.pkg)

A setup wizard will start installing. Simply follow the wizard to get it installed.

**To confirm it's working, do this:**

WINDOWS: Open your Command Prompt (this is an application that's already been installed on your computer. Simply search for Command Prompt). Then type `node --version` and hit ENTER. You should see something like this:

```
v18.3.0
```

MAC: Open your Terminal (this is an application that's already been installed on your computer. Simply search for Terminal). Then type `node --version` and hit ENTER. You should see something like this:

```
v18.3.0
```

## Getting to the code

If you are using a WINDOWS, do the following in Command Prompt. MAC users use Terminal.

1. Open up your Command Prompt/Terminal
2. Type in `cd ` but don't press ENTER just yet
3. Find the code folder we extracted earlier in My Computer/Finder
4. Drag and drop the entire folder into Command Prompt/Terminal. It'll now say something like:

```
cd /Users/syamiyer/mentoring/rollercoaster-ride
```

5. Hit ENTER

Awesome! Now, out computer knows we are looking at our code files. And we can run it now too.

## Running the code

Simply type `npm start` in your Command Prompt/Terminal and hit ENTER.

The code will ask you your age. Put in a number, hit ENTER and see what happens.

## Your challenge

Rather than just telling someone what their age is, our software needs to tell them whether they can enter the ride or not. If your under 18, then you need to tell them they are not allowed, but if they are older, then they can go in.

To change the code, open the code folder in your My Computer/Finder. Open the file called `index.ts` with Notepad if you're using WINDOWS or TextEdit if you're using MAC (you'll need to right-click and then click Open With... then select Notepad/TextEdit).

Change the file. Save the file. Then test it out again by running `npm start` in your Command Prompt/Terminal!
