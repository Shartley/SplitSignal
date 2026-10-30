# Split Signal

Play live: https://split-signal-crew-escape.tealelk64.chatgpt.site

A cooperative space-station escape game for 2–6 players. Players join with a room code and no login. Each role receives private clues; the crew has ten minutes to restore three systems and confirm launch together.

## Play
Create a mission, share the invite link, and gather at least two players on separate devices. Talk in person or over a voice call. Each player keeps their screen private and describes their clues. Any player can submit codes. Mistakes cost 10 seconds; hints cost 15 seconds. Everyone must confirm the final launch.

## Stack and synchronization
React / Vinext on Cloudflare Workers, with D1 storage. Clients poll server state once per second. Atomic revision checks prevent concurrent actions from overwriting one another. Answers and other roles' clues stay on the server. Session tokens persist in the current browser tab for reconnects. Rooms expire after 24 hours.

## Development
Requires Node 22.13+.
Run npm ci, npm run db:generate, and npm run dev.
Configure a D1 binding named DB in .openai/hosting.json and apply the generated migrations to your local database before testing.
Run node scripts/test-game.mjs for the multiplayer logic test.
Build with the Sites build-site.mjs helper.

## Hosting
GitHub Pages alone serves static files and cannot run this game's multiplayer server. Use the deployed Sites URL, or deploy the Worker and D1 database on Cloudflare. A GitHub repository can hold this source.

