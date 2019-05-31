# Teachable frontend takehome

## TODOS

1. Set up npm copmonent libraries- material design component library  to allow quick prototyping ✔️
2. Configure design scheme with nice looking font and color scheme (containing red for ruby) ✔️
3. Basic architecture/ navigation
    * Header to contain app title-I've decided to give the app a working title "Gemmy", for better or worse
    * Set up 2 views: "Search Gems" and "My Gems"
    * Index loads "Search Gems" view
    * Set up navigation for the 2 views (react router)
4. Data layer (redux): 
    * Actions for search functionality - request, success, and failure
    * Actions for gem storage functionality - save, remove
    * Redux reducers for "searchGems" and "myGems"
    * Mock data & Jest tests (important for designing against 3rd party APIs)
8. Implement "Search Gems" functionality:
    * Create text input with search icon button and "Search Gems" label
    * Show loader & disable form while results are fetching
    * Show "No gems found" message in the case of zero results
    * Show "Sorry, there was an error" in the case of network error
    * Search result component
      * Show name and version of ruby gem
      * Implement "Save to My Gems" functionality via star icon button (similar to Google bookmark functionality)
      * If result is already saved, star icon is shown in unsaved (gray) state, and "Remove" button appears
      * Save/ remove to localStorage
9. Implement "My Gems" page functionality:
   * Stored gem component similar to search result component- user can save and unsave


Nice-to-haves

1. Index page should load "My Gems" if the user has gems, else the search page
2. Header to contain simple diamond SVG for a logo
3. Selenium/ cucumber end-to-end testing
4. Build static files on associated github page
5. Research and handle any limits on localStorage capacity if the user saves a lot of gems
6. Cache search results in localStorage
7. "My Gems" page and navigation title indicate saved gem count
8. "Activity" page pulling from /api/v1/activity/latest
9. Gem component expandable to show extra data returned by the api (dependencies, downloads, info, etc)
10. Allow user to login so we can store their gems more permanently on our server

---
---

Preserving original README below:

---
---
If you're reading this, you're likely a candidate for a frontend job at Teachable. You're going to be building a search application that takes a user's search query, hits the [Ruby Gems](https://rubygems.org/) search API endpoint, and displays the results in a list view with some added functionality (detailed below).

The application, once completed, should meet the following criteria:

1. It have a search box that lets users search for Ruby Gems.
2. It should display the results of the search in a list.
3. Each Gem should have a button that lets users "save" and "unsave" Gems.
4. It should have a way to view saved Gems, even after the browser window is refreshed (localStorage is a fine for this).

Here's a few things we'll look for in our evaluation.

1. Clean, well-organized code.
2. Sensisble architecture choices that could scale well.
3. A clean, functioning UI.
4. Bonus points if you write tests.

## Getting started

### Step 1: Fork this repo and clone it

### Step 2: Install dependencies

We have a few dependencies necessary to run the build and proxy server, the rest are up to you.

```bash
npm install
```

### Step 3: Start the development server

```bash
npm run dev
```

### Step 4: Start coding

We want to judge your ability to program UIs, not configure build tools. That's why we chose [Parcel](https://parceljs.org/) as a bundler, please consult the [documentation](https://parceljs.org/getting_started.html) if you run into any trouble.

We added a CSS file as an example, feel free to delete that.

### Step 5: Network requests

You may have noticed the server.js file at the root of this application, that's there to solve cross-origin issues when making network requests. The server automatically starts up when running "npm run dev" or "npm run start".

To see a sample request in action, run the following in your command line.

```bash
curl http://localhost:3000/api/v1/search.json?query=rails
```
