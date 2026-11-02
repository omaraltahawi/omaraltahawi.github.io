---
title: "Scouts F1-Style RC Cars"
summary: Four 3D-printed, ESP32-powered F1-style remote-control cars and controllers, designed so young Scouts could assemble them without tools, then raced at a 2-day event for 100+ Scouts.
date: July 2026   # placeholder month: set the real one
role: Design, electronics & firmware
tags: [Fusion 360, ESP32, 3D Printing]
cover: /assets/images/projects/scouts-rc-cars-grid.webp
featured: true
---

A hands-on engineering activity for Scouts: build and race your own F1-style remote-control car. I designed, built and programmed four complete car-and-controller sets, then ran a two-day race event with them for **more than 100 Scouts**.
## Designing for small hands

I started from open-source F1 chassis and controller models and reworked them in **Fusion 360**, aiming for two things:

- **Space for the electronics.** The original shells weren't designed to hold a microcontroller, a motor driver and a power supply, so I redesigned them to fit and protect the boards.
- **No tools needed.** The participants were young, so every car and controller can be **put together and taken apart by hand**. Assembling the car is part of the activity, and the design has to survive being taken apart again and again.

Each set is printed in its own colour, so every team can spot its car and controller at a glance.

## Electronics

Each car and controller has a **custom board** I built from:

- An **ESP32 dev board** as the brain
- A **motor driver** to run the motors
- A **buck converter** to step the battery voltage down for the electronics

The parts are soldered together and connected with **simple, hard-to-get-wrong connectors**, so a Scout can plug things in without needing to understand the wiring.

## Wireless link

The cars and controllers talk over **ESP-NOW**, Espressif's protocol for sending messages directly between ESP32s. I programmed it in the Arduino IDE. ESP-NOW connects one ESP32 straight to another with no Wi-Fi router or pairing app, which keeps four cars and four controllers simple to manage at an outdoor event.

Before the event I **fully tested every unit**, cars and controllers, to make sure all four sets were ready to race.

## Race weekend

Over **two days**, more than **100 Scouts** built and raced the cars. Scout leaders gave positive feedback on how engaged the young people were and on what they learned.

## What I learned

Designing for children changes the priorities. The best design isn't the fastest car, it's the one a young Scout can put together correctly on the first try. Connectors and assembly order turned out to matter as much as the electronics.
