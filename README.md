# Frontend Mentor - Job listings with filtering solution

This is a solution to the [Job listings with filtering challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)



## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Filter job listings based on the categories

### Links

- Solution URL: https://github.com/borisdoginza/Job-listings-with-filtering/settings/pages
- Live Site URL: https://borisdoginza.github.io/Job-listings-with-filtering/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- vite
- tailwind css

### What I learned

async function loadJobs() {
    const response = await fetch('./data.json');
    jobs = await response.json();
    console.log(jobs)
    renderJobs();
}

function renderJobs () {
    const container = document.getElementById('jobs');
    container.innerHTML = getFilteredJobs().map(job => createCard(job)).join('');
    renderFilters();
}

### AI Collaboration

Used Claude AI for debbug and vite setting 

## Author

- Frontend Mentor - [@borisdoginza](https://www.frontendmentor.io/profile/borisdoginza)

