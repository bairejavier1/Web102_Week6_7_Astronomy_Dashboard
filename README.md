# Web Development Project 5 - *AstroDash*

Submitted by: **Baire Diaz**

This web app: **AstroDash is an interactive weather and astronomy dashboard that visualizes 3-hour interval forecasts alongside lunar phase insights. Powered by OpenWeatherMap and AstronomyAPI, designed for clarity, it allows users to search and filter conditions like rain, snow, or fog and adjust moon illumination thresholds to discover celestial patterns. With real-time city updates, visual tooltips, and responsive feedback, AstroDash turns raw forecast data into a seamless, science-infused exploration experience.**

Time spent: **4** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The site has a dashboard displaying a list of data fetched using an API call**
  - The dashboard should display at least 10 unique items, one per row
  - The dashboard includes at least two features in each row
- [x] **`useEffect` React hook and `async`/`await` are used**
- [x] **The app dashboard includes at least three summary statistics about the data** 
  - The app dashboard includes at least three summary statistics about the data, such as:
    - *insert details here*
- [x] **A search bar allows the user to search for an item in the fetched data**
  - The search bar **correctly** filters items in the list, only displaying items matching the search query
  - The list of results dynamically updates as the user types into the search bar
- [x] **An additional filter allows the user to restrict displayed items by specified categories**
  - The filter restricts items in the list using a **different attribute** than the search bar 
  - The filter **correctly** filters items in the list, only displaying items matching the filter attribute in the dashboard
  - The dashboard list dynamically updates as the user adjusts the filter

The following **optional** features are implemented:

- [x] Multiple filters can be applied simultaneously
- [x] Filters use different input types
  - e.g., as a text input, a dropdown or radio selection, and/or a slider
- [x] The user can enter specific bounds for filter values

The following **additional** features are implemented:

* [x] List anything else that you added to improve the site's functionality!

- Formatted 3-hour time intervals for each forecast entry, using AM/PM formatting for readability

- Dynamic moon phase integration (via AstronomyAPI), structured with fallback handling for unavailable data

- Tooltip guidance on search bar, listing all valid weather terms to improve discoverability

- Real-time “last updated” timestamp and loading indicator to give users feedback when refreshing forecasts

- Responsive search reset behavior after refreshing city data, avoiding stale results

- Dashboard headers above each column (Date, Time, Temp, Moon Phase, Condition) for clarity

- Weather condition filtering restricted to 10 approved search terms for clean user input

- Modular styling and reusable components, like Button and DashboardRow, to support scalability

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='https://cdn.loom.com/sessions/thumbnails/d5f58c71b23247059a13acb769b031b1-8f4b86b6e5c485a8-full-play.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />


GIF created with Loom 

## Notes

Describe any challenges encountered while building the app.

- Moon Phase Data Integration: Fetching accurate lunar phases via AstronomyAPI was unreliable, requiring fallback messaging and resilience in the UI when data failed to load.

- User-Friendly Filtering Logic: Building filters that only accepted meaningful weather terms demanded careful validation, tooltip guidance, and empty-state messaging for non-matches.

- Visual and Structural Clarity in Dashboard Rows: Balancing detailed content (like moon phase, condition, time) with clean layout and labeled columns involved thoughtful CSS tweaks and component coordination.

## License

    Copyright [2025] [Baire Diaz]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
