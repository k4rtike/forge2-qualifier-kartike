# Forge2 Qualifier — AI Agent Powered Kanban Board

## Overview

This project demonstrates a two-agent architecture built for the Forge2 Qualifier.

Hermes acts as the orchestration layer ("Brain") and OpenClaw acts as the execution layer ("Hands"). Communication between agents occurs through Slack channels, while the final application is a deployed Kanban board built using React, Laravel and SQLite.

---

## Architecture

Human User
↓
Slack (#sprint-main)
↓
Hermes Agent (Orchestrator)
↓
Task Assignment
↓
OpenClaw (Coding Agent)
↓
Code Generation / Execution
↓
GitHub Repository

Application Stack:

React + Vite Frontend
↓
Laravel REST API
↓
SQLite Database
↓
Render Deployment

---

## Models Used

### Hermes Agent (Brain)

Model: Gemini 2.5 Flash

Responsibilities:

* Planning
* Task decomposition
* Memory management
* Autonomous execution
* Status reporting

### OpenClaw (Hands)

Model: Gemini 2.5 Flash

Responsibilities:

* Code generation
* Debugging
* File modification
* Build execution

Reasoning:

The qualifier build was optimized around free-tier availability, fast iteration speed, and reliable execution.

---

## Qualifier Requirements Demonstrated

### Memory Recall

Hermes successfully recalls information provided in earlier interactions.

### Skill Firing

Custom SKILL.md files trigger automatically when matching tasks are detected.

### Plan Before Action

Hermes generates a task execution plan before delegating work.

### Autonomous Run

A scheduled task automatically posts progress updates every 10 minutes.

### OpenClaw Coding Workflow

Task Assignment
→ Code Generation
→ Execution
→ Result Reporting
→ Revision Request
→ Updated Result

### Slack Communication

All agent communication is visible through Slack channels.

---

## Slack Channels

* #sprint-main
* #agent-coder
* #agent-log

---

## Project Features

### Backend

* Laravel REST API
* CRUD board operations
* SQLite database
* Render deployment

### Frontend

* React + Vite
* Dynamic board loading
* Live API integration
* Board creation from UI
* Interactive board selection

---

## Local Setup

### Backend

```bash
cd backend
composer install
php artisan migrate
php artisan serve
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## Agent Configuration

Hermes Configuration:

* hermes.config.json

OpenClaw Configuration:

* openclaw.config.json

Skills:

* skills/status-report/SKILL.md

---

## Live Deployment

Frontend:

https://forge2-qualifier-kartike.vercel.app/

Backend API:

https://forge2-qualifier-kartike.onrender.com/api/boards

---

## Repository Structure

backend/
frontend/
skills/
agent-log.md
README.md

---

## Demo Video

[https://drive.google.com/file/d/1c1w1ls0BHQX7Mdg34edFmr9KedqynXF3/view?usp=drive_link]

---

## Screenshots

* Memory Recall
* Skill Execution
* Autonomous Run
* Slack Communication
* OpenClaw Task Loop

---

## Author

Kartike Gupta

Forge2 Qualifier Submission
