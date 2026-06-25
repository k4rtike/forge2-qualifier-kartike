---

name: status-report
description: Automatically generate a structured project progress report and post updates in Slack using the Forge2 reporting format.
-------------------------------------------------------------------------------------------------------------------------------------

# Status Report Skill

## Purpose

This skill is triggered whenever a human requests:

* status
* status report
* progress
* project update
* sprint update
* what is the current state

The goal is to provide a concise and actionable project update using the Forge2 reporting format.

---

## Inputs

Gather information from:

* Current project state
* Previous task history
* Agent memory
* Recent completed actions
* Pending tasks
* Human approval requirements

---

## Execution Steps

1. Review recently completed work.
2. Identify remaining tasks.
3. Identify blockers or decisions requiring human approval.
4. Generate a structured update.
5. Post the update to Slack if connected.

---

## Output Format

Always respond using exactly these sections:

### What I Did

List completed tasks, deployments, fixes, implementations, testing, or agent actions.

### What's Left

List unfinished work, pending implementations, validation steps, documentation tasks, or deployment actions.

### What Needs Your Call

List decisions, approvals, priorities, architecture choices, deployment choices, or any human intervention required.

---

## Example

What I Did

* Created Laravel API
* Built React frontend
* Connected database
* Deployed backend to Render

What's Left

* Final documentation review
* Submission packaging

What Needs Your Call

* Approve final deployment for submission

---

## Success Criteria

A successful execution must:

* Be concise
* Reflect current project state
* Highlight remaining work
* Clearly identify human decisions
* Follow the exact Forge2 reporting structure