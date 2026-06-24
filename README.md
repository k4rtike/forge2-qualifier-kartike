# Forge2 Qualifier — Kanban Board

Two-agent AI system (Hermes + OpenClaw) that built this Trello-style Kanban board.

## Models Used
- Hermes (Brain): gemini-2.5-flash — chosen for 1M token context window
- OpenClaw (Hands): gemini-2.5-flash — handles code execution

## Live URLs
- Frontend: YOUR_VERCEL_URL_HERE
- Backend API: https://forge2-qualifier-kartike.onrender.com/api/boards

## Run Locally
### Backend
cd backend
php artisan migrate
php artisan serve

### Frontend
cd frontend
npm install
npm run dev

## Agent Setup
- Hermes config: hermes.config.json
- OpenClaw config: openclaw.config.json
- Slack channels: #sprint-main, #agent-coder, #agent-log
- Skills: skills/status-report/SKILL.md
- Cron job: posts progress every 10 minutes autonomously

## Video Walkthrough
[Demo Video](YOUR_LOOM_LINK_HERE)