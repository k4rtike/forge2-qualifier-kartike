# Architecture

## Agent Roles
- **Hermes** (Brain): Orchestrates tasks, holds memory, runs cron jobs, assigns work to OpenClaw via #agent-coder
- **OpenClaw** (Hands): Receives coding tasks, writes and executes code, reports results back

## Slack Channel Scheme
- #sprint-main: Human gives goals to Hermes
- #agent-coder: Hermes assigns tasks to OpenClaw
- #agent-log: Raw agent activity and audit trail

## Model Routing
- Hermes → gemini-2.5-flash (needs 1M token context for orchestration and memory)
- OpenClaw → gemini-2.5-flash (fast code execution)
- Reasoning: Gemini chosen over Groq because Hermes requires minimum 64k context window

## Workflow
1. Human posts goal in #sprint-main
2. Hermes plans and breaks into tasks
3. Hermes assigns coding task to OpenClaw in #agent-coder
4. OpenClaw writes code, runs it, reports back
5. Human reviews and approves dangerous commands
6. Hermes posts status updates autonomously via cron