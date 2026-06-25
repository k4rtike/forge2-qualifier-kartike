# Architecture — Forge2 Qualifier

## System Overview

This project demonstrates a multi-agent workflow using Hermes Agent as the orchestrator and OpenClaw as the coding agent.

The goal was to build and deploy a Kanban-style task management application while maintaining transparent agent communication through Slack.

---

## Agent Roles

### Hermes Agent (Brain / Orchestrator)

Responsibilities:

* Task planning and decomposition
* Memory recall across sessions
* Automatic skill execution
* Autonomous scheduled reporting
* Human approval management
* Delegation of coding work to OpenClaw

Model:

gemini-2.5-flash

Reason:

Large context window and fast planning capabilities.

---

### OpenClaw (Hands / Coding Agent)

Responsibilities:

* Code generation
* File editing
* Command execution
* Testing and debugging
* Reporting completion status

Model:

gemini-2.5-flash

Reason:

Fast code generation and execution.

---

## Slack Communication Architecture

Channels:

### #sprint-main

Human ↔ Hermes

Used for:

* Goals
* Planning
* Approvals
* Status requests

### #agent-coder

Hermes ↔ OpenClaw

Used for:

* Task assignment
* Progress reporting
* Coding requests

### #agent-log

Audit Trail

Used for:

* Agent actions
* Execution logs
* System events

---

## Model Routing Strategy

| Task Type        | Agent    | Model            |
| ---------------- | -------- | ---------------- |
| Planning         | Hermes   | gemini-2.5-flash |
| Memory Recall    | Hermes   | gemini-2.5-flash |
| Skill Execution  | Hermes   | gemini-2.5-flash |
| Code Generation  | OpenClaw | gemini-2.5-flash |
| Debugging        | OpenClaw | gemini-2.5-flash |
| Status Reporting | Hermes   | gemini-2.5-flash |

---

## Workflow

1. Human posts objective in #sprint-main
2. Hermes generates a plan
3. Hermes decomposes work into tasks
4. Hermes assigns coding tasks to OpenClaw
5. OpenClaw generates and executes code
6. OpenClaw reports completion
7. Human reviews output
8. Hermes publishes status updates
9. Autonomous cron task continues reporting progress

---

## Quality Gate

Before deployment:

* Backend API tested
* Database migration tested
* Frontend tested against live API
* Human approval required before final deployment

---

## Memory Demonstration

Hermes successfully recalled:

* Project name
* Repository information
* Deployment targets
* Previous implementation steps

Memory persistence enabled.

---

## Skill Demonstration

Custom Skill:

skills/status-report/SKILL.md

Automatically generates:

* What I Did
* What's Left
* What Needs Your Call

---

## Autonomous Run Demonstration

Hermes created and executed:

Forge2 Kanban Progress Update

Frequency:

Every 10 minutes

Purpose:

Automatic project progress reporting into Slack.

---

## Architecture Diagram

Human
│
▼
#sprint-main
│
▼
Hermes Agent (Orchestrator)
│
├── Memory
├── Skills
├── Planning
├── Cron Jobs
│
▼
#agent-coder
│
▼
OpenClaw (Coding Agent)
│
├── Code Generation
├── Execution
├── Testing
│
▼
Laravel API + SQLite
│
▼
React Frontend
│
▼
Vercel Deployment

---

## Human Approval Loop

Human Approval Required For:

* Architecture decisions
* Deployment actions
* Final submission

This ensures all critical actions remain under human supervision.
