# Complete the Lyrics — React Router Laboratory Activity

This single page react application was made with Vite and `react-router-dom` that lets users select between four singers using URL routes and add lyrics to a shared board.

---

## How to Install and Run
1. Extract the Project Folder and open the git bash terminal.

2. Change the directory to the 'complete-the-lyrics' folder "cd complete-the-lyrics".

3. Install dependencies with "npm install". Additionally, in the same folder, install react-router-dom with "npm install react-router-dom".

4. Start the development server with "npm run dev".

5. Open the URL shown in the run terminal (http://localhost:5173/ by default).

## How useParams and Link/Navlink Work

1. Link and NavLink: Both of these components render <a> elements that intercept click events and update the browser's URL using the HTML5 History API without needing a full-age reload. This keeps the client-side state (for ex. previously entered lyrics) intact across url changes. NavLink extends Link by providing an isActive state, allowing for the active singer tab to show a distinct highlight style.

2. useParams: A React Router hook used inside SingerPage.jsx to read dynamic segments from the active URL. For example:
    using route pattern /singer/:singerId, calling const { singerId } = useParams() grabs the current ID (e.g "first" or "second"), allowing one reusable component to look up and render the matching singer's name, color theme, and lyric input from src/data/singers.js.

Sources for reference:
https://www.geeksforgeeks.org/reactjs/difference-between-navlink-an-link/
https://reactrouter.com/api/components/NavLink
https://reactrouter.com/api/hooks/useParams
https://www.geeksforgeeks.org/reactjs/reactjs-useparams-hook/
https://medium.com/@SohamDave08/understanding-useparams-and-usesearchparams-in-react-router-a-beginners-guide-6faaf0534187



## Reflection Questions

1. Why is switching singer views with useState alone not equivalent to routing? 
    Using useState by itself only changes the internal component memory while leaving the browser URL static. So, without routing (I'll use the project as an example), users can't bookmark a specific singer's view, cannot share a direct link to /singer/first, can't navigate backwards and forwards using the browser's back and forward buttons, nor refresh the browser on a specific view without the screen resetting. 

2. How does useParams allow a single component to support multiple singers? 
    useParams() reads the dynamic :singerId parameter straight from the URL path during render time. Instead of hardcoding the four separate singer pages, for reference, SingerPage.jsx uses the extracted ID to query the singers array (singers.find(s=> s.id === singerId) ) and automatically populate the singer's name, color, and lyric input.

3. What happens when a user opens /singer/unknown directly? 
    SingerPage.jsx searches singers.js for a matching id, receives 'undefined', then hits the if statement ( if (!singer)), which will render the NotFound component with the Singer not found message and a link back to the Home route.

4. Why should navigation use Link/NavLink rather than ordinary anchor tags for internal routes?
    Standard HTML <a href="..."> tags force the browser to create an HTTP request and reload the whole page, wiping out in-memory React states (e.g the lyrics on the board) and redownloading the application assets. This is why Link and NavLink handle navigation client-side so URL changes are pretty much instant and the app state is preserved.