---
title: "Self-Hosted Debian Homelab"
summary: A repurposed PC running my own private cloud on Debian (22 Docker containers for photos, music, ad-blocking, file shares, finances, notes and local AI) reachable from anywhere over Tailscale.
date: April 2026   # placeholder month: set the real one
role: Personal project
tags: [Linux, Docker, Self-Hosting]
cover: /assets/images/projects/homelab.svg
featured: true
---

My homelab is a personal project to replace the cloud subscriptions I'd come to rely on with services I run and control myself. It's an old PC given a second life as a **Debian** server. It holds my photos, music, files, notes and finances, it blocks ads for the whole house, and it's reachable securely from anywhere.

## The setup

- **Hardware:** a repurposed PC. It doesn't need to be new, it needs to be always on and reasonably efficient.
- **OS:** Debian, chosen for being stable and predictable on a machine that should just run
- **Containers:** **22 Docker containers**, all managed through **Portainer**. Each app is isolated with its own volumes, so I can update, roll back or remove one without touching the others.
- **Access:** **SSH** for administration, plus **Tailscale**, which puts the server on a private WireGuard-based network shared with my devices. I can reach everything from outside the house **without any port forwarding** on my router.

## What it runs

**Immich: photos and videos.** A self-hosted replacement for Google Photos. Phones back up automatically, and the library lives on my own disks.

**Local AI for faces and image search.** Immich's **machine-learning container** runs on the server itself, grouping photos by **face** and enabling smart search ("beach", "dog", "receipt"). The models run locally, so my photos and the face data built from them never leave the house.

**Navidrome: music streaming.** My own music library streamed to any device, Spotify-style, with no subscription.

**Pi-hole: network-wide ad blocking.** The server acts as the home network's DNS, blocking ads and trackers on every device, including ones that can't run an ad blocker.

**Samba shares: central storage.** Shared folders that every computer in the house can open like a local drive. They're the central place for files and backups from my other machines.

**Sure: personal finance.** A self-hosted finance app for tracking accounts and spending, keeping sensitive financial data off third-party servers.

**Obsidian Self-hosted LiveSync: notes everywhere.** A **CouchDB** instance on the server syncs my Obsidian vaults live across laptop and phone. It's my own sync service instead of a paid one.

## Keeping an eye on it

- A **Homepage dashboard** is the front door: one start page linking every service, with status at a glance
- **Beszel** tracks the machine's health, including CPU, memory, disk and per-container usage, so I notice a full disk or a misbehaving container before it causes problems

## Backups

Running my own cloud means I'm also responsible for not losing anything. **Scheduled backups to an external drive** keep a second copy of the data that matters, such as the photo library, notes and finance data, separate from the server's main disk.

## Catching a dying drive

One of the server's hard drives started showing signs of failure. Rather than wait for it to die:

1. **SMART analysis**: I read the drive's own health counters to confirm the problem was the disk itself, not a cable or the filesystem
2. **badblocks testing**: I scanned the surface to see how far the damage had spread
3. **Full data migration**: I moved everything off the failing drive while it could still be read
4. **Replacement**: I swapped in a new drive and restored the system to full reliability

No data was lost. It's also why monitoring and backups get their own sections on this page.

## Local AI on a GPU machine

Alongside the homelab, I experiment with **local AI inference** on a second machine with a high-end GPU, networked to the server:

- **LM Studio** running **Qwen** models as a private, local chat assistant
- **Whisper** for speech-to-text transcription
- Comparing what **GPU-accelerated inference** makes practical locally, without sending anything to a cloud API

Keeping the always-on server and the power-hungry GPU machine separate means the homelab stays efficient, while the heavy models are there when I need them.

## What I learned

- **Containers make experimenting cheap.** Trying a new service is a few minutes in Portainer, and removing it leaves nothing behind.
- **Networking is most of the work.** DNS with Pi-hole, private access with Tailscale, and permissions on shared folders taught me more about how networks actually behave than any course.
- **Hardware fails, so plan for it.** The failing drive was a real test, and it showed that early warnings and a migration plan beat recovering from a dead disk.
- **Self-hosting is a responsibility.** Updates, monitoring and backups aren't optional extras. They're what separates a homelab from a single point of failure for everything I own.
