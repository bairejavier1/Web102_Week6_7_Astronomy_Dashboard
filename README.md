# Web Development Project 6 - *AstroDash*

Submitted by: **Baire Diaz**

This web app: **AstroDash is a responsive, user-friendly weather dashboard built with React that transforms raw forecast data into delightful, interactive insights. Users can search by condition, explore moon illumination, and view detailed forecast entries via clickable rows powered by semantic, date-based routing. The detail view enriches each entry with temperature feels, humidity, wind dynamics, and cloud coverage—plus playful summaries and fun facts to brighten the day ☀️💨🌧️**

Time spent: **4** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **Clicking on an item in the list view displays more details about it**
  - Clicking on an item in the dashboard list navigates to a detail view for that item
  - Detail view includes extra information about the item not included in the dashboard view
  - The same sidebar is displayed in detail view as in dashboard view
  - *To ensure an accurate grade, your sidebar **must** be viewable when showing the details view in your recording.*
- [x] **Each detail view of an item has a direct, unique URL link to that item’s detail view page**
  -  *To ensure an accurate grade, the URL/address bar of your web browser **must** be viewable in your recording.*
- [x] **The app includes at least two unique charts developed using the fetched data that tell an interesting story**
  - At least two charts should be incorporated into the dashboard view of the site
  - Each chart should describe a different aspect of the dataset


The following **optional** features are implemented:

- [x] The site’s customized dashboard contains more content that explains what is interesting about the data 
  - e.g., an additional description, graph annotation, suggestion for which filters to use, or an additional page that explains more about the data
- [x] The site allows users to toggle between different data visualizations
  - User should be able to use some mechanism to toggle between displaying and hiding visualizations 

  
The following **additional** features are implemented:

* [x] List anything else that you added to improve the site's functionality!
🔗 Semantic Routing: Replaced index-based URLs with date-based paths (/details/YYYY-MM-DD) for clearer navigation and deep linking.

- 🧠 Synced Detail Views: Passed enriched forecast data via React Router state for consistent, instant rendering without re-fetch delays.

- 🎨 Forecast Insight Generator: Added playful, personalized weather summaries with emoji and fun facts based on conditions.

- 💡 Conditional UX Tips: Detail views suggest helpful actions (e.g. bring an umbrella or sunscreen) depending on forecast attributes.

- 📊 Chart Toggle Feature: Users can show/hide temperature trend and condition distribution charts to customize their dashboard view.

- 🎯 Expanded Forecast Data: Dashboard entries now include additional attributes like humidity, pressure, wind speed/direction, and cloud coverage.

- ♻️ Live Refresh & Search Filter: City selection and condition filtering update forecasts in real-time with refined moon illumination filtering.

- 🧪 Visual Feedback: Display indicators for loading state, last updated time, and empty search results with intuitive messaging.

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='http://i.imgur.com/link/to/your/gif/file.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />


GIF created with Loom


## Notes

Describe any challenges encountered while building the app.

- Navigating import path errors after reorganizing the component file structure in React

- Ensuring the forecast detail view correctly matched the selected dashboard item, especially after introducing filtered datasets

- Refactoring routing logic to transition from index-based URLs to readable date-based paths

- Passing enriched forecast data through React Router without triggering redundant fetch calls

- Coordinating consistent display of shared components (e.g., header, sidebar, cards) across dashboard and detail views

- Handling forecast entries with missing or placeholder data, like moonrise times or unavailable moon phases

- Designing chart components that remain responsive and informative with varying data densities

- Creating playful yet clear forecast summaries while accounting for diverse weather conditions

- Implementing real-time search filtering that gracefully handles no-match results and edge cases

- Balancing feature depth with usability — especially when adding toggleable charts and extra details without cluttering the UI

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
