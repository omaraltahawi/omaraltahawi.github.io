---
title: Autonomous Line Follower
summary: A small robot with a PID controller tuned to follow tight curves at speed — built for a university competition.
year: 2023
role: Team of 3 · Control systems
tags: [Robotics, Control, C++]
cover: /assets/images/projects/robot.svg
featured: true
links:
  - name: Video
    url: https://www.youtube.com/
---

> **Placeholder project.** Replace this text with your own write-up.

## The problem

Follow a black line on a white track as fast as possible without losing it on sharp corners.

## Approach

Explain the sensor array, the control loop and how you tuned it.

```cpp
float error = target - position;
integral += error * dt;
float output = Kp * error + Ki * integral + Kd * (error - lastError) / dt;
```

## Result

Placed 2nd out of 18 teams. *(Replace with your real outcome.)*
