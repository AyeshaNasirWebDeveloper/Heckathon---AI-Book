---
sidebar_position: 10
---

# Hardware Requirements

This course is technically demanding. It sits at the intersection of three heavy computational loads: Physics Simulation (Isaac Sim/Gazebo), Visual Perception (SLAM/Computer Vision), and Generative AI (LLMs/VLA).

Because the capstone involves a "Simulated Humanoid," the primary investment must be in High-Performance Workstations. However, to fulfill the "Physical AI" promise, you also need Edge Computing Kits (brains without bodies) or specific robot hardware.

## 1. The "Digital Twin" Workstation (Required per Student)

This is the most critical component. NVIDIA Isaac Sim is an Omniverse application that requires "RTX" (Ray Tracing) capabilities. Standard laptops (MacBooks or non-RTX Windows machines) will not work.

- **GPU (The Bottleneck):** NVIDIA RTX 4070 Ti (12GB VRAM) or higher.
  - **Why:** You need high VRAM to load the USD (Universal Scene Description) assets for the robot and environment, plus run the VLA (Vision-Language-Action) models simultaneously.
- **Ideal:** RTX 3090 or 4090 (24GB VRAM) allows for smoother "Sim-to-Real" training.
- **CPU:** Intel Core i7 (13th Gen+) or AMD Ryzen 9.
  - **Why:** Physics calculations (Rigid Body Dynamics) in Gazebo/Isaac are CPU-intensive.
- **RAM:** 64 GB DDR5 (32 GB is the absolute minimum, but will crash during complex scene rendering).
- **OS:** Ubuntu 22.04 LTS.
  - **Note:** While Isaac Sim runs on Windows, ROS 2 (Humble/Iron) is native to Linux. Dual-booting or dedicated Linux machines are mandatory for a friction-free experience.

## 2. The "Physical AI" Edge Kit

Since a full humanoid robot is expensive, students learn "Physical AI" by setting up the nervous system on a desk before deploying it to a robot. This kit covers Module 3 (Isaac ROS) and Module 4 (VLA).

- **The Brain:** NVIDIA Jetson Orin Nano (8GB) or Orin NX (16GB).
  - **Role:** This is the industry standard for embodied AI. Students will deploy their ROS 2 nodes here to understand resource constraints vs. their powerful workstations.
- **The Eyes (Vision):** Intel RealSense D435i or D455.
  - **Role:** Provides RGB (Color) and Depth (Distance) data. Essential for the VSLAM and Perception modules.
- **The Inner Ear (Balance):** Generic USB IMU (BNO055) (Often built into the RealSense D435i or Jetson boards, but a separate module helps teach IMU calibration).
- **Voice Interface:** A simple USB Microphone/Speaker array (e.g., ReSpeaker) for the "Voice-to-Action" Whisper integration.

## 3. The Robot Lab

For the "Physical" part of the course, you have three tiers of options depending on budget.

### Option A: The "Proxy" Approach (Recommended for Budget)

Use a quadruped (dog) or a robotic arm as a proxy. The software principles (ROS 2, VSLAM, Isaac Sim) transfer 90% effectively to humanoids.

- **Robot:** Unitree Go2 Edu (~$1,800 - $3,000).
  - **Pros:** Highly durable, excellent ROS 2 support, affordable enough to have multiple units.
  - **Cons:** Not a biped (humanoid).

### Option B: The "Miniature Humanoid" Approach

Small, table-top humanoids.

- **Robot:** Unitree H1 is too expensive ($90k+), so look at Unitree G1 (~$16k) or Robotis OP3 (older, but stable, ~$12k).
- **Budget Alternative:** Hiwonder TonyPi Pro (~$600).
  - **Warning:** The cheap kits (Hiwonder) usually run on Raspberry Pi, which cannot run NVIDIA Isaac ROS efficiently. You would use these only for kinematics (walking) and use the Jetson kits for AI.

### Option C: The "Premium" Lab (Sim-to-Real specific)

If the goal is to actually deploy the Capstone to a real humanoid:

- **Robot:** Unitree G1 Humanoid.
  - **Why:** It is one of the few commercially available humanoids that can actually walk dynamically and has an SDK open enough for students to inject their own ROS 2 controllers.
